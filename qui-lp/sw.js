/*! For license information please see sw.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.qui=e():t.qui=e()}(self,(()=>(()=>{var t={"../../node_modules/base64-js/index.js":(t,e)=>{"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=f(t),u=o[0],s=o[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,u,s)),h=0,c=s>0?u-4:u;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;return 2===s&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[h++]=255&e),1===s&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e),a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],u=16383,s=0,f=n-i;s<f;s+=u)o.push(a(t,s,s+u>f?f:s+u));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=o.length;u<s;++u)r[u]=o[u],n[o.charCodeAt(u)]=u;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function a(t,e,n){for(var i,o,u=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),u.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return u.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},"../../node_modules/buffer/index.js":(t,e,r)=>{"use strict";var n=r("../../node_modules/base64-js/index.js"),i=r("../../node_modules/ieee754/index.js"),o=r("../../node_modules/isarray/index.js");function u(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=f.prototype:(null===t&&(t=new f(e)),t.length=e),t}function f(t,e,r){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,e,r)}function a(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),f.TYPED_ARRAY_SUPPORT?(t=e).__proto__=f.prototype:t=l(t,e),t}(t,e,r,n):"string"==typeof e?function(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!f.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(e,r),i=(t=s(t,n)).write(e,r);return i!==n&&(t=t.slice(0,i)),t}(t,e,r):function(t,e){if(f.isBuffer(e)){var r=0|p(e.length);return 0===(t=s(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?s(t,0):l(t,e);if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(h(e),t=s(t,e<0?0:0|p(e)),!f.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function l(t,e){var r=e.length<0?0:0|p(e.length);t=s(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(n)return N(t).length;e=(""+e).toLowerCase(),n=!0}}function d(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,r);case"utf8":case"utf-8":return P(this,e,r);case"ascii":return U(this,e,r);case"latin1":case"binary":return S(this,e,r);case"base64":return T(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,i);if("number"==typeof e)return e&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,e,r,n,i){var o,u=1,s=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,s/=2,f/=2,r/=2}function a(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(i){var h=-1;for(o=r;o<s;o++)if(a(t,o)===a(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(r+f>s&&(r=s-f),o=r;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(a(t,o+l)!==a(e,l)){c=!1;break}if(c)return o}return-1}function b(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var s=parseInt(e.substr(2*u,2),16);if(isNaN(s))return u;t[r+u]=s}return u}function m(t,e,r,n){return z(N(e,t.length-r),t,r,n)}function E(t,e,r,n){return z(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return E(t,e,r,n)}function _(t,e,r,n){return z(q(e),t,r,n)}function R(t,e,r,n){return z(function(t,e){for(var r,n,i,o=[],u=0;u<t.length&&!((e-=2)<0);++u)n=(r=t.charCodeAt(u))>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function T(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function P(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,u,s,f,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=r)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(f=(15&a)<<12|(63&o)<<6|63&u)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],u=t[i+2],s=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&s)&&(f=(15&a)<<18|(63&o)<<12|(63&u)<<6|63&s)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var e=t.length;if(e<=B)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=B));return r}(n)}e.Buffer=f,e.SlowBuffer=function(t){return+t!=t&&(t=0),f.alloc(+t)},e.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==r.g.TYPED_ARRAY_SUPPORT?r.g.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,e,r){return a(null,t,e,r)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,e,r){return function(t,e,r,n){return h(e),e<=0?s(t,e):void 0!==r?"string"==typeof n?s(t,e).fill(r,n):s(t,e).fill(r):s(t,e)}(null,t,e,r)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,e){if(!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):d.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,e,r,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),s=Math.min(o,u),a=this.slice(n,i),h=t.slice(e,r),c=0;c<s;++c)if(a[c]!==h[c]){o=a[c],u=h[c];break}return o<u?-1:u<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return _(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function I(t,e,r){var n,i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i);for(var o="",u=e;u<r;++u)o+=(n=t[u])<16?"0"+n.toString(16):n.toString(16);return o}function x(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function Y(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function L(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function C(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function O(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,o){return o||O(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function D(t,e,r,n,o){return o||O(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var i=e-t;r=new f(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},f.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return e||Y(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return e||Y(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return e||Y(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return e||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return e||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||Y(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return e||Y(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){e||Y(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){e||Y(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return e||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return e||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return e||Y(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return e||Y(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return e||Y(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return e||Y(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){t=+t,e|=0,r|=0,n||L(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){t=+t,e|=0,r|=0,n||L(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):C(this,t,e,!0),e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);L(this,t,e,r,i-1,-i)}var o=0,u=1,s=0;for(this[e]=255&t;++o<r&&(u*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/u>>0)-s&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);L(this,t,e,r,i-1,-i)}var o=r-1,u=1,s=0;for(this[e+o]=255&t;--o>=0&&(u*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/u>>0)-s&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):C(this,t,e,!0),e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},f.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return D(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return D(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var u=f.isBuffer(t)?t:N(new f(t,n).toString()),s=u.length;for(o=0;o<r-e;++o)this[o+e]=u[o%s]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function N(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}},"../../node_modules/ieee754/index.js":(t,e)=>{e.read=function(t,e,r,n,i){var o,u,s=8*i-n-1,f=(1<<s)-1,a=f>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[e+c],c+=l,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[e+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=a}return(p?-1:1)*u*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var u,s,f,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,u=h):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),(e+=u+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(u++,f/=2),u+c>=h?(s=0,u=h):u+c>=1?(s=(e*f-1)*Math.pow(2,i),u+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[r+p]=255&s,p+=g,s/=256,i-=8);for(u=u<<i|s,a+=i;a>0;t[r+p]=255&u,p+=g,u/=256,a-=8);t[r+p-g]|=128*d}},"../../node_modules/isarray/index.js":t=>{var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},"./sw.ts":function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function u(t){try{f(n.next(t))}catch(t){o(t)}}function s(t){try{f(n.throw(t))}catch(t){o(t)}}function f(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,s)}f((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(f){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(u=0)),u;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){u.label=s[1];break}if(6===s[0]&&u.label<i[1]){u.label=i[1],i=s;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(s);break}i[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(t,u)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,f])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=r("../../node_modules/buffer/index.js"),u=["gif","png","jpeg","jpg","svg","woff","woff2","ttf","otf"],s=15e3,f=!1;new Promise((function(t){return t()})).then((function(){return f=!0})),"undefined"!=typeof doNothing&&doNothing();var a=!0===f;function h(t,e){void 0===e&&(e={});var r,n=void 0,i=void 0,o=function(t){r&&clearTimeout(r),r=setTimeout((function(){i(new Error("The operation has timed out. timeoutValue  : ".concat(t)))}),t)};return t&&o(t),{startTimer:o,promise:new Promise((function(t,r){var o;o=t,n=a&&e.fixSyncResolve?function(t){return setTimeout((function(){return o(t)}))}:o,i=r})),resolver:n,reject:i}}var c=self,l=new Map;new Map,c.addEventListener("install",(function(t){c.skipWaiting()})),c.addEventListener("online",(function(){})),c.addEventListener("offline",(function(){})),c.addEventListener("activate",(function(t){})),c.addEventListener("message",(function(t){var e,r=t.data;if(e=r.resourceType,u.includes(e)){var n=p(r.resourceModel),i={resource:o.Buffer.from(n,"base64"),resourceId:r.resourceId,resourceType:r.resourceType};null==(s=l.get(r.resourceId))||s.resolver(i)}else{var s;i={resource:r.resourceModel,resourceId:r.resourceId,resourceType:r.resourceType},null==(s=l.get(r.resourceId))||s.resolver(i)}}));var p=function(t){return t.split(",")[1]},g=function(t){return!!t.startsWith("/quick/")},d=function(t){return!!t.startsWith("/test-qeditor-plateau-test/")},y=function(t){return!!t.startsWith("/qui-lp/")};c.addEventListener("fetch",(function(t){var e=function(t){return n(void 0,void 0,void 0,(function(){var e,r,n,o,u,f,a,c,p,v,b,m;return i(this,(function(i){switch(i.label){case 0:if(e=new URL(t.request.url),r=decodeURI(e.pathname),g(E=r)&&(E=E.substring(6,E.length)),d(E)&&(E=E.substring(26,E.length)),y(E)&&(E=E.substring(7,E.length)),"<"!=E[1]||"<"!=E[2])return[3,8];switch((n=function(t){g(t)&&(t=t.substring(6,t.length)),d(t)&&(t=t.substring(26,t.length)),y(t)&&(t=t.substring(7,t.length));var e=t.indexOf(":");return{type:t.slice(3,e),guid:t.slice(e+1,t.length-2)}}(r)).type){case"img":return[3,1];case"woff2":case"woff":case"ttf":case"otf":return[3,3];case"qjson":return[3,5]}return[3,7];case 1:return o=h(s),l.set(n.guid,o),w(t.clientId,n.guid),[4,o.promise];case 2:return u=i.sent(),l.delete(n.guid),f="image/"+u.resourceType,[2,new Response(u.resource,{status:200,headers:{"Content-Type":f}})];case 3:return a=h(s),l.set(n.guid,a),w(t.clientId,n.guid),[4,a.promise];case 4:return c=i.sent(),l.delete(n.guid),p="application/font-"+c.resourceType,[2,new Response(c.resource,{status:200,headers:{"Content-Type":p}})];case 5:return v=h(s),l.set(n.guid,v),w(t.clientId,n.guid),[4,v.promise];case 6:return b=i.sent(),l.delete(n.guid),[2,new Response(b.resource,{status:200,headers:{"Content-Type":"application/json"}})];case 7:return[3,8];case 8:return i.trys.push([8,10,,11]),[4,fetch(t.request)];case 9:return[2,i.sent()];case 10:throw m=i.sent(),console.log(m),m;case 11:return[2]}var E}))}))}(t);t.respondWith(e)}));var w=function(t,e){return n(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,c.clients.matchAll({type:"window"})];case 1:return t.sent()[0].postMessage(e),[2]}}))}))}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}return r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r("./sw.ts")})()));