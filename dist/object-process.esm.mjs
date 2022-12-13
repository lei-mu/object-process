/*! ObjectProcess version 1.0.1 */
import e from"process-model";export{default as ProcessModel}from"process-model";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function c(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var p,f,l=(p=Object.create(null),function(e){var t=toString.call(e);return p[t]||(p[t]=t.slice(8,-1).toLowerCase())}),y=Object.getPrototypeOf,d=function(e){if("object"!==l(e))return!1;var t=y(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},h=(f="undefined",function(e){return n(e)===f});function v(e){return null==e||""===e}var g="blur",m="resize",b="crop",w="circle",O="indexcrop",j="rounded-corners",M="watermark",S="quality",k="imageslim",P="info",_="average-hue",E=[m,b,w,O,j,"rotate","auto-orient","bright","contrast","sharpen",g,M,S,"format","interlace",k,P,_],R=[g,m,b,w,O,j,M,S],x=["detectface","tagimage"],A=["snapshot"];[].concat(a([P,_,k]),a(x),a([])),[].concat(a(E),a([]),a([])),[].concat(a(R),a([]),a(A));var C={isSupportWebp:function(){try{return 0===("undefined"!=typeof document&&document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp"))}catch(e){return!1}}(),processType:"image",processName:"x-image-process",keepParams:!0,processModelConfig:{}};function D(e){var t=new WeakMap;function r(e){return"object"===n(e)&&e||"function"==typeof e}return function e(n){if(!r(n))return n;if([Date,RegExp].includes(n.constructor))return new n.constructor(n);if("function"==typeof n)return new Function("return "+n.toString())();var o=t.get(n);if(o)return o;if(n instanceof Map){var i=new Map;return n.forEach((function(t,n){r(n)?i.set(t,e(n)):i.set(t,n)})),t.set(n,i),i}if(n instanceof Set){var c=new Set;return n.forEach((function(t){r(t)?c.add(e(t)):c.add(t)})),t.set(n,c),c}if(Array.isArray(n)){var a=[];return n.forEach((function(t){r(t)?a.push(e(t)):a.push(t)})),t.set(n,a),a}var s=Reflect.ownKeys(n),u=Object.getOwnPropertyDescriptors(n),p=Object.create(Object.getPrototypeOf(n,u));return s.forEach((function(t){var o=n[t];r(o)?p[t]=e(o):p[t]=o})),t.set(n,p),p}(e)}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,r){return h(e[r])||(t[r]=e[r]),t}),{})},I="1.0.1",q=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),c(this,"_config",null),c(this,"processModel",void 0),c(this,"VERSION",I),this._config=D(r(r({},C),n)),this._process(e)}var n,a,s;return n=t,a=[{key:"setConfig",value:function(e){e&&(this._config=e(this.config))}},{key:"config",get:function(){return this._config}},{key:"getStyle",value:function(){return this.processModel.toString()}},{key:"_processReg",value:function(e,t){if(e){var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.match(r);return null!=n?decodeURIComponent(n[2]):void 0}}},{key:"_process",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=this.config.processName,n=t.split("?"),o=n[0]||"",i=n[1]||"",c="",a=this._config,s=a.processType;if(this._config.keepParams&&i){var u=this._processReg(i,r);u&&u.startsWith(s)&&(c=u.replace(s,""))}this.processModel=new e(c,a.processModelConfig||{}),this._url=this._config.keepParams?t:o}},{key:"process",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this._process(e),this}},{key:"toString",value:function(){var e=this.config.processName,t=this._url,r=t.split("?"),n=r[0]||"",o=r[1]||"",i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),c=this.processModel.toString(),a=this._config.processType,s=encodeURIComponent("".concat(a).concat(c));if(o){if(c){if(i.test(o)){var u=o.replace(i,"".concat(e,"=").concat(s,"&"));return"".concat(n,"?").concat(u)}return"".concat(t,"&").concat(e,"=").concat(s)}var p=o.replace(i,"&");return"".concat(n,"?").concat(p)}return c?"".concat(n,"?").concat(e,"=").concat(s):n}},{key:"info",value:function(){return this.processModel.append("info"),this}},{key:"resize",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(d(e))this.processModel.append("resize",e);else{var o={w:e,h:t,m:r,limit:n};this.processModel.append("resize",T(o))}return this}},{key:"rotate",value:function(e){return this.processModel.append("rotate",e),this}},{key:"crop",value:function(e,t,r,n,o){if(d(e))this.processModel.append("crop",e);else{var i={g:e,h:t,w:r,x:n,y:o};this.processModel.append("crop",T(i))}return this}},{key:"format",value:function(e){return this.processModel.append("format",e),this}},{key:"interlace",value:function(e){return this.processModel.append("interlace",e),this}},{key:"quality",value:function(e,t){return e?this.processModel.append("quality",{Q:e}):this.processModel.append("quality",{q:t}),this}},{key:"imageslim",value:function(){return this.processModel.append("imageslim"),this}},{key:"webp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e)this.processModel.append("format","webp");else{var t=this.config.isSupportWebp,r=v(t);r||("boolean"==typeof t?t&&this.processModel.append("format","webp"):t()&&this.processModel.append("format","webp"))}return this}},{key:"append",value:function(e,t){return this.processModel.append(e,t),this}},{key:"set",value:function(e,t){return this.processModel.set(e,t),this}},{key:"delete",value:function(e){return this.processModel.delete(e),this}},{key:"has",value:function(e){return this.processModel.has(e)}}],a&&i(n.prototype,a),s&&i(n,s),Object.defineProperty(n,"prototype",{writable:!1}),t}();export{q as default};
