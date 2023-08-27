import{w as C}from"./index.27931a51.js";import{s as le,e as B,i as G,w as mt,d as A,o as ue,W as fe,P as z,Q as yt,f as de,g as he,h as Dt,X as bt,r as pe,Y as ge,u as me,Z as ye,_ as vt,S as be}from"./scheduler.5c42e476.js";import{S as ve,i as we}from"./index.f5dcc6b2.js";function Vt(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const a in s)a in c||(r[a]=1);for(const a in c)o[a]||(n[a]=c[a],o[a]=1);t[i]=c}else for(const a in s)o[a]=1}for(const s in r)s in n||(n[s]=void 0);return n}var $=function(t,e){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},$(t,e)},q=function(){return q=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},q.apply(this,arguments)};function wt(t,e,n){if(n||arguments.length===2)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}var _t=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return function(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=n}$(n,r),n.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}(e,t),e}(Error),Bt={},_e=new Set,T={};function j(t,e){if(typeof t=="string"||typeof t=="number"&&!isNaN(t)&&Math.abs(t)!==1/0||t==null||typeof t=="boolean")return t;var n=e.indexOf(t);if(n!==-1)return"#$@__instance__"+n;e.push(t);var r=e.length-1;if(t.constructor===Array){var o=t.map(function(a){return j(a,e)});return o.unshift("#$@__reference__"+r),o}if(t.constructor===Object){var i=Object.fromEntries(Object.entries(t).map(function(a){return[a[0],j(a[1],e)]}));return i["#$@__reference__"]=r,i}_e.add(t.constructor);var s={};s=Object.defineProperty(s,"#$@__constructor__",{value:t.constructor.name,enumerable:!0}),s=Object.defineProperty(s,"#$@__reference__",{value:r,enumerable:!0});var c=function(a,l){if(Object.keys(T).includes(a.constructor.name))return T[a.constructor.name].toPlain(a,function(u){return j(u,l)})}(t,e);return c!==void 0?q(q({},c),s):(Object.getOwnPropertyNames(t).forEach(function(a){Object.defineProperty(s,a,{value:j(t[a],e),enumerable:!0})}),s)}function P(t,e,n){var r;if(typeof t=="string"&&t.indexOf("#$@__instance__")===0)return n[c=parseInt(t.slice(15))];if(typeof t=="string"||typeof t=="number"||t==null||typeof t=="boolean")return t;if(t.constructor===Array){if(t.length===0)return[];var o=t.shift();if(typeof o!="string"||o.substring(0,16)!=="#$@__reference__"){if(Object.keys(n).length===0)return t.unshift(o),t;throw new _t}var i=[];n[c=o.slice(16)]=i;for(var s=0;s<t.length;s++)i[s]=P(t[s],e,n);return i}if(t.constructor===Object){var c;if((c=(r=t["#$@__reference__"])!==null&&r!==void 0?r:null)===null){if(Object.keys(n).length===0)return t;throw new _t}if(delete t["#$@__reference__"],!Object.keys(t).includes("#$@__constructor__")){for(var a in i={},n[c]=i,t)i[a]=P(t[a],e,n);return i}var l=t["#$@__constructor__"];delete t["#$@__constructor__"];var u=function(f,b,m,y){if(Object.keys(T).includes(b))return T[b].fromPlain(f,function(w){return P(w,m,y)})}(t,l,e,n);if(u!==void 0)return u;if(!Object.keys(e).includes(l))throw new Error("The class "+l+" is not allowed");var h={};for(var a in n[c]=h,t)h[a]=P(t[a],e,n);return Object.setPrototypeOf(h,e[l].prototype),h}}function Se(t){Bt[t.name]=t}function zt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}(function(t,e){t("Date",n=>({time:n.getTime()}),function(n){let r=new Date;return r.setTime(n.time),r}),t("BigInt",n=>({number:n.toString()}),n=>BigInt(n.number)),t("String",n=>({text:n.toString()}),n=>new String(n.text)),t("RegExp",n=>({source:n.source,flags:n.flags}),n=>new RegExp(n.source,n.flags)),t("Number",function(n){let r={nan:!1,infinity:!1,positive:!0,number:null};return Math.abs(n)===1/0?(r.infinity=!0,r.positive=Math.abs(n)===n,r):isNaN(n)?(r.nan=!0,r):(r.number=n.valueOf(),r)},function(n){return n.nan?NaN:n.infinity?1/0*(n.positive?1:-1):new Number(n.number)}),t("Map",(n,r)=>({data:Array.from(n.entries()).map(o=>r(o))}),function(n,r){const o=new Map;return n.data.map(i=>r(i)).forEach(([i,s])=>o.set(i,s)),o}),t("Set",(n,r)=>({data:Array.from(n.values()).map(o=>r(o))}),function(n,r){const o=new Set;return n.data.map(i=>r(i)).forEach(i=>o.add(i)),o}),t("ArrayBuffer",(n,r)=>({data:r(new Uint8Array(n))}),(n,r)=>r(n.data).buffer),t("DataView",(n,r)=>({buffer:r(n.buffer),offset:n.byteOffset,length:n.byteLength}),(n,r)=>new DataView(r(n.buffer),n.offset,n.length)),[Error,EvalError,RangeError,AggregateError,ReferenceError,SyntaxError,TypeError,URIError,Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array].forEach(n=>e(n))})(function(t,e,n){T[t]={toPlain:e,fromPlain:n}},Se);var I,U={};function Q(t){let e,n=t[0],r=1;for(;r<t.length;){const o=t[r],i=t[r+1];if(r+=2,(o==="optionalAccess"||o==="optionalCall")&&n==null)return;o==="access"||o==="optionalAccess"?(e=n,n=i(n)):o!=="call"&&o!=="optionalCall"||(n=i((...s)=>n.call(e,...s)),e=void 0)}return n}(I=U).defaults={},I.set=function(t,e,n){var r=n||{},o=I.defaults,i=r.expires||o.expires,s=r.domain||o.domain,c=r.path!==void 0?r.path:o.path!==void 0?o.path:"/",a=r.secure!==void 0?r.secure:o.secure,l=r.httponly!==void 0?r.httponly:o.httponly,u=r.samesite!==void 0?r.samesite:o.samesite,h=i?new Date(typeof i=="number"?new Date().getTime()+864e5*i:i):0;document.cookie=t.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+e.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(h&&h.getTime()>=0?";expires="+h.toUTCString():"")+(s?";domain="+s:"")+(c?";path="+c:"")+(a?";secure":"")+(l?";httponly":"")+(u?";samesite="+u:"")},I.get=function(t){for(var e=document.cookie.split(";");e.length;){var n=e.pop(),r=n.indexOf("=");if(r=r<0?n.length:r,decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))===t)return decodeURIComponent(n.slice(r+1))}return null},I.erase=function(t,e){I.set(t,"",{expires:-1,domain:e&&e.domain,path:e&&e.path,secure:0,httponly:0})},I.all=function(){for(var t={},e=document.cookie.split(";");e.length;){var n=e.pop(),r=n.indexOf("=");r=r<0?n.length:r,t[decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))]=decodeURIComponent(n.slice(r+1))}return t};const St=[],at=t=>{(e=>{const n=typeof process<"u"&&Q([process,"access",r=>r.env,"optionalAccess",r=>r.NODE_ENV])==="production";St.indexOf(e)!==-1||n||(typeof window>"u"&&(e+=`
Are you running on a server? Most of storages are not available while running on a server.`),console.warn(e),St.push(e))})(`Unable to find the ${t}. No data will be persisted.`)};let qt=function(t){return t===void 0?"undefined":JSON.stringify(j(t,[]))},tt=function(t,e){if(e===void 0&&(e=void 0),typeof t!="string")return t;if(e===void 0&&(e={}),t!=="undefined"){e=Object.fromEntries(wt(wt([],Object.entries(e),!0),Object.entries(Bt),!0));try{return P(JSON.parse(t),e,{})}catch{return t}}};function xe(t,e,n){const r=e.getValue(n);return r!==null&&t.set(r),e.addListener&&e.addListener(n,o=>{t.set(o)}),t.subscribe(o=>{e.setValue(n,o)}),{...t,delete(){e.deleteValue(n)}}}function xt(){}function Ie(t=xt,e=xt){const n=[];return{callListeners(r,o){o!==void 0&&n.filter(({key:i})=>i===r).forEach(({listener:i})=>i(o))},addListener(r,o){n.push({key:r,listener:o}),n.length===1&&t()},removeListener(r,o){const i=n.indexOf({key:r,listener:o});i!==-1&&n.splice(i,1),n.length===0&&e()}}}function Qt(t,e=!1){const n=s=>{const c=s.key;s.storageArea===t&&o(c,tt(s.newValue))},{removeListener:r,callListeners:o,addListener:i}=Ie(()=>{e&&typeof window<"u"&&Q([window,"optionalAccess",s=>s.addEventListener])&&window.addEventListener("storage",n)},()=>{e&&typeof window<"u"&&Q([window,"optionalAccess",s=>s.removeEventListener])&&window.removeEventListener("storage",n)});return{addListener:i,removeListener:r,getValue(s){const c=t.getItem(s);return tt(c)},deleteValue(s){t.removeItem(s)},setValue(s,c){t.setItem(s,qt(c))}}}function Ht(t){try{return typeof window[t]=="object"}catch{return!1}}function Oe(t=!1){return Ht("localStorage")?Qt(window.localStorage,t):(at("window.localStorage"),lt())}function Ae(t=!1){return Ht("sessionStorage")?Qt(window.sessionStorage,t):(at("window.sessionStorage"),lt())}function ke(){return typeof document>"u"||typeof Q([document,"optionalAccess",t=>t.cookie])!="string"?(at("document.cookies"),lt()):{getValue(t){const e=U.get(t);return tt(e)},deleteValue(t){U.erase(t,{samesite:"Strict"})},setValue(t,e){U.set(t,qt(e),{samesite:"Strict"})}}}var It;function lt(){return{getValue:()=>null,deleteValue(){},setValue(){}}}(function(t){t[t.LOCAL=0]="LOCAL",t[t.SESSION=1]="SESSION",t[t.SYNC=2]="SYNC"})(It||(It={}));ke();const Ee=Oe();Ae();function Gt(t,e){return xe(t,Ee,e)}var Ot,Ce=function(t){return Math.round(t/1099511627776)||32},je=function(t){var e,n=t.length;return n===0?0:(e=t[n-1],32*(n-1)+Ce(e))},Pe=function(t){var e,n="",r=t.length;for(e=0;e<r;e++)n+=(0xf00000000000+(0|t[e])).toString(16).substr(4);return n.substr(0,je(t)/4)};zt(Pe);var Le=function(t,e,n){return t===32?e:(n?0|e:e<<32-t)+1099511627776*t},Te=function(t,e){if(32*t.length<e)return t;var n=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=Le(e,t[n-1]&2147483648>>e-1,1)),t},Me=function(t){var e,n,r,o=[];for(r=(t=t.replace(/\s|0x/g,"")).length,n=(t+="00000000").length,e=0;e<n;e+=8)o.push(0^parseInt(t.substr(e,8),16));return Te(o,4*r)};zt(Me);var p={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};p.cipher.aes=function(t){this._tables[0][0][0]||this._precompute();var e,n,r,o,i,s=this._tables[0][4],c=this._tables[1],a=t.length,l=1;if(a!==4&&a!==6&&a!==8)throw new p.exception.invalid("invalid aes key size");for(this._key=[o=t.slice(0),i=[]],e=a;e<4*a+28;e++)r=o[e-1],(e%a==0||a===8&&e%a==4)&&(r=s[r>>>24]<<24^s[r>>16&255]<<16^s[r>>8&255]<<8^s[255&r],e%a==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),o[e]=o[e-a]^r;for(n=0;e;n++,e--)r=o[3&n?e:e-4],i[n]=e<=4||n<4?r:c[0][s[r>>>24]]^c[1][s[r>>16&255]]^c[2][s[r>>8&255]]^c[3][s[255&r]]},p.cipher.aes.prototype={encrypt:function(t){return this._crypt(t,0)},decrypt:function(t){return this._crypt(t,1)},_tables:[[[],[],[],[],[]],[[],[],[],[],[]]],_precompute:function(){var t,e,n,r,o,i,s,c,a=this._tables[0],l=this._tables[1],u=a[4],h=l[4],f=[],b=[];for(t=0;t<256;t++)b[(f[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!u[e];e^=r||1,n=b[n]||1)for(i=(i=n^n<<1^n<<2^n<<3^n<<4)>>8^255&i^99,u[e]=i,h[i]=e,c=16843009*f[o=f[r=f[e]]]^65537*o^257*r^16843008*e,s=257*f[i]^16843008*i,t=0;t<4;t++)a[t][e]=s=s<<24^s>>>8,l[t][i]=c=c<<24^c>>>8;for(t=0;t<5;t++)a[t]=a[t].slice(0),l[t]=l[t].slice(0)},_crypt:function(t,e){if(t.length!==4)throw new p.exception.invalid("invalid aes block size");var n,r,o,i,s=this._key[e],c=t[0]^s[0],a=t[e?3:1]^s[1],l=t[2]^s[2],u=t[e?1:3]^s[3],h=s.length/4-2,f=4,b=[0,0,0,0],m=this._tables[e],y=m[0],w=m[1],g=m[2],d=m[3],_=m[4];for(i=0;i<h;i++)n=y[c>>>24]^w[a>>16&255]^g[l>>8&255]^d[255&u]^s[f],r=y[a>>>24]^w[l>>16&255]^g[u>>8&255]^d[255&c]^s[f+1],o=y[l>>>24]^w[u>>16&255]^g[c>>8&255]^d[255&a]^s[f+2],u=y[u>>>24]^w[c>>16&255]^g[a>>8&255]^d[255&l]^s[f+3],f+=4,c=n,a=r,l=o;for(i=0;i<4;i++)b[e?3&-i:i]=_[c>>>24]<<24^_[a>>16&255]<<16^_[l>>8&255]<<8^_[255&u]^s[f++],n=c,c=a,a=l,l=u,u=n;return b}},p.bitArray={bitSlice:function(t,e,n){return t=p.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),n===void 0?t:p.bitArray.clamp(t,n-e)},extract:function(t,e,n){var r=Math.floor(-e-n&31);return(-32&(e+n-1^e)?t[e/32|0]<<32-r^t[e/32+1|0]>>>r:t[e/32|0]>>>r)&(1<<n)-1},concat:function(t,e){if(t.length===0||e.length===0)return t.concat(e);var n=t[t.length-1],r=p.bitArray.getPartial(n);return r===32?t.concat(e):p.bitArray._shiftRight(e,r,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e,n=t.length;return n===0?0:(e=t[n-1],32*(n-1)+p.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;var n=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=p.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return t===32?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(p.bitArray.bitLength(t)!==p.bitArray.bitLength(e))return!1;var n,r=0;for(n=0;n<t.length;n++)r|=t[n]^e[n];return r===0},_shiftRight:function(t,e,n,r){var o,i,s;for(r===void 0&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(e===0)return r.concat(t);for(o=0;o<t.length;o++)r.push(n|t[o]>>>e),n=t[o]<<32-e;return i=t.length?t[t.length-1]:0,s=p.bitArray.getPartial(i),r.push(p.bitArray.partial(e+s&31,e+s>32?n:r.pop(),1)),r},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,n;for(e=0;e<t.length;++e)n=t[e],t[e]=n>>>24|n>>>8&65280|(65280&n)<<8|n<<24;return t}},p.codec.utf8String={fromBits:function(t){var e,n,r="",o=p.bitArray.bitLength(t);for(e=0;e<o/8;e++)!(3&e)&&(n=t[e/4]),r+=String.fromCharCode(n>>>8>>>8>>>8),n<<=8;return decodeURIComponent(escape(r))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],r=0;for(e=0;e<t.length;e++)r=r<<8|t.charCodeAt(e),(3&e)==3&&(n.push(r),r=0);return 3&e&&n.push(p.bitArray.partial(8*(3&e),r)),n}},p.codec.base64={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(t,e,n){var r,o="",i=0,s=p.codec.base64._chars,c=0,a=p.bitArray.bitLength(t);for(n&&(s=s.substr(0,62)+"-_"),r=0;6*o.length<a;)o+=s.charAt((c^t[r]>>>i)>>>26),i<6?(c=t[r]<<6-i,i+=26,r++):(c<<=6,i-=6);for(;3&o.length&&!e;)o+="=";return o},toBits:function(t,e){t=t.replace(/\s|=/g,"");var n,r,o=[],i=0,s=p.codec.base64._chars,c=0;for(e&&(s=s.substr(0,62)+"-_"),n=0;n<t.length;n++){if((r=s.indexOf(t.charAt(n)))<0)throw new p.exception.invalid("this isn't base64!");i>26?(i-=26,o.push(c^r>>>i),c=r<<32-i):c^=r<<32-(i+=6)}return 56&i&&o.push(p.bitArray.partial(56&i,c,1)),o}},p.codec.base64url={fromBits:function(t){return p.codec.base64.fromBits(t,1,1)},toBits:function(t){return p.codec.base64.toBits(t,1)}},p.mode.gcm={name:"gcm",encrypt:function(t,e,n,r,o){var i,s=e.slice(0),c=p.bitArray;return o=o||128,r=r||[],i=p.mode.gcm._ctrMode(!0,t,s,r,n,o),c.concat(i.data,i.tag)},decrypt:function(t,e,n,r,o){var i,s,c=e.slice(0),a=p.bitArray,l=a.bitLength(c);if(r=r||[],(o=o||128)<=l?(s=a.bitSlice(c,l-o),c=a.bitSlice(c,0,l-o)):(s=c,c=[]),i=p.mode.gcm._ctrMode(!1,t,c,r,n,o),!a.equal(i.tag,s))throw new p.exception.corrupt("gcm: tag doesn't match");return i.data},_galoisMultiply:function(t,e){var n,r,o,i,s,c=p.bitArray._xor4;for(o=[0,0,0,0],i=e.slice(0),n=0;n<128;n++){for(t[Math.floor(n/32)]&1<<31-n%32&&(o=c(o,i)),s=(1&i[3])!=0,r=3;r>0;r--)i[r]=i[r]>>>1|(1&i[r-1])<<31;i[0]=i[0]>>>1,s&&(i[0]=i[0]^225<<24)}return o},_ghash:function(t,e,n){var r,o,i=n.length;for(r=e.slice(0),o=0;o<i;o+=4)r[0]^=4294967295&n[o],r[1]^=4294967295&n[o+1],r[2]^=4294967295&n[o+2],r[3]^=4294967295&n[o+3],r=p.mode.gcm._galoisMultiply(r,t);return r},_ctrMode:function(t,e,n,r,o,i){var s,c,a,l,u,h,f,b,m,y,w,g,d=p.bitArray;for(m=n.length,y=d.bitLength(n),w=d.bitLength(r),g=d.bitLength(o),s=e.encrypt([0,0,0,0]),g===96?(c=o.slice(0),c=d.concat(c,[1])):(c=p.mode.gcm._ghash(s,[0,0,0,0],o),c=p.mode.gcm._ghash(s,c,[0,0,Math.floor(g/4294967296),4294967295&g])),a=p.mode.gcm._ghash(s,[0,0,0,0],r),h=c.slice(0),f=a.slice(0),t||(f=p.mode.gcm._ghash(s,a,n)),u=0;u<m;u+=4)h[3]++,l=e.encrypt(h),n[u]^=l[0],n[u+1]^=l[1],n[u+2]^=l[2],n[u+3]^=l[3];return n=d.clamp(n,y),t&&(f=p.mode.gcm._ghash(s,a,n)),b=[Math.floor(w/4294967296),4294967295&w,Math.floor(y/4294967296),4294967295&y],f=p.mode.gcm._ghash(s,f,b),l=e.encrypt(c),f[0]^=l[0],f[1]^=l[1],f[2]^=l[2],f[3]^=l[3],{tag:d.bitSlice(f,0,i),data:n}}},function(t){t[t.EXCEPTION=0]="EXCEPTION",t[t.NO_ENCRYPTION=1]="NO_ENCRYPTION",t[t.NO_STORAGE=2]="NO_STORAGE"}(Ot||(Ot={}));const Hn=Gt(C(!1),"onlyNsfw");function Gn(){let t=new AbortController;const e={limit:100,nsfw:!1,page:1},n=C({data:null,error:null}),r=C(void 0),o=Gt(C(e),"searchObject"),i=C(void 0);i.subscribe(a=>{o.update(l=>(l.page=a,l))});const s=async()=>{t.abort(),t=new AbortController;let a=null,l=null;try{const u=await new Promise(b=>{const m=new URLSearchParams;o.subscribe(w=>{Object.entries(w).forEach(g=>{if(g[1]!==void 0){if(Array.isArray(g[1])){g[1].forEach(d=>{m.append(g[0],d)});return}m.append(g[0],g[1])}}),b(m)})()}),h=new URL(`https://civitai.com/api/v1/models?${u.toString()}`),f=await fetch(h,{signal:t.signal});if(f.status!==200)throw new Error(f.status.toString());a=await f.json()}catch(u){if(u instanceof Error&&u.name==="AbortError")return;l=u}n.set({data:a,error:l})};async function c(){t.abort(),t=new AbortController;const a=await new Promise(l=>{o.subscribe(h=>{l(h.token)})()});o.set({...e,token:a,page:void 0}),r.update(l=>!l)}return{responce:n,reset:r,searchObject:o,page:i,doSearch:s,resetSearch:c}}const L=/^[a-z0-9]+(-[a-z0-9]+)*$/,Y=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:r,prefix:a,name:c};return e&&!D(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!D(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!D(c,n)?null:c}return null},D=(t,e)=>t?!!((t.provider===""||t.provider.match(L))&&(e&&t.prefix===""||t.prefix.match(L))&&t.name.match(L)):!1,Yt=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),J=Object.freeze({...Yt,...H}),et=Object.freeze({...J,body:"",hidden:!1});function Ne(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function At(t,e){const n=Ne(t,e);for(const r in et)r in H?r in t&&!(r in n)&&(n[r]=H[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Re(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,a=c&&i(c);a&&(o[s]=[c].concat(a))}return o[s]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Fe(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=At(r[c]||o[c],i)}return s(e),n.forEach(s),At(t,i)}function Jt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Re(t);for(const o in r){const i=r[o];i&&(e(o,Fe(t,o,i)),n.push(o))}return n}const Ue={provider:"",aliases:{},not_found:{},...Yt};function W(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Kt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!W(t,Ue))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(L)||typeof i.body!="string"||!W(i,et))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(L)||typeof s!="string"||!n[s]&&!r[s]||!W(i,et))return null}return e}const kt=Object.create(null);function De(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function O(t,e){const n=kt[t]||(kt[t]=Object.create(null));return n[e]||(n[e]=De(t,e))}function ut(t,e){return Kt(e)?Jt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Ve(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let M=!1;function Xt(t){return typeof t=="boolean"&&(M=t),M}function Be(t){const e=typeof t=="string"?Y(t,!0,M):t;if(e){const n=O(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ze(t,e){const n=Y(t,!0,M);if(!n)return!1;const r=O(n.provider,n.prefix);return Ve(r,n.name,e)}function qe(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),M&&!e&&!t.prefix){let o=!1;return Kt(t)&&(t.prefix="",Jt(t,(i,s)=>{s&&ze(i,s)&&(o=!0)})),o}const n=t.prefix;if(!D({provider:e,prefix:n,name:"a"}))return!1;const r=O(e,n);return!!ut(r,t)}const Wt=Object.freeze({width:null,height:null}),Zt=Object.freeze({...Wt,...H}),Qe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,He=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Et(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Qe);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=He.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const Ge=t=>t==="unset"||t==="undefined"||t==="none";function Ye(t,e){const n={...J,...t},r={...Zt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(m=>{const y=[],w=m.hFlip,g=m.vFlip;let d=m.rotate;w?g?d+=2:(y.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),y.push("scale(-1 1)"),o.top=o.left=0):g&&(y.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),y.push("scale(1 -1)"),o.top=o.left=0);let _;switch(d<0&&(d-=Math.floor(d/4)*4),d=d%4,d){case 1:_=o.height/2+o.top,y.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:y.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:_=o.width/2+o.left,y.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}d%2===1&&(o.left!==o.top&&(_=o.left,o.left=o.top,o.top=_),o.width!==o.height&&(_=o.width,o.width=o.height,o.height=_)),y.length&&(i='<g transform="'+y.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,a=o.width,l=o.height;let u,h;s===null?(h=c===null?"1em":c==="auto"?l:c,u=Et(h,a/l)):(u=s==="auto"?a:s,h=c===null?Et(u,l/a):c==="auto"?l:c);const f={},b=(m,y)=>{Ge(y)||(f[m]=y.toString())};return b("width",u),b("height",h),f.viewBox=o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+l.toString(),{attributes:f,body:i}}const Je=/\sid="(\S+)"/g,Ke="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Xe=0;function We(t,e=Ke){const n=[];let r;for(;r=Je.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof e=="function"?e(i):e+(Xe++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const nt=Object.create(null);function Ze(t,e){nt[t]=e}function rt(t){return nt[t]||nt[""]}function ft(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const dt=Object.create(null),E=["https://api.simplesvg.com","https://api.unisvg.com"],V=[];for(;E.length>0;)E.length===1||Math.random()>.5?V.push(E.shift()):V.push(E.pop());dt[""]=ft({resources:["https://api.iconify.design"].concat(V)});function $e(t,e){const n=ft(e);return n===null?!1:(dt[t]=n,!0)}function ht(t){return dt[t]}const tn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Ct=tn();function en(t,e){const n=ht(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function nn(t){return t===404}const rn=(t,e,n)=>{const r=[],o=en(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=a.length),s.icons.push(a)}),r.push(s),r};function on(t){if(typeof t=="string"){const e=ht(t);if(e)return e.path}return"/"}const sn=(t,e,n)=>{if(!Ct){n("abort",424);return}let r=on(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});r+=i+".json?"+a.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;Ct(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(nn(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},cn={prepare:rn,send:sn};function an(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,a=n[i]||(n[i]=Object.create(null)),l=a[s]||(a[s]=O(i,s));let u;c in l.icons?u=e.loaded:s===""||l.missing.has(c)?u=e.missing:u=e.pending;const h={provider:i,prefix:s,name:c};u.push(h)}),e}function $t(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function ln(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(t.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(t.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||$t([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let un=0;function fn(t,e,n){const r=un++,o=$t.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function dn(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?Y(o,e,n):o;i&&r.push(i)}),r}var hn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function pn(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let v=t.resources.slice(0);for(s=[];v.length>1;){const S=Math.floor(Math.random()*v.length);s.push(v[S]),v=v.slice(0,S).concat(v.slice(S+1))}s=s.concat(v)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let a="pending",l=0,u,h=null,f=[],b=[];typeof r=="function"&&b.push(r);function m(){h&&(clearTimeout(h),h=null)}function y(){a==="pending"&&(a="aborted"),m(),f.forEach(v=>{v.status==="pending"&&(v.status="aborted")}),f=[]}function w(v,S){S&&(b=[]),typeof v=="function"&&b.push(v)}function g(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:f.length,subscribe:w,abort:y}}function d(){a="failed",b.forEach(v=>{v(void 0,u)})}function _(){f.forEach(v=>{v.status==="pending"&&(v.status="aborted")}),f=[]}function ae(v,S,k){const R=S!=="success";switch(f=f.filter(x=>x!==v),a){case"pending":break;case"failed":if(R||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=k,d();return}if(R){u=k,f.length||(s.length?X():d());return}if(m(),_(),!t.random){const x=t.resources.indexOf(v.resource);x!==-1&&x!==t.index&&(t.index=x)}a="completed",b.forEach(x=>{x(k)})}function X(){if(a!=="pending")return;m();const v=s.shift();if(v===void 0){if(f.length){h=setTimeout(()=>{m(),a==="pending"&&(_(),d())},t.timeout);return}d();return}const S={status:"pending",resource:v,callback:(k,R)=>{ae(S,k,R)}};f.push(S),l++,h=setTimeout(X,t.rotate),n(v,e,S.callback)}return setTimeout(X),g}function te(t){const e={...hn,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const u=pn(e,c,a,(h,f)=>{r(),l&&l(h,f)});return n.push(u),u}function i(c){return n.find(a=>c(a))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function jt(){}const Z=Object.create(null);function gn(t){if(!Z[t]){const e=ht(t);if(!e)return;const n=te(e),r={config:e,redundancy:n};Z[t]=r}return Z[t]}function mn(t,e,n){let r,o;if(typeof t=="string"){const i=rt(t);if(!i)return n(void 0,424),jt;o=i.send;const s=gn(t);s&&(r=s.redundancy)}else{const i=ft(t);if(i){r=te(i);const s=t.resources?t.resources[0]:"",c=rt(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),jt):r.query(e,o,n)().abort}const Pt="iconify2",N="iconify",ee=N+"-count",Lt=N+"-version",ne=36e5,yn=168;function ot(t,e){try{return t.getItem(e)}catch{}}function pt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Tt(t,e){try{t.removeItem(e)}catch{}}function it(t,e){return pt(t,ee,e.toString())}function st(t){return parseInt(ot(t,ee))||0}const K={local:!0,session:!0},re={local:new Set,session:new Set};let gt=!1;function bn(t){gt=t}let F=typeof window>"u"?{}:window;function oe(t){const e=t+"Storage";try{if(F&&F[e]&&typeof F[e].length=="number")return F[e]}catch{}K[t]=!1}function ie(t,e){const n=oe(t);if(!n)return;const r=ot(n,Lt);if(r!==Pt){if(r){const c=st(n);for(let a=0;a<c;a++)Tt(n,N+a.toString())}pt(n,Lt,Pt),it(n,0);return}const o=Math.floor(Date.now()/ne)-yn,i=c=>{const a=N+c.toString(),l=ot(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}Tt(n,a)}};let s=st(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,it(n,s)):re[t].add(c))}function se(){if(!gt){bn(!0);for(const t in K)ie(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=O(r,o);if(!ut(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function vn(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in K)ie(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function wn(t,e){gt||se();function n(r){let o;if(!K[r]||!(o=oe(r)))return;const i=re[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=st(o),!it(o,s+1))return;const c={cached:Math.floor(Date.now()/ne),provider:t.provider,data:e};return pt(o,N+s.toString(),JSON.stringify(c))}e.lastModified&&!vn(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Mt(){}function _n(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,ln(t)}))}function Sn(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=rt(n)))return;i.prepare(n,r,o).forEach(c=>{mn(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=ut(t,a);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),wn(t,a)}catch(l){console.error(l)}_n(t)})})}))}const xn=(t,e)=>{const n=dn(t,!0,Xt()),r=an(n);if(!r.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(r.loaded,r.missing,r.pending,Mt)}),()=>{a=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===s)return;s=l,c=u,i.push(O(l,u));const h=o[l]||(o[l]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(a=>{const{provider:l,prefix:u,name:h}=a,f=O(l,u),b=f.pendingIcons||(f.pendingIcons=new Set);b.has(h)||(b.add(h),o[l][u].push(h))}),i.forEach(a=>{const{provider:l,prefix:u}=a;o[l][u].length&&Sn(a,o[l][u])}),e?fn(e,r,i):Mt};function In(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in Wt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const On=/[\s,]+/;function An(t,e){e.split(On).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function kn(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function En(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Cn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function jn(t){return"data:image/svg+xml,"+Cn(t)}function Pn(t){return'url("'+jn(t)+'")'}const Nt={...Zt,inline:!1},Ln={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Tn={display:"inline-block"},ct={"background-color":"currentColor"},ce={"background-color":"transparent"},Rt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ft={"-webkit-mask":ct,mask:ct,background:ce};for(const t in Ft){const e=Ft[t];for(const n in Rt)e[t+"-"+n]=Rt[n]}function Mn(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Nn(t,e){const n=In(Nt,e),r=e.mode||"svg",o=r==="svg"?{...Ln}:{};t.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let i=typeof e.style=="string"?e.style:"";for(let g in e){const d=e[g];if(d!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&An(n,d);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+d+"; ";break;case"rotate":typeof d=="string"?n[g]=kn(d):typeof d=="number"&&(n[g]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete o["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;Nt[g]===void 0&&(o[g]=d)}}const s=Ye(t,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(o,c),i!==""&&(o.style=i);let g=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),{svg:!0,attributes:o,body:We(s.body,d?()=>d+"ID"+g++:"iconifySvelte")}}const{body:a,width:l,height:u}=t,h=r==="mask"||(r==="bg"?!1:a.indexOf("currentColor")!==-1),f=En(a,{...c,width:l+"",height:u+""}),m={"--svg":Pn(f)},y=g=>{const d=c[g];d&&(m[g]=Mn(d))};y("width"),y("height"),Object.assign(m,Tn,h?ct:ce);let w="";for(const g in m)w+=g+": "+m[g]+";";return o.style=w+i,{svg:!1,attributes:o}}Xt(!0);Ze("",cn);if(typeof document<"u"&&typeof window<"u"){se();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!qe(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;$e(n,o)||console.error(r)}catch{console.error(r)}}}}function Rn(t,e,n,r,o){function i(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",i(),{data:{...J,...t}};let s;if(typeof t!="string"||(s=Y(t,!1,!0))===null)return i(),null;const c=Be(s);if(!c)return n&&(!e.loading||e.loading.name!==t)&&(i(),e.name="",e.loading={name:t,abort:xn([s],r)}),null;i(),e.name!==t&&(e.name=t,o&&!e.destroyed&&o(t));const a=["iconify"];return s.prefix!==""&&a.push("iconify--"+s.prefix),s.provider!==""&&a.push("iconify--"+s.provider),{data:c,classes:a}}function Fn(t,e){return t?Nn({...J,...t},e):null}function Ut(t){let e;function n(i,s){return i[0].svg?Dn:Un}let r=n(t),o=r(t);return{c(){o.c(),e=B()},l(i){o.l(i),e=B()},m(i,s){o.m(i,s),G(i,e,s)},p(i,s){r===(r=n(i))&&o?o.p(i,s):(o.d(1),o=r(i),o&&(o.c(),o.m(e.parentNode,e)))},d(i){i&&A(e),o.d(i)}}}function Un(t){let e,n=[t[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=z(r,n[o]);return{c(){e=de("span"),this.h()},l(o){e=he(o,"SPAN",{}),Dt(e).forEach(A),this.h()},h(){bt(e,r)},m(o,i){G(o,e,i)},p(o,i){bt(e,r=Vt(n,[i&1&&o[0].attributes]))},d(o){o&&A(e)}}}function Dn(t){let e,n,r=t[0].body+"",o=[t[0].attributes],i={};for(let s=0;s<o.length;s+=1)i=z(i,o[s]);return{c(){e=pe("svg"),n=new ge(!0),this.h()},l(s){e=me(s,"svg",{});var c=Dt(e);n=ye(c,!0),c.forEach(A),this.h()},h(){n.a=null,vt(e,i)},m(s,c){G(s,e,c),n.m(r,e)},p(s,c){c&1&&r!==(r=s[0].body+"")&&n.p(r),vt(e,i=Vt(o,[c&1&&s[0].attributes]))},d(s){s&&A(e)}}}function Vn(t){let e,n=t[0]&&Ut(t);return{c(){n&&n.c(),e=B()},l(r){n&&n.l(r),e=B()},m(r,o){n&&n.m(r,o),G(r,e,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=Ut(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:mt,o:mt,d(r){r&&A(e),n&&n.d(r)}}}function Bn(t,e,n){const r={name:"",loading:null,destroyed:!1};let o=!1,i=0,s;const c=l=>{typeof e.onLoad=="function"&&e.onLoad(l),be()("load",{icon:l})};function a(){n(3,i++,i)}return ue(()=>{n(2,o=!0)}),fe(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),t.$$set=l=>{n(6,e=z(z({},e),yt(l)))},t.$$.update=()=>{{const l=Rn(e.icon,r,o,a,c);n(0,s=l?Fn(l.data,e):null),s&&l.classes&&n(0,s.attributes.class=(typeof e.class=="string"?e.class+" ":"")+l.classes.join(" "),s)}},e=yt(e),[s,r,o,i]}class Yn extends ve{constructor(e){super(),we(this,e,Bn,Vn,le,{})}}export{Yn as I,Gn as S,Hn as o};
