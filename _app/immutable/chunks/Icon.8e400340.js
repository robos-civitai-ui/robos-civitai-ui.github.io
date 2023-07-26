import{s as Re,e as L,i as D,w as oe,d as k,o as ze,W as Be,P as A,Q as re,f as Qe,g as qe,h as xe,X as ie,r as He,Y as Ue,u as Ve,Z as Ke,_ as se,O as Ge}from"./scheduler.b932d44b.js";import{S as We,i as Je}from"./index.9a07e311.js";function Se(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const l in s)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[i]=c}else for(const l in s)o[l]=1}for(const s in r)s in n||(n[s]=void 0);return n}const T=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!M(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!M(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!M(c,n)?null:c}return null},M=(e,t)=>e?!!((e.provider===""||e.provider.match(T))&&(t&&e.prefix===""||e.prefix.match(T))&&e.name.match(T)):!1,ve=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),z=Object.freeze({...ve,...N}),U=Object.freeze({...z,body:"",hidden:!1});function Xe(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ce(e,t){const n=Xe(e,t);for(const r in U)r in N?r in e&&!(r in n)&&(n[r]=N[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ye(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Ze(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ce(r[c]||o[c],i)}return s(t),n.forEach(s),ce(e,i)}function Ie(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Ye(e);for(const o in r){const i=r[o];i&&(t(o,Ze(e,o,i)),n.push(o))}return n}const $e={provider:"",aliases:{},not_found:{},...ve};function q(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ke(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!q(e,$e))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(T)||typeof i.body!="string"||!q(i,U))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(T)||typeof s!="string"||!n[s]&&!r[s]||!q(i,U))return null}return t}const le=Object.create(null);function et(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function v(e,t){const n=le[e]||(le[e]=Object.create(null));return n[t]||(n[t]=et(e,t))}function Y(e,t){return ke(t)?Ie(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function tt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let j=!1;function _e(e){return typeof e=="boolean"&&(j=e),j}function nt(e){const t=typeof e=="string"?R(e,!0,j):e;if(t){const n=v(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ot(e,t){const n=R(e,!0,j);if(!n)return!1;const r=v(n.provider,n.prefix);return tt(r,n.name,t)}function rt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),j&&!t&&!e.prefix){let o=!1;return ke(e)&&(e.prefix="",Ie(e,(i,s)=>{s&&ot(i,s)&&(o=!0)})),o}const n=e.prefix;if(!M({provider:t,prefix:n,name:"a"}))return!1;const r=v(t,n);return!!Y(r,e)}const Ce=Object.freeze({width:null,height:null}),Te=Object.freeze({...Ce,...N}),it=/(-?[0-9.]*[0-9]+[0-9.]*)/g,st=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fe(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(it);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=st.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const ct=e=>e==="unset"||e==="undefined"||e==="none";function lt(e,t){const n={...z,...e},r={...Te,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(y=>{const m=[],I=y.hFlip,g=y.vFlip;let a=y.rotate;I?g?a+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):g&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let b;switch(a<0&&(a-=Math.floor(a/4)*4),a=a%4,a){case 1:b=o.height/2+o.top,m.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,m.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}a%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let u,d;s===null?(d=c===null?"1em":c==="auto"?f:c,u=fe(d,l/f)):(u=s==="auto"?l:s,d=c===null?fe(u,f/l):c==="auto"?f:c);const p={},w=(y,m)=>{ct(m)||(p[y]=m.toString())};return w("width",u),w("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:i}}const ft=/\sid="(\S+)"/g,ut="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let at=0;function dt(e,t=ut){const n=[];let r;for(;r=ft.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(at++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const V=Object.create(null);function ht(e,t){V[e]=t}function K(e){return V[e]||V[""]}function Z(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const $=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;C.length>0;)C.length===1||Math.random()>.5?F.push(C.shift()):F.push(C.pop());$[""]=Z({resources:["https://api.iconify.design"].concat(F)});function pt(e,t){const n=Z(t);return n===null?!1:($[e]=n,!0)}function ee(e){return $[e]}const gt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ue=gt();function mt(e,t){const n=ee(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function yt(e){return e===404}const bt=(e,t,n)=>{const r=[],o=mt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function wt(e){if(typeof e=="string"){const t=ee(e);if(t)return t.path}return"/"}const xt=(e,t,n)=>{if(!ue){n("abort",424);return}let r=wt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ue(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(yt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},St={prepare:bt,send:xt};function vt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let u;c in f.icons?u=t.loaded:s===""||f.missing.has(c)?u=t.missing:u=t.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),t}function je(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function It(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||je([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let kt=0;function _t(e,t,n){const r=kt++,o=je.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function Ct(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?R(o,t,n):o;i&&r.push(i)}),r}var Tt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function jt(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",f=0,u,d=null,p=[],w=[];typeof r=="function"&&w.push(r);function y(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),y(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function I(h,x){x&&(w=[]),typeof h=="function"&&w.push(h)}function g(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:I,abort:m}}function a(){l="failed",w.forEach(h=>{h(void 0,u)})}function b(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function De(h,x,_){const E=x!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=_,a();return}if(E){u=_,p.length||(s.length?Q():a());return}if(y(),b(),!e.random){const S=e.resources.indexOf(h.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",w.forEach(S=>{S(_)})}function Q(){if(l!=="pending")return;y();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{y(),l==="pending"&&(b(),a())},e.timeout);return}a();return}const x={status:"pending",resource:h,callback:(_,E)=>{De(x,_,E)}};p.push(x),f++,d=setTimeout(Q,e.rotate),n(h,t,x.callback)}return setTimeout(Q),g}function Pe(e){const t={...Tt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const u=jt(t,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ae(){}const H=Object.create(null);function Pt(e){if(!H[e]){const t=ee(e);if(!t)return;const n=Pe(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function Et(e,t,n){let r,o;if(typeof e=="string"){const i=K(e);if(!i)return n(void 0,424),ae;o=i.send;const s=Pt(e);s&&(r=s.redundancy)}else{const i=Z(e);if(i){r=Pe(i);const s=e.resources?e.resources[0]:"",c=K(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ae):r.query(t,o,n)().abort}const de="iconify2",P="iconify",Ee=P+"-count",he=P+"-version",Oe=36e5,Ot=168;function G(e,t){try{return e.getItem(t)}catch{}}function te(e,t,n){try{return e.setItem(t,n),!0}catch{}}function pe(e,t){try{e.removeItem(t)}catch{}}function W(e,t){return te(e,Ee,t.toString())}function J(e){return parseInt(G(e,Ee))||0}const B={local:!0,session:!0},Me={local:new Set,session:new Set};let ne=!1;function Mt(e){ne=e}let O=typeof window>"u"?{}:window;function Fe(e){const t=e+"Storage";try{if(O&&O[t]&&typeof O[t].length=="number")return O[t]}catch{}B[e]=!1}function Le(e,t){const n=Fe(e);if(!n)return;const r=G(n,he);if(r!==de){if(r){const c=J(n);for(let l=0;l<c;l++)pe(n,P+l.toString())}te(n,he,de),W(n,0);return}const o=Math.floor(Date.now()/Oe)-Ot,i=c=>{const l=P+c.toString(),f=G(n,l);if(typeof f=="string"){try{const u=JSON.parse(f);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}pe(n,l)}};let s=J(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,W(n,s)):Me[e].add(c))}function Ae(){if(!ne){Mt(!0);for(const e in B)Le(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=v(r,o);if(!Y(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Ft(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in B)Le(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Lt(e,t){ne||Ae();function n(r){let o;if(!B[r]||!(o=Fe(r)))return;const i=Me[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=J(o),!W(o,s+1))return;const c={cached:Math.floor(Date.now()/Oe),provider:e.provider,data:t};return te(o,P+s.toString(),JSON.stringify(c))}t.lastModified&&!Ft(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ge(){}function At(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,It(e)}))}function Nt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=K(n)))return;i.prepare(n,r,o).forEach(c=>{Et(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=Y(e,l);if(!f.length)return;const u=e.pendingIcons;u&&f.forEach(d=>{u.delete(d)}),Lt(e,l)}catch(f){console.error(f)}At(e)})})}))}const Dt=(e,t)=>{const n=Ct(e,!0,_e()),r=vt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ge)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:u}=l;if(u===c&&f===s)return;s=f,c=u,i.push(v(f,u));const d=o[f]||(o[f]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:u,name:d}=l,p=v(f,u),w=p.pendingIcons||(p.pendingIcons=new Set);w.has(d)||(w.add(d),o[f][u].push(d))}),i.forEach(l=>{const{provider:f,prefix:u}=l;o[f][u].length&&Nt(l,o[f][u])}),t?_t(t,r,i):ge};function Rt(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Ce?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const zt=/[\s,]+/;function Bt(e,t){t.split(zt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Qt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function qt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Ht(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ut(e){return"data:image/svg+xml,"+Ht(e)}function Vt(e){return'url("'+Ut(e)+'")'}const me={...Te,inline:!1},Kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Gt={display:"inline-block"},X={"background-color":"currentColor"},Ne={"background-color":"transparent"},ye={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},be={"-webkit-mask":X,mask:X,background:Ne};for(const e in be){const t=be[e];for(const n in ye)t[e+"-"+n]=ye[n]}function Wt(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Jt(e,t){const n=Rt(me,t),r=t.mode||"svg",o=r==="svg"?{...Kt}:{};e.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let i=typeof t.style=="string"?t.style:"";for(let g in t){const a=t[g];if(a!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Bt(n,a);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+a+"; ";break;case"rotate":typeof a=="string"?n[g]=Qt(a):typeof a=="number"&&(n[g]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete o["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;me[g]===void 0&&(o[g]=a)}}const s=lt(e,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(o,c),i!==""&&(o.style=i);let g=0,a=t.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),{svg:!0,attributes:o,body:dt(s.body,a?()=>a+"ID"+g++:"iconifySvelte")}}const{body:l,width:f,height:u}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=qt(l,{...c,width:f+"",height:u+""}),y={"--svg":Vt(p)},m=g=>{const a=c[g];a&&(y[g]=Wt(a))};m("width"),m("height"),Object.assign(y,Gt,d?X:Ne);let I="";for(const g in y)I+=g+": "+y[g]+";";return o.style=I+i,{svg:!1,attributes:o}}_e(!0);ht("",St);if(typeof document<"u"&&typeof window<"u"){Ae();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!rt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;pt(n,o)||console.error(r)}catch{console.error(r)}}}}function Xt(e,t,n,r,o){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...z,...e}};let s;if(typeof e!="string"||(s=R(e,!1,!0))===null)return i(),null;const c=nt(s);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:Dt([s],r)}),null;i(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const l=["iconify"];return s.prefix!==""&&l.push("iconify--"+s.prefix),s.provider!==""&&l.push("iconify--"+s.provider),{data:c,classes:l}}function Yt(e,t){return e?Jt({...z,...e},t):null}function we(e){let t;function n(i,s){return i[0].svg?$t:Zt}let r=n(e),o=r(e);return{c(){o.c(),t=L()},l(i){o.l(i),t=L()},m(i,s){o.m(i,s),D(i,t,s)},p(i,s){r===(r=n(i))&&o?o.p(i,s):(o.d(1),o=r(i),o&&(o.c(),o.m(t.parentNode,t)))},d(i){i&&k(t),o.d(i)}}}function Zt(e){let t,n=[e[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=A(r,n[o]);return{c(){t=Qe("span"),this.h()},l(o){t=qe(o,"SPAN",{}),xe(t).forEach(k),this.h()},h(){ie(t,r)},m(o,i){D(o,t,i)},p(o,i){ie(t,r=Se(n,[i&1&&o[0].attributes]))},d(o){o&&k(t)}}}function $t(e){let t,n,r=e[0].body+"",o=[e[0].attributes],i={};for(let s=0;s<o.length;s+=1)i=A(i,o[s]);return{c(){t=He("svg"),n=new Ue(!0),this.h()},l(s){t=Ve(s,"svg",{});var c=xe(t);n=Ke(c,!0),c.forEach(k),this.h()},h(){n.a=null,se(t,i)},m(s,c){D(s,t,c),n.m(r,t)},p(s,c){c&1&&r!==(r=s[0].body+"")&&n.p(r),se(t,i=Se(o,[c&1&&s[0].attributes]))},d(s){s&&k(t)}}}function en(e){let t,n=e[0]&&we(e);return{c(){n&&n.c(),t=L()},l(r){n&&n.l(r),t=L()},m(r,o){n&&n.m(r,o),D(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=we(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:oe,o:oe,d(r){r&&k(t),n&&n.d(r)}}}function tn(e,t,n){const r={name:"",loading:null,destroyed:!1};let o=!1,i=0,s;const c=f=>{typeof t.onLoad=="function"&&t.onLoad(f),Ge()("load",{icon:f})};function l(){n(3,i++,i)}return ze(()=>{n(2,o=!0)}),Be(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=f=>{n(6,t=A(A({},t),re(f)))},e.$$.update=()=>{{const f=Xt(t.icon,r,o,l,c);n(0,s=f?Yt(f.data,t):null),s&&f.classes&&n(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+f.classes.join(" "),s)}},t=re(t),[s,r,o,i]}class rn extends We{constructor(t){super(),Je(this,t,tn,en,Re,{})}}export{rn as I};
