/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("phenix-web-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["phenix-web-sdk"] = factory();
	else
		root["phenix-web-sdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(105)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(LodashLight) {
    'use strict';

    return LodashLight;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(104)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert) {
    return assert;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(a,b){if(true)module.exports=b(__webpack_require__(0),__webpack_require__(41),__webpack_require__(1),__webpack_require__(4));else { var d, c; }}(this,function(a,b,c,d){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a["default"]}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=10)}([function(a,b,c){(function(c){var d,e;d=[],e=function(){"use strict";var a=function(){return"object"==typeof window?window:"object"==typeof c?c:{}};return a()}.apply(b,d),!(void 0!==e&&(a.exports=e))}).call(b,c(9))},function(b,c){b.exports=a},function(a,c){a.exports=b},function(a,b,c){var d,e;d=[c(1),c(4),c(0)],e=function(a,b,c){"use strict";function d(a,c,d){var f=this;this._ghost=a,this._stream=c,this._isUsingPlugin=d,this._events={};var g=function(a){f._loaded=!0,f._enabled=a===!0,a?j.call(f):o("Failed to create Phenix video element"),f._onReady&&f._onReady(f._enabled)};try{if(this._video=e(d),this._video.className=this._ghost.className,this._video.height=this._ghost.height,this._video.width=this._ghost.width,this._ghost.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",this._video.onunload=function(){f._loaded=!1},l.call(this),document.body&&document.body.contains||n("document.body.contains is not supported"),document.body&&document.body.contains&&document.body.contains(this._ghost)&&this._ghost.parentNode.replaceChild(this._video,this._ghost),!d)return g(!0);var h=new b;h.waitForReady(this._video,g)}catch(i){o("Error while loading Phenix RTC"+i),g(!1)}}function e(a){var b=document.createElement("video");return a&&(b=document.createElement("object"),b.type="application/x-phenix-video"),b}function f(a,b,c){if(!this._isUsingPlugin)return this._video.addEventListener(a,b,c);var d=this._events[a];d||(d=this._events[a]=[],this._loaded&&h.call(this,a)),d.push(b)}function g(a,b,c){if(!this._isUsingPlugin)return this._video.removeEventListener(a,b,c);var d=this._events[a];if(d){var e=d.indexOf(b);e>=0&&(d=d.splice(e,1),d.length>0?this._events[a]=d:delete this._events[a])}}function h(a){function b(){var b=c._events[a];if(b)for(var d=0;d<b.length;d++)b[d].apply(c,arguments)}var c=this;c._video.phenixSetEventListener(a,b)}function i(a,b){var c;document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0)):(c=document.createEventObject(),c.eventType=b),c.eventName=b,setTimeout(function(){document.createEvent?a.dispatchEvent(c):a.fireEvent("on"+c.eventType,c)})}function j(){for(var a=Object.keys(this._events),b=0;b<a.length;b++)h.call(this,a[b]);this.hookUpEvents(),k.call(this),this._video.id=this._ghost.id,this._video.style.cssText=this._ghost.cssText,this._video.className=this._ghost.className,this._video.innerHtml=this._ghost.innerHtml,this._video.width=this._ghost.width,this._video.height=this._ghost.height,this._video.autoplay=this._ghost.autoplay,this._video.muted=this._ghost.muted,this._video.defaultMuted=this._ghost.defaultMuted,this._video.volume=this._ghost.volume,this._stream&&(this._video.src=this._stream)}function k(){var b=this,d=["style"];if(a.get(c,["MutationObserver"])){var e=new MutationObserver(function(a){a.forEach(function(a){"attributes"===a.type&&a.target===b._ghost&&d.indexOf(a.attributeName)===-1&&(b._video[a.attributeName]=b._ghost[a.attributeName])})}),f={attributes:!0};e.observe(b._ghost,f)}else n("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details."),b._ghost.addEventListener?b._ghost.addEventListener("DOMAttrModified",function(a){b._video[a.target.tagName]=b._ghost[a.target.tagName]},!1):b._ghost.attachEvent("onpropertychange",function(a){b._video[a.target.tagName]=b._ghost[a.target.tagName]})}function l(){var b=this;if(a.get(c,["MutationObserver"])){var d=new MutationObserver(function(a){a.forEach(function(a){if("childList"===a.type)for(var c=0;c<a.addedNodes.length;c++){var d=a.addedNodes[c];a.target!==b._video&&(d===b._ghost?(a.target.replaceChild(b._video,b._ghost),j.call(b)):m(a.target,b._ghost)&&(b._ghost.parentNode.replaceChild(b._video,b._ghost),j.call(b)))}})}),e={childList:!0,attributes:!1,characterData:!1,subtree:!0};d.observe(document.body,e)}else n("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details."),f(b._ghost,"DOMNodeInserted",function(){b._ghost.parentNode.replaceChild(b._video,b._ghost)},!1)}function m(a,b){for(var c=b.parentNode;null!==c;){if(c===a)return!0;c=c.parentNode}return!1}var n=function(){console.log.apply(console,arguments)}||function(){},o=function(){console.error.apply(console,arguments)}||n;return d.prototype.hookUpEvents=function(){var a=this,b=this._ghost;this.addEventListener("error",function(){i(b,"error")}),this.addEventListener("mute",function(){b.muted=a._video.muted,i(b,"mute")}),this.addEventListener("unmute",function(){b.muted=a._video.muted,i(b,"unmute")}),this.addEventListener("ended",function(){b.ended=a._video.ended,i(b,"ended")}),this.addEventListener("loadedmetadata",function(){b.width=a._video.width,b.height=a._video.height,i(b,"loadedmetadata")}),this.addEventListener("loadeddata",function(){b.width=a._video.width,b.height=a._video.height,i(b,"loadeddata")}),this.addEventListener("resize",function(){b.width=a._video.width,b.height=a._video.height,i(b,"resize")})},d.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},d.prototype.getElement=function(){return this._video},d.prototype.addEventListener=function(a,b,c){f.call(this,a,b,c)},d.prototype.removeEventListener=function(a,b,c){g.call(this,a,b,c)},d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(2)],e=function(a){"use strict";function b(a){this._timeout=a||15e3}var c=new a(navigator.userAgent).detect(),d=4,e=function(){console.error.apply(console,arguments)}||console.log;return b.prototype.waitForReadyWithTimeout=function(a,b,f){var g=!1,h=1,i=h,j=function(a){g||(g=!0,b(a))},k=function l(){a.readyState===d?j(!0):a.phenixVersion?j(!0):(h=Math.min(h+1e3,2*h),i+=h,i>f?(e("Timed out while waiting for <object> to load"),j(!1)):setTimeout(l,h))};a.hasOwnProperty&&a.hasOwnProperty("onload")||"IE"!==c.browser&&e("No means of detecting when <object> is loaded"),a.onload=function(){j(!0)},k()},b.prototype.waitForReady=function(a,b){a.phenixVersion?b(!0):this.waitForReadyWithTimeout(a,b,this._timeout)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b){a.exports=c},function(a,b){a.exports=d},function(a,b,c){var d,e;d=[c(1),c(5),c(6),c(2),c(0),c(12),c(11)],e=function(a,b,c,d,e,f,g){"use strict";function h(){if(a.assign(j,f()),g.isSupported()){j.phenixSupported=!0;var b=new g,c=function(){j.RTCPeerConnection=b.getRTCPeerConnectionConstructor(),j.RTCSessionDescription=b.getRTCSessionDescriptionConstructor(),j.RTCIceCandidate=b.getRTCIceCandidateConstructor(),j.getSources=b.getSourcesDelegate(),j.getUserMedia=b.getUserMediaDelegate(),j.getStats=b.getStatsDelegate(),Function.prototype.bind?(j.attachMediaStream=b.attachMediaStream.bind(b),j.reattachMediaStream=b.reattachMediaStream.bind(b),j.isPhenixEnabled=b.isEnabled.bind(b)):(j.attachMediaStream=function(){b.attachMediaStream.apply(b,arguments)},j.reattachMediaStream=function(){b.reattachMediaStream.apply(b,arguments)},j.isPhenixEnabled=function(){return b.isEnabled()}),j.webrtcSupported=!0,j.phenixSupported=!0,j.phenixVersion=b.getVersion(),j.onLoaded&&j.onLoaded.call()};b.isEnabled()?c():b.onReady(function(a){a&&(c(),j.onload&&"function"==typeof j.onload&&j.onload())}),b.onLoaded(function(){c()})}else j.phenixSupported=!1;return j}var i=new d(navigator.userAgent).detect(),j={browser:i.browser,browserVersion:i.version,phenixSupported:!1,isPhenixEnabled:function(){return!1},onLoaded:void 0,global:e};return a.assign(h(),{shim:h})}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(0)],e=function(a){"use strict";var b=function(b){a.RTCPeerConnection=b.RTCPeerConnection,a.RTCSessionDescription=b.RTCSessionDescription,a.RTCIceCandidate=b.RTCIceCandidate};return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b){var c;c=function(){return this}();try{c=c||Function("return this")()||(0,eval)("this")}catch(d){"object"==typeof window&&(c=window)}a.exports=c},function(a,b,c){"use strict";var d,e;d=[c(7),c(8)],e=function(a,b){return a.onLoaded=function(){b(a)},a.onLoaded(),a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(1),c(5),c(6),c(4),c(3)],e=function(a,b,c,d,e){"use strict";function f(){var a=this;this._root=h(),this._version="?";var b=function(b){a._loaded=!0,a._enabled=b===!0,a._version=a._phenixRTC.phenixVersion||"?.?.?.?",q(b?"Phenix RTC "+a._version:"No Phenix RTC"),a._onReady&&a._onReady(a._enabled)};try{this._phenixRTC=i(this._root),this._phenixRTC.onunload=function(){a._loaded=!1};var c=new d;c.waitForReady(this._phenixRTC,b)}catch(e){r("Error while loading Phenix RTC"+e)}}function g(){this._root&&document.getElementById("phenixRTC")!==this._root&&(document.body.appendChild(this._root),this._onLoaded&&this._onLoaded.call(this))}function h(){var a=document.createElement("div");return a.id="phenixRTC",a.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",document.body.appendChild(a),a}function i(a){var b=document.createElement("object");return b.type="application/x-phenix-rtc",a.appendChild(b),b}function j(a,b){if(!a)throw new Error("Can not attach a stream to a undefined element");if(a.phenixVersion)return a.src=b,a;var c=new e(a,b,(!0));return c.getElement().phenixPresenter=c,c.getElement()}function k(b){var c=function(){var c=null;switch(arguments.length){case 0:c=new b;break;case 1:c=new b(arguments[0]);break;case 2:c=new b(arguments[0],arguments[1]);break;case 3:c=new b(arguments[0],arguments[1],arguments[2]);break;case 4:c=new b(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:c=new b(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);break;default:throw new Error("Unsupported number of arguments in Phenix Object Constructor")}return c.phenixAddEventListener=a.bind(l,c),c.phenixRemoveEventListener=a.bind(m,c),c};return a.forOwn(b,function(a,b){c[b]=a}),c}function l(a,c){b.stringNotEmpty(a,"name"),b.isFunction(c,"listener"),n.call(this,a),o.call(this,a,c)}function m(a,b){p.call(this,a,b)}function n(b){if(!this.events||!this.events[b]){this.events||(this.events={});var d=this.events;d[b]={observable:(new c.Observable).extend({timeout:0}),subscription:null,listeners:[]},this.phenixSetEventListener(b,a.bind(d[b].observable.setValue,d[b].observable)),d[b].subscription=d[b].observable.subscribe(function(c){var e=d[b],f=e.listeners;a.forEach(f,function(a){a(c)})})}}function o(a,b){if(!this.events||!this.events[a])throw new Error("No event observable for event: "+name);this.events[a].listeners.push(b)}function p(b,c){this.events&&this.events.events[b]&&(this.events[b].listeners=a.filter(this.events[b].listeners,function(a){return c!==a}))}var q=function(){console.log.apply(console,arguments)}||function(){},r=function(){console.error.apply(console,arguments)}||q;return f.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},f.prototype.onLoaded=function(a){this._onLoaded=a},f.prototype.isLoaded=function(){return this._loaded===!0},f.isSupported=function(){if(navigator.plugins)for(var a=navigator.plugins,b=0;b<a.length;b++)if(a[b].name.indexOf("PhenixRTC")>=0)return!0;if(navigator.userAgent&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))try{return new window.ActiveXObject("PhenixP2P.RTC"),!0}catch(c){return!1}return!1},f.prototype.isEnabled=function(){return g.call(this),this._phenixRTC&&void 0!==this._phenixRTC.phenixVersion},f.prototype.getVersion=function(){return g.call(this),this._version},f.prototype.getRTCPeerConnectionConstructor=function(){return g.call(this),k(this._phenixRTC.RTCPeerConnection)},f.prototype.getRTCSessionDescriptionConstructor=function(){return g.call(this),k(this._phenixRTC.RTCSessionDescription)},f.prototype.getRTCIceCandidateConstructor=function(){return g.call(this),k(this._phenixRTC.RTCIceCandidate)},f.prototype.getSourcesDelegate=function(){var a=this;return function(b){return g.call(a),a._phenixRTC.getSources(b)}},f.prototype.getUserMediaDelegate=function(){var a=this;return function(b,c,d){return g.call(a),a._phenixRTC.getUserMedia(b,c,d)}},f.prototype.getStatsDelegate=function(){return function(a,b,c,d){return a.getStats(b,c,d)}},f.prototype.attachMediaStream=function(a,b){return g.call(this),j.call(this,a,b)},f.prototype.reattachMediaStream=function(a,b){return g.call(this),this.attachMediaStream(a,b.src)},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(1),c(2),c(13),c(0),c(3)],e=function(a,b,c,d,e){"use strict";function f(){if(v=d.RTCPeerConnection,w=d.RTCSessionDescription,x=d.RTCIceCandidate,navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(y=a.bind(k,null,"input")),navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(z=a.bind(k,null,"output")),(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||d.getUserMedia)&&(A=g),!d.RTCPeerConnection)return t("[%s] browser version [%s] does not appear to be WebRTC-capable",u.browser,u.version);switch(u.browser){case"Firefox":t("Firefox detected",u),C=function(a,b){t("Attaching media stream");var c=a.muted;return u.version>57&&(a.srcObject=b),a.mozSrcObject=b,a.play(),c===!0&&(a.muted=!0),a},E=function(a,b){t("Reattaching media stream");var c=a.muted;return u.version>57&&(a.srcObject=b.srcObject),a.mozSrcObject=b.mozSrcObject,a.play(),c===!0&&(a.muted=!0),a},B=function(b,c,d,e){b.getStats(c,a.bind(o,this,b,d),e)},F=!0;break;case"Opera":t("Opera detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(a.bind(o,this,b,d),c,e)},F=!0;break;case"Chrome":t("Webkit detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(a.bind(o,this,b,d),c,e)},F=!0;break;case"Edge":t("Edge detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(c,a.bind(o,this,b,d),e)},F=!0;break;case"Safari":t("Safari detected",u),C=function(b,c){return a.isObject(c)&&(b.__phenixHasPlayedWebRtc=!0),b=l(b,c)},D=function(a,b){return a.__phenixHasPlayedWebRtc?(a=new e(a,b,(!1)).getElement(),a.play(),a):m(a,b)},E=n,B=function(b,c,d,e){b.getStats(c).then(a.bind(o,this,b,d),e)},F=!0;break;case"ReactNative":t("React Native detected",u),C=function(){t("attachMediaStream not supported in React Native environment")},D=function(){t("attachUriStream not supported in React Native environment")},E=function(){t("reattachMediaStream not supported in React Native environment")},B=function(b,c,d,e){b.getStats(c).then(a.bind(o,this,b,d),e)},F=!0;break;default:t("Browser does not appear to be WebRTC-capable",u)}}function g(b,c,e){var f=a.bind(h,this,b,c,e);return navigator&&a.isFunction(navigator.getUserMedia)?navigator.getUserMedia(b,f,e):d&&a.isFunction(d.getUserMedia)?d.getUserMedia(b,f,e):void 0}function h(a,b,c,d){setTimeout(function(){for(var e=d.getTracks(),f=0;f<e.length;f++){var g=e[f];if(g.onended=function(a){t(a.timeStamp,"Track",g.id,g.label,"ended")},t("Track",g.id,g.label,e[f].kind,"readyState=",e[f].readyState),"ended"===g.readyState)return i("User media not available",c,e)}var h=(a.audio?1:0)+(a.video?1:0);return e.length!==h?i("Unable to get all requested user media.",c,e):void b(d)},100)}function i(a,b,c){try{var d=new Error(a);d.code="unavailable",b(d)}finally{j(c)}}function j(a){for(var b=0;b<a.length;b++)a[b].stop()}function k(a,b){if("input"!==a&&"output"!==a)throw new Error("Unsupported device type "+a);navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices().then(function(c){var d=[];c.forEach(function(b){b.kind==="audio"+a?d.push({kind:"audio",id:b.deviceId,label:b.label}):b.kind==="video"+a&&d.push({kind:"video",id:b.deviceId,label:b.label})}),b(d)})}function l(a,b){return"undefined"!=typeof a.srcObject?a.srcObject=b:"undefined"!=typeof a.mozSrcObject?a.mozSrcObject=b:"undefined"!=typeof a.src?a.src=URL.createObjectURL(b):t("Error attaching stream to element."),a.play(),a}function m(a,b){return a.src=b,a.play(),a}function n(a,b){return a.src=b.src,a}function o(a,b,c){b(p(a,c))}function p(b,c){switch(u.browser){case"Edge":c.forEach(function(a){a.mediaType=q(b,a.codecId),a.bytesSent=s(a.packetsSent,a.mediaType),a.bytesReceived=s(a.packetsReceived,a.mediaType)});break;case"Safari":c.forEach(function(b){a.includes(b.id.toLowerCase(),"audio")&&a.includes(b.id.toLowerCase(),"rtp")&&(b.mediaType="audio"),a.includes(b.id.toLowerCase(),"video")&&a.includes(b.id.toLowerCase(),"rtp")&&(b.mediaType="video")})}return c}function q(b,c){if(c){var d;return r(b,function(b){a.startsWith(b,"video")&&a.includes(b.toLowerCase(),c.toLowerCase())&&(d="video"),a.startsWith(b,"audio")&&a.includes(b.toLowerCase(),c.toLowerCase())&&(d="audio")}),d}}function r(b,c){var d=b.localDescription.sdp.split("m="),e=b.remoteDescription.sdp.split("m=");return d.length===e.length&&a.findIndex(d,function(a,b){return c(a,b,e)})}function s(a,b){var c=parseInt(a)||0;return"audio"===b?100*c:"video"===b?1080*c:void 0}var t=function(){console.log.apply(console,arguments)},u=new b(navigator.userAgent).detect(),v=d.RTCPeerConnection,w=d.RTCSessionDescription,x=d.RTCIceCandidate,y=null,z=null,A=null,B=null,C=null,D=null,E=null,F=!1;return function(){f();var a={RTCPeerConnection:v,RTCSessionDescription:w,RTCIceCandidate:x,getSources:y,getDestinations:z,getUserMedia:A,getStats:B,attachMediaStream:C,attachUriStream:D||m,reattachMediaStream:E,webrtcSupported:F};return a.exportGlobal=function(){d.RTCPeerConnection=a.RTCPeerConnection,d.RTCSessionDescription=a.RTCSessionDescription,d.RTCIceCandidate=a.RTCIceCandidate},a}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){"use strict";var a=function(){};return a}.apply(b,d),!(void 0!==e&&(a.exports=e))}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(99),
    __webpack_require__(98)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Disposable, DisposableList) {
    return {
        Disposable: Disposable,
        DisposableList: DisposableList
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(40),
    __webpack_require__(97),
    __webpack_require__(96)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Observable, ObservableArray, ObservableMonitor) {
    'use strict';

    return {
        Observable: Observable,
        ObservableArray: ObservableArray,
        ObservableMonitor: ObservableMonitor
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(38),
    __webpack_require__(92)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Event, NamedEvents) {
    return {
        Event: Event,
        NamedEvents: NamedEvents
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(78)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(http) {
    'use strict';

    return http;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var streamEnums = {
        networkStates: {
            networkEmpty: {
                id: 0,
                name: 'NETWORK_EMPTY'
            },
            networkIdle: {
                id: 1,
                name: 'NETWORK_IDLE'
            },
            networkLoading: {
                id: 2,
                name: 'NETWORK_LOADING'
            },
            networkNoSource: {
                id: 3,
                name: 'NETWORK_NO_SOURCE'
            }
        },
        types: {
            realTime: {
                id: 0,
                name: 'RealTime'
            },
            dash: {
                id: 1,
                name: 'dash'
            },
            hls: {
                id: 2,
                name: 'hls'
            }
        },
        streamEvents: {
            playerEnded: {
                id: 0,
                name: 'playerended'
            },
            playerError: {
                id: 1,
                name: 'playererror'
            },
            stopped: {
                id: 2,
                name: 'stopped'
            }
        },
        rendererEvents: {
            ended: {
                id: 0,
                name: 'ended'
            },
            error: {
                id: 1,
                name: 'error'
            }
        }
    };

    return streamEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(103)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(getGlobal) {
    'use strict';

    return getGlobal();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(106),
    __webpack_require__(101),
    __webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Logger, ConsoleAppender, logging) {
    'use strict';

    return {
        createLogger: function() {
            return new Logger();
        }, // Base logger with nothing appended
        Logger: Logger,
        ConsoleAppender: ConsoleAppender,
        level: logging.level // Object with log levels
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var roomEnums = {
        types: {
            directChat: {
                id: 0,
                name: 'DirectChat'
            },
            multiPartyChat: {
                id: 1,
                name: 'MultiPartyChat'
            },
            moderatedChat: {
                id: 2,
                name: 'ModeratedChat'
            },
            townHall: {
                id: 3,
                name: 'TownHall'
            },
            channel: {
                id: 4,
                name: 'Channel'
            }
        },
        events: {
            memberJoined: {
                id: 0,
                name: 'MemberJoined'
            },
            memberLeft: {
                id: 1,
                name: 'MemberLeft'
            },
            memberUpdated: {
                id: 2,
                name: 'MemberUpdated'
            },
            roomUpdated: {
                id: 3,
                name: 'RoomUpdated'
            },
            roomEnded: {
                id: 4,
                name: 'RoomEnded'
            }
        }
    };

    return roomEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var memberEnums = {
        roles: {
            participant: {
                id: 0,
                name: 'Participant'
            },
            moderator: {
                id: 1,
                name: 'Moderator'
            },
            presenter: {
                id: 2,
                name: 'Presenter'
            },
            audience: {
                id: 3,
                name: 'Audience'
            }
        },
        states: {
            active: {
                id: 0,
                name: 'Active'
            },
            passive: {
                id: 1,
                name: 'Passive'
            },
            handRaised: {
                id: 2,
                name: 'HandRaised'
            },
            inactive: {
                id: 3,
                name: 'Inactive'
            },
            offline: {
                id: 4,
                name: 'Offline'
            }
        }
    };

    return memberEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event) {
    'use strict';

    var defaultPollFrequency = 500;
    var minimumPollFrequency = 15;

    function DimensionsChangedMonitor(logger, options) {
        if (!logger) {
            throw new Error("'logger' must be specified.");
        }

        this._logger = logger;
        this._dimensionsChangedEvent = new event.Event();
        this._dimensionsChangedIntervalId = null;
        this._toBeStarted = false;
        this._videoElement = null;
        this._dimensionsChangedData = {
            pollFrequency: defaultPollFrequency,
            previousWidth: 0,
            previousHeight: 0
        };

        if (options && options.pollFrequency) {
            this._dimensionsChangedData.pollFrequency = options.pollFrequency >= minimumPollFrequency ? options.pollFrequency : minimumPollFrequency;
        }

        this._renderer = null;
    }

    DimensionsChangedMonitor.prototype.start = function start(renderer, element) {
        startMonitor.call(this, renderer, element);
    };

    DimensionsChangedMonitor.prototype.stop = function stop() {
        stopMonitor.call(this);
    };

    DimensionsChangedMonitor.prototype.addVideoDisplayDimensionsChangedCallback = function addVideoDisplayDimensionsChangedCallback(callback) {
        assert.isFunction(callback, 'addVideoDisplayDimensionsChangedCallback');
        startInterval.call(this);

        return this._dimensionsChangedEvent.listen(callback);
    };

    DimensionsChangedMonitor.prototype.toString = function() {
        return 'DimensionsChangedMonitor[pollFrequency=' + this._dimensionsChangedData.pollFrequency +
            ', previousHeight=' + this._dimensionsChangedData.previousHeight +
            ', previousWidth=' + this._dimensionsChangedData.previousHeight +
            ', state=' + (this._dimensionsChangedIntervalId ? 'running' : 'stopped') + ']';
    };

    function startMonitor(renderer, element) {
        if (!element || _.isUndefined(element.videoWidth)) {
            this._logger.warn("Attempting to start dimensions changed monitor without providing proper 'video' element.");
        }

        this._renderer = renderer;
        this._videoElement = element;
        this._toBeStarted = true;
        startInterval.call(this);
    }

    function stopMonitor() {
        this._toBeStarted = false;

        if (this._dimensionsChangedIntervalId) {
            clearInterval(this._dimensionsChangedIntervalId);
            this._dimensionsChangedIntervalId = null;
        }

        this._dimensionsChangedEvent.dispose();
    }

    function startInterval() {
        // Return if either:
        // - start hasn't been called yet
        // - the interval is already running
        // - there is no callback yet
        if (!this._toBeStarted || this._dimensionsChangedIntervalId || this._dimensionsChangedEvent.size() === 0) {
            return;
        }

        var that = this;
        this._dimensionsChangedData.previousWidth = this._videoElement.videoWidth;
        this._dimensionsChangedData.previousHeight = this._videoElement.videoHeight;

        this._dimensionsChangedIntervalId = setInterval(function checkVideoDimensions() {
            if (that._videoElement.videoWidth !== that._dimensionsChangedData.previousWidth || that._videoElement.videoHeight !== that._dimensionsChangedData.previousHeight) {
                that._dimensionsChangedData.previousWidth = that._videoElement.videoWidth;
                that._dimensionsChangedData.previousHeight = that._videoElement.videoHeight;

                that._dimensionsChangedEvent.fireAsync([that._renderer, {
                    width: that._videoElement.videoWidth,
                    height: that._videoElement.videoHeight
                }]);
            }
        }, that._dimensionsChangedData.pollFrequency);
    }

    return DimensionsChangedMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var streamEnums = {
        types: {
            user: {
                id: 0,
                name: 'User'
            },
            presentation: {
                id: 1,
                name: 'Presentation'
            },
            audio: {
                id: 2,
                name: 'Audio'
            }
        }
    };

    return streamEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(13),
    __webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, stream, track) {
    'use strict';

    var streamTypes = stream.types;
    var trackStates = track.states;
    var oldPcastStreamPrefix = 'pcast://phenixp2p.com/';
    var pcastStreamPrefix = 'pcast://phenixrts.com/';

    function Stream(uri, type, audioState, videoState) {
        this.init(uri, type, audioState, videoState);
    }

    Stream.prototype.init = function(uri, type, audioState, videoState) {
        assert.isString(uri, 'uri');

        this._uri = new observable.Observable(uri);
        this._type = new observable.Observable(type, assertIsValidStreamType);
        this._audioState = new observable.Observable(audioState || trackStates.trackEnabled.name, assertIsValidTrackState);
        this._videoState = new observable.Observable(videoState || trackStates.trackEnabled.name, assertIsValidTrackState);
        this._streamId = Stream.parsePCastStreamIdFromStreamUri(uri);
    };

    Stream.prototype.getUri = function getUri() {
        return this._uri.getValue();
    };

    Stream.prototype.getType = function getType() {
        return this._type.getValue();
    };

    Stream.prototype.getObservableAudioState = function getObservableAudioState() {
        return this._audioState;
    };

    Stream.prototype.getObservableVideoState = function getObservableVideoState() {
        return this._videoState;
    };

    Stream.prototype.toJson = function toJson() {
        return {
            uri: this._uri.getValue(),
            type: this._type.getValue(),
            audioState: this._audioState.getValue(),
            videoState: this._videoState.getValue()
        };
    };

    Stream.prototype._update = function update(stream) {
        if (!_.isObject(stream)) {
            return;
        }

        if (stream.hasOwnProperty('uri')) {
            if (stream.uri !== this._uri.getValue() && matchPCastStreams(stream.uri, this._uri.getValue())) {
                this._uri.setValue(stream.uri);

                this._streamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
            }
        }

        if (stream.hasOwnProperty('audioState')) {
            this._audioState.setValue(stream.audioState);
        }

        if (stream.hasOwnProperty('videoState')) {
            this._videoState.setValue(stream.videoState);
        }
    };

    Stream.prototype.isPCastStream = function() {
        return !!this._streamId;
    };

    Stream.prototype.getPCastStreamId = function() {
        return this._streamId;
    };

    Stream.prototype.getInfo = function() {
        return parseStreamInfoFromStreamUri(this._uri.getValue());
    };

    Stream.getPCastPrefix = function() {
        return oldPcastStreamPrefix;
    };

    Stream.parsePCastStreamIdFromStreamUri = function(uri) {
        var hasPrefix = _.includes(uri, getPrefixToUse(uri));

        if (!hasPrefix) {
            return null;
        }

        return uri.replace(getPrefixToUse(uri), '').split('?')[0];
    };

    Stream.getInfoFromStreamUri = function(uri) {
        return parseStreamInfoFromStreamUri(uri);
    };

    function getPrefixToUse(uri) {
        if (_.includes(uri, oldPcastStreamPrefix)) {
            return oldPcastStreamPrefix;
        }

        return pcastStreamPrefix;
    }

    function matchPCastStreams(uriA, uriB) {
        return Stream.parsePCastStreamIdFromStreamUri(uriA) === Stream.parsePCastStreamIdFromStreamUri(uriB);
    }

    function parseStreamInfoFromStreamUri(uri) {
        var parsedUriInfo = {};
        var queryParamString = uri.split('?');

        if (queryParamString.length !== 2) {
            return parsedUriInfo;
        }

        var queryParamsString = queryParamString[1];
        var queryParams = queryParamsString.split('&');

        _.forEach(queryParams, function(param) {
            var parsedParams = param.split('=');
            var key = parsedParams[0];

            parsedUriInfo[key] = parsedParams[1];
        });

        return parsedUriInfo;
    }

    function assertIsValidStreamType(type) {
        type = _.getEnumName(streamTypes, type);

        if (!type) {
            throw new Error('"type" must be a valid stream type');
        }

        return type;
    }

    function assertIsValidTrackState(state) {
        state = _.getEnumName(trackStates, state);

        if (!state) {
            throw new Error('"state" must be a valid track state');
        }

        return state;
    }

    return Stream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(72)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, http, disposable, ClosestEndPointResolver) {
    'use strict';

    var maxAttempts = 4;

    function PCastEndPoint(version, baseUri, logger, sessionTelemetry) {
        if (typeof version !== 'string') {
            throw new Error('Must pass a valid "version"');
        }

        if (typeof baseUri !== 'string') {
            throw new Error('Must pass a valid "baseUri"');
        }

        if (typeof logger !== 'object') {
            throw new Error('Must pass a valid "logger"');
        }

        this._version = version;
        this._baseUri = baseUri;
        this._logger = logger;
        this._disposables = new disposable.DisposableList();
        this._sessionTelemetry = sessionTelemetry;
    }

    PCastEndPoint.DefaultPCastUri = 'https://pcast.phenixp2p.com';

    PCastEndPoint.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCastEndPoint.prototype.resolveUri = function(callback /* (error, {uri, roundTripTime}) */) {
        return resolveUri.call(this, this._baseUri, callback);
    };

    PCastEndPoint.prototype.dispose = function() {
        this._disposables.dispose();
    };

    PCastEndPoint.prototype.toString = function() {
        return 'PCastEndPoint[' + this._baseUri + ']';
    };

    function resolveUri(baseUri, callback /* (error, {uri, roundTripTime}) */) {
        if (baseUri.lastIndexOf('wss:', 0) === 0) {
            // WSS - Specific web socket end point
            callback(undefined, {
                uri: baseUri + '/ws',
                roundTripTime: 0
            });
        } else if (baseUri.lastIndexOf('https:', 0) === 0) {
            // HTTP - Resolve closest end point
            var that = this;

            getEndpoints.call(that, baseUri, function(err, endPoints) {
                if (err) {
                    return callback(err);
                }

                var closestEndPointResolver = new ClosestEndPointResolver(that._logger, that._version, callback, function(err, response){
                    if(err){
                        that._logger.warn('An error occured in resolving an endpoint', err);

                        return;
                    }

                    that._sessionTelemetry.recordMetric('RoundTripTime', {uint64: response.time}, null, {
                        resource: response.endPoint,
                        kind: 'https'
                    });
                });

                closestEndPointResolver.resolveAll(endPoints);

                that._disposables.add(closestEndPointResolver);
            });
        } else {
            // Not supported
            callback(new Error('Uri not supported'));
        }
    }

    function getEndpoints(baseUri, callback) {
        var requestDisposable = http.getWithRetry(baseUri + '/pcast/endPoints', {
            timeout: 15000,
            queryParameters: {
                version: '2018-05-24T22:12:07Z',
                _: _.now()
            },
            retryOptions: {maxAttempts: maxAttempts}
        }, function(err, response) {
            if (err) {
                return callback(new Error('Failed to resolve an end point', err));
            }

            var endPoints = response.data.split(',');

            if (endPoints.length < 1) {
                callback(new Error('Failed to discover end points'));
            }

            callback(undefined, endPoints);
        });

        this._disposables.add(requestDisposable);
    }

    return PCastEndPoint;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(1),__webpack_require__(0),__webpack_require__(9),__webpack_require__(5),__webpack_require__(3),__webpack_require__(2),__webpack_require__(6),__webpack_require__(41),__webpack_require__(33));else { var n, i; }}(this,function(e,t,i,n,r,a,s,o,l){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=21)}([function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(10),i(7),i(22),i(23),i(13),i(14),i(26),i(5)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u,d,c){"use strict";function h(e,r){r&&t.isStringNotEmpty(r,"playlistUrl"),this.parsedPlaylist=null,this._logger=e||new i.Logger,this.playlistUrl=r,this.baseUrl=r?r.substring(0,r.lastIndexOf("/")+1):"",this._name=r?r.substring(r.lastIndexOf("/"),r.length):"",this._trackAddedEvent=new n.Event,this._playlistTracksByMimeType={},this._mimeTypes=[],this._deliveryType=g(this.playlistUrl),this._type=null,this._localToServerTimeOffset=0}function f(i,n){t.isInstanceOf(i,a,"track"),n=n||e.noop,t.isFunction(n,"eventCallback");var r=i.getMimeType();this._playlistTracksByMimeType[r]||(this._playlistTracksByMimeType[r]=[]),e.includes(this._playlistTracksByMimeType[r],i)||this._playlistTracksByMimeType[r].push(i),e.includes(this._mimeTypes,r)||this._mimeTypes.push(r),this._trackAddedEvent.fireAsync([i],this,n)}function g(e){return/[.]mpd\??[^\s]*/i.test(e)?"Dash":/[.]m3u8\??[^\s]*/i.test(e)?"Hls":null}function p(t,i,n){if(this._logger.error("Failed to load playlist [%s]. Status code: [%s] (status text: [%s])",this.playlistUrl,t.code,t.message),i&&i.attempts===y){var r="Failed to get playlist with max retries of ["+y+" after ["+e.get(i,["stats","totalResponseTimeForAllAttempts"],0)+"] ms";return n(m(c.name.playlistNotFound.name,c.severity.CRITICAL,r))}if(0===t.code){var a="Failed to get playlist with timeout after ["+e.get(i,["stats","totalResponseTimeForAllAttempts"],0)+"]";return n(m(c.name.timeout.name,c.severity.RECOVERABLE,a))}return n(m(c.name.error.name,c.severity.CRITICAL,t))}function m(e,t,i){return{category:c.category.PLAYLIST,name:e,severity:t,error:"Error"===i.constructor.name?i:new Error(i)}}var y=5,_=0;return h.prototype.toString=function(){return"Playlist [playlistUrl="+this.playlistUrl+", baseUrl="+this.baseUrl+", mimeTypes="+this._mimeTypes+", trackAddedEvent(size)="+this._trackAddedEvent.size()+", playlistTracks="+this.getAllPlaylistTracks()+"]"},h.prototype.dispose=function(){e.forOwn(this._playlistTracksByMimeType,function(t){e.forEach(t,function(e){e.dispose()})}),this._playlistTracksByMimeType={},this._trackAddedEvent.dispose()},h.prototype.getPlaylistTracksByMimeType=function(e){return this._playlistTracksByMimeType[e]},h.prototype.fetch=function(t){(function(t){var i=this;r.getWithRetry(i.playlistUrl,{retryOptions:{backoff:1,delay:1e3,maxAttempts:y,additionalRetryErrorCodes:[_]}},function(n,a){if(n)return p.call(i,n,a,t);(function(t,i,n){var a=null,c=[],h=this;switch(h._initTime=e.now(),this._deliveryType){case"Dash":a=new l(h._logger,t);var m=new d(h._logger,a.timeSources,i);h.parsedPlaylist=a,h._playbackDurationSinceAvailable=h.parsedPlaylist.publishTime?h.parsedPlaylist.publishTime.getTime()-h.parsedPlaylist.availabilityStartTime.getTime():null,h._suggestedPresentationDelayTotalMillis=e.get(h.parsedPlaylist,["suggestedPresentationDelay","totalMillis"],null),h._totalMediaTimeInMillis=e.get(h.parsedPlaylist,["mediaPresentationDuration","totalMillis"],1/0),h._minBufferTimeTotalMillis=e.get(h.parsedPlaylist,["minBufferTime","totalMillis"],null),h._type=h.parsedPlaylist.type,c=function(t){var i=this;return e.map(t.representations,function(e){return{chunkDuration:e.duration,dataChunkUrlTemplate:e.media,codec:e.mseCodec,bandwidth:e.bandwidth,height:e.height,trackId:e.id,initUrl:e.initialization,mimeType:e.mimeType,totalNumberOfChunks:Math.ceil(i._totalMediaTimeInMillis/e.duration)}})}.call(h,h.parsedPlaylist),e.forEach(c,function(e){f.call(h,new s(h._logger,e))}),m.calculateOffset(function(e){h._localToServerTimeOffset=e,n()});break;case"Hls":a=new u(h._logger,h._name,t),h.parsedPlaylist=a,h._playbackDurationSinceAvailable=0,h._minBufferTimeTotalMillis=0,h._suggestedPresentationDelayTotalMillis=0,h._totalMediaTimeInMillis=1/0;var _=0;e.forEach(a.streamVariants,function(e){var t=h.baseUrl+e.name,i=new o(h._logger,{mediaSegmentPlaylistUrl:t,codecs:e.codecs.join("|"),bandwidth:e.bandwidth,trackId:e.name,mimeType:"application/octet-stream",height:null});r.getWithRetry(t,{retryOptions:{maxAttempts:y,backoff:1}},function(e,t){if(e)return p.call(h,e,t,n);i.updateMediaSegments(t.data),f.call(h,i),++_===a.streamVariants.length&&(h._type=i.isComplete()?"static":"dynamic","static"===h._type&&(h._totalMediaTimeInMillis=1e3*i.getPlayableDuration()),n())})});break;default:throw h._logger.error("[%s] Unsupported Delivery Type [%s]",h.playlistUrl,g(h.playlistUrl)),new Error("Unsupported Delivery Type "+g(h.playlistUrl))}}).call(i,a.data,a.stats.successResponseTime,function(){t(n,{raw:a,parsed:i.parsedPlaylist})})})}).call(this,t)},h.prototype.getType=function(){return this._type},h.prototype.getDeliveryType=function(){return this._deliveryType},h.prototype.getPlaylistTracksByBandwidthPerMimeType=function(i,n){t.isObject(n,"restrictions");var r=this;return e.map(this._mimeTypes,function(t){var a=function(t,i){return 0===e.keys(i).length?t:e.filter(t,function(t){return function(t,i){var n=t.getHeight()||0,r=t.getBandwidth()||0;return e.reduce(i,function(e,t,i){switch(i){case"maxHeight":return n<=t;case"minHeight":return n>=t;case"maxBandwidth":return r<=t;case"minBandwidth":return r>=t;default:throw new Error("Unknown restriction "+i)}},!1)}(t,i)})}(r.getPlaylistTracksByMimeType(t),n),s=e.reduce(a,function(e,t){return t.getBandwidth()>i?e:e&&e.getBandwidth()>t.getBandwidth()?e:t},null)||r.getPlaylistTrackByMimeTypeAndNextHighestBandwidth(0,t);if(s)return s;var o=e.get(e.filter(a,function(e){return!e.getBandwidth()}),"0");if(o)return r._logger.debug("Unable to get track with bandwidth [%s]. Falling back to track [%s].",o.getTrackId()),o;r._logger.warn("Unable to get track with bandwidth [%s]. No other tracks to fallback on.")})},h.prototype.getPlaylistTrackByBandwidthAndMimeType=function(t,i){return e.find(this.getPlaylistTracksByBandwidthPerMimeType(t,{}),function(e){return e.getMimeType()===i})},h.prototype.getPlaylistTrackByMimeTypeAndNextHighestBandwidth=function(t,i){return e.reduce(this.getPlaylistTracksByMimeType(i),function(e,i){return i.getBandwidth()<=t?e:e?e.getBandwidth()>i.getBandwidth()?i:e:i},null)},h.prototype.getAllPlaylistTracks=function(){return[].concat.apply([],e.values(this._playlistTracksByMimeType))},h.prototype.getMimeTypes=function(){return this._mimeTypes},h.prototype.getPlaybackDurationSinceAvailable=function(){return e.now()-this._initTime+this._playbackDurationSinceAvailable+this._localToServerTimeOffset},h.prototype.getSuggestedPresentationDelayTotalMillis=function(){return this._suggestedPresentationDelayTotalMillis},h.prototype.getTotalMediaTimeInMillis=function(){return this._totalMediaTimeInMillis},h.prototype.getMinBufferTimeTotalMillis=function(){return this._minBufferTimeTotalMillis},h.prototype.getLocalToServerTimeOffset=function(){return this._localToServerTimeOffset},h.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"trackadded":return this._trackAddedEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},h}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n;void 0!==(n=function(){"use strict";return{name:{chunkNotFound:{id:0,name:"chunk-not-found"},timeout:{id:1,name:"timeout"},error:{id:2,name:"error"},playlistNotFound:{id:3,name:"playlist-not-found"},progressTimeOut:{id:4,name:"progress-timeout"},hlsNativeError:{id:5,name:"hls-native-error"}},category:{PLAYLIST:4,STREAMING:5,DRM:6},severity:{RECOVERABLE:1,CRITICAL:2}}}.apply(t,[]))&&(e.exports=n)},function(e,t){e.exports=r},function(e,t,i){var n,r;n=[i(0),i(3),i(2)],void 0!==(r=function(e,t,i){"use strict";function n(e,t,i){}return n.prototype.toString=function(){throw new Error("Must be implemented")},n.prototype.dispose=function(){throw new Error("Must be implemented")},n.prototype.getMseCodec=function(){throw new Error("Must be implemented")},n.prototype.getTrackId=function(){throw new Error("Must be implemented")},n.prototype.getChunkDuration=function(){throw new Error("Must be implemented")},n.prototype.getBandwidth=function(){throw new Error("Must be implemented")},n.prototype.getHeight=function(){throw new Error("Must be implemented")},n.prototype.getMimeType=function(){throw new Error("Must be implemented")},n.prototype.getTotalNumberOfChunks=function(){throw new Error("Must be implemented")},n.prototype.getCurrentChunkId=function(){throw new Error("Must be implemented")},n.prototype.setCurrentChunkId=function(e){throw new Error("Must be implemented")},n.prototype.incrementCurrentChunkId=function(){throw new Error("Must be implemented")},n.prototype.addDataChunk=function(e,t,i){throw new Error("Must be implemented")},n.prototype.getChunks=function(){throw new Error("Must be implemented")},n.prototype.addEventListener=function(e,t){throw new Error("Must be implemented")},n}.apply(t,n))&&(e.exports=r)},function(e,t){e.exports=a},function(e,t,i){var n,r;n=[i(1),i(2)],void 0!==(r=function(e,t){"use strict";function i(e,i){this._options=i||{},this._logger=e||new t.Logger,this._rateDataPoints={},this._ewmaPeriods=i.ewmaPeriods||null,this._ewmaMultiplier=this._ewmaPeriods?2/(this._ewmaPeriods+1):null}function n(e,t,i,n,r){var a=(i*(e.length-1)+r(t))/e.length;if(n>0)for(;t.added-e[0].added>n;){var s=e.shift();a=(a*(e.length+1)-r(s))/e.length}return a}return i.prototype.toString=function(){var t=this;return"StatsProvider [rateDataPoints(keys)="+e.keys(this._rateDataPoints)+", rateDataPoints="+e.toString(e.map(this._rateDataPoints,function(e,i){return t.getRateAverages(i)}))+", options="+this._options+"]"},i.prototype.dispose=function(){delete this._rateDataPoints},i.prototype.addRateDataPoint=function(t,i,r,a){if(!e.isNullOrUndefined(this._rateDataPoints)){this._rateDataPoints[t]||(this._rateDataPoints[t]={tenSecDataPoints:[],thirtySecDataPoints:[],oneMinDataPoints:[],twoMinDataPoints:[],ewmaDataPoints:[],tenSecAverageRate:0,thirtySecAverageRate:0,oneMinAverageRate:0,twoMinAverageRate:0,ewmaRate:0,smaRate:0,tenSecAverageDuration:0,thirtySecAverageDuration:0,oneMinAverageDuration:0,twoMinAverageDuration:0,ewmaDuration:0,smaDuration:0});var s={duration:i,amount:r,durationToSecondsFactor:a,rate:r/(i*a),added:e.now()};(function(e,t){var i=function(e){return e.rate},r=function(e){return e.duration};e.tenSecDataPoints.push(t),e.thirtySecDataPoints.push(t),e.oneMinDataPoints.push(t),e.twoMinDataPoints.push(t),e.tenSecAverageRate=n.call(this,e.tenSecDataPoints,t,e.tenSecAverageRate,1e4,i),e.thirtySecAverageRate=n.call(this,e.thirtySecDataPoints,t,e.thirtySecAverageRate,3e4,i),e.oneMinAverageRate=n.call(this,e.oneMinDataPoints,t,e.oneMinAverageRate,6e4,i),e.twoMinAverageRate=n.call(this,e.twoMinDataPoints,t,e.twoMinAverageRate,12e4,i),e.tenSecAverageDuration=n.call(this,e.tenSecDataPoints,t,e.tenSecAverageDuration,1e4,r),e.thirtySecAverageDuration=n.call(this,e.thirtySecDataPoints,t,e.thirtySecAverageDuration,3e4,r),e.oneMinAverageDuration=n.call(this,e.oneMinDataPoints,t,e.oneMinAverageDuration,6e4,r),e.twoMinAverageDuration=n.call(this,e.twoMinDataPoints,t,e.twoMinAverageDuration,12e4,r),this._ewmaMultiplier&&(e.ewmaDataPoints.push(t),e.smaRate=n.call(this,e.ewmaDataPoints,t,e.smaRate,-1,i),e.smaDuration=n.call(this,e.ewmaDataPoints,t,e.smaDuration,-1,r),e.ewmaDataPoints.length>=this._ewmaPeriods&&(e.ewmaDataPoints.shift(),e.ewmaDataPoints.length===this._ewmaPeriods?(e.ewmaRate=e.smaRate,e.ewmaDuration=e.smaDuration):(e.ewmaRate=this._ewmaMultiplier*(e.smaRate-e.ewmaRate)+e.ewmaRate,e.ewmaDuration=this._ewmaMultiplier*(e.smaDuration-e.ewmaDuration)+e.ewmaDuration)))}).call(this,this._rateDataPoints[t],s)}},i.prototype.getRateAverages=function(t){if(!e.get(this._rateDataPoints,[t]))return{tenSecAverageRate:0,thirtySecAverageRate:0,oneMinAverageRate:0,twoMinAverageRate:0,ewmaRate:0,tenSecAverageDuration:0,thirtySecAverageDuration:0,oneMinAverageDuration:0,twoMinAverageDuration:0,ewmaDuration:0};var i=this._rateDataPoints[t];return{tenSecAverageRate:i.tenSecAverageRate,thirtySecAverageRate:i.thirtySecAverageRate,oneMinAverageRate:i.oneMinAverageRate,twoMinAverageRate:i.twoMinAverageRate,ewmaRate:i.ewmaRate,tenSecAverageDuration:i.tenSecAverageDuration,thirtySecAverageDuration:i.thirtySecAverageDuration,oneMinAverageDuration:i.oneMinAverageDuration,twoMinAverageDuration:i.twoMinAverageDuration,ewmaDuration:i.ewmaDuration}},i}.apply(t,n))&&(e.exports=r)},function(e,t){e.exports=s},function(e,t){e.exports=o},function(e,t,i){var n;void 0!==(n=function(){"use strict";function e(e,t,i,n){}return e.prototype.toString=function(){throw new Error("Must be implemented")},e.prototype.dispose=function(){throw new Error("Must be implemented")},e.prototype.initialize=function(e,t,i,n){throw new Error("Must be implemented")},e.prototype.getStreamDurationBeforeInitialization=function(){throw new Error("Must be implemented")},e.prototype.getLocalToServerTimeOffset=function(){throw new Error("Must be implemented")},e.prototype.setActiveTracks=function(e){throw new Error("Must be implemented")},e.prototype.initializePlaylistTracks=function(e,t,i,n){throw new Error("Must be implemented")},e.prototype.startRequestingDataForActiveTracks=function(){throw new Error("Must be implemented")},e.prototype.isFetchingData=function(){throw new Error("Must be implemented")},e.prototype.seekToChunk=function(e){throw new Error("Must be implemented")},e.prototype.stopRequestingAllData=function(){throw new Error("Must be implemented")},e}.apply(t,[]))&&(e.exports=n)},function(e,t,i){var n,r;n=[i(1),i(0),i(25)],void 0!==(r=function(e,t,i){"use strict";function n(n,a){t.isStringNotEmpty(a,"mpdXml"),t.isObject(n,"logger"),this._mpdXml=a,this._logger=n,this.minBufferTime=0,this.type=null,this.publishTime=null,this.availabilityStartTime=null,this.timeShiftBufferDepth=0,this.suggestedPresentationDelay=0,this.minimumUpdatePeriod=0,this.maxSegmentDuration=0,this.profiles=null,this.moreInfoUrl=null,this.programInfoTitle=null,this.representations=[],function(){t.isStringNotEmpty(this._mpdXml,"mpdXml");var n,a=i.parseXml(this._mpdXml),u=a.getElementsByTagName("parsererror");if(u&&u.length>0)throw n="Failed to parse MPD Playlist XML: "+u.item(0).innerText+" (source xml: "+this._mpdXml+")",this._logger.error(n),new Error(n);if("MPD"!==a.documentElement.nodeName)throw n='Invalid MPD Playlist XML. Does not start with "MPD": '+this._mpdXml,this._logger.error(n),new Error(n);this.minBufferTime=r(o(a.documentElement,"minBufferTime")),this.type=o(a.documentElement,"type"),this.publishTime=s(o(a.documentElement,"publishTime")),this.availabilityStartTime=s(o(a.documentElement,"availabilityStartTime")),this.timeShiftBufferDepth=r(o(a.documentElement,"timeShiftBufferDepth")),this.suggestedPresentationDelay=r(o(a.documentElement,"suggestedPresentationDelay")),this.minimumUpdatePeriod=r(o(a.documentElement,"minimumUpdatePeriod")),this.maxSegmentDuration=r(o(a.documentElement,"maxSegmentDuration")),this.mediaPresentationDuration=r(o(a.documentElement,"mediaPresentationDuration")),this.profiles=o(a.documentElement,"profiles");var d=a.getElementsByTagName("ProgramInformation"),c=a.getElementsByTagName("UTCTiming");if(d&&d.length>=1){var h=d.item(0);this.programInfoTitle=l(h,"Title").childNodes[0].nodeValue,this.moreInfoUrl=o(h,"moreInformationURL")}var f=a.getElementsByTagName("ContentProtection");if(this.contentProtectionTags=[],f.length>0)for(var g=0;g<f.length;g++){var p=f.item(g),m=e.reduce(p.attributes,function(e,t){return e[t.name]=t.value,e},{});this.contentProtectionTags.push(m)}for(var y=a.getElementsByTagName("Representation"),_=0;_<y.length;_++){var v=function(e){var t={};if(t.id=o(e,"id"),t.mimeType=o(e,"mimeType"),t.codecs=o(e,"codecs"),t.mseCodec=i.getMSECodec(t.mimeType,t.codecs),t.isAudio=t.mimeType.indexOf("audio")>=0,t.isVideo=t.mimeType.indexOf("video")>=0,!i.isCodecSupported(t.mseCodec))return this._logger.debug("MPD representation has unsupported codec. Skipping stream id [%s] (mimeType=[%s], codecs=[%s])",t.id,t.mimeType,t.codecs),null;var n=o(e,"bandwidth");t.bandwidth=n?parseInt(n,10):null;var r=o(e,"height");t.height=r?parseInt(r,10):null;var a=l(e,"SegmentTemplate");a&&(t.timescale=parseInt(o(a,"timescale")),t.media=o(a,"media"),t.startNumber=parseInt(o(a,"startNumber")),t.duration=parseInt(o(a,"duration")),t.initialization=o(a,"initialization"));return t}.call(this,y.item(_));v&&this.representations.push(v)}this.timeSources=[];for(var b=0;b<c.length;b++){var k=c.item(b),w=o(k,"schemeIdUri"),T=o(k,"value"),E=s(T);this.timeSources.push({name:w,value:isNaN(E.getTime())?T:E.getTime()})}}.call(this)}function r(e){if(!e)return null;var t=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/.exec(e);if(t){var i="-"===t[1]?-1:1,n={year:a(t[2],i),month:a(t[3],i),week:a(t[4],i),day:a(t[5],i),hour:a(t[6],i),minute:a(t[7],i),second:a(t[8],i)};return n.totalMillis=1e3*(n.second+60*(n.minute+60*(n.hour+24*n.day))),n}return null}function a(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function s(e){if(!e)return null;var t=new Date;return t.setTime(Date.parse(e)),t}function o(e,t){var i=e.attributes.getNamedItem(t);return i?i.value:null}function l(e,t){for(var i=0;i<e.childNodes.length;i++){var n=e.childNodes.item(i);if(n.nodeName===t)return n}return null}return n.prototype.toString=function(){return"Mpd [minBufferTime="+this.minBufferTime+", type="+this.type+", publishTime="+this.publishTime+", availabilityStartTime="+this.availabilityStartTime+", timeShiftBufferDepth="+this.timeShiftBufferDepth+", suggestedPresentationDelay="+this.suggestedPresentationDelay+", minimumUpdatePeriod="+this.minimumUpdatePeriod+", maxSegmentDuration="+this.maxSegmentDuration+", profiles="+this.profiles+", moreInfoUrl="+this.moreInfoUrl+", programInfoTitle="+this.programInfoTitle+", representations="+JSON.stringify(this.representations)+"]"},n}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0)],void 0!==(r=function(e,t){"use strict";function i(i,r,a){t.isStringNotEmpty(a,"M3u8VariantPlaylistString"),t.isStringNotEmpty(r,"name"),t.isObject(i,"logger"),this._rawM3u8VariantPlaylist=a,this._name=r,this._logger=i,function(t){var i=t.match(/[^\r\n]+/g),r=this;return e.forEach(i,function(t,a){var s=t.match(/(?!#)EXT.+?(?=[:\n\r])/),o=e.get(s,["0"],null),l=t.trim().substring(o?o.length+2:0,t.length);switch(o){case"EXT-X-STREAM-INF":r.streamVariants=r.streamVariants||[];var u=[l,i[a+1]];r.streamVariants.push(function(t){var i=(function(t){var i=e.get(t.match(/(?:CODECS=).*?",/),["0"],""),n=e.get(i.split("="),["1"],"");return n.substring(1,n.length-2)}(t[0])||"").split(","),r=(n(t[0],"FRAME-RATE")||"").trim();return{programId:n(t[0],"PROGRAM-ID"),codecs:i,bandwidth:parseInt(n(t[0],"BANDWIDTH")),averageBandwidth:parseInt(n(t[0],"AVERAGE-BANDWIDTH")),frameRate:parseInt(parseInt(r)||0),name:e.get(t,["1"],"").trim()}}(u));break;case"EXT-X-ALLOW-CACHE":r.allowCache="YES"===l;break;case"#EXT-X-COMBINED":r.combined="YES"===l;break;case"EXTM3U":case null:break;default:return r._logger.debug("[%s] [Variant] Playlist unsupported key type [%s]",r._name,o)}}),r}.call(this,this._rawM3u8VariantPlaylist)}function n(t,i){var n=new RegExp("(?:"+i+"=).*?(?=[,\n\r])"),r=new RegExp("(?:"+i+"=).*?$"),a=e.get(t.match(n)||t.match(r),["0"],"");return e.get(a.split("="),["1"])}return i.prototype.toString=function(){return"M3u8VariantPlaylist[name="+this._name+",numberOfStreamVariants="+this.streamVariants.length+"]"},i}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(16),i(12),i(4),i(7),i(9),i(13),i(5)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u,d){"use strict";function c(a,o,d,c){t.isInstanceOf(o,s,"playlist"),t.isInstanceOf(o.parsedPlaylist,u,"playlist.parsedPlaylist"),t.isInstanceOf(d,l,"statsProvider"),t.isStringNotEmpty(o.playlistUrl,"playlist.playlistUrl"),t.isStringNotEmpty(o.baseUrl,"playlist.baseUrl"),c&&c.defaultPresentationDelay&&t.isNumber(c.defaultPresentationDelay,"options.defaultPresentationDelay"),c&&c.targetBufferSizeInMS&&t.isNumber(c.targetBufferSizeInMS,"options.targetBufferSizeInMS"),this._playlist=o,this._baseUrl=this._playlist.baseUrl,this._statsProvider=d,this._logger=a||new i.Logger,this._httpRequestManager=new r(this._logger),this._feederErrorEvent=new n.Event,this._activeTracks=[],this._currentPlaybackTimeInSeconds=0,this._keepFetchingData=!1,this._defaultPresentationDelay=e.get(c,"defaultPresentationDelay",w),this._targetBufferSizeInMS=e.get(c,"targetBufferSizeInMS",0),this._bufferSize=Math.max(this._playlist.getSuggestedPresentationDelayTotalMillis(),this._playlist.getMinBufferTimeTotalMillis(),this._defaultPresentationDelay),this._streamDurationBeforeInitialization=Math.max(this._playlist.getPlaybackDurationSinceAvailable()-this._bufferSize,0),this._timeOfChunkAvailabilityDelta={average:0,values:[],maxSize:10}}function h(i,n,r,a){r=r||e.noop,t.isArray(i,"tracks"),t.isFunction(r,"done");var s=0,l=this;e.forEach(i,function(e){t.isInstanceOf(e,o,"track"),e.setCurrentChunkId(function(e){var t=Math.max(this._targetBufferSizeInMS?this._targetBufferSizeInMS-e:0,0),i=Math.max(Math.floor((this._streamDurationBeforeInitialization-t)/e),0);return"static"===this._playlist.getType()&&(i=0),this._logger.trace("Getting chunk index to start: [%s], playbackTimePassed=[%s], duration=[%s]",i,this._streamDurationBeforeInitialization,e),i}.call(l,e.getChunkDuration())),function(e,t,i){var n=this;(function(e,t){var i=this;i._logger.trace("Fetching init chunk for [%s]: [%s], nextChunkId=[%s]",e.getMseCodec(),i._baseUrl+e.getInitUrl(),e.getCurrentChunkId()),_.call(i,i._baseUrl+e.getInitUrl(),null,500,function(n,r){i._logger.trace("DONE Fetching init chunk for [%s]: [%s], nextChunkId=[%s]",e.getMseCodec(),i._baseUrl+e.getInitUrl(),e.getCurrentChunkId()+(n?": FAILED: "+n.code:": data="+r.data.byteLength)),t(n,r.data)})}).call(n,e,function(r,a){if(r){var s=new Error("Failed to fetch init chunk of stream for config [%s]",e);return s.cause=r,n._logger.error("[%s] (Cause: [%s])",s.message,r),i(s)}if(e.setInitChunkData(a),t){var o=Math.min(Math.floor(n._bufferSize/e.getChunkDuration),1);return n._logger.debug("Got init chunk: data chunksToFetch=[%s], initBufferSize=[%s], chunkDuration=[%s]",o,n._bufferSize,e.getChunkDuration()),y.call(n,e,o,null,i)}i()})}.call(l,e,n,function(e){if(e)return a(e);++s===i.length&&r()})})}function f(){var t=this;e.forEach(t._activeTracks,function(e){e.setCurrentChunkId(g.call(t,e.getChunkDuration()))})}function g(e){var t=e/1e3;return Math.floor(this._currentPlaybackTimeInSeconds/t)}function p(t){var i=this,n=i._activeTracks.length;e.forEach(i._activeTracks,function(r,a){!function(r,a){if(e.find(i._activeTracks,function(e){return e.getMimeType()===r.getMimeType()})===r){var s=g.call(i,r.getChunkDuration()),o=s>=r.getTotalNumberOfChunks();if("static"===i._playlist.getType()&&o)return a===n-1&&(i._keepFetchingData=!1),i._logger.info("Finished getting chunks for [static] track [%s] [%s]",r.getTrackId(),r.getMimeType());e.isNullOrUndefined(t)&&"dynamic"===i._playlist.getType()&&(t=m.call(i,r)),y.call(i,r,1,t,function(e){if(e&&e.causes&&e.causes.length>0&&"not yet available"===e.causes[0].feederReason?i._logger.info("Failed to get next chunk (packet not yet available) for [%s]|[%s]. Trying to fetch again in [%s] ms.",r.getMseCodec(),r.getBandwidth(),k):(e&&i._logger.warn("Failed to get next chunk (# of errors=[%s], errors=[%s]). Moving on.",e.causes?e.causes.length:"n/a",e),n--),n<=0&&i._keepFetchingData){if("dynamic"===i._playlist.getType()){var t=m.call(i,r);return i._logger.debug("Done fetching chunk with index [%s] for each active track. Waiting for [%s] ms before moving on to next chunk.",s,t),p.call(i,t)}i._logger.debug("Done fetching chunk with index [%s] for each active track. Moving on to next chunk",s),p.call(i,null)}})}}(r,a)})}function m(e){var t=1e3*this._currentPlaybackTimeInSeconds+2*e.getChunkDuration()-this._playlist.getPlaybackDurationSinceAvailable(),i=Math.max(t,0);return Math.min(e.getChunkDuration(),i)+this._timeOfChunkAvailabilityDelta.average}function y(e,t,i,n){var r=this;(function(e,t,i){var n=this,r=function(e,t){return e.replace("$Number%05d$",("00000"+t).substr(-5))}(n._baseUrl+e.getDataChunkUrlTemplate(),e.getCurrentChunkId()),a=e.getCurrentChunkId();n._logger.trace("Fetching data chunk for [%s]: [%s], nextChunkId=[%s]",e.getMseCodec(),r,e.getCurrentChunkId());var s=e.getMseCodec();_.call(n,r,t,k,function(o,l){if(n._logger.trace("DONE Fetching data chunk for [%s] : [%s], nextChunkId=[%s]",s,r,e.getCurrentChunkId()+(o?": FAILED: "+o.code:": data="+l.data.byteLength)),!o){n._statsProvider.addRateDataPoint(s,l.stats.successResponseTime,l.data.byteLength,.001);var u=l.stats.totalResponseTimeForAllAttempts-l.stats.successResponseTime-Math.max(t,0);if(n._timeOfChunkAvailabilityDelta.values.push(u),n._timeOfChunkAvailabilityDelta.average=(n._timeOfChunkAvailabilityDelta.average*(n._timeOfChunkAvailabilityDelta.values.length-1)+u)/n._timeOfChunkAvailabilityDelta.values.length,n._timeOfChunkAvailabilityDelta.values.length>n._timeOfChunkAvailabilityDelta.maxSize){var d=n._timeOfChunkAvailabilityDelta.values.shift();n._timeOfChunkAvailabilityDelta.average=(n._timeOfChunkAvailabilityDelta.average*(n._timeOfChunkAvailabilityDelta.values.length+1)-d)/n._timeOfChunkAvailabilityDelta.values.length}}if(!o&&a===e.getCurrentChunkId())return e.incrementCurrentChunkId(),n._currentPlaybackTimeInSeconds=e.getChunkDuration()*e.getCurrentChunkId()/1e3,e.addDataChunk(l.data,a,function(){i(o)});o?(o.feederReason=404===o.code?"not yet available":"other",i(o)):i(null,l.data)})}).call(r,e,i,function(a){return a&&r._logger.trace('Failed to fetch data chunk of stream for config [%s]". Error: [%s]',e,a),!a&&t>1&&y.call(r,e,t,i,n),n(a)})}function _(t,i,n,r){var a=this,s={responseType:"arraybuffer",retryOptions:{delay:n,maxAttempts:b},timeout:T};if(e.isNumber(i)&&0!==i)s.delay=i;else if(!e.isNullOrUndefined(i)&&0!==i)throw new Error('"delay" must be a positive number greater than or equal to 0 or null or undefined');return this._httpRequestManager.getWithRetry(t,s,function(i,n){if(i){if(a._logger.debug("Failed to load next stream data chunk. Status code: [%s] (status text: [%s]) for [%s]",i.code,i.message,t),n&&n.attempts===b){var s="Failed to get chunk with max retries of ["+b+" after ["+e.get(n,["stats","totalResponseTimeForAllAttempts"],0)+"] ms";return a._logger.warn(s),a._feederErrorEvent.fire([v(d.name.chunkNotFound.name,d.severity.CRITICAL,s)])}if(0===i.code){var o="Failed to get chunk with timeout after ["+e.get(n,["stats","totalResponseTimeForAllAttempts"],0)+"] ms with chunk timeout of ["+T+"]";return a._logger.warn(o),a._feederErrorEvent.fire([v(d.name.timeout.name,d.severity.RECOVERABLE,o)])}return a._feederErrorEvent.fire([v(d.name.error.name,d.severity.CRITICAL,i)])}r(i,n)})}function v(e,t,i){return{category:d.category.STREAMING,name:e,severity:t,error:"Error"===i.constructor.name?i:new Error(i)}}var b=15,k=150,w=0,T=5e3;return c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c.prototype.toString=function(){return"MpdPlaylistChunkFeeder [mpdPlaylistUrl="+this._playlist.playlistUrl+", baseUrl="+this._baseUrl+", defaultPresentationDelay="+this._defaultPresentationDelay+"]"},c.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"error":return this._feederErrorEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},c.prototype.dispose=function(){this.stopRequestingAllData(e.noop),this._httpRequestManager.dispose(),this._playlist.dispose(),this._statsProvider.dispose(),this._feederErrorEvent.dispose(),this._activeTracks=null,this._currentPlaybackTimeInSeconds=0},c.prototype.initialize=function(i,n,r,a,s){var o=this;r=r||e.noop,t.isFunction(r,"done"),this._initializedAt=e.now(),h.call(o,i,!0,r,function(e){return o._logger.error("Unable to initialize active tracks",e),s(e)}),h.call(o,n,!1,a,function(e){return o._logger.error("Unable to initialize alternate tracks",e),s(e)})},c.prototype.getStreamDurationBeforeInitialization=function(){return this._streamDurationBeforeInitialization},c.prototype.getLocalToServerTimeOffset=function(){return this._localToServerTimeOffset},c.prototype.setActiveTracks=function(e){this._activeTracks=e},c.prototype.getActiveTracks=function(){return this._activeTracks},c.prototype.startRequestingDataForActiveTracks=function(){if(this.isFetchingData())return this._logger.debug("Unable to start requesting data. Feeder is already fetching data.");this._keepFetchingData=!0,this._logger.debug("Starting requesting data at timestamp [%s]",this._currentPlaybackTimeInSeconds),f.call(this),p.call(this,null)},c.prototype.isFetchingData=function(){return this._keepFetchingData},c.prototype.seekToChunk=function(e){this._currentPlaybackTimeInSeconds=Math.floor(e),this._logger.debug("Seeking to timestamp [%s]",this._currentPlaybackTimeInSeconds),f.call(this)},c.prototype.seekToCurrent=function(){var t=e.reduce(this._activeTracks,function(e,t){return t.getChunkDuration()>e?t.getChunkDuration():e},0),i=(Math.max(this._playlist.getPlaybackDurationSinceAvailable()-this._bufferSize,0)-Math.max(this._targetBufferSizeInMS?this._targetBufferSizeInMS-t:0,t))/1e3;return this._logger.info("Seeking to most recent chunk"),this.seekToChunk(i),i},c.prototype.stopRequestingAllData=function(){this._keepFetchingData&&(this._keepFetchingData=!1,this._logger.debug("Pausing requesting of data at timestamp [%s]",this._currentPlaybackTimeInSeconds),this._httpRequestManager.disposePendingRequests())},c}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(10),i(6)],void 0!==(r=function(e,t,i,n){"use strict";function r(e){t.isObject(e,"logger"),this._logger=e,this._requestDisposables=new n.DisposableList}return r.prototype.toString=function(){return"HttpRequestManager"},r.prototype.disposePendingRequests=function(){this._requestDisposables.dispose(),this._requestDisposables=new n.DisposableList},r.prototype.dispose=function(){this.disposePendingRequests()},r.prototype.getWithRetry=function(n,r,a){t.isStringNotEmpty(n,"url"),t.isObject(r,"options"),t.isFunction(a,"callback");var s=this;r.retryOptions=e.assign({delay:0,backoff:1,maxAttempts:1,additionalRetryErrorCodes:[404,0]},r.retryOptions),this._requestDisposables.add(i.getWithRetry(n,r,function(e,t){return e&&4e3===e.code?s._logger.debug("Request handler disposed of before response received for get [%s]",n):(e&&s._logger.debug("Status code: [%s] (status text: [%s]) for get [%s]",e.code,e.message,n),a(e,t))}))},r}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(16),i(12),i(4),i(7),i(9),i(14),i(5)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u,d){"use strict";function c(a,o,l,d){t.isInstanceOf(o,s,"playlist"),t.isInstanceOf(o.parsedPlaylist,u,"playlist.parsedPlaylist"),t.isStringNotEmpty(o.playlistUrl,"playlist.playlistUrl"),t.isStringNotEmpty(o.baseUrl,"playlist.baseUrl"),d&&d.targetLatencyInMS&&t.isNumber(d.targetLatencyInMS,"options.targetLatencyInMS"),this._playlist=o,this._baseUrl=this._playlist.baseUrl,this._statsProvider=l,this._logger=a||new i.Logger,this._httpRequestManager=new r(this._logger),this._options=d,this._feederErrorEvent=new n.Event,this._activeTracks=[],this._currentPlaybackTimeInSeconds=0,this._keepFetchingData=!1,this._targetLatencyInMS=e.get(d,"targetLatencyInMS",0),this._targetBufferSizeInMS=e.get(d,"targetBufferSizeInMS",0),this._bufferSize=Math.max(this._playlist.getSuggestedPresentationDelayTotalMillis(),this._playlist.getMinBufferTimeTotalMillis(),this._defaultPresentationDelay),this._streamDurationBeforeInitialization=Math.max(this._playlist.getPlaybackDurationSinceAvailable()-this._bufferSize,0)}function h(){var t=this;e.isNumber(t._mediaSegmentRequestTimeout)||(t._mediaSegmentRequestTimeout=setTimeout(function(){(function(t){var i=this,n=0;e.forEach(this._activeTracks,function(r){var a=r.getMediaSegmentPlaylistUrlInfo(),s=e.assign({version:e.now()},a.queryParameters),o={retryOptions:{delay:v,maxAttempts:b},queryParameters:s};i._httpRequestManager.getWithRetry(a.url,o,function(e,s){if(e)return i._logger.debug("Unable to get media segment playlist [%s]",a.url);s&&r.updateMediaSegments(s),++n===i._activeTracks.length&&t()})},_)}).call(t,function(){e.isNullOrUndefined(t._mediaSegmentRequestTimeout)||(t._mediaSegmentRequestTimeout=null,h.call(t))})},_))}function f(t){var i=this,n=i._activeTracks.length;i._waitingForNextSegment=!1;e.forEach(i._activeTracks,function(r,a){!function(r){e.find(i._activeTracks,function(e){return e.getMimeType()===r.getMimeType()})!==r?i._logger.debug("Wrong track type [%s]. Pausing fetching for track [%s]",r.getMimeType(),r.getTrackId()):r.isLastMediaSegment(i._currentPlaybackTimeInSeconds)?("dynamic"===i._playlist.getType()&&(i._waitingForNextSegment=!0),i._logger.debug("No more chunks. Pausing fetching for track [%s]",r.getMimeType(),r.getTrackId())):g.call(i,r,1,t,function(e){if(e&&e.causes&&e.causes.length>0&&"not yet available"===e.causes[0].feederReason?i._logger.info("Failed to get next chunk (packet not yet available) for [%s]|[%s]. Trying to fetch again in [%s] ms.",r.getMseCodec(),r.getBandwidth(),y):(e&&i._logger.warn("Failed to get next chunk (# of errors=[%s], errors=[%s]). Moving on.",e.causes?e.causes.length:"n/a",JSON.stringify(e)),n--),n<=0){i._logger.debug("Done fetching chunk for timestamp [%s] for each active track. Moving on to next chunk. (keep fetching=[%s])",i._currentPlaybackTimeInSeconds,i._keepFetchingData);var t=r.isLastMediaSegment(i._currentPlaybackTimeInSeconds);if("static"===i._playlist.getType()&&t)return i._keepFetchingData=!1,i._logger.info("Finished getting chunks for [static] track [%s] [%s]",r.getTrackId(),r.getMimeType());if(t)return i._waitingForNextSegment=!0,i._logger.debug("Waiting for new segment on the Segment Playlist for [dynaimic] track [%s] [%s]",r.getTrackId(),r.getMimeType());i._keepFetchingData&&f.call(i,null)}})}(r)})}function g(t,i,n,r){var a=this;(function(t,i,n){var r=this,a=t.getSegmentByTimestamp(r._currentPlaybackTimeInSeconds),s=r._baseUrl+a.name;r._logger.trace("Fetching data chunk for [%s]: [%s], next segment=[%s]",t.getMseCodec(),s,a.name);var o=t.getMseCodec();(function(t,i,n){var r=this,a={responseType:"arraybuffer",retryOptions:{delay:y,maxAttempts:m},timeout:k};if(e.isNumber(i))a.delay=i;else if(!e.isNullOrUndefined(i))throw new Error('"delay" must be a number or null or undefined');return this._httpRequestManager.getWithRetry(t,a,function(i,a){if(i){if(r._logger.debug("Failed to load next stream data chunk. Status code: [%s] (status text: [%s]) for [%s]",i.code,i.message,t),a&&a.attempts===m){var s="Failed to get chunk with max retries of ["+m+" after ["+e.get(a,["stats","totalResponseTimeForAllAttempts"],0)+"] ms";return r._feederErrorEvent.fire([p(d.name.chunkNotFound.name,d.severity.CRITICAL,s)])}if(0===i.code){var o="Failed to get chunk with timeout after ["+e.get(a,["stats","totalResponseTimeForAllAttempts"],0)+"] ms with chunk timeout of ["+k+"]";return r._feederErrorEvent.fire([p(d.name.timeout.name,d.severity.RECOVERABLE,o)])}return r._feederErrorEvent.fire([p(d.name.error.name,d.severity.CRITICAL,i)])}n(i,a)})}).call(r,s,i,function(e,i){if(r._logger.trace("DONE Fetching data chunk for [%s] : [%s], next segment=[%s]",o,s,a.name+(e?": FAILED: "+e.code:": data="+i.data.byteLength)),e||r._statsProvider.addRateDataPoint(o,i.stats.successResponseTime,i.data.byteLength,.001),!e)return r._logger.debug("Finished fetching [%s]. Updating timestamp to fetch to [%s]",a.name,a.timestamp+a.duration),r._currentPlaybackTimeInSeconds=a.timestamp+a.duration,t.addDataChunk(i.data,a.name,function(){n(e)});e?(e.feederReason=404===e.code?"not yet available":"other",n(e)):n(null,i.data)})}).call(a,t,n,function(e){return e&&a._logger.trace('Failed to fetch data chunk of stream for config [%s]". Error: [%s]',JSON.stringify(t),e),!e&&i>1&&g.call(a,t,i,n,r),r(e)})}function p(e,t,i){return{category:d.category.STREAMING,name:e,severity:t,error:"Error"===i.constructor.name?i:new Error(i)}}var m=15,y=700,_=200,v=10,b=2,k=5e3;return c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c.prototype.toString=function(){return"M3u8PlaylistChunkFeeder [mpdPlaylistUrl="+this._playlist.playlistUrl+", baseUrl="+this._baseUrl+", defaultPresentationDelay="+this._defaultPresentationDelay+"]"},c.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"error":return this._feederErrorEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},c.prototype.dispose=function(){this.stopRequestingAllData(e.noop),this._httpRequestManager.dispose(),this._playlist.dispose(),this._statsProvider.dispose(),this._activeTracks=null,this._currentPlaybackTimeInSeconds=0,this._segmentsReadyDisposable&&(this._segmentsReadyDisposable.dispose(),this._segmentsReadyDisposable=null)},c.prototype.initialize=function(i,n,r,a,s){r=r||e.noop,t.isFunction(r,"done"),this.setActiveTracks(i),"dynamic"===this._playlist.getType()&&h.call(this);var o=this,l=0,u=function(t){g.call(o,t,1,null,function(t){if(t)return s(t);++l===i.length&&(o._initializedAt=e.now(),r(),a())})};e.forEach(i,function(e){return o._segmentsReadyDisposable=e.addEventListener("segmentsready",function(){if(o._waitingForNextSegment){if(o._logger.debug("Continuing fetching of track [%s] segments after wait",e.getTrackId()),!o._initializedAt)return o.seekToCurrent(),u(e);f.call(o,null)}}),e.hasSegments()?u(e):o._waitingForNextSegment=!0})},c.prototype.getStreamDurationBeforeInitialization=function(){return this._streamDurationBeforeInitialization},c.prototype.getLocalToServerTimeOffset=function(){return this._localToServerTimeOffset},c.prototype.setActiveTracks=function(t){this._activeTracks=t;var i=e.map(t,function(e){return e.getTrackId()});this._logger.debug("Setting active tracks [%s]",i)},c.prototype.getActiveTracks=function(){return this._activeTracks},c.prototype.startRequestingDataForActiveTracks=function(){if(this.isFetchingData())return this._logger.debug("Unable to start requesting data. Feeder is already fetching data.");this._keepFetchingData=!0,this._logger.debug("Starting requesting data at timestamp [%s]",this._currentPlaybackTimeInSeconds),"dynamic"===this._playlist.getType()&&h.call(this),f.call(this,null)},c.prototype.isFetchingData=function(){return this._keepFetchingData},c.prototype.seekToChunk=function(t){var i=e.get(this._activeTracks,["0"]),n=i.getClosestSegmentNotGreaterThanTimestamp(t),r=e.get(n,["timestamp"]);e.isUndefined(r)?i||(this._currentPlaybackTimeInSeconds=t):this._currentPlaybackTimeInSeconds=Math.floor(n.timestamp),this._logger.debug("Seeking to timestamp [%s]",this._currentPlaybackTimeInSeconds)},c.prototype.seekToCurrent=function(){var t=e.reduce(this._activeTracks,function(t,i){var n=e.get(i.getLastSegment(),["duration"],0);return n>t?n:t},0),i=(e.reduce(this._activeTracks,function(e,t){var i=t.getLastSegment().timestamp;return i<e?i:e},0)-Math.max(this._targetBufferSizeInMS?this._targetBufferSizeInMS-t:0,t))/1e3;return this._logger.info("Seeking to most recent chunk"),this.seekToChunk(i),i},c.prototype.stopRequestingAllData=function(){this._keepFetchingData&&(this._keepFetchingData=!1,this._waitingForNextSegment=!1,this._logger.debug("Pausing requesting of data at timestamp [%s]",this._currentPlaybackTimeInSeconds),this._httpRequestManager.disposePendingRequests(),clearTimeout(this._mediaSegmentRequestTimeout),this._mediaSegmentRequestTimeout=null)},c}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(10),i(6),i(11),i(8),i(5)],void 0!==(r=function(e,t,i,n,r,a,s,o,l){"use strict";function u(r,s,u,c){t.isObject(s,"videoElement");var C=this;this._videoElement=s,this._logger=r||new i.Logger,this._mediaKeys=null,this._licenseRequestRetryTimeout=null,this._certificateRequestRetryTimeout=null,this._disposables=new a.DisposableList;var D=e.bind(S,this);"Safari"===p.browser&&(D=e.bind(function(t,i){var n=this;if(i=i||1,!this._fairplayServerCertificate){if(i<=w)return n._logger.debug("Attempt [%s] for checking if the certificate have been set",i),void(n._certificateRequestRetryTimeout=setTimeout(function(){S.call(n,t,i+1)},k));var r="Unable to find fairplay certificate after "+(i-1)+" attempts";return n._logger.warn(r),n._drmErrorEvent.fire([g("NoCertificate",l.severity.RECOVERABLE,r)])}this._logger.info("Key requested by Webkit browser"),n._fallbackLicenseUri=function(e){return"https://"+function(e){return String.fromCharCode.apply(null,new o.global.Uint16Array(e.buffer))}(e).split("skd://")[1]}(t.initData);var s="phenix-fairplay-"+e.now(),u=function(e,t,i){var n=function(e){for(var t=new o.global.ArrayBuffer(2*e.length),i=new o.global.Uint16Array(t),n=0,r=e.length;n<r;n++)i[n]=e.charCodeAt(n);return i}(t),r=0,a=new o.global.ArrayBuffer(e.byteLength+4+n.byteLength+4+i.byteLength),s=new o.global.DataView(a);new Uint8Array(a,r,e.byteLength).set(e),r+=e.byteLength,s.setUint32(r,n.byteLength,!0),r+=4;var l=new o.global.Uint16Array(a,r,n.length);return l.set(n),r+=l.byteLength,s.setUint32(r,i.byteLength,!0),r+=4,new Uint8Array(a,r,i.byteLength).set(i),new Uint8Array(a,0,a.byteLength)}(t.initData,s,n._fairplayServerCertificate);n._videoElement.webkitKeys||n._videoElement.webkitSetMediaKeys(new o.global.WebKitMediaKeys(v));if(!n._videoElement.webkitKeys)return n._drmErrorEvent.fire([g("webkitKeys",l.severity.RECOVERABLE,new Error("Could not create MediaKeys"))]);var c=n._videoElement.webkitKeys.createSession("video/mp4",u);if(!c)return n._drmErrorEvent.fire([g("webkitKeySession",l.severity.RECOVERABLE,new Error("Could not create key session"))]);var h=e.bind(d,n);c.addEventListener("webkitkeymessage",h,!1),n._disposables.add(new a.Disposable(function(){c.removeEventListener("webkitkeymessage",h,!1)}));var f=function(){n._logger.info("Decryption key was added")};c.addEventListener("webkitkeyadded",f,!1),n._disposables.add(new a.Disposable(function(){c.removeEventListener("webkitkeyadded",f,!1)}));var p=function(e){n._drmErrorEvent.fire([g("webkitkeyerror",l.severity.RECOVERABLE,e)])};c.addEventListener("webkitkeyerror",p,!1),n._disposables.add(new a.Disposable(function(){c.removeEventListener("webkitkeyerror",p,!1)}))},this)),this._videoElement.addEventListener(E,D,!1),this._disposables.add(new a.Disposable(function(){C._videoElement.removeEventListener(E,D,!1)})),this._disposables.add(new a.Disposable(function(){null!==C._licenseRequestRetryTimeout&&o.global.clearTimeout(C._licenseRequestRetryTimeout)})),this._disposables.add(new a.Disposable(function(){null!==C._certificateRequestRetryTimeout&&o.global.clearTimeout(C._certificateRequestRetryTimeout)})),this._defaultMediaKeySystemConfig={initDataTypes:["cenc"],videoCapabilities:[{contentType:'video/mp4; codecs="avc1.42c01f"'}],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a.40.2"'}],persistentState:"optional",distinctiveIdentifier:"optional"},this._config={},"Edge"===p.browser||"IE"===p.browser?this._selectedKeySystem=y:"Safari"===p.browser?this._selectedKeySystem=v:this._selectedKeySystem=m,function(t,i){var n=this,r=function(t){return e.keys(e.reduce(t,function(e,t){return e[t]=1,e},{}))}(e.keys(t).concat(e.keys(i)));e.forEach(r,function(r){e.set(n._config,[r],e.assign({},e.get(t,[r],{}),e.get(i,[r],{}))),e.set(n._config,[r,"mediaKeySystemConfiguration"],e.assign({},n._defaultMediaKeySystemConfig,e.get(t,[r,"mediaKeySystemConfiguration"],{}),e.get(i,[r,"mediaKeySystemConfiguration"],{})))})}.call(this,function(t){return e.reduce(t,function(t,i){var n="com.phenixp2p.widevine"===i.schemeIdUri||"com.phenixrts.widevine"===i.schemeIdUri?m:i.schemeIdUri===_?y:i.schemeIdUri;return t[n]={licenseServerUrl:"com.phenixp2p.widevine"===i.schemeIdUri||"com.phenixrts.widevine"===i.schemeIdUri?decodeURIComponent(i.widevineLicenseServerUrl):i.licenseServerUrl,serverCertificateUrl:i.serverCertificateUrl},e.forOwn(i,function(i,r){e.startsWith(r,"mediaKeySystemConfiguration.")&&e.set(t[n],r,i)}),t},{})}(u),c||{}),function(){t.isObject(this._config,"this._config");var i=this;e.forOwn(this._config,function(e,n){t.isValidType(n,b,n),n===i._selectedKeySystem&&(n!==m&&n!==v||t.isStringNotEmpty(e.serverCertificateUrl,n+"[serverCertificateUrl]"),t.isObject(e.mediaKeySystemConfiguration,n+"[mediaKeySystemConfiguration]"),t.isArrayOfString(e.mediaKeySystemConfiguration.initDataTypes,n+"[mediaKeySystemConfiguration][initDataTypes]"),t.isArray(e.mediaKeySystemConfiguration.videoCapabilities,n+"[mediaKeySystemConfiguration][videoCapabilities]"),t.isArray(e.mediaKeySystemConfiguration.audioCapabilities,n+"[mediaKeySystemConfiguration][audioCapabilities]"),t.isStringNotEmpty(e.mediaKeySystemConfiguration.persistentState,n+"[mediaKeySystemConfiguration][persistentState]"),t.isStringNotEmpty(e.mediaKeySystemConfiguration.distinctiveIdentifier,n+"[mediaKeySystemConfiguration][distinctiveIdentifier]"))})}.call(this),this._drmErrorEvent=new n.Event,this._drmTrackEventRestrictionsAvailableEvent=new n.Event,this._disposables.add(this._drmErrorEvent),this._disposables.add(this._drmTrackEventRestrictionsAvailableEvent),T&&function(){var t=this;if(!this._videoElement.mediaKeys){var i=e.get(this._config,[this._selectedKeySystem,"mediaKeySystemConfiguration"]);o.global.navigator.requestMediaKeySystemAccess(this._selectedKeySystem,[i]).then(function(i){i.createMediaKeys().catch(function(e){t._drmErrorEvent.fire([g("CreateMediaKeys",l.severity.CRITICAL,e)]),t._logger.error("Unable to create MediaKeys",e)}).then(function(e){return t._mediaKeys=e,t._videoElement.setMediaKeys(e)}).catch(function(e){t._drmErrorEvent.fire([g("SetMediaKeys",l.severity.CRITICAL,e)]),t._logger.error("Unable to set MediaKeys",e)}).then(function(){return new o.global.Promise(function(i){var n=e.get(t._config,[t._selectedKeySystem,"serverCertificateUrl"]);if(!n)return t._logger.info("Not fetching server certificate because [%s] -> [serverCertificateUrl] is not set",t._selectedKeySystem),i();h(n,function(e,n){if(e)return t._logger.warn("Failed to get service certificate",e),i();var r=f(n.data);return t._mediaKeys.setServerCertificate(r).then(i).catch(function(e){t._logger.warn("Failed to set service certificate",e)})})})})}).catch(function(e){t._drmErrorEvent.fire([g("RequestMediaKeySystemAccess",l.severity.CRITICAL,e)]),t._logger.error("[%s] Unable to request MediaKeySystemAccess with error [%s]",t._selectedKeySystem,e)})}}.call(this),"Safari"===p.browser&&(o.global.WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0","video/mp4")||C._drmErrorEvent.fire([g("isTypeSupported",l.severity.CRITICAL,new Error("com.apple.fps.1_0 Key System not supported"))]),h(e.get(C._config,[C._selectedKeySystem,"serverCertificateUrl"]),function(e,t){e&&(C._drmErrorEvent.fire([g("getServerCertificateFairplay",l.severity.CRITICAL,e)]),C._logger.error("[Fairplay] Failed to get service certificate",e)),C._fairplayServerCertificate=f(t.data)}))}function d(t){var i=this,n=t.target;c.call(this,t.message,function(t,r){if(t)return i._drmErrorEvent.fire([g("LicenseRetrieval",l.severity.RECOVERABLE,t)]);try{var a=n.update(r)}catch(e){return i._drmErrorEvent.fire([g("KeySessionUpdate",l.severity.CRITICAL,e)])}e.isFunction(e.get(a,["catch"]))&&a.catch(function(e){i._drmErrorEvent.fire([g("KeySessionUpdate",l.severity.CRITICAL,e)]),i._logger.error("Update of keySession with license failed [%s]",e)})})}function c(i,n){var a,s=this,l=e.get(this._config,[this._selectedKeySystem,"licenseServerUrl"],this._fallbackLicenseUri),u={};if(t.isStringNotEmpty(l,"licenseServerUrl"),this._selectedKeySystem===y){var d=(new DOMParser).parseFromString(String.fromCharCode.apply(null,new o.global.Uint16Array(i)),"application/xml");if(!d.getElementsByTagName("Challenge")[0])return n(new Error("[Playready] Cannot find `challenge` in key message"));a=atob(d.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue);var c=d.getElementsByTagName("name"),h=d.getElementsByTagName("value");if(c.length!==h.length)return n(new Error("[Playready] Mismatched header name/value pair in key message"));u.headers={};for(var f=0;f<c.length;f++){var g=e.get(c,[f,"childNodes",0,"nodeValue"]),p=e.get(h,[f,"childNodes",0,"nodeValue"]);g&&p&&(u.headers[g]=p)}u.responseType="arraybuffer"}else u.contentType="application/octet-stream",a=i;r.post(l,a,u,function(e,t){if(e)return s._logger.error("Failed to get license with [%s] [%s]",e,t),n(e);if(s._selectedKeySystem===y)return n(null,t.data);var i=t.data,r=null,a=null;try{s._logger.debug("Attempting to unwrap license response"),r=(i=JSON.parse(i)).license||i.ckc,i.trackRestrictions&&s._drmTrackEventRestrictionsAvailableEvent.fire([i.trackRestrictions])}catch(e){if(!(e instanceof SyntaxError))return s._logger.error("Unexpected error [%s]",e),n(e);s._logger.debug("Unwrapping of license failed. Assuming that license response is already unwrapped"),r=i}"<ckc>"===r.substr(0,5)&&"</ckc>"===r.substr(-6)&&(r=r.slice(5,-6));try{a=function(e){for(var t=o.global.atob(e),i=new Uint8Array(t.length),n=0;n<t.length;++n)i[n]=t.charCodeAt(n);return i}(r)}catch(e){s._logger.error("Failed to convert base64 license string [%s] to binary",r),n(e)}n(null,a)})}function h(e,t){r.get(e,{mimeType:"text/plain; charset=x-user-defined"},t)}function f(e){for(var t=e.length,i=new o.global.Uint8Array(t),n=0;n<t;n++)i[n]=e.charCodeAt(n);return i}function g(e,t,i){return{category:l.category.DRM,name:e,severity:t,error:"Error"===i.constructor.name?i:new Error(i)}}var p=new s(o.global.navigator.userAgent).detect(),m="com.widevine.alpha",y="com.microsoft.playready",_="urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95",v="com.apple.fps.1_0",b=e.freeze([{id:1,name:"org.w3.clearkey"},{id:2,name:m},{id:3,name:y},{id:4,name:_},{id:5,name:v}]),k=200,w=20,T=!!o.global.navigator.requestMediaKeySystemAccess,E="encrypted";T||"Edge"!==p.browser&&"IE"!==p.browser||(E="msneedkey"),"Safari"===p.browser&&(E="webkitneedkey"),u.isSupported=function(){return"IE"===p.browser&&11===p.version||("Safari"===p.browser?!(e.isNullOrUndefined(o.global.WebKitMediaKeys)||e.isNullOrUndefined(o.global.Uint16Array)||e.isNullOrUndefined(o.global.Uint8Array)||e.isNullOrUndefined(o.global.ArrayBuffer)||e.isNullOrUndefined(o.global.DataView)):!(e.isNullOrUndefined(o.global.navigator.requestMediaKeySystemAccess)||e.isNullOrUndefined(o.global.Promise)||e.isNullOrUndefined(o.global.Uint8Array)||e.isNullOrUndefined(o.global.atob)))},u.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"trackRestrictionsAvailable":return this._drmTrackEventRestrictionsAvailableEvent.listen(i);case"error":return this._drmErrorEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},u.prototype.toString=function(){return"EncryptedMediaHandler [config="+JSON.stringify(this._config)+"]"},u.prototype.dispose=function(){this._disposables.dispose(),delete this._mediaKeys};var S=function(t,i){var n=this;if(i=i||1,!T)try{this._videoElement.msSetMediaKeys(new o.global.MSMediaKeys(this._selectedKeySystem))}catch(r){return n._drmErrorEvent.fire([g("RequestMediaKeySystemAccess",l.severity.CRITICAL,new Error('Unable to create MediaKeys ("'+this._selectedKeySystem+'"). Error: '+r.message))])}if(!this._mediaKeys&&!n._videoElement.msKeys){if(i<=20)return n._logger.debug("Attempt [%s] for checking if the media keys have been set",i),void(n._licenseRequestRetryTimeout=setTimeout(function(){S.call(n,t,i+1)},k));var r="Unable to find media keys after "+(i-1)+" attempts";return n._logger.warn(r),n._drmErrorEvent.fire([g("NoMediaKeys",l.severity.RECOVERABLE,r)])}if(n._videoElement.msKeys){var s=n._videoElement.msKeys.createSession("video/mp4",t.initData);s||n._drmErrorEvent.fire([g("NoKeySession",l.severity.CRITICAL,new Error("Could not create key session"))]);var u=function(e){c.call(n,e.message.buffer,function(e,t){if(e)return n._drmErrorEvent.fire([g("getLicense",l.severity.RECOVERABLE,e)]);s.update(new Uint8Array(t))})};s.addEventListener("mskeymessage",u,!1),n._disposables.add(new a.Disposable(function(){s.removeEventListener("mskeymessage",u,!1)}));var h=function(){n._drmErrorEvent.fire([g("MicrosoftKeyError",l.severity.CRITICAL,new Error("Unexpected `keyerror` event from key session. Code: "+s.error.code+", systemCode: "+s.error.systemCode))])};return s.addEventListener("mskeyerror",h,!1),void n._disposables.add(new a.Disposable(function(){s.removeEventListener("mskeyerror",h,!1)}))}var f=n._mediaKeys.createSession(),p=e.bind(d,n);return f.addEventListener("message",p,!1),n._disposables.add(new a.Disposable(function(){f.removeEventListener("message",p,!1)})),f.generateRequest(t.initDataType,t.initData).then(function(){n._logger.info("passing the media data to CDM")}).catch(function(e){n._drmErrorEvent.fire([g("InitKeySessionFailure",l.severity.CRITICAL,e)]),n._logger.error("Unable to create or initialize key session [%s]",e)})};return u}.apply(t,n))&&(e.exports=r)},function(e,t){e.exports=l},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(6),i(19),i(4),i(9)],void 0!==(r=function(e,t,i,n,r,a,s){"use strict";function o(o,h,m,y){t.isInstanceOf(h,a,"playlist"),t.isNotUndefined(m,"webPlayer"),t.isInstanceOf(y,s,"statsProvider"),this._playlist=h,this._webPlayer=m,this._statsProvider=y,this._logger=o||new i.Logger,this._bandwidthChangeDetails={nextSwitchCheckTime:e.now()+5e3,oldBandwidth:-1},this._disposables=new n.DisposableList,this._webPlayer.addEventListener("started",e.bind(function(){var t=this;this._bandwidthLimits=e.reduce(this._playlist.getMimeTypes(),function(i,n){var r=t._playlist.getPlaylistTracksByMimeType(n)||[],a=e.filter(r,function(t){return e.isNumber(t.getBandwidth())}),s=e.map(a,function(e){return e.getBandwidth()});return r.length>a.length&&t._logger.info("Excluding [%s] tracks without Bandwidth from ABR switching.",r.length-a.length),i[n]={max:Math.max.apply(null,s),min:Math.min.apply(null,s)},i},{}),this._logger.debug("Listening for bandwidth changes with max and min bandwidths of [%s]",this._bandwidthLimits),this._webPlayer.addEventListener("playbacktimeleft",e.bind(function(t,i){if(this._bandwidthChangeDetails.isInProgress||!r.isForeground())return;var n=this._bandwidthLimits[i.getMimeType()],a=this;if(this._bandwidthChangeDetails.nextSwitchCheckTime>0){if(this._bandwidthChangeDetails.nextSwitchCheckTime>e.now())return;this._bandwidthChangeDetails.nextSwitchCheckTime=0,this._bandwidthChangeDetails.oldBandwidth=-1}var s=e.bind(function(){this._bandwidthChangeDetails.isInProgress=!1},this);if(l.call(a,i,t)&&i.getBandwidth()<n.max){this._bandwidthChangeDetails.isInProgress=!0;var o=this._playlist.getPlaylistTrackByMimeTypeAndNextHighestBandwidth(i.getBandwidth(),i.getMimeType());this._playbackTimeout=setTimeout(function(){l.call(a,i,a._webPlayer.getTimeLeft())?(a._logger.info("Switching to higher quality track with [%s] time left in buffer and ewma of [%s].",a._webPlayer.getTimeLeft(),d.call(a,i)),a._bandwidthChangeDetails.nextSwitchCheckTime=e.now()+1e3*t+f,a._bandwidthChangeDetails.oldBandwidth=i.getBandwidth(),a._webPlayer.changeBandwidthLimit(o.getBandwidth(),s)):a._bandwidthChangeDetails.isInProgress=!1},p)}else if(u.call(a,i,t)&&i.getBandwidth()>n.min){this._bandwidthChangeDetails.isInProgress=!0;var c=this._playlist.getPlaylistTrackByBandwidthAndMimeType(i.getBandwidth()-1,i.getMimeType());this._playbackTimeout=setTimeout(function(){u.call(a,i,a._webPlayer.getTimeLeft())?(a._logger.info("Switching to lower quality track with [%s] time left in buffer and ewma of [%s].",a._webPlayer.getTimeLeft(),d.call(a,i)),a._bandwidthChangeDetails.nextSwitchCheckTime=e.now()+1e3*t+g,a._bandwidthChangeDetails.oldBandwidth=i.getBandwidth(),a._webPlayer.changeBandwidthLimit(c.getBandwidth(),s)):a._bandwidthChangeDetails.isInProgress=!1},p)}},this))},this)),this._disposables.add(r.onBackground(e.bind(c,this,!1))),this._disposables.add(r.onForeground(e.bind(c,this,!0))),this._backgroundTimeout=null,this._foregroundBandwidth=null}function l(e,t){var i=this._statsProvider.getRateAverages(e.getMseCodec()).ewmaDuration,n=e.getChunkDuration();return t>3.5||i>0&&i<=3*n/4&&t/(n/1e3)>2}function u(e,t){var i=this._statsProvider.getRateAverages(e.getMseCodec()).ewmaDuration,n=e.getChunkDuration();return t<.7||i>0&&i>=7*n/8&&t/(n/1e3)<=1.5}function d(e){return this._statsProvider.getRateAverages(e.getMseCodec()).ewmaDuration}function c(t){null!==this._playbackTimeout&&(clearTimeout(this._playbackTimeout),this._playbackTimeout=null);var i=this._webPlayer.getVideoElement();if(t){if(clearTimeout(this._backgroundTimeout),this._backgroundTimeout=null,null===this._foregroundBandwidth)return;var n=this._foregroundBandwidth;return this._foregroundBandwidth=null,n!==this._webPlayer.getBandwidthLimit()&&(this._bandwidthChangeDetails.nextSwitchCheckTime=e.now()+f,this._logger.info("Detected change to [foreground] for tab. Reverting to [%s] previous bandwidth limit from [%s]",n,this._webPlayer.getBandwidthLimit()),this._webPlayer.changeBandwidthLimit(n)),void(h(i)||"dynamic"!==this._playlist.getType()||(this._logger.info("Detecting application [foreground] with muted video. Resuming playback at most recent available chunk."),this._webPlayer.play()))}var a=this;this._backgroundTimeout=setTimeout(function(){r.isForeground()||(a._foregroundBandwidth=a._webPlayer.getBandwidthLimit(),h(i)||"dynamic"!==a._playlist.getType()||(a._logger.info("Detecting application [background] with muted video. Pausing playback until application focused again."),a._webPlayer.pause()))},m)}function h(t){return!t.muted&&0!==t.volume&&(e.get(t,["webkitAudioDecodedByteCount"],0)>0||e.get(t,["audioTracks","length"],0)>0||t.mozHasAudio||t.hasAudio||t.webkitHasAudio)}var f=15e3,g=5e3,p=500,m=3e3;return o.prototype.dispose=function(){null!==this._playbackTimeout&&clearTimeout(this._playbackTimeout),null!==this._backgroundTimeout&&clearTimeout(this._backgroundTimeout),this._disposables.dispose(),this._backgroundTimeout=null,this._playbackTimeout=null},o}.apply(t,n))&&(e.exports=r)},function(e,t,i){"use strict";var n,r;n=[i(4),i(15),i(17),i(27),i(9),i(20),i(5)],void 0!==(r=function(e,t,i,n,r,a,s){return{Playlist:e,MpdPlaylistChunkFeeder:t,M3u8PlaylistChunkFeeder:i,WebPlayer:n,StatsProvider:r,AdaptiveStreamingManager:a,isSupported:n.isSupported,errors:s}}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(0),i(3),i(2),i(7)],void 0!==(r=function(e,t,i,n){"use strict";function r(n,r,o){if(e.isObject(n,"logger"),e.isObject(r,"playlistTrackConfig"),e.isStringNotEmpty(r.codec,"playlistTrackConfig.codec"),e.isStringNotEmpty(r.mimeType,"playlistTrackConfig.mimeType"),e.isNumber(r.bandwidth,"playlistTrackConfig.bandwidth"),e.isNumber(r.chunkDuration,"playlistTrackConfig.chunkDuration"),e.isStringNotEmpty(r.trackId,"playlistTrackConfig.trackId"),e.isStringNotEmpty(r.initUrl,"playlistTrackConfig.initUrl"),e.isStringNotEmpty(r.dataChunkUrlTemplate,"playlistTrackConfig.dataChunkUrlTemplate"),e.isNumber(r.chunkDuration,"playlistTrackConfig.chunkDuration"),o=o||{},this._logger=n||new i.Logger,this._mseCodec=r.codec,this._chunkDuration=r.chunkDuration,this._bandwidth=r.bandwidth,this._height=r.height,this._trackId=r.trackId,this._mimeType=r.mimeType,this._initUrl=r.initUrl,this._dataChunkUrlTemplate=r.dataChunkUrlTemplate,this._totalNumberOfChunks=r.totalNumberOfChunks,this._currentChunkId=null,this._maxChunksToCache=o.maxChunksToCache||a,this._lowWaterMaxChunks=o.lowWaterMaxChunks||s,e.isNumber(this._maxChunksToCache,"options.maxChunksToCache"),e.isNumber(this._lowWaterMaxChunks,"options.lowWaterMaxChunks"),this._lowWaterMaxChunks>=this._maxChunksToCache)throw new Error('The "maxChunksToCache" cannot be less than or equal to the "lowWaterMaxChunks"');this._initChunk=null,this._dataChunks=[],this._chunkAddedEvent=new t.Event}var a=20,s=15;return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return"MpdPlaylistTrack [mseCodec="+this._mseCodec+", maxChunksToCache="+this._maxChunksToCache+", lowWaterMaxChunks="+this._lowWaterMaxChunks+", initChunk="+this._initChunk+", dataChunks(size)="+this._dataChunks.length+", chunkAddedEvent(size)="+this._chunkAddedEvent.size()+", trackId="+(this._trackId?this._trackId:"n/a")+", bandwidth="+(this.bandwidth?this.bandwidth:"n/a")+"]"},r.prototype.dispose=function(){this._dataChunks=[],this._chunkAddedEvent.dispose()},r.prototype.getMseCodec=function(){return this._mseCodec},r.prototype.getTrackId=function(){return this._trackId},r.prototype.getChunkDuration=function(){return this._chunkDuration},r.prototype.getBandwidth=function(){return this._bandwidth},r.prototype.getHeight=function(){return this._height},r.prototype.getMimeType=function(){return this._mimeType},r.prototype.getTotalNumberOfChunks=function(){return this._totalNumberOfChunks},r.prototype.getInitChunkData=function(){return this._initChunk},r.prototype.setInitChunkData=function(e){this._initChunk=e},r.prototype.getCurrentChunkId=function(){return this._currentChunkId},r.prototype.setCurrentChunkId=function(e){this._currentChunkId=e},r.prototype.incrementCurrentChunkId=function(){null===this._currentChunkId&&this._logger.error("[%s] Attempting to increment `CurrentChunkId` that is not initialized",this._trackId),this._currentChunkId++},r.prototype.getInitUrl=function(){return this._initUrl},r.prototype.getDataChunkUrlTemplate=function(){return this._dataChunkUrlTemplate},r.prototype.addDataChunk=function(t,i,n){e.isNotUndefined(t,"dataChunk"),n=n||function(){},e.isFunction(n,"eventCallback");var r={data:t,chunkId:i,timestamp:i*this._chunkDuration/1e3};if(this._dataChunks.push(r),this._dataChunks.length>this._maxChunksToCache)for(;this._dataChunks.length>this._lowWaterMaxChunks;)this._dataChunks.shift();this._chunkAddedEvent.fireAsync([r],this,n)},r.prototype.getChunks=function(){return this._dataChunks},r.prototype.addEventListener=function(t,i){if(e.isString(t,"eventName"),e.isFunction(i,"listener"),"chunkadded"!==t)throw new Error('Event "'+t+'" is unknown.');return this._chunkAddedEvent.listen(i)},r}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(3),i(2),i(7),i(24)],void 0!==(r=function(e,t,i,n,r,a){"use strict";function s(r,a,s){if(t.isObject(r,"logger"),t.isObject(a,"playlistTrackConfig"),t.isStringNotEmpty(a.codecs,"playlistTrackConfig.codecs"),t.isNumber(a.bandwidth,"playlistTrackConfig.bandwidth"),t.isStringNotEmpty(a.trackId,"playlistTrackConfig.trackId"),s=s||{},this._logger=r||new n.Logger,this._mseCodec=function(e){if(e.split("|").length>1)return"video/mp4";return"audio/mp4"}(a.codecs),this._bandwidth=a.bandwidth,this._height=a.height,this._trackId=a.trackId,this._mimeType=a.mimeType,this._totalNumberOfChunks=a.totalNumberOfChunks,this._mediaSegments=[],this._isComplete=!1,this._playableDuration=0,this._chunkDuration=0,this._mediaSegmentPlaylistUrlInfo=function(t){var i=t.split("?")[0],n=e.get(t.split("?"),[1],""),r=e.reduce(n.split("&"),function(e,t){var i=t.split("=")[0];return i&&(e[i]=t.split("=")[1]),e},{});return{url:i,queryParameters:r}}(a.mediaSegmentPlaylistUrl),this._currentChunkId=null,this._maxChunksToCache=s.maxChunksToCache||o,this._lowWaterMaxChunks=s.lowWaterMaxChunks||l,t.isNumber(this._maxChunksToCache,"options.maxChunksToCache"),t.isNumber(this._lowWaterMaxChunks,"options.lowWaterMaxChunks"),this._lowWaterMaxChunks>=this._maxChunksToCache)throw new Error('The "maxChunksToCache" cannot be less than or equal to the "lowWaterMaxChunks"');this._initChunk=null,this._dataChunks=[],this._chunkAddedEvent=new i.Event,this._segmentsReadyEvent=new i.Event}var o=20,l=15;return s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.prototype.toString=function(){return"M3u8PlaylistTrack"},s.prototype.dispose=function(){this._dataChunks=[],this._chunkAddedEvent.dispose()},s.prototype.getMseCodec=function(){return this._mseCodec},s.prototype.getTrackId=function(){return this._trackId},s.prototype.getChunkDuration=function(){return this._chunkDuration},s.prototype.getBandwidth=function(){return this._bandwidth},s.prototype.getHeight=function(){return this._height},s.prototype.getMimeType=function(){return this._mimeType},s.prototype.getTotalNumberOfChunks=function(){return this._totalNumberOfChunks},s.prototype.getPlayableDuration=function(){return this._playableDuration},s.prototype.isComplete=function(){return this._isComplete},s.prototype.hasSegments=function(){return this._mediaSegments.length>0},s.prototype.getSegmentByTimestamp=function(t){return e.find(this._mediaSegments,function(e){return e.timestamp<=t&&t<e.timestamp+e.duration})},s.prototype.getLastSegment=function(){return e.get(this._mediaSegments,[this._mediaSegments.length-1],null)},s.prototype.getMediaSegmentPlaylistUrlInfo=function(){return this._mediaSegmentPlaylistUrlInfo},s.prototype.getClosestSegmentNotGreaterThanTimestamp=function(e){return e>this._playableDuration?this._mediaSegments[this._mediaSegments.length-1]:this.getSegmentByTimestamp(e)},s.prototype.isLastMediaSegment=function(t){var i=this.getSegmentByTimestamp(t),n=!this._isComplete&&e.get(i,["timestamp"],0)+e.get(i,["duration"],0)===this._playableDuration,r=!this._isComplete&&t>this._playableDuration;return this._playableDuration===t||n||r},s.prototype.updateMediaSegments=function(t){var i=new a(this._logger,this._trackId,t),n=this._totalNumberOfChunks||0,r=e.map(this._mediaSegments,function(e){return e.name}),s=this,o=e.get(this._mediaSegments,[this._mediaSegments.length-1]),l=e.get(o,["timestamp"])+e.get(o,["duration"])||void 0;e.forEach(i.mediaSegments,function(t){e.includes(r,t.name)||(t.timestamp=e.isUndefined(l)?0:l,s._mediaSegments.push(t),s._playableDuration+=t.duration,l=t.timestamp+t.duration,t.duration>s._chunkDuration&&(s._chunkDuration=t.duration),s._logger.trace("[%s]:[%s]:[%s] Got new segment from playlist [%s]",(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),t.name))}),n!==this._mediaSegments.length&&(this._isComplete=i.isComplete,this._totalNumberOfChunks=this._mediaSegments.length,this._segmentsReadyEvent.fireAsync([this._mediaSegments],null,e.noop))},s.prototype.addDataChunk=function(e,i,n){t.isNotUndefined(e,"dataChunk"),n=n||function(){},t.isFunction(n,"eventCallback");var r={data:e,chunkId:i,timestamp:i*this._chunkDuration/1e3};if(this._dataChunks.push(r),this._dataChunks.length>this._maxChunksToCache)for(;this._dataChunks.length>this._lowWaterMaxChunks;)this._dataChunks.shift();this._chunkAddedEvent.fireAsync([r],this,n)},s.prototype.getChunks=function(){return this._dataChunks},s.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"chunkadded":return this._chunkAddedEvent.listen(i);case"segmentsready":return this._segmentsReadyEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},s}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0)],void 0!==(r=function(e,t){"use strict";function i(i,r,a){t.isStringNotEmpty(a,"m3u8String"),t.isObject(i,"logger"),this._rawM3U8=a,this._logger=i,this._name=r,this.mediaSegments=[],function(t){var i=t.match(/[^\r\n]+/g),r=this;return e.forEach(i,function(t,a){var s=t.match(/(?!#)EXT.+?(?=[:\n\r])/),o=e.get(s,["0"],null),l=t.trim().substring(o?o.length+2:0,t.length);switch("#EXT-X-ENDLIST"===t&&(o="EXT-X-ENDLIST"),o){case"EXT-X-VERSION":r.version=parseFloat(l);break;case"EXT-X-PROGRAM-DATE-TIME":r.programDateTime=function(e){return e?new Date(e.trim()):null}(l);break;case"EXT-X-TARGETDURATION":r.targetDuration=1e3*parseFloat(l)||0;break;case"EXT-X-MEDIA-SEQUENCE":r.mediaSequence=parseInt(l);break;case"EXTINF":var u=[l,i[a+1]];r.mediaSegments.push(n(u,r.mediaSegments+1));break;case"EXT-X-ENDLIST":r.isComplete=!0;break;case"EXTM3U":case null:break;default:return r._logger.debug("[%s] [Segment] Playlist unsupported key type [%s]",r._name,o)}}),r}.call(this,this._rawM3U8);var s=0;e.forEach(this.mediaSegments,function(e){e.timestamp=s,s+=e.duration}),this.playableDuration=s,this.isComplete=!!this.isComplete}i.prototype.toString=function(){return"vod"};var n=function(t){var i=e.get(t,["0"],"").split(","),n=e.get(i,["0"],0),r=e.get(i,["1"],"").trim(),a=e.get(t,["1"],"").trim();return{duration:parseFloat(n),title:r,name:a}};return i}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(0),i(8)],void 0!==(r=function(e,t){"use strict";function i(){}return i.prototype.isCodecSupported=function(i){return e.isStringNotEmpty(i,"codec"),t.global.MediaSource&&"function"==typeof t.global.MediaSource.isTypeSupported&&t.global.MediaSource.isTypeSupported(i)},i.prototype.parseXml=function(i){if(e.isStringNotEmpty(i,"xmlString"),void 0!==t.global.DOMParser)return(new t.global.DOMParser).parseFromString(i,"text/xml");if(void 0!==t.global.ActiveXObject&&new t.global.ActiveXObject("Microsoft.XMLDOM")){var n=new t.global.ActiveXObject("Microsoft.XMLDOM");return n.async="false",n.loadXML(i),n}throw new Error("No XML parser found")},i.prototype.getMSECodec=function(t,i){return e.isStringNotEmpty(t,"mpdMimeType"),e.isStringNotEmpty(i,"mpdCodecs"),t+'; codecs="'+i+'"'},new i}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(10)],void 0!==(r=function(e,t,i){"use strict";function n(e,i,n){t.isObject(e,"logger"),this._logger=e,this._timeSources=function(e){return e.sort(function(e,t){return a[e.name]-a[t.name]})}(i),this._directSourceOffset=n}function r(t,n){n=n||0;var a=this,s=e.get(this._timeSources,[n],{});(function(t,n){var r=this;switch(t.name){case"urn:mpeg:dash:utc:http-head:2014":return i.get(t.value,{contentType:"text/plain"},function(i,a){var s=e.get(a,["headers","date"],""),o=new Date(s).getTime();if(i||isNaN(o))return r._logger.warn("Unable to resolve dash timing via [%s]",t.value),n();var l=e.now()-o-a.stats.successResponseTime/2;return r._logger.info("Resolved [%s] local to server timestamp offset [%s]",t.name,l),n(l)});case"urn:mpeg:dash:utc:direct:2014":var a=e.now()-t.value-this._directSourceOffset/2;return r._logger.info("Resolved [%s] local to server timestamp offset [%s]",t.name,a),n(a);default:return r._logger.info("Unable to resolve mpd Timing Sources. Defaulting to local time"),n(0)}}).call(this,s,function(i){if(!e.isNumber(i))return r.call(a,t,n+1);t(i)})}var a={"urn:mpeg:dash:utc:http-head:2014":0,"urn:mpeg:dash:utc:direct:2014":1};return n.prototype.calculateOffset=function(e){r.call(this,e)},n.prototype.toString=function(){return"MpdTimeSync [Time Source Number: "+this._timeSources.length+", Direct Source Offset: "+this._directSourceOffset+"]"},n}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(6),i(11),i(8),i(28),i(29),i(4),i(9),i(20),i(15),i(17)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u,d,c,h,f){"use strict";function g(e,o,l){t.isNotUndefined(o,"videoElement"),t.isNotUndefined(o.videoWidth,"videoElement.videoWidth"),this._logger=e||new i.Logger,this._options=l,this._videoElement=o,this._disposables=new r.DisposableList,this._browserDetails=new a(s.global.navigator.userAgent).detect(),this._preferNative=this._options.preferNative||!1,this._player=null,this._playbackStarted=!1,this._isWaiting=!1,this._playbackStarted=!1,this._playbackTimeLeftEvent=new n.Event,this._playerStartedEvent=new n.Event,this._playerErrorEvent=new n.Event,this._disposables.add(this._playbackTimeLeftEvent),this._disposables.add(this._playerStartedEvent),this._disposables.add(this._playerErrorEvent)}function p(){var e=this;"Edge"===e._browserDetails.browser||"IE"===e._browserDetails.browser?(e._videoElement.play(),e._playbackStarted=!0,e._playerStartedEvent.fireAsync([],e),e._logger.debug("Playback Started")):e._videoElement.play().then(function(){e._playbackStarted=!0,e._playerStartedEvent.fireAsync([],e),e._logger.debug("Playback Started")}).catch(function(t){e._logger.error("Playback Failed [%s]",t)})}return g.prototype.toString=function(){return e.toString(this)},g.prototype.start=function(e){if(t.isStringNotEmpty(e,"uri"),this._player)return this._logger.warn("Already started Phenix Web Player");var i=this;if(l.isSupported){if(this._preferNative||!o.isSupported)return this._logger.info("HLS native player selected"),this._player=new l(this._logger,this._videoElement,this._options),this._player.addEventListener("error",function(e){i._playerErrorEvent.fire([e])}),this._disposables.add(this._player),this._player.start(e,function(){p.call(i)})}else this._preferNative&&this._logger.warn("HLS native player is not supported");this._logger.info("MSE player selected");var n=new u(this._logger,e);i._disposables.add(n),n.fetch(function(e){if(e)return i._playerErrorEvent.fire([e]);var t,r=new d(i._logger,{ewmaPeriods:30});"Dash"===n.getDeliveryType()?t=new h(i._logger,n,r,i._options):"Hls"===n.getDeliveryType()&&(t=new f(i._logger,n,r,i._options));var a=new o(i._logger,n,i._videoElement,t,i._options),s=new c(i._logger,n,i,r);a.start(),p.call(i),i._player=a,i._player.addEventListener("playbacktimeleft",function(e,t){i._playbackTimeLeftEvent.fire([e,t])}),i._player.addEventListener("error",function(e){i._playerErrorEvent.fire([e])}),i._disposables.add(i._player),i._disposables.add(r),i._disposables.add(s)})},g.prototype.play=function(){p.call(this),this._player&&this._player.play()},g.prototype.pause=function(){this._logger.info("Pausing web player"),this._player&&this._player.pause()},g.prototype.getVideoElement=function(){return this._videoElement},g.prototype.dispose=function(){this._disposables.dispose(),this._videoElement&&(this._videoElement.load(),this._videoElement.src="",this._videoElement.mediaKeys&&this._videoElement.setMediaKeys(null)),this._player=null,this._videoElement=null},g.prototype.getBandwidthLimit=function(){this._player.getBandwidthLimit()},g.prototype.getTimeLeft=function(){return this._videoElement?function(t){var i=this._videoElement.currentTime,n=this._videoElement.duration,r=function(e,t){for(var i=0;i<e.buffered.length;i++){var n=e.buffered.start(i),r=e.buffered.end(i);if(n<=t&&t<=r)return i}}(t,i),a=e.isNumber(r)?t.buffered.end(r):0,s=0===a?0:a-i;return{bufferedLength:t.buffered.length,current:i,bufferEnd:a,timeBufferedButNotPlayed:s,duration:n,timestampOffset:t.timestampOffset}}.call(this,this._videoElement).timeBufferedButNotPlayed:0},g.prototype.changeBandwidthLimit=function(e,t){this._player.changeBandwidthLimit(e,t)},g.prototype.addEventListener=function(i,n){switch(t.isString(i,"eventName"),t.isFunction(n,"listener"),i){case"playbacktimeleft":return this._playbackTimeLeftEvent.listen(n);case"started":var r=this._playerStartedEvent.listen(n);return this._playbackStarted&&setTimeout(e.bind(n,this),0),r;case"error":return this._playerErrorEvent.listen(n);default:throw new Error('Event "'+i+'" is unknown.')}},g.prototype.getStats=function(){return this._player?this._player.getStats():{}},g.isSupported=l.isSupported||o.isSupported,g.deviceSupportsHlsPlayback=l.isSupported||o.isSupported,g.deviceSupportsDashPlayback=o.isSupported,g}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(6),i(11),i(8),i(4),i(12),i(18)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u){"use strict";function d(d,h,f,g,p){t.isInstanceOf(h,o,"playlist"),t.isNotUndefined(f,"videoElement"),t.isNotUndefined(f.videoWidth,"videoElement.videoWidth"),t.isNotUndefined(g,"playlistChunkFeeder"),t.isInstanceOf(g,l,"playlistChunkFeeder"),e.isUndefined(e.get(p,"bandwidthToStartAt"))||t.isNumber(p.bandwidthToStartAt,"options.bandwidthToStartAt"),e.isUndefined(e.get(p,"trackRestrictions"))||t.isObject(p.trackRestrictions,"options.trackRestrictions"),e.isUndefined(e.get(p,"bufferSizeToPauseFetch"))||t.isNumber(p.bufferSizeToPauseFetch,"options.bufferSizeToPauseFetch"),e.isUndefined(e.get(p,"bufferSizeToResumeFetch"))||t.isNumber(p.bufferSizeToResumeFetch,"options.bufferSizeToResumeFetch"),e.isUndefined(e.get(p,"maximumFrequencyForAlteringPlaybackRate"))||t.isNumber(p.maximumFrequencyForAlteringPlaybackRate,"options.maximumFrequencyForAlteringPlaybackRate"),e.isUndefined(e.get(p,"playbackRateToRecover"))||t.isNumber(p.playbackRateToRecover,"options.playbackRateToRecover"),e.isUndefined(e.get(p,"targetMinBufferSize"))||t.isNumber(p.targetMinBufferSize,"options.targetMinBufferSize");var m=this;this._options=p,this._videoElement=f,this._feeder=g,this._playlist=h,this._disposables=new r.DisposableList,this._logger=d||new i.Logger,this._bandwidthLimit=e.get(p,"bandwidthToStartAt",w),this._trackRestrictions=e.get(p,"trackRestrictions",{}),this._bufferSizeToPauseFetch=e.get(p,"bufferSizeToPauseFetch",T),this._bufferSizeToResumeFetch=e.get(p,"bufferSizeToResumeFetch",E),this._maximumFrequencyForAlteringPlaybackRate=e.get(p,"maximumFrequencyForAlteringPlaybackRate",M),this._targetMinBufferSize=e.get(p,"targetMinBufferSize",A),this._playbackRateToDecreaseBuffer=e.get(p,"playbackRateToDecreaseBuffer",C),this._playbackRateToIncreaseBuffer=e.get(p,"playbackRateToIncreaseBuffer",D),this._targetBufferSizeToStartFastForward=this._targetMinBufferSize+3.5,this._maxBufferSizeWhileRecoveringBufferWithSlowMotion=this._targetMinBufferSize+2,this._playbackStarted=!1,this._isWaiting=!1,this._bufferStats=[],this._browserDetails=new a(s.global.navigator.userAgent).detect(),function(){var t=this,i=e.get(this._playlist,["parsedPlaylist","contentProtectionTags"],[]);if(0===i.length)return this._logger.info("No Content Protection Tags found in the playlist so skipping initialization of EncryptedMediaHandler");if(!u.isSupported())return this._logger.error("DRM not supported by the browser");this._encryptedMediaHandler=new u(this._logger,this._videoElement,i,e.get(this._options,"drm")),this._encryptedMediaHandler.addEventListener("error",function(e){t._playerErrorEvent.fire([e])}),this._encryptedMediaHandler.addEventListener("trackRestrictionsAvailable",function(i){e.keys(i).length>0&&(t._trackRestrictions=i,c.call(t),t._videoElement.play())}),this._disposables.add(this._encryptedMediaHandler)}.call(this),this._playbackStarted=!1,this._mediaSourceBuffers={},this._bufferDetails={},this._playbackTimeLeftEvent=new n.Event,this._playerErrorEvent=new n.Event,this._feeder.addEventListener("error",function(e){m._playerErrorEvent.fire([e])}),this._disposables.add(this._feeder),this._disposables.add(this._playbackTimeLeftEvent),this._disposables.add(this._playerErrorEvent),this._disposables.add(new r.Disposable(function(){null!==m._switchTrackDisposable&&s.global.clearTimeout(m._switchTrackDisposable)}))}function c(){var e=this._playlist.getPlaylistTracksByBandwidthPerMimeType(this._bandwidthLimit,this._trackRestrictions);return this._feeder.setActiveTracks(e),e}function h(e,t,i){this._logger.debug("VIDEO EVENT: [%s]",e),t&&t.call(this,i)}function f(t,i){var n=e.bind(h,this,"durationchange",function(){var r=this;if("dynamic"!==r._playlist.getType())return r._videoElement.removeEventListener("durationchange",n,!1),r._ready=!0;0!==e.get(r._videoElement,["buffered","length"],0)&&function(t,i){var n=this;t=e.isNumber(t)?t:n._playlist.getPlaybackDurationSinceAvailable()/1e3-1,"Firefox"===this._browserDetails.browser&&(t-=1),setTimeout(function(){var e=n._videoElement.buffered.start(n._videoElement.buffered.length-1),r=n._videoElement.buffered.end(n._videoElement.buffered.length-1),a=n._videoElement.currentTime<t||n._videoElement.currentTime>t+1,s=e<=t&&t<=r,o=n._durationChangeCount>=I;s||o||!n._initialized?(!a||n._setTimeoutOnce||!s&&!o&&n._initialized||(n._initialized||s?n._videoElement.currentTime=o?(r-e)/2+e:e:n._videoElement.currentTime=e,n._setTimeoutOnce=!0,n._initialized||(n._initialized=!0)),e<=n._videoElement.currentTime&&n._videoElement.currentTime<=r&&(s||o)&&(n._ready=!0,n._setTimeoutOnce=!1,i())):n._durationChangeCount++},10)}.call(r,t,function(){r._videoElement.removeEventListener("durationchange",n,!1),i&&i()})});return this._durationChangeCount=0,n}function g(t){var i=this._videoElement.currentTime,n=this._videoElement.duration,r=p(t,i),a=e.isNumber(r)?t.buffered.end(r):0,s=0===a?0:a-i;return{bufferedLength:t.buffered.length,current:i,bufferEnd:a,timeBufferedButNotPlayed:s,duration:n,timestampOffset:t.timestampOffset}}function p(e,t){for(var i=0;i<e.buffered.length;i++){var n=e.buffered.start(i),r=e.buffered.end(i);if(n<=t&&t<=r)return i}}function m(){var t=!0,i=!1;e.forOwn(this._mediaSourceBuffers,e.bind(function(e){var n=g.call(this,e.buffer),r=parseFloat(n.timeBufferedButNotPlayed);r<this._bufferSizeToPauseFetch&&(t=!1),r<this._bufferSizeToResumeFetch&&(i=!0)},this)),t&&this._feeder.isFetchingData()&&(this._logger.debug("Pausing feeder due to excess buffer"),L.call(this)),!i||this._feeder.isFetchingData()||this._pausedAt||(this._logger.debug("Starting feeder due to limited buffer"),x.call(this))}function y(t,i){var n=this._mediaSourceBuffers[b(t)],r=this._bufferDetails[k(t)];if(!r)return this._logger.warn("Unable to add chunk for non existent buffer");if("dynamic"===this._playlist.getType()&&this._pausedAt&&!this._reset&&n.buffer.buffered.length>0)n.buffer.remove(0,n.buffer.buffered.end(n.buffer.buffered.length-1)),n.cleared=!0,e.reduce(this._mediaSourceBuffers,function(e,t){return e?t.cleared:e},!0)&&(this._initialized=!1,this._ready=!1,this._setTimeoutOnce=!1,this._reset=!0);else if(r.chunks.length>0){if(this._videoElement.error)return this._logger.error("Unable to continue appending to buffer. Video element error code [%s] and message [%s]",this._videoElement.error.code,this._videoElement.error.message),L.call(this),this._playerErrorEvent.fire([this._videoElement.error]);var a=r.chunks.shift();n.cleared=!1,this._logger.debug("Appending chunk to buffer for track [%s]",t.getTrackId()),n.buffer.appendBuffer(new Uint8Array(a))}else i&&(m.call(this),r.chunkAddRequested=!0)}function _(t){var i=this._mediaSourceBuffers[b(t)],n=e.bind(function(e){this._logger.warn("Buffer Error [%s]",e)},this),r=!!i.track;if(i.track!==t){var a=this._bufferDetails[k(t)];if(i.track&&i.track!==t&&r&&(i.buffer.removeEventListener("updateend",i.updateEndListener),i.buffer.removeEventListener("error",n),a&&(a.addInitChunkFirst=!0,a.chunkAddRequested=!0,a.chunks=[])),i.track=t,i.updateEndListener=e.bind(i.updateEnd,this,t),i.buffer.addEventListener("updateend",i.updateEndListener),i.buffer.addEventListener("error",n),i.buffer.onerror=n,!r){var s="Dash"===this._playlist.getDeliveryType()?[t.getInitChunkData()]:[];a.chunks=[].concat(s,e.map(t.getChunks(),function(e){return e.data})),"static"===this._playlist.getType()&&"Edge"!==this._browserDetails.browser&&"IE"!==this._browserDetails.browser&&this._mediaSource.setLiveSeekableRange(0,this._playlist.getTotalMediaTimeInMillis()/1e3),y.call(this,t,!1)}}}function v(t){this._logger.debug("Creating MSE buffers for all tracks."),e.forEach(t,e.bind(function(t){(function(t){var i=this,n={track:t,chunks:[],chunkAddRequested:!1},a=b(t),s=!e.includes(e.keys(i._mediaSourceBuffers),a),o=s?i._mediaSource.addSourceBuffer(t.getMseCodec()):i._mediaSourceBuffers[a].buffer,l=k(t);i._bufferDetails[l]=n,s&&(o.mode="segments","static"===i._playlist.getType()&&(o.appendWindowEnd=i._playlist.getTotalMediaTimeInMillis()/1e3),i._logger.debug("Creating MSE Buffer for [%s] with mode [%s]",i._playlist.getType(),o.mode),i._mediaSourceBuffers[a]={buffer:o,updateEnd:function(e){o.updating||y.call(this,e,!0)}},i._disposables.add(new r.Disposable(function(){i._logger.debug("Cleaning up sourceBuffer [%s]",a),i._mediaSource.removeSourceBuffer(o)})));var u=t.addEventListener("chunkadded",e.bind(function(t,r){n.addInitChunkFirst&&"Dash"===i._playlist.getDeliveryType()&&(n.addInitChunkFirst=!1,this._logger.debug("Pushing track [%s] chunk [%s] into buffer",t.getTrackId(),"Init"),n.chunks.push(t.getInitChunkData())),this._logger.debug("Pushing track [%s] chunk [%s] into buffer",t.getTrackId(),r.chunkId),n.chunks.push(r.data),n.chunkAddRequested&&(n.chunkAddRequested=!1,o.updating||y.call(this,t,!1));var a=e.now()-this._lastUpdate>=S,s=e.now()-this._lastPlayAttempt>=500;this._isWaiting&&a&&s&&!this._videoElement.paused&&!this._pausedAt&&(this._logger.trace("Starting after wait [%s]",e.now()-this._lastUpdate),this._lastPlayAttempt=e.now(),this._videoElement.play())},i,t));i._disposables.add(u)}).call(this,t)},this))}function b(e){return e.getMseCodec().indexOf("video")>=0?"video":e.getMseCodec().indexOf("audio")>=0?"audio":"other"}function k(e){return e.getTrackId()+"_"+e.getMseCodec()}var w=2e6,T=60,E=30,S=1e3,C=1.03,D=.97,M=300,P=300,A=2,R=3e5,I=2;d.prototype.toString=function(){return e.toString(this)},d.prototype.play=function(){if("dynamic"===this._playlist.getType()){var e=this._feeder.seekToCurrent();x.call(this);var t=this,i=f.call(this,e,function(){t._pausedAt=0,t._videoElement&&t._videoElement.play()});return setTimeout(function(){t._videoElement.addEventListener("durationchange",i,!1)},300),this._disposables.add(new r.Disposable(function(){t._videoElement.removeEventListener("durationchange",i,!1)}))}x.call(this),this._videoElement&&this._videoElement.play()},d.prototype.pause=function(){this._logger.info("Pausing web player"),L.call(this);var t=this;this._videoElement&&(this._videoElement.pause(),this._pausedAt=e.now(),this._reset=!1,e.forOwn(this._feeder.getActiveTracks(),function(e){t._mediaSourceBuffers[b(e)].buffer.updating||y.call(t,e,!1)}))},d.prototype.dispose=function(){this._disposables.dispose(),this._playbackStarted=!1,this._mediaSourceBuffers={},this._bufferDetails={},this._bufferStats=[],this._mediaSource=null,this._playlist=null,this._videoElement=null},d.prototype.start=function(t){(function(t){var i=this;i._mediaSource=new MediaSource;var n=function(){(function(t){var i=this,n=c.call(this),a=i._playlist.getAllPlaylistTracks().sort(function(e,t){return-1*(e.getBandwidth()-t.getBandwidth())}),s=e.filter(a,function(t){return!e.includes(n,t)});if(this._logger.info("Initializing feeder with [%s] [%s] playlist of duration [%s]",i._playlist.getType(),i._playlist.getDeliveryType(),i._playlist.getTotalMediaTimeInMillis()/1e3),"static"===i._playlist.getType())i._mediaSource.duration=i._playlist.getTotalMediaTimeInMillis()/1e3;else if("Hls"===i._playlist.getDeliveryType()){i._mediaSource.duration=1/0;var o=e.reduce(n,function(t,i){var n=e.get(i.getLastSegment(),["timestamp"],0);return e.isNullOrUndefined(t)?n:n<t?n:t})||0;i._feeder.seekToChunk(o)}this._logger.debug("Loading tracks: numberOfTracksToInitialize=[%s], all tracks: [%s]",n.length,a),this._feeder.initialize(n,s,function(){v.call(i,n);var a=c.call(i);e.forEach(a,function(e){_.call(i,e)}),function(t){var i=this,n=e.bind(function(){this._isWaiting=!1,this._lastUpdate=e.now();var t;e.forOwn(this._mediaSourceBuffers,e.bind(function(e){var i=g.call(this,e.buffer);(!t||t>i.timeBufferedButNotPlayed)&&(t=i.timeBufferedButNotPlayed),this._playbackTimeLeftEvent.fire([i.timeBufferedButNotPlayed,e.track],this)},this)),m.call(this),function(t){this._bufferStats.push({size:t,timestamp:e.now()});for(var i=e.get(this._bufferStats,[0,"timestamp"],e.now());e.now()-i>R;)this._bufferStats.shift(),i=e.get(this._bufferStats,[0,"timestamp"],e.now());this._bufferStatsMin=Math.min.apply(null,e.map(this._bufferStats,function(e){return e.size}))}.call(this,t),function(t){if("Dash"===this._playlist.getDeliveryType()||"dynamic"===this._playlist.getType()){var i=this._targetBufferSizeToStartFastForward,n=this._lastPlaybackRateChange,r=e.now()-this._startTime>P,a=!n||e.now()-n>1e3*this._maximumFrequencyForAlteringPlaybackRate,s=this._bufferStatsMin>this._targetMinBufferSize,o=this._bufferStatsMin<=this._targetMinBufferSize+.1&&this._bufferStatsMin>=this._targetMinBufferSize-.1,l=t>=this._maxBufferSizeWhileRecoveringBufferWithSlowMotion&&this._videoElement.playbackRate===this._playbackRateToIncreaseBuffer;t>=i&&s&&this._videoElement.playbackRate<=1&&r&&a?(this._logger.info("Adjusting playback rate to [%s] to reduce buffer size from [%s] with minimum buffer size of [%s]",this._playbackRateToDecreaseBuffer,t,this._bufferStatsMin),this._videoElement.playbackRate=this._playbackRateToDecreaseBuffer):!s&&!o&&this._videoElement.playbackRate>=1&&a?(this._logger.info("Adjusting playback rate to [%s] to increase buffer size from [%s] with minimum buffer size of [%s]",this._playbackRateToIncreaseBuffer,t,this._bufferStatsMin),this._videoElement.playbackRate=this._playbackRateToIncreaseBuffer):(l||o)&&1!==this._videoElement.playbackRate&&(this._logger.info("Resuming normal playback rate with buffer size of [%s] and minimum buffer size of [%s]",t,this._bufferStatsMin),this._videoElement.playbackRate=1,this._lastPlaybackRateChange=e.now())}}.call(this,t||0)},i),a=e.bind(h,i,"stalled",null),s=e.bind(h,i,"suspend",null),o=e.bind(h,i,"ended",null),l=e.bind(h,i,"error",null),u=e.bind(h,i,"pause",null),d=e.bind(h,i,"play",function(){this._pausedAt&&this._videoElement.pause()}),c=e.bind(h,i,"waiting",function(){this._playbackStarted&&(this._logger.debug("Waiting for new chunk or end of track"),this._isWaiting=!0)}),y=e.bind(h,i,"seeking",function(t){var i=e.keys(this._mediaSourceBuffers),n=e.get(i,"0",null),r=this._mediaSourceBuffers[n],a=this;if(r&&this._ready&&"Hls"!==this._playlist.getDeliveryType()){var s=p(r.buffer,t.timeStamp/1e3),o=p(r.buffer,this._videoElement.currentTime),l=e.reduce(this._mediaSourceBuffers,function(t,i){var n=p(i.buffer,a._videoElement.currentTime),r=e.isNumber(n)?i.buffer.buffered.end(n):0;return t?r<t?r:t:r})||this._videoElement.currentTime;if(this._feeder.stopRequestingAllData(),this._logger.debug("Pausing of feeder completed."),this._feeder.seekToChunk("dynamic"===this._playlist.getType()?this._videoElement.currentTime:l),s!==o||e.isNullOrUndefined(o)){if(this._feeder.isFetchingData())return;this._feeder.startRequestingDataForActiveTracks(this._bandwidthLimit)}}}),_=f.call(i);i._videoElement.addEventListener("timeupdate",n,!1),i._videoElement.addEventListener("ended",o,!1),i._videoElement.addEventListener("error",l,!1),i._videoElement.addEventListener("pause",u,!1),i._videoElement.addEventListener("stalled",a,!1),i._videoElement.addEventListener("suspend",s,!1),i._videoElement.addEventListener("play",d,!1),i._videoElement.addEventListener("waiting",c,!1),i._videoElement.addEventListener("seeking",y,!1),i._videoElement.addEventListener("durationchange",_,!1),i._disposables.add(new r.Disposable(function(){i._logger.debug("Cleaning up videoElement listeners"),i._videoElement.removeEventListener("timeupdate",n,!1),i._videoElement.removeEventListener("ended",o,!1),i._videoElement.removeEventListener("error",l,!1),i._videoElement.removeEventListener("pause",u,!1),i._videoElement.removeEventListener("stalled",a,!1),i._videoElement.removeEventListener("suspend",s,!1),i._videoElement.removeEventListener("play",d,!1),i._videoElement.removeEventListener("waiting",c,!1),i._videoElement.removeEventListener("seeking",y,!1),i._videoElement.removeEventListener("durationchange",_,!1)})),x.call(i),i._lastPlayAttempt=e.now(),e.isFunction(t)&&t()}.call(i,t)},function(){"Hls"!==i._playlist.getDeliveryType()&&v.call(i,s)},function(e){return i._logger.error("Unable to initialize playlist chunk feeder",e),i._playerErrorEvent.fire([e])})}).call(i,t)};i._mediaSource.addEventListener("sourceopen",n),i._disposables.add(new r.Disposable(function(){i._logger.debug("Cleaning up sourceopen listener"),i._mediaSource.removeEventListener("sourceopen",n)})),i._videoElement.src=s.global.URL.createObjectURL(i._mediaSource)}).call(this,t),this._startTime=e.now()},d.prototype.getBandwidthLimit=function(){return this._bandwidthLimit},d.prototype.changeBandwidthLimit=function(t,i){this._logger.debug("Changing playback bandwidth limit: [%s], current limit: [%s]",t,this._bandwidthLimit),this._bandwidthLimit=t,this._switchTrackDisposable=setTimeout(e.bind(function(t){var i=this,n=this._feeder.getActiveTracks(),r=c.call(this),a=e.filter(r,function(t){return!e.find(n,function(e){return e.getTrackId()===t.getTrackId()})});e.forEach(a,function(e){_.call(i,e),i._logger.info("Switched [%s] to track [%s] with [%s] bandwidth limit",b(e),e.getTrackId(),i._bandwidthLimit)});var s=e.reduce(r,function(t,n){var r=i._mediaSourceBuffers[b(n)],a=p(r.buffer,i._videoElement.currentTime),s=n.getChunkDuration()/1e3;if(!e.isNumber(a))return!e.isNumber(t)||t>i._videoElement.currentTime?i._videoElement.currentTime:t;var o=Math.round(r.buffer.buffered.end(a)/s)*s;return!e.isNumber(t)||t>o?o:t});e.isNumber(s)||(s=i._videoElement.currentTime),this._feeder.stopRequestingAllData(),this._feeder.seekToChunk(s),this._logger.debug("Pausing of feeder completed."),this._feeder.isFetchingData()||(this._feeder.startRequestingDataForActiveTracks(this._bandwidthLimit),t())},this,i||e.noop),250)},d.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"playbacktimeleft":return this._playbackTimeLeftEvent.listen(i);case"error":return this._playerErrorEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},d.prototype.getStats=function(){return{currentTime:e.get(this._element,["currentTime"],0),width:e.get(this._element,["videoWidth"],0)||e.get(this._element,["width"],0),height:e.get(this._element,["videoHeight"],0)||e.get(this._element,["height"],0),lag:0,deliveryType:this._playlist.getDeliveryType(),isNative:!1}},d.isSupported=!!s.global.MediaSource;var L=function(){this._feeder.stopRequestingAllData(),this._logger.debug("Pausing of feeder completed.")},x=function(){if(this._feeder.isFetchingData())return this._logger.debug("Unable to start requesting data. Feeder is already fetching data.");this._feeder.startRequestingDataForActiveTracks()};return d}.apply(t,n))&&(e.exports=r)},function(e,t,i){var n,r;n=[i(1),i(0),i(2),i(3),i(6),i(11),i(19),i(8),i(4),i(18),i(5)],void 0!==(r=function(e,t,i,n,r,a,s,o,l,u,d){"use strict";function c(s,c,m){t.isNotUndefined(c,"videoElement"),t.isNotUndefined(c.videoWidth,"videoElement.videoWidth"),this._options=m,this._videoElement=c,this._disposables=new r.DisposableList,this._logger=s||new i.Logger,this._browserDetails=new a(o.global.navigator.userAgent).detect(),this._playerErrorEvent=new n.Event,this._disposables.add(this._playerErrorEvent),this._onStalled=e.bind(function(){var e=this,t=this._element.currentTime,i=function(){return 1.5*this._lastProgress.averageLength<4e3?4e3:1.5*this._lastProgress.averageLength}.call(e);if(e._element.paused)return;setTimeout(function(){if(0===e._lastProgress.count&&!e._element.paused&&e._element.currentTime===t){var n="Stream has not started within ["+i/1e3+"] seconds";e._logger.warn(n),g.call(e,d.name.progressTimeOut.name,n)}},i),setTimeout(function(){if(e._element&&e._element.currentTime===t&&!e._element.paused&&h.call(e)){var i="Stream has been stalled for ["+_/1e3+"] seconds";e._logger.warn(i),f.call(e,d.name.progressTimeOut.name,i)}},_)},this),this._onProgress=e.bind(function(){if(this._lastProgress.time=e.now(),0===this._element.buffered.length)return this._logger.debug("[%s] Hls stream progress event fired without any buffered content",this._uri);var t=this._element.buffered.end(this._element.buffered.length-1);if(this._lastProgress.buffered===t)return;if(null!==this._lastProgress.buffered){var i=this._lastProgress.averageLength*this._lastProgress.count+(t-this._lastProgress.buffered);if(this._lastProgress.count+=1,this._lastProgress.averageLength=i/this._lastProgress.count,this._lastProgress.lastCurrentTime!==this._element.currentTime&&(this._lastProgress.lastCurrentTimeOccurrenceTimestamp=e.now()),this._lastProgress.lastCurrentTimeOccurrenceTimestamp&&e.now()-this._lastProgress.lastCurrentTimeOccurrenceTimestamp>_&&this._element&&!this._element.paused&&h.call(this)){var n="Reloading stream after current time has not changed for ["+_/1e3+"] seconds due to unregistered stall.";this._logger.warn(n),f.call(this,d.name.progressTimeOut.name,n)}}this._lastProgress.buffered=t,this._lastProgress.lastCurrentTime=this._element.currentTime},this),this._onEnded=e.bind(function(){this._logger.info("[%s] Hls stream ended",this._streamId),this.stop("ended")},this),this._onError=e.bind(function(t){var i=this,n=0===i._lastProgress.count;4===e.get(this._element,["error","code"])&&n&&g.call(i,d.name.hlsNativeError.name,t);p.call(this,d.name.hlsNativeError.name,t)},this),this._lastProgress={time:0,buffered:null,averageLength:0,count:0,lastCurrentTime:0,lastCurrentTimeOccurrenceTimestamp:0},this._bufferSizeHistory=[],function(){var t=this,i=e.get(this._options,["drm","com.apple.fps.1_0"],{});if(0===e.keys(i).length)return this._logger.info("DRM config is empty so skipping initialization of EncryptedMediaHandler");if(!u.isSupported())return this._logger.error("DRM not supported by the browser");this._encryptedMediaHandler=new u(this._logger,this._videoElement,[],e.get(this._options,"drm")),this._encryptedMediaHandler.addEventListener("error",function(e){t._playerErrorEvent.fire([e])}),this._encryptedMediaHandler.addEventListener("trackRestrictionsAvailable",function(i){e.keys(i).length>0&&(t._trackRestrictions=i)}),this._disposables.add(this._encryptedMediaHandler)}.call(this),setTimeout(e.bind(function(){this._playlist=new l(this._logger,this._uri),this._disposables.add(this._playlist),this._playlist.fetch(e.noop)},this),b)}function h(){return this._element&&0!==this._element.buffered.length}function f(e,t){if(!h.call(this))return p.call(this,e,t);g.call(this,e,t)}function g(e,t){this._playerErrorEvent.fire([y(e,d.severity.RECOVERABLE,t)])}function p(e,t){this._playerErrorEvent.fire([y(e,d.severity.CRITICAL,t)])}function m(t){if(t){if(clearTimeout(this._backgroundTimeout),this._backgroundTimeout=null,!this._backgroundThrottled)return;return this._backgroundThrottled=!1,void this.start(this._element)}var i=this;this._backgroundTimeout=setTimeout(function(){s.isForeground()||function(t){if(t.muted)return!1;return e.get(t,["webkitAudioDecodedByteCount"],0)>0||e.get(t,["audioTracks","length"],0)>0||t.webkitHasAudio}(i._element)||(i._logger.info("Detecting application [background] with muted video. Pausing playback until application focused again."),i._element.pause(),i._backgroundThrottled=!0)},v)}function y(e,t,i){return{category:d.category.STREAMING,name:e,severity:t,error:"Error"===i.constructor.name?i:new Error(i)}}var _=6e3,v=3e3,b=2e3;return c.prototype.toString=function(){return e.toString(this)},c.prototype.play=function(){this._videoElement.play()},c.prototype.pause=function(){this._videoElement.pause()},c.prototype.dispose=function(){this._disposables.dispose()},c.prototype.start=function(t){if(this._uri)return this._logger.warn("Already started player");this._uri=t,this._disposables.add(s.onBackground(e.bind(m,this,!1))),this._disposables.add(s.onForeground(e.bind(m,this,!0))),function(t){o.attachUriStream(t,this._uri),!1===this._options.receiveAudio&&(t.muted=!0),e.addEventListener(t,"error",this._onError,!0),e.addEventListener(t,"stalled",this._onStalled,!1),e.addEventListener(t,"pause",this._onStalled,!1),e.addEventListener(t,"suspend",this._onStalled,!1),e.addEventListener(t,"progress",this._onProgress,!1),e.addEventListener(t,"ended",this._onEnded,!1),this._element=t}.call(this,this._videoElement)},c.prototype.getBandwidthLimit=function(){return this._logger.warn("getBandwidthLimit not supported for HLS Native")},c.prototype.changeBandwidthLimit=function(){return this._logger.warn("changeBandwidthLimit not supported for HLS Native")},c.prototype.addEventListener=function(e,i){switch(t.isString(e,"eventName"),t.isFunction(i,"listener"),e){case"error":return this._playerErrorEvent.listen(i);default:throw new Error('Event "'+e+'" is unknown.')}},c.prototype.getStats=function(){if(!this._videoElement)return{width:0,height:0,currentTime:0,lag:0,deliveryType:"Hls",isNative:!0};var t=e.get(this._element,["currentTime"],0),i=this._element&&this._element.buffered&&this._element.buffered.length>0?this._element.buffered.end(this._element.buffered.length-1):0,n=Math.max(0,i-t);this._bufferSizeHistory.push(n),this._bufferSizeHistory.length>15&&this._bufferSizeHistory.shift();for(var r=0,a=0,s=this._bufferSizeHistory.length;a<s;a++)r=Math.max(r,this._bufferSizeHistory[a]);var o=2;this._playlist&&this._playlist.getAllPlaylistTracks().length>0&&(o=this._playlist.getAllPlaylistTracks()[0].getChunkDuration());var l=2*o+r;return{width:this._element.videoWidth||this._element.width,height:this._element.videoHeight||this._element.height,currentTime:t,lag:l,deliveryType:"Hls",isNative:!0}},c.isSupported="object"==typeof document&&"maybe"===document.createElement("video").canPlayType("application/vnd.apple.mpegURL"),c}.apply(t,n))&&(e.exports=r)}])});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(93),
    __webpack_require__(81),
    __webpack_require__(36)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(MQWebSocket, BatchHttpProto, MQService) {
    return {
        MQWebSocket: MQWebSocket,
        BatchHttpProto: BatchHttpProto,
        MQService: MQService
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(9),
    __webpack_require__(95)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, telemetryAppenderFactory) {
    'use strict';

    function PCastLoggerFactory() {

    }

    PCastLoggerFactory.prototype.createPCastLogger = function createPCastLogger(baseUri, disableConsole) {
        if (baseUri) {
            assert.isStringNotEmpty(baseUri, 'baseUri');
        }

        var logger = new logging.Logger();
        var telemetryAppender = telemetryAppenderFactory.getAppender(baseUri);

        telemetryAppender.setThreshold(logging.level.INFO);

        if (!disableConsole) {
            logger.addAppender(new logging.ConsoleAppender());
        }

        logger.addAppender(telemetryAppender);

        logger.isPCastLogger = true;

        return logger;
    };

    return new PCastLoggerFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var logging = {
        level: {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            FATAL: 5
        }
    };

    return logging;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function Channel(room) {
        assert.isObject(room, 'room');

        this._room = room;
    }

    Channel.prototype.getChannelId = function getChannelId() {
        return this._room.getRoomId.apply(this._room, arguments);
    };

    Channel.prototype.getObservableAlias = function getObservableAlias() {
        return this._room.getObservableAlias.apply(this._room, arguments);
    };

    Channel.prototype.getObservableName = function getObservableName() {
        return this._room.getObservableName.apply(this._room, arguments);
    };

    Channel.prototype.getObservableDescription = function getObservableDescription() {
        return this._room.getObservableDescription.apply(this._room, arguments);
    };

    Channel.prototype.getObservableType = function getObservableType() {
        return this._room.getObservableType.apply(this._room, arguments);
    };

    Channel.prototype.getObservableMembers = function getObservableMembers() {
        return this._room.getObservableMembers.apply(this._room, arguments);
    };

    Channel.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._room.getObservableBridgeId.apply(this._room, arguments);
    };

    Channel.prototype.getObservablePin = function getObservablePin() {
        return this._room.getObservablePin.apply(this._room, arguments);
    };

    Channel.prototype.toString = function toString() {
        return this._room.toString.apply(this._room, arguments);
    };

    Channel.prototype.toJson = function toJson() {
        return {
            channelId: this._room.getRoomId(),
            alias: this._room.getObservableAlias().getValue(),
            name: this._room.getObservableName().getValue(),
            description: this._room.getObservableDescription().getValue(),
            type: this._room.getObservableType().getValue(),
            pin: this._room.getObservablePin().getValue(),
            bridgeId: this._room.getObservableBridgeId().getValue()
        };
    };

    Channel.prototype.commitChanges = function commitChanges() {
        return this._room.commitChanges.apply(this._room, arguments);
    };

    Channel.prototype.reload = function reload() {
        return this._room.reload.apply(this._room, arguments);
    };

    Channel.prototype._update = function update() {
        return this._room._update.apply(this._room, arguments);
    };

    Channel.prototype._addMembers = function addMembers() {
        return this._room._addMembers.apply(this._room, arguments);
    };

    Channel.prototype._removeMembers = function removeMembers() {
        return this._room._removeMembers.apply(this._room, arguments);
    };

    Channel.prototype._updateMembers = function updateMembers() {
        return this._room._updateMembers.apply(this._room, arguments);
    };

    return Channel;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var mostRecentStrategy = 'most-recent';
    var highAvailabilityStrategy = 'high-availability';
    var blacklistedTimeoutInterval = 3 * 60 * 1000;

    function MemberSelector(selectionStrategy, logger) {
        if (selectionStrategy) {
            assert.isStringNotEmpty(selectionStrategy, 'selectionStrategy');
        }

        assert.isObject(logger, 'logger');

        this._selectionStrategy = selectionStrategy || mostRecentStrategy;
        this._logger = logger;
        this._lastSelectedMember = null;
        this._blackListedMembers = [];
    }

    MemberSelector.prototype.getNext = function getNext(members, forceNewSelection) {
        var newSelectedMember = getNextMember.call(this, members, forceNewSelection);

        if (this.getNumberOfBlackListedMembers() > 0 && hasExceededBlacklistedTimeoutInterval.call(this) && !newSelectedMember) {
            this._logger.info('Unable to select new member. Clearing [%s] black-listed members and trying again', this.getNumberOfBlackListedMembers());

            this.clearBlackListedMembers();

            return this.getNext(members, forceNewSelection);
        }

        if (this._lastSelectedMember !== newSelectedMember) {
            if (!newSelectedMember) {
                this._logger.info('Unable to select new member');
            } else {
                this._logger.info('Selecting new Member [%s]/[%s]', newSelectedMember.getSessionId(), newSelectedMember.getObservableScreenName().getValue());
            }

            if (this._lastSelectedMember && !isBlackListed.call(this, this._lastSelectedMember)) {
                addBlacklistedMember.call(this, this._lastSelectedMember);
            }
        }

        this._lastSelectedMember = newSelectedMember;

        return newSelectedMember;
    };

    MemberSelector.prototype.getStrategy = function() {
        return this._selectionStrategy;
    };

    MemberSelector.prototype.clearBlackListedMembers = function() {
        this._blackListedMembers = [];
    };

    MemberSelector.prototype.getNumberOfBlackListedMembers = function() {
        return this._blackListedMembers.length;
    };

    MemberSelector.prototype.dispose = function dispose() {
        this._lastSelectedMember = null;
        this._blackListedMembers = [];
    };

    MemberSelector.getSimilarMembers = function(screenName, members) {
        var otherMembers = _.filter(members, function(member) {
            return member.getObservableScreenName().getValue() !== screenName;
        });
        var primaryMembers = _.filter(otherMembers, isPrimary);
        var alternateMembers = _.filter(otherMembers, isAlternate);

        if (isPrimaryName(screenName)) {
            return primaryMembers || alternateMembers || otherMembers;
        }

        if (isAlternateName(screenName)) {
            return alternateMembers || primaryMembers || otherMembers;
        }

        return otherMembers || primaryMembers || alternateMembers;
    };

    function isBlackListed(member) {
        return !!_.find(this._blackListedMembers, function(blackListedMember) {
            return blackListedMember.key === getMemberKey(member);
        });
    }

    function addBlacklistedMember(member) {
        if (!member) {
            return;
        }

        this._blackListedMembers.push({
            key: getMemberKey(member),
            timestamp: _.now()
        });
    }

    function hasExceededBlacklistedTimeoutInterval() {
        var totalTime = _.reduce(this._blackListedMembers, function(total, blackListedMember) {
            return total + _.now() - blackListedMember.timestamp;
        }, 0);

        return totalTime > blacklistedTimeoutInterval;
    }

    function getMemberKey(member) {
        if (!member) {
            return '';
        }

        return member.getSessionId() + member.getObservableScreenName().getValue();
    }

    function getNextMember(members, forceNewSelection) {
        switch (this._selectionStrategy) {
        case mostRecentStrategy:
            return getMostRecentMember(members);
        case highAvailabilityStrategy:
            if (this._lastSelectedMember && !forceNewSelection) {
                return this._lastSelectedMember;
            }

            var allowedMembers = getAllowedMembers.call(this, members);

            if (forceNewSelection) {
                allowedMembers = removeMember(allowedMembers, this._lastSelectedMember);
            }

            var candidates = _.filter(allowedMembers, isPrimary);

            if (candidates.length === 0) {
                candidates = _.filter(allowedMembers, isAlternate);
            }

            if (candidates.length === 0) {
                candidates = allowedMembers;
            }

            return _.sample(candidates);
        default:
            throw new Error('Invalid Selection Strategy');
        }
    }

    function getMostRecentMember(members) {
        return _.reduce(members, function(memberA, memberB) {
            if (!memberA) {
                return memberB;
            }

            return memberA.getLastUpdate() > memberB.getLastUpdate() ? memberA : memberB;
        });
    }

    function isPrimary(member) {
        var screenName = member.getObservableScreenName().getValue();

        return isPrimaryName(screenName);
    }

    function isAlternate(member) {
        var screenName = member.getObservableScreenName().getValue();

        return isAlternateName(screenName);
    }

    function isPrimaryName(name) {
        var primary = /primary/i;

        return primary.test(name);
    }

    function isAlternateName(name) {
        var alternate = /alternate/i;

        return alternate.test(name);
    }

    function getAllowedMembers(members) {
        var that = this;

        return _.filter(members, function(member) {
            return !isBlackListed.call(that, member);
        });
    }

    function removeMember(members, memberToRemove) {
        return _.filter(members, function(member) {
            return getMemberKey(member) !== getMemberKey(memberToRemove);
        });
    }

    return MemberSelector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(23),
    __webpack_require__(24),
    __webpack_require__(30),
    __webpack_require__(21),
    __webpack_require__(14),
    __webpack_require__(10),
    __webpack_require__(11),
    __webpack_require__(13),
    __webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, AdminAPI, PCastExpress, RoomService, MemberSelector, Stream, roomEnums, memberEnums, streamEnums, trackEnums) {
    'use strict';

    var defaultStreamWildcardTokenRefreshInterval = 300000;
    var defaultWildcardEnabled = true;

    function RoomExpress(options) {
        assert.isObject(options, 'options');

        if (options.pcastExpress) {
            assert.isObject(options.pcastExpress, 'options.pcastExpress');
        } else {
            assert.isStringNotEmpty(options.backendUri, 'options.backendUri');
            assert.isObject(options.authenticationData, 'options.authenticationData');
        }

        this._pcastExpress = options.pcastExpress || new PCastExpress(options);
        this._shouldDisposeOfPCastExpress = !options.pcastExpress;
        this._roomServices = {};
        this._roomServicePublishers = {};
        this._activeRoomServices = [];
        this._membersSubscriptions = {};
        this._logger = this._pcastExpress.getPCast().getLogger();

        var that = this;

        this._pcastExpress.getPCastObservable().subscribe(function(pcast) {
            if (!pcast) {
                var roomServicesToCleanUp = _.assign({}, that._roomServices);

                _.forOwn(that._membersSubscriptions, function(membersSubscription) {
                    membersSubscription.dispose();
                });

                that._pcastExpress.waitForOnline(function() {
                    _.forOwn(roomServicesToCleanUp, function(roomService) {
                        roomService.stop();
                    });
                }, true);

                that._membersSubscriptions = {};
                that._roomServices = {};
                that._activeRoomServices = [];
            }
        });
    }

    RoomExpress.prototype.dispose = function dispose() {
        disposeOfRoomServices.call(this);

        if (this._shouldDisposeOfPCastExpress) {
            this._pcastExpress.dispose();
        }
    };

    RoomExpress.prototype.getPCastExpress = function getPCastExpress() {
        return this._pcastExpress;
    };

    // Responsible for creating room. Returns immutable room
    RoomExpress.prototype.createRoom = function createRoom(options, callback) {
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');
        assert.isStringNotEmpty(options.room.name, 'options.room.name');
        assert.isStringNotEmpty(options.room.type, 'options.room.type');

        if (options.room.description) {
            assert.isStringNotEmpty(options.room.description, 'options.room.description');
        }

        var roomDescription = options.room.description || getDefaultRoomDescription(options.room.type);

        createRoomService.call(this, null, null, function(error, roomServiceResponse) {
            if (error) {
                return callback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return callback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;
            var roomToCreate = _.assign({}, options.room);

            if (!roomToCreate.description) {
                roomToCreate.description = roomDescription;
            }

            roomService.createRoom(roomToCreate, function(error, roomResponse) {
                if (error) {
                    return callback(error);
                }

                // Don't return room service. Not in room. Room returned is immutable
                roomService.stop();

                return callback(null, roomResponse);
            });
        });
    };

    RoomExpress.prototype.joinRoom = function joinRoom(options, joinRoomCallback, membersChangedCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinRoomCallback, 'joinRoomCallback');
        assert.isStringNotEmpty(options.role, 'options.role');

        if (membersChangedCallback) {
            assert.isFunction(membersChangedCallback, 'membersChangedCallback');
        }

        if (options.screenName) {
            assert.isStringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.roomId) {
            assert.isStringNotEmpty(options.roomId, 'options.roomId');
        }

        if (options.alias) {
            assert.isStringNotEmpty(options.alias, 'options.alias');
        }

        if (options.streams) {
            assert.isArray(options.streams, 'options.streams');
        }

        var that = this;
        var joinRoomWithPCast = function(pcast) {
            if (!pcast) {
                return;
            }

            joinRoomWithOptions.call(that, options, function(error, response) {
                var joinRoomResponse = response;

                if (joinRoomResponse && joinRoomResponse.roomService) {
                    var leaveRoom = joinRoomResponse.roomService.leaveRoom;

                    joinRoomResponse.roomService.leaveRoom = function(callback) {
                        if (subscription && pcast.getObservableStatus() !== 'offline') {
                            subscription.dispose();
                        }

                        leaveRoom(callback);
                    };
                }

                joinRoomCallback(error, response);
            }, membersChangedCallback);
        };

        if (this._pcastExpress.getPCastObservable()) {
            return joinRoomWithPCast(this._pcastExpress.getPCastObservable());
        }

        var subscription = this._pcastExpress.getPCastObservable().subscribe(joinRoomWithPCast);
    };

    RoomExpress.prototype.publishToRoom = function publishToRoom(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');

        if (options.streamUri) {
            assert.isStringNotEmpty(options.streamUri, 'options.streamUri');
        } else if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.screenName) {
            assert.isStringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.tags) {
            assert.isArray(options.tags, 'options.tags');
        }

        if (options.streamInfo) {
            assert.isObject(options.streamInfo, 'options.streamInfo');
        }

        if (options.viewerStreamSelectionStrategy) {
            assert.isStringNotEmpty(options.viewerStreamSelectionStrategy, 'options.viewerStreamSelectionStrategy');
        }

        if (_.isUndefined(options.enableWildcardCapability)) {
            options.enableWildcardCapability = defaultWildcardEnabled;
        }

        assert.isValidType(options.streamType, streamEnums.types, 'options.streamType');
        assert.isValidType(options.memberRole, memberEnums.roles, 'options.memberRole');
        assert.isBoolean(options.enableWildcardCapability, 'options.enableWildcardCapability');

        var that = this;
        var screenName = options.screenName || _.uniqueId();

        this.createRoom(options, function(error, createRoomResponse) {
            if (error) {
                return callback(error);
            }

            if (createRoomResponse.status !== 'ok' && createRoomResponse.status !== 'already-exists') {
                return callback(null, createRoomResponse);
            }

            var room = createRoomResponse.room;
            var publishOptions = _.assign({
                monitor: {
                    callback: _.bind(monitorSubsciberOrPublisher, that, callback),
                    options: {conditionCountForNotificationThreshold: 8}
                },
                streamInfo: {}
            }, options);

            if (room.getObservableType().getValue() === roomEnums.types.channel.name) {
                publishOptions.tags = ['channelId:' + room.getRoomId()].concat(publishOptions.tags || []);
            } else {
                publishOptions.tags = ['roomId:' + room.getRoomId()].concat(publishOptions.tags || []);
            }

            if (options.streamUri) {
                var remoteOptions = _.assign({connectOptions: []}, publishOptions);
                var hasRoomConnectOptions = _.find(remoteOptions.connectOptions, function(option) {
                    return _.startsWith(option, 'room-id');
                });

                if (!hasRoomConnectOptions) {
                    remoteOptions.connectOptions = remoteOptions.connectOptions.concat([
                        'room-id=' + room.getRoomId(),
                        'member-role=' + options.memberRole,
                        'member-stream-type=' + options.streamType,
                        'screen-name=' + screenName
                    ]);
                }

                if (options.enableWildcardCapability) {
                    remoteOptions.connectOptions.concat([
                        'member-stream-token-type=Wildcard',
                        'member-stream-token-refresh-interval=' + defaultStreamWildcardTokenRefreshInterval
                    ]);
                }

                return that._pcastExpress.publishRemote(remoteOptions, callback);
            }

            var joinRoomAsAudienceOptions = _.assign({}, options, {
                role: memberEnums.roles.audience.name,
                roomId: room.getRoomId()
            });

            joinRoomWithOptions.call(that, joinRoomAsAudienceOptions, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok' && response.status !== 'already-in-room') {
                    return callback(null, createRoomResponse);
                }

                var activeRoom = response.roomService.getObservableActiveRoom().getValue();

                publishAndUpdateSelf.call(that, publishOptions, activeRoom, callback);
            });
        });
    };

    RoomExpress.prototype.publishScreenToRoom = function publishScreenToRoom(options, callback) {
        var publishScreenOptions = _.assign({mediaConstraints: {screen: true}}, options);

        this.publishToRoom(publishScreenOptions, callback);
    };

    RoomExpress.prototype.subscribeToMemberStream = function(memberStream, options, callback) {
        assert.isObject(memberStream, 'memberStream');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var streamUri = memberStream.getUri();
        var streamId = memberStream.getPCastStreamId();
        var streamToken = parseStreamTokenFromStreamUri(streamUri, options.capabilities);
        var isScreen = _.get(memberStream.getInfo(), ['isScreen'], false);

        if (!streamId) {
            this._logger.error('Invalid Member Stream. Unable to parse streamId from uri');

            throw new Error('Invalid Member Stream. Unable to parse streamId from uri');
        }

        var subscribeOptions = _.assign({}, {
            streamId: streamId,
            streamToken: streamToken
        }, options);
        var disposables = new disposable.DisposableList();

        subscribeToMemberStream.call(this, subscribeOptions, isScreen, function(error, response) {
            disposables.dispose();

            if (response && response.status === 'ok' && response.mediaStream && response.mediaStream.getStream()) {
                disposables.add(memberStream.getObservableAudioState().subscribe(function(state) {
                    var monitor = response.mediaStream.getMonitor();
                    var tracks = response.mediaStream.getStream().getAudioTracks();

                    if (monitor && tracks.length === 1) {
                        monitor.setMonitorTrackState(tracks[0], state === trackEnums.states.trackEnabled.name);
                    }
                }, {initial: 'notify'}));
                disposables.add(memberStream.getObservableVideoState().subscribe(function(state) {
                    var monitor = response.mediaStream.getMonitor();
                    var tracks = response.mediaStream.getStream().getVideoTracks();

                    if (monitor && tracks.length === 1) {
                        monitor.setMonitorTrackState(tracks[0], state === trackEnums.states.trackEnabled.name);
                    }
                }, {initial: 'notify'}));
            }

            if (error && parseInt(error.category) === 6) {
                return callback(error, {status: 'device-insecure'});
            }

            callback(error, response);
        });
    };

    function disposeOfRoomServices() {
        _.forOwn(this._membersSubscriptions, function(membersSubscription) {
            membersSubscription.dispose();
        });
        _.forOwn(this._roomServicePublishers, function(publishers) {
            _.forEach(publishers, function(publisher) {
                publisher.stop();
            });
        });
        _.forOwn(this._roomServices, function(roomService) {
            roomService.stop();
        });

        this._membersSubscriptions = {};
        this._roomServicePublishers = {};
        this._roomServices = {};
        this._activeRoomServices = [];
    }

    function createRoomService(roomId, alias, callback) {
        var that = this;
        var uniqueId = _.uniqueId();

        this._pcastExpress.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var activeRoomService = findActiveRoom.call(that, roomId, alias);

            if (activeRoomService) {
                return callback(null, {
                    status: 'ok',
                    roomService: activeRoomService
                });
            }

            that._roomServices[uniqueId] = new RoomService(that._pcastExpress.getPCast());

            var expressRoomService = createExpressRoomService.call(that, that._roomServices[uniqueId], uniqueId);

            callback(null, {
                status: 'ok',
                roomService: expressRoomService
            });
        });
    }

    function findActiveRoom(roomId, alias) {
        return _.find(this._activeRoomServices, function(roomService) {
            var activeRoom = roomService.getObservableActiveRoom().getValue();

            return activeRoom && (activeRoom.getRoomId() === roomId || activeRoom.getObservableAlias().getValue() === alias);
        });
    }

    function createExpressRoomService(roomService, uniqueId) {
        var that = this;
        var roomServiceStop = roomService.stop;
        var roomServiceLeaveRoom = roomService.leaveRoom;

        roomService.stop = function() {
            roomServiceStop.call(roomService);

            delete that._roomServices[uniqueId];
        };

        roomService.leaveRoom = function leaveRoom(callback) {
            var room = roomService.getObservableActiveRoom().getValue();

            roomServiceLeaveRoom.call(roomService, function(error, response) {
                if (error) {
                    roomService.stop();

                    return callback(error);
                }

                if (response.status !== 'ok' && response.status !== 'not-in-room') {
                    return callback(null, response);
                }

                if (room && that._membersSubscriptions[room.getRoomId()]) {
                    that._membersSubscriptions[room.getRoomId()].dispose();

                    delete that._membersSubscriptions[room.getRoomId()];
                }

                that._logger.info('Successfully disposed of Express Room Service [%s]', room ? room.getRoomId() : 'Uninitialized');

                roomService.stop();

                return callback(null, response);
            });
        };

        return roomService;
    }

    function joinRoomWithOptions(options, joinRoomCallback, membersChangedCallback) {
        var that = this;
        var role = options.role;
        var screenName = options.screenName || _.uniqueId();

        createRoomService.call(that, options.roomId, options.alias, function(error, roomServiceResponse) {
            if (error) {
                return joinRoomCallback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return joinRoomCallback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;
            var activeRoomObservable = roomService.getObservableActiveRoom();
            var activeRoom = activeRoomObservable.getValue();
            var membersSubscription = null;

            if (!activeRoom) {
                roomService.start(role, screenName);
            }

            if (options.streams) {
                updateSelfStreamsAndRole.call(that, options.streams, options.role, roomService, function(error) {
                    if (error) {
                        return joinRoomCallback(error);
                    }
                });
            }

            if (activeRoom && membersChangedCallback) {
                joinRoomCallback(null, {
                    status: 'ok',
                    roomService: roomService
                });

                return activeRoomObservable.subscribe(function(newRoom) {
                    if (membersSubscription) {
                        membersSubscription.dispose();
                        membersSubscription = null;
                    }

                    if (!newRoom) {
                        return;
                    }

                    membersSubscription = newRoom.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});
                }, {initial: 'notify'});
            }

            roomService.enterRoom(options.roomId, options.alias, function(error, roomResponse) {
                if (error) {
                    roomService.stop();

                    return joinRoomCallback(error);
                }

                if (roomResponse.status === 'not-found') {
                    roomService.stop();

                    return joinRoomCallback(null, {status: 'room-not-found'});
                }

                if (roomResponse.status !== 'ok' && roomResponse.status !== 'already-in-room') {
                    roomService.stop();

                    return joinRoomCallback(null, roomResponse);
                }

                var room = roomResponse.room;

                that._activeRoomServices.push(roomService);

                joinRoomCallback(null, {
                    status: 'ok',
                    roomService: roomService
                });

                if (membersChangedCallback) {
                    membersSubscription = room.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});

                    return activeRoomObservable.subscribe(function(newRoom) {
                        if (membersSubscription) {
                            membersSubscription.dispose();
                            membersSubscription = null;
                        }

                        if (!newRoom) {
                            return;
                        }

                        membersSubscription = newRoom.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});
                    });
                }
            });
        });
    }

    function subscribeToMemberStream(subscribeOptions, isScreen, callback) {
        var that = this;

        var count = 0;
        var handleSubscribe = function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok' && response.status !== 'streaming-not-ready') {
                return callback(null, response);
            }

            count++;

            if (response.status === 'streaming-not-ready' && count < 3) {
                return setTimeout(response.retry, count * count * 1000);
            } else if (response.status === 'streaming-not-ready' && count >= 3) {
                return callback(null, {status: response.status});
            }

            var subscribeResponse = _.assign({}, response, {status: 'ok'});

            if (count > 1) {
                subscribeResponse.reason = 'stream-failure-recovered';

                return callback(null, subscribeResponse);
            }

            callback(null, subscribeResponse);
        };

        if (isScreen) {
            return that._pcastExpress.subscribeToScreen(subscribeOptions, handleSubscribe);
        }

        return that._pcastExpress.subscribe(subscribeOptions, handleSubscribe);
    }

    function publishAndUpdateSelf(options, room, callback) {
        var that = this;
        var publisher;
        var refreshTokenTimeout;

        var handlePublish = function(error, response) {
            if (refreshTokenTimeout && publisher) {
                clearInterval(refreshTokenTimeout);
            }

            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok') {
                return callback(null, response);
            }

            addPublisher.call(that, response.publisher, room);
            removePublisher.call(that, publisher, room);

            publisher = response.publisher;

            var publisherStop = _.bind(publisher.stop, publisher);

            publisher.stop = function() {
                clearInterval(refreshTokenTimeout);
                publisherStop.apply(publisher, arguments);
            };

            if (options.enableWildcardCapability) {
                refreshTokenTimeout = setInterval(function() {
                    that._logger.debug('Refresh wildcard viewer stream token for [%s] interval of [%s] has expired. Creating new token.',
                        publisher.getStreamId(), defaultStreamWildcardTokenRefreshInterval);

                    var activeRoomService = findActiveRoom.call(that, room.getRoomId());
                    var activeRoom = activeRoomService ? activeRoomService.getObservableActiveRoom().getValue() : room;

                    createViewerStreamTokensAndUpdateSelf.call(that, options, publisher, activeRoom, function ignoreSuccess(error, response) {
                        if (error || response.status !== 'ok') {
                            callback(error, response);
                        }
                    });
                }, defaultStreamWildcardTokenRefreshInterval);
            }

            createViewerStreamTokensAndUpdateSelf.call(that, options, response.publisher, room, callback);
        };

        if (_.get(options, ['mediaConstraints', 'screen'], false)) {
            _.set(options, ['streamInfo', 'isScreen'], true);

            return this._pcastExpress.publishScreen(options, handlePublish);
        }

        this._pcastExpress.publish(options, handlePublish);
    }

    function addPublisher(publisher, room) {
        if (!this._roomServicePublishers[room.getRoomId()]) {
            this._roomServicePublishers[room.getRoomId()] = [];
        }

        this._roomServicePublishers[room.getRoomId()].push(publisher);
    }

    function removePublisher(publisher, room) {
        if (!this._roomServicePublishers[room.getRoomId()] || !publisher) {
            return;
        }

        this._roomServicePublishers[room.getRoomId()] = _.filter(this._roomServicePublishers[room.getRoomId()], function(roomPublisher) {
            return roomPublisher.getStreamId() !== publisher.getStreamId();
        });
    }

    function createViewerStreamTokensAndUpdateSelf(options, publisher, room, callback) {
        var that = this;
        var streamType = options.streamType;
        var streamInfo = options.streamInfo;
        var composeWithAdditionalStreams = options.viewerStreamSelectionStrategy === 'high-availability' && room.getObservableType().getValue() === roomEnums.types.channel.name;
        var additionalStreamIds = null;
        var handleJoinRoomCallback = callback;
        var disposable;

        if (!options.enableWildcardCapability) {
            var publisherStream = mapStreamToMemberStream(publisher, streamType, streamInfo);
            var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(that, publisherStream, room)});

            return updateSelfAndListenForChanges.call(that, updateSelfOptions, handleJoinRoomCallback, publisher, room);
        }

        if (composeWithAdditionalStreams) {
            var membersWithSameContent = MemberSelector.getSimilarMembers(options.screenName, room.getObservableMembers().getValue());

            additionalStreamIds = getValidStreamIds(membersWithSameContent);

            handleJoinRoomCallback = function(error, response) {
                callback(error, response);

                var roomService = _.get(response, 'roomService', findActiveRoom.call(that, room.getRoomId()));

                if (error || response.status !== 'ok' || disposable || !roomService) {
                    return;
                }

                var activeRoom = roomService.getObservableActiveRoom().getValue();

                disposable = activeRoom.getObservableMembers().subscribe(function(members) {
                    var newMembersWithSameContent = MemberSelector.getSimilarMembers(options.screenName, members);
                    var newAdditionalStreamIds = getValidStreamIds(newMembersWithSameContent);
                    var areTheSame = newAdditionalStreamIds.length === additionalStreamIds.length && _.reduce(newAdditionalStreamIds, function(areAllPreviousTheSame, streamId) {
                        return areAllPreviousTheSame ? _.includes(additionalStreamIds, streamId) : areAllPreviousTheSame;
                    }, true);

                    if (areTheSame) {
                        return;
                    }

                    that._logger.debug('Members with similar content to stream [%s] have changed. Generating new wildcard viewer token', publisher.getStreamId());

                    disposable.dispose();
                    disposable = null;

                    createViewerStreamTokensAndUpdateSelf.call(that, options, publisher, activeRoom, function ignoreSuccess(error, response) {
                        if (error || response.status !== 'ok') {
                            callback(error, response);
                        }
                    });
                });
            };
        }

        if (additionalStreamIds && additionalStreamIds.length > 0) {
            that._logger.debug('Creating [real-time] viewer wildcard stream token for published stream [%s] with [%s] additional streams', publisher.getStreamId(), additionalStreamIds.length);
        } else {
            that._logger.debug('Creating [real-time] viewer wildcard stream token for published stream [%s]', publisher.getStreamId());
        }

        that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', [], publisher.getStreamId(), additionalStreamIds, function(error, createStreamTokenResponse) {
            if (error) {
                return callback(error);
            }

            if (createStreamTokenResponse.status !== 'ok') {
                return callback(null, createStreamTokenResponse);
            }

            if (additionalStreamIds && additionalStreamIds.length > 0) {
                that._logger.debug('Creating [broadcast] viewer wildcard stream token for published stream [%s] with [%s] additional streams', publisher.getStreamId(), additionalStreamIds.length);
            } else {
                that._logger.debug('Creating [broadcast] viewer wildcard stream token for published stream [%s]', publisher.getStreamId());
            }

            that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', ['broadcast'], publisher.getStreamId(), additionalStreamIds, function(error, createStreamTokenBroadcastResponse) {
                if (error) {
                    return callback(error);
                }

                if (createStreamTokenBroadcastResponse.status !== 'ok') {
                    return callback(null, createStreamTokenBroadcastResponse);
                }

                if (_.includes(options.capabilities, 'streaming')) {
                    if (additionalStreamIds && additionalStreamIds.length > 0) {
                        that._logger.debug('Creating [streaming] viewer wildcard stream token for published stream [%s] with [%s] additional streams', publisher.getStreamId(), additionalStreamIds.length);
                    } else {
                        that._logger.debug('Creating [streaming] viewer wildcard stream token for published stream [%s]', publisher.getStreamId());
                    }

                    return that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', ['streaming'], publisher.getStreamId(), additionalStreamIds, function(error, createStreamTokenWithStreamingResponse) {
                        if (error) {
                            return callback(error);
                        }

                        if (createStreamTokenWithStreamingResponse.status !== 'ok') {
                            return callback(null, createStreamTokenWithStreamingResponse);
                        }

                        if (_.includes(options.capabilities, 'drm')) {
                            if (additionalStreamIds && additionalStreamIds.length > 0) {
                                that._logger.debug('Creating [drm-open-access] and [drm-hollywood] viewer wildcard stream token for published stream [%s] with [%s] additional streams', publisher.getStreamId(), additionalStreamIds.length);
                            } else {
                                that._logger.debug('Creating [drm-open-access] and [drm-hollywood] viewer wildcard stream token for published stream [%s]', publisher.getStreamId());
                            }

                            return that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', ['streaming', 'drm-open-access'], publisher.getStreamId(), additionalStreamIds, function(error, createStreamTokenWithStreamingDrmOpenAccessResponse) {
                                if (error) {
                                    return callback(error);
                                }

                                if (createStreamTokenWithStreamingDrmOpenAccessResponse.status !== 'ok') {
                                    return callback(null, createStreamTokenWithStreamingDrmOpenAccessResponse);
                                }

                                return that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', ['streaming', 'drm-hollywood'], publisher.getStreamId(), additionalStreamIds, function(error, createStreamTokenWithStreamingDrmHollywoodResponse) {
                                    if (error) {
                                        return callback(error);
                                    }

                                    if (createStreamTokenWithStreamingDrmHollywoodResponse.status !== 'ok') {
                                        return callback(null, createStreamTokenWithStreamingDrmHollywoodResponse);
                                    }

                                    var drmTokens = [createStreamTokenWithStreamingDrmOpenAccessResponse.streamToken, createStreamTokenWithStreamingDrmHollywoodResponse.streamToken];
                                    var publisherStream = mapStreamToMemberStream(publisher, streamType, streamInfo, createStreamTokenResponse.streamToken, createStreamTokenBroadcastResponse.streamToken, createStreamTokenWithStreamingResponse.streamToken, drmTokens);
                                    var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(that, publisherStream, room)});

                                    updateSelfAndListenForChanges.call(that, updateSelfOptions, handleJoinRoomCallback, publisher, room);
                                });
                            });
                        }

                        var publisherStream = mapStreamToMemberStream(publisher, streamType, streamInfo, createStreamTokenResponse.streamToken, createStreamTokenBroadcastResponse.streamToken, createStreamTokenWithStreamingResponse.streamToken);
                        var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(that, publisherStream, room)});

                        updateSelfAndListenForChanges.call(that, updateSelfOptions, handleJoinRoomCallback, publisher, room);
                    });
                }

                var publisherStream = mapStreamToMemberStream(publisher, streamType, streamInfo, createStreamTokenResponse.streamToken, createStreamTokenBroadcastResponse.streamToken);
                var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(that, publisherStream, room)});

                updateSelfAndListenForChanges.call(that, updateSelfOptions, handleJoinRoomCallback, publisher, room);
            });
        });
    }

    function getValidStreamIds(members) {
        return _.reduce(members, function(streamIds, member) {
            var stream = _.get(member.getObservableStreams().getValue(), '0');
            var streamId = stream ? stream.getPCastStreamId() : '';

            if (streamId) {
                streamIds.push(streamId);
            }

            return streamIds;
        }, []);
    }

    function updateSelfAndListenForChanges(options, callback, publisher, room) {
        var that = this;
        var activeRoomService = findActiveRoom.call(that, room.getRoomId());
        var responseObject = {
            publisher: publisher,
            roomService: activeRoomService
        };
        var handleUpdate = function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status === 'ok') {
                activeRoomService = findActiveRoom.call(that, room.getRoomId());

                var selfStreams = activeRoomService.getSelf().getObservableStreams().getValue();
                var publishedSelfStream = _.find(selfStreams, function(selfStream) {
                    return selfStream.getPCastStreamId() === publisher.getStreamId();
                });

                listenForTrackStateChange.call(that, publisher.getStream(), publishedSelfStream);
            }

            // TODO(DY) Clean up once event based listeners are exposed on the publisher for stop/end
            if (response.status === 'ok' && !publisher._cleanUpRoomWrapper) {
                var publisherStop = _.bind(publisher.stop, publisher);

                publisher._cleanUpRoomWrapper = true;

                publisher.stop = function() {
                    removePublisher.call(that, publisher, room);

                    var streamsAfterStop = mapNewPublisherStreamToMemberStreams.call(that, null, room);
                    var roomService = findActiveRoom.call(that, room.getRoomId());

                    publisherStop.apply(publisher, arguments);

                    if (!roomService) {
                        return;
                    }

                    updateSelfStreamsAndRoleAndEnterRoomIfNecessary.call(that, streamsAfterStop, options.memberRole, roomService, options, function(error) {
                        if (error) {
                            return callback(error);
                        }
                    });
                };
            }

            return callback(null, _.assign({}, responseObject, response));
        };

        updateSelfStreamsAndRoleAndEnterRoomIfNecessary.call(that, options.streams, options.memberRole, activeRoomService, options, handleUpdate);
    }

    function mapNewPublisherStreamToMemberStreams(publisherStream, room) {
        var activeRoomService = findActiveRoom.call(this, room.getRoomId());
        var defaultStreams = publisherStream ? [publisherStream] : [];

        if (!activeRoomService) {
            return defaultStreams;
        }

        var self = activeRoomService.getSelf();

        if (!self) {
            return defaultStreams;
        }

        var selfStreams = _.map(self.getObservableStreams().getValue(), function(selfStream) {
            return selfStream.toJson();
        });
        var publishers = this._roomServicePublishers[room.getRoomId()] || [];
        var publisherIds = _.map(publishers, function(publisher) {
            return publisher.getStreamId();
        });

        if (!selfStreams || selfStreams.length === 0) {
            return defaultStreams;
        }

        if (publisherStream) {
            selfStreams = _.filter(selfStreams, function(stream) {
                var hasSameUri = stream.uri === publisherStream.uri;
                var pcastStreamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
                var isPCastStream = !!pcastStreamId;
                var hasSamePCastStreamId = isPCastStream && pcastStreamId === Stream.parsePCastStreamIdFromStreamUri(publisherStream.uri);
                var hasSameType = stream.type === publisherStream.type;

                return (!hasSameUri && !hasSamePCastStreamId) || !hasSameType;
            });

            selfStreams.push(publisherStream);
        }

        return _.filter(selfStreams, function(stream) {
            return _.includes(publisherIds, Stream.parsePCastStreamIdFromStreamUri(stream.uri) || stream.uri);
        });
    }

    function updateSelfStreamsAndRole(streams, role, roomService, callback) {
        var activeRoom = roomService ? roomService.getObservableActiveRoom().getValue() : null;

        if (streams && roomService) {
            roomService.getSelf().setStreams(streams);
        }

        if (role && roomService) {
            roomService.getSelf().getObservableRole().setValue(role);
        }

        if (activeRoom && roomService.getSelf()) {
            return updateSelfWithRetry.call(this, roomService.getSelf(), callback);
        }
    }

    function updateSelfStreamsAndRoleAndEnterRoomIfNecessary(streams, role, roomService, options, callback) {
        var activeRoomService = findActiveRoom.call(this, options.room.roomId, options.room.alias);
        var activeRoom = roomService ? roomService.getObservableActiveRoom().getValue() : null;
        var shouldJoinRoom = !activeRoom && !activeRoomService;
        var that = this;

        if (streams && activeRoomService) {
            activeRoomService.getSelf().setStreams(streams);
        }

        if (role && activeRoomService) {
            activeRoomService.getSelf().getObservableRole().setValue(role);
        }

        if (activeRoom && activeRoomService.getSelf()) {
            return updateSelfWithRetry.call(this, activeRoomService.getSelf(), callback);
        }

        if (shouldJoinRoom) {
            var joinRoomAsPresenterOptions = _.assign({
                role: role,
                alias: _.get(options, ['room', 'alias']),
                roomId: _.get(options, ['room', 'roomId'])
            }, options);

            joinRoomWithOptions.call(that, joinRoomAsPresenterOptions, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok' && response.status !== 'already-in-room') {
                    return callback(null, response);
                }

                callback(error, response);
            });
        }
    }

    function updateSelfWithRetry(self, callback) {
        var updateSelfErrors = 0;
        var that = this;
        var maxUpdateSelfRetries = 5;

        try {
            self.commitChanges(function handleUpdateSelf(error, response) {
                if (error) {
                    updateSelfErrors++;
                }

                if (response && response.status !== 'ok') {
                    updateSelfErrors++;
                }

                if (response && response.status === 'ok') {
                    updateSelfErrors = 0;

                    return !callback || callback(null, response);
                }

                if (updateSelfErrors >= maxUpdateSelfRetries) {
                    that._logger.warn('Unable to update self after [%s] attempts.', maxUpdateSelfRetries);

                    return callback(new Error('Unable to update self'));
                }

                if (updateSelfErrors > 0 && updateSelfErrors < maxUpdateSelfRetries) {
                    that._logger.warn('Unable to update self after [%s] attempts. Retrying.', updateSelfErrors);

                    return self.commitChanges(handleUpdateSelf);
                }
            });
        } catch (error) {
            callback(error);
        }
    }

    function monitorSubsciberOrPublisher(callback, error, response) {
        if (error) {
            return callback(error);
        }

        if (response.retry) {
            return response.retry();
        }

        callback(error, response);
    }

    function getDefaultRoomDescription(type) {
        switch(type) {
        case roomEnums.types.channel.name:
            return 'Room Channel';
        case roomEnums.types.moderatedChat.name:
            return 'Moderated Chat';
        case roomEnums.types.multiPartyChat.name:
            return 'Multi Party Chat';
        case roomEnums.types.townHall.name:
            return 'Town Hall';
        case roomEnums.types.directChat.name:
            return 'Direct Chat';
        default:
            throw new Error('Unsupported Room Type');
        }
    }

    function parseStreamTokenFromStreamUri(uri, capabilities) {
        var streamInfo = Stream.getInfoFromStreamUri(uri);
        // TODO(DY) Remove streamTokenStreaming once apps updated in prod
        var isStreaming = (streamInfo.streamTokenForLiveStream || streamInfo.streamTokenStreaming) && _.includes(capabilities, 'streaming');

        // Token for both not generated.
        if (_.includes(capabilities, 'drm-open-access') && _.includes(capabilities, 'drm-hollywood')) {
            return;
        }

        if (isStreaming && streamInfo.streamTokenForLiveStreamWithDrmOpenAccess && (_.includes(capabilities, 'drm-open-access') || isAndroid())) {
            return streamInfo.streamTokenForLiveStreamWithDrmOpenAccess;
        }

        if (isStreaming && streamInfo.streamTokenForLiveStreamWithDrmHollywood && _.includes(capabilities, 'drm-hollywood')) {
            return streamInfo.streamTokenForLiveStreamWithDrmHollywood;
        }

        if (isStreaming && !_.includes(capabilities, 'drm-open-access') && !_.includes(capabilities, 'drm-hollywood')) {
            return streamInfo.streamTokenForLiveStream || streamInfo.streamTokenStreaming;
        }

        if (streamInfo.streamTokenForBroadcastStream && _.includes(capabilities, 'broadcast')) {
            return streamInfo.streamTokenForBroadcastStream;
        }

        if (!_.includes(capabilities, 'streaming') && !_.includes(capabilities, 'broadcast')) {
            return streamInfo.streamToken;
        }
    }

    function mapStreamToMemberStream(publisher, type, streamInfo, viewerStreamToken, viewerStreamTokenForBroadcastStream, viewerStreamTokenForLiveStream, drmStreamTokens) {
        var mediaStream = publisher.getStream();
        var audioTracks = mediaStream ? mediaStream.getAudioTracks() : null;
        var videoTracks = mediaStream ? mediaStream.getVideoTracks() : null;
        var audioTrackEnabled = audioTracks.length > 0 && audioTracks[0].enabled;
        var videoTrackEnabled = videoTracks.length > 0 && videoTracks[0].enabled;

        var publishedStream = {
            uri: Stream.getPCastPrefix() + publisher.getStreamId(),
            type: type,
            audioState: audioTrackEnabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name,
            videoState: videoTrackEnabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name
        };

        var infoToAppend = _.assign({}, streamInfo, {
            streamToken: viewerStreamToken,
            streamTokenForBroadcastStream: viewerStreamTokenForBroadcastStream,
            streamTokenForLiveStream: viewerStreamTokenForLiveStream
        });

        if (!viewerStreamToken) {
            delete infoToAppend.streamToken;
        }

        if (!viewerStreamTokenForBroadcastStream) {
            delete infoToAppend.streamTokenForBroadcastStream;
        }

        if (!viewerStreamTokenForLiveStream) {
            delete infoToAppend.streamTokenForLiveStream;
        }

        if (drmStreamTokens) {
            assert.isArray(drmStreamTokens, 'drmStreamTokens');

            infoToAppend.streamTokenForLiveStreamWithDrmOpenAccess = drmStreamTokens[0];
            infoToAppend.streamTokenForLiveStreamWithDrmHollywood = drmStreamTokens[1];
        }

        var queryParamString = _.reduce(infoToAppend, function(queryParamString, currentValue, currentKey) {
            var currentPrefix = queryParamString ? '&' : '?';

            return queryParamString + currentPrefix + currentKey + '=' + currentValue;
        }, '');

        if (queryParamString.length > 0) {
            publishedStream.uri = publishedStream.uri + queryParamString;
        }

        return publishedStream;
    }

    function listenForTrackStateChange(stream, memberStream) {
        var tracks = stream.getTracks();
        var that = this;

        _.forEach(tracks, function(track) {
            _.addEventListener(track, 'StateChange', function() {
                var state = track.enabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name;
                var self = getSelfAssociatedWithStream.call(that, memberStream);

                that._logger.info('[%s] [%s] Track state changed to [%s], updating room member stream state [%s]', stream.id, track.id, track.enabled, state);

                if (track.kind === 'video') {
                    memberStream.getObservableVideoState().setValue(state);
                } else {
                    memberStream.getObservableAudioState().setValue(state);
                }

                if (self) {
                    updateSelfWithRetry.call(that, self);
                }
            });
        });
    }

    function getSelfAssociatedWithStream(memberStream) {
        var roomService = _.find(this._activeRoomServices, function(roomService) {
            var self = roomService.getSelf();
            var selfStreams = self ? self.getObservableStreams().getValue() : [];

            return _.find(selfStreams, function(selfStream) {
                return memberStream === selfStream;
            });
        });

        return roomService ? roomService.getSelf() : null;
    }

    function isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    }

    return RoomExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(6),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, http, disposable) {
    'use strict';

    var networkUnavailableCode = 0;
    var requestMaxTimeout = 20000;
    var defaultRequestOptions = {
        timeout: requestMaxTimeout,
        retryOptions: {
            backoff: 1.5,
            delay: 1000,
            maxAttempts: 3,
            additionalRetryErrorCodes: [networkUnavailableCode]
        }
    };

    function AdminAPI(backendUri, authenticationData) {
        assert.isStringNotEmpty(backendUri, 'backendUri');
        assert.isObject(authenticationData, 'authenticationData');

        this._backendUri = backendUri;
        this._authenticationData = authenticationData;
        this._disposables = new disposable.DisposableList();
    }

    AdminAPI.prototype.dispose = function() {
        return this._disposables.dispose();
    };

    AdminAPI.prototype.createAuthenticationToken = function createAuthenticationToken(callback) {
        var data = appendAuthDataTo.call(this, {});
        var requestWithoutCallback = _.bind(http.postWithRetry, http, this._backendUri + '/auth', JSON.stringify(data), defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminAPI.prototype.createStreamTokenForPublishing = function createStreamTokenForPublishing(sessionId, capabilities, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        var data = appendAuthDataTo.call(this, {
            sessionId: sessionId,
            capabilities: capabilities
        });
        var requestWithoutCallback = _.bind(http.postWithRetry, http, this._backendUri + '/stream', JSON.stringify(data), defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminAPI.prototype.createStreamTokenForSubscribing = function createStreamTokenForSubscribing(sessionId, capabilities, streamId, alternateStreamIds, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        if (!_.isNullOrUndefined(alternateStreamIds)) {
            assert.isArray(alternateStreamIds, 'additionalStreamIds');

            _.forEach(alternateStreamIds, function(alternateOriginStreamId) {
                assert.isStringNotEmpty(alternateOriginStreamId, 'alternateOriginStreamId');
            });
        }

        var data = appendAuthDataTo.call(this, {
            sessionId: sessionId,
            capabilities: capabilities,
            originStreamId: streamId
        });

        if (alternateStreamIds && alternateStreamIds.length > 0) {
            data.alternateOriginStreamIds = alternateStreamIds;
        }

        var requestWithoutCallback = _.bind(http.postWithRetry, http, this._backendUri + '/stream', JSON.stringify(data), defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminAPI.prototype.getStreams = function getStreams(callback) {
        var requestWithoutCallback = _.bind(http.getWithRetry, http, this._backendUri + '/streams', defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    function requestWithTimeout(requestWithoutCallback, callback) {
        var requestTimeoutId = null;
        var requestDisposable = requestWithoutCallback(_.bind(handleResponse, this, function(error, response) {
            clearTimeout(requestTimeoutId);

            callback(error, response);
        }));

        requestTimeoutId = setTimeout(function() {
            requestDisposable.dispose();
            callback(new Error('timeout'));
        }, requestMaxTimeout);

        this._disposables.add(requestDisposable);
        this._disposables.add(new disposable.Disposable(function() {
            clearTimeout(requestTimeoutId);
        }));
    }

    function appendAuthDataTo(data) {
        return _.assign({}, data, this._authenticationData);
    }

    function handleResponse(callback, error, response) {
        if (error) {
            return callback(error, {});
        }

        var res = JSON.parse(response.data);

        if (res.status !== 'ok') {
            return callback(null, {status: res.status});
        }

        return callback(null, res);
    }

    return AdminAPI;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(16),
    __webpack_require__(23),
    __webpack_require__(25),
    __webpack_require__(43),
    __webpack_require__(2),
    __webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, phenixWebPlayer, AdminAPI, UserMediaResolver, PCast, rtc, shakaEnums) {
    'use strict';

    var unauthorizedStatus = 'unauthorized';
    var capacityBackoffTimeout = 1000;
    var defaultPrerollSkipDuration = 500;
    var defaultUserActionOnlineTimeout = 20000;
    var defaultReconnectOptions = {
        maxOfflineTime: 3 * 60 * 1000,
        maxReconnectFrequency: 60 * 1000
    };

    function PCastExpress(options) {
        assert.isObject(options, 'options');
        assert.isStringNotEmpty(options.backendUri, 'options.backendUri');
        assert.isObject(options.authenticationData, 'options.authenticationData');

        if (options.authToken) {
            assert.isStringNotEmpty(options.authToken, 'options.authToken');
        }

        if (options.onError) {
            assert.isFunction(options.onError, 'options.onError');
        }

        if (!_.isNullOrUndefined(options.onlineTimeout)) {
            assert.isNumber(options.onlineTimeout, 'options.onlineTimeout');

            if (options.onlineTimeout < 0) {
                throw new Error('"options.onlineTimeout" must be a positive number');
            }
        }

        if (options.reconnectOptions) {
            assert.isObject(options.reconnectOptions, 'options.reconnectOptions');
            assert.isNumber(options.reconnectOptions.maxOfflineTime, 'options.reconnectOptions.maxOfflineTime');
            assert.isNumber(options.reconnectOptions.maxReconnectFrequency, 'options.reconnectOptions.maxReconnectFrequency');
        }

        this._pcastObservable = new observable.Observable(null).extend({rateLimit: 0});
        this._subscribers = {};
        this._publishers = {};
        this._adminAPI = new AdminAPI(options.backendUri, options.authenticationData);
        this._isInstantiated = false;
        this._reauthCount = 0;
        this._reconnectCount = 0;
        this._authToken = options.authToken;
        this._onError = options.onError;
        this._options = options;
        this._onlineTimeout = _.isNumber(options.onlineTimeout) ? options.onlineTimeout : defaultUserActionOnlineTimeout;
        this._reconnectOptions = options.reconnectOptions || defaultReconnectOptions;
        this._logger = null;

        instantiatePCast.call(this);
    }

    PCastExpress.prototype.dispose = function dispose() {
        if (this._listedForCriticalNetworkRecoveryDisposable) {
            this._listedForCriticalNetworkRecoveryDisposable.dispose();
            this._listedForCriticalNetworkRecoveryDisposable = null;
        }

        if (this._pcastObservable.getValue()) {
            this._pcastObservable.getValue().stop();
            this._pcastObservable.setValue(null);
        }

        if (_.isNumber(this._instantiatePCastTimeout)) {
            clearTimeout(this._instantiatePCastTimeout);
            this._instantiatePCastTimeout = null;
        }

        this._adminAPI.dispose();

        this._reconnectCount = 0;
        this._reauthCount = 0;
    };

    PCastExpress.prototype.getPCast = function getPCast() {
        return this._pcastObservable.getValue();
    };

    PCastExpress.prototype.getPCastObservable = function() {
        return this._pcastObservable;
    };

    PCastExpress.prototype.getAdminAPI = function getAdminAPI() {
        return this._adminAPI;
    };

    PCastExpress.prototype.getUserMedia = function(options, callback) {
        var that = this;

        assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        assert.isFunction(callback, 'callback');

        if (options.resolution) {
            assert.isNumber(options.resolution, 'options.resolution');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.onResolveMedia) {
            assert.isFunction(options.onResolveMedia, 'options.onResolveMedia');
        }

        if (options.onScreenShare) {
            assert.isFunction(options.onScreenShare, 'options.onScreenShare');
        }

        if (that._pcastObservable.getValue()) {
            return resolveUserMedia.call(that, that._pcastObservable.getValue(), options, callback);
        }

        var pcastSubscription = that._pcastObservable.subscribe(function(pcast) {
            if (!pcast) {
                return;
            }

            pcastSubscription.dispose();

            resolveUserMedia.call(that, pcast, options, callback);
        });
    };

    PCastExpress.prototype.publish = function publish(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            if (options.userMediaStream) {
                return getStreamingTokenAndPublish.call(that, options.userMediaStream, options, false, callback);
            }

            that.getUserMedia(options, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok') {
                    return callback(null, response);
                }

                getStreamingTokenAndPublish.call(that, response.userMedia, options, true, callback);
            });
        }, options.isContinuation);
    };

    var connectOptionCapabilities = ['streaming', 'low-latency', 'on-demand', 'uld', 'vvld', 'vld', 'ld', 'sd', 'hd', 'fhd', 'uhd'];

    PCastExpress.prototype.publishRemote = function publishRemote(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamUri, 'options.streamUri');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            throw new Error('Invalid argument, Media Constraints, for publishing remote.');
        }

        if (options.videoElement) {
            throw new Error('May not view remote stream publisher. Please subscribe to view.');
        }

        if (options.prerollSkipDuration) {
            assert.isNumber(options.prerollSkipDuration, 'options.prerollSkipDuration');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.frameRate) {
            assert.isObject(options.frameRate, 'options.frameRate');

            if (options.frameRate.exact) {
                assert.isNumber(options.frameRate.exact, 'options.frameRate.exact');
            }

            if (options.frameRate.max) {
                assert.isNumber(options.frameRate.max, 'options.frameRate.max');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var remoteOptions = _.assign({
                connectOptions: [],
                capabilities: []
            }, options);

            if (!_.includes(remoteOptions.capabilities, 'publish-uri')) {
                remoteOptions.capabilities.push('publish-uri');
            }

            _.forEach(connectOptionCapabilities, function(capability) {
                if (_.includes(remoteOptions.capabilities, capability)) {
                    remoteOptions.connectOptions.push('publisher-capability=' + capability);
                }
            });

            if (options.frameRate && options.frameRate.exact) {
                remoteOptions.connectOptions.push('source-uri-video-fps=' + options.frameRate.exact);
            }

            if (options.frameRate && options.frameRate.max) {
                remoteOptions.connectOptions.push('source-uri-video-fps-max=' + options.frameRate.max);
            }

            remoteOptions.connectOptions.push('source-uri-preroll-skip-duration=' + (_.isNumber(options.prerollSkipDuration) ? options.prerollSkipDuration : defaultPrerollSkipDuration).toString());

            getStreamingTokenAndPublish.call(that, remoteOptions.streamUri, remoteOptions, false, callback);
        });
    };

    PCastExpress.prototype.publishScreen = function publishScreen(options, callback) {
        var publishScreenOptions = _.assign({mediaConstraints: {screen: true}}, options);

        _.set(publishScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(publishScreenOptions, ['monitor', 'options'], {})));

        return this.publish(publishScreenOptions, callback);
    };

    PCastExpress.prototype.subscribe = function subscribe(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamId, 'options.streamId');
        assert.isObject(options.capabilities, 'options.capabilities');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        if (options.subscriberOptions) {
            assert.isObject(options.subscriberOptions, 'options.subscriberOptions');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            if (options.streamToken) {
                return subscribeToStream.call(that, options.streamToken, options, callback);
            }

            that._adminAPI.createStreamTokenForSubscribing(that._pcastObservable.getValue().getProtocol().getSessionId(), options.capabilities, options.streamId, null, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok') {
                    return callback(null, response);
                }

                subscribeToStream.call(that, response.streamToken, options, callback);
            });
        }, options.isContinuation);
    };

    PCastExpress.prototype.subscribeToScreen = function subscribeToScreen(options, callback) {
        var subscribeToScreenOptions = _.assign({}, options);

        _.set(subscribeToScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(subscribeToScreenOptions, ['monitor', 'options'], {})));

        return this.subscribe(subscribeToScreenOptions, callback);
    };

    PCastExpress.prototype.waitForOnline = function waitForOnline(callback, isNotUserAction) {
        assert.isFunction(callback, 'callback');

        if (this._pcastObservable.getValue() && this._pcastObservable.getValue().getStatus() === 'online') {
            return callback();
        }

        var that = this;
        var disposeOfWaitTimeout = isNotUserAction ? _.get(that._reconnectOptions, ['maxOfflineTime']) : this._onlineTimeout;
        var pcastSubscription = null;
        var statusSubscription = null;
        var onlineTimeout = setTimeout(function() {
            that._logger.info('Disposing of Express Online listener after [%s] ms', disposeOfWaitTimeout);

            if (pcastSubscription) {
                pcastSubscription.dispose();
            }

            if (statusSubscription) {
                statusSubscription.dispose();
            }

            callback(new Error('timeout'));
        }, disposeOfWaitTimeout);

        this._logger.info('Waiting for Online status before continuing. Timeout set to [%s]', disposeOfWaitTimeout);

        var subscribeToStatusChange = function(pcast) {
            if (statusSubscription) {
                statusSubscription.dispose();
            }

            if (!pcast) {
                return;
            }

            statusSubscription = pcast.getObservableStatus().subscribe(function(status) {
                if (status !== 'online') {
                    return;
                }

                clearTimeout(onlineTimeout);
                statusSubscription.dispose();
                pcastSubscription.dispose();

                return callback();
            }, {initial: 'notify'});
        };

        if (this._pcastObservable.getValue()) {
            subscribeToStatusChange(this._pcastObservable.getValue());
        }

        pcastSubscription = this._pcastObservable.subscribe(subscribeToStatusChange);
    };

    function instantiatePCast() {
        var that = this;

        if (!this._pcastObservable.getValue()) {
            var pcastOptions = _.assign({logger: this._logger}, this._options);

            this._pcastObservable.setValue(new PCast(pcastOptions));
        }

        if (!this._logger) {
            this._logger = this._pcastObservable.getValue().getLogger();
        }

        if (!this._pcastStatusSubscription) {
            this._pcastStatusSubscription = this._pcastObservable.getValue().getObservableStatus().subscribe(_.bind(onPCastStatusChange, this));
        }

        if (this._authToken) {
            return this._pcastObservable.getValue().start(this._authToken, _.noop, _.noop, _.noop);
        }

        this._adminAPI.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                return that._logger.warn('Unable to authenticate. PCast not instantiated.');
            }

            that._pcastObservable.getValue().start(response.authenticationToken, _.noop, _.noop, _.noop);
        });
    }

    function onPCastStatusChange(status) {
        var that = this;

        switch (status) {
        case 'timeout':
        case 'critical-network-issue':
            if (that._pcastObservable.getValue()) {
                that._pcastObservable.getValue().stop('express-recovery');
                that._pcastObservable.setValue(null);
            }

            if (that._pcastStatusSubscription) {
                that._pcastStatusSubscription.dispose();
                that._pcastStatusSubscription = null;
            }

            that._reconnectCount++;

            return instantiateWithBackoff.call(that);
        case 'reconnect-failed':
        case 'unauthorized':
            delete this._authToken;

            that._reauthCount++;

            if (that._reauthCount > 1) {
                return handleError.call(this, new Error(status));
            }

            that._logger.info('[Express] Attempting to create new authToken and re-connect after [%s] response', unauthorizedStatus);

            return getAuthTokenAndReAuthenticate.call(that);
        case 'capacity':
        case 'network-unavailable':
            that._reconnectCount++;

            return instantiateWithBackoff.call(that);
        case 'online':
            that._reauthCount = 0;
            that._reconnectCount = 0;

            if (!that._isInstantiated) {
                that._logger.info('Express API successfully instantiated');
            }

            that._isInstantiated = true;

            return;
        case 'reconnecting':
        case 'reconnected':
        case 'connecting':
            break; // Everything ok
        case 'offline':
            return;
        case 'failed':
        default:
            return handleError.call(that, new Error(status));
        }
    }

    function instantiateWithBackoff() {
        var that = this;
        var staticTimeout = Math.min(capacityBackoffTimeout * that._reconnectCount * that._reconnectCount, this._reconnectOptions.maxReconnectFrequency);
        var maxOffsetInSeconds = Math.min(staticTimeout / 10000, 5);
        var randomLinearOffset = Math.random() * maxOffsetInSeconds * 1000;
        var timeoutWithRandomOffset = staticTimeout + randomLinearOffset;

        this._logger.info('Waiting for [%s] ms before continuing to attempt to reconnect to PCast', timeoutWithRandomOffset);

        this._instantiatePCastTimeout = setTimeout(function() {
            if (!that._pcastObservable.getValue() || !that._pcastObservable.getValue().isStarted()) {
                return instantiatePCast.call(that);
            }

            return getAuthTokenAndReAuthenticate.call(that);
        }, timeoutWithRandomOffset);
    }

    function getAuthTokenAndReAuthenticate() {
        var that = this;

        this._adminAPI.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                return that._logger.warn('Unable to authenticate. PCast not instantiated.');
            }

            that._pcastObservable.getValue().reAuthenticate(response.authenticationToken);
        });
    }

    function handleError(e) {
        if (!this._onError) {
            throw e;
        }

        this._onError(e);
    }

    function resolveUserMedia(pcast, options, callback) {
        var userMediaResolver = new UserMediaResolver(pcast, {
            aspectRatio: options.aspectRatio,
            resolutionHeight: options.resolution,
            frameRate: options.frameRate,
            resolutionSelectionStrategy: options.resolutionSelectionStrategy,
            onScreenShare: function(screenOptions) {
                screenOptions = options.onScreenShare ? options.onScreenShare(screenOptions) : screenOptions;

                if (screenOptions.resolution) {
                    assert.isNumber(screenOptions.resolution, 'clientOptions.resolution');
                }

                if (screenOptions.frameRate) {
                    assert.isNumber(screenOptions.frameRate, 'screenOptions.frameRate');
                }

                if (screenOptions.aspectRatio) {
                    assert.isStringNotEmpty(screenOptions.aspectRatio, 'screenOptions.aspectRatio');
                }

                return _.assign({resolutionHeight: screenOptions.resolution}, screenOptions);
            }
        });

        userMediaResolver.getUserMedia(options.mediaConstraints, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (options.onResolveMedia) {
                options.onResolveMedia(response.options);
            }

            callback(null, _.assign({status: 'ok'}, response));
        });
    }

    function getStreamingTokenAndPublish(userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;

        assert.isArray(options.capabilities, 'options.capabilities');

        if (options.streamToken) {
            return publishUserMediaOrUri.call(that, options.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
        }

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var sessionId = that._pcastObservable.getValue().getProtocol().getSessionId();

            that._logger.info('Session Id [%s]', sessionId);

            that._adminAPI.createStreamTokenForPublishing(sessionId, options.capabilities, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok') {
                    return callback(null, response);
                }

                publishUserMediaOrUri.call(that, response.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
            });
        }, options.isContinuation);
    }

    function publishUserMediaOrUri(streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;
        var hasAlreadyAttachedMedia = false;

        if (options.tags) {
            assert.isArray(options.tags, 'options.tags');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        var publishCallback = function publishCallback(pcast, status, publisher) {
            var retryPublisher = function retryPublisher(reason) {
                var placeholder = _.uniqueId();
                var optionsWithToken = _.assign({
                    streamToken: streamToken,
                    isContinuation: true
                }, options);

                that._publishers[placeholder] = true;

                if (reason === 'camera-track-failure') {
                    publisher.stop(reason, false);
                    that.publish(options, callback);
                } else {
                    publisher.stop(reason, true);
                    getStreamingTokenAndPublish.call(that, userMediaOrUri, optionsWithToken, cleanUpUserMediaOnStop, callback);
                }

                delete that._publishers[placeholder];
            };

            if ((status === unauthorizedStatus && options.streamToken) || status === 'timeout') {
                that._logger.info('[Express] Attempting to create new streamToken and re-publish after [%s] response', unauthorizedStatus);

                var reAuthOptions = _.assign({isContinuation: true}, options);

                delete reAuthOptions.streamToken;

                return getStreamingTokenAndPublish.call(that, userMediaOrUri, reAuthOptions, cleanUpUserMediaOnStop, callback);
            }

            if (status !== 'ok') {
                return callback(null, {status: status});
            }

            that._publishers[publisher.getStreamId()] = publisher;

            if (options.videoElement && !hasAlreadyAttachedMedia) {
                rtc.attachMediaStream(options.videoElement, userMediaOrUri);

                hasAlreadyAttachedMedia = true;
            }

            var isPublisher = true;
            var noopCallback = function() {};
            var publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retryPublisher, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retryPublisher);

                publisher.monitor(options.monitor.options || {}, monitorCallback);

                publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retryPublisher, isPublisher);
            }

            publisher.setPublisherEndedCallback(publisherEndedCallback);

            var expressPublisher = createExpressPublisher.call(that, publisher, options.videoElement, cleanUpUserMediaOnStop);

            callback(null, {
                status: 'ok',
                publisher: expressPublisher
            });
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            that._pcastObservable.getValue().publish(streamToken, userMediaOrUri, publishCallback, options.tags, {connectOptions: options.connectOptions});
        }, options.isContinuation);
    }

    function subscribeToStream(streamToken, options, callback) {
        var that = this;

        var handleSubscribe = function(pcast, status, subscriber) {
            var retrySubscriber = function retrySubscriber(reason) {
                var placeholder = _.uniqueId();
                var retryOptions = _.assign({isContinuation: true}, options);

                that._subscribers[placeholder] = true;

                subscriber.stop(reason);

                that._logger.warn('[%s] Stream failure occurred with reason [%s]. Attempting to recover from failure.', options.streamId, reason);

                subscribeToStream.call(that, streamToken, retryOptions, callback);

                delete that._subscribers[placeholder];
            };

            if ((status === unauthorizedStatus && options.streamToken) || status === 'timeout') {
                that._logger.info('[%s] [Express] Attempting to create new streamToken and re-subscribe after [%s] response', options.streamId, unauthorizedStatus);

                var reAuthOptions = _.assign({isContinuation: true}, options);

                delete reAuthOptions.streamToken;

                return that.subscribe(reAuthOptions, callback);
            }

            if (status === 'streaming-not-ready') {
                return callback(null, {
                    status: status,
                    retry: _.bind(retrySubscriber, that, status)
                });
            }

            if (status !== 'ok') {
                return callback(null, {status: status});
            }

            that._subscribers[subscriber.getStreamId()] = subscriber;

            var renderer;

            if (options.videoElement) {
                renderer = subscriber.createRenderer();

                renderer.start(options.videoElement);
            }

            var isPublisher = false;
            var noopCallback = _.noop;
            var subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retrySubscriber, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retrySubscriber);

                subscriber.monitor(options.monitor.options || {}, monitorCallback);

                subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retrySubscriber, isPublisher);
            }

            subscriber.setStreamEndedCallback(subscriberEndedCallback);

            var expressSubscriber = createExpressSubscriber.call(that, subscriber, renderer);
            var subscribeResponse = {
                status: 'ok',
                mediaStream: expressSubscriber
            };

            subscriber.setStreamErrorCallback(function(playerRenderer, errorType, error) {
                if (errorType === 'real-time' && error.message === 'connection-timeout') {
                    return retrySubscriber.call(that, error.message);
                }

                if (errorType === 'shaka' && error.severity !== shakaEnums.errorSeverity.critical.id) {
                    return; // Ignore error
                }

                if (errorType === 'phenix-player' && error.severity === phenixWebPlayer.errors.severity.RECOVERABLE) {
                    var reAuthOptions = _.assign({isContinuation: true}, options);

                    delete reAuthOptions.streamToken;

                    return that.subscribe(reAuthOptions, callback);
                }

                that._logger.warn('[%s] Error while playing stream with Express API. Stopping stream.', expressSubscriber.getStreamId(), error);

                expressSubscriber.stop();

                return callback(error);
            });

            if (renderer) {
                subscribeResponse.renderer = renderer;
            }

            callback(null, subscribeResponse);
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            that._pcastObservable.getValue().subscribe(streamToken, handleSubscribe, options.subscriberOptions);
        }, options.isContinuation);
    }

    function createExpressPublisher(publisher, videoElement, cleanUpUserMediaOnStop) {
        var publisherStop = _.bind(publisher.stop, publisher);

        publisher.stop = function(reason, isInternal) {
            publisherStop(reason);

            if (videoElement) {
                videoElement.src = '';
                videoElement.srcObject = null;
            }

            if (cleanUpUserMediaOnStop && publisher.getStream() && !isInternal) {
                var nativeMediaStream = publisher.getStream();

                if (nativeMediaStream) {
                    nativeMediaStream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                }
            }
        };

        publisher.enableAudio = function() {
            return setStreamAudioTracksState(publisher.getStream(), true);
        };

        publisher.disableAudio = function() {
            return setStreamAudioTracksState(publisher.getStream(), false);
        };

        publisher.enableVideo = function() {
            return setStreamVideoTracksState(publisher.getStream(), true);
        };

        publisher.disableVideo = function() {
            return setStreamVideoTracksState(publisher.getStream(), false);
        };

        // Publisher Ended Callback handled with normal callback route for express
        publisher.setPublisherEndedCallback = function() {};

        return publisher;
    }

    function createExpressSubscriber(subscriber, renderer) {
        var subscriberStop = _.bind(subscriber.stop, subscriber);

        subscriber.stop = function(reason) {
            if (renderer) {
                renderer.stop();
            }

            subscriberStop(reason);
        };

        subscriber.enableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), true);
        };

        subscriber.disableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), false);
        };

        subscriber.enableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), true);
        };

        subscriber.disableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), false);
        };

        // Stream Ended Callback handled with normal callback route for express
        subscriber.setStreamEndedCallback = function() {};

        return subscriber;
    }

    function setStreamAudioTracksState(stream, newState) {
        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getAudioTracks(), newState);

        return newState;
    }

    function setStreamVideoTracksState(stream, newState) {
        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getVideoTracks(), newState);

        return newState;
    }

    function setTracksEnabled(tracks, enabled) {
        assert.isArray(tracks, 'tracks');

        _.forEach(tracks, function(track) {
            track.enabled = enabled;
        });
    }

    function onMonitorCallback(callback, retry, stream, reason, monitorEvent) { // eslint-disable-line no-unused-vars
        switch (reason) {
        case 'camera-track-failure':
        case 'client-side-failure':
            callback(null, _.assign({
                status: reason,
                retry: _.bind(retry, null, reason)
            }, monitorEvent));

            // Handle failure event, redo stream
            break;
        default:
            // No failure has occurred, handle monitor event
            break;
        }
    }

    function onPublisherOrStreamEnd(monitorCallback, retry, isPublisher, publisherOrStream, reason, description) {
        var response = {
            status: 'stream-ended',
            reason: reason,
            description: description
        };

        switch (reason) {
        case 'ended': // Normal operation
        case 'censored': // Forced to stop
            var endedResponse = {
                status: reason,
                reason: reason,
                description: description
            };

            if (isPublisher) {
                endedResponse.publisher = publisherOrStream;
            } else {
                endedResponse.mediaStream = publisherOrStream;
            }

            return monitorCallback(null, endedResponse);
        case 'custom':
            // Client ended publisher, do nothing
            return monitorCallback(null, response);
        case 'capacity':
            // Don't inform the client, attempt to re-publish automatically after backoff
            return setTimeout(function() {
                return retry(reason);
            }, capacityBackoffTimeout);
        case 'failed':
        case 'maintenance':
            // Don't inform the client, attempt to re-publish automatically
            return retry(reason);
        case 'app-background':
        default:
            // Give client option to re-publish
            response.retry = retry;

            return monitorCallback(null, response);
        }
    }

    return PCastExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(49)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, RTC, ResolutionProvider) {
    'use strict';

    function UserMediaResolver(pcast, options) {
        assert.isObject(pcast, 'pcast');

        if (options) {
            assert.isObject(options, 'options');
        }

        if (options && options.screenShare) {
            assert.isFunction(options.screenShare, 'options.screenShare');
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._options = options || {};
        this._onScreenShare = _.get(options, ['onScreenShare']);
    }

    UserMediaResolver.prototype.getUserMedia = function getUserMedia(deviceOptions, callback) {
        assert.isObject(deviceOptions, 'deviceOptions');

        var resolutionProvider = new ResolutionProvider(this._options);
        var resolution = resolutionProvider.getDefaultResolution();
        var frameRate = resolutionProvider.getDefaultFrameRate();

        getUserMediaWithOptions.call(this, deviceOptions, resolution, frameRate, resolutionProvider, callback);
    };

    UserMediaResolver.prototype.getVendorSpecificConstraints = function getVendorSpecificConstraints(deviceOptions, resolution, frameRate) {
        resolution = resolution || {};

        if (!deviceOptions || (!deviceOptions.audio && ! deviceOptions.video && !deviceOptions.screen && !deviceOptions.screenAudio)) {
            throw new Error('Invalid device options. Must pass in at least one device option.');
        }

        if ((RTC.browser === 'Firefox' && RTC.browserVersion > 38)
            || (RTC.browser === 'Chrome' && RTC.browserVersion > 52 && !deviceOptions.screen && !deviceOptions.screenAudio)
            || (RTC.browser === 'Safari' && RTC.browserVersion > 10)
            || (RTC.browser === 'Opera' && RTC.browserVersion > 40)) {
            return setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate);
        }

        if (RTC.browser === 'Edge') {
            return setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate);
        }

        return setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate);
    };

    function setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    max: height,
                    exact: height
                },
                width: {
                    min: width,
                    max: width,
                    exact: width
                },
                frameRate: frameRate
            };

            if (video.deviceId) {
                constraints.video.deviceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = true;

            if (audio.deviceId) {
                constraints.audio = {deviceId: audio.deviceId};
            }
        }

        if (screen) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.deviceId = {exact: video.deviceId};
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {};

            if (audio.deviceId) {
                constraints.audio.deviceId = {exact: audio.deviceId};
            }

            if (audio.mediaSource) {
                constraints.audio.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {};

            if (screenAudio.deviceId) {
                constraints.screenAudio.deviceId = {exact: screenAudio.deviceId};
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.width;
            }

            if (!height) {
                delete constraints.screen.height;
            }

            if (!frameRate) {
                delete constraints.screen.frameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mediaSource = screen.mediaSource;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.mandatory.sourceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (video.mediaSource) {
                constraints.video.mandatory.mediaSource = video.mediaSource;
            }

            if (video.mediaSourceId) {
                constraints.video.mandatory.mediaSourceId = video.mediaSourceId;
            }

            if (!width) {
                delete constraints.video.mandatory.minWidth;
                delete constraints.video.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.video.mandatory.minHeight;
                delete constraints.video.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.video.mandatory.maxFrameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode && !video.mediaSource && !video.mediaSourceId) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {mandatory: {}};

            if (audio.deviceId) {
                constraints.audio.mandatory.sourceId = audio.deviceId;
            }

            if (audio.mediaSource) {
                constraints.audio.mandatory.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mandatory.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {mandatory: {}};

            if (screenAudio.deviceId) {
                constraints.screenAudio.mandatory.sourceId = screenAudio.deviceId;
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mandatory.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mandatory.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.mandatory.minWidth;
                delete constraints.screen.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.screen.mandatory.minHeight;
                delete constraints.screen.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.screen.mandatory.maxFrameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mandatory.mediaSource = screen.mediaSource;
            }

            if (screen.mediaSourceId) {
                constraints.screen.mandatory.mediaSourceId = screen.mediaSourceId;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function getUserMediaWithOptions(deviceOptions, resolution, frameRate, resolutionProvider, callback) {
        var constraints = this.getVendorSpecificConstraints(deviceOptions, resolution || {}, frameRate);
        var hasVideo = !!constraints.video;
        var that = this;

        this._pcast.getUserMedia(constraints, function(pcast, status, userMedia, error) {
            if (status === 'ok') {
                return callback(null, {
                    userMedia: userMedia,
                    options: {
                        frameRate: hasVideo ? frameRate : null,
                        resolution: hasVideo ? _.get(resolution, ['height'], null) : null,
                        aspectRatio: hasVideo ? _.get(resolution, ['aspectRatio'], null) : null
                    }
                });
            }

            var nextResolution = resolution;
            var nextFrameRate = frameRate;
            var constraintName = getConstraintNameFromError(error);

            if (error && (
                error.name === 'ConstraintNotSatisfiedError'
                || error.name === 'OverconstrainedError'
                || error.constructor.name === 'OverconstrainedError'
                || (error.code === 'unavailable' && RTC.browser === 'Edge'))
            ) {
                switch (constraintName.toLowerCase()) {
                case 'width':
                case 'height':
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                case 'framerate':
                default:
                    // Always try without frame rate if constraint name not defined
                    if (frameRate) {
                        that._logger.warn('Unable to get user media with constraint [%s] and framerate [%s]. Retrying without frame rate constraint.', constraintName, frameRate);
                        nextFrameRate = null;

                        return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                    }

                    // Then try to reduce resolution
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                }
            }

            that._logger.error('Unable to get user media with status [%s]', status, error);

            return callback(error);
        }, function(constraints) {
            var clientConstraints = constraints;

            if (that._onScreenShare && RTC.browser === 'Chrome') {
                var normalizedConstraints = normalizeChromeScreenShareConstraints(constraints);

                clientConstraints = that._onScreenShare(normalizedConstraints);

                var resolution;

                if (clientConstraints.resolutionHeight && clientConstraints.aspectRatio) {
                    resolution = {
                        width: resolutionProvider.calculateWidthByAspectRatio(clientConstraints.resolution, clientConstraints.aspectRatio),
                        height: clientConstraints.resolutionHeight
                    };
                }

                clientConstraints = getChromeScreenShareConstraints.call(that, normalizedConstraints, resolution, clientConstraints.frameRate);
            }

            return clientConstraints;
        });
    }

    function normalizeChromeScreenShareConstraints(constraints) {
        var chromeVideoSource = _.get(constraints, ['video', 'mandatory', 'chromeMediaSource']);
        var chromeAudioSource = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSource']);
        var chromeVideoSourceId = _.get(constraints, ['video', 'mandatory', 'chromeMediaSourceId']);
        var chromeAudioSourceId = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSourceId']);
        var normalizedConstraints = {};

        if (chromeVideoSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screen', 'mediaSource'], chromeVideoSource);
            _.set(normalizedConstraints, ['screen', 'mediaSourceId'], chromeVideoSourceId);
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screenAudio', 'mediaSource'], chromeAudioSource);
            _.set(normalizedConstraints, ['screenAudio', 'mediaSourceId'], chromeAudioSourceId);
        }

        return normalizedConstraints;
    }

    function getChromeScreenShareConstraints(constraints, resolution, frameRate) {
        var screenShareConstraints = this.getVendorSpecificConstraints(constraints, resolution, frameRate);

        if (screenShareConstraints.screen) {
            screenShareConstraints.video = screenShareConstraints.screen;
            delete screenShareConstraints.screen;
        }

        if (screenShareConstraints.screenAudio) {
            screenShareConstraints.audio = screenShareConstraints.screenAudio;
            delete screenShareConstraints.screenAudio;
        }

        var chromeVideoSource = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSource']);
        var chromeAudioSource = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSource']);
        var chromeVideoSourceId = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSourceId']);
        var chromeAudioSourceId = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSourceId']);

        if (chromeVideoSource || chromeVideoSourceId) {
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSource'], chromeVideoSource);
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSourceId'], chromeVideoSourceId);
            delete screenShareConstraints.video.mandatory.mediaSource;
            delete screenShareConstraints.video.mandatory.mediaSourceId;
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSource'], chromeAudioSource);
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSourceId'], chromeAudioSourceId);
            delete screenShareConstraints.audio.mandatory.mediaSource;
            delete screenShareConstraints.audio.mandatory.mediaSourceId;
        }

        return screenShareConstraints;
    }

    function getConstraintNameFromError(error) {
        if (error.constraintName) {
            return error.constraintName;
        }

        if (error.constraint) {
            return error.constraint;
        }

        return '';
    }

    return UserMediaResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function AuthenticationService(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getObservableStatus, 'pcast.getObservableStatus');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        if (this._pcast === pcast) {
            return;
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');
        assert.isFunction(this._protocol.getObservableSessionId, 'this._protocol.getObservableSessionId');
        assert.isFunction(this._pcast.getObservableStatus, 'this._pcast.getObservableStatus');

        this._sessionId = this._protocol.getObservableSessionId();
        this._status = this._pcast.getObservableStatus();
    }

    AuthenticationService.prototype.assertAuthorized = function assertAuthorized() {
        if (!validPCastStatus(this.getPCastStatus())) {
            throw new Error('Unable to perform action. Status [%s]. Please wait to reconnect.', this.getPCastStatus());
        }

        if (!validPCastSessionId(this.getPCastSessionId())) {
            throw new Error('Unable to perform action. Invalid sessionId [%s]', this.getPCastSessionId());
        }
    };

    AuthenticationService.prototype.getObservableSessionId = function getObservableSessionId() {
        return this._sessionId;
    };

    AuthenticationService.prototype.getObservableStatus = function getObservableStatus() {
        return this._status;
    };

    AuthenticationService.prototype.getPCastSessionId = function getPCastSessionId() {
        return this._sessionId.getValue();
    };

    AuthenticationService.prototype.getPCastStatus = function getPCastStatus() {
        return this._status.getValue();
    };

    function validPCastSessionId(sessionId) {
        return sessionId !== null && sessionId !== undefined && sessionId !== '';
    }

    function validPCastStatus(status) {
        return status !== null && status !== undefined && status !== '' && status.toLowerCase() !== 'offline';
    }

    return AuthenticationService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var trackEnums = {
        states: {
            trackEnabled: {
                id: 0,
                name: 'TrackEnabled'
            },
            trackDisabled: {
                id: 1,
                name: 'TrackDisabled'
            },
            trackEnded: {
                id: 2,
                name: 'TrackEnded'
            }
        }
    };

    return trackEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(14),
    __webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Stream, member) {
    'use strict';
    var memberRoles = member.roles;
    var memberStates = member.states;

    function Member(roomService, state, sessionId, screenName, role, streams, lastUpdate) {
        this.init(roomService, state, sessionId, screenName, role, streams, lastUpdate);
    }

    Member.prototype.init = function init(roomService, state, sessionId, screenName, role, streams, lastUpdate) {
        assert.isString(sessionId, 'sessionId');
        assert.isString(screenName, 'screenName');
        assert.isArray(streams, 'streams');
        assert.isNumber(_.utc(lastUpdate), 'lastUpdate');

        if (roomService) {
            assert.isObject(roomService, 'roomService');
        }

        this._sessionId = new observable.Observable(sessionId);
        this._screenName = new observable.Observable(screenName);
        this._streams = new observable.ObservableArray([]);

        this._state = new observable.Observable(state, assertIsValidMemberState).extend({rateLimit: 500});
        this._role = new observable.Observable(role, assertIsValidMemberRole);
        this._lastUpdate = new observable.Observable(lastUpdate, _.utc);
        this._roomService = roomService;

        this.setStreams(streams);
    };

    Member.prototype.getObservableState = function getObservableState() {
        return this._state;
    };

    Member.prototype.getSessionId = function getSessionId() {
        return this._sessionId.getValue();
    };

    Member.prototype.getObservableScreenName = function getObservableScreenName() {
        return this._screenName;
    };

    Member.prototype.getObservableRole = function getObservableRole() {
        return this._role;
    };

    Member.prototype.getObservableStreams = function getObservableStreams() {
        return this._streams;
    };

    Member.prototype.getObservableLastUpdate = function getObservableLastUpdate() {
        return this._lastUpdate;
    };

    Member.prototype.getLastUpdate = function getLastUpdate() {
        return this._lastUpdate.getValue();
    };

    Member.prototype.getStreams = function getStreams() {
        return _.map(this._streams.getValue(), function mapToJson(stream) {
            return stream.toJson();
        });
    };

    Member.prototype.commitChanges = function commitChanges(callback) {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.updateMember(this, callback);
    };

    Member.prototype.reload = function reload() {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.revertMemberChanges(this);
    };

    Member.prototype.setStreams = function setStreams(streams) {
        var newStreams = _.map(streams, function(stream) {
            return createNewObservableStream(stream);
        });

        this._streams.setValue(newStreams);
    };

    Member.prototype.toString = function toString() {
        return this.getObservableRole().getValue() + '[' + this.getObservableScreenName().getValue() + ',' + this.getSessionId() + ']';
    };

    Member.prototype.toJson = function toJson() {
        var member = {
            sessionId: this._sessionId.getValue(),
            screenName: this._screenName.getValue(),
            role: this._role.getValue(),
            state: this._state.getValue(),
            streams: [],
            lastUpdate: this._lastUpdate.getValue()
        };

        _.forEach(this._streams.getValue(), function(stream) {
            member.streams.push(stream.toJson());
        });

        return member;
    };

    Member.prototype._update = function update(member) {
        if (!_.isObject(member)) {
            return;
        }

        if (member.hasOwnProperty('state')) {
            this._state.setValue(member.state);
        }

        if (member.hasOwnProperty('screenName')) {
            this._screenName.setValue(member.screenName);
        }

        if (member.hasOwnProperty('role')) {
            this._role.setValue(member.role);
        }

        if (member.hasOwnProperty('lastUpdate')) {
            this._lastUpdate.setValue(member.lastUpdate);
        }

        if (member.hasOwnProperty('streams')) {
            updateStreams.call(this, member.streams);
        }
    };

    function createNewObservableStream(stream) {
        return new Stream(stream.uri, stream.type, stream.audioState, stream.videoState);
    }

    function updateStreams(streams) {
        // Iterate through new streams object, update those that have changed, push new ones, remove old ones
        var oldObservableStreams = this._streams.getValue();
        var newObservableStreams = [];

        _.forEach(streams, function(stream) {
            var pcastStreamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
            var streamToUpdate = _.find(oldObservableStreams, function(observableStream) {
                var hasSameUri = observableStream.getUri() === stream.uri;
                var hasSamePCastStreamId = observableStream.isPCastStream() && observableStream.getPCastStreamId() === pcastStreamId;
                var hasSameIdentifier = hasSameUri || hasSamePCastStreamId;

                return observableStream.getType() === stream.type && hasSameIdentifier;
            });

            if (streamToUpdate) {
                streamToUpdate._update(stream);
            } else {
                streamToUpdate = createNewObservableStream(stream);
            }

            newObservableStreams.push(streamToUpdate);
        });

        this._streams.setValue(newObservableStreams);
    }

    function assertIsValidMemberRole(role) {
        role = _.getEnumName(memberRoles, role);

        if (!role) {
            throw new Error('"role" must be a valid member role');
        }

        return role;
    }

    function assertIsValidMemberState(state) {
        state = _.getEnumName(memberStates, state);

        if (!state) {
            throw new Error('"state" must be a valid member state');
        }

        return state;
    }

    return Member;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(28),
    __webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Member, room) {
    'use strict';
    var roomTypes = room.types;

    function Room(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        this.init(roomService, id, alias, name, description, type, members, bridgeId, pin);
    }

    Room.prototype.init = function init(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(description, 'description');
        assert.isArray(members, 'members');

        if (id) {
            assert.isStringNotEmpty(id, 'id');
        }

        if (alias) {
            assert.isStringNotEmpty(alias, 'alias');
        }

        if (bridgeId) {
            assert.isStringNotEmpty(bridgeId, 'bridgeId');
        }

        if (pin) {
            assert.isStringNotEmpty(pin, 'pin');
        }

        if (roomService) {
            assert.isObject(roomService, 'roomService');
        }

        this._roomId = new observable.Observable(id);
        this._alias = new observable.Observable(alias);
        this._name = new observable.Observable(name);
        this._description = new observable.Observable(description);
        this._type = new observable.Observable(type, assertIsValidRoomType);
        this._members = new observable.ObservableArray([]).extend({
            method: "notifyWhenChangesStop",
            timeout: 400
        });
        this._options = new observable.ObservableArray();
        this._bridgeId = new observable.Observable(bridgeId);
        this._pin = new observable.Observable(pin);
        this._roomService = roomService;

        setMembers.call(this, members);
    };

    Room.prototype.getRoomId = function getRoomId() {
        return this._roomId.getValue();
    };

    Room.prototype.getObservableAlias = function getObservableAlias() {
        return this._alias;
    };

    Room.prototype.getObservableName = function getObservableName() {
        return this._name;
    };

    Room.prototype.getObservableDescription = function getObservableDescription() {
        return this._description;
    };

    Room.prototype.getObservableType = function getObservableType() {
        return this._type;
    };

    Room.prototype.getObservableMembers = function getObservableMembers() {
        return this._members;
    };

    Room.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._bridgeId;
    };

    Room.prototype.getObservablePin = function getObservablePin() {
        return this._pin;
    };

    Room.prototype.toString = function toString() {
        return this._type.getValue() + '[' + this._roomId.getValue() + ']';
    };

    Room.prototype.toJson = function toJson() {
        return {
            roomId: this._roomId.getValue(),
            alias: this._alias.getValue(),
            name: this._name.getValue(),
            description: this._description.getValue(),
            type: this._type.getValue(),
            pin: this._pin.getValue(),
            bridgeId: this._bridgeId.getValue()
        };
    };

    Room.prototype.commitChanges = function commitChanges(callback) {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.updateRoom(this, callback);
    };

    Room.prototype.reload = function reload() {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.revertRoomChanges(this);
    };

    Room.prototype._update = function update(room) {
        if (!_.isObject(room)) {
            return;
        }

        if (room.roomId) {
            this._roomId.setValue(room.roomId);
        }

        if (room.alias) {
            this._alias.setValue(room.alias);
        }

        if (room.name) {
            this._name.setValue(room.name);
        }

        if (room.description) {
            this._description.setValue(room.description);
        }

        if (room.type) {
            this._type.setValue(room.type);
        }

        if (room.options) {
            this._options.setValue(room.options);
        }

        if (room.bridgeId) {
            this._bridgeId.setValue(room.bridgeId);
        }

        if (room.pin) {
            this._pin.setValue(room.pin);
        }

        if (room.members) {
            // DO NOTHING -- members updated by member events
        }
    };

    Room.prototype._addMembers = function addMembers(members) {
        var that = this;

        var newMembers = mapMembers(members);

        _.forEach(newMembers, function(member) {
            that._members.push(member);
        });
    };

    Room.prototype._removeMembers = function removeMembers(members) {
        var that = this;

        _.forEach(members, function(member) {
            that._members.remove(function(observableMember) {
                return member.sessionId === observableMember.getSessionId()
                    && member.lastUpdate >= observableMember.getObservableLastUpdate().getValue();
            });
        });
    };

    Room.prototype._updateMembers = function updateMembers(members) {
        _.forEach(this._members.getValue(), function(observableMember) {
            var memberToUpdate = _.find(members, function(member) {
                return observableMember.getSessionId() === member.sessionId && member.lastUpdate > observableMember.getObservableLastUpdate().getValue();
            });

            if (memberToUpdate) {
                observableMember._update(memberToUpdate);
            }
        });
    };

    function setMembers(members) {
        var newMembers = mapMembers(members, this._roomService);

        this._members.setValue(newMembers);
    }

    function mapMembers(members, roomService) {
        return _.map(members, function(member) {
            return new Member(roomService, member.state, member.sessionId, member.screenName, member.role, member.streams, member.lastUpdate);
        });
    }

    function assertIsValidRoomType(type) {
        type = _.getEnumName(roomTypes, type);

        if (!type) {
            throw new Error('"type" must be a valid room type');
        }

        return type;
    }

    return Room;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(26),
    __webpack_require__(29),
    __webpack_require__(56),
    __webpack_require__(28),
    __webpack_require__(55),
    __webpack_require__(10),
    __webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, AuthenticationService, Room, ImmutableRoom, Member, RoomChatService, roomEnums, memberEnums) {
    'use strict';

    var notInRoomResponse = _.freeze({status: 'not-in-room'});
    var alreadyInRoomResponse = _.freeze({status: 'already-in-room'});
    var inAnotherRoomResponse = _.freeze({status: 'in-another-room'});

    function RoomService(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();

        this._self = new observable.Observable(null);
        this._activeRoom = new observable.Observable(null);
        this._cachedRoom = new observable.Observable(null);
        this._roomChatService = null;

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');

        this._authService = new AuthenticationService(this._pcast);
    }

    RoomService.prototype.start = function start(role, screenName) {
        if (this._started) {
            return this._logger.warn('RoomService already started.');
        }

        assert.isStringNotEmpty(role, 'role');
        assert.isStringNotEmpty(screenName, 'screenName');

        var myState = memberEnums.states.passive.name;
        var mySessionId = this._authService.getPCastSessionId();
        var myScreenName = screenName;
        var myStreams = [];
        var myLastUpdate = _.now();
        var roomService = this;

        var self = new Member(roomService, myState, mySessionId, myScreenName, role, myStreams, myLastUpdate);

        this._self = new observable.Observable(self);
        this._disposables = new disposable.DisposableList();

        var disposeOfRoomEventHandler = this._protocol.onEvent('chat.RoomEvent', _.bind(onRoomEvent, this));

        this._disposables.add(disposeOfRoomEventHandler);

        setupSubscriptions.call(this);

        this._started = true;

        return self;
    };

    RoomService.prototype.getRoomInfo = function getRoomInfo(roomId, alias, callback) {
        if (roomId) {
            assert.isStringNotEmpty(roomId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        getRoomInfoRequest.call(this, roomId, alias, callback);
    };

    RoomService.prototype.createRoom = function createRoom(room, callback) {
        assert.isObject(room, 'room');
        assert.isStringNotEmpty(room.name, 'room.name');
        assert.isStringNotEmpty(room.type, 'room.type');
        assert.isString(room.description, 'room.description');
        assert.isFunction(callback, 'callback');

        createRoomRequest.call(this, room, callback);
    };

    RoomService.prototype.enterRoom = function enterRoom(roomId, alias, callback) {
        if (roomId) {
            assert.isStringNotEmpty(roomId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        enterRoomRequest.call(this, roomId, alias, callback);
    };

    RoomService.prototype.leaveRoom = function leaveRoom(callback) {
        var that = this;

        return leaveRoomRequest.call(that, callback);
    };

    RoomService.prototype.getChatService = function getChatService() {
        if (!this._roomChatService && this._activeRoom.getValue()) {
            this._roomChatService = new RoomChatService(this);
        }

        return this._roomChatService;
    };

    RoomService.prototype.getSelf = function getSelf() {
        return this._self.getValue();
    };

    RoomService.prototype.getObservableActiveRoom = function getObservableActiveRoom() {
        return this._activeRoom;
    };

    RoomService.prototype.updateSelf = function updateSelf(callback) {
        assert.isFunction(callback, 'callback');

        updateMemberRequest.call(this, this.getSelf(), callback);
    };

    RoomService.prototype.updateMember = function updateMember(member, callback) {
        assert.isFunction(callback, 'callback');
        assert.isObject(member, 'member');

        updateMemberRequest.call(this, member, callback);
    };

    RoomService.prototype.updateRoom = function updateRoom(callback) {
        assert.isFunction(callback, 'callback');

        updateRoomRequest.call(this, callback);
    };

    RoomService.prototype.revertRoomChanges = function revertRoomChanges() {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || !cachedRoom) {
            return this._logger.warn('Unable to revert changes to room. Not currently in a room.');
        }

        activeRoom._update(cachedRoom.toJson());
    };

    RoomService.prototype.revertMemberChanges = function revertMemberChanges(member) {
        assert.isObject(member, 'member');

        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);
        var activeMember = findMemberInObservableRoom(member.getSessionId(), this._activeRoom);

        if (!cachedMember || !activeMember) {
            return this._logger.warn('Unable to revert changes to member. Member is currently not in room.');
        }

        activeMember._update(cachedMember.toJson());
    };

    RoomService.prototype.isInRoom = function isInRoom() {
        return !!this._activeRoom.getValue();
    };

    RoomService.prototype.toString = function toString() {
        return 'RoomService';
    };

    RoomService.prototype.stop = function stop() {
        var activeRoom = this._activeRoom.getValue();
        var that = this;

        if (activeRoom) {
            return this.leaveRoom(function(error, response) {
                if (error) {
                    that._logger.warn('Failure to stop room service. Unable to leave room', error);
                }

                if (response && response.status !== 'ok') {
                    that._logger.warn('Failure to stop room service. Unable to leave room. Status: [%s]', response.status);
                }

                if (response && response.status === 'ok') {
                    resetRoomModels.call(that);

                    that._started = false;
                }
            });
        }

        resetRoomModels.call(this);

        that._started = false;
    };

    function resetRoomModels() {
        this._self.setValue(null);
        this._activeRoom.setValue(null);
        this._cachedRoom.setValue(null);
        this._roomChatService = null;

        if (this._disposables) {
            this._disposables.dispose();
        }

        this._disposables = null;
    }

    function resetSelf(sessionId) {
        var self = this._self.getValue().toJson();
        var roomService = this;

        this._logger.info('Resetting self after sessionId changed to [%s]', sessionId);

        this._self.setValue(new Member(roomService, self.state, sessionId || '', self.screenName, self.role, self.streams, self.lastUpdate));
    }

    function resetRoom() {
        var that = this;

        var activeRoom = that._activeRoom.getValue();
        var selfSessionId = that._self.getValue().getSessionId();

        if (!_.isObject(activeRoom) || !selfSessionId) {
            return;
        }

        var roomId = activeRoom.getRoomId();
        var alias = activeRoom.getObservableAlias().getValue();

        that._logger.info('Leaving and re-entering room after reset of self model');

        leaveRoomRequest.call(that, function() {
            enterRoomRequest.call(that, roomId, alias, function() {
                that._logger.info('Room Reset Completed');
            });
        });
    }

    // Handle events
    function onRoomEvent(event) {
        assert.isObject(event, 'event');
        assert.isString(event.roomId, 'event.roomId');
        assert.isString(event.eventType, 'event.eventType');
        assert.isArray(event.members, 'event.members');

        _.forEach(event.members, function(member) {
            assert.isObject(member, 'member');
        });

        var that = this;

        switch (event.eventType) {
        case roomEnums.events.memberJoined.name:
            that._logger.debug('[%s] Member joined [%s]', event.roomId, event.members);

            return onMembersJoinsRoom.call(that, event.roomId, event.members);
        case roomEnums.events.memberLeft.name:
            that._logger.debug('[%s] Member left [%s]', event.roomId, event.members);

            return onMembersLeavesRoom.call(that, event.roomId, event.members);
        case roomEnums.events.memberUpdated.name:
            that._logger.debug('[%s] Member updated [%s]', event.roomId, event.members);

            return onMembersUpdated.call(that, event.roomId, event.members);
        case roomEnums.events.roomUpdated.name:
            that._logger.debug('[%s] Room updated [%s]', event.roomId, event.room);

            return onRoomUpdated.call(that, event.roomId, event.room);
        case roomEnums.events.roomEnded.name:
            that._logger.info('[%s] Room ended', event.roomId);

            break;
        default:
            that._logger.warn('Unsupported room event [%s]', event.eventType);
        }
    }

    function onMembersJoinsRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._removeMembers(members);
        room._addMembers(members);

        cachedRoom._removeMembers(members);
        cachedRoom._addMembers(members);

        var that = this;

        var memberIsSelf = function(member) {
            return member.sessionId === that.getSelf().getSessionId();
        };

        var joinedSelf = _.find(members, memberIsSelf);

        if (joinedSelf) {
            replaceSelfInstanceInRoom.call(that, room);

            room._updateMembers([joinedSelf]);
        }

        this._logger.info('[%s] Room has now [%d] members', roomId, room.getObservableMembers().getValue().length);
    }

    function onMembersLeavesRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._removeMembers(members);
        cachedRoom._removeMembers(members);

        this._logger.info('[%s] Room has now [%d] members', roomId, room.getObservableMembers().getValue().length);
    }

    function onMembersUpdated(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        // To help reduce conflicts when different properties are sequentially changing
        var membersWithOnlyPropertiesThatChanged = getDifferencesBetweenCachedRoomMembersAndUpdatedMembers.call(this, members);

        room._updateMembers(membersWithOnlyPropertiesThatChanged);
        cachedRoom._updateMembers(membersWithOnlyPropertiesThatChanged);

        this._logger.info('[%s] Room has [%d] updated members', roomId, members.length);
    }

    function onRoomUpdated(roomId, room) {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || activeRoom.getRoomId() !== roomId) {
            return;
        }

        cachedRoom._update(room);
        activeRoom._update(room);
    }

    function handlePCastSessionIdChanged(sessionId) {
        if (this.getSelf() && this.getSelf().getSessionId() === (sessionId || '')) {
            return;
        }

        resetSelf.call(this, sessionId);
    }

    function findMemberInObservableRoom(sessionId, observableRoom) {
        var room = observableRoom.getValue();
        var members = room.getObservableMembers().getValue();

        return findMemberInMembers(sessionId, members);
    }

    function findMemberInMembers(sessionId, members) {
        return _.find(members, function(member) {
            return sessionId === member.getSessionId();
        });
    }

    function handlePCastStatusChange(status) {
        this._logger.info('PCast status changed to [%s]', status);

        if (status.toLowerCase() !== 'offline' && this._lastPcastStatus === 'offline') {
            // ToDo (dcy) disabled until we determine what to do when the client goes back online
            // resetRoom.call(this);
        } else if (status.toLowerCase() === 'offline' && this._lastPcastStatus !== 'offline' && !_.isNullOrUndefined(this._lastPcastStatus)) {
            // ToDo (dcy) disabled until we determine what to do when the client goes offline
        }

        this._lastPcastStatus = status;
    }

    function setupSubscriptions() {
        var selfSubscription = this._self.subscribe(_.bind(resetRoom, this));

        var pcastStatusSubscription = this._authService.getObservableStatus().subscribe(_.bind(handlePCastStatusChange, this));
        var pcastSessionIdSubscription = this._authService.getObservableSessionId().subscribe(_.bind(handlePCastSessionIdChanged, this));

        this._disposables.add(selfSubscription);
        this._disposables.add(pcastStatusSubscription);
        this._disposables.add(pcastSessionIdSubscription);
    }

    function getDifferencesBetweenCachedRoomMembersAndUpdatedMembers(members) {
        var that = this;

        return _.map(members, function(member) {
            var cachedMember = findMemberInObservableRoom(member.sessionId, that._cachedRoom);
            var placeholderMember = new Member(null, member.state, member.sessionId, member.screenName, member.role, member.streams, member.lastUpdate);
            var memberWithOnlyDifferentProperties = buildMemberForRequest(placeholderMember, cachedMember);

            memberWithOnlyDifferentProperties.lastUpdate = member.lastUpdate;

            return memberWithOnlyDifferentProperties;
        });
    }

    // Requests to server
    function buildMemberForRequest(member, memberToCompare) {
        var memberForRequest = findDifferencesInMember(member, memberToCompare);

        memberForRequest.sessionId = member.getSessionId();
        // Last valid update from server. Handles collisions.
        memberForRequest.lastUpdate = memberToCompare ? memberToCompare.getLastUpdate() : _.now();

        return memberForRequest;
    }

    function findDifferencesInMember(member, memberToCompare) {
        if (!memberToCompare) {
            return member.toJson();
        }

        var memberForRequest = {};
        var newMember = member.toJson();
        var cachedMember = memberToCompare.toJson();
        var differences = _.findDifferences(newMember, cachedMember, true);

        _.forEach(differences, function(key) {
            memberForRequest[key] = newMember[key];
        });

        return memberForRequest;
    }

    function getRoomInfoRequest(roomId, alias, callback) {
        this._authService.assertAuthorized();

        var that = this;

        this._protocol.getRoomInfo(roomId, alias,
            function handleCreateRoomResponse(error, response) {
                if (error) {
                    that._logger.error('Request to get room info failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Request to get room info failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.room = _.freeze(createImmutableRoomFromResponse.call(this, response));

                callback(null, result);
            }
        );
    }

    function createRoomRequest(room, callback) {
        this._authService.assertAuthorized();

        var that = this;

        var validatedRoom = getValidRoomObject(room);

        this._protocol.createRoom(validatedRoom, function handleCreateRoomResponse(error, response) {
            if (error) {
                that._logger.error('Creating room failed with error [%s]', error);

                return callback(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok' && response.status !== 'already-exists') {
                that._logger.warn('Creating room failed with status [%s]', response.status);

                return callback(null, result);
            }

            result.room = _.freeze(createImmutableRoomFromResponse.call(this, response));

            callback(null, result);
        });
    }

    function getValidRoomObject(room) {
        var roomService = this;

        return (new Room(roomService, '', room.alias, room.name, room.description, room.type, [], room.bridgeId, room.pin)).toJson();
    }

    function enterRoomRequest(roomId, alias, callback) {
        var activeRoom = this._activeRoom.getValue();

        if (activeRoom) {
            var isSameRoom = roomId === activeRoom.getRoomId() || alias === activeRoom.getObservableAlias().getValue();

            this._logger.info('Unable to join room. Already in [%s]/[%s] room.', activeRoom.getRoomId(), activeRoom.getObservableAlias().getValue());

            return callback(null, _.assign({room: activeRoom}, isSameRoom ? alreadyInRoomResponse : inAnotherRoomResponse));
        }

        this._authService.assertAuthorized();

        var self = this._self.getValue();

        var screenName = self.getObservableScreenName().getValue();
        var role = self.getObservableRole().getValue();
        var selfForRequest = buildMemberForRequest.call(this, self, null);
        var timestamp = _.now();

        this._logger.info('Enter room [%s]/[%s] with screen name [%s] and role [%s]', roomId, alias, screenName, role);

        var that = this;

        this._protocol.enterRoom(roomId, alias, selfForRequest, timestamp,
            function handleEnterRoomResponse(error, response) {
                if (error) {
                    that._logger.error('Joining of room failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Joining of room failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.room = initializeRoomAndBuildCache.call(that, response);

                if (response.status === 'ok' && response.self) {
                    that.getSelf()._update(response.self);
                }

                callback(null, result);
            }
        );
    }

    function leaveRoomRequest(callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.info('Unable to leave room. Not currently in a room.');

            return callback(null, notInRoomResponse);
        }

        if (this._isLeavingRoom) {
            return;
        }

        this._authService.assertAuthorized();

        var roomId = this._activeRoom.getValue().getRoomId();
        var timestamp = _.now();

        this._logger.info('Leave room [%s]', roomId);

        var that = this;

        this._isLeavingRoom = true;

        this._protocol.leaveRoom(roomId, timestamp,
            function handleLeaveRoomResponse(error, response) {
                that._isLeavingRoom = false;

                if (error) {
                    that._logger.error('Leaving room failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Leaving room failed with status [%s]', response.status);

                    return callback(null, result);
                }

                if (that._roomChatService) {
                    that._roomChatService.stop();
                }

                that._roomChatService = null;

                that._activeRoom.setValue(null);
                that._cachedRoom.setValue(null);

                callback(null, result);
            }
        );
    }

    function updateMemberRequest(member, callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('Not in a room. Please Enter a room before updating member.');

            return callback(null, notInRoomResponse);
        }

        this._authService.assertAuthorized();

        var activeRoom = this._activeRoom.getValue();
        var roomId = activeRoom.getRoomId();
        var memberIsSelf = member.getSessionId() === this.getSelf().getSessionId();
        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);
        var memberForRequest = buildMemberForRequest.call(this, member, cachedMember);
        var timestamp = _.now();
        var wasSelfAudienceMember = memberIsSelf && !cachedMember;
        var isSelfBecomingAudience = memberIsSelf && memberForRequest.role === memberEnums.roles.audience.name;

        if (wasSelfAudienceMember) {
            memberForRequest.lastUpdate = member.getObservableLastUpdate().getValue();
        }

        this._logger.info('Updating member info for active room');

        var that = this;

        this._protocol.updateMember(roomId, memberForRequest, timestamp,
            function handleUpdateMemberResponse(error, response) {
                if (error) {
                    that._logger.error('Update of member failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Update of member failed with status [%s]', response.status);
                }

                if (response.status === 'ok' && isSelfBecomingAudience) {
                    that.getSelf().getObservableLastUpdate().setValue(response.lastUpdate);
                }

                callback(null, result);
            }
        );
    }

    function updateRoomRequest(callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('Not in a room. Please Enter a room before updating member.');

            return callback(null, notInRoomResponse);
        }

        this._authService.assertAuthorized();

        var room = this._activeRoom.getValue();
        var timestamp = _.now();

        var that = this;

        this._protocol.updateRoom(room.toJson(), timestamp,
            function handleUpdateMemberResponse(error, response) {
                if (error) {
                    that._logger.error('Update of room failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Update of room failed with status [%s]', response.status);
                }

                callback(null, result);
            }
        );
    }

    function createImmutableRoomFromResponse(response) {
        var roomInfo = response.room;
        var members = response.members || [];
        var roomService = this;

        return new ImmutableRoom(roomService, roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin);
    }

    function createRoomFromResponse(response) {
        var roomInfo = response.room;
        var members = response.members;
        var roomService = this;

        return new Room(roomService, roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin);
    }

    function initializeRoomAndBuildCache(response) {
        var room = createRoomFromResponse.call(this, response);
        var cachedRoom = createRoomFromResponse.call(this, response);

        replaceSelfInstanceInRoom.call(this, room);

        this._activeRoom.setValue(room);
        this._cachedRoom.setValue(cachedRoom);

        return room;
    }

    function replaceSelfInstanceInRoom(room) {
        var self = this._self.getValue();
        var members = room.getObservableMembers().getValue();

        var selfIndex = _.findIndex(members, function(member) {
            return self.getSessionId() === member.getSessionId();
        });

        if (!_.isNumber(selfIndex)) {
            return this._logger.info('Self not in server room model.');
        }

        self._update(members[selfIndex].toJson());

        members[selfIndex] = self;

        room.getObservableMembers().setValue(members);
    }

    return RoomService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    // TODO(dy) wrap PC in this class
    function PeerConnection() {

    }

    PeerConnection.convertPeerConnectionStats = function(stats, lastStats) {
        return convertPeerConnectionStats(stats, lastStats);
    };

    function convertPeerConnectionStats(stats, lastStats) {
        if (!stats) {
            return null;
        }

        var newStats = [];

        var convertStats = function convertStats(ssrc, mediaType, timestamp, bytesSent, bytesReceived, direction) {
            if (ssrc) {
                if (!_.hasIndexOrKey(lastStats, ssrc)) {
                    lastStats[ssrc] = {timestamp: 0};
                }

                var timeDelta = parseFloat(timestamp) - lastStats[ssrc].timestamp;
                var up = calculateUploadRate(parseFloat(bytesSent), lastStats[ssrc].bytesSent, timeDelta);
                var down = calculateDownloadRate(parseFloat(bytesReceived), lastStats[ssrc].bytesReceived, timeDelta);

                lastStats[ssrc].bytesSent = parseFloat(bytesSent);
                lastStats[ssrc].bytesReceived = parseFloat(bytesReceived);
                lastStats[ssrc].timestamp = parseFloat(timestamp);

                newStats.push({
                    uploadRate: up,
                    downloadRate: down,
                    mediaType: mediaType,
                    ssrc: ssrc,
                    direction: direction
                });
            }
        };

        if (_.isFunction(stats.result)) {
            _.forEach(stats.result(), function(statsReport) {
                if (statsReport.type === 'ssrc') {
                    var ssrc = statsReport.stat('ssrc');
                    var bytesSent = statsReport.stat('bytesSent');
                    var bytesReceived = statsReport.stat('bytesReceived');
                    var mediaType = statsReport.stat('mediaType');
                    var timestamp = statsReport.timestamp.getTime();
                    var direction = statsReport.id.indexOf('send') > -1 ? 'upload' : 'download';

                    convertStats(ssrc, mediaType, timestamp, bytesSent, bytesReceived, direction);
                }
            });
        } else if (_.isFunction(stats.values)) {
            _.forEach(Array.from(stats.values()), function(statsReport) {
                if (_.hasIndexOrKey(statsReport, 'ssrc')) {
                    if (!statsReport.ssrc || _.includes(statsReport.id, 'rtcp')) {
                        return;
                    }

                    var direction = statsReport.type.indexOf('outbound') > -1 ? 'upload' : 'download';

                    convertStats(statsReport.ssrc, statsReport.mediaType, statsReport.timestamp, statsReport.bytesSent, statsReport.bytesReceived, direction);
                }
            });
        } else {
            _.forEach(stats, function(statsReport) {
                if (_.hasIndexOrKey(statsReport, 'ssrc')) {
                    if (!statsReport.ssrc || _.includes(statsReport.id, 'rtcp')) {
                        return;
                    }

                    var direction = statsReport.type.indexOf('outbound') > -1 ? 'upload' : 'download';

                    convertStats(statsReport.ssrc, statsReport.mediaType, statsReport.timestamp, statsReport.bytesSent, statsReport.bytesReceived, direction);
                }
            });
        }

        return newStats;
    }

    function calculateUploadRate(bytesSent, prevBytesSent, timeDelta) {
        if (bytesSent) {
            var bytesSentBefore = prevBytesSent || 0;
            var bps = 8 * 1000 * (bytesSent - bytesSentBefore) / timeDelta;

            return Math.round(bps / 1000);
        }

        return 0;
    }

    function calculateDownloadRate(bytesReceived, prevBytesReceived, timeDelta) {
        if (bytesReceived) {
            var bytesReceivedBefore = prevBytesReceived || 0;
            var bps = 8 * 1000 * (bytesReceived - bytesReceivedBefore) / timeDelta;

            return Math.round(bps / 1000);
        }

        return 0;
    }

    return PeerConnection;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc) {
    'use strict';

    function AudioContext() {
        this.init();
    }

    AudioContext.prototype.init = function init() {
        if (!rtc.global.AudioContext && !rtc.global.webkitAudioContext) {
            throw new Error('Browser does not support AudioContext');
        }

        this._audioContext = new (rtc.global.AudioContext || rtc.global.webkitAudioContext)();
    };

    AudioContext.prototype.getNativeAudioContext = function getNativeAudioContext() {
        return this._audioContext;
    };

    AudioContext.prototype.toString = function toString() {
        return 'AudioContext';
    };

    return AudioContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(76)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ApplicationActivityDetector) {
    'use strict';

    return new ApplicationActivityDetector();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var telemetryProto = {
        "package": "telemetry",
        "messages": [
            {
                "name": "LogData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "LogLevel",
                        "name": "level",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "category",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "message",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "runtime",
                        "id": 10
                    }
                ]
            },
            {
                "name": "StoreLogRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "LogData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StoreLogRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            },
            {
                "name": "MetricValue",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "string",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "float",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "uint64",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "int64",
                        "name": "int64",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "boolean",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "timestamp",
                        "id": 6
                    }
                ]
            },
            {
                "name": "MetricData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "resource",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "kind",
                        "id": 6
                    },
                    {
                        "rule": "required",
                        "type": "Metric",
                        "name": "metric",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "value",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "previousValue",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "elapsed",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 12
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 13
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "tool",
                        "id": 14
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "toolVersion",
                        "id": 15
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "runtime",
                        "id": 16
                    }
                ]
            },
            {
                "name": "SubmitMetricRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "MetricData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SubmitMetricRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            }
        ],
        "enums": [
            {
                "name": "LogLevel",
                "values": [
                    {
                        "name": "Trace",
                        "id": 0
                    },
                    {
                        "name": "Debug",
                        "id": 1
                    },
                    {
                        "name": "Info",
                        "id": 2
                    },
                    {
                        "name": "Warn",
                        "id": 3
                    },
                    {
                        "name": "Error",
                        "id": 4
                    },
                    {
                        "name": "Fatal",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Metric",
                "values": [
                    {
                        "name": "RoundTripTime",
                        "id": 0
                    },
                    {
                        "name": "DownlinkThroughputCapacity",
                        "id": 26
                    },
                    {
                        "name": "Initialized",
                        "id": 1
                    },
                    {
                        "name": "Provisioned",
                        "id": 2
                    },
                    {
                        "name": "SetupCompleted",
                        "id": 3
                    },
                    {
                        "name": "Offset",
                        "id": 4
                    },
                    {
                        "name": "TimeToFirstFrame",
                        "id": 5
                    },
                    {
                        "name": "Playing",
                        "id": 6
                    },
                    {
                        "name": "Stalled",
                        "id": 7
                    },
                    {
                        "name": "Buffering",
                        "id": 8
                    },
                    {
                        "name": "Seeking",
                        "id": 22
                    },
                    {
                        "name": "Stopped",
                        "id": 9
                    },
                    {
                        "name": "BitRateAdaptation",
                        "id": 10
                    },
                    {
                        "name": "ResolutionChanged",
                        "id": 11
                    },
                    {
                        "name": "DisplayResolutionChanged",
                        "id": 23
                    },
                    {
                        "name": "VideoBitRate",
                        "id": 28
                    },
                    {
                        "name": "AudioBitRate",
                        "id": 29
                    },
                    {
                        "name": "FrameRateChanged",
                        "id": 12
                    },
                    {
                        "name": "FramesDropped",
                        "id": 13
                    },
                    {
                        "name": "PacketsLost",
                        "id": 14
                    },
                    {
                        "name": "PictureLost",
                        "id": 15
                    },
                    {
                        "name": "PlayoutDelayChanged",
                        "id": 16
                    },
                    {
                        "name": "CodecChanged",
                        "id": 17
                    },
                    {
                        "name": "PlayerEvent",
                        "id": 21
                    },
                    {
                        "name": "MetricDropped",
                        "id": 18
                    },
                    {
                        "name": "NetworkOffline",
                        "id": 19
                    },
                    {
                        "name": "NetworkOnline",
                        "id": 20
                    },
                    {
                        "name": "NetworkType",
                        "id": 27
                    },
                    {
                        "name": "ApplicationForeground",
                        "id": 24
                    },
                    {
                        "name": "ApplicationBackground",
                        "id": 25
                    }
                ]
            }
        ]
    };

    return telemetryProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(88),
    __webpack_require__(86),
    __webpack_require__(85)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, Pbf, Schema, mqProto) {
    'use strict';

    function MQProtocol(protocols, apiVersion) {
        var that = this;

        this._schemas = {};

        this._schemas[mqProto.package] = new Schema(mqProto);

        _.forEach(protocols, function(protocol) {
            that._schemas[protocol.package] = new Schema(protocol);
        });

        this._apiVersion = apiVersion || 3;
    }

    MQProtocol.prototype.getApiVersion = function() {
        return this._apiVersion;
    };

    MQProtocol.prototype.encode = function(type, data) {
        if (typeof type !== 'string') {
            throw new Error("'type' must be a string");
        }

        if (typeof data !== 'object') {
            throw new Error("'data' must be an object");
        }

        var typeQuery = type.split('.');
        var namespace = _.get(typeQuery, [0]);
        var subType = _.get(typeQuery, [1]);
        var schema = _.get(this._schemas, [namespace]);
        var message = new Pbf();

        schema.write(subType, data, message);

        return message.finish();
    };

    MQProtocol.prototype.decode = function(type, value) {
        if (typeof type !== 'string') {
            throw new Error("'type' must be a string");
        }

        var typeQuery = type.split('.');
        var namespace = _.get(typeQuery, [0]);
        var subType = _.get(typeQuery, [1]);
        var schema = _.get(this._schemas, [namespace]);
        var message = new Pbf(value);
        var decodedMessage = schema.read(subType, message);

        return decodedMessage;
    };

    return MQProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(3),
    __webpack_require__(35),
    __webpack_require__(84)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable, MQProtocol, Base64) {
    'use strict';

    var clientRequestIdPrefix = 'C';
    var continuationStatus = 'continuation';
    var continuationPollInterval = 2000;
    var continuationTimeout = 300000;
    var defaultRequestTimeout = 18000;

    function MQService(logger, sendCallback, receiveCallback, protocols, apiVersion) {
        assert.isObject(logger, 'logger');
        assert.isFunction(sendCallback, 'sendCallback');
        assert.isFunction(receiveCallback, 'receiveCallback');

        this._logger = logger;
        this._mqProtocol = new MQProtocol(protocols, apiVersion);

        this._nextRequestId = 0;
        this._namedEvents = new event.NamedEvents();
        this._requests = {};
        this._responses = {};
        this._requestListeners = {};
        this._requestTimeouts = {};
        this._requestTimestamps = {};
        this._continuationTimeouts = {};

        this._receiveCallback = receiveCallback;
        this._sendCallback = sendCallback;

        receiveCallback(_.bind(onMessage, this));
    }

    MQService.prototype.onEvent = function(eventName, handler) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable to listen for event');
        }

        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(handler, 'handler');

        return this._namedEvents.listen(eventName, handler);
    };

    MQService.prototype.onRequest = function(requestName, handler) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable to listen for request');
        }

        assert.isStringNotEmpty(requestName, 'requestName');
        assert.isFunction(handler, 'handler');

        if (this._requestListeners[requestName]) {
            this._logger.warn('May not set multiple handlers for the same request. Overriding existing handlers for request [%s]', requestName);
        }

        this._requestListeners[requestName] = handler;

        var that = this;

        return new disposable.Disposable(function() {
            that._requestListeners[requestName] = null;
        });
    };

    MQService.prototype.sendRequest = function sendRequest(type, message, callback, settings) {
        if (this._disposed) {
            this._logger.warn('Proto already disposed of. Unable to send request');

            return callback(null, {status: 'proto-disposed'});
        }

        settings = settings || {};

        assert.isStringNotEmpty(type, 'type');
        assert.isObject(message, 'message');
        assert.isObject(settings, 'settings');

        if (callback) {
            assert.isFunction(callback, 'callback');
        }

        if (settings.timeout) {
            assert.isNumber(settings.timeout, 'settings.timeout');
        }

        var requestId = clientRequestIdPrefix + (this._nextRequestId++).toString();
        var request = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, message),
            messageType: 'Request'
        };

        this._requests[requestId] = _.bind(handleResponseAndContinuations, this, requestId, type, message, settings.timeout, callback);

        return sendRequestWithTimeout.call(this, requestId, request, message, settings.timeout, callback);
    };

    MQService.prototype.sendResponse = function sendResponse(requestId, type, message, callback) {
        if (this._disposed) {
            this._logger.warn('Proto already disposed of. Unable to send response');

            return callback(null, {status: 'proto-disposed'});
        }

        assert.isStringNotEmpty(requestId, 'requestId');
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(message, 'message');

        var start = this._responses[requestId];

        if (!start) {
            this._logger.error('Already responded to request [%s]', requestId);

            callback(new Error('no-response-handler'));
        }

        var response = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, message),
            messageType: 'Response',
            wallTime: [_.now() - start]
        };

        encodeAndSendMessage.call(this, response, message);

        delete this._responses[requestId];

        return callback(null, {status: 'ok'});
    };

    MQService.prototype.disposeOfRequests = function() {
        _.forOwn(this._requestTimeouts, function(timeout) {
            clearTimeout(timeout);
        });

        _.forOwn(this._continuationTimeouts, function(timeout) {
            clearTimeout(timeout);
        });

        this._requests = {};
        this._responses = {};
        this._requestListeners = {};
        this._requestTimeouts = {};
        this._requestTimestamps = {};
        this._continuationTimeouts = {};
    };

    MQService.prototype.dispose = function() {
        this._disposed = true;
        this._receiveCallback = null;
        this._sendCallback = null;

        this.disposeOfRequests();

        this._namedEvents.dispose();
    };

    MQService.prototype.getApiVersion = function getApiVersion() {
        return this._mqProtocol.getApiVersion();
    };

    MQService.prototype.toString = function() {
        return 'Proto[' + this._webSocket.toString() + ']';
    };

    function triggerEvent(eventName, args) {
        this._namedEvents.fire(eventName, args, this);
    }

    function onMessage(evt) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable process message');
        }

        var message;
        var messageBody;
        var callback;

        try {
            message = this._mqProtocol.decode('mq.Message', Base64.toByteArray(evt.data));
            callback = this._requests[message.requestId];

            this._logger.info('>> [%s] [%s]', message.messageType, message.type);

            messageBody = this._mqProtocol.decode(message.type, message.payload);
        } catch (e) {
            this._logger.error(e);

            if (callback) {
                return callback(e);
            }

            throw e;
        }

        triggerReceivedEvent.call(this, message, messageBody, evt.data.length);

        switch (message.messageType) {
        case 'Response':
            if (messageBody.status !== continuationStatus) {
                delete this._requests[message.requestId];
            }

            clearTimeout(this._requestTimeouts[message.requestId]);

            delete this._requestTimeouts[message.requestId];

            if (!callback) {
                return;
            }

            if (message.type === 'mq.Error') {
                var error = messageBody;

                return callback(error, null);
            }

            return callback(null, messageBody);
        case 'Request':
            var sendResponse = _.bind(this.sendResponse, this, message.requestId, message.type + 'Response');
            var requestListener = this._requestListeners[message.type];

            this._responses[message.requestId] = _.now();

            if (requestListener) {
                requestListener(messageBody, sendResponse);
            } else {
                this._logger.info('Received request without a subscribed listener');
            }

            break;
        case 'Event':
            return triggerEvent.call(this, message.type, [messageBody]);
        default:
            return this._logger.warn('>> Unsupported message type [%s]', message.messageType);
        }
    }

    function handleResponseAndContinuations(requestId, type, message, timeout, callback, error, response) {
        if (response && response.status === continuationStatus) {
            if (!this._continuationTimeouts[requestId] && this._requests[requestId]) {
                this._continuationTimeouts[requestId] = listenForContinuationTimeout.call(this, requestId, callback);
            }

            return sendRequestWithContinuation.call(this, requestId, type, message, response, timeout, callback);
        }

        clearTimeout(this._continuationTimeouts[requestId]);

        delete this._continuationTimeouts[requestId];

        return callback(error, response);
    }

    function sendRequestWithContinuation(requestId, type, message, response, timeout, callback) {
        if (!response || (!response.continuationId && !response.routeKey)) {
            this._logger.warn('Received request for continuation without a continuationId or routeKey');

            return callback();
        }

        var messageWithContinuation = _.assign({}, message, {
            continuationId: response.continuationId,
            routeKey: response.routeKey
        });
        var request = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, messageWithContinuation),
            messageType: 'Request'
        };
        var that = this;

        return setTimeout(function() {
            if (!that._requests[requestId]) {
                return;
            }

            return sendRequestWithTimeout.call(that, requestId, request, messageWithContinuation, timeout, callback);
        }, continuationPollInterval);
    }

    function sendRequestWithTimeout(requestId, request, payload, timeout, callback) {
        if (this._requestTimeouts[requestId]) {
            clearTimeout(this._requestTimeouts[requestId]);
        }

        var requestTimeout = timeout || defaultRequestTimeout;

        this._requestTimeouts[requestId] = setTimeout(_.bind(handleRequestTimeout, this, requestId, requestTimeout, callback), requestTimeout);

        return encodeAndSendMessage.call(this, request, payload);
    }

    function encodeAndSendMessage(message, payload) {
        var encodedMessage = Base64.toString(this._mqProtocol.encode('mq.Message', message));

        triggerSentEvent.call(this, message, payload, encodedMessage.length);

        return this._sendCallback(encodedMessage);
    }

    function listenForContinuationTimeout(requestId, callback) {
        return setTimeout(_.bind(handleRequestTimeout, this, requestId, continuationTimeout, callback), continuationTimeout);
    }

    function handleRequestTimeout(requestId, timeout, callback) {
        if (!this._requests[requestId]) {
            return;
        }

        triggerTimeoutEvent.call(this, requestId, timeout);

        this._logger.warn('Request [%s] has not completed in [%s] ms. Dropping request.', requestId, timeout);

        delete this._requests[requestId];

        return callback(null, {status: 'timeout'});
    }

    function triggerReceivedEvent(message, payload, bytes) {
        var now = _.now();
        var sentTimestamp = this._requestTimestamps[message.requestId];

        if (_.isNumber(sentTimestamp)) {
            var totalRequestTime = now - sentTimestamp;

            message.wallTime = [totalRequestTime].concat(message.wallTime);
        }

        this._namedEvents.fireAsync('received', [{
            key: message.requestId,
            messageType: message.messageType,
            type: message.type,
            wallTime: message.wallTime,
            received: now,
            bytes: bytes,
            payload: payload
        }]);

        delete this._requestTimestamps[message.requestId];
    }

    function triggerSentEvent(message, payload, bytes) {
        var now = _.now();

        this._requestTimestamps[message.requestId] = now;

        this._namedEvents.fireAsync('sent', [{
            key: message.requestId,
            messageType: message.messageType,
            type: message.type,
            received: now,
            bytes: bytes,
            payload: payload
        }]);
    }

    function triggerTimeoutEvent(requestId, timeout) {
        this._namedEvents.fireAsync('timeout', [{
            key: requestId,
            timeout: timeout
        }]);

        delete this._requestTimestamps[requestId];
    }

    return MQService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(89)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(networkConnectionMonitor) {
    'use strict';

    return networkConnectionMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    function Event() {
        this._listeners = [];
    }

    Event.prototype.fire = function(args, context) {
        fireEvent.call(this, args, context);
    };

    Event.prototype.fireAsync = function(args, context, callback) {
        fireEvent.call(this, args, context, callback || function() {});
    };

    Event.prototype.listen = function(listener) {
        var that = this;

        assert.isFunction(listener, 'listener');

        that._listeners.push(listener);

        return new disposable.Disposable(function() {
            that._listeners = _.remove(that._listeners, function(item) {
                return item === listener;
            });
        });
    };

    Event.prototype.size = function() {
        return this._listeners.length;
    };

    Event.prototype.dispose = function() {
        this._listeners = [];
    };

    Event.prototype.toString = function() {
        return 'Event|' + this.size();
    };

    function fireEvent(args, context, asyncCallback) {
        var that = this;

        if (_.isNullOrUndefined(args)) {
            args = [];
        }

        assert.isArray(args, 'args');

        var notifyListeners = function notifyListeners() {
            _.forEach(that._listeners, function(listener) {
                listener.apply(context, args);
            });
        };

        if (asyncCallback) {
            setTimeout(function() {
                notifyListeners();
                asyncCallback();
            }, 0);
        } else {
            notifyListeners();
        }
    }

    return Event;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    var environment = {};

    environment.parseEnvFromPcastBaseUri = function(uri) {
        uri = uri.toLowerCase();

        if (_.includes(uri, 'local')) {
            return 'local';
        } else if (_.includes(uri, 'stg')) {
            return 'staging';
        }

        return 'production';
    };

    return environment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    function Observable(initialValue, beforeChange) {
        this.latestValue = null;
        this.subscribeCallbacks = {};
        this.subscriptionTimeout = 100;
        this.subscriptionCount = 0;
        this.resetOnChange = false;
        this.lastChangeTime = 0;
        this.isPendingChanges = false;
        this.beforeChange = beforeChange;

        setLatestValue.call(this, initialValue);
    }

    Observable.prototype.getValue = function getValue() {
        return clone(this.latestValue);
    };

    Observable.prototype.setValue = function setValue(value) {
        if (value !== this.latestValue) {
            setLatestValue.call(this, value);
            onSubscribeCallback.call(this, this.subscriptionTimeout);
        }
    };

    Observable.prototype.subscribe = function subscribe(callback, options) {
        assert.isFunction(callback, 'callback');

        if (options) {
            assert.isObject(options, 'options');
        }

        var that = this;
        var key = _.uniqueId();
        var listenForChanges;

        that.subscribeCallbacks[key] = callback;
        that.subscriptionCount += 1;

        if (options) {
            if (options.initial === 'notify') {
                onSubscribeCallback.call(that, that.subscriptionTimeout, true);
            }

            if (options.listenForChanges) {
                listenForChanges = setInterval(function() {
                    var valueAtInterval = options.listenForChanges.callback();

                    if (valueAtInterval !== that.latestValue) {
                        that.setValue(valueAtInterval);
                    }
                }, options.listenForChanges.timeout);
            }
        }

        return new disposable.Disposable(function dispose() {
            delete that.subscribeCallbacks[key];

            if (listenForChanges) {
                clearInterval(listenForChanges);

                listenForChanges = null;
            }

            that.subscriptionCount -= 1;
        });
    };

    Observable.prototype.extend = function extend(options) {
        assert.isObject(options, 'options');

        switch (options.method) {
        case 'notifyWhenChangesStop':
            this.subscriptionTimeout = options.timeout;
            this.resetOnChange = true;

            break;
        case 'notifyAtFixedRate':
            this.subscriptionTimeout = options.timeout;

            break;
        default:
            break;
        }

        if (_.isNumber(options.rateLimit)) {
            this.subscriptionTimeout = options.rateLimit;
        }

        return this;
    };

    function clone(value) {
        if (typeof value === 'undefined' || value === null) {
            return value;
        }

        // Necessary for observable array. Subsequent comparison must not be equal in order to trigger updates.
        if (_.isArray(value)) {
            return value.slice();
        }

        return value;
    }

    function setLatestValue(value) {
        var valueToSet = value;

        if (this.beforeChange) {
            valueToSet = this.beforeChange(value);
        }

        this.latestValue = clone(valueToSet);
    }

    function onSubscribeCallback(timeoutLength, noTimeout) {
        this.lastChangeTime = _.now();

        if (!this.isPendingChanges && this.subscriptionCount !== 0) {
            this.isPendingChanges = true;

            if (noTimeout) {
                return notifySubscribers.call(this);
            }

            continueAfterTimeout.call(this, timeoutLength);
        }
    }

    function continueAfterTimeout(timeoutLength) {
        var that = this;

        setTimeout(function() {
            var timeElapsedSinceLastChange = _.now() - that.lastChangeTime;

            if (that.resetOnChange && timeElapsedSinceLastChange < that.subscriptionTimeout) {
                continueAfterTimeout.call(that, that.subscriptionTimeout - timeElapsedSinceLastChange);
            } else {
                notifySubscribers.call(that);
            }
        }, timeoutLength);
    }

    function notifySubscribers() {
        try {
            executeSubscriptionCallbacks.call(this);
        } finally {
            this.isPendingChanges = false;
        }
    }

    function executeSubscriptionCallbacks() {
        var that = this;

        _.forOwn(that.subscribeCallbacks, function(callback) {
            if (_.isFunction(callback)) {
                callback(that.latestValue);
            }
        });
    }

    return Observable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(100)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(detectBrowser) {
    return detectBrowser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, phenixRTC) {
    'use strict';

    var defaultMonitoringInterval = 4000;
    var defaultConditionMonitoringInterval = 1500;
    var defaultFrameRateThreshold = 2;
    var defaultAudioBitRateThreshold = 5000;
    var defaultVideoBitRateThreshold = 6000;
    var defaultConditionCountForNotificationThreshold = 3;
    var defaultTimeoutForNoData = 5000;
    var minEdgeMonitoringInterval = 6000;
    var minEdgeConditionCountForNotification = 2;

    function PeerConnectionMonitor(name, peerConnection, logger) {
        assert.isString(name, 'name');
        assert.isObject(peerConnection, 'peerConnection');
        assert.isObject(logger, 'logger');

        this._name = name;
        this._peerConnection = peerConnection;
        this._logger = logger;
    }

    PeerConnectionMonitor.prototype.start = function(options, activeCallback, monitorCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(activeCallback, 'activeCallback');
        assert.isFunction(monitorCallback, 'monitorCallback');

        if (options.direction !== 'inbound' && options.direction !== 'outbound') {
            throw new Error('Invalid monitoring direction');
        }

        this._frameRateFailureThreshold = options.frameRateThreshold || defaultFrameRateThreshold;
        this._videoBitRateFailureThreshold = options.videoBitRateThreshold || defaultVideoBitRateThreshold;
        this._audioBitRateFailureThreshold = options.audioBitRateThreshold || defaultAudioBitRateThreshold;
        this._conditionCountForNotificationThreshold = options.conditionCountForNotificationThreshold || defaultConditionCountForNotificationThreshold;
        this._monitoringInterval = options.monitoringInterval || defaultMonitoringInterval;
        this._conditionMonitoringInterval = options.monitoringInterval || defaultConditionMonitoringInterval;
        this._monitorFrameRate = options.hasOwnProperty('monitorFrameRate') ? options.monitorFrameRate : true;
        this._monitorBitRate = options.hasOwnProperty('monitorBitRate') ? options.monitorBitRate : true;
        this._monitorState = options.hasOwnProperty('monitorState') ? options.monitorState : true;
        this._pausedTracks = [];

        if (phenixRTC.browser === 'Edge') {
            var conditionMaxDuration = this._conditionMonitoringInterval * this._conditionCountForNotificationThreshold;

            this._monitoringInterval = Math.max(this._monitoringInterval, minEdgeMonitoringInterval);
            this._conditionMonitoringInterval = Math.max(this._conditionMonitoringInterval, minEdgeMonitoringInterval);
            this._conditionCountForNotificationThreshold = Math.max(Math.ceil(conditionMaxDuration / this._monitoringInterval), minEdgeConditionCountForNotification);

            this._logger.info('Using modified options for optimal monitoring of PeerConnection on [Edge]. Monitor Interval [%s], Condition Monitor Interval [%s], Condition Count For Notification [%s]',
                this._monitoringInterval, this._conditionMonitoringInterval, this._conditionCountForNotificationThreshold);
        }

        return monitorPeerConnection.call(this, this._name, this._peerConnection, options, activeCallback, monitorCallback);
    };

    PeerConnectionMonitor.prototype.setMonitorTrackState = function(track, state) {
        assert.isObject(track, 'track');
        assert.isBoolean(state, 'state');

        var peerConnectionTracks = getAllTracks(this._peerConnection);
        var foundTrack = !!_.find(peerConnectionTracks, function(pcTrack) {
            return pcTrack.id === track.id;
        });

        if (!foundTrack) {
            return this._logger.warn('[%s] Unable to find track [%s] [%s] in peer connection', this._name, track.kind, track.id);
        }

        if (!state) {
            this._logger.info('[%s] Pausing monitoring of track [%s] [%s]', this._name, track.kind, track.id);

            return this._pausedTracks.push(track);
        }

        var pausedTrackLength = this._pausedTracks.length;

        this._pausedTracks = _.filter(this._pausedTracks, function(pausedTrack) {
            return pausedTrack.id !== track.id;
        });

        if (pausedTrackLength !== this._pausedTracks.length) {
            this._logger.info('[%s] Starting monitoring of track [%s] [%s] after it was paused', this._name, track.kind, track.id);
        }
    };

    PeerConnectionMonitor.prototype.toString = function() {
        return 'PeerConnectionMonitor[' + this._name + ']';
    };

    function monitorPeerConnection(name, peerConnection, options, activeCallback, monitorCallback) {
        var that = this;
        var conditionCount = 0;
        var frameRate = undefined;
        var videoBitRate = undefined;
        var audioBitRate = undefined;
        var lastAudioBytes = {};
        var lastVideoBytes = {};
        var lastFramesEncoded = {};
        var checkForNoDataTimeout = null;

        function nextCheck(checkForNoData) {
            var selector = null;

            getStats.call(that, peerConnection, selector, activeCallback, function successCallback(report) {
                var hasFrameRate = false;
                var hasVideoBitRate = false;
                var hasAudioBitRate = false;
                var readable = false;
                var writable = false;

                if (!activeCallback()) {
                    return that._logger.info('[%s] Finished monitoring of peer connection', name);
                }

                function eachStats(stats, reportId) { // eslint-disable-line no-unused-vars
                    var trackId = stats.id || stats.ssrc;
                    var currentBytes = null;

                    if (stats.framesEncoded) {
                        var framesEncoded = new Stats(stats.framesEncoded);

                        stats.framerateMean = calculateFrameRate(framesEncoded, lastFramesEncoded[trackId], that._frameRateFailureThreshold * 2);
                        lastFramesEncoded[trackId] = framesEncoded;
                    }

                    switch (phenixRTC.browser) {
                    case 'Safari':
                    case 'Firefox':
                    case 'Edge':
                    case 'IE':
                        writable = readable |= stats.selected &&
                            stats.state === 'succeeded' ||
                            phenixRTC.browser === 'IE' ||
                            phenixRTC.browser === 'Edge' ||
                            phenixRTC.browser === 'Safari';

                        if (options.direction === 'outbound' && (stats.type === 'outboundrtp' || stats.type === 'outbound-rtp' || stats.type === 'kOutboundRtp')) {
                            currentBytes = new Stats(stats.bytesSent);

                            switch (stats.mediaType) {
                            case 'video':
                                that._logger.debug('[%s] Outbound [%s] [%s] with bitrate [%s], droppedFrames [%s] and frame rate [%s]',
                                    name, stats.mediaType, stats.ssrc, stats.bitrateMean, stats.droppedFrames, stats.framerateMean);
                                hasFrameRate = true;
                                frameRate = stats.framerateMean || 0;
                                hasVideoBitRate = true;
                                videoBitRate = calculateBitRate(currentBytes, lastVideoBytes[trackId], that._videoBitRateFailureThreshold * 2);
                                lastVideoBytes[trackId] = currentBytes;

                                if (phenixRTC.browser === 'Edge') {
                                    hasFrameRate = false;
                                }

                                break;
                            case 'audio':
                                that._logger.debug('[%s] Outbound [%s] [%s]',
                                    name, stats.mediaType, stats.ssrc);
                                hasAudioBitRate = true;
                                audioBitRate = calculateBitRate(currentBytes, lastAudioBytes[trackId], that._audioBitRateFailureThreshold * 2);
                                lastAudioBytes[trackId] = currentBytes;

                                break;
                            default:
                                break;
                            }
                        }

                        if (options.direction === 'inbound' && (stats.type === 'inboundrtp' || stats.type === 'inbound-rtp' || stats.type === 'kInboundRtp')) {
                            currentBytes = new Stats(stats.bytesReceived);

                            switch (stats.mediaType) {
                            case 'video':
                                that._logger.debug('[%s] Inbound [%s] [%s] with framerate [%s] and jitter [%s]',
                                    name, stats.mediaType, stats.ssrc, stats.framerateMean, stats.jitter);

                                // Inbound frame rate is not calculated correctly
                                // hasFrameRate = true;
                                // frameRate = stats.framerateMean || 0;
                                hasVideoBitRate = true;
                                videoBitRate = calculateBitRate(currentBytes, lastVideoBytes[trackId], that._videoBitRateFailureThreshold * 2);
                                lastVideoBytes[trackId] = currentBytes;

                                break;
                            case 'audio':
                                that._logger.debug('[%s] Inbound [%s] [%s] with jitter [%s]',
                                    name, stats.mediaType, stats.ssrc, stats.jitter);
                                hasAudioBitRate = true;
                                audioBitRate = calculateBitRate(currentBytes, lastAudioBytes[trackId], that._audioBitRateFailureThreshold * 2);
                                lastAudioBytes[trackId] = currentBytes;

                                break;
                            default:
                                break;
                            }
                        }

                        break;
                    case 'Chrome':
                    default:
                        if (stats.googWritable === 'true') {
                            writable = true;
                        }

                        if (stats.googReadable === 'true') {
                            readable = true;
                        }

                        if (stats.type !== 'ssrc') {
                            return;
                        }

                        if (options.direction === 'outbound') {
                            currentBytes = new Stats(stats.bytesSent);

                            switch (stats.mediaType) {
                            case 'video':
                                that._logger.debug('[%s] Outbound [%s] [%s] with average encoding time [%s] ms (CPU limited=[%s]) and RTT [%s]',
                                    name, stats.mediaType, stats.ssrc, stats.googAvgEncodeMs, stats.googCpuLimitedResolution, stats.googRtt);
                                hasFrameRate = true;
                                frameRate = stats.googFrameRateSent || 0;
                                hasVideoBitRate = true;
                                videoBitRate = calculateBitRate(currentBytes, lastVideoBytes[trackId], that._videoBitRateFailureThreshold * 2);
                                lastVideoBytes[trackId] = currentBytes;

                                break;
                            case 'audio':
                                that._logger.debug('[%s] Outbound [%s] [%s] with audio input level [%s] and RTT [%s] and jitter [%s]',
                                    name, stats.mediaType, stats.ssrc, stats.audioInputLevel, stats.googRtt, stats.googJitterReceived);
                                hasAudioBitRate = true;
                                audioBitRate = calculateBitRate(currentBytes, lastAudioBytes[trackId], that._audioBitRateFailureThreshold * 2);
                                lastAudioBytes[trackId] = currentBytes;

                                break;
                            default:
                                break;
                            }
                        } else if (options.direction === 'inbound') {
                            currentBytes = new Stats(stats.bytesReceived);

                            switch (stats.mediaType) {
                            case 'video':
                                that._logger.debug('[%s] Inbound [%s] [%s] with current delay [%s] ms and target delay [%s] ms',
                                    name, stats.mediaType, stats.ssrc, stats.googCurrentDelayMs, stats.googTargetDelayMs);
                                hasFrameRate = true;
                                frameRate = stats.googFrameRateReceived || 0;
                                hasVideoBitRate = true;
                                videoBitRate = calculateBitRate(currentBytes, lastVideoBytes[trackId], that._videoBitRateFailureThreshold * 2);
                                lastVideoBytes[trackId] = currentBytes;

                                break;
                            case 'audio':
                                that._logger.debug('[%s] Inbound [%s] [%s] with output level [%s] and jitter [%s] and jitter buffer [%s] ms',
                                    name, stats.mediaType, stats.ssrc, stats.audioOutputLevel, stats.googJitterReceived, stats.googJitterBufferMs);
                                hasAudioBitRate = true;
                                audioBitRate = calculateBitRate(currentBytes, lastAudioBytes[trackId], that._audioBitRateFailureThreshold * 2);
                                lastAudioBytes[trackId] = currentBytes;

                                break;
                            default:
                                break;
                            }
                        }

                        break;
                    }
                }

                if (!report) {
                    throw new Error('Report must be a valid PeerConnection.getStats Report');
                }

                if (report.forEach) {
                    report.forEach(eachStats);
                } else {
                    _.forOwn(report, function(stats, reportId) {
                        eachStats(stats, reportId);
                    });
                }

                var hasActiveAudio = hasActiveAudioInSdp(peerConnection);
                var hasActiveVideo = hasActiveVideoInSdp(peerConnection);

                if (hasVideoBitRate && videoBitRate === 0 || hasAudioBitRate && audioBitRate === 0 || hasFrameRate && frameRate === 0) {
                    hasVideoBitRate = hasVideoBitRate && hasActiveVideo;
                    hasAudioBitRate = hasAudioBitRate && hasActiveAudio;
                    hasFrameRate = hasFrameRate && hasActiveVideo;

                    readable = readable || !(hasActiveVideo || hasActiveAudio);
                    writable = writable || !(hasActiveVideo || hasActiveAudio);
                }

                if (hasAudioBitRate || hasVideoBitRate || hasFrameRate) {
                    that._logger.debug('[%s] Current bit rate is [%s] bps for audio and [%s] bps for video with [%s] FPS',
                        name, Math.ceil(audioBitRate || 0), Math.ceil(videoBitRate || 0), frameRate || '?');
                }

                if (that._monitorState
                    && (peerConnection.connectionState === 'closed'
                    || peerConnection.connectionState === 'failed'
                    || peerConnection.iceConnectionState === 'failed')) {
                    var active = hasActiveAudio && hasActiveVideo;
                    var tracks = getAllTracks.call(that, peerConnection);

                    if (!active && hasMediaSectionsInSdp(peerConnection)) {
                        that._logger.info('[%s] Finished monitoring of peer connection with [%s] inactive tracks', name, tracks.length);

                        return;
                    }

                    conditionCount++;
                } else if (that._monitorFrameRate && hasFrameRate && frameRate <= that._frameRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video')) {
                    conditionCount++;
                } else if (that._monitorBitRate && hasAudioBitRate && audioBitRate <= that._audioBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'audio')) {
                    conditionCount++;
                } else if (that._monitorBitRate && hasVideoBitRate && videoBitRate <= that._videoBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video')) {
                    conditionCount++;
                } else if (!readable || !writable) {
                    conditionCount++;
                } else {
                    conditionCount = 0;
                }

                var isNoData = (videoBitRate === 0 || !hasVideoBitRate) && (audioBitRate === 0 || !hasAudioBitRate) && !areAllTracksPaused.call(that);

                if (isNoData && !checkForNoDataTimeout) {
                    checkForNoDataTimeout = setTimeout(_.bind(nextCheck, this, true), defaultTimeoutForNoData);
                } else if (!isNoData) {
                    clearTimeout(checkForNoDataTimeout);

                    checkForNoDataTimeout = null;
                }

                var isStreamDead = checkForNoData && isNoData && checkForNoDataTimeout;
                var acknowledgeFailure = function acknowledgeFailure() {
                    that._logger.info('[%s] Failure has been acknowledged', name);

                    conditionCount = Number.MIN_VALUE;

                    setTimeout(nextCheck, that._monitoringInterval);
                };

                if (conditionCount >= that._conditionCountForNotificationThreshold || isStreamDead) {
                    var defaultFailureMessage = '[' + name + '] Failure detected with frame rate [' + frameRate + '] FPS, audio bit rate [' + audioBitRate + '] bps, and video bit rate [' + videoBitRate + '] bps';
                    var streamDeadFailureMessage = '[' + name + '] Failure detected with 0 bps audio and video for [' + (defaultTimeoutForNoData / 1000) + '] seconds';
                    var failureMessage = isStreamDead ? streamDeadFailureMessage : defaultFailureMessage;
                    var monitorEvent = {
                        type: 'condition',
                        message: failureMessage,
                        report: report,
                        frameRate: frameRate,
                        videoBitRate: videoBitRate,
                        audioBitRate: audioBitRate,
                        acknowledgeFailure: acknowledgeFailure
                    };

                    if (!monitorCallback(null, monitorEvent)) {
                        that._logger.error(failureMessage + ': [%s]', report);
                    } else {
                        acknowledgeFailure();
                    }
                } else {
                    setTimeout(nextCheck, conditionCount > 0 ? that._conditionMonitoringInterval : that._monitoringInterval);
                }
            }, function errorCallback(error) {
                monitorCallback(error, {
                    type: 'error',
                    message: 'Unable to get Connection statistics. Connection may have failed.'
                });
            });
        }

        setTimeout(nextCheck, that._monitoringInterval);
    }

    function Stats(value) {
        this.time = _.now();
        this.value = value || 0;
    }

    function normalizeStatsReport(response) {
        var normalizedReport = {};

        switch (phenixRTC.browser) {
        case 'Firefox':
            return response;
        case 'IE':
            _.forOwn(response, function(value, key) {
                if (!_.startsWith(key, 'ssrc')) {
                    return;
                }

                normalizedReport[value.id] = value;
            });

            return normalizedReport;
        case 'Safari':
        case 'Edge':
            response.forEach(function(report) {
                normalizedReport[report.id] = report;
            });

            return normalizedReport;
        case 'ReactNative':
            var stats = _.isString(response) ? JSON.parse(response) : response;

            stats.forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.values.forEach(function(value) {
                    _.keys(value).forEach(function(key) {
                        normalizedStatistics[key] = value[key];
                    });
                });

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        case 'Chrome':
        default:
            response.result().forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.names().forEach(function(name) {
                    normalizedStatistics[name] = report.stat(name);
                });

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        }
    }

    function getStats(peerConnection, selector, activeCallback, successCallback, errorCallback) {
        if (!activeCallback()) {
            return this._logger.info('[%s] Finished monitoring of peer connection', this._name);
        }

        phenixRTC.getStats(peerConnection, null, function(response) {
            var report = normalizeStatsReport(response);

            successCallback(report);
        }, function(error) {
            errorCallback(error);
        });
    }

    function getAllTracks(peerConnection) {
        var localStreams = peerConnection.getLocalStreams ? peerConnection.getLocalStreams() : [];
        var remoteStreams = peerConnection.getRemoteStreams ? peerConnection.getRemoteStreams() : [];
        var localTracks = [];
        var remoteTracks = [];

        _.forEach(localStreams, function(stream) {
            localTracks = localTracks.concat(stream.getTracks());
        });

        _.forEach(remoteStreams, function(stream) {
            remoteTracks = remoteTracks.concat(stream.getTracks());
        });

        if (localTracks.length !== 0 && remoteTracks.length !== 0) {
            this._logger.error('Invalid State. PeerConnection contains [%s] local and [%s] remote streams.', localStreams.length, remoteStreams.length);

            throw new Error('Invalid State. PeerConnection contains both local and remote streams.');
        } else if (localTracks.length !== 0) {
            return localTracks;
        } else if (remoteTracks.length !== 0) {
            return remoteTracks;
        }

        return [];
    }

    function hasMediaSectionsInSdp(peerConnection) {
        var indexOfSection = findInSdpSections(peerConnection, function(section) {
            return _.startsWith(section, 'video') || _.startsWith(section, 'audio');
        });

        return _.isNumber(indexOfSection);
    }

    function hasActiveAudioInSdp(peerConnection) {
        var indexOfActiveVideo = findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'audio')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return _.isNumber(indexOfActiveVideo);
    }

    function hasActiveVideoInSdp(peerConnection) {
        var indexOfActiveVideo = findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'video')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return _.isNumber(indexOfActiveVideo);
    }

    function findInSdpSections(peerConnection, callback) {
        var localSections = peerConnection.localDescription.sdp.split('m=');
        var remoteSections = peerConnection.remoteDescription.sdp.split('m=');

        if (localSections.length !== remoteSections.length) {
            return false;
        }

        return _.findIndex(localSections, function(section, index) {
            return callback(section, index, remoteSections);
        });
    }

    function calculateFrameRate(currentFramesEncoded, lastFramesEncoded, defaultFrameRate) {
        if (!lastFramesEncoded) {
            return defaultFrameRate;
        }

        return (currentFramesEncoded.value - lastFramesEncoded.value)
            / ((currentFramesEncoded.time - lastFramesEncoded.time) / 1000.0);
    }

    function calculateBitRate(currentBytes, lastBytes, defaultBitRate) {
        if (!lastBytes) {
            return defaultBitRate;
        }

        return (8 * (currentBytes.value - lastBytes.value))
            / ((currentBytes.time - lastBytes.time) / 1000.0);
    }

    function areAllTracksPaused() {
        var that = this;

        return _.reduce(getAllTracks(this._peerConnection), function(areAllPaused, track) {
            if (!areAllPaused) {
                return areAllPaused;
            }

            var isTrackPaused = !!_.find(that._pausedTracks, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            return !track.enabled || isTrackPaused;
        }, true);
    }

    function areAllTracksOfTypePaused(kind) {
        var peerConnectionTracks = getAllTracks(this._peerConnection);
        var pcTracksOfType = _.filter(peerConnectionTracks, function(track) {
            return track.kind === kind;
        });
        var pausedTracksOfType = _.filter(this._pausedTracks, function(track) {
            return track.kind === kind;
        });

        return _.reduce(pcTracksOfType, function(areAllPaused, track) {
            if (!areAllPaused) {
                return areAllPaused;
            }

            var isTrackPaused = !!_.find(pausedTracksOfType, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            return !track.enabled || isTrackPaused;
        }, true);
    }

    return PeerConnectionMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(18),
    __webpack_require__(6),
    __webpack_require__(16),
    __webpack_require__(32),
    __webpack_require__(75),
    __webpack_require__(15),
    __webpack_require__(70),
    __webpack_require__(69),
    __webpack_require__(42),
    __webpack_require__(12),
    __webpack_require__(68),
    __webpack_require__(66),
    __webpack_require__(65),
    __webpack_require__(31),
    __webpack_require__(63),
    __webpack_require__(62),
    __webpack_require__(59),
    __webpack_require__(7),
    __webpack_require__(2),
    __webpack_require__(57)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, pcastLoggerFactory, http, phenixWebPlayer, AudioContext, PCastProtocol, PCastEndPoint, ScreenShareExtensionManager, UserMediaProvider, PeerConnectionMonitor, DimensionsChangedMonitor, metricsTransmitterFactory, StreamTelemetry, SessionTelemetry, PeerConnection, StreamWrapper, PhenixLiveStream, PhenixRealTimeStream, streamEnums, phenixRTC, sdpUtil) {
    'use strict';

    var sdkVersion = '2018-05-24T22:12:07Z';

    function PCast(options) {
        options = options || {};

        assert.isObject(options, 'options');

        if (options.streamingSourceMapping) {
            assert.isObject(options.streamingSourceMapping, 'options.streamingSourceMapping');
            assert.isStringNotEmpty(options.streamingSourceMapping.replacement, 'options.streamingSourceMapping.replacement');

            if (!(options.streamingSourceMapping.patternToReplace instanceof RegExp)) {
                assert.isStringNotEmpty(options.streamingSourceMapping.patternToReplace, 'options.streamingSourceMapping.patternToReplace');
            }
        }

        if (!_.isNullOrUndefined(options.disableMultiplePCastInstanceWarning)) {
            assert.isBoolean(options.disableMultiplePCastInstanceWarning, 'options.disableMultiplePCastInstanceWarning');
        }

        this._observableStatus = new observable.Observable('offline');
        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._deviceId = options.deviceId || '';
        this._version = sdkVersion;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri, options.disableConsoleLogging);
        this._metricsTransmitter = options.metricsTransmitter || metricsTransmitterFactory.createMetricsTransmitter(this._baseUri);
        this._screenShareExtensionManager = new ScreenShareExtensionManager(options, this._logger);
        this._shaka = options.shaka;
        this._videojs = options.videojs || phenixRTC.global.videojs;
        this._status = 'offline';
        this._streamingSourceMapping = options.streamingSourceMapping;
        this._disposables = new disposable.DisposableList();
        this._disableMultiplePCastInstanceWarning = options.disableMultiplePCastInstanceWarning;
        this._canPlaybackAudio = true;

        var that = this;

        _.addEventListener(phenixRTC.global, 'unload', function() {
            that._logger.info('Window Unload Event Triggered');

            return that.stop();
        });

        if (!options.disableBeforeUnload) {
            _.addEventListener(phenixRTC.global, 'beforeunload', function() {
                that._logger.info('Window Before Unload Event Triggered');

                return that.stop();
            });
        }

        if (!phenixRTC.webrtcSupported && phenixRTC.browser === 'ReactNative') {
            phenixRTC.shim();
        }

        if (phenixRTC.webrtcSupported) {
            setEnvironmentCodecDefaults.call(this);
            setAudioState.call(this);
        }
    }

    PCast.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCast.prototype.getStatus = function() {
        return this._observableStatus.getValue();
    };

    PCast.prototype.getObservableStatus = function() {
        return this._observableStatus;
    };

    PCast.prototype.isStarted = function() {
        return this._started;
    };

    PCast.prototype.reAuthenticate = function(authToken) {
        assert.isStringNotEmpty(authToken, 'authToken');

        if (this._observableStatus.getValue() === 'online') {
            return this._logger.warn('Already authenticated. Denying request to re-authenticate');
        }

        this._logger.info('Attempting to re-authenticate with new auth token [%s]', authToken);

        this._authToken = authToken;

        reconnected.call(this);
    };

    PCast.prototype.start = function(authToken, authenticationCallback, onlineCallback, offlineCallback) {
        if (typeof authToken !== 'string') {
            throw new Error('"authToken" must be a string');
        }

        if (typeof authenticationCallback !== 'function') {
            throw new Error('"authenticationCallback" must be a function');
        }

        if (typeof onlineCallback !== 'function') {
            throw new Error('"onlineCallback" must be a function');
        }

        if (typeof offlineCallback !== 'function') {
            throw new Error('"offlineCallback" must be a function');
        }

        if (this._started) {
            throw new Error('"Already started"');
        }

        if (!_.isNumber(phenixRTC.global.__phenixInstantiatedPCastCount)) {
            phenixRTC.global.__phenixInstantiatedPCastCount = 1;
        } else {
            phenixRTC.global.__phenixInstantiatedPCastCount++;
        }

        if (phenixRTC.global.__phenixInstantiatedPCastCount > 1 && !this._disableMultiplePCastInstanceWarning) {
            this._logger.warn('Avoid using multiple instances of PCast as this uses unnecessary resources and will reduce performance. This is your [%s] simultaneous instance. Remember to dispose all resources when done with them by calling .stop() or .dispose()',
                phenixRTC.global.__phenixInstantiatedPCastCount);
        }

        this._stopped = false;
        this._started = true;
        this._authToken = authToken;
        this._authenticationCallback = authenticationCallback;
        this._onlineCallback = onlineCallback;
        this._offlineCallback = offlineCallback;
        this._sessionTelemetry = new SessionTelemetry(this._logger, this._metricsTransmitter);
        this._endPoint = new PCastEndPoint(this._version, this._baseUri, this._logger, this._sessionTelemetry);

        transitionToStatus.call(this, 'connecting');

        this._peerConnections = {};
        this._mediaStreams = {};
        this._publishers = {};
        this._gumStreams = [];

        this._disposables.add(this._endPoint);
        this._disposables.add(this._sessionTelemetry);

        var that = this;

        that._endPoint.resolveUri(function(err, endPoint) {
            if (err) {
                that._logger.error('Failed to connect to [%s]', that._baseUri, err);

                transitionToStatus.call(that, 'offline');

                switch (err.code) {
                case 0:
                    that._authenticationCallback.call(that, that, 'network-unavailable', '');

                    break;
                case 503:
                    that._authenticationCallback.call(that, that, 'capacity', '');

                    break;
                default:
                    that._authenticationCallback.call(that, that, 'failed', '');

                    break;
                }

                that._stopped = true;
                that._started = false;

                return;
            }

            that._logger.info('Discovered end point [%s] with RTT [%s]', endPoint.uri, endPoint.roundTripTime);

            that._networkOneWayLatency = endPoint.roundTripTime / 2;
            that._resolvedEndPoint = endPoint.uri;

            instantiateProtocol.call(that, endPoint.uri);
        });
    };

    PCast.prototype.stop = function() {
        if (!this._started) {
            return;
        }

        this._stopped = true;
        this._started = false;

        delete this._authenticationCallback;

        try {
            var reason = '';
            var that = this;

            _.forOwn(this._mediaStreams, function(mediaStream, streamId) {
                endStream.call(that, streamId, reason);
            });
            _.forOwn(this._publishers, function(publisher, publisherStreamId) {
                endStream.call(that, publisherStreamId, reason);

                if (!_.includes(publisher.getOptions(), 'detached')) {
                    publisher.stop(reason, true);
                }
            });
            _.forOwn(this._peerConnections, function(mediaStream, peerConnectionStreamId) {
                endStream.call(that, peerConnectionStreamId, reason);
            });
            _.forEach(this._gumStreams, function(gumStream) {
                var tracks = gumStream.getTracks();

                _.forEach(tracks, function(track) {
                    track.stop();
                });
            });
        } finally {
            if (this._protocol) {
                this._protocol.disconnect();

                this._protocol = null;
            }

            if (this._logger.setObservableSessionId) {
                this._logger.setObservableSessionId(null);
            }

            if (this._sessionTelemetrySubscription) {
                this._sessionTelemetrySubscription.dispose();
                this._sessionTelemetry.setSessionId(null);
            }

            phenixRTC.global.__phenixInstantiatedPCastCount--;

            this._disposables.dispose();
        }
    };

    PCast.prototype.getUserMedia = function(options, callback, onScreenShare) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        var userMediaProvider = new UserMediaProvider(this._logger, this._screenShareExtensionManager, onScreenShare);

        return userMediaProvider.getUserMedia(options, callback);
    };

    PCast.prototype.publish = function(streamToken, streamToPublish, callback, tags, options) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        if (!this._started) {
            throw new Error('PCast not started. Unable to publish. Please start pcast first.');
        }

        if (typeof streamToken !== 'string') {
            throw new Error('"streamToken" must be a string');
        }

        if (typeof streamToPublish !== 'object' && typeof streamToPublish !== 'string') {
            throw new Error('"streamToPublish" must be an object or URI');
        }

        if (typeof callback !== 'function') {
            throw new Error('"callback" must be a function');
        }

        tags = tags || [];

        if (!Array.isArray(tags)) {
            throw new Error('"tags" must be an array');
        }

        options = options || {};

        if (typeof options !== 'object') {
            throw new Error('"options" must be an object');
        }

        var that = this;
        var streamType = 'upload';
        var setupStreamOptions = _.assign({}, options, {negotiate: true});

        if (typeof streamToPublish === 'string') {
            setupStreamOptions.negotiate = false;
            setupStreamOptions.connectUri = streamToPublish;
        } else {
            setupStreamOptions.connectUri = options.connectUri;
        }

        if (tags.length > 0) {
            setupStreamOptions.tags = tags;
        }

        var streamTelemetry = new StreamTelemetry(this.getProtocol().getSessionId(), this._logger, this._metricsTransmitter);

        streamTelemetry.setProperty('resource', streamType);

        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
            if (error) {
                that._logger.error('Failed to create uploader [%s]', error);

                return callback.call(that, that, 'failed');
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to create uploader, status [%s]', response.status);

                switch (response.status) {
                case 'timeout':
                case 'capacity':
                case 'unauthorized':
                    return callback.call(that, that, response.status);
                default:
                    return callback.call(that, that, 'failed');
                }
            } else {
                var streamId = response.createStreamResponse.streamId;

                streamTelemetry.setStreamId(streamId);
                streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                streamTelemetry.recordMetric('Provisioned');
                streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                    resource: that._resolvedEndPoint,
                    kind: 'https'
                });

                if (setupStreamOptions.negotiate === true) {
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));

                    if (phenixRTC.browser === 'Opera' && that._h264ProfileIds.length > 0) {
                        // For publishing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new publisher h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing publisher h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return createPublisherPeerConnection.call(that, peerConnectionConfig, streamToPublish, streamId, offerSdp, streamTelemetry, function(phenixPublisher, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixPublisher);
                        }
                    }, options, response.createStreamResponse.options);
                }

                return createPublisher.call(that, streamId, function(phenixPublisher, error) {
                    streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                    if (error) {
                        callback.call(that, that, 'failed', null);
                    } else {
                        callback.call(that, that, 'ok', phenixPublisher);
                    }
                }, response.createStreamResponse.options);
            }
        });
    };

    PCast.prototype.subscribe = function(streamToken, callback, options) {
        if (!this._started) {
            throw new Error('PCast not started. Unable to subscribe. Please start pcast first.');
        }

        if (typeof streamToken !== 'string') {
            throw new Error('"streamToken" must be a string');
        }

        if (typeof callback !== 'function') {
            throw new Error('"callback" must be a function');
        }

        options = options || {};

        if (typeof options !== 'object') {
            throw new Error('"options" must be an object');
        }

        var that = this;

        setAudioState.call(that, function() {
            var streamType = 'download';
            var setupStreamOptions = _.assign({}, options, {negotiate: options.negotiate !== false});
            var streamTelemetry = new StreamTelemetry(that.getProtocol().getSessionId(), that._logger, that._metricsTransmitter);
            var createStreamOptions = _.assign({}, options);

            createStreamOptions.canPlaybackAudio = that._canPlaybackAudio;

            if (!that._canPlaybackAudio && options.disableAudioIfNoOutputFound && options.receiveAudio !== false) {
                setupStreamOptions.receiveAudio = false;
                createStreamOptions.receiveAudio = false;
                createStreamOptions.forcedAudioDisabled = true;
            }

            streamTelemetry.setProperty('resource', streamType);

            that._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
                if (error) {
                    that._logger.error('Failed to create downloader [%s]', error);

                    return callback.call(that, that, 'failed');
                } else if (response.status !== 'ok') {
                    that._logger.warn('Failed to create downloader, status [%s]', response.status);

                    switch (response.status) {
                    case 'capacity':
                    case 'stream-ended':
                    case 'origin-stream-ended':
                    case 'streaming-not-available':
                    case 'unauthorized':
                    case 'timeout':
                        return callback.call(that, that, response.status);
                    default:
                        return callback.call(that, that, 'failed');
                    }
                } else {
                    var streamId = response.createStreamResponse.streamId;
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));
                    var create = _.bind(createViewerPeerConnection, that, peerConnectionConfig);
                    var isLive = offerSdp.match(/a=x-playlist:/);

                    if (isLive) {
                        create = createLiveViewer;
                    }

                    streamTelemetry.setStreamId(streamId);
                    streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                    streamTelemetry.recordMetric('Provisioned');
                    streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                        resource: that.getBaseUri(),
                        kind: 'https'
                    });

                    createStreamOptions.originStartTime = _.now() - response.createStreamResponse.offset + that._networkOneWayLatency;

                    if (!isLive && ((phenixRTC.browser === 'Chrome' && phenixRTC.browserVersion >= 62 && isMobile()) || phenixRTC.browser === 'Opera') && that._h264ProfileIds.length > 0) {
                        // For subscribing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new subscriber h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing subscriber h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return create.call(that, streamId, offerSdp, streamTelemetry, function(phenixMediaStream, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixMediaStream);
                        }
                    }, createStreamOptions);
                }
            });
        });
    };

    PCast.prototype.getProtocol = function() {
        return this._protocol;
    };

    PCast.prototype.getLogger = function() {
        return this._logger;
    };

    PCast.prototype.toString = function() {
        var protocol = this.getProtocol();
        var sessionId = protocol ? protocol.getSessionId() : '';

        return 'PCast[' + sessionId || 'unauthenticated' + ',' + (protocol ? protocol.toString() : 'uninitialized') + ']';
    };

    function instantiateProtocol(uri) {
        this._protocol = new PCastProtocol(uri, this._deviceId, this._version, this._logger);

        this._protocol.onEvent('connected', _.bind(connected, this));
        this._protocol.onEvent('reconnecting', _.bind(reconnecting, this));
        this._protocol.onEvent('reconnected', _.bind(reconnected, this));
        this._protocol.onEvent('disconnected', _.bind(disconnected, this));
        this._protocol.onEvent('pcast.StreamEnded', _.bind(streamEnded, this));
        this._protocol.onEvent('pcast.StreamDataQuality', _.bind(dataQuality, this));

        if (this._logger.setObservableSessionId) {
            this._logger.setObservableSessionId(this._protocol.getObservableSessionId());
        }

        if (this._sessionTelemetrySubscription) {
            this._sessionTelemetrySubscription.dispose();
            this._sessionTelemetry.setSessionId(null);
        }

        this._sessionTelemetrySubscription = this._protocol.getObservableSessionId().subscribe(_.bind(this._sessionTelemetry.setSessionId, this._sessionTelemetry));
    }

    function connected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'offline') {
            this._logger.warn('[PCast] connected after being offline. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop();
        }

        var that = this;

        this._connected = true;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                if (that._authenticationCallback) {
                    if (error) {
                        that._logger.error('Failed to authenticate [%s]', error);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to authenticate, status [%s]', response.status);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else {
                        transitionToStatus.call(that, 'online');

                        that._authenticationCallback.call(that, that, response.status, response.sessionId);
                    }
                }
            });
        }
    }

    function reconnecting() {
        transitionToStatus.call(this, 'reconnecting');
    }

    function reconnected() {
        transitionToStatus.call(this, 'reconnected');

        this._logger.info('Attempting to re-authenticate after reconnect event');

        reAuthenticate.call(this);
    }

    function reAuthenticate() {
        var that = this;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                var suppressCallbackIfNeverDisconnected = that._connected === true;

                if (error) {
                    that._logger.error('Unable to authenticate after reconnect to WebSocket [%s]', error);

                    return transitionToStatus.call(that, 'reconnect-failed');
                }

                if (response.status !== 'ok') {
                    that._logger.warn('Unable to authenticate after reconnect to WebSocket, status [%s]', response.status);

                    var reason = response.status === 'capacity' ? response.status : 'reconnect-failed';

                    return transitionToStatus.call(that, reason);
                }

                that._connected = true;

                that._logger.info('Successfully authenticated after reconnect to WebSocket');

                return transitionToStatus.call(that, 'online', null, suppressCallbackIfNeverDisconnected);
            });
        }
    }

    function disconnected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'reconnecting') {
            this._logger.warn('[PCast] disconnected after attempting to reconnect. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop();
        }

        this._connected = false;
        transitionToStatus.call(this, 'offline');
    }

    function areAllPeerConnectionsOffline() {
        return _.reduce(this._peerConnections, function(isOffline, peerConnection) {
            if (!isOffline) {
                return isOffline;
            }

            return peerConnection.iceConnectionState === 'closed';
        }, true);
    }

    function getStreamEndedReason(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        default:
            return 'custom';
        }
    }

    function streamEnded(event) {
        var streamId = event.streamId;
        var reason = event.reason;

        return endStream.call(this, streamId, reason);
    }

    function dataQuality(event) {
        var streamId = event.streamId;
        var status = event.status;
        var reason = event.reason;

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.dataQualityChangedCallback(status, reason);
        }

        var publisher = this._publishers[streamId];

        if (publisher && typeof publisher.dataQualityChangedCallback === 'function') {
            publisher.dataQualityChangedCallback(publisher, status, reason);
        }
    }

    function endStream(streamId, reason) {
        this._logger.info('[%s] Stream ended with reason [%s]', streamId, reason);

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason, true);
        }

        delete this._mediaStreams[streamId];

        var publisher = this._publishers[streamId];

        if (publisher && typeof publisher.publisherEndedCallback === 'function') {
            publisher.publisherEndedCallback(publisher, getStreamEndedReason(reason), reason);
        }

        delete this._publishers[streamId];

        var peerConnection = this._peerConnections[streamId];

        if (peerConnection) {
            closePeerConnection.call(this, streamId, peerConnection, 'ended');
        }

        delete this._peerConnections[streamId];
    }

    function setupStreamAddedListener(streamId, state, peerConnection, streamTelemetry, callback, options) {
        var that = this;
        var onAddStream = function onAddStream(event) {
            if (state.failed) {
                return;
            }

            var masterStream = event.stream;
            var kind = 'real-time';

            if (!masterStream) {
                state.failed = true;
                that._logger.warn('[%s] No remote stream', streamId);

                return callback.call(that, undefined, 'failed');
            }

            that._logger.info('[%s] Got remote stream', streamId);

            streamTelemetry.setProperty('kind', kind);

            var streamOptions = _.assign({networkLag: that._networkOneWayLatency}, options);
            var realTimeStream = new PhenixRealTimeStream(streamId, masterStream, peerConnection, streamTelemetry, streamOptions, that._logger);
            var realTimeStreamDecorator = new StreamWrapper(kind, realTimeStream, that._logger);

            var onError = function onError(source, event) {
                that._logger.warn('Phenix Real-Time Stream Error [%s] [%s]', source, event);

                realTimeStreamDecorator.streamErrorCallback(kind, event);
            };

            var onStop = function destroyMasterMediaStream(reason) {
                if (state.stopped) {
                    return;
                }

                that._logger.info('[%s] stop media stream', streamId);

                closePeerConnection.call(that, streamId, peerConnection, 'stop');

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            };

            realTimeStreamDecorator.on(streamEnums.streamEvents.playerError.name, onError);
            realTimeStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

            that._mediaStreams[streamId] = realTimeStreamDecorator;

            callback.call(that, realTimeStream);
        };

        _.addEventListener(peerConnection, 'addstream', onAddStream);
    }

    function setupIceCandidateListener(streamId, peerConnection, callback) {
        var that = this;
        var onIceCandidate = function onIceCandidate(event) {
            var candidate = event.candidate;

            if (candidate) {
                that._logger.debug('[%s] ICE candidate: [%s] [%s] [%s]', streamId, candidate.sdpMid, candidate.sdpMLineIndex, candidate.candidate);
            } else {
                that._logger.info('[%s] ICE candidate discovery complete', streamId);
            }

            if (callback) {
                callback(candidate);
            }
        };

        _.addEventListener(peerConnection, 'icecandidate', onIceCandidate);
    }

    function setupStateListener(streamId, peerConnection) {
        var that = this;
        var onNegotiationNeeded = function onNegotiationNeeded(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Negotiation needed');
        };

        var onIceConnectionStateChanged = function onIceConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE connection state changed [%s]', streamId, peerConnection.iceConnectionState);
        };

        var onIceGatheringStateChanged = function onIceGatheringStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE gathering state changed [%s]', streamId, peerConnection.iceGatheringState);
        };

        var onSignalingStateChanged = function onSignalingStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Signaling state changed [%s]', streamId, peerConnection.signalingState);
        };

        var onConnectionStateChanged = function onConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Connection state changed [%s]', streamId, peerConnection.connectionState);
        };

        _.addEventListener(peerConnection, 'negotiationneeded', onNegotiationNeeded);
        _.addEventListener(peerConnection, 'iceconnectionstatechange', onIceConnectionStateChanged);
        _.addEventListener(peerConnection, 'icegatheringstatechange ', onIceGatheringStateChanged);
        _.addEventListener(peerConnection, 'signalingstatechange', onSignalingStateChanged);
        _.addEventListener(peerConnection, 'connectionstatechange', onConnectionStateChanged);
    }

    function createPublisher(streamId, callback, streamOptions) {
        var that = this;
        var state = {stopped: false};

        var publisher = {
            getStreamId: function getStreamId() {
                return streamId;
            },

            getStream: function getStream() {
                that._logger.debug('[%s] Unable to get stream on publisher of remote origin.', streamId);

                return null;
            },

            getStats: function getStats() {
                that._logger.debug('[%s] Unable to get stream stats on publisher of remote origin.', streamId);

                return null;
            },

            isActive: function isActive() {
                return !state.stopped;
            },

            hasEnded: function hasEnded() {
                return state.stopped;
            },

            stop: function stop(reason) {
                if (state.stopped) {
                    return;
                }

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            },

            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }

                this.publisherEndedCallback = callback;
            },

            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }

                this.dataQualityChangedCallback = callback;
            },

            getOptions: function getOptions() {
                return streamOptions;
            },

            monitor: function monitor(options, callback) {
                if (typeof options !== 'object') {
                    throw new Error('"options" must be an object');
                }

                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }
            },

            getMonitor: function getMonitor() {
                return null;
            }
        };

        that._publishers[streamId] = publisher;

        callback(publisher);
    }

    function setEnvironmentCodecDefaults() {
        var that = this;
        var peerConnection = new phenixRTC.RTCPeerConnection();

        // TODO(DY) remove when updating to webrtc-adapter version 5.0.5 or greater
        if (phenixRTC.browser === 'Safari' && phenixRTC.browserVersion > 10) {
            peerConnection.addTransceiver('audio');
            peerConnection.addTransceiver('video');
        }

        peerConnection.createOffer(function(offer) {
            var h264ProfileIds = sdpUtil.getH264ProfileIds(offer.sdp);

            if (h264ProfileIds.length === 0) {
                return that._logger.info('Unable to find local h264 profile level id');
            }

            that._logger.info('Found local h264 profile level ids [%s]', h264ProfileIds, offer.sdp);

            that._h264ProfileIds = h264ProfileIds;
        }, function(e) {
            that._logger.error('Unable to create offer to get local h264 profile level id', e);
        }, {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
        });
    }

    function setAudioState(done) {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Edge':
            return phenixRTC.getDestinations(function(destinations) {
                var audioDestinations = _.filter(destinations, function(destination) {
                    return destination.kind === 'audio';
                });

                if (audioDestinations.length === 0) {
                    if (that._canPlaybackAudio) {
                        that._logger.info('Detected no audio devices attached to machine');
                    }

                    that._canPlaybackAudio = false;
                } else {
                    that._canPlaybackAudio = true;
                }

                if (done) {
                    done();
                }
            });
        default:
            if (done) {
                done();
            }

            break;
        }
    }

    function createPublisherPeerConnection(peerConnectionConfig, mediaStream, streamId, offerSdp, streamTelemetry, callback, createOptions, streamOptions) {
        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var remoteMediaStream = null;
        var onIceCandidateCallback = null;
        var publisherMonitor = null;

        that._peerConnections[streamId] = peerConnection;

        peerConnection.addStream(mediaStream);

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        function onSetRemoteDescriptionSuccess() {
            that._logger.info('Set remote description (offer)');

            function onCreateAnswerSuccess(answerSdp) {
                that._logger.info('Created answer [%s]', answerSdp.sdp);

                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
                    if (error) {
                        that._logger.error('Failed to set answer description [%s]', error);

                        return onFailure();
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to set answer description, status [%s]', response.status);

                        return onFailure(response.status);
                    }

                    function onSetLocalDescriptionSuccess() {
                        var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
                        var video = /(mid:video)([\n\r]*)/gi;

                        that._logger.info('Set local description (answer)');

                        var limit = 0;
                        var bandwithAttribute = bandwidthAttribute.exec(offerSdp);

                        if (bandwithAttribute && bandwithAttribute.length >= 3) {
                            limit = bandwithAttribute[2] * 1000;
                        }

                        var publisher = {
                            getStreamId: function getStreamId() {
                                return streamId;
                            },

                            getStream: function getStream() {
                                return mediaStream;
                            },

                            isActive: function isActive() {
                                return !state.stopped;
                            },

                            hasEnded: function hasEnded() {
                                switch (peerConnection.iceConnectionState) {
                                case 'new':
                                case 'checking':
                                case 'connected':
                                case 'completed':
                                    return false;
                                case 'disconnected':
                                case 'failed':
                                case 'closed':
                                    return true;
                                default:
                                    return true;
                                }
                            },

                            stop: function stop(reason) {
                                if (state.stopped) {
                                    return;
                                }

                                closePeerConnection.call(that, streamId, peerConnection, 'closed');

                                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                                    if (error) {
                                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                                        return;
                                    } else if (response.status !== 'ok') {
                                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                                        return;
                                    }

                                    that._logger.info('[%s] destroyed stream', streamId);
                                });

                                state.stopped = true;
                            },

                            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.publisherEndedCallback = callback;
                            },

                            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.dataQualityChangedCallback = callback;
                            },

                            limitBandwidth: function limitBandwidth(bandwidthLimit) {
                                if (phenixRTC.browser === 'Edge') {
                                    return that._logger.warn('Limit bandwidth not support on [%s]', phenixRTC.browser);
                                }

                                if (typeof bandwidthLimit !== 'number') {
                                    throw new Error('"bandwidthLimit" must be a number');
                                }

                                var newLimit = limit ? Math.min(bandwidthLimit, limit) : bandwidthLimit;
                                var remoteDescription = peerConnection.remoteDescription;

                                that._logger.info('Changing bandwidth limit to [%s]', newLimit);

                                var updatedSdp = remoteDescription.sdp.replace(bandwidthAttribute, '');

                                // Add new limit in kbps
                                updatedSdp = updatedSdp.replace(video, function(match, videoLine, lineEnding, offset, sdp) { // eslint-disable-line no-unused-vars
                                    return [videoLine, lineEnding, 'b=AS:', Math.ceil(newLimit / 1000), lineEnding].join('');
                                });

                                var updatedRemoteDescription = new phenixRTC.RTCSessionDescription({
                                    type: remoteDescription.type,
                                    sdp: updatedSdp
                                });

                                peerConnection.setRemoteDescription(updatedRemoteDescription);

                                return {
                                    dispose: function() {
                                        peerConnection.setRemoteDescription(remoteDescription);
                                    }
                                };
                            },

                            getMonitor: function getMonitor() {
                                return publisherMonitor;
                            },

                            monitor: function monitor(options, callback) {
                                if (typeof options !== 'object') {
                                    throw new Error('"options" must be an object');
                                }

                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

                                options.direction = 'outbound';

                                monitor.start(options, function activeCallback() {
                                    return that._publishers[streamId] === publisher && !state.stopped;
                                }, function monitorCallback(error, monitorEvent) {
                                    if (error) {
                                        that._logger.warn('[%s] Publisher monitor triggered unrecoverable error [%s]', error);
                                    }

                                    that._logger.warn('[%s] Publisher triggered monitor condition for [%s]', streamId, monitorEvent.type);

                                    return callback(publisher, 'client-side-failure', monitorEvent);
                                });

                                _.forEach(mediaStream.getTracks(), function(track) {
                                    _.addEventListener(track, 'readystatechange', function() {
                                        if (track.readyState === 'ended') {
                                            that._logger.warn('[%s] Publisher track has failed [%s]', streamId, track);

                                            return callback(publisher, 'camera-track-failure', {
                                                type: track.kind + '-track-ended',
                                                message: 'Publisher ' + track.kind + ' track has ended in an unrecoverable way. This may require reconfiguring your camera or microphone.'
                                            });
                                        }
                                    });
                                });

                                publisherMonitor = monitor;

                                return monitor;
                            },

                            setRemoteMediaStreamCallback: function setRemoteMediaStreamCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.remoteMediaStreamCallback = callback;

                                if (remoteMediaStream) {
                                    callback(publisher, remoteMediaStream);
                                }
                            },

                            getOptions: function getOptions() {
                                return streamOptions;
                            },

                            getStats: function getStats(callback) {
                                assert.isFunction(callback, 'callback');

                                if (!this._lastStats) {
                                    this._lastStats = {};
                                }

                                var that = this;

                                return phenixRTC.getStats(peerConnection, null, function(stats) {
                                    callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
                                });
                            }
                        };

                        that._publishers[streamId] = publisher;

                        callback.call(that, publisher);
                    }

                    if (_.includes(response.options, 'ice-candidates')) {
                        onIceCandidateCallback = function(candidate) {
                            var candidates = [];
                            var options = [];

                            if (candidate) {
                                candidates.push(candidate);
                            } else {
                                options.push('completed');
                            }

                            that._protocol.addIceCandidates(streamId, candidates, options, function(error, response) {
                                if (error) {
                                    that._logger.error('Failed to add ICE candidate [%s]', error);

                                    return;
                                } else if (response.status !== 'ok') {
                                    that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);

                                    return;
                                }

                                if (_.includes(response.options, 'cancel')) {
                                    onIceCandidateCallback = null;
                                }
                            });
                        };
                    }

                    var sessionDescription = new phenixRTC.RTCSessionDescription({
                        type: 'answer',
                        sdp: response.sessionDescription.sdp
                    });

                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
                });
            }

            var mediaConstraints = {mandatory: {}};

            if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
                mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo === true;
                mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio === true;
            } else {
                mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo === true;
                mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio === true;
            }

            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
        }

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, function(mediaStream) {
            var publisher = that._publishers[streamId];

            remoteMediaStream = mediaStream;

            if (publisher && publisher.remoteMediaStreamCallback) {
                publisher.remoteMediaStreamCallback(publisher, mediaStream);
            }
        }, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (onIceCandidateCallback) {
                onIceCandidateCallback(candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });

        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
    }

    function createViewerPeerConnection(peerConnectionConfig, streamId, offerSdp, streamTelemetry, callback, createOptions) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Subscribing in real-time not supported on IE without the PhenixP2P Plugin');
        }

        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var onIceCandidateCallback = null;

        that._peerConnections[streamId] = peerConnection;

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        if (phenixRTC.browser === 'ReactNative') {
            offerSdp = setGroupLineOrderToMatchMediaSectionOrder(offerSdp);
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        function onSetRemoteDescriptionSuccess() {
            that._logger.debug('Set remote description (offer)');

            function onCreateAnswerSuccess(answerSdp) {
                that._logger.info('Created answer [%s]', answerSdp.sdp);

                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
                    if (error) {
                        that._logger.error('Failed to set answer description [%s]', error);

                        return onFailure();
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to set answer description, status [%s]', response.status);

                        return onFailure(response.status);
                    }

                    function onSetLocalDescriptionSuccess() {
                        that._logger.debug('Set local description (answer)');
                    }

                    if (_.includes(response.options, 'ice-candidates')) {
                        onIceCandidateCallback = function(candidate) {
                            var candidates = [];
                            var iceCandidatesOptions = [];

                            if (candidate) {
                                candidates.push(candidate);
                            } else {
                                iceCandidatesOptions.push('completed');
                            }

                            that._protocol.addIceCandidates(streamId, candidate, iceCandidatesOptions, function(error, response) {
                                if (error) {
                                    that._logger.error('Failed to add ICE candidate [%s]', error);

                                    return;
                                } else if (response.status !== 'ok') {
                                    that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);

                                    return;
                                }

                                if (_.includes(response.options, 'cancel')) {
                                    onIceCandidateCallback = null;
                                }
                            });
                        };
                    }

                    var localSdp = response.sessionDescription.sdp;

                    if (isIOS()) {
                        var version = _.get(getIOSVersion(), ['major']);

                        that._logger.info('iOS Version is [%s]', version);

                        if (version < 11) {
                            localSdp = localSdp.replace('BUNDLE audio video', 'BUNDLE video audio'); // Without this only video-only streams work on iOS 10
                        }
                    }

                    var sessionDescription = new phenixRTC.RTCSessionDescription({
                        type: 'answer',
                        sdp: localSdp
                    });

                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
                });
            }

            var mediaConstraints = {mandatory: {}};

            if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
                mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo !== false;
                mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio !== false;
            } else {
                mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo !== false;
                mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio !== false;
            }

            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
        }

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, callback, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (onIceCandidateCallback) {
                onIceCandidateCallback(candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });

        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
    }

    function createLiveViewer(streamId, offerSdp, streamTelemetry, callback, options) {
        var that = this;

        var dashMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]mpd\??[^\s]*)/m);
        var hlsMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]m3u8\??[^\s]*)/m);
        var manifestUrl = _.get(dashMatch, [1], '');
        var playlistUrl = _.get(hlsMatch, [1], '');
        var dashManifestOffered = dashMatch && dashMatch.length === 2;
        var hlsPlaylistOffered = hlsMatch && hlsMatch.length === 2;
        var preferHls = isIOS() || phenixRTC.browser === 'Safari';

        if (this._streamingSourceMapping) {
            manifestUrl = manifestUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
            playlistUrl = playlistUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
        }

        if (dashManifestOffered && phenixWebPlayer.WebPlayer.deviceSupportsDashPlayback && !preferHls) {
            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(manifestUrl) || /x-widevine-service-certificate/.test(offerSdp);

            if (options.isDrmProtectedContent) {
                options.widevineServiceCertificateUrl = offerSdp.match(/a=x-widevine-service-certificate:([^\n][^\s]*)/m)[1];
                options.playreadyLicenseUrl = offerSdp.match(/a=x-playready-license-url:([^\n][^\s]*)/m)[1];
            }

            if (this._shaka && !this._shaka.Player.isBrowserSupported()) {
                this._logger.warn('[%s] Shaka does not support this browser', streamId);

                return callback.call(this, undefined, 'browser-unsupported');
            }

            return createLiveViewerOfKind.call(that, streamId, manifestUrl, streamEnums.types.dash.name, streamTelemetry, callback, options);
        } else if (hlsPlaylistOffered && phenixWebPlayer.WebPlayer.deviceSupportsHlsPlayback) {
            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(playlistUrl);

            if (options.hlsTargetDuration) {
                assert.isNumber(options.hlsTargetDuration, 'options.hlsTargetDuration');

                playlistUrl = playlistUrl + (playlistUrl.indexOf('?') > -1 ? '&' : '?') + 'targetDuration=' + options.hlsTargetDuration;
            }

            return createLiveViewerOfKind.call(that, streamId, playlistUrl, streamEnums.types.hls.name, streamTelemetry, callback, _.assign({preferNative: preferHls}, options));
        }

        if (!dashManifestOffered && !hlsPlaylistOffered) {
            that._logger.warn('[%s] Offer does not contain a supported manifest [%s]. Creating live viewer stream failed.', streamId, offerSdp);
        } else if (!phenixWebPlayer.WebPlayer.deviceSupportsDashPlayback && !phenixWebPlayer.WebPlayer.deviceSupportsHlsPlayback) {
            that._logger.warn('[%s] Device does not support either Dash or Hls playback. Creating live viewer stream failed.', streamId);
        } else if (!phenixWebPlayer.WebPlayer.deviceSupportsDashPlayback) {
            that._logger.warn('[%s] Device does not support Dash playback. Creating live viewer stream failed.', streamId);
        } else if (!phenixWebPlayer.WebPlayer.deviceSupportsHlsPlayback) {
            that._logger.warn('[%s] Device does not support Hls playback. Creating live viewer stream failed.', streamId);
        }

        return callback.call(that, undefined, 'failed');
    }

    function createLiveViewerOfKind(streamId, uri, kind, streamTelemetry, callback, options) {
        var that = this;
        var liveStream = new PhenixLiveStream(kind, streamId, uri, streamTelemetry, options, this._shaka, this._logger);
        var liveStreamDecorator = new StreamWrapper(kind, liveStream, this._logger);

        var onPlayerError = function onPlayerError(source, event) {
            that._logger.warn('Phenix Live Stream Player Error [%s] [%s]', source, event);

            liveStreamDecorator.streamErrorCallback(source, event);
        };

        var onStop = function onStop(reason) {
            that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                if (error) {
                    that._logger.error('[%s] failed to destroy stream, [%s]', streamId, error);

                    return;
                } else if (response.status !== 'ok') {
                    that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                    return;
                }
            });
        };

        streamTelemetry.setProperty('kind', kind);

        liveStreamDecorator.on(streamEnums.streamEvents.playerError.name, onPlayerError);
        liveStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

        this._mediaStreams[streamId] = liveStreamDecorator;

        callback.call(this, liveStreamDecorator.getPhenixMediaStream());
    }

    function transitionToStatus(newStatus, reason, suppressCallback) {
        var oldStatus = this.getStatus();

        if (oldStatus !== newStatus && !(isOfflineStatus(oldStatus) && newStatus === 'offline')) {
            this._observableStatus.setValue(newStatus);

            if (suppressCallback) {
                return;
            }

            switch (newStatus) {
            case 'connecting':
            case 'reconnecting':
            case 'reconnected':
                break;
            case 'critical-network-issue':
            case 'unauthorized':
            case 'reconnect-failed':
            case 'offline':
                return this._offlineCallback.call(this);
            case 'online':
                return this._onlineCallback.call(this);
            default:
                break;
            }
        }
    }

    function isOfflineStatus(status) {
        return status === 'critical-network-issue' || status === 'offline';
    }

    function closePeerConnection(streamId, peerConnection, reason) {
        if (peerConnection.signalingState !== 'closed' && !peerConnection.__closing) {
            this._logger.debug('[%s] close peer connection [%s]', streamId, reason);
            peerConnection.close();
            peerConnection.__closing = true;
        }
    }

    function parseProtobufMessage(message) {
        if (!message) {
            return message;
        }

        var parsedMessage = _.isArray(message) ? [] : {};
        var processIndexOrKey = _.bind(removeNullValuesAndParseEnums, null, parsedMessage);

        if (_.isArray(message)) {
            _.forEach(message, processIndexOrKey);
        } else {
            _.forOwn(message, processIndexOrKey);
        }

        return parsedMessage;
    }

    function removeNullValuesAndParseEnums(parsedMessage, value, key) {
        if (value === null) {
            return;
        }

        if (_.isObject(value) || _.isArray(value)) {
            return parsedMessage[key] = parseProtobufMessage(value);
        }

        if (!_.isString(value) || !_.isString(key)) {
            return parsedMessage[key] = value;
        }

        var prefixedByKey = _.startsWith(value.toLowerCase(), key.toLowerCase());
        var valueParsedWithoutKey = prefixedByKey ? value.substring(key.length, value.length).toLowerCase() : value;

        parsedMessage[key] = valueParsedWithoutKey;
    }

    function applyVendorSpecificLogic(config) {
        if (phenixRTC.browser === 'Firefox') {
            removeTurnsServers(config);
        }

        return config;
    }

    function removeTurnsServers(config) {
        if (!config) {
            return config;
        }

        _.forEach(config.iceServers, function(server) {
            server.urls = _.filter(server.urls, function(url) {
                return !_.startsWith(url, 'turns');
            });
        });

        return config;
    }

    var isMobile = function() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        return isIOS() || /Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent);
    };

    var isIOS = function() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        return /iPad|iPhone|iPod/.test(userAgent) && !phenixRTC.global.MSStream;
    };

    function getIOSVersion() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        if (/iP(hone|od|ad)/.test(userAgent)) {
            var version = userAgent.match(/.*OS (\d+)_(\d+)_?(\d+)? like Mac OS X/);

            return {
                major: parseInt(_.get(version, [1], 0), 10),
                minor: parseInt(_.get(version, [2], 0), 10),
                patch: parseInt(_.get(version, [3], 0), 10)
            };
        }
    }

    var setGroupLineOrderToMatchMediaSectionOrder = function(sdp) {
        var groupLineSegment = sdp.match(/(?=a=group:BUNDLE).*/);
        var mediaSegmentNamesString = _.get(_.get(groupLineSegment, [0], '').split('a=group:BUNDLE '), [1], '');
        var mediaSegmentNames = mediaSegmentNamesString.split(' ');

        var sortedMediaSegmentNames = mediaSegmentNames.sort(function(nameA, nameB) {
            return sdp.indexOf('m=' + nameA) > sdp.indexOf('m=' + nameB);
        });

        if (sortedMediaSegmentNames.length > 0) {
            sdp = sdp.replace(mediaSegmentNamesString, sortedMediaSegmentNames.join(' '));
        }

        return sdp;
    };

    return PCast;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultRoomBandwidthLimit = 5000000;

    function PublisherBandwidthAdjuster(publisher) {
        this.init(publisher);
    }

    PublisherBandwidthAdjuster.prototype.init = function init(publisher) {
        assert.isObject(publisher, 'publisher');

        this._publisher = publisher;
        this._roomMemberCount = 0;
        this._roomSubscription = null;
        this._membersSubscription = null;
    };

    PublisherBandwidthAdjuster.prototype.connect = function connect(roomService, options) {
        assert.isObject(roomService, 'roomService');

        options = options || {};

        var roomObservable = roomService.getObservableActiveRoom();
        var roomBandwidthLimit = options.roomBandwidthLimit || defaultRoomBandwidthLimit;

        this._roomSubscription = roomObservable.subscribe(_.bind(onRoomChange, this, roomBandwidthLimit), {initial: 'notify'});
    };

    PublisherBandwidthAdjuster.prototype.close = function close() {
        if (this._roomSubscription) {
            this._roomSubscription.dispose();
        }

        if (this._membersSubscription) {
            this._membersSubscription.dispose();
        }

        this._roomSubscription = null;
        this._membersSubscription = null;
    };

    PublisherBandwidthAdjuster.prototype.toString = function toString() {
        return 'PublisherBandwidthAdjuster';
    };

    function onRoomChange(roomBandwidthLimit, room) {
        if (this._membersSubscription) {
            this._membersSubscription.dispose();
        }

        if (!room) {
            return this._publisher.limitBandwidth(roomBandwidthLimit);
        }

        var membersObservable = room.getObservableMembers();

        this._membersSubscription = membersObservable.subscribe(_.bind(onRoomMembersChanged, this, roomBandwidthLimit), {initial: 'notify'});
    }

    function onRoomMembersChanged(roomBandwidthLimit, members) {
        if (members.length === this._roomMemberCount) {
            return;
        }

        this._roomMemberCount = members.length;

        var targetBitRate = roomBandwidthLimit / Math.max(1, this._roomMemberCount - 1);

        this._publisher.limitBandwidth(targetBitRate);
    }

    return PublisherBandwidthAdjuster;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(18),
    __webpack_require__(15),
    __webpack_require__(44)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, pcastLoggerFactory, PCastEndPoint, PublisherBandwidthAdjuster) {
    'use strict';

    function BandwidthMonitor(publishers, options) {
        assert.isArray(publishers, 'userMediaStreams');

        options = options || {};

        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri);
        this._publisherAdjusters = [];
        this._publishers = publishers;
    }

    BandwidthMonitor.prototype.start = function start(roomService, options) {
        options = options || {};

        _.forEach(this._publishers, _.bind(setupPublisherAdjusters, this, roomService, options));
    };

    BandwidthMonitor.prototype.stop = function stop() {
        _.forEach(this._publisherAdjusters, function closePublisherAdjusters(adjuster) {
            adjuster.close();
        });

        this._publisherAdjusters = [];
    };

    BandwidthMonitor.prototype.toString = function toString() {
        return 'BandwidthMonitor';
    };

    function setupPublisherAdjusters(roomService, options, publisher) {
        var publisherAdjuster = new PublisherBandwidthAdjuster(publisher);

        publisherAdjuster.connect(roomService, options);

        this._publisherAdjusters.push(publisherAdjuster);
    }

    return BandwidthMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(20)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Channel) {
    'use strict';

    function ChannelService(roomService) {
        assert.isObject(roomService, 'roomService');

        this._roomService = roomService;
    }

    ChannelService.prototype.start = function start() {
        return this._roomService.start.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getChannelInfo = function getChannelInfo(channelId, alias, callback) {
        if (channelId) {
            assert.isStringNotEmpty(channelId, 'channelId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        return this._roomService.getRoomInfo(channelId, alias, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.createChannel = function createChannel(channel, callback) {
        assert.isObject(channel, 'channel');
        assert.isStringNotEmpty(channel.name, 'channel.name');
        assert.isStringNotEmpty(channel.type, 'channel.type');
        assert.isString(channel.description, 'channel.description');
        assert.isFunction(callback, 'callback');

        return this._roomService.createRoom(channel, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.enterChannel = function enterChannel(channelId, alias, callback) {
        if (channelId) {
            assert.isStringNotEmpty(channelId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        return this._roomService.enterRoom(channelId, alias, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.leaveChannel = function leaveChannel() {
        return this._roomService.leaveRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getChatService = function getChatService() {
        return this._roomService.getChatService.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getSelf = function getSelf() {
        return this._roomService.getSelf.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getObservableActiveChannel = function getObservableActiveChannel() {
        return this._roomService.getObservableActiveRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateSelf = function updateSelf() {
        return this._roomService.updateSelf.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateMember = function updateMember() {
        return this._roomService.updateMember.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateChannel = function updateChannel() {
        return this._roomService.updateRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.revertChannelChanges = function revertChannelChanges() {
        return this._roomService.revertRoomChanges.apply(this._roomService, arguments);
    };

    ChannelService.prototype.revertMemberChanges = function revertMemberChanges() {
        return this._roomService.revertMemberChanges.apply(this._roomService, arguments);
    };

    ChannelService.prototype.isInChannel = function isInChannel() {
        return this._roomService.isInRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.toString = function toString() {
        return 'ChannelService';
    };

    ChannelService.prototype.stop = function stop() {
        return this._roomService.stop.apply(this._roomService, arguments);
    };

    function wrapResponseWithChannelPrefixesAndContinue(callback, error, response) {
        if (response && response.room) {
            response.channel = new Channel(response.room);

            delete response.room;
        }

        return callback(error, response);
    }

    return ChannelService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(22),
    __webpack_require__(46),
    __webpack_require__(20),
    __webpack_require__(21),
    __webpack_require__(14),
    __webpack_require__(10),
    __webpack_require__(11),
    __webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, RoomExpress, ChannelService, Channel, MemberSelector, Stream, roomEnums, memberEnums, streamEnums) {
    'use strict';

    var defaultReconnectOptions = {
        maxOfflineTime: 24 * 60 * 60 * 1000, // 1 day
        maxReconnectFrequency: 60 * 1000 // 60 seconds
    };

    function ChannelExpress(options) {
        assert.isObject(options, 'options');

        if (options.roomExpress) {
            assert.isObject(options.roomExpress, 'options.roomExpress');
        } else {
            assert.isStringNotEmpty(options.backendUri, 'options.backendUri');
            assert.isObject(options.authenticationData, 'options.authenticationData');
        }

        var channelExpressOptions = _.assign({reconnectOptions: defaultReconnectOptions}, options);

        this._roomExpress = options.roomExpress || new RoomExpress(channelExpressOptions);
        this._shouldDisposeOfRoomExpress = !options.roomExpress;
        this._logger = this._roomExpress.getPCastExpress().getPCast().getLogger();
    }

    ChannelExpress.prototype.dispose = function dispose() {
        if (this._shouldDisposeOfRoomExpress) {
            this._roomExpress.dispose();
        }
    };

    ChannelExpress.prototype.getRoomExpress = function getPCastExpress() {
        return this._roomExpress;
    };

    ChannelExpress.prototype.getPCastExpress = function getPCastExpress() {
        return this._roomExpress.getPCastExpress();
    };

    ChannelExpress.prototype.createChannel = function createChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isObject(options.channel, 'options.channel');

        var createRoomOptions = _.assign({room: options.channel}, options);

        createRoomOptions.room.type = roomEnums.types.channel.name;

        delete createRoomOptions.channel;

        this._roomExpress.createRoom(createRoomOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelExpress.prototype.joinChannel = function joinChannel(options, joinChannelCallback, subscriberCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinChannelCallback, 'joinChannelCallback');
        assert.isFunction(subscriberCallback, 'subscriberCallback');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.streamSelectionStrategy) {
            assert.isStringNotEmpty(options.streamSelectionStrategy, 'options.streamSelectionStrategy');
        }

        var channelOptions = _.assign({
            type: roomEnums.types.channel.name,
            role: memberEnums.roles.audience.name
        }, options);
        var memberSelector = new MemberSelector(options.streamSelectionStrategy, this._logger);
        var lastMediaStream;
        var lastStreamId;
        var channelRoomService;
        var channelId = '';
        var that = this;

        if (channelOptions.channelId) {
            channelOptions.roomId = channelOptions.channelId;
        }

        delete channelOptions.channelId;

        var joinRoomCallback = function(error, response) {
            var channelResponse = !response || _.assign({}, response);

            if (response && response.roomService) {
                var leaveRoom = response.roomService.leaveRoom;
                var room = response.roomService.getObservableActiveRoom().getValue();

                channelRoomService = response.roomService;
                channelId = room ? room.getRoomId() : '';

                that._logger.info('Joined channel [%s] with [%s] selection strategy', channelId, memberSelector.getStrategy());

                channelResponse.roomService.leaveRoom = function(callback) {
                    if (lastMediaStream) {
                        lastMediaStream.stop();
                    }

                    leaveRoom(callback);
                };
            }

            wrapResponseWithChannelPrefixesAndContinue(joinChannelCallback, error, channelResponse);
        };

        that._roomExpress.joinRoom(channelOptions, joinRoomCallback, function membersChangedCallback(members, streamErrorStatus) {
            var presenters = _.filter(members, function(member) {
                return member.getObservableRole().getValue() === memberEnums.roles.presenter.name && member.getObservableStreams().getValue().length > 0;
            });
            var forceNewMemberSelection = !!streamErrorStatus || !lastMediaStream || !lastStreamId;
            var selectedPresenter = memberSelector.getNext(presenters, forceNewMemberSelection);
            var presenterStream = selectedPresenter ? selectedPresenter.getObservableStreams().getValue()[0] : null;
            var streamId = presenterStream ? presenterStream.getPCastStreamId() : '';

            if (!selectedPresenter || !presenterStream) {
                if (presenters.length === 0) {
                    return subscriberCallback(null, {status: 'no-stream-playing'});
                }

                if (streamErrorStatus) {
                    that._logger.info('Unable to find a new presenter to replace stream [%s] that ended in channel [%s] with status [%s] and [%s] black-listed members',
                        lastStreamId, channelId, streamErrorStatus, memberSelector.getNumberOfBlackListedMembers());

                    return subscriberCallback(null, {status: streamErrorStatus || 'unable-to-recover'});
                }

                return subscriberCallback(null, {status: 'no-stream-playing'});
            }

            if (!checkifStreamingIsAvailable(presenterStream.getUri()) && _.includes(options.capabilities, 'streaming')) {
                return subscriberCallback(null, {status: 'streaming-not-available'});
            }

            if (!streamId) {
                that._logger.info('Channel [%s] presenter has no stream', channelId);

                return subscriberCallback(null, {status: 'no-stream-playing'});
            }

            if (streamId === lastStreamId) {
                if (streamErrorStatus) {
                    that._logger.info('Unable to find a new presenter to replace stream [%s] that ended in channel [%s] with status [%s]',
                        lastStreamId, channelId, streamErrorStatus);

                    return subscriberCallback(null, {status: streamErrorStatus || 'unable-to-recover'});
                }

                return;
            } else if (lastStreamId && lastMediaStream) {
                lastMediaStream.stop();
            }

            var tryNextMember = function(streamStatus) {
                var room = channelRoomService ? channelRoomService.getObservableActiveRoom().getValue() : null;
                var members = room ? room.getObservableMembers().getValue() : [];

                if (!room) {
                    return; // No longer in room.
                }

                return membersChangedCallback(members, streamStatus);
            };

            function monitorChannelSubsciber(mediaStreamId, error, response) {
                if (lastStreamId !== mediaStreamId) {
                    return; // Ignore old streams
                }

                if (error) {
                    return tryNextMember('unable-to-subscribe');
                }

                // Don't continue - Tell client
                if (response.reason === 'app-background') {
                    return subscriberCallback(error, response);
                }

                if (response.retry && memberSelector.getStrategy() !== 'high-availability') {
                    return response.retry();
                }

                if (response.status !== 'ok') {
                    return tryNextMember(response.status);
                }
            }

            var subscribeOptions = _.assign({}, {
                monitor: {
                    callback: _.bind(monitorChannelSubsciber, this, streamId),
                    options: {conditionCountForNotificationThreshold: 8}
                }
            }, options);
            var hadPreviousStreamReason = streamErrorStatus ? 'recovered-from-failure' : 'stream-override';
            var successReason = lastStreamId ? hadPreviousStreamReason : 'stream-started';

            lastStreamId = streamId;

            var mediaStreamCallback = function mediaStreamCallback(mediaStreamId, error, response) {
                if (lastStreamId !== mediaStreamId) {
                    return; // Ignore old streams
                }

                if (response && response.status === 'ok') {
                    response.reason = successReason;
                }

                if (error || (response && response.status !== 'ok')) {
                    that._logger.info('[%s] Issue with stream [%s]. Trying next member', mediaStreamId, response ? response.status : '', error);

                    return tryNextMember(response ? response.status : '');
                }

                if (response && response.mediaStream) {
                    lastMediaStream = response.mediaStream;
                } else {
                    lastStreamId = null;
                    lastMediaStream = null;
                }

                subscriberCallback(error, response);
            };

            that._roomExpress.subscribeToMemberStream(presenterStream, subscribeOptions, _.bind(mediaStreamCallback, this, streamId));
        });
    };

    ChannelExpress.prototype.publishToChannel = function publishToChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var channelOptions = _.assign({
            memberRole: memberEnums.roles.presenter.name,
            streamType: streamEnums.types.presentation.name,
            room: options.channel
        }, options);

        channelOptions.room.type = roomEnums.types.channel.name;

        delete channelOptions.channel;

        this._roomExpress.publishToRoom(channelOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelExpress.prototype.publishScreenToChannel = function publishScreenToChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var channelOptions = _.assign({
            memberRole: memberEnums.roles.presenter.name,
            streamType: streamEnums.types.presentation.name,
            room: options.channel
        }, options);

        channelOptions.room.type = roomEnums.types.channel.name;

        delete channelOptions.channel;

        this._roomExpress.publishScreenToRoom(channelOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    function checkifStreamingIsAvailable(uri) {
        var deferToCreateToken = true;
        var streamInfo = Stream.getInfoFromStreamUri(uri);

        if (_.values(streamInfo).length === 0) {
            return deferToCreateToken;
        }

        // TODO(DY) Remove streamTokenStreaming once apps updated in prod
        return !!streamInfo.streamTokenForLiveStream || !!streamInfo.streamTokenStreaming;
    }

    function wrapResponseWithChannelPrefixesAndContinue(callback, error, response) {
        if (response && response.roomService) {
            response.channelService = new ChannelService(response.roomService);

            delete response.roomService;
        }

        if (response && response.room) {
            response.channel = new Channel(response.room);

            delete response.room;
        }

        callback(error, response);
    }

    return ChannelExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var shakaEnums = {
        errorSeverity: {
            recoverable: {
                id: 1,
                name: 'RECOVERABLE'
            },
            critical: {
                id: 2,
                name: 'CRITICAL'
            }
        }
    };

    return shakaEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    // ToDo: Add supported frame rates [30, 15]
    var aspectRatios = [
        {
            '16x9': [
                {2160: 3840}, // 4k (UHD)
                {1080: 1920}, // 1080p (FHD)
                {768: 1366}, //
                {720: 1280}, // 720p(HD)
                {576: 1024},
                {480: 853}, // 480p
                {360: 640}, // 360p (nHD)
                {180: 320}
            ]
        },
        {
            '4x3': [
                {1200: 1600}, // UXGA
                {1080: 1440},
                {720: 960},
                {600: 800}, // SVGA
                {576: 768},
                {480: 640}, // VGA
                {360: 480},
                {288: 352}, // CIF
                {240: 320}, // QVGA
                {144: 176}, // QCIF
                {120: 160} // QQVGA
            ]
        }
    ];
    var resolutionSelectionStrategies = {
        fallbackToLower: {
            id: 0,
            name: 'fallbackToLower'
        },
        fallbackToHigher: {
            id: 1,
            name: 'fallbackToHigher'
        },
        fallbackToLowerThenHigher: {
            id: 2,
            name: 'fallbackToLowerThenHigher'
        },
        exact: {
            id: 3,
            name: 'exact'
        }
    };

    function ResolutionProvider(options) {
        assert.isObject(options, 'options');

        if (options.resolutionSelectionStrategy) {
            assert.isValidType(options.resolutionSelectionStrategy, resolutionSelectionStrategies, 'options.resolutionSelectionStrategy');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.resolutionHeight) {
            assert.isNumber(options.resolutionHeight, 'options.resolutionHeight');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        this._resolutionSelectionStrategy = options.resolutionSelectionStrategy || resolutionSelectionStrategies.fallbackToLowerThenHigher.name;
        this._defaultAspectRatio = options.aspectRatio || '16x9';
        this._defaultResolutionHeight = options.resolutionHeight || 720;
        this._defaultFrameRate = options.frameRate || 15;
    }

    ResolutionProvider.prototype.getDefaultResolution = function getDefaultResolution() {
        var aspectRatioHeights = getObjectValueInArray(this._defaultAspectRatio, aspectRatios);
        var width = getObjectValueInArray(this._defaultResolutionHeight, aspectRatioHeights) || this.calculateWidthByAspectRatio(this._defaultResolutionHeight, this._defaultAspectRatio);

        return {
            height: this._defaultResolutionHeight,
            width: width,
            aspectRatio: this._defaultAspectRatio
        };
    };

    ResolutionProvider.prototype.getDefaultFrameRate = function getDefaultFrameRate() {
        return this._defaultFrameRate;
    };

    ResolutionProvider.prototype.getNextResolution = function getNextResolution(height, aspectRatio) {
        assert.isNumber(height, 'height');
        assert.isStringNotEmpty(aspectRatio, 'aspectRatio');

        switch (this._resolutionSelectionStrategy) {
        case resolutionSelectionStrategies.fallbackToLower.name:
            return getNextLowestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToHigher.name:
            return getNextHighestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToLowerThenHigher.name:
            var nextResolution = null;

            if (height > this._defaultResolutionHeight) {
                nextResolution = getNextHighestResolution.call(this, height, aspectRatio);
            } else {
                nextResolution = getNextLowestResolution.call(this, height, aspectRatio);

                if (!nextResolution || !nextResolution.height) {
                    nextResolution = getNextHighestResolution.call(this, this._defaultResolutionHeight, this._defaultAspectRatio);
                }
            }

            return nextResolution;
        case resolutionSelectionStrategies.exact.name:
        default:
            return;
        }
    };

    ResolutionProvider.prototype.canResolveNextResolution = function() {
        return this._resolutionSelectionStrategy !== resolutionSelectionStrategies.exact.name;
    };

    ResolutionProvider.prototype.calculateWidthByAspectRatio = function calculateWidthByAspectRatio(height, aspectRatio) {
        switch (aspectRatio) {
        case '16x9':
            return roundUpToNearestEvenNumber((16 / 9) * height);
        case '4x3':
            return roundUpToNearestEvenNumber((4 / 3) * height);
        default:
            throw new Error('Aspect Ratio not supported');
        }
    };

    function roundUpToNearestEvenNumber(value) {
        assert.isNumber(value, 'value');

        return 2 * Math.floor((value + 1) / 2);
    }

    function getNextHighestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isLargestHeight = heightIndex === 0;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (!_.isNumber(heightIndex)) {
            heightIndex = getNextHighestKeyIndex(height, aspectRatioHeights);

            if (!heightIndex) {
                return;
            }
        } else {
            if (isLargestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newAspectRatioHeights = getObjectValueInArray(newAspectRatio, aspectRatios);
                heightIndex = getNextHighestKeyIndex(this._defaultResolutionHeight, newAspectRatioHeights);
                newHeight = getIndexKey(heightIndex, aspectRatioHeights);
                newWidth = this.calculateWidthByAspectRatio(newHeight, newAspectRatio);

                return {
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight),
                    width: parseInt(newWidth)
                };
            }

            heightIndex--;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight),
            width: parseInt(newWidth)
        };
    }

    function getNextLowestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isSmallestHeight = heightIndex === aspectRatioHeights.length - 1;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (!_.isNumber(heightIndex)) {
            heightIndex = getNextLowestKeyIndex(height, aspectRatioHeights);

            if (!heightIndex) {
                return;
            }
        } else {
            if (isSmallestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newHeight = this._defaultResolutionHeight;
                newWidth = this.calculateWidthByAspectRatio(newHeight, newAspectRatio);

                return {
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight),
                    width: parseInt(newWidth)
                };
            }

            heightIndex++;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight),
            width: parseInt(newWidth)
        };
    }

    function getObjectValueInArray(value, collection) {
        var valueObject = _.find(collection, function(item) {
            return item.hasOwnProperty(value);
        });

        return valueObject ? valueObject[value] : null;
    }

    function getIndexInArray(value, collection) {
        return _.findIndex(collection, function(item) {
            return item.hasOwnProperty(value);
        });
    }

    function getIndexKey(index, collection) {
        var keys = _.keys(collection[index]);

        return keys[0];
    }

    function getIndexValue(index, collection) {
        var keys = _.keys(collection[index]);

        return collection[index][keys[0]];
    }

    function getNextHighestKeyIndex(value, collection) {
        if ( _.keys(collection[0])[0] < value) {
            return null;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey < value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    function getNextLowestKeyIndex(value, collection) {
        if ( _.keys(collection[collection.length - 1])[0] > value) {
            return null;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey > value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    return ResolutionProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultSpeakingHysteresisInterval = 50;
    var defaultSilenceHysteresisInterval = 1500;

    function AudioSpeakerDetectionAlgorithm(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;

        this.init();
    }

    AudioSpeakerDetectionAlgorithm.prototype.init = function init() {

    };

    AudioSpeakerDetectionAlgorithm.prototype.onValue = function onValue(callback) {
        this._callback = callback;
    };

    AudioSpeakerDetectionAlgorithm.prototype.startDetection = function startDetection(audioVolumeMeter, options) {
        var that = this;

        return startAudioDetection.call(that, audioVolumeMeter, options);
    };

    AudioSpeakerDetectionAlgorithm.prototype.toString = function toString() {
        return 'AudioSpeakerDetection';
    };

    function startAudioDetection(audioVolumeMeter, options) {
        assert.isObject(audioVolumeMeter, 'audioVolumeMeter');

        options = options || {};

        var that = this;
        var stopped = false;
        var speakingHysteresisInterval = options.speakingHysteresisInterval || defaultSpeakingHysteresisInterval;
        var silenceHysteresisInterval = options.silenceHysteresisInterval || defaultSilenceHysteresisInterval;

        assert.isNumber(speakingHysteresisInterval, 'options.speakingHysteresisInterval');
        assert.isNumber(silenceHysteresisInterval, 'options.silenceHysteresisInterval');

        var speaking = false;
        var nextSpeakingDeadline = _.now() + speakingHysteresisInterval;
        var nextSilenceDeadline = _.now() + silenceHysteresisInterval;

        audioVolumeMeter.onValue(function(value) {
            if (stopped) {
                return;
            }

            assert.isObject(audioVolumeMeter, 'audioVolumeMeter');
            assert.isNumber(value.date, 'value.date');
            assert.isNumber(value.value, 'value.value');
            assert.isNumber(value.smoothedValue, 'value.smoothedValue');
            assert.isNumber(value.smoothedPeakValue, 'value.smoothedPeakValue');
            assert.isNumber(value.clipped, 'value.clipped');

            var speakingThreshold = value.value > 0.01 && value.value > 2 * value.smoothedValue && value.value > 0.25 * value.smoothedPeakValue;
            var speakingContinuationThreshold = value.value > 0.8 * value.smoothedValue;
            var notSpeakingThreshold = value.value < 0.5 * value.smoothedValue;
            var notSpeakingContinuationThreshold = !speakingThreshold;

            if ((speakingThreshold || (speaking && speakingContinuationThreshold)) && nextSpeakingDeadline < value.date) {
                nextSilenceDeadline = _.utc(value.date) + silenceHysteresisInterval;

                if (!speaking) {
                    speaking = true;

                    that._logger.info('Speaking detected');

                    if (that._callback) {
                        that._callback('speaking');
                    }
                }
            } else if ((notSpeakingThreshold || (!speaking && notSpeakingContinuationThreshold)) && nextSilenceDeadline < value.date) {
                nextSpeakingDeadline = _.utc(value.date) + speakingHysteresisInterval;

                if (speaking) {
                    speaking = false;

                    that._logger.info('Silence detected');

                    if (that._callback) {
                        that._callback('silence');
                    }
                }
            }
        });
    }

    return AudioSpeakerDetectionAlgorithm;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultAlpha = 1 / 16;

    function AudioVolumeMeter(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
    }

    AudioVolumeMeter.prototype.init = function init(context, alpha) {
        assert.isObject(context, 'context');
        assert.isFunction(context.createScriptProcessor, 'context.createScriptProcessor');

        alpha = parseFloat(alpha || defaultAlpha);
        assert.isNumber(alpha, 'alpha');

        this._context = context;
        this._alpha = alpha;
        this._value = 0.;
        this._smoothedValue = 0.;
        this._smoothedPeakValue = 0.;
        this._clipped = 0.;
        this._scriptProcessor = context.createScriptProcessor(4096, 1, 1);

        _.addEventListener(this._scriptProcessor, 'audioprocess', _.bind(onAudioProcess, this));
    };

    AudioVolumeMeter.prototype.onValue = function onValue(callback) {
        this._callback = callback;
    };

    AudioVolumeMeter.prototype.getValue = function getValue() {
        return this._value;
    };

    AudioVolumeMeter.prototype.getSmoothedValue = function getSmoothedValue() {
        return this._smoothedValue;
    };

    AudioVolumeMeter.prototype.getSmoothedPeakValue = function getSmoothedPeakValue() {
        return this._smoothedPeakValue;
    };

    AudioVolumeMeter.prototype.setAlpha = function setAlpha(alpha) {
        assert.isNumber(alpha, 'alpha');

        this._alpha = parseFloat(alpha);
    };

    AudioVolumeMeter.prototype.connect = function connect(stream) {
        var that = this;

        return connectToStream.call(that, stream);
    };

    AudioVolumeMeter.prototype.stop = function stop() {
        return stopConnections.call(this);
    };

    AudioVolumeMeter.prototype.toString = function toString() {
        return 'AudioVolumeMeter';
    };

    function onAudioProcess(event) {
        var input = event.inputBuffer.getChannelData(0);
        var sum = 0.;
        var clipped = 0;

        for (var i = 0; i < input.length; i++) {
            sum += input[i] * input[i];

            if (Math.abs(input[i]) > 0.99) {
                clipped++;
            }
        }

        this._value = Math.sqrt(sum / input.length);
        this._smoothedValue = this._alpha * this._value + (1. - this._alpha) * this._smoothedValue;
        this._smoothedPeakValue = Math.max(this._value, this._alpha * this._value + (1. - this._alpha) * this._smoothedPeakValue);
        this._clipped = clipped;

        if (this._callback) {
            this._callback.call(this, {
                date: _.now(),
                value: this._value,
                smoothedValue: this._smoothedValue,
                smoothedPeakValue: this._smoothedPeakValue,
                clipped: this._clipped
            });
        }
    }

    function connectToStream(stream) {
        assert.isObject(stream, 'stream');

        var that = this;

        if (stream.getAudioTracks().length > 0) {
            that._mediaStreamSource = that._context.createMediaStreamSource(stream);
            that._mediaStreamSource.connect(that._scriptProcessor);
            that._scriptProcessor.connect(that._context.destination);
        } else {
            that._logger.info('Stream has no audio tracks');
        }
    }

    function stopConnections() {
        if (this._mediaStreamSource) {
            this._mediaStreamSource.disconnect();
        }

        this._scriptProcessor.disconnect();
    }

    return AudioVolumeMeter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, AudioVolumeMeter) {
    'use strict';

    function AudioVolumeMeterFactory(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._audioVolumeMeters = {};
    }

    AudioVolumeMeterFactory.prototype.stopAllMeters = function stopAllMeters() {
        _.forOwn(this._audioVolumeMeters, function stopAudioVolumeMeters(meter) {
            meter.stop();
        });
    };

    AudioVolumeMeterFactory.prototype.getAudioVolumeMeter = function getAudioVolumeMeter(stream) {
        assert.isObject(stream, 'stream');
        assert.isStringNotEmpty(stream.id, 'streamId');

        if (!this._audioVolumeMeters[stream.id]) {
            this._audioVolumeMeters[stream.id] = new AudioVolumeMeter(this._logger);
        }

        return this._audioVolumeMeters[stream.id];
    };

    AudioVolumeMeterFactory.prototype.getAudioVolumeMeters = function getAudioVolumeMeters() {
        return _.values(this._audioVolumeMeters);
    };

    AudioVolumeMeterFactory.prototype.toString = function toString() {
        return 'AudioVolumeMeterFactory';
    };

    return AudioVolumeMeterFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(18),
    __webpack_require__(15),
    __webpack_require__(32),
    __webpack_require__(52),
    __webpack_require__(50)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, pcastLoggerFactory, PCastEndPoint, AudioContext, AudioVolumeMeterFactory, AudioSpeakerDetectionAlgorithm) {
    'use strict';

    function AudioSpeakerDetector(userMediaStreams, options) {
        assert.isArray(userMediaStreams, 'userMediaStreams');

        options = options || {};

        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri);
        this._audioContext = options.audioContext || new AudioContext();
        this._nativeAudioContext = this._audioContext.getNativeAudioContext();
        this._onSpeakingChanged = null;
        this._userMediaStreams = userMediaStreams;
        this._disposeOfAudioContext = !_.isObject(options.audioContext);
        this._audioVolumeMeterFactory = new AudioVolumeMeterFactory(this._logger);

        _.forEach(this._userMediaStreams, _.bind(setupAudioVolumeMeter, this, options));
    }

    AudioSpeakerDetector.prototype.start = function start(options, callback) {
        assert.isFunction(callback, 'callback');

        this._onSpeakingChanged = callback;

        options = options || {};

        _.forEach(this._userMediaStreams, _.bind(setupSpeakingDetection, this, options));
    };

    AudioSpeakerDetector.prototype.stop = function stop() {
        _.forEach(this.getAudioVolumeMeters(), function(meter) {
            meter.onValue(function() {});
        });

        this._onSpeakingChanged = null;
    };

    AudioSpeakerDetector.prototype.getAudioVolumeMeter = function getAudioVolumeMeter(stream) {
        assert.isObject(stream, 'stream');

        return this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);
    };

    AudioSpeakerDetector.prototype.getAudioVolumeMeters = function getAudioVolumeMeters() {
        return this._audioVolumeMeterFactory.getAudioVolumeMeters();
    };

    AudioSpeakerDetector.prototype.dispose = function dispose() {
        if (this._disposeOfAudioContext) {
            this._nativeAudioContext.close();
        }

        this._audioVolumeMeterFactory.stopAllMeters();

        this._userMediaStreams = null;
    };

    AudioSpeakerDetector.prototype.toString = function toString() {
        return 'AudioSpeakerDetector';
    };

    function setupAudioVolumeMeter(options, stream) {
        assert.isObject(stream, 'stream');
        assert.isObject(options, 'options');

        var audioVolumeMeter = this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);

        audioVolumeMeter.init(this._nativeAudioContext, options.alpha);
        audioVolumeMeter.connect(stream);
    }

    function setupSpeakingDetection(options, stream) {
        assert.isObject(stream, 'stream');
        assert.isObject(options, 'options');

        var audioVolumeMeter = this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);
        var audioSpeakerDetectionAlgorithm = new AudioSpeakerDetectionAlgorithm(this._logger);

        if (options.alpha) {
            audioVolumeMeter.setAlpha(options.alpha);
        }

        audioSpeakerDetectionAlgorithm.onValue(this._onSpeakingChanged);
        audioSpeakerDetectionAlgorithm.startDetection(audioVolumeMeter, options);
    }

    return AudioSpeakerDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, AuthenticationService) {
    'use strict';

    function ChatService(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();
        this._enabled = new observable.Observable(false);
        this._lastSubscribedSessionId = null;

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');

        this._authService = new AuthenticationService(this._pcast);
    }

    ChatService.prototype.start = function start() {
        if (this._enabled.getValue()) {
            return;
        }

        this._disposables = new disposable.DisposableList();
        this._roomMessagesListeners = {};

        this._enabled.setValue(true);
        setupSubscriptions.call(this);

        var disposeOfConversationHandler = this._protocol.onEvent('chat.RoomConversationEvent', _.bind(onRoomConversationEvent, this));

        this._disposables.add(disposeOfConversationHandler);
    };

    ChatService.prototype.stop = function stop() {
        if (!this._enabled.getValue()) {
            return;
        }

        if (this._disposables) {
            this._disposables.dispose();
        }
    };

    ChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
        return this._enabled;
    };

    ChatService.prototype.sendMessageToRoom = function sendMessageToRoom(roomId, screenName, role, lastUpdate, message, callback) {
        sendMessageRequest.call(this, roomId, screenName, role, lastUpdate, message, callback);
    };

    ChatService.prototype.subscribeAndLoadMessages = function subscribeAndLoadMessages(roomId, batchSize, onReceiveMessages) {
        var disposeOfListener = setupChatListener.call(this, roomId, onReceiveMessages);

        subscribeToRoomConversationRequest.call(this, roomId, batchSize);

        return disposeOfListener;
    };

    ChatService.prototype.getMessages = function getMessages(roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages) {
        getMessagesRequest.call(this, roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages);
    };

    ChatService.prototype.toString = function toString() {
        return 'ChatService';
    };

    function setupSubscriptions() {
        var pcastStatusSubscription = this._authService.getObservableStatus().subscribe(_.bind(onStatusChange, this));
        var pcastSessionIdSubscription = this._authService.getObservableSessionId().subscribe(_.bind(onSessionIdChange, this));

        this._disposables.add(pcastStatusSubscription);
        this._disposables.add(pcastSessionIdSubscription);
    }

    function setupChatListener(roomId, onReceiveMessages) {
        var that = this;

        this._roomMessagesListeners[roomId] = onReceiveMessages;

        var disposeOfHandler = new disposable.Disposable(function() {
            if (that._roomMessagesListeners[roomId] === onReceiveMessages) {
                delete that._roomMessagesListeners[roomId];
            }
        });

        this._disposables.add(disposeOfHandler);

        return disposeOfHandler;
    }

    function onRoomConversationEvent(event) {
        assert.isObject(event, 'event');
        assert.isStringNotEmpty(event.roomId, 'event.roomId');
        assert.isStringNotEmpty(event.eventType, 'event.eventType');
        assert.isArray(event.chatMessages, 'event.chatMessages');

        switch (event.eventType) {
        case 'Message':
            this._logger.debug('[%s] Room messages [%s]', event.roomId, event.chatMessages);

            var listener = this._roomMessagesListeners[event.roomId];

            convertTimeFromLongInChatMessages(event.chatMessages);

            if (listener) {
                listener(null, {
                    status: 'ok',
                    chatMessages: event.chatMessages
                });
            }

            break;
        default:
            this._logger.warn('Unsupported room conversation event [%s]', event.eventType);
        }
    }

    function onStatusChange(status) { // eslint-disable-line no-unused-vars
        // Only reason to redo subscriptions is if sessionId changes, which infers status changed
    }

    function onSessionIdChange(sessionId) {
        if (!this._lastSubscribedSessionId || this._lastSubscribedSessionId === sessionId) {
            return;
        }

        refreshMessageSubscriptions.call(this);
    }

    function refreshMessageSubscriptions() {
        var that = this;

        _.forOwn(this._roomMessagesListeners, function(listener, roomId) {
            subscribeToRoomConversationRequest.call(that, roomId, 1);
        });
    }

    function getMessagesRequest(roomId, batchSize, afterMessageId, beforeMessageId, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isFunction(callback, 'callback');

        if (!beforeMessageId || !afterMessageId) {
            assert.isNumber(batchSize, 'batchSize');
        }

        if (beforeMessageId) {
            assert.isStringNotEmpty(beforeMessageId, 'beforeMessageId');
        }

        if (afterMessageId) {
            assert.isStringNotEmpty(afterMessageId, 'afterMessageId');
        }

        assertEnabled.call(this);
        this._authService.assertAuthorized();

        var sessionId = this._authService.getPCastSessionId();

        this._logger.info('Get messages from room [%s] conversation with batch size of [%s], after [%s], and before [%s]', roomId, batchSize, afterMessageId, beforeMessageId);

        var that = this;

        this._protocol.getMessages(sessionId, roomId, batchSize, afterMessageId, beforeMessageId,
            function(error, response) {
                if (error) {
                    that._logger.error('Get messages from room conversation failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Get messages from room conversation failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.chatMessages = response.chatMessages;

                convertTimeFromLongInChatMessages(result.chatMessages);

                callback(null, result);
            }
        );
    }

    function subscribeToRoomConversationRequest(roomId, batchSize) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isNumber(batchSize, 'batchSize');

        assertEnabled.call(this);
        this._authService.assertAuthorized();

        var sessionId = this._authService.getPCastSessionId();

        this._lastSubscribedSessionId = sessionId;

        this._logger.info('Subscribe to room [%s] conversation with batch size of [%s]', roomId, batchSize);

        var that = this;

        this._protocol.subscribeToRoomConversation(sessionId, roomId, batchSize, function(error, response) {
            var onReceiveMessages = that._roomMessagesListeners[roomId];

            if (!onReceiveMessages) {
                return that._logger.warn('No subscription callback set for room [%s]', roomId);
            }

            if (error) {
                that._logger.error('Subscribe to room conversation failed with error [%s]', error);

                return onReceiveMessages(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok') {
                delete that._roomMessagesListeners[roomId];

                that._logger.warn('Subscribe to room conversation failed with status [%s]', response.status);

                return onReceiveMessages(null, result);
            }

            result.chatMessages = response.chatMessages;

            convertTimeFromLongInChatMessages(result.chatMessages);

            onReceiveMessages(null, result);
        });
    }

    function sendMessageRequest(roomId, screenName, role, lastUpdate, message, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isStringNotEmpty(screenName, 'screenName');
        assert.isStringNotEmpty(role, 'role');
        assert.isNumber(lastUpdate, 'lastUpdate');
        assert.isStringNotEmpty(message, 'message');
        assert.isFunction(callback, 'callback');

        assertEnabled.call(this);
        this._authService.assertAuthorized();

        var sessionId = this._authService.getPCastSessionId();

        var chatMessage = {
            messageId: '',
            timestamp: 0,
            from: {
                sessionId: sessionId,
                screenName: screenName,
                role: role,
                lastUpdate: lastUpdate
            },
            message: message
        };

        this._logger.info('Send message to room [%s] from [%s]', roomId, screenName);

        var that = this;

        return this._protocol.sendMessageToRoom(roomId, chatMessage, function(error, response) {
            if (error) {
                that._logger.error('Send message to room failed with error [%s]', error);

                return callback(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok') {
                that._logger.warn('Send message to room failed with status [%s]', response.status);
            }

            callback(null, result);
        });
    }

    function assertEnabled() {
        if (!this._enabled.getValue()) {
            throw new Error('ChatService not Enabled. Please start before performing actions.');
        }
    }

    function convertTimeFromLongInChatMessages(chatMessages) {
        _.forEach(chatMessages, function(chatMessage) {
            convertTimeFromLongInChatMessage(chatMessage);
        });
    }

    function convertTimeFromLongInChatMessage(chatMessage) {
        if (chatMessage.timestamp) {
            chatMessage.timestamp = _.utc(chatMessage.timestamp);
        }

        if (chatMessage.from) {
            chatMessage.from.lastUpdate = _.utc(chatMessage.from.lastUpdate);
        }
    }

    return ChatService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(54)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, ChatService) {
    'use strict';

    var defaultBatchSize = 0;
    var maxCachedQueueSize = 100;

    function RoomChatService(roomService) {
        assert.isObject(roomService, 'roomService');
        assert.isObject(roomService._pcast, 'roomService._pcast');
        assert.isObject(roomService._logger, 'roomService._logger');

        this._roomService = roomService;
        this._pcast = roomService._pcast;
        this._logger = roomService._logger;
        this._chatService = new ChatService(this._pcast);
        this._chatMessages = new observable.ObservableArray([]);
        this._latestMessageQueue = [];
        this._disposables = new disposable.DisposableList();
        this._chatRoomId = null;
    }

    RoomChatService.prototype.start = function start(batchSize) {
        this._batchSize = batchSize || defaultBatchSize;
        this._chatService.start();

        setupSubscriptions.call(this);
        setupMessageSubscription.call(this);
    };

    RoomChatService.prototype.stop = function stop() {
        this._chatService.stop();

        disposeOfMessageSubscription.call(this);

        if (this._disposables) {
            this._disposables.dispose();
        }
    };

    RoomChatService.prototype.getObservableChatMessages = function getObservableChatMessages() {
        return this._chatMessages;
    };

    RoomChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
        return this._chatService.getObservableChatEnabled();
    };

    RoomChatService.prototype.sendMessageToRoom = function sendMessageToRoom(message, callback) {
        var room = this._roomService.getObservableActiveRoom().getValue();
        var roomId = room.getRoomId();
        var self = this._roomService._self.getValue();
        var screenName = self.getObservableScreenName().getValue();
        var role = self.getObservableRole().getValue();
        var lastUpdate = self.getLastUpdate();

        this._chatService.sendMessageToRoom(roomId, screenName, role, lastUpdate, message, callback);
    };

    RoomChatService.prototype.getMessages = function getMessages(batchSize, afterMessageId, beforeMessageId, callback) {
        var room = this._roomService.getObservableActiveRoom().getValue();
        var roomId = room.getRoomId();

        return this._chatService.getMessages(roomId, batchSize, afterMessageId, beforeMessageId, callback);
    };

    RoomChatService.prototype.toString = function toString() {
        return 'RoomChatService';
    };

    function onRoomChange(room) {
        if (room && this._chatRoomId === room.getRoomId()) {
            return;
        }

        disposeOfMessageSubscription.call(this);

        if (room) {
            setupMessageSubscription.call(this);
        }
    }

    function setupSubscriptions() {
        var roomSubscription = this._roomService.getObservableActiveRoom().subscribe(_.bind(onRoomChange, this));

        this._disposables.add(roomSubscription);
    }

    function setupMessageSubscription() {
        disposeOfMessageSubscription.call(this);

        this._roomChatSubscription = subscribeAndLoadMessages.call(this, this._batchSize);
    }

    function disposeOfMessageSubscription() {
        if (this._roomChatSubscription && this._roomChatSubscription.dispose) {
            this._roomChatSubscription.dispose();
        }
    }

    function subscribeAndLoadMessages(batchSize) {
        var room = this._roomService.getObservableActiveRoom().getValue();
        var roomId = room.getRoomId();

        this._chatRoomId = roomId;

        var that = this;

        this._chatMessages.setValue([]);

        return this._chatService.subscribeAndLoadMessages(roomId, batchSize, function onReceiveMessages(error, response) {
            if (error) {
                throw error;
            }

            if (response.status !== 'ok') {
                throw new Error('Unable to subscribe to room chat. Status ' + status);
            }

            var messages = that._chatMessages.getValue();

            _.forEach(response.chatMessages, function addMessage(message) {
                messages.push(message);
            });

            if (messages.length > maxCachedQueueSize) {
                messages.splice(0, messages.length - maxCachedQueueSize);
            }

            that._chatMessages.setValue(messages);
        });
    }

    return RoomChatService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(29)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Room) {
    'use strict';

    function ImmutableRoom(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        this.init(roomService, id, alias, name, description, type, members, bridgeId, pin);
    }

    ImmutableRoom.prototype.init = function init(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        // Don't pass roomService.
        this._room = new Room(null, id, alias, name, description, type, members, bridgeId, pin);

        makeArrayOrObjectObservablesImmutable(this._room);
    };

    ImmutableRoom.prototype.getRoomId = function getImmutableRoomId() {
        return this._room.getRoomId();
    };

    ImmutableRoom.prototype.getObservableAlias = function getObservableAlias() {
        return this._room.getObservableAlias();
    };

    ImmutableRoom.prototype.getObservableName = function getObservableName() {
        return this._room.getObservableName();
    };

    ImmutableRoom.prototype.getObservableDescription = function getObservableDescription() {
        return this._room.getObservableDescription();
    };

    ImmutableRoom.prototype.getObservableType = function getObservableType() {
        return this._room.getObservableType();
    };

    ImmutableRoom.prototype.getObservableMembers = function getObservableMembers() {
        return this._room.getObservableMembers();
    };

    ImmutableRoom.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._room.getObservableBridgeId();
    };

    ImmutableRoom.prototype.getObservablePin = function getObservablePin() {
        return this._room.getObservablePin();
    };

    ImmutableRoom.prototype.toString = function toString() {
        return this._room.toString();
    };

    ImmutableRoom.prototype.toJson = function toJson() {
        return this._room.toJson();
    };

    ImmutableRoom.prototype.commitChanges = throwImmutableError;
    ImmutableRoom.prototype.reload = throwImmutableError;
    ImmutableRoom.prototype._update = throwImmutableError;
    ImmutableRoom.prototype._addMembers = throwImmutableError;
    ImmutableRoom.prototype._removeMembers = throwImmutableError;
    ImmutableRoom.prototype._updateMembers = throwImmutableError;

    function throwImmutableError() {
        throw new Error('ImmutableRoom is Immutable');
    }

    function throwImmutableSubscribeError() {
        throw new Error('Unable to subscribe to Immutable [ImmutableRoom]');
    }

    function makeArrayOrObjectObservablesImmutable(collection) {
        if (_.isArray(collection)) {
            _.forEach(collection, function(value) {
                wrapObservableAndAnyObservableProperties(value);
            });
        } else if (_.isObject(collection)) {
            _.forOwn(collection, function(value) {
                wrapObservableAndAnyObservableProperties(value);
            });
        }
    }

    function wrapObservableAndAnyObservableProperties(value) {
        wrapObservable(value);
        makeArrayOrObjectObservablesImmutable(value);
    }

    function wrapObservable(value) {
        if (value instanceof observable.Observable || value instanceof observable.ObservableArray) {
            value.setValue = throwImmutableError;
            value.subscribe = throwImmutableSubscribeError;

            var observableValue = value.getValue();

            makeArrayOrObjectObservablesImmutable(observableValue);
        }
    }

    return ImmutableRoom;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var h264ProfileIdRegex = /profile-level-id=[^;\n]*/;

    function sdpUtil() {

    }

    sdpUtil.prototype.getH264ProfileIds = function getH264ProfileIds(offerSdp) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');

        var h264ProfileIds = [];
        var h264ProfileIdMatch = offerSdp.match(h264ProfileIdRegex);
        var restOfOffer = offerSdp;

        while (h264ProfileIdMatch) {
            var h264ProfileId = _.get(h264ProfileIdMatch, '0', '');

            h264ProfileIds.push(h264ProfileId.split('=')[1]);

            restOfOffer = restOfOffer.substring(h264ProfileIdMatch.index + h264ProfileId.length, offerSdp.length);
            h264ProfileIdMatch = restOfOffer.match(h264ProfileIdRegex);
        }

        return h264ProfileIds;
    };

    sdpUtil.prototype.replaceH264ProfileId = function replaceH264ProfileId(offerSdp, profileIdToReplace, newProfileId) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');
        assert.isStringNotEmpty(newProfileId, 'newProfileId');

        var profileIds = this.getH264ProfileIds(offerSdp);

        if (!_.includes(profileIds, profileIdToReplace)) {
            return offerSdp;
        }

        return offerSdp.replace('profile-level-id=' + profileIdToReplace, 'profile-level-id=' + newProfileId);
    };

    sdpUtil.prototype.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        if (_.includes(profileIds, replaceProfileId)) {
            return replaceProfileId;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile !== profile) {
                return selectedProfileId;
            }

            return selectedLevel >= level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    sdpUtil.prototype.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        var matchingProfile = this.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(profileIds, replaceProfileId);

        if (matchingProfile) {
            return matchingProfile;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile < profile) {
                return profileId;
            } else if (profile < selectedProfile) {
                return selectedProfileId;
            }

            return selectedLevel > level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    return new sdpUtil();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(6),
    __webpack_require__(2),
    __webpack_require__(12),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    function PhenixRealTimeRenderer(streamId, streamSrc, streamTelemetry, options, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._namedEvents = new event.NamedEvents();

        this._onStalled = _.bind(stalled, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixRealTimeRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeRenderer.prototype.start = function(elementToAttachTo) {
        var hasAudioTrack = !!_.find(this._streamSrc.getTracks(), function(track) {
            return track.kind === 'audio';
        });

        if (!this._options.canPlaybackAudio) {
            if (this._options.disableAudioIfNoOutputFound && this._options.forcedAudioDisabled) {
                this._logger.warn('[%s] Missing audio playback device. Audio has been disabled on stream. Try setting up an audio device and re-subscribe in order to receive audio.', this._streamId);
            } else if (!this._options.disableAudioIfNoOutputFound && hasAudioTrack) {
                this._logger.warn('[%s] Missing audio playback device. May experience audio and/or video failure. Try setting up an audio device OR pass the [disableAudioIfNoOutputFound] option when subscribing to disable audio playback when no devices are attached.', this._streamId);
            }
        }

        this._element = rtc.attachMediaStream(elementToAttachTo, this._streamSrc);

        this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo);
        this._streamTelemetry.recordRebuffering(elementToAttachTo);
        this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo);
        this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo);

        if (this._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'pause', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'suspend', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'ended', this._onEnded, false);

        this._dimensionsChangedMonitor.start(this, elementToAttachTo);

        return elementToAttachTo;
    };

    PhenixRealTimeRenderer.prototype.stop = function(reason) {
        this._dimensionsChangedMonitor.stop();

        this._streamTelemetry.stop();

        if (this._element) {
            _.removeEventListener(this._element, 'stalled', this._onStalled, false);
            _.removeEventListener(this._element, 'pause', this._onStalled, false);
            _.removeEventListener(this._element, 'suspend', this._onStalled, false);
            _.removeEventListener(this._element, 'ended', this._onEnded, false);

            if (typeof this._element.pause === 'function') {
                this._element.pause();
            }

            if (rtc.browser === 'Edge') {
                this._element.src = '';
            }

            if (this._element.src && (rtc.browser === 'IE')) {
                this._element.src = null;
            } else if (this._element.src) {
                this._element.src = '';
            }

            if (this._element.srcObject) {
                this._element.srcObject = null;
            }

            this._element = null;
        }

        this._logger.info('[%s] Phenix real-time renderer has been destroyed', this._streamId);

        this._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);
    };

    PhenixRealTimeRenderer.prototype.getStats = function() {
        if (!this._element) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = this._options.networkLag / 1000; // Check RTC stats instead

        return {
            width: this._element.videoWidth || this._element.width,
            height: this._element.videoHeight || this._element.height,
            currentTime: trueCurrentTime,
            lag: lag,
            networkState: this._element.networkState
        };
    };

    PhenixRealTimeRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixRealTimeRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function stalled(event) {
        this._logger.info('[%s] Loading Phenix Real-Time stream player stalled caused by [%s] event.', this._streamId, event.type);
    }

    function ended() {
        this._logger.info('[%s] Phenix Real-Time stream ended.', this._streamId);
    }

    return PhenixRealTimeRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(2),
    __webpack_require__(31),
    __webpack_require__(42),
    __webpack_require__(58),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, PeerConnection, PeerConnectionMonitor, PhenixRealTimeRenderer, streamEnums) {
    'use strict';

    var iceConnectionTimeout = 5000;

    function PhenixRealTimeStream(streamId, streamSrc, peerConnection, streamTelemetry, options, logger) {
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._peerConnection = peerConnection;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._logger = logger;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
        this._childrenStreams = [];

        _.addEventListener(peerConnection, 'iceconnectionstatechange', _.bind(onIceConnectionChange, this));
    }

    PhenixRealTimeStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeStream.prototype.createRenderer = function() {
        var that = this;

        this._renderer = new PhenixRealTimeRenderer(this._streamId, this._streamSrc, this._streamTelemetry, this._options, this._logger);

        this._renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        this._renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
        });

        return this._renderer;
    };

    PhenixRealTimeStream.prototype.select = function select(trackSelectCallback) {
        assert.isFunction(trackSelectCallback, 'trackSelectCallback');
        assert.isFunction(rtc.global.MediaStream, 'rtc.global.MediaStream');

        var tracks = this._streamSrc.getTracks();
        var streamToAttach = new rtc.global.MediaStream();

        for (var i = 0; i < tracks.length; i++) {
            if (trackSelectCallback(tracks[i], i)) {
                streamToAttach.addTrack(tracks[i]);
            }
        }

        if (streamToAttach.getTracks().length === 0) {
            return this._logger.warn('No tracks selected');
        }

        var that = this;
        var newMediaStream = new PhenixRealTimeStream(this._streamId, streamToAttach, this._peerConnection, this._streamTelemetry, this._options, this._logger);

        newMediaStream.on(streamEnums.streamEvents.stopped.name, function(reason) {
            if (isStreamStopped(that._streamSrc)) {
                that._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);
            }
        });

        this._childrenStreams.push(newMediaStream);

        return newMediaStream;
    };

    PhenixRealTimeStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamEndedCallback = callback;
    };

    PhenixRealTimeStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamErrorCallback = callback;
    };

    PhenixRealTimeStream.prototype.streamEndedCallback = function streamEndedCallback(stream, status, reason) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamEndedCallback(status, reason);
        });

        if (_.isFunction(this._streamEndedCallback)) {
            this._streamEndedCallback(this, status, reason);
        }
    };

    PhenixRealTimeStream.prototype.streamErrorCallback = function streamErrorCallback(stream, errorSource, error) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamErrorCallback(errorSource, error);
        });

        if (_.isFunction(this._streamErrorCallback)) {
            this._streamErrorCallback(stream, errorSource, error);
        }
    };

    PhenixRealTimeStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        stopWebRTCStream(this._streamSrc);

        this._logger.info('[%s] stop media stream', this._streamId);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixRealTimeStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var that = this;
        var monitor = new PeerConnectionMonitor(that._streamId, that._peerConnection, that._logger);

        options.direction = 'inbound';

        monitor.start(options, function activeCallback() {
            return that.isActive();
        }, function monitorCallback(error, monitorEvent) {
            if (error) {
                that._logger.warn('[%s] Media stream monitor triggered unrecoverable error [%s]', error);
            }

            that._logger.warn('[%s] Media stream triggered monitor condition for [%s]', that._streamId, monitorEvent.type);

            return callback(that, 'client-side-failure', monitorEvent);
        });

        this._monitor = monitor;

        return monitor;
    };

    PhenixRealTimeStream.prototype.getMonitor = function getMonitor() {
        return this._monitor;
    };

    PhenixRealTimeStream.prototype.getStream = function getStream() {
        return this._streamSrc;
    };

    PhenixRealTimeStream.prototype.isActive = function isActive() {
        return !this._isStopped && !isStreamStopped(this._streamSrc);
    };

    PhenixRealTimeStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixRealTimeStream.prototype.getStats = function getStats(callback) {
        assert.isFunction(callback, 'callback');

        if (!this._lastStats) {
            this._lastStats = {};
        }

        var that = this;

        return rtc.getStats(this._peerConnection, null, function(stats) {
            callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
        });
    };

    PhenixRealTimeStream.prototype.getRenderer = function getRenderer() {
        return this._renderer;
    };

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isObject(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop, 'stream.stop')) {
            stream.stop();
        }

        _.forEach(stream && stream.getTracks ? stream.getTracks() : [], function(track) {
            track.stop();
        });
    }

    function onIceConnectionChange() {
        var that = this;

        switch (this._peerConnection.iceConnectionState) {
        case 'checking':
        case 'connecting':
            if (_.isNumber(this._connectionSuccessTimeout)) {
                return;
            }

            this._connectionStart = _.now();
            this._connectionSuccessTimeout = setTimeout(function() {
                that._logger.warn('[%s] Stream has not connected withing [%s] ms.', that._streamId, iceConnectionTimeout);
                that._namedEvents.fire(streamEnums.streamEvents.playerError.name, ['real-time', new Error('connection-timeout')]);
            }, iceConnectionTimeout);

            break;
        case 'connected':
            if (_.isNumber(this._connectionSuccessTimeout)) {
                clearTimeout(this._connectionSuccessTimeout);

                this._connectionSuccessTimeout = null;
            }

            this._logger.info('[%s] Ice Connection completed after [%s] ms', this._streamId, _.now() - this._connectionStart);

            this._connectionStart = null;

            break;
        default:
            break;
        }
    }

    return PhenixRealTimeStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(9),
    __webpack_require__(5),
    __webpack_require__(6),
    __webpack_require__(16),
    __webpack_require__(2),
    __webpack_require__(12),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, event, http, phenixWebPlayer, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var bandwidthAt720 = 3000000;
    var timeoutForStallWithoutProgressToRestart = 6000;
    var minTimeBeforeNextReload = 15000;
    var originStreamReadyDuration = 6000;

    function PhenixPlayerRenderer(streamId, uri, streamTelemetry, options, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0,
            lastCurrentTime: 0,
            lastCurrentTimeOccurenceTimestamp: 0
        };
        this._namedEvents = new event.NamedEvents();

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixPlayerRenderer.isSupported = function() {
        return phenixWebPlayer.isSupported;
    };

    PhenixPlayerRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    PhenixPlayerRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var loggerAtWarningThreshold = createWarningThresholdLogger(this._logger);

        this._throttledLogger = loggerAtWarningThreshold;
        this._element = elementToAttachTo;

        this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo);
        this._streamTelemetry.recordRebuffering(elementToAttachTo);
        this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo);
        this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo);

        setupPlayer.call(that);

        if (that._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
        _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

        that._dimensionsChangedMonitor.start(this, elementToAttachTo);

        return elementToAttachTo;
    };

    PhenixPlayerRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._streamTelemetry.stop();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            that._waitingForFinalization = true;

            try {
                that._player.dispose();

                that._logger.info('[%s] Phenix live stream has been destroyed', that._streamId);

                finalizeStreamEnded();
            } catch (e) {
                that._logger.error('[%s] Error while destroying Phenix live stream player [%s]', that._streamId, e.code, e);

                finalizeStreamEnded();

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
            }
        }
    };

    PhenixPlayerRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = this._player.getStats();
        var currentTime = stat.currentTime || this._element.currentTime;
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;

        if (stat.isNative && stat.deliveryType === 'Hls') {
            stat.currentTime = trueCurrentTime - stat.lag;
        }

        if (!stat.isNative) {
            stat.lag = Math.max(0.0, trueCurrentTime - currentTime);
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    PhenixPlayerRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixPlayerRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    PhenixPlayerRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function setupPlayer() {
        var that = this;
        var playerOptions = _.assign({bandwidthToStartAt: bandwidthAt720}, that._options);

        if (_.isNumber(that._options.targetMinBufferSize)) {
            playerOptions.targetMinBufferSize = that._options.targetMinBufferSize;
            playerOptions.targetBufferSizeInMS = that._options.targetMinBufferSize * 1000;
        }

        if (_.includes(this._manifestUri, '.mpd')) {
            if (that._options.isDrmProtectedContent) {
                playerOptions.drm = {
                    'com.widevine.alpha': {
                        serverCertificateUrl: that._options.widevineServiceCertificateUrl,
                        mediaKeySystemConfiguration: {persistentState: 'required'}
                    },
                    'com.microsoft.playready': {licenseServerUrl: that._options.playreadyLicenseUrl}
                };
            }
        }

        var webPlayer = new phenixWebPlayer.WebPlayer(this._throttledLogger, this._element, playerOptions);
        var timeSinceOriginStreamStart = _.now() - this._options.originStartTime;

        if (timeSinceOriginStreamStart < originStreamReadyDuration && this._options.isDrmProtectedContent && _.includes(this._manifestUri, '.m3u8')) {
            setTimeout(_.bind(webPlayer.start, webPlayer, that._manifestUri), originStreamReadyDuration);
        } else {
            webPlayer.start(that._manifestUri);
        }

        that._player = webPlayer;

        _.addEventListener(that._player, 'error', _.bind(handleError, that));
    }

    function handleError(e) {
        if (canReload.call(this) && e && (e.code === 3 || e.severity === phenixWebPlayer.errors.severity.RECOVERABLE)) {
            this._logger.warn('Reloading unhealthy stream after error event [%s]', e);

            return reloadIfAble.call(this);
        }

        this._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
    }

    function reload() {
        this._player.dispose();

        this._player = null;

        this.start(this._element);
    }

    function reloadIfAble() {
        if (!canReload.call(this)) {
            return;
        }

        this._logger.warn('Reloading unhealthy stream that was active for at least [%s] seconds', minTimeBeforeNextReload / 1000);

        this._lastReloadTime = _.now();

        reload.call(this);
    }

    function canReload() {
        var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || _.now() - this._lastReloadTime > minTimeBeforeNextReload;

        return this._element && !this._waitForLastChunk && this._player && this._element.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Phenix live stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);
            var isStalled = this._lastProgress.lastCurrentTime !== this._element.currentTime;

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;

            if (!isStalled) {
                this._lastProgress.lastCurrentTimeOccurenceTimestamp = _.now();
            }

            var hasExceededStallTimeout = this._lastProgress.lastCurrentTimeOccurenceTimestamp && _.now() - this._lastProgress.lastCurrentTimeOccurenceTimestamp > timeoutForStallWithoutProgressToRestart;

            if (isStalled && hasExceededStallTimeout && this._element && !this._element.paused && canReload.call(this)) {
                this._logger.warn('Reloading stream after current time has not changed for [%s] seconds due to unregistered stall.', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(this);
            }
        }

        this._lastProgress.buffered = bufferedEnd;
        this._lastProgress.lastCurrentTime = this._element.currentTime;
    }

    function stalled(event) {
        var that = this;

        that._logger.info('[%s] Loading Phenix Live stream player stalled caused by [%s] event.', that._streamId, event.type);

        if (that._lastProgress.time === 0 || that._element.paused) {
            return;
        }

        var currentVideoTime = that._element.currentTime;

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));

        setTimeout(function() {
            if (that._element && that._element.currentTime === currentVideoTime && !that._element.paused && canReload.call(that)) {
                that._logger.warn('Reloading stream after being stalled for [%s] seconds', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(that);
            }
        }, timeoutForStallWithoutProgressToRestart);
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Phenix live stream player ended.', this._streamId);
    }

    // Temporary measure. The phenix-web-player logs a lot of debug, info, and trace data
    function createWarningThresholdLogger(logger) {
        var appenders = logger.getAppenders();
        var throttledLogger = new logging.Logger();

        _.forEach(appenders, function(appender) {
            if (appender instanceof logging.ConsoleAppender) {
                appender = new logging.ConsoleAppender();

                appender.setThreshold(logging.level.INFO);
            }

            throttledLogger.addAppender(appender);
        });

        throttledLogger.setUserId(logger.getUserId());
        throttledLogger.setEnvironment(logger.getEnvironment());
        throttledLogger.setApplicationVersion(logger.getApplicationVersion());
        throttledLogger.setObservableSessionId(logger.getObservableSessionId());

        return throttledLogger;
    }

    return PhenixPlayerRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(6),
    __webpack_require__(2),
    __webpack_require__(12),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var widevineServiceCertificate = null;
    var defaultBandwidthEstimateForPlayback = 2000000; // 2Mbps will select 720p by default

    function ShakaRenderer(streamId, uri, streamTelemetry, options, shaka, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0
        };
        this._namedEvents = new event.NamedEvents();
        this._shaka = shaka;

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    ShakaRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    ShakaRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;

        that._player = new this._shaka.Player(elementToAttachTo);

        that._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo);
        that._streamTelemetry.recordRebuffering(elementToAttachTo);
        that._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo);

        var playerConfig = {
            abr: {defaultBandwidthEstimate: defaultBandwidthEstimateForPlayback},
            manifest: {retryParameters: {timeout: 10000}},
            streaming: {
                rebufferingGoal: 2,
                bufferingGoal: 10,
                bufferBehind: 30,
                retryParameters: {
                    timeout: 10000,
                    maxAttempts: 10,
                    backoffFactor: 1.1
                }
            }
        };

        if (this._options.isDrmProtectedContent) {
            checkBrowserSupportForWidevineDRM.call(that);
            unwrapLicenseResponse.call(that, that._player);
            addDrmSpecificsToPlayerConfig.call(that, playerConfig, that._options, function(err, updatedPlayerConfig) {
                if (!err) {
                    loadPlayer(updatedPlayerConfig);
                } else {
                    that._logger.error('Failed to add DRM configuration to shaka player', err);

                    throw err;
                }
            });
        } else {
            loadPlayer(playerConfig);
        }

        function loadPlayer(config) {
            that._player.configure(config);

            if (that._options.receiveAudio === false) {
                elementToAttachTo.muted = true;
            }

            _.addEventListener(that._player, 'error', function(e) {
                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['player', e]);
            });

            _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
            _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

            that._player.load(that._manifestUri).then(function() {
                that._logger.info('[%s] DASH live stream has been loaded', that._streamId);

                if (_.isFunction(elementToAttachTo.play)) {
                    elementToAttachTo.play();
                }
            }).catch(function(e) {
                that._logger.error('[%s] Error while loading DASH live stream [%s]', that._streamId, e.code, e);

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
            });

            that._dimensionsChangedMonitor.start(this, elementToAttachTo);
            that._element = elementToAttachTo;
        }

        return elementToAttachTo;
    };

    ShakaRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._streamTelemetry.stop();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            var destroyIgnored = that._player.destroy()
                .then(function() {
                    that._logger.info('[%s] Shaka live stream player has been destroyed', that._streamId);
                }).then(function() {
                    finalizeStreamEnded();
                }).catch(function(e) {
                    that._logger.error('[%s] Error while destroying shaka live stream player [%s]', that._streamId, e.code, e);

                    finalizeStreamEnded();

                    that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
                });

            that._waitingForFinalization = true;
        }
    };

    ShakaRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0,
                lag: 0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = _.assign(this._player.getStats(), {
            currentTime: 0,
            lag: 0
        });
        var currentTime = _.get(this._element, ['currentTime'], 0);
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = Math.max(0.0, trueCurrentTime - currentTime);

        if (this._element) {
            stat.currentTime = currentTime;
            stat.lag = lag;
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    ShakaRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    ShakaRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    ShakaRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Shaka live stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;
        }

        this._lastProgress.buffered = bufferedEnd;
    }

    function stalled() {
        var that = this;

        that._logger.info('[%s] Loading Shaka live stream player stream stalled.', that._streamId);

        if (that._lastProgress.time === 0) {
            return;
        }

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Shaka live stream player ended.', this._streamId);
    }

    function checkBrowserSupportForWidevineDRM() {
        var error;

        if (!_.isFunction(Uint8Array)) {
            error = 'Uint8Array support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }

        if (!_.isFunction(rtc.global.atob)) {
            error = 'rtc.global.atob support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }
    }

    function unwrapLicenseResponse(player) {
        var that = this;

        player.getNetworkingEngine().registerResponseFilter(function(type, response) {
            // Only manipulate license responses:
            if (type.toString() === that._shaka.net.NetworkingEngine.RequestType.LICENSE.toString()) {
                var binaryResponseAsTypedArray = new Uint8Array(response.data);
                var responseAsString = String.fromCharCode.apply(null, binaryResponseAsTypedArray);
                var parsedResponse = JSON.parse(responseAsString);
                var base64License = parsedResponse.license;
                var decodedLicense = rtc.global.atob(base64License);

                response.data = new Uint8Array(decodedLicense.length);

                for (var i = 0; i < decodedLicense.length; ++i) {
                    response.data[i] = decodedLicense.charCodeAt(i);
                }

                if (parsedResponse.trackRestrictions) {
                    player.configure({restrictions: parsedResponse.trackRestrictions});
                }
            }
        });
    }

    function addDrmSpecificsToPlayerConfig(playerConfig, options, callback) {
        if (!playerConfig.drm) {
            playerConfig.drm = {};
        }

        if (!playerConfig.drm.advanced) {
            playerConfig.drm.advanced = {};
        }

        if (!playerConfig.manifest) {
            playerConfig.manifest = {};
        }

        if (!playerConfig.manifest.dash) {
            playerConfig.manifest.dash = {};
        }

        // Add browser specific DRM calls here
        // Currently we support Widevine only
        addWidevineConfigToPlayerConfig.call(this, playerConfig, options, callback);
    }

    // ToDo pull into singleton so widevineServiceCertificate stays per browser session
    function addWidevineConfigToPlayerConfig(playerConfig, options, callback) {
        playerConfig['manifest']['dash']['customScheme'] = function(element) {
            if (element.getAttribute('schemeIdUri') === 'com.phenixrts.widevine' || element.getAttribute('schemeIdUri') === 'com.phenixp2p.widevine') {
                return [{
                    keySystem: 'com.widevine.alpha',
                    licenseServerUri: decodeURIComponent(element.getAttribute('widevineLicenseServerUrl'))
                }];
            }
        };

        function addToPlayerconfig(error, serverCertificateResponse) {
            if (error) {
                callback(error);

                return;
            }

            widevineServiceCertificate = serverCertificateResponse.data; // Cache so that we can reuse

            playerConfig.drm.advanced['com.widevine.alpha'] = {
                'serverCertificate': convertBinaryStringToUint8Array(serverCertificateResponse.data),
                'persistentStateRequired': true,
                'distinctiveIdentifierRequired': false
            };

            callback(null, playerConfig);
        }

        if (widevineServiceCertificate) {
            addToPlayerconfig(null, widevineServiceCertificate);
        } else {
            http.get(options.widevineServiceCertificateUrl, {mimeType: 'text/plain; charset=x-user-defined'}, addToPlayerconfig);
        }
    }

    function convertBinaryStringToUint8Array(bStr) {
        var len = bStr.length;
        var u8Array = new Uint8Array(len); // eslint-disable-line no-undef

        for (var i = 0; i < len; i++) {
            u8Array[i] = bStr.charCodeAt(i);
        }

        return u8Array;
    }

    return ShakaRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(2),
    __webpack_require__(61),
    __webpack_require__(60),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, ShakaRenderer, PhenixPlayerRenderer, streamEnums) {
    'use strict';

    function PhenixLiveStream(type, streamId, uri, streamTelemetry, options, shaka, logger) {
        this._type = type;
        this._streamId = streamId;
        this._uri = uri;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._shaka = shaka;
        this._logger = logger;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
    }

    PhenixLiveStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixLiveStream.prototype.createRenderer = function() {
        switch (this._type) {
        case streamEnums.types.dash.name:
            if (this._shaka) {
                this._renderer = new ShakaRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._shaka, this._logger);
            } else {
                this._renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);
            }

            break;
        case streamEnums.types.hls.name:
            this._renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);

            break;
        default:
            throw new Error('Unsupported Live stream Type ' + this._type);
        }

        var that = this;

        this._renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        this._renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
        });

        return this._renderer;
    };

    PhenixLiveStream.prototype.select = function select(trackSelectCallback) { // eslint-disable-line no-unused-vars
        this._logger.warn('[%s] selection of tracks not supported for [%s] live streams', this._streamId, this._type);

        return this;
    };

    PhenixLiveStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamEndedCallback = callback;
    };

    PhenixLiveStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamErrorCallback = callback;
    };

    PhenixLiveStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        this._logger.info('[%s] stop media stream', this._streamId);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixLiveStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
    };

    PhenixLiveStream.prototype.getMonitor = function getMonitor() {
        return null;
    };

    PhenixLiveStream.prototype.getStream = function getStream() {
        this._logger.debug('[%s] stream not available for [%s] live streams', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.isActive = function isActive() {
        return !this._isStopped;
    };

    PhenixLiveStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixLiveStream.prototype.getStats = function getStats() {
        this._logger.debug('[%s] stats not available for [%s] live streams', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.getRenderer = function getRenderer() {
        return this._renderer;
    };

    return PhenixLiveStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, streamEnums) {
    'use strict';

    function StreamWrapper(type, stream, logger) {
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(stream, 'stream');
        assert.isObject(logger, 'logger');

        this._type = type;
        this._stream = stream;
        this._logger = logger;
        this._onPlayerEnd = null;

        var that = this;

        this._stream.on(streamEnums.streamEvents.playerEnded.name, function(reason) {
            that._logger.info('[%s] [%s] player ended.', that._stream.getStreamId(), that._type);

            that._playerEnded = true;

            if (that._onPlayerEnd) {
                return that._onPlayerEnd();
            }

            that.streamEndedCallback(getStreamEndedStatus(reason), reason);
        });
    }

    StreamWrapper.prototype.on = function(name, callback) {
        return this._stream.on(name, callback);
    };

    // TODO(DY) Remove once 'on' is implemented on all Phenix Stream objects
    StreamWrapper.prototype.streamErrorCallback = function(errorSource, error) {
        if (!_.isFunction(this._stream.streamErrorCallback)) {
            this._logger.error('[%s] [%s] live stream error event [%s]', this._stream.getStreamId(), this._type, error);
        } else {
            this._logger.debug('[%s] [%s] live stream error event [%s]', this._stream.getStreamId(), this._type, error);
            this._stream.streamErrorCallback(this._stream, errorSource, error);
        }
    };

    StreamWrapper.prototype.streamEndedCallback = function(status, reason, waitForPlayerEnd) {
        var renderer = this._stream.getRenderer();

        if (this._isStreamEnded) {
            return;
        }

        if (waitForPlayerEnd && !this._onPlayerEnd && this._stream.isActive() && renderer && !this._playerEnded) {
            this._onPlayerEnd = _.bind(this.streamEndedCallback, this, status, reason);

            this._logger.info('[%s] [%s] stream ended. Waiting for end of player.', this._stream.getStreamId(), this._type);

            if (renderer) {
                renderer.stop(reason, waitForPlayerEnd);
            }

            return;
        }

        this._isStreamEnded = true;

        if (_.isFunction(this._stream.streamEndedCallback)) {
            this._stream.streamEndedCallback(this._stream, status, reason);
        }

        this._stream.stop();

        if (renderer) {
            renderer.stop(reason, waitForPlayerEnd);
        }
    };

    StreamWrapper.prototype.dataQualityChangedCallback = function(status, reason) {
        var renderer = this._stream.getRenderer();

        if (!renderer) {
            return;
        }

        if (typeof renderer.dataQualityChangedCallback === 'function') {
            renderer.dataQualityChangedCallback(renderer, status, reason);
        }
    };

    StreamWrapper.prototype.getPhenixMediaStream = function() {
        return this._stream;
    };

    function getStreamEndedStatus(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        default:
            return 'custom';
        }
    }

    return StreamWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable, rtc) {
    function NetworkMonitor(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();

        this._disposables.add(this._namedEvents);

        if (!this.isSupported()) {
            return this._logger.info('Network monitor is not supported.');
        }

        this._lastNetworkStats = getStats.call(this);

        detectNetworkTypeChange.call(this);
    }

    NetworkMonitor.prototype.isSupported = function() {
        return rtc.global.navigator && rtc.global.navigator.connection;
    };

    NetworkMonitor.prototype.getDownlinkThroughputCapacity = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.downlink || rtc.global.navigator.connection.downlinkMax;
    };

    NetworkMonitor.prototype.getEffectiveType = function() {
        if (!this.isSupported()) {
            return 'Unknown';
        }

        return rtc.global.navigator.connection.effectiveType || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.getRoundTripTime = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.rtt || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.onNetworkChange = function(callback) {
        if (!this.isSupported()) {
            return;
        }

        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('NetworkChange', callback);
    };

    NetworkMonitor.prototype.dispose = function() {
        this._disposables.dispose();
    };

    function getStats() {
        return {
            downlinkThroughputCapacity: this.getDownlinkThroughputCapacity(),
            effectiveType: this.getEffectiveType(),
            rtt: this.getRoundTripTime()
        };
    }

    function detectNetworkTypeChange() {
        var that = this;

        navigator.connection.addEventListener('change', function() {
            that._namedEvents.fireAsync('NetworkChange', [getStats.call(that), that._lastNetworkStats]);

            that._lastNetworkStats = getStats.call(that);
        });
    }

    return NetworkMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(33),
    __webpack_require__(64),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, applicationActivityDetector, NetworkMonitor, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-05-24T22:12:07Z' || '?';

    function SessionTelemetry(logger, metricsTransmitter) {
        this._environment = defaultEnvironment;
        this._version = sdkVersion;
        this._sessionId = null;
        this._properties = {
            resource: 'Session',
            kind: 'Event'
        };
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._networkMonitor = new NetworkMonitor(this._logger);
        this._start = _.now();
        this._disposables = new disposable.DisposableList();
        this._records = [];

        this._disposables.add(applicationActivityDetector.onBackground(_.bind(recordForegroundChange, this, false)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(recordForegroundChange, this, true)));

        if (!this._networkMonitor.isSupported()) {
            return;
        }

        this._disposables.add(this._networkMonitor.onNetworkChange(_.bind(logNetworkStatsChange, this)));
        this._disposables.add(this._networkMonitor);

        recordNetworkTypeState.call(this);
        recordNetworkDownlinkThroughputCapacity.call(this);
        recordNetworkRTT.call(this);
    }

    SessionTelemetry.prototype.setSessionId = function(sessionId) {
        if (!sessionId && this._sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Stopped',
                elapsed: this.elapsed()
            }, since());
        }

        this._sessionId = sessionId;

        if (sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Initialized',
                elapsed: this.elapsed()
            }, since());
            recordAllMetrics.call(this);
            recordForegroundState.call(this);

            if (this._networkMonitor.isSupported()) {
                recordNetworkTypeState.call(this);
                recordNetworkDownlinkThroughputCapacity.call(this);
                recordNetworkRTT.call(this);
            }
        }
    };

    SessionTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    SessionTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    SessionTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    SessionTelemetry.prototype.dispose = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Session telemetry stopped');
    };

    function recordForegroundState() {
        var isForeground = applicationActivityDetector.isForeground();
        var timeSinceLastChange = applicationActivityDetector.getTimeSinceLastChange();
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Session has started in the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordForegroundChange(isForeground, timeSinceLastChange) {
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordNetworkTypeState() {
        var type = this._networkMonitor.getEffectiveType();

        this.recordMetric('NetworkType', {string: type}, null, {resource: phenixRTC.browser});

        logMetric.call(this, '[%s] has started with Network effective type of [%s]', this._sessionId ? 'Session' : 'Application', type);
    }

    function recordNetworkTypeChange(newType, previousType) {
        var newNetworkType = newType || this._networkMonitor.getEffectiveType();
        var previousNetworkType = previousType;

        this.recordMetric('NetworkType', {string: newNetworkType}, {string: previousNetworkType}, {resource: phenixRTC.browser});

        logMetric.call(this, 'Network effective type has changed to [%s] from [%s]', newNetworkType, previousNetworkType || 'New');
    }

    function recordNetworkRTT(newValue, oldValue) {
        var newRTT = newValue || this._networkMonitor.getRoundTripTime();
        var oldRTT = oldValue || -1;

        this.recordMetric('RoundTripTime', {uint32: newRTT}, {uint32: oldRTT}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network RTT [%s]', newRTT);
        }

        logMetric.call(this, 'Network RTT changed to [%s] from [%s]', newRTT, oldRTT);
    }

    function recordNetworkDownlinkThroughputCapacity(newValue, oldValue) {
        var newCapacity = newValue || this._networkMonitor.getDownlinkThroughputCapacity();
        var oldCapacity = oldValue || -1;

        this.recordMetric('DownlinkThroughputCapacity', {uint64: newCapacity}, {uint64: oldCapacity}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network downlink throughput capacity [%s]', newCapacity);
        }

        logMetric.call(this, 'Network downlink throughput capacity changed to [%s] from [%s]', newCapacity, oldCapacity);
    }

    function logNetworkStatsChange(newStats, oldStats) {
        if (oldStats.downlinkThroughputCapacity !== newStats.downlinkThroughputCapacity) {
            recordNetworkDownlinkThroughputCapacity.call(this, newStats.downlinkThroughputCapacity, oldStats.downlinkThroughputCapacity);
        }

        if (oldStats.rtt !== newStats.rtt) {
            recordNetworkRTT.call(this, newStats.rtt, oldStats.rtt);
        }

        if (oldStats.effectiveType !== newStats.effectiveType) {
            recordNetworkTypeChange.call(this, newStats.effectiveType, oldStats.effectiveType);
        }
    }

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var sessionTelemetryPrepend = '[%s] [SessionTelemetry] [%s] ';
        var message = sessionTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._sessionId, _.now() - this._start].concat(loggingArguments);

        this._logger.debug.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        if (!this._sessionId) {
            return this._records.push({
                record: record,
                since: since
            });
        }

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, null, this._environment, this._version, annotatedRecord);
    }

    function recordAllMetrics() {
        if (!this._sessionId) {
            return;
        }

        var that = this;
        var numberOfRecordsToPush = this._records.length;

        while (numberOfRecordsToPush > 0) {
            var records = this._records.splice(numberOfRecordsToPush - 1, 1);

            if (records.length === 1) {
                recordMetricRecord.call(that, records[0].record, records[0].since);
            }

            numberOfRecordsToPush--;
        }
    }

    return SessionTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-05-24T22:12:07Z' || '?';

    function StreamTelemetry(sessionId, logger, metricsTransmitter) {
        assert.isStringNotEmpty(sessionId, 'sessionId');

        this._environment = defaultEnvironment;
        this._version = sdkVersion;
        this._sessionId = sessionId;
        this._properties = {};
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._start = _.now();
        this._disposables = new disposable.DisposableList();

        logMetric.call(this, 'Stream initializing');
    }

    StreamTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    StreamTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    StreamTelemetry.prototype.setStreamId = function(streamId) {
        assert.isStringNotEmpty(streamId, 'streamId');

        if (this._streamId) {
            throw new Error('Stream ID can only be set once.');
        }

        this._streamId = streamId;

        var now = _.now();

        recordMetricRecord.call(this, {
            metric: 'Initialized',
            elapsed: this.elapsed() - now + this._start // Adjust for delay to get the stream ID
        }, since() - (now - this._start) / 1000); // Adjust for delay to get the stream ID);
    };

    StreamTelemetry.prototype.setStartOffset = function(startOffset) {
        assert.isNumber(startOffset, 'startOffset');

        if (this._startOffset) {
            throw new Error('Start offset can only be set once.');
        }

        this._startOffset = startOffset;

        this.recordMetric('Offset', {uint64: startOffset});
    };

    StreamTelemetry.prototype.getStartOffset = function() {
        return this._startOffset;
    };

    StreamTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    StreamTelemetry.prototype.stop = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Stream stopped');
    };

    StreamTelemetry.prototype.recordTimeToFirstFrame = function(video) {
        var that = this;
        var startRecordingFirstFrame = _.now();
        var timeOfFirstFrame;

        var listenForFirstFrame = function() {
            if (timeOfFirstFrame) {
                return;
            }

            timeOfFirstFrame = _.now() - startRecordingFirstFrame;

            that.recordMetric('TimeToFirstFrame', {uint64: timeOfFirstFrame});
            logMetric.call(that, 'First frame [%s]', timeOfFirstFrame);

            timeToFirstFrameListenerDisposable.dispose();
        };

        _.addEventListener(video, 'loadeddata', listenForFirstFrame);

        var timeToFirstFrameListenerDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'loadeddata', listenForFirstFrame);
        });

        // Ensure TTFF is not recorded if stop is called before first frame
        this._disposables.add(timeToFirstFrameListenerDisposable);
    };

    // TODO(dy) Add logging for bit rate changes using PC.getStats

    StreamTelemetry.prototype.recordVideoResolutionChanges = function(renderer, video) {
        var that = this;
        var lastResolution = {
            width: video.videoWidth,
            height: video.videoHeight
        };

        renderer.addVideoDisplayDimensionsChangedCallback(function(renderer, dimensions) {
            if (lastResolution.width === dimensions.width && lastResolution.height === dimensions.height) {
                return;
            }

            that.recordMetric('ResolutionChanged', {string: dimensions.width + 'x' + dimensions.height}, {string: lastResolution.width + 'x' + lastResolution.height});

            lastResolution = {
                width: dimensions.width,
                height: dimensions.height
            };

            logMetric.call(that, 'Resolution changed: width [%s] height [%s]', dimensions.width, dimensions.height);
        });
    };

    StreamTelemetry.prototype.recordRebuffering = function(video) {
        var that = this;
        var videoStalled;
        var lastProgress;

        var listenForStall = function() {
            if (videoStalled) {
                return;
            }

            that.recordMetric('Stalled');

            videoStalled = _.now();

            logMetric.call(that, '[buffering] Stream has stalled');
        };

        var listenForContinuation = function(event) {
            var bufferLength = video.buffered.length;
            var hasNotProgressedSinceLastProgressEvent = event.type === 'playing'
                                                        || bufferLength > 0 ? (event.type === 'progress'
                                                        || event.type === 'timeupdate')
                                                        && video.buffered.end(bufferLength - 1) === lastProgress : true;

            if (!videoStalled || (!bufferLength && phenixRTC.browser !== 'Edge') || hasNotProgressedSinceLastProgressEvent) {
                return;
            }

            if (event.type === 'progress') {
                lastProgress = video.buffered.end(bufferLength - 1);
            }

            var timeSinceStop = _.now() - videoStalled;

            that.recordMetric('Buffering', {uint64: timeSinceStop});

            logMetric.call(that, '[buffering] Stream has recovered from stall after [%s] milliseconds', timeSinceStop);

            videoStalled = null;
        };

        _.addEventListener(video, 'stalled', listenForStall);
        _.addEventListener(video, 'pause', listenForStall);
        _.addEventListener(video, 'suspend', listenForStall);
        _.addEventListener(video, 'play', listenForContinuation);
        _.addEventListener(video, 'playing', listenForContinuation);
        _.addEventListener(video, 'progress', listenForContinuation);
        _.addEventListener(video, 'timeupdate', listenForContinuation);

        this._disposables.add(new disposable.Disposable(function() {
            _.removeEventListener(video, 'stalled', listenForStall);
            _.removeEventListener(video, 'pause', listenForStall);
            _.removeEventListener(video, 'suspend', listenForStall);
            _.removeEventListener(video, 'play', listenForContinuation);
            _.removeEventListener(video, 'playing', listenForContinuation);
            _.removeEventListener(video, 'progress', listenForContinuation);
            _.removeEventListener(video, 'timeupdate', listenForContinuation);
        }));
    };

    StreamTelemetry.prototype.recordVideoPlayingAndPausing = function(video) {
        var that = this;

        var listenForPlayChange = function() {
            if (video.paused) {
                that.recordMetric('Playing', {boolean: false});
            } else {
                that.recordMetric('Playing', {boolean: true});
            }
        };

        _.addEventListener(video, 'pause', listenForPlayChange);
        _.addEventListener(video, 'playing', listenForPlayChange);

        this._disposables.add(new disposable.Disposable(function() {
            _.removeEventListener(video, 'pause', listenForPlayChange);
            _.removeEventListener(video, 'playing', listenForPlayChange);
        }));
    };

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var streamTelemetryPrepend = '[%s] [StreamTelemetry] [%s] ';
        var message = streamTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._streamId, _.now() - this._start].concat(loggingArguments);

        this._logger.debug.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, this._streamId, this._environment, this._version, annotatedRecord);
    }

    return StreamTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(17),
    __webpack_require__(2),
    __webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, proto, rtc, telemetryProto) {
    function MetricsTransmitter(uri) {
        assert.isString(uri, 'uri');

        this._loggingUrl = '/telemetry/metrics';
        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + this._loggingUrl, [telemetryProto], 'telemetry.SubmitMetricRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    MetricsTransmitter.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    MetricsTransmitter.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    MetricsTransmitter.prototype.submitMetric = function submit(metric, since, sessionId, streamId, environment, version, value) {
        if (!this._isEnabled) {
            return;
        }

        assert.isStringNotEmpty(metric, 'metric');
        assert.isObject(value, 'value');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentStreamId = streamId;
        this._mostRecentEnvironment = environment;
        this._mostRecentVersion = version;

        addMetricToRecords.call(this, metric, value);
    };

    function addMetricToRecords(metric, value) {
        var record = _.assign({}, value, {
            metric: metric,
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });

        this._batchHttpProtocol.addRecord(record);
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            metric: 'MetricDropped',
            value: {uint64: deleteRecords},
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return MetricsTransmitter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(39),
    __webpack_require__(67)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, MetricsTransmitter) {
    var config = {
        urls: {
            local: '',
            staging: 'https://telemetry-stg.phenixrts.com',
            production: 'https://telemetry.phenixrts.com'
        }
    };

    function MetricsTransmitterFactory() {
        this._metricsTransmitters = {};
    }

    MetricsTransmitterFactory.prototype.createMetricsTransmitter = function createMetricsTransmitter(pcastBaseUri) {
        var env = environment.parseEnvFromPcastBaseUri(pcastBaseUri || '');

        var telemetryServerUrl = config.urls[env];

        if (!this._metricsTransmitters[env]) {
            this._metricsTransmitters[env] = createNewTransmitter.call(this, telemetryServerUrl);
        }

        return this._metricsTransmitters[env];
    };

    function createNewTransmitter(uri) {
        var transmitter = new MetricsTransmitter(uri);

        if (!uri) {
            transmitter.setEnabled(false);
        }

        return transmitter;
    }

    return new MetricsTransmitterFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc) {
    'use strict';

    var listenForMediaStreamTrackChangesTimeout = 2000;

    function UserMediaProvider(logger, screenShareExtensionManager, onScreenShare) {
        assert.isObject(logger, 'logger');
        assert.isObject(screenShareExtensionManager, 'screenShareExtensionManager');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        this._logger = logger;
        this._screenShareExtensionManager = screenShareExtensionManager;
        this._onScreenShare = onScreenShare;
    }

    UserMediaProvider.prototype.getUserMedia = function(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        getUserMedia.call(this, options, callback);
    };

    function getUserMedia(options, callback) {
        var that = this;

        var onUserMediaSuccess = function onUserMediaSuccess(status, stream) {
            if (that._gumStreams) {
                that._gumStreams.push(stream);
            }

            callback(that, status, stream);
        };

        var onUserMediaFailure = function onUserMediaFailure(status, stream, error) {
            if (options.screenAudio) {
                that._logger.warn('Screen capture with audio is only supported on Windows or Chrome OS.');
            }

            callback(that, status, stream, error);
        };

        var hasScreen = options.screen || options.screenAudio;
        var hasVideoOrAudio = options.video || options.audio;

        if (!(hasScreen && hasVideoOrAudio)) {
            return getUserMediaStream.call(that, options, onUserMediaSuccess, onUserMediaFailure);
        }

        return getUserMediaStream.call(that, {screen: options.screen}, function success(status, screenStream) {
            return getUserMediaStream.call(that, {
                audio: options.audio,
                video: options.video
            }, function screenSuccess(status, stream) {
                addTracksToWebRTCStream(stream, screenStream.getTracks());

                onUserMediaSuccess(status, stream);
            }, function failure(status, stream, error) {
                stopWebRTCStream(screenStream);

                onUserMediaFailure(status, stream, error);
            });
        }, onUserMediaFailure);
    }

    function getUserMediaStream(options, successCallback, failureCallback) {
        var that = this;

        var onUserMediaCancelled = function onUserMediaCancelled() {
            failureCallback('cancelled', null);
        };

        var onUserMediaFailure = function onUserMediaFailure(e) {
            failureCallback(getUserMediaErrorStatus(e), undefined, e);
        };

        var onUserMediaSuccess = function onUserMediaSuccess(stream) {
            wrapNativeMediaStream.call(that, stream);

            successCallback('ok', stream);
        };

        return getUserMediaConstraints.call(this, options, function(error, response) {
            if (_.get(response, ['status']) !== 'ok') {
                return onUserMediaFailure(error);
            }

            if (response.status === 'cancelled') {
                return onUserMediaCancelled();
            }

            var constraints = response.constraints;

            if (that._onScreenShare && (options.screen || options.screenAudio) && rtc.browser === 'Chrome') {
                constraints = that._onScreenShare(constraints);

                if (!constraints) {
                    throw new Error('onScreenShare must return an object of user media constraints');
                }
            }

            try {
                rtc.getUserMedia(constraints, onUserMediaSuccess, onUserMediaFailure);
            } catch (e) {
                onUserMediaFailure(e);
            }
        });
    }

    function getUserMediaConstraints(options, callback) {
        var that = this;

        if (options.screen) {
            return that._screenShareExtensionManager.isScreenSharingEnabled(function(isEnabled) {
                if (isEnabled) {
                    return that._screenShareExtensionManager.getScreenSharingConstraints(options, callback);
                }

                return that._screenShareExtensionManager.installExtension(function(error, response) {
                    if (error || (response && response.status !== 'ok')) {
                        return callback(error, response);
                    }

                    return that._screenShareExtensionManager.getScreenSharingConstraints(options, callback);
                });
            });
        }

        var constraints = {
            audio: options.audio || false,
            video: options.video || false
        };

        callback(null, {
            status: 'ok',
            constraints: constraints
        });
    }

    var getUserMediaErrorStatus = function getUserMediaErrorStatus(e) {
        var status;

        if (e.code === 'unavailable') {
            status = 'conflict';
        } else if (e.message === 'permission-denied') {
            status = 'permission-denied';
        } else if (e.name === 'PermissionDeniedError') { // Chrome
            status = 'permission-denied';
        } else if (e.name === 'InternalError' && e.message === 'Starting video failed') { // FF (old getUserMedia API)
            status = 'conflict';
        } else if (e.name === 'SourceUnavailableError') { // FF
            status = 'conflict';
        } else if (e.name === 'SecurityError' && e.message === 'The operation is insecure.') { // FF
            status = 'permission-denied';
        } else {
            status = 'failed';
        }

        return status;
    };

    function wrapNativeMediaStream(stream) {
        var lastTrackEnabledStates = {};
        var lastTrackReadyStates = {};
        var that = this;

        setTimeout(function listenForTrackChanges() {
            if (isStreamStopped(stream)) {
                return;
            }

            _.forEach(stream.getTracks(), function(track) {
                if (rtc.global.Event && _.hasIndexOrKey(lastTrackEnabledStates, track.id) && lastTrackEnabledStates[track.id] !== track.enabled) {
                    var trackEnabledChangeEvent = new rtc.global.Event('trackenabledchange');

                    trackEnabledChangeEvent.data = track;

                    track.dispatchEvent(trackEnabledChangeEvent);

                    that._logger.info('[%s] Detected track [%s] enabled change to [%s]', stream.id, track.id, track.enabled);
                }

                if (rtc.global.Event && _.hasIndexOrKey(lastTrackReadyStates, track.id) && lastTrackReadyStates[track.id] !== track.readyState) {
                    var readyStateChangeEvent = new rtc.global.Event('readystatechange');

                    readyStateChangeEvent.data = track;

                    track.dispatchEvent(readyStateChangeEvent);

                    that._logger.info('[%s] Detected track [%s] Ready State change to [%s]', stream.id, track.id, track.readyState);
                }

                lastTrackEnabledStates[track.id] = track.enabled;
                lastTrackReadyStates[track.id] = track.readyState;
            });

            setTimeout(listenForTrackChanges, listenForMediaStreamTrackChangesTimeout);
        }, listenForMediaStreamTrackChangesTimeout);
    }

    function addTracksToWebRTCStream(stream, tracks) {
        if (!stream || !_.isFunction(stream.addTrack)) {
            return;
        }

        _.forEach(tracks, function(track) {
            stream.addTrack(track);
        });
    }

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isNotUndefined(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop)) {
            stream.stop();
        }

        if (stream && _.isFunction(stream.getTracks)) {
            var tracks = stream.getTracks();

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];

                track.stop();
            }
        }
    }

    return UserMediaProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global chrome */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, phenixRTC) {
    'use strict';

    var defaultChromePCastScreenSharingExtensionId = 'icngjadgidcmifnehjcielbmiapkhjpn';
    var defaultFirefoxPCastScreenSharingAddOn = _.freeze({
        url: 'https://addons.mozilla.org/firefox/downloads/file/474686/pcast_screen_sharing-1.0.3-an+fx.xpi',
        iconUrl: 'https://phenixp2p.com/public/images/phenix-logo-unicolor-64x64.png',
        hash: 'sha256:4972e9718ea7f7c896abc12d1a9e664d5f3efe498539b082ab7694f9d7af4f3b'
    });
    var firefoxInstallationCheckInterval = 100;
    var firefoxMaxInstallationChecks = 450;
    var minimumSupportFirefoxVersionForUnWhiteListedScreenShare = 52;

    function ScreenShareExtensionManager(options, logger) {
        options = options || {};

        assert.isObject(options, 'options');
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._screenSharingExtensionId = options.screenSharingExtensionId || getDefaultExtensionId();
        this._screenSharingAddOn = options.screenSharingAddOn || defaultFirefoxPCastScreenSharingAddOn;
        this._screenSharingEnabled = false;
        this._isInitializedObservable = new observable.Observable(false);

        if (phenixRTC.browser === 'Chrome' && this._screenSharingExtensionId) {
            addLinkHeaderElement.call(this);
        }

        checkForScreenSharingCapability.call(this, _.bind(handleCheckForScreenSharing, this));
    }

    ScreenShareExtensionManager.prototype.isScreenSharingEnabled = function(callback) {
        var that = this;

        return waitForInitialized.call(this, function() {
            return callback(that._screenSharingEnabled);
        });
    };

    ScreenShareExtensionManager.prototype.installExtension = function(callback) {
        return waitForInitialized.call(this, _.bind(installScreenShareExtension, this, callback));
    };

    ScreenShareExtensionManager.prototype.getScreenSharingConstraints = function(options, callback) {
        return waitForInitialized.call(this, _.bind(getScreenSharingConstraints, this, options, callback));
    };

    ScreenShareExtensionManager.prototype.toString = function() {
        return 'ScreenShareExtensionManager[' + phenixRTC.browser + ']';
    };

    function handleCheckForScreenSharing(isEnabled) {
        this._isInitializedObservable.setValue(true);

        this._screenSharingEnabled = isEnabled;
    }

    function checkForScreenSharingCapability(callback) {
        var that = this;

        if (phenixRTC.browser === 'Chrome' && that._screenSharingExtensionId) {
            var runtimeEnvironment = getRuntime.call(this);

            if (!runtimeEnvironment) {
                return callback(false);
            }

            try {
                runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {type: 'version'}, function(response) {
                    if (response && response.status === 'ok') {
                        that._logger.info('Screen sharing enabled using version [%s]', response.version);
                        callback(true);
                    } else {
                        that._logger.info('Screen sharing NOT available');
                        callback(false);
                    }
                });
            } catch (e) {
                if (e.message) {
                    that._logger.warn(e.message, e);
                }

                callback(false);
            }
        } else if (phenixRTC.browser === 'Firefox' && phenixRTC.browserVersion >= minimumSupportFirefoxVersionForUnWhiteListedScreenShare) {
            callback(true);
        } else if (phenixRTC.browser === 'Firefox' && typeof phenixRTC.global.PCastScreenSharing === 'object') {
            callback(true);
        } else {
            callback(false);
        }
    }

    function waitForInitialized(callback) {
        if (this._isInitializedObservable.getValue()) {
            return callback();
        }

        var initializedSubscription = this._isInitializedObservable.subscribe(function() {
            initializedSubscription.dispose();

            return callback();
        });
    }

    function getChromeWebStoreLink() {
        return 'https://chrome.google.com/webstore/detail/' + this._screenSharingExtensionId;
    }

    function addLinkHeaderElement() {
        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

        if (typeof document !== "object") {
            return;
        }

        var links = document.getElementsByTagName('link');

        for (var i = 0; i < links.length; i++) {
            if (links[i].href === chromeWebStoreUrl) {
                // Link already present
                return;
            }
        }

        this._logger.debug('Adding Chrome Web Store link [%s]', chromeWebStoreUrl);

        var link = document.createElement('link');

        link.rel = 'chrome-webstore-item';
        link.href = chromeWebStoreUrl;

        document.getElementsByTagName('head')[0].appendChild(link);
    }

    function getScreenSharingConstraints(options, callback) {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return requestMediaSourceIdWithRuntime.call(this, function(error, response) {
                if (error || (response && response.status !== 'ok')) {
                    return callback(error, response);
                }

                // Default to allow the user to request audio if using an older extension or not providing the options
                // If it fails to request the audio the user will receive an error
                if (!response.data && !response.options) {
                    response.options = {canRequestAudioTrack: true};
                }

                // TODO(DY) Remove once customers have updated their extensions
                if (response.data && _.hasIndexOrKey(response.data, 'hasAudio') && !response.options) {
                    response.options = {canRequestAudioTrack: response.data.hasAudio};
                }

                callback(null, {
                    status: 'ok',
                    constraints: mapChromeConstraints(options, response.streamId, response.options)
                });
            });
        case 'Firefox':
            callback(null, {
                status: 'ok',
                constraints: mapNewerConstraints(options)
            });

            break;
        default:
            callback(new Error('not-supported'), {status: 'not-supported'});

            break;
        }
    }

    function requestMediaSourceIdWithRuntime(callback) {
        var that = this;
        var runtimeEnvironment = getRuntime.call(this);

        if (!runtimeEnvironment) {
            return callback(new Error('not-available'));
        }

        try {
            runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {
                type: 'get-desktop-media',
                sources: ['screen', 'window', 'tab', 'audio']
            }, function(response) {
                var shouldCheckIfScreenShareStillInstalled = !response;

                if (shouldCheckIfScreenShareStillInstalled) {
                    return checkForScreenSharingCapability.call(that, function(isEnabled) {
                        handleCheckForScreenSharing.call(that, isEnabled);

                        return callback(new Error('extension-failure'));
                    });
                }

                if (response.status !== 'ok') {
                    return callback(new Error(response.status), response);
                }

                callback(null, response);
            });
        } catch (e) {
            if (e.message) {
                that._logger.warn(e.message);
            }

            callback(e, {status: 'failed'});
        }
    }

    function mapChromeConstraints(options, id, captureOptions) {
        var constraints = {};

        if (_.isObject(options) && _.isObject(options.screen)) {
            constraints.video = options.screen;
        }

        if (_.isObject(options) && _.isObject(options.screenAudio) && captureOptions.canRequestAudioTrack) {
            constraints.audio = options.screenAudio;
        }

        if (options.screen) {
            _.set(constraints, ['video', 'mandatory'], {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: id
            });
        }

        if (options.screenAudio && captureOptions.canRequestAudioTrack) {
            _.set(constraints, ['audio', 'mandatory'], {
                chromeMediaSource: 'system',
                chromeMediaSourceId: id
            });
        }

        return constraints;
    }

    function mapNewerConstraints(options, id) {
        var constraints = {video: {}};

        if (typeof options === 'object' && typeof options.screen === 'object') {
            constraints.video = options.screen;
        }

        if (id) {
            constraints.video.mediaSourceId = id;
        }

        constraints.video.mediaSource = constraints.video.mediaSource || 'window';

        return constraints;
    }

    function installScreenShareExtension(callback) {
        var that = this;

        if (that._screenSharingEnabled) {
            return;
        }

        var installCallback = function installCallback(error, status) {
            if (status === 'cancelled') {
                return callback(null, {status: 'cancelled'});
            }

            if (status !== 'ok') {
                return callback(new Error('screen-sharing-installation-failed'), {status: status});
            }

            checkForScreenSharingCapability.call(that, function(screenSharingEnabled) {
                that._screenSharingEnabled = screenSharingEnabled;

                if (!that._screenSharingEnabled) {
                    return callback(new Error('screen-sharing-installation-failed'), {status: status});
                }

                callback(null, {status: 'ok'});
            });
        };

        switch (phenixRTC.browser) {
        case 'Chrome':
            tryInstallChromeScreenSharingExtension.call(that, installCallback);

            break;
        case 'Firefox':
            tryInstallFirefoxScreenSharingExtension.call(that, installCallback);

            break;
        default:
            callback(new Error('not-supported'), {status: 'not-supported'});

            break;
        }
    }

    function tryInstallChromeScreenSharingExtension(callback) {
        var that = this;
        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

        try {
            chrome.webstore.install(chromeWebStoreUrl, function successCallback() {
                return callback(null, 'ok');
            }, function failureCallback(reason) {
                if (reason) {
                    if (reason.match(/cancelled/ig)) {
                        that._logger.info('User cancelled screen sharing');

                        return callback(new Error(reason), 'cancelled');
                    }

                    that._logger.warn(reason);
                }

                return callback(new Error(reason || 'failed'), 'failed');
            });
        } catch (e) {
            if (e.message) {
                that._logger.warn(e.message);
            }

            callback(e, 'failed');
        }
    }

    function tryInstallFirefoxScreenSharingExtension(callback) {
        try {
            var params = {
                "PCast Screen Sharing": {
                    URL: this._screenSharingAddOn.url,
                    IconURL: this._screenSharingAddOn.iconUrl,
                    Hash: this._screenSharingAddOn.hash,
                    toString: function() {
                        return this.URL;
                    }
                }
            };
            var attemptsLeft = firefoxMaxInstallationChecks;
            var intervalId;
            var success = function success() {
                if (intervalId) {
                    clearInterval(intervalId);
                }

                callback(null, 'ok');
            };

            var failure = function failure() {
                if (intervalId) {
                    clearInterval(intervalId);
                }

                callback(new Error('failed'), 'failed');
            };

            intervalId = setInterval(function() {
                if (typeof phenixRTC.global.PCastScreenSharing === 'object') {
                    return success();
                }

                if (attemptsLeft-- < 0) {
                    return failure();
                }
            }, firefoxInstallationCheckInterval);

            InstallTrigger.install(params, function xpiInstallCallback(url, status) { // eslint-disable-line no-undef
                // Callback only works for verified sites
                if (status === 0) {
                    success();
                } else {
                    failure();
                }
            });
        } catch (e) {
            if (e.message) {
                this._logger.warn(e.message);
            }

            callback('failed', e);
        }
    }

    function getRuntime() {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Chrome':
            if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
                that._logger.info('Screen sharing NOT available. Runtime not supported');

                return null;
            }

            return chrome.runtime;
        case 'Firefox':
        default:
            return null;
        }
    }

    function getDefaultExtensionId() {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return defaultChromePCastScreenSharingExtensionId;
        case 'Firefox':
        default:
            return '';
        }
    }

    return ScreenShareExtensionManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(6),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, http, disposable) {
    'use strict';

    var measurementsPerEndPoint = 4;
    var endpointClosenessThreshold = 30;

    function ClosestEndPointResolver(logger, version, onClosestEndpointFound, onAnEndpointResolved) {
        assert.isObject(logger, 'logger');
        assert.isStringNotEmpty(version, 'version');
        assert.isFunction(onClosestEndpointFound, 'onClosestEndpointFound');

        if (onAnEndpointResolved) {
            assert.isFunction(onAnEndpointResolved, 'onAnEndpointResolved');
        }

        this._logger = logger;
        this._version = version;
        this._onClosestEndpointFound = onClosestEndpointFound;

        if (onAnEndpointResolved) {
            this._onAnEndpointResolved = onAnEndpointResolved;
        }

        this._done = false;
        this._minTime = Number.MAX_VALUE;
        this._minResponseText = '';
        this._disposables = new disposable.DisposableList();
    }

    ClosestEndPointResolver.prototype.isResolved = function isResolved() {
        return this._done;
    };

    ClosestEndPointResolver.prototype.dispose = function dispose() {
        this._disposables.dispose();
    };

    ClosestEndPointResolver.prototype.measurementCallback = function measurementCallback(endPoint, time, responseText) {
        if (time < this._minTime) {
            this._logger.info('Current closest end point is [%s] with latency of [%s] ms', responseText, time);
            this._minTime = time;
            this._minResponseText = responseText;
        }

        return this.isResolved();
    };

    ClosestEndPointResolver.prototype.completeCallback = function completeCallback(endPoint) { // eslint-disable-line no-unused-vars
        if (this._minResponseText && this._minTime < Number.MAX_VALUE && !this.isResolved()) {
            this._done = true;

            return this._onClosestEndpointFound(null, {
                uri: this._minResponseText,
                roundTripTime: this._minTime
            });
        }
    };

    ClosestEndPointResolver.prototype.resolveAll = function resolveAll(endPoints) {
        for (var i = 0; i < endPoints.length; i++) {
            this.resolve(endPoints[i], measurementsPerEndPoint);
        }
    };

    ClosestEndPointResolver.prototype.resolve = function resolve(endPoint, measurements) {
        var that = this;
        var measurement = 1;
        var successfulAttempts = 0;

        var nextMeasurement = function nextMeasurement(endPoint) {
            var maxAttempts = 1;
            var start = _.now();

            that._logger.info('[%s] Checking end point [%s]', measurement, endPoint);

            var requestDisposable = http.getWithRetry(endPoint, {
                timeout: 15000,
                queryParameters: {
                    version: that._version,
                    _: _.now()
                },
                retryOptions: {maxAttempts: maxAttempts}
            }, function(err, response) {
                var end = _.now();
                var time = end - start;
                var timeAboveThreshold = time > endpointClosenessThreshold;

                if (that._onAnEndpointResolved) {
                    if (err) {
                        that._onAnEndpointResolved(err);
                    } else {
                        that._onAnEndpointResolved(null, {
                            time: time,
                            endPoint: endPoint
                        });
                    }
                }

                measurement++;

                if (!err) {
                    if (that.measurementCallback(endPoint, time, response.data)) {
                        // Done
                        return;
                    }

                    successfulAttempts++;
                }

                if (measurement <= measurements && !that.isResolved() && (timeAboveThreshold || err)) {
                    if (err) {
                        that._logger.info('Retrying after failure to resolve end point [%s] with [%s]', endPoint, err);
                    }

                    return nextMeasurement(endPoint);
                } else if (successfulAttempts === 0) {
                    return that._logger.warn('Unable to resolve end point [%s] with [%s]', endPoint, err);
                }

                return that.completeCallback(endPoint);
            });

            that._disposables.add(requestDisposable);
        };

        nextMeasurement(endPoint);
    };

    return ClosestEndPointResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(71)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ClosestEndPointResolver) {
    return ClosestEndPointResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var chatProto = {
        "package": "chat",
        "options": {"optimize_for": "LITE_RUNTIME"},
        "messages": [
            {
                "name": "Room",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "name",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "description",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "RoomType",
                        "name": "type",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "bridgeId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "pin",
                        "id": 8
                    }
                ]
            },
            {
                "name": "Stream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "StreamType",
                        "name": "type",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "TrackState",
                        "name": "audioState",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "TrackState",
                        "name": "videoState",
                        "id": 4
                    }
                ]
            },
            {
                "name": "Member",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "MemberState",
                        "name": "state",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 6
                    }
                ]
            },
            {
                "name": "MemberUpdate",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "updateStreams",
                        "id": 7,
                        "options": {"default": false}
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "MemberState",
                        "name": "state",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 6
                    }
                ]
            },
            {
                "name": "ChatUser",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 4
                    }
                ]
            },
            {
                "name": "ChatMessage",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "messageId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "ChatUser",
                        "name": "from",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "message",
                        "id": 4
                    }
                ]
            },
            {
                "name": "CreateRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    }
                ]
            },
            {
                "name": "CreateRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    }
                ]
            },
            {
                "name": "JoinRoom",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "Member",
                        "name": "member",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 6
                    }
                ]
            },
            {
                "name": "JoinRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "Member",
                        "name": "self",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "UpdateRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    }
                ]
            },
            {
                "name": "UpdateRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "UpdateMember",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "MemberUpdate",
                        "name": "member",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 4
                    }
                ]
            },
            {
                "name": "UpdateMemberResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 2
                    }
                ]
            },
            {
                "name": "LeaveRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    }
                ]
            },
            {
                "name": "LeaveRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DestroyRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DestroyRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "GetRoomInfo",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "applicationId",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "secret",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    }
                ]
            },
            {
                "name": "GetRoomInfoResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomEvent",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "RoomEventType",
                        "name": "eventType",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 7
                    }
                ]
            },
            {
                "name": "SendMessageToRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "ChatMessage",
                        "name": "chatMessage",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SendMessageToRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "FetchRoomConversation",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "afterMessageId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "beforeMessageId",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "limit",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "RoomConversationOption",
                        "name": "options",
                        "id": 6
                    }
                ]
            },
            {
                "name": "FetchRoomConversationResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "ChatMessage",
                        "name": "chatMessages",
                        "id": 2
                    }
                ]
            },
            {
                "name": "RoomConversationEvent",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "RoomConversationEventType",
                        "name": "eventType",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "ChatMessage",
                        "name": "chatMessages",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomBridgeIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "bridgeId",
                        "id": 2
                    }
                ]
            }
        ],
        "enums": [
            {
                "name": "RoomType",
                "values": [
                    {
                        "name": "DirectChat",
                        "id": 0
                    },
                    {
                        "name": "MultiPartyChat",
                        "id": 1
                    },
                    {
                        "name": "ModeratedChat",
                        "id": 2
                    },
                    {
                        "name": "TownHall",
                        "id": 3
                    },
                    {
                        "name": "Channel",
                        "id": 4
                    }
                ]
            },
            {
                "name": "MemberRole",
                "values": [
                    {
                        "name": "Participant",
                        "id": 0
                    },
                    {
                        "name": "Moderator",
                        "id": 1
                    },
                    {
                        "name": "Presenter",
                        "id": 2
                    },
                    {
                        "name": "Audience",
                        "id": 3
                    }
                ]
            },
            {
                "name": "MemberState",
                "values": [
                    {
                        "name": "Active",
                        "id": 0
                    },
                    {
                        "name": "Passive",
                        "id": 1
                    },
                    {
                        "name": "HandRaised",
                        "id": 2
                    },
                    {
                        "name": "Inactive",
                        "id": 3
                    },
                    {
                        "name": "Offline",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomEventType",
                "values": [
                    {
                        "name": "MemberJoined",
                        "id": 0
                    },
                    {
                        "name": "MemberLeft",
                        "id": 1
                    },
                    {
                        "name": "MemberUpdated",
                        "id": 2
                    },
                    {
                        "name": "RoomUpdated",
                        "id": 3
                    },
                    {
                        "name": "RoomEnded",
                        "id": 4
                    }
                ]
            },
            {
                "name": "TrackState",
                "values": [
                    {
                        "name": "TrackEnabled",
                        "id": 0
                    },
                    {
                        "name": "TrackDisabled",
                        "id": 1
                    },
                    {
                        "name": "TrackEnded",
                        "id": 2
                    }
                ]
            },
            {
                "name": "StreamType",
                "values": [
                    {
                        "name": "User",
                        "id": 0
                    },
                    {
                        "name": "Presentation",
                        "id": 1
                    },
                    {
                        "name": "Audio",
                        "id": 2
                    }
                ]
            },
            {
                "name": "RoomConversationOption",
                "values": [
                    {
                        "name": "Subscribe",
                        "id": 0
                    }
                ]
            },
            {
                "name": "RoomConversationEventType",
                "values": [
                    {
                        "name": "Message",
                        "id": 0
                    }
                ]
            }
        ]
    };

    return chatProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var pcastProto = {
        "package": "pcast",
        "options": {"optimize_for": "LITE_RUNTIME"},
        "messages": [
            {
                "name": "Authenticate",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 9,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "clientVersion",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "device",
                        "id": 12
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "deviceId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "manufacturer",
                        "id": 13
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platform",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platformVersion",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionRouteKey",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "remoteAddress",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "applicationId",
                        "id": 8
                    }
                ]
            },
            {
                "name": "AuthenticateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "redirect",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "roles",
                        "id": 4
                    }
                ]
            },
            {
                "name": "Bye",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ByeResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SessionDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "Type",
                        "name": "type",
                        "id": 1,
                        "options": {"default": "Offer"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdp",
                        "id": 2
                    }
                ],
                "enums": [
                    {
                        "name": "Type",
                        "values": [
                            {
                                "name": "Offer",
                                "id": 0
                            },
                            {
                                "name": "Answer",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "originStreamIds",
                        "id": 10
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectUri",
                        "id": 8
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "connectOptions",
                        "id": 9
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userAgent",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescription",
                        "name": "setRemoteDescription",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescription",
                        "name": "createOfferDescription",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescription",
                        "name": "createAnswerDescription",
                        "id": 7
                    }
                ]
            },
            {
                "name": "IceServer",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "urls",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "username",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "credential",
                        "id": 3
                    }
                ]
            },
            {
                "name": "RtcConfiguration",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "BundlePolicy",
                        "name": "bundlePolicy",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "iceCandidatePoolSize",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "IceServer",
                        "name": "iceServers",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "IceTransportPolicy",
                        "name": "iceTransportPolicy",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "peerIdentity",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "RtcpMuxPolicy",
                        "name": "rtcpMuxPolicy",
                        "id": 7
                    }
                ],
                "enums": [
                    {
                        "name": "BundlePolicy",
                        "values": [
                            {
                                "name": "BundlePolicyBalanced",
                                "id": 1
                            },
                            {
                                "name": "BundlePolicyMaxCompat",
                                "id": 2
                            },
                            {
                                "name": "BundlePolicyMaxBundle",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "IceTransportPolicy",
                        "values": [
                            {
                                "name": "IceTransportPolicyAll",
                                "id": 1
                            },
                            {
                                "name": "IceTransportPolicyPublic",
                                "id": 2
                            },
                            {
                                "name": "IceTransportPolicyRelay",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "RtcpMuxPolicy",
                        "values": [
                            {
                                "name": "RtcpMuxPolicyNegotiate",
                                "id": 1
                            },
                            {
                                "name": "RtcpMuxPolicyRequire",
                                "id": 2
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "instanceRouteKey",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "streamUris",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "RtcConfiguration",
                        "name": "rtcConfiguration",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescriptionResponse",
                        "name": "setRemoteDescriptionResponse",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescriptionResponse",
                        "name": "createOfferDescriptionResponse",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescriptionResponse",
                        "name": "createAnswerDescriptionResponse",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 10,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetRemoteDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetRemoteDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateOfferDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateOfferDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateAnswerDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateAnswerDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IceCandidate",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "candidate",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "sdpMLineIndex",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdpMid",
                        "id": 3
                    }
                ]
            },
            {
                "name": "AddIceCandidates",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "IceCandidate",
                        "name": "candidates",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 4,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "AddIceCandidatesResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "UpdateStreamState",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "signalingState",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceGatheringState",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceConnectionState",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 5,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "UpdateStreamStateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "DestroyStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "DestroyStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ConnectionDisconnected",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "reasonCode",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "description",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ConnectionDisconnectedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SourceStreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 6
                    }
                ]
            },
            {
                "name": "SourceStreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 5
                    }
                ]
            },
            {
                "name": "StreamEndedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 3
                    }
                ]
            },
            {
                "name": "StreamIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamArchived",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "startTime",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SessionEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "duration",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ResourceIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "routeKey",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ResourceIdleResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamPlaylist",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "PlaylistType",
                        "name": "playlistType",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isVariant",
                        "id": 5,
                        "options": {"default": true}
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Live",
                                "id": 0
                            },
                            {
                                "name": "OnDemand",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamRtmp",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "height",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "bitrate",
                        "id": 4
                    }
                ]
            },
            {
                "name": "SendEventToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendEventToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SendRequestToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendRequestToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "CreateStream",
                        "name": "createStream",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "CreateStreamResponse",
                        "name": "createStreamResponse",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupPlaylistStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "PlaylistStreamManifest",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "manifest",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isProtectedContent",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupPlaylistStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "PlaylistStreamManifest",
                        "name": "manifests",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "StreamDataQuality",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityStatus",
                        "name": "status",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityReason",
                        "name": "reason",
                        "id": 5
                    }
                ],
                "enums": [
                    {
                        "name": "DataQualityStatus",
                        "values": [
                            {
                                "name": "NoData",
                                "id": 0
                            },
                            {
                                "name": "AudioOnly",
                                "id": 1
                            },
                            {
                                "name": "All",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "DataQualityReason",
                        "values": [
                            {
                                "name": "None",
                                "id": 0
                            },
                            {
                                "name": "UploadLimited",
                                "id": 1
                            },
                            {
                                "name": "DownloadLimited",
                                "id": 2
                            },
                            {
                                "name": "PublisherLimited",
                                "id": 3
                            },
                            {
                                "name": "NetworkLimited",
                                "id": 4
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamDataQualityResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "CallbackEvent",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 1,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "entity",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "what",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "data",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Uri",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "protocol",
                        "id": 1,
                        "options": {"default": "http"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "host",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "port",
                        "id": 3,
                        "options": {"default": 80}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "method",
                        "id": 4,
                        "options": {"default": "POST"}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "path",
                        "id": 5,
                        "options": {"default": "/"}
                    }
                ]
            },
            {
                "name": "SetApplicationCallback",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "Uri",
                        "name": "callback",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetApplicationCallbackResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "endpoint",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueAuthenticationToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IssueAuthenticationTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueStreamToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "alternateOriginStreamIds",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "permissive",
                        "id": 7,
                        "options": {"default": false}
                    }
                ]
            },
            {
                "name": "IssueStreamTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueDrmToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    }
                ]
            },
            {
                "name": "IssueDrmTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "TerminateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "TerminateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DeleteStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "DeleteStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "Stream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ListStreams",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "length",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 5
                    }
                ]
            },
            {
                "name": "ListStreamsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "length",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUris",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUrisResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "Playlist",
                        "name": "playlists",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "StreamMetadata",
                        "name": "streamInfo",
                        "id": 3
                    }
                ],
                "messages": [
                    {
                        "name": "PlaylistMetadata",
                        "fields": [
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "bitrate",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "height",
                                "id": 2
                            },
                            {
                                "rule": "optional",
                                "type": "float",
                                "name": "framesPerSecond",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "StreamMetadata",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "startTime",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "string",
                                "name": "endTime",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "Playlist",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "name",
                                "id": 1
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistType",
                                "name": "type",
                                "id": 2
                            },
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "uri",
                                "id": 3
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isVariant",
                                "id": 4
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isProtected",
                                "id": 5
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistMetadata",
                                "name": "info",
                                "id": 6
                            }
                        ]
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Hls",
                                "id": 0
                            },
                            {
                                "name": "Dash",
                                "id": 1
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return pcastProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(17),
    __webpack_require__(2),
    __webpack_require__(74),
    __webpack_require__(73)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, proto, phenixRTC, pcastProto, chatProto) {
    'use strict';

    var apiVersion = 5;

    function PCastProtocol(uri, deviceId, version, logger) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isString(deviceId, 'deviceId');
        assert.isStringNotEmpty(version, 'version');
        assert.isObject(logger, 'logger');

        this._deviceId = deviceId;
        this._version = version;
        this._logger = logger;
        this._mqWebSocket = new proto.MQWebSocket(uri, this._logger, [pcastProto, chatProto], apiVersion);
        this._observableSessionId = new observable.Observable(null).extend({rateLimit: 0});
    }

    PCastProtocol.prototype.onEvent = function(eventName, handler) {
        return this._mqWebSocket.onEvent(eventName, handler);
    };

    PCastProtocol.prototype.disconnect = function() {
        this._observableSessionId.setValue(null);

        return this._mqWebSocket.disconnect();
    };

    PCastProtocol.prototype.authenticate = function(authToken, callback) {
        assert.isStringNotEmpty(authToken, 'authToken');
        assert.isFunction(callback, 'callback');

        var authenticate = {
            apiVersion: this._mqWebSocket.getApiVersion(),
            clientVersion: this._version,
            deviceId: this._deviceId,
            platform: phenixRTC.browser,
            platformVersion: phenixRTC.browserVersion.toString(),
            authenticationToken: authToken
        };

        if (this.getSessionId()) {
            authenticate.sessionId = this.getSessionId();
        }

        var that = this;

        return this._mqWebSocket.sendRequest('pcast.Authenticate', authenticate, function(error, response) {
            if (response) {
                var previousSessionId = that._observableSessionId.getValue();

                if (previousSessionId && previousSessionId !== response.sessionId) {
                    that._mqWebSocket.disposeOfPendingRequests();
                }

                that._observableSessionId.setValue(response.sessionId);
            }

            return callback(error, response);
        });
    };

    PCastProtocol.prototype.getSessionId = function() {
        return this._observableSessionId.getValue();
    };

    PCastProtocol.prototype.getObservableSessionId = function() {
        return this._observableSessionId;
    };

    PCastProtocol.prototype.bye = function(reason, callback) {
        assert.isStringNotEmpty(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var bye = {
            sessionId: this.getSessionId(),
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.Bye', bye, callback);
    };

    PCastProtocol.prototype.setupStream = function(streamType, streamToken, options, rtt, callback) {
        assert.isStringNotEmpty(streamType, 'streamType');
        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var browser = phenixRTC.browser || 'UnknownBrowser';
        var browserWithVersion = browser + '-' + (phenixRTC.browserVersion || 0);
        var rttString = 'rtt[http]=' + rtt;
        var setupStream = {
            streamToken: streamToken,
            createStream: {
                sessionId: this.getSessionId(),
                options: ['data-quality-notifications', rttString],
                connectUri: options.connectUri,
                connectOptions: options.connectOptions || [],
                tags: options.tags || [],
                userAgent: _.get(phenixRTC, ['global', 'navigator', 'userAgent'], browserWithVersion)
            }
        };

        if (options.negotiate) {
            setupStream.createStream.createOfferDescription = {
                streamId: '',
                options: [streamType, browser, browserWithVersion],
                apiVersion: this._mqWebSocket.getApiVersion()
            };

            if (typeof screen !== 'undefined') {
                setupStream.createStream.createOfferDescription.options.push('screen=' + screen.width + 'x' + screen.height);
            }
        }

        if (options.receiveAudio === false) {
            setupStream.createStream.options.push('no-audio');
        }

        if (options.receiveVideo === false) {
            setupStream.createStream.options.push('no-video');
        }

        return this._mqWebSocket.sendRequest('pcast.SetupStream', setupStream, callback);
    };

    PCastProtocol.prototype.setAnswerDescription = function(streamId, sdp, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(sdp, 'sdp');
        assert.isFunction(callback, 'callback');

        var setRemoteDescription = {
            streamId: streamId,
            sessionDescription: {
                type: 'Answer',
                sdp: sdp
            },
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.SetRemoteDescription', setRemoteDescription, callback);
    };

    PCastProtocol.prototype.addIceCandidates = function(streamId, candidates, options, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isArray(candidates, 'candidates');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var sanitizedCandidates = _.map(candidates, function(candidate, index) {
            assert.isStringNotEmpty(candidate.candidate, 'candidate[' + index + '].candidate');
            assert.isNumber(candidate.sdpMLineIndex, 'candidate[' + index + '].sdpMLineIndex');
            assert.isStringNotEmpty(candidate.sdpMid, 'candidate[' + index + '].sdpMid');

            return {
                candidate: candidate.candidate,
                sdpMLineIndex: candidate.sdpMLineIndex,
                sdpMid: candidate.sdpMid
            };
        });

        var addIceCandidates = {
            streamId: streamId,
            candidates: sanitizedCandidates,
            options: options,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.AddIceCandidates', addIceCandidates, callback);
    };

    PCastProtocol.prototype.updateStreamState = function(streamId, signalingState, iceGatheringState, iceConnectionState, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(signalingState, 'signalingState');
        assert.isStringNotEmpty(iceGatheringState, 'iceGatheringState');
        assert.isStringNotEmpty(iceConnectionState, 'iceConnectionState');
        assert.isFunction(callback, 'callback');

        var updateStreamState = {
            streamId: streamId,
            signalingState: signalingState,
            iceGatheringState: iceGatheringState,
            iceConnectionState: iceConnectionState,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.UpdateStreamState', updateStreamState, callback);
    };

    PCastProtocol.prototype.destroyStream = function(streamId, reason, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isString(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var destroyStream = {
            streamId: streamId,
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.DestroyStream', destroyStream, callback);
    };

    PCastProtocol.prototype.getRoomInfo = function(roomId, alias, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        var getRoomInfo = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId()
        };

        return this._mqWebSocket.sendRequest('chat.GetRoomInfo', getRoomInfo, callback);
    };

    PCastProtocol.prototype.createRoom = function(room, callback) {
        assert.isObject(room, 'room');
        assert.isStringNotEmpty(room.name, 'room.name');
        assert.isStringNotEmpty(room.type, 'room.type');
        assert.isStringNotEmpty(room.description, 'room.description');
        assert.isFunction(callback, 'callback');

        var createRoom = {
            sessionId: this.getSessionId(),
            room: room
        };

        return this._mqWebSocket.sendRequest('chat.CreateRoom', createRoom, callback);
    };

    PCastProtocol.prototype.enterRoom = function(roomId, alias, member, timestamp, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var joinRoom = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId(),
            member: member,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.JoinRoom', joinRoom, callback);
    };

    PCastProtocol.prototype.leaveRoom = function(roomId, timestamp, callback) {
        assert.isString(roomId, 'roomId');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var leaveRoom = {
            roomId: roomId,
            sessionId: this.getSessionId(),
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.LeaveRoom', leaveRoom, callback);
    };

    PCastProtocol.prototype.updateMember = function(roomId, member, timestamp, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        member.updateStreams = member.hasOwnProperty('streams');

        var updateMember = {
            sessionId: this.getSessionId(),
            roomId: roomId,
            member: member,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateMember', updateMember, callback);
    };

    PCastProtocol.prototype.updateRoom = function(room, timestamp, callback) {
        assert.isObject(room, 'room');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var updateRoom = {
            sessionId: this.getSessionId(),
            room: room,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateRoom', updateRoom, callback);
    };

    PCastProtocol.prototype.sendMessageToRoom = function(roomId, chatMessage, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(chatMessage, 'chatMessage');

        var sendMessage = {
            roomId: roomId,
            chatMessage: chatMessage
        };

        return this._mqWebSocket.sendRequest('chat.SendMessageToRoom', sendMessage, callback);
    };

    PCastProtocol.prototype.subscribeToRoomConversation = function(sessionId, roomId, batchSize, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isNumber(batchSize, 'batchSize');

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize,
            options: ['Subscribe']
        };

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.getMessages = function(sessionId, roomId, batchSize, afterMessageId, beforeMessageId, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');

        if (!beforeMessageId || !afterMessageId) {
            assert.isNumber(batchSize, 'batchSize');
        }

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize || 0,
            options: []
        };

        if (beforeMessageId) {
            assert.isStringNotEmpty(beforeMessageId, 'beforeMessageId');

            fetchRoomConversation.beforeMessageId = beforeMessageId;
        }

        if (afterMessageId) {
            assert.isStringNotEmpty(afterMessageId, 'afterMessageId');

            fetchRoomConversation.afterMessageId = afterMessageId;
        }

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.toString = function() {
        return 'PCastProtocol[' + this._mqWebSocket.toString() + ']';
    };

    return PCastProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable) {
    'use strict';

    var defaultDocumentFocusIntervalTimeout = 3000;

    function ApplicationActivityDetector() {
        this._namedEvents = new event.NamedEvents();
        this._timeOfLastTabFocusChange = _.now();
        this._disposables = new disposable.DisposableList();
        this._isForeground = true;

        this._disposables.add(this._namedEvents);

        detectTabFocusChange.call(this);
    }

    ApplicationActivityDetector.prototype.isForeground = function() {
        return this._isForeground;
    };

    ApplicationActivityDetector.prototype.getTimeSinceLastChange = function() {
        return _.now() - this._timeOfLastTabFocusChange;
    };

    ApplicationActivityDetector.prototype.onForeground = function isEnabled(callback) {
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('foreground', callback);
    };

    ApplicationActivityDetector.prototype.onBackground = function setEnabled(callback) {
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('background', callback);
    };

    function detectTabFocusChange() {
        if (canDetectDirectly()) {
            return detectTabFocusChangeDirectly.call(this);
        }

        detectTabFocusChangeIndirectly.call(this);
    }

    function canDetectDirectly() {
        return typeof chrome !== 'undefined' && chrome.extension && chrome.extension.onRequest; // eslint-disable-line no-undef
    }

    function detectTabFocusChangeDirectly() {
        if (!canDetectDirectly()) {
            return;
        }

        var that = this;

        chrome.extension.onRequest.addListener(function(request, sender, sendResponse) { // eslint-disable-line no-undef
            if(request === "is_selected") {
                chrome.tabs.getSelected(null, function(tab){ // eslint-disable-line no-undef
                    var isForeground = tab.id === sender.tab.id;

                    setFocusState.call(that, isForeground);

                    if(isForeground) {
                        sendResponse(true);
                    } else {
                        sendResponse(false);
                    }
                });
            }
        });
    }

    function detectTabFocusChangeIndirectly() {
        var hidden;
        var visibilityChange;
        var that = this;

        if (typeof document !== "object") {
            return;
        }

        if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        } else if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        }

        function handleVisibilityChange() {
            var isForeground = !document[hidden];

            setFocusState.call(that, isForeground);
        }

        if (typeof document.addEventListener !== "undefined" && typeof document[hidden] !== "undefined") {
            _.addEventListener(document, visibilityChange, handleVisibilityChange, false);

            that._disposables.add(new disposable.Disposable(function() {
                _.removeEventListener(document, visibilityChange, handleVisibilityChange, false);
            }));
        } else {
            listenForDocumentFocus.call(that);
        }
    }

    function listenForDocumentFocus() {
        var that = this;

        that._documentFocusInterval = setInterval(function() {
            var isForeground = document.hasFocus();

            setFocusState.call(that, isForeground);
        }, defaultDocumentFocusIntervalTimeout);

        that._disposables.add(new disposable.Disposable(function() {
            if (_.isNumber(that._documentFocusInterval)) {
                clearInterval(that._documentFocusInterval);
            }

            that._documentFocusInterval = null;
        }));
    }

    function setFocusState(isForeground) {
        assert.isBoolean(isForeground, 'isForeground');

        if (this._isForeground === isForeground) {
            return;
        }

        if (isForeground) {
            this._isForeground = true;

            return triggerFocusChange.call(this, 'foreground');
        }

        this._isForeground = false;

        return triggerFocusChange.call(this, 'background');
    }

    function triggerFocusChange(state) {
        var currentTime = _.now();
        var timeElapsedOfLastState = currentTime - this._timeOfLastTabFocusChange;

        this._timeOfLastTabFocusChange = currentTime;
        this._namedEvents.fire(state, [timeElapsedOfLastState]);
    }

    return ApplicationActivityDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(1),
    __webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert, global) {
    'use strict';

    return {
        toString: function(byteArray) {
            var begin = 0;
            var end = byteArray.length;
            var chars = [];
            var parts = [];

            if (begin === end) {
                return "";
            }

            while (begin < end) {
                chars.push(byteArray[begin++]);

                if (chars.length >= 1024) {
                    parts.push(String.fromCharCode.apply(String, chars));
                    chars = [];
                }
            }

            return parts.join('') + String.fromCharCode.apply(String, chars);
        },

        toByteArray: function(data) {
            assert.isString(data, 'data');

            var i = 0;
            var charCode;
            var byteArray = new global.Uint8Array(data.length);

            while (i < data.length) {
                charCode = data.charCodeAt(i);

                if (charCode > 0xff) {
                    throw RangeError("illegal char code: " + charCode);
                }

                byteArray[i++] = charCode;
            }

            return byteArray;
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    var requestMethods = {
        'get': 'GET',
        'post': 'POST',
        'put': 'PUT',
        'delete': 'DELETE' // Delete is reserved
    };
    var defaultTimeout = 3000;
    var defaultMaxAttempts = 1;
    var defaultBackoff = 2;
    var defaultRetryDelay = 1500;
    var errorCodes = {
        clientAborted: {
            id: 4000,
            name: 'Aborted by Client'
        }
    };

    function Http() {

    }

    Http.prototype.get = function get(url, settings, callback) {
        settings = settings || {};

        validateSettings(settings);

        var requestUrl = appendQueryParameters(settings.queryParameters || {}, url);
        var xhr = getAndOpenVendorSpecificXmlHttpMethod(requestMethods.get, requestUrl, callback);
        var handleResponse = _.bind(appendResponseTimeAndContinue, this, _.now(), callback);

        if (!xhr) {
            return callback(getUnsupportedError());
        }

        if (settings.mimeType) {
            xhr.overrideMimeType(settings.mimeType);
        }

        if (settings.responseType) {
            xhr.responseType = settings.responseType;
        }

        appendDataTypeHeaders(xhr, settings);

        xhr.addEventListener('readystatechange', _.bind(handleReadyStateChange, this, xhr, settings, handleResponse));

        xhr.timeout = settings.timeout || defaultTimeout;

        xhr.send();
    };

    Http.prototype.post = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.post, url, data, settings, callback);
    };

    Http.prototype.put = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.put, url, data, settings, callback);
    };

    Http.prototype.delete = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.delete, url, data, settings, callback);
    };

    Http.prototype.getWithRetry = function getWithRetry(url, settings, callback) {
        var methodWithoutCallback = _.bind(this.get, this, url, settings);
        var requestState = {
            startTime: _.now(),
            isDisposed: false
        };

        return handleMethodWithRetry.call(this, url, settings, methodWithoutCallback, requestState, callback);
    };

    Http.prototype.postWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.post, url, data, settings, callback);
    };

    Http.prototype.putWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.put, url, data, settings, callback);
    };

    Http.prototype.deleteWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.delete, url, data, settings, callback);
    };

    function methodWithData(method, url, data, settings, callback) {
        settings = settings || {};

        validateSettings(settings);

        var requestUrl = appendQueryParameters(settings.queryParameters || {}, url);
        var xhr = getAndOpenVendorSpecificXmlHttpMethod(method, requestUrl, callback);
        var handleResponse = _.bind(appendResponseTimeAndContinue, this, _.now(), callback);

        if (!xhr) {
            return callback(getUnsupportedError());
        }

        if (settings.responseType) {
            xhr.responseType = settings.responseType;
        }

        appendDataTypeHeaders(xhr, settings);

        xhr.addEventListener('readystatechange', _.bind(handleReadyStateChange, this, xhr, settings, handleResponse));

        xhr.timeout = settings.timeout || 15000;

        xhr.send(data);
    }

    function methodRetryWithData(method, url, data, settings, callback) {
        var methodWithoutCallback = _.bind(method, this, url, data, settings);
        var requestState = {
            startTime: _.now(),
            isDisposed: false
        };

        return handleMethodWithRetry.call(this, url, settings, methodWithoutCallback, requestState, callback);
    }

    function validateSettings(settings) {
        assert.isObject(settings, 'settings');

        if (settings.queryParameters) {
            assert.isObject(settings.queryParameters, 'settings.queryParameters');
        }

        if (settings.mimeType) {
            assert.stringNotEmpty(settings.mimeType, 'settings.mimeType');
        }

        if (settings.accept) {
            assert.stringNotEmpty(settings.accept, 'settings.accept');
        }

        if (settings.contentType) {
            assert.stringNotEmpty(settings.contentType, 'settings.contentType');
        }

        if (settings.responseType) {
            assert.stringNotEmpty(settings.responseType, 'settings.responseType');
        }

        if (!_.isNullOrUndefined(settings.timeout)) {
            assert.isNumber(settings.timeout, 'settings.timeout');
        }
    }

    function appendQueryParameters(queryParameters, url) {
        var queryParameterString = _.reduce(queryParameters, function(paramString, value, key) {
            paramString += !paramString ? '?' : '&';

            return paramString + key.toString() + '=' + value.toString();
        }, '');

        return queryParameterString.length > 0 ? url + queryParameterString : url;
    }

    function getAndOpenVendorSpecificXmlHttpMethod(requestMethod, requestUrl) {
        var xhr = new XMLHttpRequest();

        if ('withCredentials' in xhr) {
            // Most browsers.
            xhr.open(requestMethod, requestUrl, true);
        } else if (typeof XDomainRequest !== 'undefined') {
            // IE8 & IE9
            xhr = new XDomainRequest();
            xhr.open(requestMethod, requestUrl);
        } else {
            return;
        }

        return xhr;
    }

    function getUnsupportedError() {
        // CORS not supported.
        var err = new Error('unsupported');

        err.code = 'unsupported';

        return err;
    }

    function appendDataTypeHeaders(xhr, settings) {
        var contentType = settings.contentType || 'application/json';
        var accept = settings.accept || contentType;

        var headers = _.assign({}, {
            'Content-Type': contentType,
            'Accept': accept
        }, _.get(settings, ['headers'], {}));

        _.forOwn(headers, function(headerValue, headerName) {
            xhr.setRequestHeader(headerName, headerValue);
        });
    }

    function handleReadyStateChange(xhr, options, callback) {
        if (xhr.readyState === 4 /* DONE */) {
            if (xhr.status === 200) {
                var responseHeaders = getXhrResponseHeaders(xhr);
                var response = {
                    data: xhr.response || xhr.responseText,
                    headers: responseHeaders,
                    rawXhr: xhr
                };

                callback(null, response);
            } else {
                var err = new Error(xhr.status === 0 ? 'timeout' : xhr.statusText);
                var additionalRetryErrorCodes = _.get(options, ['retryOptions', 'additionalRetryErrorCodes'], []);

                _.forEach(additionalRetryErrorCodes, function(code) {
                    assert.isNumber(code, 'additionalRetryErrorCode');
                });

                err.code = xhr.status;

                if ((xhr.status >= 500 && xhr.status < 600) || _.includes(additionalRetryErrorCodes, xhr.status)) {
                    err.retryable = true;
                }

                callback(err);
            }
        }
    }

    function getXhrResponseHeaders(xhr) {
        var responseHeadersString = xhr.getAllResponseHeaders();

        return _.reduce(responseHeadersString.trim().split(/[\r\n]+/), function(headers, header) {
            var parts = header.split(': ');
            var headerName = parts.shift();
            var headerValue = parts.join(': ');

            if (headerName) {
                headers[headerName] = headerValue;
            }

            return headers;
        }, {});
    }

    function appendResponseTimeAndContinue(startTime, callback, error, response) {
        if (response) {
            _.set(response, ['stats', 'successResponseTime'], _.now() - startTime);
        }

        callback(error, response);
    }

    function appendTotalResponseTimeAndContinue(startTime, attempts, callback, error, response) {
        if (response) {
            _.set(response, ['stats', 'totalResponseTimeForAllAttempts'], _.now() - startTime);
            _.set(response, ['stats', 'attempts'], attempts);
        }

        callback(error, response);
    }

    function handleMethodWithRetry(url, options, methodWithoutCallback, requestState, callback, attempt) {
        attempt = attempt || 1;

        var that = this;
        var initalRequestDelay = _.get(options, ['delay'], null);
        var retryDelay = _.get(options, ['retryOptions', 'delay'], defaultRetryDelay);
        var backoff = _.get(options, ['retryOptions', 'backoff'], defaultBackoff);
        var maxAttempts = _.get(options, ['retryOptions', 'maxAttempts'], defaultMaxAttempts);
        var requestDelay = attempt > 1 ? retryDelay * Math.pow(attempt, backoff) : initalRequestDelay;

        var retryIfFailed = function(error, response) {
            if (requestState.isDisposed) {
                return callback(getErrorByEnum(errorCodes.clientAborted));
            }

            if (error && error.retryable && attempt < maxAttempts) {
                return handleMethodWithRetry.call(that, url, options, methodWithoutCallback, requestState, callback, attempt + 1);
            }

            return appendTotalResponseTimeAndContinue.call(that, requestState.startTime, attempt, callback, error, response);
        };

        var disposableRequest = new disposable.Disposable(function() {
            if (_.isNumber(requestState.mostRecentTimeout)) {
                clearTimeout(requestState.mostRecentTimeout);
            }

            requestState.isDisposed = true;
        });

        if (!_.isNumber(initalRequestDelay) && attempt === 1 || _.get(options, ['retryOptions', 'sync'], false)) {
            methodWithoutCallback.call(that, retryIfFailed);

            return disposableRequest;
        }

        delayedRequest.call(that, url, options, methodWithoutCallback, requestState, requestDelay, retryIfFailed);

        return disposableRequest;
    }

    function delayedRequest(url, options, methodWithoutCallback, requestState, delay, callback) {
        var that = this;

        requestState.mostRecentTimeout = setTimeout(function() {
            if (requestState.isDisposed) {
                return callback(getErrorByEnum(errorCodes.clientAborted));
            }

            methodWithoutCallback.call(that, callback);
        }, delay);
    }

    function getErrorByEnum(codeEnum) {
        var errorWithEnum = new Error(codeEnum.name);

        errorWithEnum.code = codeEnum.id;

        return errorWithEnum;
    }

    return new Http();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(8),
    __webpack_require__(37),
    __webpack_require__(6),
    __webpack_require__(4),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, global, networkConnectionMonitor, http, observable, disposable) {
    var networkDisconnectHysteresisInterval = 0;
    var events = {
        capacity: 'capacity',
        error: 'error',
        response: 'response'
    };
    var localStoreKeyPrefix = '__phenixBatchHttpMessages';

    function BatchHttp(uri, options, serializeRequest, deserializeResponse) {
        assert.isStringNotEmpty(uri, 'uri');

        options = options || {};

        assert.isObject(options, 'options');

        if (options.requestType) {
            assert.isStringNotEmpty(options.requestType, 'options.requestType');
        }

        if (options.maxAttempts) {
            assert.isNumber(options.maxAttempts, 'options.maxAttempts');
        }

        if (options.maxBufferedRecords) {
            assert.isNumber(options.maxBufferedRecords, 'options.maxBufferedRecords');
        }

        if (options.maxBatchSize) {
            assert.isNumber(options.maxBatchSize, 'options.maxBatchSize');
        }

        if (options.contentType) {
            assert.isStringNotEmpty(options.contentType, 'options.maxBatchSize');
        }

        if (serializeRequest) {
            assert.isFunction(serializeRequest, 'serializeRequest');
        }

        if (deserializeResponse) {
            assert.isFunction(deserializeResponse, 'deserializeResponse');
        }

        this._localStoreKey = localStoreKeyPrefix + '|' + uri;
        this._requestType = options.requestType || 'POST';
        this._requestTimeout = options.requestTimeout || 30000;
        this._maxAttempts = options.maxAttempts || 5;
        this._maxBufferedRecords = options.maxBufferedRecords || 1000;
        this._maxBatchSize = options.maxBatchSize || 100;
        this._contentType = options.contentType || 'application/json';
        this._serializeRequest = serializeRequest;
        this._deserializeResponse = deserializeResponse;
        this._uri = uri;
        this._records = getStoredMessages.call(this) || [];
        this._isEnabled = true;
        this._namedEvents = new event.NamedEvents();
        this._canSendRequestObservable = new observable.Observable(true);
        this._disposables = new disposable.DisposableList();
        this._pending = false;
        this._unloadTriggered = false;

        this._disposables.add(this._canSendRequestObservable.subscribe(_.bind(sendMessagesIfAble, this)));
        this._disposables.add(startNetworkConnectionMonitor.call(this));
        this._disposables.add(this._namedEvents);

        setStoredMessages.call(this, []);

        sendMessagesIfAble.call(this);

        var that = this;

        _.addEventListener(global, 'beforeunload', function() {
            appendStoredMessages.call(that, that._records);

            that._unloadTriggered = true;

            that._records = [];
        });
    }

    BatchHttp.prototype.on = function on(eventName, callback) {
        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen(eventName, callback);
    };

    BatchHttp.prototype.addRecord = function(record) {
        if (this._unloadTriggered) {
            return appendStoredMessages.call(this, [record]);
        }

        this._records.push(record);

        sendMessagesIfAble.call(this);
        deleteRecordsIfAtCapacity.call(this);
    };

    BatchHttp.prototype.addRecordToBeginning = function(record) {
        this._records.unshift(record);

        sendMessagesIfAble.call(this);
        deleteRecordsIfAtCapacity.call(this);
    };

    BatchHttp.prototype.dispose = function dispose() {
        this._records = [];

        this._disposables.dispose();
    };

    function deleteRecordsIfAtCapacity() {
        if (this._records.length > this._maxBufferedRecords) {
            var deleteRecords = this._records.length - (this._maxBufferedRecords / 2);

            this._records = this._records.slice(deleteRecords);

            this._namedEvents.fireAsync(events.capacity, [null, {numberOfDeletedRecords: deleteRecords}]);
        }
    }

    function sendMessagesIfAble() {
        if (!this._canSendRequestObservable.getValue() || this._records.length === 0) {
            return;
        }

        setStatus.call(this, true);

        var storeRecords = {records: _.take(this._records, this._maxBatchSize)};

        this._records = this._records.slice(this._maxBatchSize);

        var that = this;

        try {
            sendHttpRequest.call(this, this._uri, storeRecords, function onTimeout() {
                setTimeout(function waitForDisconnectTimeout() {
                    that._records = that._records.concat(storeRecords.records);

                    setStatus.call(that, false);
                }, networkDisconnectHysteresisInterval);
            });
        } catch (e) {
            setTimeout(function() {
                setStatus.call(that, false);

                return that._namedEvents.fire(events.error, [e]);
            }, networkDisconnectHysteresisInterval);
        }
    }

    function startNetworkConnectionMonitor() {
        var that = this;

        function onNetworkStatusChange() {
            setStatus.call(that, that._pending);
        }

        return networkConnectionMonitor.listenForNetworkChange(onNetworkStatusChange);
    }

    function sendHttpRequest(url, dataToSend, onTimeout) {
        var that = this;

        var data = this._serializeRequest ? this._serializeRequest(_.assign({}, dataToSend)) : dataToSend;

        function handleResponse(error, response) {
            if (error) {
                if (error.message === 'timeout' && !isAtMaxRecords.call(that)) {
                    return onTimeout();
                }

                setStatus.call(that, false);

                return that._namedEvents.fire(events.error, [error]);
            }

            setStatus.call(that, false);

            var parsedResponse = that._deserializeResponse ? that._deserializeResponse(response.data) : response.data;

            return that._namedEvents.fire(events.response, [parsedResponse]);
        }

        switch (this._requestType) {
        case 'POST':
            return http.postWithRetry(url, data, {
                timeout: this._requestTimeout,
                contentType: this._contentType,
                retryOptions: {
                    maxAttempts: this._maxAttempts,
                    additionalRetryErrorCodes: [0]
                }
            }, handleResponse);
        default:
            throw new Error('Invalid request type');
        }
    }

    function isAtMaxRecords() {
        return this._records.length >= this._maxBufferedRecords;
    }

    function setStatus(pending) {
        this._pending = pending;

        this._canSendRequestObservable.setValue(!pending && networkConnectionMonitor.isOnline());
    }

    var getStoredMessages = function getStoredMessages() {
        if (!global.localStorage) {
            return null;
        }

        var storedMessages = global.localStorage.getItem(this._localStoreKey);

        if (storedMessages) {
            return JSON.parse(storedMessages);
        }

        return [];
    };

    var appendStoredMessages = function appendStoredMessages(messages) {
        if (!global.localStorage || !messages || messages.length === 0) {
            return null;
        }

        var messagesToStore = getStoredMessages.call(this).concat(messages);

        return setStoredMessages.call(this, messagesToStore);
    };

    var setStoredMessages = function setStoredMessages(messages) {
        if (!global.localStorage || !messages) {
            return null;
        }

        return global.localStorage.setItem(this._localStoreKey, JSON.stringify(messages));
    };

    return BatchHttp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(79)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(BatchHttp) {
    'use strict';

    return BatchHttp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(80),
    __webpack_require__(35),
    __webpack_require__(77)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, BatchHttp, MQProtocol, Binary) {
    'use strict';

    function BatchHttpProtocol(uri, protocols, type, options, apiVersion) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isArray(protocols, 'protocols');
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(options, 'options');

        var bufferedHttpOptions = _.assign({}, options || {}, {contentType: 'application/protobuf'});
        var mqProtocol = new MQProtocol(protocols, apiVersion);

        return new BatchHttp(uri, bufferedHttpOptions, _.bind(prepareRequest, this, mqProtocol, type), _.bind(prepareResponse, this, mqProtocol, type));
    }

    function prepareRequest(mqProtocol, type, data) {
        return Binary.toString(mqProtocol.encode(type, data));
    }

    function prepareResponse(mqProtocol, type, data) {
        return mqProtocol.decode(type + 'Response', Binary.toByteArray(data));
    }

    return BatchHttpProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license lxiv (c) 2014 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/lxiv for details
 */
(function() {

    /**
     * lxiv namespace.
     * @type {!Object.<string,*>}
     * @exports lxiv
     */
    var lxiv = {};

    /**
     * Character codes for output.
     * @type {!Array.<number>}
     * @inner
     */
    var aout = [
        65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
        103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
        119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
    ];

    /**
     * Character codes for input.
     * @type {!Array.<number>}
     * @inner
     */
    var ain = [];
    for (var i=0, k=aout.length; i<k; ++i)
        ain[aout[i]] = i;

    /**
     * Encodes bytes to base64 char codes.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
     *  there are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
     *  code.
     * @expose
     */
    lxiv.encode = function(src, dst) {
        var b, t;
        while ((b = src()) !== null) {
            dst(aout[(b>>2)&0x3f]);
            t = (b&0x3)<<4;
            if ((b = src()) !== null) {
                t |= (b>>4)&0xf;
                dst(aout[(t|((b>>4)&0xf))&0x3f]);
                t = (b&0xf)<<2;
                if ((b = src()) !== null)
                    dst(aout[(t|((b>>6)&0x3))&0x3f]),
                    dst(aout[b&0x3f]);
                else
                    dst(aout[t&0x3f]),
                    dst(61);
            } else
                dst(aout[t&0x3f]),
                dst(61),
                dst(61);
        }
    };

    /**
     * Decodes base64 char codes to bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     * @throws {Error} If a character code is invalid
     * @expose
     */
    lxiv.decode = function(src, dst) {
        var c, t1, t2;
        function fail(c) {
            throw Error("Illegal character code: "+c);
        }
        while ((c = src()) !== null) {
            t1 = ain[c];
            if (typeof t1 === 'undefined') fail(c);
            if ((c = src()) !== null) {
                t2 = ain[c];
                if (typeof t2 === 'undefined') fail(c);
                dst((t1<<2)>>>0|(t2&0x30)>>4);
                if ((c = src()) !== null) {
                    t1 = ain[c];
                    if (typeof t1 === 'undefined')
                        if (c === 61) break; else fail(c);
                    dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
                    if ((c = src()) !== null) {
                        t2 = ain[c];
                        if (typeof t2 === 'undefined')
                            if (c === 61) break; else fail(c);
                        dst(((t1&0x3)<<6)>>>0|t2);
                    }
                }
            }
        }
    };

    /**
     * Tests if a string is valid base64.
     * @param {string} str String to test
     * @returns {boolean} `true` if valid, otherwise `false`
     * @expose
     */
    lxiv.test = function(str) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
    };

    /* CommonJS */ if (typeof module !== 'undefined' && module["exports"])
        module["exports"] = lxiv;
    /* AMD */ else if (true)
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return lxiv; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* Global */ else
        {}

})();


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = __webpack_require__(82);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(83)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, global, lxiv) {
    'use strict';

    function StringBuilder() {
        this._tempCharCodes = [];
        this._builtString = '';
    }

    StringBuilder.prototype.push = function push() {
        if ((this._tempCharCodes.length + arguments.length) > 1024) {
            this._builtString += String.fromCharCode.apply(String, this._tempCharCodes);
            this._tempCharCodes.length = 0;
        }

        Array.prototype.push.apply(this._tempCharCodes, arguments);
    };

    StringBuilder.prototype.build = function push() {
        return this._builtString + String.fromCharCode.apply(String, this._tempCharCodes);
    };

    function stringSource(stringValue) {
        var index = 0;

        return function() {
            return index < stringValue.length ? stringValue.charCodeAt(index++) : null;
        };
    }

    return {
        toString: function(byteArray) {
            var begin = 0;
            var end = byteArray.length;
            var stringBuilder = new StringBuilder();

            lxiv.encode(function() {
                return begin < end ? byteArray[begin++] : null;
            }, _.bind(stringBuilder.push, stringBuilder));

            return stringBuilder.build();
        },

        toByteArray: function(data) {
            assert.isString(data, 'data');

            var tempArray = [];

            lxiv.decode(stringSource(data), function(b) {
                tempArray.push(b);
            });

            return new global.Uint8Array(tempArray);
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var mqProto = {
        "package": "mq",
        "messages": [
            {
                "name": "Message",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "MessageType",
                        "name": "messageType",
                        "id": 7,
                        "options": {"default": "Request"}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "requestId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "encoding",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "double",
                        "name": "wallTime",
                        "id": 6
                    }
                ],
                "enums": [
                    {
                        "name": "MessageType",
                        "values": [
                            {
                                "name": "Request",
                                "id": 0
                            },
                            {
                                "name": "Response",
                                "id": 1
                            },
                            {
                                "name": "Event",
                                "id": 2
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Error",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 1
                    }
                ]
            },
            {
                "name": "PingPong",
                "fields": [
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "originTimestamp",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "count",
                        "id": 2
                    }
                ]
            }
        ]
    };

    return mqProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function Schema(proto) {
        this._rawProtoJson = proto;
        this._parsedProto = {};
        this._enums = {};

        // First define all messages and enums
        mapProto.call(this, this._rawProtoJson, this._parsedProto);
        // Then define all fields and link types to messages or enums
        mapFields.call(this, this._rawProtoJson, this._parsedProto);
    }

    Schema.prototype.read = function read(type, pbf, end) {
        if (!this._parsedProto.messages[type]) {
            throw new Error('Unsupported proto type [' + type + ']');
        }

        return readFieldWithParent.call(this, this._parsedProto, type, pbf, end);
    };

    Schema.prototype.write = function write(type, obj, pbf) {
        if (!this._parsedProto.messages[type]) {
            throw new Error('Unsupported proto type [' + type + ']');
        }

        return writeFieldWithParent.call(this, this._parsedProto, type, obj, pbf);
    };

    function readFieldWithParent(parent, type, pbf, end) {
        var that = this;
        var response = buildDefaultObject(parent.messages[type]);

        return pbf.readFields(function(fieldId, result, pbfResult) {
            var field = parent.messages[type].fields[fieldId];

            if (field.rule === 'repeated') {
                result[field.name].push(readField.call(that, parent.messages[type], type, fieldId, pbfResult));
            } else {
                result[field.name] = readField.call(that, parent.messages[type], type, fieldId, pbfResult);
            }
        }, response, end);
    }

    function writeFieldWithParent(parent, type, obj, pbf) {
        var that = this;
        var message = parent.messages[type];

        _.forEach(_.keys(message.fields), function(fieldId) {
            return writeField.call(that, parent, type, parseInt(fieldId), obj, pbf);
        });
    }

    function writeField(parent, type, fieldId, obj, pbf, index) {
        var that = this;
        var message = parent.messages[type];
        var field = message.fields[fieldId];
        var value = obj[field.name];

        if (!_.isUndefined(index)) {
            value = value[index];
        }

        if (field.defaultValue === value || _.isUndefined(value)) {
            return;
        }

        if (_.isArray(value)) {
            if (field.rule !== 'repeated') {
                throw new Error('Invalid type. Array is not valid with rule [' + field.rule + ']');
            }

            return _.forEach(value, function(item, idx) {
                writeField.call(that, parent, type, fieldId, obj, pbf, idx);
            });
        }

        if (_.isObject(field.schema) && _.isObject(value)) {
            return pbf.writeMessage(fieldId, _.bind(writeFieldWithParent, this, field.schema.parent, field.type), value);
        }

        var valueToWrite = _.isUndefined(value) ? field.defaultValue : value;

        // Enum
        if (_.isObject(field.schema) && !field.schema.fields) {
            var enumId = _.isNumber(value) ? value : _.get(field.schema, [valueToWrite, 'id']);

            return pbf.writeVarintField(fieldId, enumId);
        }

        switch (field.type) {
        case 'string':
            return pbf.writeStringField(fieldId, valueToWrite);
        case 'float':
            return pbf.writeFloatField(fieldId, valueToWrite);
        case 'double':
            return pbf.writeDoubleField(fieldId, valueToWrite);
        case 'bool':
            return pbf.writeBooleanField(fieldId, valueToWrite);
        case 'enum':
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
            return pbf.writeVarintField(fieldId, valueToWrite);
        case 'sint32':
        case 'sint64':
            return pbf.writeSVarintField(fieldId, valueToWrite);
        case 'fixed32':
            return pbf.writeFixed32Field(fieldId, valueToWrite);
        case 'fixed64':
            return pbf.writeFixed64Field(fieldId, valueToWrite);
        case 'sfixed32':
            return pbf.writeSFixed32Field(fieldId, valueToWrite);
        case 'sfixed64':
            return pbf.writeSFixed64Field(fieldId, valueToWrite);
        case 'bytes':
            return pbf.writeBytesField(fieldId, valueToWrite);
        default:
            throw new Error('Unexpected type: ' + field.type);
        }
    }

    Schema.prototype.getDefaults = function getDefaults() {

    };

    function mapProto(proto, parent) {
        if (_.get(proto, ['messages', 'length'], 0) > 0) {
            mapMessages.call(this, proto.messages, parent);
        }

        if (_.get(proto, ['enums', 'length'], 0) > 0) {
            mapEnums.call(this, proto.enums, parent);
        }
    }

    function mapFields(proto, parent) {
        var that = this;

        _.forEach(proto.messages, function(message) {
            parent.messages[message.name].fields = _.reduce(message.fields, _.bind(mapField, this, parent.messages[message.name]), {});

            if (message.messages) {
                mapFields.call(that, message, parent.messages[message.name]);
            }
        });
    }

    function mapMessages(messages, parent) {
        var that = this;

        parent.messages = _.reduce(messages, function(parsedMessages, message) {
            if (parent[message.name]) {
                return;
            }

            parsedMessages[message.name] = {
                parent: parent,
                type: message.name
            };

            mapProto.call(that, message, parsedMessages[message.name]);

            return parsedMessages;
        }, {});
    }

    function mapEnums(enumsProto, parent) {
        parent.enums = _.reduce(enumsProto, function(enums, enumProto) {
            enums[enumProto.name] = _.reduce(enumProto.values, function(values, value) {
                values[value.name] = value;

                return values;
            }, {});

            return enums;
        }, {});
    }

    function mapField(parent, fieldObject, field) {
        // TODO(dy) add oneof property validation

        fieldObject[field.id] = {
            rule: field.rule,
            type: field.type,
            name: field.name,
            schema: mapType.call(this, field.type, parent),
            defaultValue: getDefaultValue(field.rule, field.type, _.get(field, ['options', 'default']))
        };

        return fieldObject;
    }

    function mapType(type, parent) {
        if (_.get(parent, ['messages', type])) {
            return parent.messages[type];
        }

        if (_.get(parent, ['enums', type])) {
            return parent.enums[type];
        }

        if (parent.parent) {
            return mapType(type, parent.parent);
        }

        return type;
    }

    function readField(message, type, fieldId, pbf) {
        var signed = type === 'int32' || type === 'int64' ? 'true' : '';
        var field = message.fields[fieldId];

        if (_.isObject(field.schema)) {
            // Field schema is a message
            if (field.schema.fields) {
                return readFieldWithParent.call(this, field.schema.parent, field.type, pbf, pbf.readVarint() + pbf.pos);
            }

            // Field schema is an Enum
            return _.getEnumName(field.schema, pbf.readVarint(signed));
        }

        switch (field.type) {
        case 'string':
            return pbf.readString(signed);
        case 'float':
            return pbf.readFloat(signed);
        case 'double':
            return pbf.readDouble(signed);
        case 'bool':
            return pbf.readBoolean(signed);
        case 'enum':
            return pbf.readVarint(signed);
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
            return pbf.readVarint(signed);
        case 'sint32':
        case 'sint64':
            return pbf.readSVarint(signed);
        case 'fixed32':
            return pbf.readFixed32(signed);
        case 'fixed64':
            return pbf.readFixed64(signed);
        case 'sfixed32':
            return pbf.readSFixed32(signed);
        case 'sfixed64':
            return pbf.readSFixed64(signed);
        case 'bytes':
            return pbf.readBytes(signed);
        default:
            throw new Error('Unexpected type: ' + field.type);
        }
    }

    function getDefaultValue(rule, type, optionalDefaultValue) {
        if (rule === 'repeated') {
            return [];
        }

        switch (type) {
        case 'float':
        case 'double':
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
        case 'sint32':
        case 'sint64':
        case 'fixed32':
        case 'fixed64':
        case 'sfixed32':
        case 'sfixed64':
        case 'string':
        case 'enum':
        case 'bool':
        case 'long':
        default:
            return _.isUndefined(optionalDefaultValue) ? null : optionalDefaultValue;
        }
    }

    function buildDefaultObject(message) {
        return _.reduce(message.fields, function(defaultObject, field) {
            defaultObject[field.name] = _.clone(field.defaultValue);

            return defaultObject;
        }, {});
    }

    return Schema;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 87 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(87);

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(8),
    __webpack_require__(5),
    __webpack_require__(4),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, global, event, observable, disposable) {
    'use strict';

    function NetworkConnectionMonitor() {
        // Support non-browser environments
        var isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

        this._onlineObservable = (new observable.Observable(isOnline)).extend({timeout: 0});
        this._namedEvents = new event.NamedEvents();

        _.addEventListener(global, 'online', _.bind(this._namedEvents.fire, this._namedEvents, 'online', []));
        _.addEventListener(global, 'offline', _.bind(this._namedEvents.fire, this._namedEvents, 'offline', []));
        _.addEventListener(global, 'unload', _.bind(this._namedEvents.dispose, this._namedEvents));

        this._namedEvents.listen('online', _.bind(this._onlineObservable.setValue, this._onlineObservable, true));
        this._namedEvents.listen('offline', _.bind(this._onlineObservable.setValue, this._onlineObservable, false));
    }

    NetworkConnectionMonitor.prototype.listenForNetworkChange = function listenForOffline(callback, hysteresisTimeout) {
        var disposables = new disposable.DisposableList();
        var onOnline = _.bind(handleOnline, this, callback);
        var onOffline = _.bind(handleOfflineWithHysteresis, this, callback, hysteresisTimeout);

        disposables.add(this._namedEvents.listen('online', onOnline));
        disposables.add(this._namedEvents.listen('offline', onOffline));

        return disposables;
    };

    NetworkConnectionMonitor.prototype.isOnline = function isOnline() {
        return this._onlineObservable.getValue();
    };

    function handleOfflineWithHysteresis(callback, hysteresisTimeout) {
        var that = this;

        this._onlineObservable.setValue(false);

        if (!_.isNumber(hysteresisTimeout)) {
            return callback(false);
        }

        that.offlineTimeout = setTimeout(function() {
            if (!callback || that._onlineObservable.getValue()) {
                return;
            }

            callback(false);
        }, hysteresisTimeout);
    }

    function handleOnline(callback) {
        this._onlineObservable.setValue(true);

        if (callback) {
            callback(true);
        }
    }

    return new NetworkConnectionMonitor();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, networkConnectionMonitor) {
    'use strict';

    var networkDisconnectHysteresisInterval = 15000;
    var waitForDisconnectEventTimeout = 1000;
    var defaultReconnectBackoffInterval = 1000;
    var defaultMaxReconnectAttempts = 4;
    var closeReasons = {
        byebye: {
            code: 1000,
            reason: 'byebye',
            desc: 'Client closed'
        },
        backoffLimitReached: {
            code: 4000,
            reason: 'backoff-limit-reached',
            desc: 'Reached the limit in terms of the number of reconnects'
        },
        networkDisconnect: {
            code: 4001,
            reason: 'network-disconnect',
            desc: 'Network connection monitor determined loss to internet connectivity'
        },
        reconnecting: {
            code: 4002,
            reason: 'reconnecting',
            desc: 'Closing WebSocket in order to attempt to establish another connection'
        }
    };
    var readyStates = {
        connecting: {
            code: 0,
            state: 'CONNECTING',
            desc: 'The connection is not yet open'
        },
        open: {
            code: 1,
            state: 'OPEN',
            desc: 'The connection is open and ready to communicate'
        },
        closing: {
            code: 2,
            state: 'CLOSING',
            desc: 'The connection is in the process of closing'
        },
        closed: {
            code: 3,
            state: 'CLOSED',
            desc: 'The connection is closed or could not be opened'
        }
    };

    function ReconnectingWebSocket(uri, logger, maxReconnectAttempts, reconnectBackoffInterval) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isObject(logger, 'logger');

        if (!_.isNullOrUndefined(maxReconnectAttempts)) {
            assert.isNumber(maxReconnectAttempts, 'maxReconnectAttempts');
        } else {
            maxReconnectAttempts = defaultMaxReconnectAttempts;
        }

        this._uri = uri;
        this._logger = logger;
        this._maxReconnectAttempts = maxReconnectAttempts;
        this._reconnectBackoffInterval = reconnectBackoffInterval || defaultReconnectBackoffInterval;
        this._hasAttemptedReconnect = false;
        this._stopped = false;
        this._queuedMessages = [];
        this._connectionState = 'connecting';

        this._logger.info('Connecting WebSocket to [%s]', uri);

        this._webSocket = createWebSocket.call(this, onOpen, onClose);

        var that = this;
        this._disconnectTimeoutId = null;

        this._networkConnectionMonitorDisposable = networkConnectionMonitor.listenForNetworkChange(function(isOnline) {
            if (isOnline) {
                if (_.isNumber(that._disconnectTimeoutId)) {
                    clearTimeout(that._disconnectTimeoutId);
                    that._disconnectTimeoutId = null;
                }

                return onNetworkReconnect.call(that);
            }

            if (_.isNumber(that._disconnectTimeoutId)) {
                return;
            }

            onReconnecting.call(that);

            that._disconnectTimeoutId = setTimeout(function() {
                return onNetworkDisconnect.call(that);
            }, networkDisconnectHysteresisInterval);
        }, 0);
    }

    ReconnectingWebSocket.prototype.onmessage = null;
    ReconnectingWebSocket.prototype.onconnected = null;
    ReconnectingWebSocket.prototype.onreconnecting = null;
    ReconnectingWebSocket.prototype.onreconnected = null;
    ReconnectingWebSocket.prototype.ondisconnected = null;
    ReconnectingWebSocket.prototype.onerror = null;

    ReconnectingWebSocket.prototype.send = function(message) {
        // TODO (DCY) Figure out how to resolve network switches
        if (!networkConnectionMonitor.isOnline() && false) { // eslint-disable-line no-constant-condition
            this._logger.info('Network offline. Waiting for reconnect to send message.');

            return this._queuedMessages.push(message);
        }

        return this._webSocket.send(message);
    };

    ReconnectingWebSocket.prototype.reconnect = function(attempt) {
        this._webSocket.onclose = null;
        this._webSocket.onerror = null;
        this._hasAttemptedReconnect = true;

        var that = this;
        var backoffTimeout;

        if (!_.isNumber(attempt)) {
            attempt = 1;
        }

        if (this._stopped) {
            return this._logger.info('Client has stopped WebSocket after [%s] reconnect attempts', attempt - 1);
        }

        if (attempt > this._maxReconnectAttempts) {
            this._logger.warn('Unable to reconnect WebSocket after [%s] attempts', this._maxReconnectAttempts);

            return closeWebSocketOrTriggerDisconnectEvent.call(this, closeReasons.backoffLimitReached);
        }

        closeWebSocketOrTriggerDisconnectEvent.call(this, closeReasons.reconnecting);

        try {
            this._webSocket = createWebSocket.call(that, function onOpenEvent() {
                if (backoffTimeout) {
                    clearTimeout(backoffTimeout);
                }

                that._hasAttemptedReconnect = false;
                that._webSocket.onclose = _.bind(onClose, that);

                return onReconnect.call(that);
            }, function onCloseEvent() {
                if (attempt + 1 > that._maxReconnectAttempts) {
                    if (backoffTimeout) {
                        clearTimeout(backoffTimeout);
                    }

                    reconnectIfNotOpen.call(that, attempt);
                }
            });
        } catch(e) {
            this._logger.warn('Unable to create WebSocket connection [%s]', e);
            // Swallow error - we will alert client of failure after timeouts.
        }

        backoffTimeout = reconnectWithBackoff.call(this, attempt);
    };

    ReconnectingWebSocket.prototype.disconnect = function() {
        this._networkConnectionMonitorDisposable.dispose();
        this._stopped = true;

        if (_.isNumber(this._disconnectTimeoutId)) {
            clearTimeout(this._disconnectTimeoutId);
            this._disconnectTimeoutId = null;
        }

        return this._webSocket.close(closeReasons.byebye.code, closeReasons.byebye.reason);
    };

    ReconnectingWebSocket.prototype.toString = function() {
        return 'ReconnectedWebSocket[' + this._uri + ',' + this._webSocket.readyState + ']';
    };

    function closeWebSocketOrTriggerDisconnectEvent(evt) {
        if (this._webSocket.readyState === readyStates.closed.code) {
            return onClose.call(this, evt);
        }

        return this._webSocket.close(evt.code, evt.reason);
    }

    function createWebSocket(onOpenCallback, onCloseCallback) {
        var webSocket = new WebSocket(this._uri);

        webSocket.onopen = _.bind(onOpenCallback, this);
        webSocket.onclose = _.bind(onCloseCallback, this);
        webSocket.onmessage = _.bind(onMessage, this);
        webSocket.onerror = _.bind(onError, this);

        return webSocket;
    }

    function reconnectWithBackoff(attempt) {
        var that = this;

        return setTimeout(function() {
            reconnectIfNotOpen.call(that, attempt);
        }, attempt * attempt * this._reconnectBackoffInterval);
    }

    function reconnectIfNotOpen(attempt) {
        if (this._webSocket.readyState === readyStates.open.code) {
            return;
        }

        this.reconnect(attempt + 1);
    }

    function onClose(evt) {
        switch (evt.code) {
        case closeReasons.reconnecting.code:
            return;
        case closeReasons.byebye.code:
        case closeReasons.backoffLimitReached.code:
        case closeReasons.networkDisconnect.code:
            return onDisconnect.call(this, evt);
        default:
            if (this._hasAttemptedReconnect) {
                return;
            }

            onReconnecting.call(this, evt);

            this._logger.info('Attempting to re-establish socket connection after disconnect event with code [%s] and reason [%s]', evt.code, evt.reason);

            return this.reconnect();
        }
    }

    function onReconnecting(evt) {
        this._logger.info('WebSocket is reconnecting');

        this._connectionState = 'reconnecting';

        if (this.onreconnecting) {
            this.onreconnecting(evt);
        }
    }

    function onOpen(evt) {
        this._logger.info('WebSocket Connected');

        sendAllQueuedMessages.call(this);

        this._connectionState = 'connected';

        if (this.onconnected) {
            this.onconnected(evt);
        }
    }

    function onReconnect(evt) {
        this._logger.info('Successfully reconnected to WebSocket');

        this._connectionState = 'reconnected';

        if (this.onreconnected) {
            this.onreconnected(evt);
        }
    }

    function onDisconnect(evt) {
        this._logger.info('WebSocket Disconnected [%s]: [%s]', evt.code, evt.reason);

        this._connectionState = 'disconnected';

        if (this.ondisconnected) {
            this.ondisconnected(evt);
        }
    }

    function onError(evt) {
        this._logger.error('An error occurred on the WebSocket connection [%s]', evt.data || evt);

        if (this.onerror) {
            this.onerror(evt);
        }
    }

    function onMessage(evt) {
        this._logger.debug('>> [%s]', evt.data);

        if (this.onmessage) {
            this.onmessage(evt);
        }
    }

    function onNetworkReconnect() {
        var that = this;

        setTimeout(function() {
            if (that._stopped) {
                return that._logger.info('Unable to go back online after network reconnect. Client has stopped WebSocket.');
            }

            if (that._webSocket.readyState !== readyStates.open.code) {
                that._logger.info('Network Reconnected. Attempting to reconnect WebSocket.');

                return that.reconnect();
            }

            if (that._didGoOfflineDueToDisconnect) {
                that._logger.info('Network Reconnected with WebSocket status of [%s].', readyStates.open.state);

                return onOpen.call(that);
            }

            if (that._connectionState !== 'online' || this._connectionState !== 'reconnected') {
                onReconnect.call(that);
            }

            that._logger.info('Network Reconnected.');
        }, waitForDisconnectEventTimeout);
    }

    function onNetworkDisconnect() {
        this._logger.warn('Network not reconnected after [%s]. Going Offline and disconnecting WebSocket connection.', networkDisconnectHysteresisInterval);

        this._didGoOfflineDueToDisconnect = true;

        // Don't close the WebSocket.
        onDisconnect.call(this, closeReasons.networkDisconnect);
    }

    function sendAllQueuedMessages() {
        var numberOfMessagesToSend = this._queuedMessages.length;

        if (numberOfMessagesToSend === 0) {
            return;
        }

        this._logger.info('Sending [%s] queued messages', numberOfMessagesToSend);

        while (numberOfMessagesToSend > 0) {
            numberOfMessagesToSend--;

            var message = this._queuedMessages.shift();

            this.send(message);
        }
    }

    return ReconnectingWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(90)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ReconnectingWebSocket) {
    'use strict';

    return ReconnectingWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(38)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Event) {
    'use strict';

    function NamedEvents() {
        this._events = {};
    }

    NamedEvents.prototype.fire = function(name, args, context) {
        assert.isStringNotEmpty(name, 'name');

        if (_.includes(_.keys(this._events), name)) {
            this._events[name].fire(args, context);
        }
    };

    NamedEvents.prototype.fireAsync = function(name, args, context) {
        assert.isStringNotEmpty(name, 'name');

        if (_.includes(_.keys(this._events), name)) {
            this._events[name].fireAsync(args, context);
        }
    };

    NamedEvents.prototype.listen = function listen(name, listener) {
        assert.isStringNotEmpty(name, 'name');

        var event = _.includes(_.keys(this._events), name) ? this._events[name] : (this._events[name] = new Event());

        return event.listen(listener);
    };

    NamedEvents.prototype.size = function size(name) {
        if (_.includes(_.keys(this._events), name)) {
            return this._events[name].size();
        }

        return 0;
    };

    NamedEvents.prototype.dispose = function dispose() {
        _.forOwn(this._events, function(event) {
            event.dispose();
        });

        this._events = {};
    };

    NamedEvents.prototype.toString = function toString() {
        return 'NamedEvents|' + _.keys(this._events).length;
    };

    return NamedEvents;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(91),
    __webpack_require__(36)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, ReconnectingWebSocket, MQService) {
    'use strict';

    function MQWebSocket(uri, logger, protocols, apiVersion) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isObject(logger, 'logger');
        assert.isArray(protocols, 'protocols');

        // TODO (DY) Don't dispose of event listeners on disconnect event
        this._uri = uri;
        this._logger = logger;
        this._logger.info('Connecting to [%s]', uri);

        this._webSocket = new ReconnectingWebSocket(this._uri, this._logger);
        this._mqService = new MQService(this._logger, _.bind(sendMessage, this), _.bind(setOnMessage, this), protocols, apiVersion);
        this._namedEvents = new event.NamedEvents();

        this._webSocket.onconnected = _.bind(onConnected, this);
        this._webSocket.onreconnecting = _.bind(onReconnecting, this);
        this._webSocket.onreconnected = _.bind(onReconnected, this);
        this._webSocket.ondisconnected = _.bind(onDisconnected, this);
        this._webSocket.onerror = _.bind(onError, this);

        this._disconnected = false;
    }

    MQWebSocket.prototype.onEvent = function(eventName, handler) {
        this._namedEvents.listen(eventName, handler);

        return this._mqService.onEvent(eventName, handler);
    };

    MQWebSocket.prototype.onRequest = function(requestName, handler) {
        return this._mqService.onRequest(requestName, handler);
    };

    MQWebSocket.prototype.sendRequest = function sendRequest(type, message, callback, settings) {
        return this._mqService.sendRequest(type, message, callback, settings);
    };

    MQWebSocket.prototype.sendResponse = function sendResponse(requestId, type, message, callback) {
        return this._mqService.sendResponse(requestId, type, message, callback);
    };

    MQWebSocket.prototype.disconnect = function() {
        this._disconnected = true;

        return this._webSocket.disconnect();
    };

    MQWebSocket.prototype.disposeOfPendingRequests = function disposeOfPendingRequests() {
        this._logger.info('Disposing of pending MQ WebSocket requests');

        return this._mqService.disposeOfRequests();
    };

    MQWebSocket.prototype.getApiVersion = function getApiVersion() {
        return this._mqService.getApiVersion();
    };

    MQWebSocket.prototype.toString = function() {
        return 'MQWebSocket[' + this._webSocket.toString() + ']';
    };

    function triggerEvent(eventName, args) {
        this._namedEvents.fire(eventName, args, this);
    }

    function onReconnecting(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'reconnecting');
    }

    function onConnected(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'connected');
    }

    function onReconnected(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'reconnected');
    }

    function onDisconnected(evt) {
        triggerEvent.call(this, 'disconnected', [evt.code, evt.reason]);

        if (this._disconnected) {
            this._namedEvents.dispose();
            this._mqService.dispose();
        }
    }

    function onError(evt) {
        triggerEvent.call(this, 'error', [evt.data]);
    }

    function setOnMessage(callback) {
        this._webSocket.onmessage = callback;
    }

    function sendMessage(message) {
        if (this._webSocket) {
            this._webSocket.send(message);
        }
    }

    return MQWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(17),
    __webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc, logging, proto, telemetryProto) {
    function TelemetryAppender(uri) {
        assert.isString(uri, 'uri');

        this._loggingUrl = '/telemetry/logs';
        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._minLevel = logging.level.TRACE;
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._mostRecentRuntime = 0;
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + this._loggingUrl, [telemetryProto], 'telemetry.StoreLogRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    TelemetryAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level, 'level');

        this._minLevel = level;
    };

    TelemetryAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    TelemetryAppender.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    TelemetryAppender.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    TelemetryAppender.prototype.log = function log(since, level, category, messages, sessionId, userId, environment, version, context) {
        if (context.level < this._minLevel || !this._isEnabled) {
            return;
        }

        assert.isArray(messages, 'messages');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentUserId = userId;
        this._mostRecentEnvironment = environment;
        this._mostRecentVersion = version;

        addMessagesToRecords.call(this, level, category, messages);
    };

    function addMessagesToRecords(level, category, messages) {
        this._batchHttpProtocol.addRecord({
            level: level,
            timestamp: _.isoString(),
            category: category,
            message: messages.join(' '),
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            level: 'Warn',
            timestamp: _.isoString(),
            category: 'websdk/telemetryLogger',
            message: 'Deleted ' + deleteRecords + ' records',
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return TelemetryAppender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(39),
    __webpack_require__(94)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, TelemetryAppender) {
    var config = {
        urls: {
            local: '',
            staging: 'https://telemetry-stg.phenixrts.com',
            production: 'https://telemetry.phenixrts.com'
        }
    };

    function TelemetryAppenderFactory() {
        this._telemetryAppenders = {};
    }

    TelemetryAppenderFactory.prototype.getAppender = function getAppender(pcastBaseUri) {
        var env = environment.parseEnvFromPcastBaseUri(pcastBaseUri || '');

        var telemetryServerUrl = config.urls[env];

        if (!this._telemetryAppenders[env]) {
            this._telemetryAppenders[env] = createNewAppender.call(this, telemetryServerUrl);
        }

        return this._telemetryAppenders[env];
    };

    function createNewAppender(uri) {
        var appender = new TelemetryAppender(uri);

        if (!uri) {
            appender.setEnabled(false);
        }

        return appender;
    }

    return new TelemetryAppenderFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function ObservableMonitor(observable) {
        assert.isObject(observable, 'observable');

        this._observable = observable;
        this._listenerSubscription = null;
        this._isEnabled = false;
    }

    ObservableMonitor.prototype.start = function start(checkForChanges, timeout) {
        this._isEnabled = true;

        this._listenerSubscription = this._observable.subscribe(_.noop, {
            listenForChanges: {
                callback: checkForChanges,
                timeout: timeout || 500
            }
        });
    };

    ObservableMonitor.prototype.stop = function stop() {
        this._isEnabled = false;

        if (this._listenerSubscription) {
            this._listenerSubscription.dispose();
        }

        this._listenerSubscription = null;
    };

    ObservableMonitor.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    return ObservableMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(40)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Observable) {
    'use strict';

    function ObservableArray(initialValues, beforeChange) {
        var valuesToSet = initialValues;

        if (valuesToSet === undefined || valuesToSet === null) {
            valuesToSet = [];
        }

        assert.isArray(valuesToSet, 'valuesToSet');

        this.observableArray = new Observable(valuesToSet, beforeChange);
    }

    ObservableArray.prototype.getValue = function getValue() {
        return this.observableArray.getValue();
    };

    ObservableArray.prototype.setValue = function setValue(values) {
        if (values === undefined || values === null) {
            values = [];
        }

        if (values !== undefined) {
            assert.isArray(values, 'values');
        }

        return this.observableArray.setValue(values);
    };

    ObservableArray.prototype.subscribe = function subscribe(callback, options) {
        return this.observableArray.subscribe(callback, options);
    };

    ObservableArray.prototype.push = function push(value) {
        var array = this.observableArray.getValue();
        array.push(value);

        this.observableArray.setValue(array);
    };

    ObservableArray.prototype.pop = function pop() {
        var array = this.observableArray.getValue();
        var value = array.pop();

        this.observableArray.setValue(array);

        return value;
    };

    ObservableArray.prototype.remove = function remove(valueOrFunction) {
        var array = this.observableArray.getValue();

        var filterFunction = function(value) {
            return _.isFunction(valueOrFunction) ? valueOrFunction(value) : value === valueOrFunction;
        };

        var valuesToRemove = _.filter(array, filterFunction);

        if (valuesToRemove.length > 0) {
            this.observableArray.setValue(_.remove(array, filterFunction));
        }

        return valuesToRemove;
    };

    ObservableArray.prototype.removeAll = function removeAll() {
        var array = this.observableArray.getValue();

        this.observableArray.setValue([]);

        return array;
    };

    ObservableArray.prototype.extend = function extend(options) {
        this.observableArray.extend(options);

        return this;
    };

    return ObservableArray;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function DisposableList() {
        this._list = [];
    }

    DisposableList.prototype.add = function(disposable) {
        if (!disposable || !_.isFunction(disposable.dispose)) {
            throw new Error('"disposable" must be a disposable or implement dispose');
        }

        this._list.push(disposable);
    };

    DisposableList.prototype.dispose = function() {
        var results = [];

        _.forEach(this._list, function(disposable) {
            results.push(disposable.dispose());
        });

        this._list = [];

        return results;
    };

    DisposableList.prototype.toString = function() {
        return _.toString(this);
    };

    return DisposableList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    /**
     * Create a new disposable object.
     *
     * @param cleanup The callback to perform whatever cleanup is required when this object is disposed.
     * @constructor
     */
    function Disposable(cleanup) {
        assert.isFunction(cleanup, 'cleanup');

        this._cleanup = cleanup;
    }

    Disposable.prototype.dispose = function() {
        return this._cleanup.call();
    };

    Disposable.prototype.toString = function() {
        return _.toString(this);
    };

    return Disposable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function DetectBrowser(userAgent) {
        this._userAgent = userAgent || '';
    }

    DetectBrowser.prototype.detect = function() {
        var browser = 'Unknown';
        var version = '?';
        var browserMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Opera|Safari)+\//);
        var versionMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Version)+\/([0-9]+)\./);
        var isWebview = false;

        if (browserMatch && browserMatch.length >= 2) {
            browser = browserMatch[1];
        } else if (this._userAgent.match(/^\(?Mozilla/)) {
            browser = 'Mozilla';

            if (this._userAgent.match(/MSIE/)
                || this._userAgent.match(/; Trident\/.*rv:[0-9]+/)) {
                browser = 'IE';

                if (versionMatch = this._userAgent.match(/MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                    version = parseInt(versionMatch[1], 10);

                    // Compatibility view?
                    if (versionMatch = this._userAgent.match(/MSIE [0-9]+.*MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                        version = parseInt(versionMatch[1], 10);
                    }
                } else if (versionMatch = this._userAgent.match(/rv:([0-9]+)/)) { // eslint-disable-line no-cond-assign
                    version = parseInt(versionMatch[1], 10);
                }
            }
        }

        if (browser === 'Chrome' && this._userAgent.match(/OPR\//)) {
            // Opera pretends to be Chrome
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(OPR)\/([0-9]+)\./);
        } else if (browser === 'Chrome' && this._userAgent.match(/Edge\//)) {
            // Edge pretends to be Chrome
            browser = 'Edge';
            versionMatch = this._userAgent.match(/(Edge)\/([0-9]+)\./);
        } else if ((browser === 'Firefox' || browser === 'IE') && this._userAgent.match(/Opera/)) {
            // Opera pretends to be Firefox or IE
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(Opera) ([0-9]+)\./);
        } else if (browser === 'Mozilla' && this._userAgent.match(/iphone|ipod|ipad/i)) {
            browser = 'Safari';
            version = parseInt(_.get(this._userAgent.match(/OS\s([0-9]+)/), [1]), 10);
            isWebview = true;
        }

        // https://developer.chrome.com/multidevice/user-agent
        if (browser === 'Chrome' && (this._userAgent.match(/; wv/) || (this._userAgent.match(/Android/) && this._userAgent.match(/Version\/[0-9].[0-9]/)))) {
            isWebview = true;
        }

        if (browser !== 'IE' && versionMatch && versionMatch.length >= 3) {
            version = parseInt(versionMatch[2], 10);
        }

        if (navigator.product === 'ReactNative') {
            browser = 'ReactNative';
            version = navigator.productSub || '?';
        }

        return {
            browser: browser,
            version: version,
            isWebview: isWebview
        };
    };

    return DetectBrowser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging) {
    'use strict';

    function ConsoleAppender() {
        this._minLevel = logging.level.TRACE;
    }

    ConsoleAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level, 'level');

        this._minLevel = level;
    };

    ConsoleAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    ConsoleAppender.prototype.log = function(since, level, category, messages, sessionId, userId, environment, version, context) {
        if (context.level < this._minLevel) {
            return;
        }

        messages[0] = since + ' [' + category + '] ' + level + ' ' + messages[0];

        if (context.level > logging.level.INFO) {
            logError(messages);
        } else {
            log(messages);
        }
    };

    var log = function(args) {
        console.log.apply(console, args);
    } || function() { };

    var logError = function(args) {
        console.error.apply(console, args);
    } || log;

    return ConsoleAppender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 102 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var getGlobal = function getGlobal() {
        if (typeof window !== "undefined") { // eslint-disable-line no-restricted-globals
            return window; // eslint-disable-line no-restricted-globals
        }

        if (typeof global !== "undefined") {
            return global; // eslint-disable-line no-undef
        }

        if (typeof self !== "undefined"){ // eslint-disable-line no-restricted-globals
            return self; // eslint-disable-line no-restricted-globals
        }

        return {};
    };

    return getGlobal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(102)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    var Assert = function() {

    };

    Assert.prototype.isObject = function isObject(obj, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be an object';

        if (!_.isObject(obj)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isArray = function isArray(array, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be an array';

        if (!_.isArray(array)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isString = function isString(string, name) {
        var error = '"' + name + '" must be a string';

        if (!_.isString(name)) {
            throw new Error('"name" must be a string');
        }

        if (!_.isString(string)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isBoolean = function isBoolean(bool, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a boolean';

        if (!_.isBoolean(bool)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isNumber = function isNumber(number, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a number';

        if (!_.isNumber(number)) {
            throw new Error(error);
        }
    };

    Assert.prototype.isFunction = function isFunction(callback, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must be a function';

        if (!_.isFunction(callback)) {
            throw new Error(error);
        }
    };

    // TODO (dcy) remove once all dependencies have been updated
    Assert.prototype.stringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isStringNotEmpty(string, name);
    };

    Assert.prototype.isStringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isString('name', name);

        var error = '"' + name + '" must not be empty';

        Assert.prototype.isString(string, name);

        if (string === '') {
            throw new Error(error);
        }
    };

    Assert.prototype.isInstanceOf = function(object, clazz, name) {
        Assert.prototype.isString('name', name);

        if (!_.isObject(object)) {
            throw new Error('"' + name + '" must be an instance');
        }

        if (!(object instanceof clazz)) {
            throw new Error('"' + name + '" must be a valid instance of class');
        }
    };

    Assert.prototype.isNotUndefined = function(value, name) {
        Assert.prototype.isString('name', name);

        if (_.isUndefined(value)) {
            throw new Error('"' + name + '" must not be undefined');
        }
    };

    Assert.prototype.isValidType = function(type, types, name) {
        Assert.prototype.isStringNotEmpty(name, 'name');

        type = _.getEnumName(types, type);

        if (_.isNullOrUndefined(type)) {
            throw new Error('"' + name + '" must be a valid type');
        }

        return type;
    };

    Assert.prototype.isArrayOfString = function(value, name) {
        Assert.prototype.isString(name, 'name');
        Assert.prototype.isArray(value, name);

        _.forEach(value, function(val, key) {
            Assert.prototype.isString(val, name + '[' + key + ']');
        });
    };

    return new Assert();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var _ = function() {

    };

    _.clone = function clone(value) {
        if (_.isArray(value)) {
            return value.slice();
        }

        if (_.isObject(value)) {
            return _.assign({}, value);
        }

        return value;
    };

    _.get = function get(objectToTraverse, path, defaultValue) {
        if (_.isNullOrUndefined(objectToTraverse)) {
            return defaultValue;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        var valueAtPath = _.reduce(properties, function(valueAtPath, prop) {
            if (_.isObject(valueAtPath) || _.isArray(valueAtPath)) {
                return valueAtPath[prop];
            }

            return;
        }, objectToTraverse);

        return _.isUndefined(valueAtPath) ? defaultValue : valueAtPath;
    };

    _.set = function get(objectToTraverse, path, value) {
        if (!_.isObject(objectToTraverse)) {
            return objectToTraverse;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var currentLocation = objectToTraverse;
        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        _.forEach(properties, function(prop, index) {
            setNextValue(currentLocation, prop, getNextValue(properties, index, currentLocation, value));

            currentLocation = currentLocation[prop];
        });

        return objectToTraverse;
    };

    _.bind = function bind(callback, that) {
        var argsAfterContext = Array.prototype.slice.call(arguments, 2);

        return function boundFunction() {
            if (!_.isFunction(callback)) {
                throw new TypeError('_.bind - callback must be a function');
            }

            var combinedArguments = argsAfterContext.concat(Array.prototype.slice.call(arguments));

            return callback.apply(that, combinedArguments);
        };
    };

    _.now = function now() {
        return new Date().getTime();
    };

    _.utc = function utc(date) {
        if (_.isNumber(date)) {
            return date;
        } else if (!date) {
            return NaN;
        }

        return Math.floor(date);
    };

    _.isoString = function isoString() {
        var now = new Date();

        if (now.toISOString) {
            return now.toISOString();
        }

        return now.getUTCFullYear() +
            '-' + _.pad(now.getUTCMonth() + 1, 2) +
            '-' + _.pad(now.getUTCDate(), 2) +
            'T' + _.pad(now.getUTCHours(), 2) +
            ':' + _.pad(now.getUTCMinutes(), 2) +
            ':' + _.pad(now.getUTCSeconds(), 2) +
            '.' + (now.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    };

    _.map = function map(collection, callback) {
        assertIsObject(collection, 'collection');

        var newArray = [];

        if (collection.constructor === Array) {
            _.forEach(collection, function mapCollection(item, index) {
                if (_.isString(callback) && _.isObject(item)) {
                    newArray.push(item[callback]);
                } else if (_.isFunction(callback)) {
                    newArray.push(callback(item, index));
                }
            });
        } else {
            _.forOwn(collection, function mapCollection(value, key) {
                if (_.isFunction(callback)) {
                    newArray.push(callback(value, key));
                }
            });
        }

        return newArray;
    };

    _.values = function(collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('Collection must be an object.');
        }

        return _.map(collection, function(value) {
            return value;
        });
    };

    _.keys = function(collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('Collection must be an object.');
        }

        return _.map(collection, function(value, key) {
            return key;
        });
    };

    _.forEach = function forEach(collection, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('Callback must be a function');
        }

        assertIsArray(collection, 'collection');

        for (var i = 0; i < collection.length; i++) {
            var callbackResponse = callback(collection[i], i);

            if (callbackResponse === false) {
                return;
            }
        }
    };

    _.forOwn = function forOwn(objectWithProperties, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('Callback must be a function');
        }

        assertIsObject(objectWithProperties, 'objectWithProperties');

        var keys = Object.keys(objectWithProperties);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (objectWithProperties.hasOwnProperty(key) || Object.prototype.hasOwnProperty.call(objectWithProperties, key)) {
                callback(objectWithProperties[key], key);
            }
        }
    };

    _.argumentsToArray = function(args) {
        if (!_.isObject(args) || !args.length) {
            throw new Error('Collection must be arguments');
        }

        var collection = [];

        for (var i = 0; i < args.length; i++) {
            collection.push(args[i]);
        }

        return collection;
    };

    _.assign = function assign(target) {
        assertIsObject(target, 'target');

        var sources = _.argumentsToArray(arguments);

        sources.shift();

        _.forEach(sources, function(source, index) {
            assertIsObject(source, 'source ' + index);

            _.forOwn(source, function(value, key) {
                target[key] = value;
            });
        });

        return target;
    };

    _.includes = function includes(collection, value) {
        if (_.isString(collection)) {
            assertIsString(value, 'Includes value and search parameter');

            return collection.indexOf(value) > -1;
        }

        if (_.isUndefined(collection) || _.isUndefined(value)) {
            return false;
        }

        assertIsObject(collection, 'collection');

        var hasValue = false;

        var checkCollection = function checkCollection(currentValue) {
            if (currentValue === value) {
                hasValue = true;
            }
        };

        if (collection.constructor === Array) {
            _.forEach(collection, checkCollection);
        } else {
            _.forOwn(collection, checkCollection);
        }

        return hasValue;
    };

    _.reduce = function reduce(collection, callback, initialValue) {
        assertIsObject(collection, 'collection');

        var result = initialValue === _.noop() ? null : initialValue;

        if (collection.constructor === Array) {
            _.forEach(collection, function(item, index) {
                result = callback(result, item, index);
            });
        } else {
            _.forOwn(collection, function(value, key) {
                result = callback(result, value, key);
            });
        }

        return result;
    };

    _.sample = function sample(collection) {
        assertIsArray(collection, 'collection');

        return collection[Math.floor(Math.random() * collection.length)];
    };

    _.uniqueId = function() {
        return (_.now() * Math.random()).toString();
    };

    _.find = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value) && index >= (initialIndex || 0)) {
                hasItem = value;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.findIndex = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value, index) && index >= (initialIndex || 0)) {
                hasItem = index;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.filter = function filter(collection, callback) {
        assertIsArray(collection, 'collection');

        var newCollection = [];

        _.forEach(collection, function findInCollection(value) {
            if (callback(value)) {
                newCollection.push(value);
            }
        });

        return newCollection;
    };

    _.remove = function remove(collection, callback) {
        assertIsArray(collection, 'collection');

        var filterCallback = function filterCallback(value) {
            return !callback(value);
        };

        return _.filter(collection, filterCallback);
    };

    _.take = function take(collection, size) {
        assertIsArray(collection, 'collection');

        return collection.slice(0, size);
    };

    _.hasDifferences = function hasDifferences(collectionA, collectionB, deep) {
        return _.findDifferences(collectionA, collectionB, deep).length > 0;
    };

    _.findDifferences = function findDifferences(collectionA, collectionB, deep) {
        var differences = [];
        var visitedKeys = {};

        function getDifferences(value, indexOrKey) {
            visitedKeys[indexOrKey] = 1;

            if ((_.isObject(value) || _.isArray(value)) && deep) {
                if (!_.hasIndexOrKey(collectionB, indexOrKey)) {
                    differences.push(indexOrKey);
                } else if (!_.sameTypes(collectionA[indexOrKey], collectionB[indexOrKey])) {
                    differences.push(indexOrKey);
                } else if (_.hasDifferences(collectionA[indexOrKey], collectionB[indexOrKey], deep)) {
                    differences.push(indexOrKey);
                }
            } else if (collectionA[indexOrKey] !== collectionB[indexOrKey]) {
                differences.push(indexOrKey);
            }
        }

        if (_.isArray(collectionA) && _.isArray(collectionB)) {
            if (collectionA.length > collectionB.length) {
                _.forEach(collectionA, getDifferences);
            } else {
                _.forEach(collectionB, getDifferences);
            }
        } else if (_.isObject(collectionA) && _.isObject(collectionB) && !_.isArray(collectionA) && !_.isArray(collectionB)) {
            _.forOwn(collectionA, getDifferences);

            _.forOwn(collectionB, function(value, key) {
                if (!visitedKeys.hasOwnProperty(key)) {
                    differences.push(key);
                }
            });
        } else {
            throw new Error('Object types do not match');
        }

        return differences;
    };

    _.hasIndexOrKey = function hasIndexOrKey(collection, indexOrKey) {
        if (_.isArray(collection)) {
            return collection.length > parseInt(indexOrKey);
        } else if (_.isObject(collection)) {
            return collection.hasOwnProperty(indexOrKey);
        }

        return false;
    };

    _.startsWith = function startsWith(value, prefix) {
        assertIsString(value, 'value');
        assertIsString(prefix, 'prefix');

        return value.indexOf(prefix) === 0;
    };

    _.sameTypes = function sameTypes(first, second) {
        if (_.isNullOrUndefined(first) || _.isNullOrUndefined(second)) {
            return _.isNullOrUndefined(first) && _.isNullOrUndefined(second);
        }

        if (_.isArray(first) || _.isArray(second)) {
            return _.isArray(first) && _.isArray(second);
        }

        return typeof first === typeof second;
    };

    _.freeze = function freeze(obj) {
        if ('freeze' in Object) {
            return Object.freeze(obj);
        }

        return obj;
    };

    _.noop = function() {
        return undefined;
    };

    _.isObject = function isObject(obj) {
        if (obj === null) {
            return false;
        }

        return typeof obj === 'object';
    };

    _.isArray = function isArray(array) {
        if (!_.isObject(array)) {
            return false;
        }

        return array.constructor === Array;
    };

    _.isString = function isString(string) {
        return typeof string === 'string';
    };

    _.isNumber = function isNumber(number) {
        if (isNaN(number)) {
            return false;
        }

        return typeof number === 'number';
    };

    _.isBoolean = function isBoolean(bool) {
        return typeof bool === 'boolean';
    };

    _.isFunction = function isFunction(func) {
        return typeof func === 'function';
    };

    _.isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || _.isUndefined(value);
    };

    _.isUndefined = function isUndefined(value) {
        return typeof value === 'undefined';
    };

    _.getEnumName = function getEnumName(enums, nameOrId) {
        var enumObject = null;

        var enumArray = _.map(enums, function(value) {
            return value;
        });

        if (_.isNumber(nameOrId)) {
            enumObject = _.find(enumArray, function(current) {
                return current.id === nameOrId;
            });
        } else if (_.isString(nameOrId)) {
            enumObject = _.find(enumArray, function(current) {
                return current.name.toLowerCase() === nameOrId.toLowerCase();
            });
        }

        if (enumObject) {
            return enumObject.name;
        }

        return null;
    };

    _.toString = function toString(data) {
        if (_.isString(data)) {
            return data;
        }

        if (_.isBoolean(data)) {
            return data ? 'true' : 'false';
        }

        if (_.isNumber(data)) {
            return data.toString();
        }

        var toStringStr = '';

        if (data) {
            if (_.isFunction(data.toString)) {
                toStringStr = data.toString();
            } else if (_.isObject(data.toString)) {
                try {
                    toStringStr = data.toString();
                } catch (e) {
                    toStringStr = '[object invalid toString()]';
                }
            }
        }

        if (toStringStr.indexOf('[object') !== 0) {
            return toStringStr;
        }

        var cache = [];

        return toStringStr + JSON.stringify(data, function(key, value) {
            if (_.isObject(value) && !_.isNullOrUndefined(value)) {
                if (_.includes(cache, value)) {
                    return '<recursive>';
                }

                cache.push(value);
            }

            return key === '' ? value : _.toString(value);
        });
    };

    _.pad = function padNumber(value, numberToPad) {
        assertIsNumber(value, 'value');
        assertIsNumber(numberToPad, 'numberToPad');

        var valueLength = value.toString().length;

        for (var i = 0; i < numberToPad - valueLength; i++) {
            value = '0' + value.toString();
        }

        return value.toString();
    };

    _.addEventListener = function addEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixAddEventListener) {
            target.phenixAddEventListener.call(target, eventName, listener, !!useCapture);
        } else if (target.addEventListener) {
            target.addEventListener(eventName, listener, !!useCapture);
        } else if (target.attachEvent) {
            target.attachEvent("on" + eventName, listener);
        }
    };

    _.removeEventListener = function removeEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixRemoveEventListener) {
            target.phenixRemoveEventListener.call(target, eventName, listener, !!useCapture);
        } else if (target.removeEventListener) {
            target.removeEventListener(eventName, listener, !!useCapture);
        } else if (target.detachEvent) {
            target.detachEvent("on" + eventName, listener);
        }
    };

    var assertIsArray = function assertIsArray(collection) {
        if (!_.isArray(collection)) {
            throw new Error('Input must be an array.');
        }
    };

    var assertIsNumber = function assertIsNumber(number, name) {
        assertIsString(name, 'name');

        if (!_.isNumber(number)) {
            throw new Error(name + ' must be a number.');
        }
    };

    var assertIsObject = function assertIsObject(collection, name) {
        assertIsString(name, 'name');

        if (!_.isObject(collection)) {
            throw new Error('collection type not supported - ' + name + ' must be an array or object.');
        }
    };

    var assertIsFunction = function assertIsFunction(callback, name) {
        assertIsString(name, 'name');

        if (!_.isFunction(callback)) {
            throw new Error(name + ' must be a function.');
        }
    };

    var assertIsString = function assertIsString(value, name) {
        if (!_.isString(name)) {
            throw new Error('Name must be a string.');
        }

        if (!_.isString(value)) {
            throw new Error(name + ' must be a string.');
        }
    };

    function buildPathFromString(stringPath) {
        var properties = stringPath.split('.');
        var path = [];

        _.forEach(properties, function(prop) {
            path = path.concat(buildSubPathFromString(prop));
        });

        return path;
    }

    function buildSubPathFromString(stringPath) {
        var possibleSubPath = '';
        var path = [];
        var countOfOpeningBrackets = 0;

        for (var i = 0; i < stringPath.length; i++) {
            if (stringPath[i] === '[') {
                countOfOpeningBrackets++;

                if (!_.isString(possibleSubPath) || countOfOpeningBrackets > 1) {
                    return [stringPath];
                }

                if (possibleSubPath) {
                    path.push(possibleSubPath);
                    possibleSubPath = '';
                }
            } else if (stringPath[i] === ']') {
                countOfOpeningBrackets--;

                if (countOfOpeningBrackets !== 0) {
                    return [stringPath];
                }

                path.push(possibleSubPath);
                possibleSubPath = '';
            } else if (i === stringPath.length - 1) {
                return [stringPath];
            } else {
                possibleSubPath += stringPath[i];
            }
        }

        return path;
    }

    function getNextValue(path, index, currentLocation, value) {
        if (path.length - 1 === index) {
            return value;
        }

        var currentPropOrIndex = path[index];
        var nextPropOrIndex = path[index + 1];

        if (_.isArray(currentLocation[currentPropOrIndex]) || _.isObject(currentLocation[currentPropOrIndex])) {
            return currentLocation[currentPropOrIndex];
        }

        if (!_.isArray(currentLocation[currentPropOrIndex]) && _.isNumber(parseInt(nextPropOrIndex))) {
            return [];
        } else if (!_.isObject(currentLocation[currentPropOrIndex]) && _.isString(nextPropOrIndex)) {
            return {};
        }

        throw new Error('Unsupported type ' + typeof currentPropOrIndex + ' when setting property or index');
    }

    function setNextValue(objectToTraverse, propertyOrIndex, value) {
        if (_.isNumber(parseInt(propertyOrIndex)) && _.isArray(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        } else if (_.isString(propertyOrIndex) && _.isObject(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        }

        throw new Error('Unsupported type ' + typeof propertyOrIndex + ' when setting property or index');
    }

    return _;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, global, logging) {
    'use strict';

    var defaultCategory = 'websdk';
    var start = global['__phenixPageLoadTime'] || global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-05-24T22:12:07Z' || '?';
    var releaseVersion = '2018.2.7';

    function Logger() {
        this._appenders = [];
        this._userId = null;
        this._sessionId = null;
        this._environment = defaultEnvironment;
        this._applicationVersion = sdkVersion;
    }

    Logger.prototype.trace = function trace(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.TRACE});
    };

    Logger.prototype.debug = function debug(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.DEBUG});
    };

    Logger.prototype.info = function info(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.INFO});
    };

    Logger.prototype.warn = function warn(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.WARN});
    };

    Logger.prototype.error = function error(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.ERROR});
    };

    Logger.prototype.fatal = function fatal(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.FATAL});
    };

    Logger.prototype.addAppender = function addAppender(appender) {
        assert.isObject(appender, 'appender');
        assert.isFunction(appender.log, 'appender.log');

        this._appenders.push(appender);
    };

    Logger.prototype.getAppenders = function getAppenders() {
        return this._appenders;
    };

    Logger.prototype.getUserId = function getUserId() {
        return this._userId;
    };

    Logger.prototype.setUserId = function setUserId(userId) {
        this._userId = userId;
    };

    Logger.prototype.getEnvironment = function getEnvironment() {
        return this._environment;
    };

    Logger.prototype.setEnvironment = function setEnvironment(environment) {
        this._environment = environment;
    };

    Logger.prototype.getApplicationVersion = function getApplicationVersion() {
        return this._applicationVersion;
    };

    Logger.prototype.setApplicationVersion = function setApplicationVersion(version) {
        this._applicationVersion = version;
    };

    Logger.prototype.getObservableSessionId = function getObservableSessionId() {
        return this._observableSessionId;
    };

    Logger.prototype.setObservableSessionId = function setObservableSessionId(observableSessionId) {
        this._observableSessionId = observableSessionId;

        if (this._sessionIdSubscription) {
            this._sessionIdSubscription.dispose();
        }

        if (observableSessionId) {
            assert.isObject(observableSessionId, 'observableSessionId');

            this._sessionIdSubscription = this._observableSessionId.subscribe(_.bind(onSessionIdChange, this), {initial: 'notify'});
        }
    };

    function onSessionIdChange(sessionId) {
        this._sessionId = sessionId;

        if (!sessionId) {
            this.info('Websdk version [%s] ([%s]), user agent [%s]', sdkVersion, releaseVersion, navigator.userAgent);
        } else {
            this.info('Session started on websdk version [%s] ([%s]), user agent [%s]', sdkVersion, releaseVersion, navigator.userAgent);
        }
    }

    function log(messages, context) {
        var now = _.now();
        var since = (now - start) / 1000;
        var level = convertLevel(context.level);
        var category = context.name || defaultCategory;
        var that = this;

        _.forEach(this._appenders, function(appender) {
            try {
                appender.log(since, level, category, stringify(Array.prototype.slice.call(messages)), that._sessionId, that._userId, that._environment, that._applicationVersion, context);
            } catch (e) { } // eslint-disable-line no-empty
        });
    }

    function convertLevel(jsLoggerLevel) {
        switch (jsLoggerLevel) {
        case logging.level.TRACE:
            return 'Trace';
        case logging.level.DEBUG:
            return 'Debug';
        case logging.level.INFO:
            return 'Info';
        case logging.level.WARN:
            return 'Warn';
        case logging.level.ERROR:
            return 'Error';
        case logging.level.FATAL:
            return 'Fatal';
        default:
            throw new Error('Unsupported Logging Level ' + jsLoggerLevel);
        }
    }

    var stringify = function stringify(args) {
        if (args.length === 0) {
            return;
        }

        var newArgs = [];
        var errorStacks = [];

        _.forEach(args, function(arg) {
            newArgs.push(_.toString(arg));

            if (arg instanceof Error) {
                errorStacks.push(arg.stack);
            }
        });

        return format(newArgs.concat(errorStacks));
    };

    var format = function format(args) {
        var fmt = args[0];
        var idx = 0;

        while (fmt.indexOf && args.length > 1 && idx >= 0) {
            idx = fmt.indexOf('%', idx);

            if (idx > 0) {
                var type = fmt.substring(idx + 1, idx + 2);

                switch (type) {
                case '%':
                    // Escaped '%%' turns into '%'
                    fmt = fmt.substring(0, idx) + fmt.substring(idx + 1);
                    idx++;

                    break;
                case 's':
                case 'd':
                    // Replace '%d' or '%s' with the argument
                    args[0] = fmt = fmt.substring(0, idx) + args[1] + fmt.substring(idx + 2);
                    args.splice(1, 1);

                    break;
                default:
                    return args;
                }
            }
        }

        return args;
    };

    return Logger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(43),
    __webpack_require__(30),
    __webpack_require__(53),
    __webpack_require__(45),
    __webpack_require__(25),
    __webpack_require__(24),
    __webpack_require__(22),
    __webpack_require__(47)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc, logging, PCast, RoomService, AudioSpeakerDetector, BandwidthMonitor, UserMediaResolver, PCastExpress, RoomExpress, ChannelExpress) {
    rtc.global.PhenixPCast = PCast;

    return {
        PCast: PCast,
        RoomService: RoomService,
        AudioSpeakerDetector: AudioSpeakerDetector,
        BandwidthMonitor: BandwidthMonitor,
        UserMediaResolver: UserMediaResolver,
        logging: logging,
        RTC: rtc,
        express: {
            PCastExpress: PCastExpress,
            RoomExpress: RoomExpress,
            ChannelExpress: ChannelExpress
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-web-sdk-react-native.js.map