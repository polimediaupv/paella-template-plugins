!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("paella-core")):"function"==typeof define&&define.amd?define(["paella-core"],e):"object"==typeof exports?exports["paella-template-plugins"]=e(require("paella-core")):t["paella-template-plugins"]=e(t[void 0])}(self,(function(t){return(()=>{var e={692:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var n=r(955);const o=JSON.parse('{"u2":"paella-template-plugins","i8":"1.0.0"}');function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,r,n,a,l=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(n);if(a){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),l.apply(this,arguments)}return e=s,(r=[{key:"moduleName",get:function(){return o.u2}},{key:"moduleVersion",get:function(){return o.i8}}])&&i(e.prototype,r),s}(n.PluginModule)},771:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var n=r(955),o=r(797),u=r.n(o);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e,r,n,o,u,i){try{var c=t[u](i),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(t){c(u,n,o,i,f,"next",t)}function f(t){c(u,n,o,i,f,"throw",t)}i(void 0)}))}}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(m,t);var e,r,n,o,c,p,y=(c=m,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(c);if(p){var r=s(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,t)});function m(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),y.apply(this,arguments)}return e=m,r=[{key:"getAriaLabel",value:function(){return this.player.translate("Template plugin button")}},{key:"getDescription",value:function(){return this.getAriaLabel()}},{key:"load",value:(o=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.icon=this.player.getCustomPluginIcon(this.name,"forwardIcon")||u();case 1:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"action",value:(n=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.player.log.info("Just do something!");case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}],r&&a(e.prototype,r),m}(n.ButtonPlugin)},797:t=>{t.exports='<svg viewBox="0 0 521 601" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g transform="matrix(5.20833,0,0,5.20833,0,0)"><g id="User" transform="matrix(3.84615,1.8963e-31,0,3.84615,-1564.99,-323.92)"><g transform="matrix(1.05882,0,0,1.05882,-23.2206,-3.66315)"><circle cx="418.5" cy="91.5" r="8.5"></circle></g><g transform="matrix(0.996622,0,0,0.785714,1.3158,23.0763)"><path d="M406.956,116C408.994,107.809 414.069,102 420,102C425.931,102 431.006,107.809 433.044,116L406.956,116Z"></path></g></g></g></svg>'},757:(t,e,r)=>{var n={"./PluginsModule.js":692,"./es.upv.paella.templateButtonPlugin.js":771};function o(t){var e=u(t);return r(e)}function u(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=u,t.exports=o,o.id=757},955:e=>{"use strict";e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var u=r[t]={exports:{}};return e[t](u,u.exports,n),u.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";function t(){return n(757)}n.r(o),n.d(o,{default:()=>t}),n(771)})(),o})()}));
//# sourceMappingURL=paella-template-plugins.js.map