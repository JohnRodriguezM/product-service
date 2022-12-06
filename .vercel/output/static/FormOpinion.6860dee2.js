import{r as mr}from"./chunks/index.530d6e5e.js";/**
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
 */const yr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Qa=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(p=64)),s.push(n[u],n[f],n[p],n[w])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Qa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||f==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const w=a<<4&240|l>>2;if(s.push(w),f!==64){const I=l<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Xa=function(e){const t=yr(e);return vr.encodeByteArray(t,!0)},Ge=function(e){return Xa(e).replace(/\./g,"")},Ya=function(e){try{return vr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ja(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wr(){return typeof indexedDB=="object"}function Er(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Za(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ec=()=>tc().__FIREBASE_DEFAULTS__,nc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},sc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ya(e[1]);return t&&JSON.parse(t)},Ir=()=>{try{return ec()||nc()||sc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ic=e=>{var t,n;return(n=(t=Ir())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rc=e=>{const t=ic(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},oc=()=>{var e;return(e=Ir())===null||e===void 0?void 0:e.config};/**
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
 */class ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function cc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ge(JSON.stringify(n)),Ge(JSON.stringify(o)),a].join(".")}/**
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
 */const lc="FirebaseError";class It extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=lc,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?uc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new It(i,a,s)}}function uc(e,t){return e.replace(hc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const hc=/\{\$([^}]+)}/g;function Ke(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(mi(r)&&mi(o)){if(!Ke(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function mi(e){return e!==null&&typeof e=="object"}/**
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
 */const fc=1e3,dc=2,pc=4*60*60*1e3,gc=.5;function yi(e,t=fc,n=dc){const s=t*Math.pow(n,e),i=Math.round(gc*s*(Math.random()-.5)*2);return Math.min(pc,s+i)}/**
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
 */function xt(e){return e&&e._delegate?e._delegate:e}class ft{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class mc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ac;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vc(t))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=At){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=At){return this.instances.has(t)}getOptions(t=At){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=At){return this.component?this.component.multipleInstances?t:At:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yc(e){return e===At?void 0:e}function vc(e){return e.instantiationMode==="EAGER"}/**
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
 */class wc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const Ec={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Ic=A.INFO,bc={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Tc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=bc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ds{constructor(t){this.name=t,this._logLevel=Ic,this._logHandler=Tc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ec[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const Ac=(e,t)=>t.some(n=>e instanceof n);let vi,wi;function Sc(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return wi||(wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const br=new WeakMap,is=new WeakMap,Tr=new WeakMap,jn=new WeakMap,_s=new WeakMap;function Dc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(gt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&br.set(n,e)}).catch(()=>{}),_s.set(t,e),t}function _c(e){if(is.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});is.set(e,t)}let rs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return is.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Tr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kc(e){rs=e(rs)}function Nc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Hn(this),t,...n);return Tr.set(s,t.sort?t.sort():[t]),gt(s)}:Cc().includes(e)?function(...t){return e.apply(Hn(this),t),gt(br.get(this))}:function(...t){return gt(e.apply(Hn(this),t))}}function xc(e){return typeof e=="function"?Nc(e):(e instanceof IDBTransaction&&_c(e),Ac(e,Sc())?new Proxy(e,rs):e)}function gt(e){if(e instanceof IDBRequest)return Dc(e);if(jn.has(e))return jn.get(e);const t=xc(e);return t!==e&&(jn.set(e,t),_s.set(t,e)),t}const Hn=e=>_s.get(e);function Ar(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=gt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gt(o.result),c.oldVersion,c.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Rc=["get","getKey","getAll","getAllKeys","count"],Oc=["put","add","delete","clear"],qn=new Map;function Ei(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(qn.get(t))return qn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Oc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rc.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return qn.set(t,r),r}kc(e=>({...e,get:(t,n,s)=>Ei(t,n)||e.get(t,n,s),has:(t,n)=>!!Ei(t,n)||e.has(t,n)}));/**
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
 */class Mc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lc(e){const t=e.getComponent();return t?.type==="VERSION"}const os="@firebase/app",Ii="0.8.3";/**
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
 */const Rt=new Ds("@firebase/app"),Pc="@firebase/app-compat",Fc="@firebase/analytics-compat",Vc="@firebase/analytics",Uc="@firebase/app-check-compat",Bc="@firebase/app-check",$c="@firebase/auth",jc="@firebase/auth-compat",Hc="@firebase/database",qc="@firebase/database-compat",Gc="@firebase/functions",Kc="@firebase/functions-compat",zc="@firebase/installations",Wc="@firebase/installations-compat",Qc="@firebase/messaging",Xc="@firebase/messaging-compat",Yc="@firebase/performance",Jc="@firebase/performance-compat",Zc="@firebase/remote-config",tl="@firebase/remote-config-compat",el="@firebase/storage",nl="@firebase/storage-compat",sl="@firebase/firestore",il="@firebase/firestore-compat",rl="firebase",ol="9.13.0";/**
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
 */const as="[DEFAULT]",al={[os]:"fire-core",[Pc]:"fire-core-compat",[Vc]:"fire-analytics",[Fc]:"fire-analytics-compat",[Bc]:"fire-app-check",[Uc]:"fire-app-check-compat",[$c]:"fire-auth",[jc]:"fire-auth-compat",[Hc]:"fire-rtdb",[qc]:"fire-rtdb-compat",[Gc]:"fire-fn",[Kc]:"fire-fn-compat",[zc]:"fire-iid",[Wc]:"fire-iid-compat",[Qc]:"fire-fcm",[Xc]:"fire-fcm-compat",[Yc]:"fire-perf",[Jc]:"fire-perf-compat",[Zc]:"fire-rc",[tl]:"fire-rc-compat",[el]:"fire-gcs",[nl]:"fire-gcs-compat",[sl]:"fire-fst",[il]:"fire-fst-compat","fire-js":"fire-js",[rl]:"fire-js-all"};/**
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
 */const ze=new Map,cs=new Map;function cl(e,t){try{e.container.addComponent(t)}catch(n){Rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vt(e){const t=e.name;if(cs.has(t))return Rt.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,e);for(const n of ze.values())cl(n,e);return!0}function be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ll={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new dn("app","Firebase",ll);/**
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
 */class ul{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const hl=ol;function Sr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:as,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(n||(n=oc()),!n)throw mt.create("no-options");const r=ze.get(i);if(r){if(Ke(n,r.options)&&Ke(s,r.config))return r;throw mt.create("duplicate-app",{appName:i})}const o=new wc(i);for(const c of cs.values())o.addComponent(c);const a=new ul(n,s,o);return ze.set(i,a),a}function Cr(e=as){const t=ze.get(e);if(!t&&e===as)return Sr();if(!t)throw mt.create("no-app",{appName:e});return t}function ot(e,t,n){var s;let i=(s=al[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}vt(new ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const fl="firebase-heartbeat-database",dl=1,le="firebase-heartbeat-store";let Gn=null;function Dr(){return Gn||(Gn=Ar(fl,dl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(le)}}}).catch(e=>{throw mt.create("idb-open",{originalErrorMessage:e.message})})),Gn}async function pl(e){var t;try{return(await Dr()).transaction(le).objectStore(le).get(_r(e))}catch(n){if(n instanceof It)Rt.warn(n.message);else{const s=mt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Rt.warn(s.message)}}}async function bi(e,t){var n;try{const i=(await Dr()).transaction(le,"readwrite");return await i.objectStore(le).put(t,_r(e)),i.done}catch(s){if(s instanceof It)Rt.warn(s.message);else{const i=mt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Rt.warn(i.message)}}}function _r(e){return`${e.name}!${e.options.appId}`}/**
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
 */const gl=1024,ml=30*24*60*60*1e3;class yl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ti();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ml}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ti(),{heartbeatsToSend:n,unsentEntries:s}=vl(this._heartbeatsCache.heartbeats),i=Ge(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ti(){return new Date().toISOString().substring(0,10)}function vl(e,t=gl){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ai(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ai(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wr()?Er().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ai(e){return Ge(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function El(e){vt(new ft("platform-logger",t=>new Mc(t),"PRIVATE")),vt(new ft("heartbeat",t=>new yl(t),"PRIVATE")),ot(os,Ii,e),ot(os,Ii,"esm2017"),ot("fire-js","")}El("");var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ks=ks||{},y=Il||self;function We(){}function pn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Te(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bl(e){return Object.prototype.hasOwnProperty.call(e,Kn)&&e[Kn]||(e[Kn]=++Tl)}var Kn="closure_uid_"+(1e9*Math.random()>>>0),Tl=0;function Al(e,t,n){return e.call.apply(e.bind,arguments)}function Sl(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function G(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=Al:G=Sl,G.apply(null,arguments)}function Pe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function $(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var Cl=0;bt.prototype.s=!1;bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Cl!=0)&&bl(this)};bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ns(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Si(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(pn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function K(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var Dl=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",We,t),y.removeEventListener("test",We,t)}catch{}return e}();function Qe(e){return/^[\s\xa0]*$/.test(e)}var Ci=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function zn(e,t){return e<t?-1:e>t?1:0}function gn(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function rt(e){return gn().indexOf(e)!=-1}function xs(e){return xs[" "](e),e}xs[" "]=We;function _l(e){var t=xl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var kl=rt("Opera"),qt=rt("Trident")||rt("MSIE"),Nr=rt("Edge"),ls=Nr||qt,xr=rt("Gecko")&&!(gn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),Nl=gn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function Rr(){var e=y.document;return e?e.documentMode:void 0}var Xe;t:{var Wn="",Qn=function(){var e=gn();if(xr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Nr)return/Edge\/([\d\.]+)/.exec(e);if(qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Nl)return/WebKit\/(\S+)/.exec(e);if(kl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Qn&&(Wn=Qn?Qn[1]:""),qt){var Xn=Rr();if(Xn!=null&&Xn>parseFloat(Wn)){Xe=String(Xn);break t}}Xe=Wn}var xl={};function Rl(){return _l(function(){let e=0;const t=Ci(String(Xe)).split("."),n=Ci("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=zn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||zn(i[2].length==0,r[2].length==0)||zn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var us;if(y.document&&qt){var Di=Rr();us=Di||parseInt(Xe,10)||void 0}else us=void 0;var Ol=us;function ue(e,t){if(K.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(xr){t:{try{xs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ml[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.X.h.call(this)}}$(ue,K);var Ml={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),Ll=0;function Pl(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Ll,this.ba=this.ea=!1}function mn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Rs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Or(e){const t={};for(const n in e)t[n]=e[n];return t}const _i="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<_i.length;r++)n=_i[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function yn(e){this.src=e,this.g={},this.h=0}yn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=fs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Pl(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function hs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=kr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(mn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),Yn={};function Lr(e,t,n,s,i){if(s&&s.once)return Fr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Lr(e,t[r],n,s,i);return null}return n=Ps(n),e&&e[Ae]?e.N(t,n,Te(s)?!!s.capture:!!s,i):Pr(e,t,n,!1,s,i)}function Pr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Te(i)?!!i.capture:!!i,a=Ls(e);if(a||(e[Os]=a=new yn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Fl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Dl||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ur(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fl(){function e(n){return t.call(e.src,e.listener,n)}const t=Vl;return e}function Fr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fr(e,t[r],n,s,i);return null}return n=Ps(n),e&&e[Ae]?e.O(t,n,Te(s)?!!s.capture:!!s,i):Pr(e,t,n,!0,s,i)}function Vr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Vr(e,t[r],n,s,i);else s=Te(s)?!!s.capture:!!s,n=Ps(n),e&&e[Ae]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=fs(r,n,s,i),-1<n&&(mn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fs(t,n,s,i)),(n=-1<e?t[e]:null)&&Ms(n))}function Ms(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ae])hs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ur(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ls(t))?(hs(n,e),n.h==0&&(n.src=null,t[Os]=null)):mn(e)}}}function Ur(e){return e in Yn?Yn[e]:Yn[e]="on"+e}function Vl(e,t){if(e.ba)e=!0;else{t=new ue(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ms(e),e=n.call(s,t)}return e}function Ls(e){return e=e[Os],e instanceof yn?e:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ps(e){return typeof e=="function"?e:(e[Jn]||(e[Jn]=function(t){return e.handleEvent(t)}),e[Jn])}function F(){bt.call(this),this.i=new yn(this),this.P=this,this.I=null}$(F,bt);F.prototype[Ae]=!0;F.prototype.removeEventListener=function(e,t,n,s){Vr(this,e,t,n,s)};function B(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new K(t,e);else if(t instanceof K)t.target=t.target||e;else{var i=t;t=new K(s,e),Mr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Fe(o,s,!0,t)&&i}if(o=t.g=e,i=Fe(o,s,!0,t)&&i,i=Fe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Fe(o,s,!1,t)&&i}F.prototype.M=function(){if(F.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)mn(n[s]);delete e.g[t],e.h--}}this.I=null};F.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};F.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Fe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hs(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Fs=y.JSON.stringify;function Ul(){var e=jr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Bl{constructor(){this.h=this.g=null}add(t,n){const s=Br.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Br=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new $l,e=>e.reset());class $l{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jl(e){y.setTimeout(()=>{throw e},0)}function $r(e,t){ds||Hl(),ps||(ds(),ps=!0),jr.add(e,t)}var ds;function Hl(){var e=y.Promise.resolve(void 0);ds=function(){e.then(ql)}}var ps=!1,jr=new Bl;function ql(){for(var e;e=Ul();){try{e.h.call(e.g)}catch(n){jl(n)}var t=Br;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ps=!1}function vn(e,t){F.call(this),this.h=e||1,this.g=t||y,this.j=G(this.lb,this),this.l=Date.now()}$(vn,F);g=vn.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),B(this,"tick"),this.ca&&(Vs(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}g.M=function(){vn.X.M.call(this),Vs(this),delete this.g};function Us(e,t,n){if(typeof e=="function")n&&(e=G(e,n));else if(e&&typeof e.handleEvent=="function")e=G(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function Hr(e){e.g=Us(()=>{e.g=null,e.i&&(e.i=!1,Hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Gl extends bt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Hr(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(e){bt.call(this),this.h=e,this.g={}}$(he,bt);var ki=[];function qr(e,t,n,s){Array.isArray(n)||(n&&(ki[0]=n.toString()),n=ki);for(var i=0;i<n.length;i++){var r=Lr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Gr(e){Rs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ms(t)},e),e.g={}}he.prototype.M=function(){he.X.M.call(this),Gr(this)};he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wn(){this.g=!0}wn.prototype.Aa=function(){this.g=!1};function Kl(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function zl(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Bt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ql(e,n)+(s?" "+s:"")})}function Wl(e,t){e.info(function(){return"TIMEOUT: "+t})}wn.prototype.info=function(){};function Ql(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fs(n)}catch{return t}}var Vt={},Ni=null;function En(){return Ni=Ni||new F}Vt.Pa="serverreachability";function Kr(e){K.call(this,Vt.Pa,e)}$(Kr,K);function fe(e){const t=En();B(t,new Kr(t))}Vt.STAT_EVENT="statevent";function zr(e,t){K.call(this,Vt.STAT_EVENT,e),this.stat=t}$(zr,K);function z(e){const t=En();B(t,new zr(t,e))}Vt.Qa="timingevent";function Wr(e,t){K.call(this,Vt.Qa,e),this.size=t}$(Wr,K);function Se(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var In={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bs(){}Bs.prototype.h=null;function xi(e){return e.h||(e.h=e.i())}function Xr(){}var Ce={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $s(){K.call(this,"d")}$($s,K);function js(){K.call(this,"c")}$(js,K);var gs;function bn(){}$(bn,Bs);bn.prototype.g=function(){return new XMLHttpRequest};bn.prototype.i=function(){return{}};gs=new bn;function De(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new he(this),this.O=Xl,e=ls?125:void 0,this.T=new vn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Yr}function Yr(){this.i=null,this.g="",this.h=!1}var Xl=45e3,ms={},Ye={};g=De.prototype;g.setTimeout=function(e){this.O=e};function ys(e,t,n){e.K=1,e.v=An(dt(t)),e.s=n,e.P=!0,Jr(e,null)}function Jr(e,t){e.F=Date.now(),_e(e),e.A=dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),oo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Yr,e.g=_o(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Gl(G(e.La,e,e.g),e.N)),qr(e.S,e.g,"readystatechange",e.ib),t=e.H?Or(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),fe(),Kl(e.j,e.u,e.A,e.m,e.U,e.s)}g.ib=function(e){e=e.target;const t=this.L;t&&lt(e)==3?t.l():this.La(e)};g.La=function(e){try{if(e==this.g)t:{const u=lt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||ls||this.g&&(this.h.h||this.g.fa()||Li(this.g)))){this.I||u!=4||t==7||(t==8||0>=f?fe(3):fe(2)),Tn(this);var n=this.g.aa();this.Y=n;e:if(Zr(this)){var s=Li(this.g);e="";var i=s.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){St(this),se(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zl(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qe(a)){var l=a;break e}}l=null}if(n=l)Bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vs(this,n);else{this.i=!1,this.o=3,z(12),St(this),se(this);break t}}this.P?(to(this,u,o),ls&&this.i&&u==3&&(qr(this.S,this.T,"tick",this.hb),this.T.start())):(Bt(this.j,this.m,o,null),vs(this,o)),u==4&&St(this),this.i&&!this.I&&(u==4?Ao(this.l,this):(this.i=!1,_e(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,z(12)):(this.o=0,z(13)),St(this),se(this)}}}catch{}finally{}};function Zr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function to(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Yl(e,n),i==Ye){t==4&&(e.o=4,z(14),s=!1),Bt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ms){e.o=4,z(15),Bt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Bt(e.j,e.m,i,null),vs(e,i);Zr(e)&&i!=Ye&&i!=ms&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qs(t),t.K=!0,z(11))):(Bt(e.j,e.m,n,"[Invalid Chunked Response]"),St(e),se(e))}g.hb=function(){if(this.g){var e=lt(this.g),t=this.g.fa();this.C<t.length&&(Tn(this),to(this,e,t),this.i&&e!=4&&_e(this))}};function Yl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ye:(n=Number(t.substring(n,s)),isNaN(n)?ms:(s+=1,s+n>t.length?Ye:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,St(this)};function _e(e){e.V=Date.now()+e.O,eo(e,e.O)}function eo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Se(G(e.gb,e),t)}function Tn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}g.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Wl(this.j,this.A),this.K!=2&&(fe(),z(17)),St(this),this.o=2,se(this)):eo(this,this.V-e)};function se(e){e.l.G==0||e.I||Ao(e.l,e)}function St(e){Tn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Vs(e.T),Gr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ws(n.h,e))){if(!e.J&&ws(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)tn(n),Dn(n);else break t;Ws(n),z(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Se(G(n.cb,n),6e3));if(1>=lo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ct(n,11)}else if((e.J||n.g==e)&&tn(n),!Qe(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const w=e.g;if(w){const I=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.h;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Hs(r,r.h),r.h=null))}if(s.D){const x=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.za=x,_(s.F,s.D,x))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Do(s,s.H?s.ka:null,s.V),o.J){uo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Tn(a),_e(a)),s.g=o}else bo(s);0<n.i.length&&_n(n)}else l[0]!="stop"&&l[0]!="close"||Ct(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ct(n,7):zs(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}fe(4)}catch{}}function Jl(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(pn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Zl(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(pn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function no(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(pn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Zl(e),s=Jl(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=t!==void 0?t:e.h,Je(this,e.j),this.s=e.s,this.g=e.g,Ze(this,e.m),this.l=e.l,t=e.i;var n=new de;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ri(this,n),this.o=e.o}else e&&(n=String(e).match(so))?(this.h=!!t,Je(this,n[1]||"",!0),this.s=ee(n[2]||""),this.g=ee(n[3]||"",!0),Ze(this,n[4]),this.l=ee(n[5]||"",!0),Ri(this,n[6]||"",!0),this.o=ee(n[7]||"")):(this.h=!!t,this.i=new de(null,this.h))}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ne(t,Oi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ne(t,Oi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ne(n,n.charAt(0)=="/"?su:nu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ne(n,ru)),e.join("")};function dt(e){return new kt(e)}function Je(e,t,n){e.j=n?ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ze(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ri(e,t,n){t instanceof de?(e.i=t,ou(e.i,e.h)):(n||(t=ne(t,iu)),e.i=new de(t,e.h))}function _(e,t,n){e.i.set(t,n)}function An(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ne(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,eu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function eu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oi=/[#\/\?@]/g,nu=/[#\?:]/g,su=/[#\?]/g,iu=/[#\?@]/g,ru=/#/g;function de(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Tt(e){e.g||(e.g=new Map,e.h=0,e.i&&tu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=de.prototype;g.add=function(e,t){Tt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function io(e,t){Tt(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ro(e,t){return Tt(e),t=Xt(e,t),e.g.has(t)}g.forEach=function(e,t){Tt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};g.oa=function(){Tt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};g.W=function(e){Tt(this);let t=[];if(typeof e=="string")ro(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Tt(this),this.i=null,e=Xt(this,e),ro(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function oo(e,t,n){io(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Ns(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ou(e,t){t&&!e.j&&(Tt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(io(this,s),oo(this,i,n))},e)),e.j=t}var au=class{constructor(e,t){this.h=e,this.g=t}};function ao(e){this.l=e||cu,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cu=10;function co(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function lo(e){return e.h?1:e.g?e.g.size:0}function ws(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Hs(e,t){e.g?e.g.add(t):e.h=t}function uo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ao.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ho(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ns(e.i)}function qs(){}qs.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)};qs.prototype.parse=function(e){return y.JSON.parse(e,void 0)};function lu(){this.g=new qs}function uu(e,t,n){const s=n||"";try{no(e,function(i,r){let o=i;Te(i)&&(o=Fs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function hu(e,t){const n=new wn;if(y.Image){const s=new Image;s.onload=Pe(Ve,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Pe(Ve,n,s,"TestLoadImage: error",!1,t),s.onabort=Pe(Ve,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Pe(Ve,n,s,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ve(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function ke(e){this.l=e.ac||null,this.j=e.jb||!1}$(ke,Bs);ke.prototype.g=function(){return new Sn(this.l,this.j)};ke.prototype.i=function(e){return function(){return e}}({});function Sn(e,t){F.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Gs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(Sn,F);var Gs=0;g=Sn.prototype;g.open=function(e,t){if(this.readyState!=Gs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,pe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=Gs};g.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,pe(this)),this.g&&(this.readyState=3,pe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function fo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}g.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ne(this):pe(this),this.readyState==3&&fo(this)}};g.Va=function(e){this.g&&(this.response=this.responseText=e,Ne(this))};g.Ua=function(e){this.g&&(this.response=e,Ne(this))};g.ga=function(){this.g&&Ne(this)};function Ne(e){e.readyState=4,e.l=null,e.j=null,e.A=null,pe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function pe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var fu=y.JSON.parse;function N(e){F.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=po,this.K=this.L=!1}$(N,F);var po="",du=/^https?$/i,pu=["POST","PUT"];g=N.prototype;g.Ka=function(e){this.L=e};g.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?xi(this.u):xi(gs),this.g.onreadystatechange=G(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Mi(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=kr(pu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yo(this),0<this.B&&((this.K=gu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.qa,this)):this.A=Us(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Mi(this,r)}};function gu(e){return qt&&Rl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.qa=function(){typeof ks<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function Mi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,go(e),Cn(e)}function go(e){e.D||(e.D=!0,B(e,"complete"),B(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,B(this,"complete"),B(this,"abort"),Cn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),N.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?mo(this):this.fb())};g.fb=function(){mo(this)};function mo(e){if(e.h&&typeof ks<"u"&&(!e.C[1]||lt(e)!=4||e.aa()!=2)){if(e.v&&lt(e)==4)Us(e.Ha,0,e);else if(B(e,"readystatechange"),lt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(so)[1]||null;if(!i&&y.self&&y.self.location){var r=y.self.location.protocol;i=r.substr(0,r.length-1)}s=!du.test(i?i.toLowerCase():"")}n=s}if(n)B(e,"complete"),B(e,"success");else{e.m=6;try{var o=2<lt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",go(e)}}finally{Cn(e)}}}}function Cn(e,t){if(e.g){yo(e);const n=e.g,s=e.C[0]?We:null;e.g=null,e.C=null,t||B(e,"ready");try{n.onreadystatechange=s}catch{}}}function yo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function lt(e){return e.g?e.g.readyState:0}g.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),fu(t)}};function Li(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case po:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vo(e){let t="";return Rs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ks(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=vo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function wo(e){this.Ca=0,this.i=[],this.j=new wn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=te("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=te("baseRetryDelayMs",5e3,e),this.bb=te("retryDelaySeedMs",1e4,e),this.$a=te("forwardChannelMaxRetries",2,e),this.ta=te("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ao(e&&e.concurrentRequestLimit),this.Fa=new lu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=wo.prototype;g.ma=8;g.G=1;function zs(e){if(Eo(e),e.G==3){var t=e.U++,n=dt(e.F);_(n,"SID",e.I),_(n,"RID",t),_(n,"TYPE","terminate"),xe(e,n),t=new De(e,e.j,t,void 0),t.K=2,t.v=An(dt(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=_o(t.l,null),t.g.da(t.v)),t.F=Date.now(),_e(t)}Co(e)}function Dn(e){e.g&&(Qs(e),e.g.cancel(),e.g=null)}function Eo(e){Dn(e),e.u&&(y.clearTimeout(e.u),e.u=null),tn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function _n(e){co(e.h)||e.m||(e.m=!0,$r(e.Ja,e),e.C=0)}function mu(e,t){return lo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Se(G(e.Ja,e,t),So(e,e.C)),e.C++,!0)}g.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Or(r),Mr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Io(this,i,t),n=dt(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),xe(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(vo(r)))+"&"+t:this.o&&Ks(n,this.o,r)),Hs(this.h,i),this.Ya&&_(n,"TYPE","init"),this.O?(_(n,"$req",t),_(n,"SID","null"),i.Z=!0,ys(i,n,null)):ys(i,n,t),this.G=2}}else this.G==3&&(e?Pi(this,e):this.i.length==0||co(this.h)||Pi(this))};function Pi(e,t){var n;t?n=t.m:n=e.U++;const s=dt(e.F);_(s,"SID",e.I),_(s,"RID",n),_(s,"AID",e.T),xe(e,s),e.o&&e.s&&Ks(s,e.o,e.s),n=new De(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Io(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Hs(e.h,n),ys(n,s,t)}function xe(e,t){e.ia&&Rs(e.ia,function(n,s){_(t,s,n)}),e.l&&no({},function(n,s){_(t,s,n)})}function Io(e,t,n){n=Math.min(e.i.length,n);var s=e.l?G(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{uu(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function bo(e){e.g||e.u||(e.Z=1,$r(e.Ia,e),e.A=0)}function Ws(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Se(G(e.Ia,e),So(e,e.A)),e.A++,!0)}g.Ia=function(){if(this.u=null,To(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Se(G(this.eb,this),e)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,z(10),Dn(this),To(this))};function Qs(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function To(e){e.g=new De(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=dt(e.sa);_(t,"RID","rpc"),_(t,"SID",e.I),_(t,"CI",e.L?"0":"1"),_(t,"AID",e.T),_(t,"TYPE","xmlhttp"),xe(e,t),e.o&&e.s&&Ks(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=An(dt(t)),n.s=null,n.P=!0,Jr(n,e)}g.cb=function(){this.v!=null&&(this.v=null,Dn(this),Ws(this),z(19))};function tn(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function Ao(e,t){var n=null;if(e.g==t){tn(e),Qs(e),e.g=null;var s=2}else if(ws(e.h,t))n=t.D,uo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=En(),B(s,new Wr(s,n)),_n(e)}else bo(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&mu(e,t)||s==2&&Ws(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ct(e,5);break;case 4:Ct(e,10);break;case 3:Ct(e,6);break;default:Ct(e,2)}}}function So(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ct(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=G(e.kb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Je(n,"https"),An(n)),hu(n.toString(),s)}else z(2);e.G=0,e.l&&e.l.va(t),Co(e),Eo(e)}g.kb=function(e){e?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Co(e){if(e.G=0,e.la=[],e.l){const t=ho(e.h);(t.length!=0||e.i.length!=0)&&(Si(e.la,t),Si(e.la,e.i),e.h.i.length=0,Ns(e.i),e.i.length=0),e.l.ua()}}function Do(e,t,n){var s=n instanceof kt?dt(n):new kt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Ze(s,s.m);else{var i=y.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new kt(null,void 0);s&&Je(r,s),t&&(r.g=t),i&&Ze(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&_(s,n,t),_(s,"VER",e.ma),xe(e,s),s}function _o(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new N(new ke({jb:!0})):new N(e.ra),t.Ka(e.H),t}function ko(){}g=ko.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function en(){if(qt&&!(10<=Number(Ol)))throw Error("Environmental error: no available transport.")}en.prototype.g=function(e,t){return new Z(e,t)};function Z(e,t){F.call(this),this.g=new wo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Qe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Qe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}$(Z,F);Z.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Do(e,null,e.V),_n(e)};Z.prototype.close=function(){zs(this.g)};Z.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fs(e),e=n);t.i.push(new au(t.ab++,e)),t.G==3&&_n(t)};Z.prototype.M=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,Z.X.M.call(this)};function No(e){$s.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(No,$s);function xo(){js.call(this),this.status=1}$(xo,js);function Yt(e){this.g=e}$(Yt,ko);Yt.prototype.xa=function(){B(this.g,"a")};Yt.prototype.wa=function(e){B(this.g,new No(e))};Yt.prototype.va=function(e){B(this.g,new xo)};Yt.prototype.ua=function(){B(this.g,"b")};en.prototype.createWebChannel=en.prototype.g;Z.prototype.send=Z.prototype.u;Z.prototype.open=Z.prototype.m;Z.prototype.close=Z.prototype.close;In.NO_ERROR=0;In.TIMEOUT=8;In.HTTP_ERROR=6;Qr.COMPLETE="complete";Xr.EventType=Ce;Ce.OPEN="a";Ce.CLOSE="b";Ce.ERROR="c";Ce.MESSAGE="d";F.prototype.listen=F.prototype.N;N.prototype.listenOnce=N.prototype.O;N.prototype.getLastError=N.prototype.Oa;N.prototype.getLastErrorCode=N.prototype.Ea;N.prototype.getStatus=N.prototype.aa;N.prototype.getResponseJson=N.prototype.Sa;N.prototype.getResponseText=N.prototype.fa;N.prototype.send=N.prototype.da;N.prototype.setWithCredentials=N.prototype.Ka;var yu=function(){return new en},vu=function(){return En()},Zn=In,wu=Qr,Eu=Vt,Fi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Iu=ke,Ue=Xr,bu=N;const Vi="@firebase/firestore";/**
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
 */class j{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
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
 */let Jt="9.13.0";/**
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
 */const Ot=new Ds("@firebase/firestore");function Ui(){return Ot.logLevel}function m(e,...t){if(Ot.logLevel<=A.DEBUG){const n=t.map(Xs);Ot.debug(`Firestore (${Jt}): ${e}`,...n)}}function Mt(e,...t){if(Ot.logLevel<=A.ERROR){const n=t.map(Xs);Ot.error(`Firestore (${Jt}): ${e}`,...n)}}function Es(e,...t){if(Ot.logLevel<=A.WARN){const n=t.map(Xs);Ot.warn(`Firestore (${Jt}): ${e}`,...n)}}function Xs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+e;throw Mt(t),new Error(t)}function M(e,t){e||T()}function D(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends It{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ro{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Tu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(j.UNAUTHENTICATED))}shutdown(){}}class Au{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Su{constructor(t){this.t=t,this.currentUser=j.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Nt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Nt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Ro(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new j(t)}}class Cu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=j.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(M(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Du{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Cu(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(j.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _u{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ku{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.A=n.token,new _u(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Oo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Nu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function C(e,t){return e<t?-1:e>t?1:0}function Gt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new P(0,0))}static max(){return new O(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ge{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ge.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ge?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends ge{construct(t,n,s){return new k(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new k(n)}static emptyPath(){return new k([])}}const xu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends ge{construct(t,n,s){return new q(t,n,s)}static isValidIdentifier(t){return xu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(n)}static emptyPath(){return new q([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function Ru(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=O.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new wt(i,E.empty(),t)}function Ou(e){return new wt(e.readTime,e.key,-1)}class wt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new wt(O.min(),E.empty(),-1)}static max(){return new wt(O.max(),E.empty(),-1)}}function Mu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
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
 */const Lu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Mo(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Lu)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class h{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new h((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof h?n:h.resolve(n)}catch(n){return h.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):h.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):h.reject(n)}static resolve(t){return new h((n,s)=>{n(t)})}static reject(t){return new h((n,s)=>{s(t)})}static waitFor(t){return new h((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=h.resolve(!1);for(const s of t)n=n.next(i=>i?h.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new h((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(t,n){return new h((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function kn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
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
 */function Bi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Re(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Po(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Lo.at=-1;class X{constructor(t,n){this.comparator=t,this.root=n||V.EMPTY}insert(t,n){return new X(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,V.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,V.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class V{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??V.RED,this.left=i??V.EMPTY,this.right=r??V.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new V(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return V.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return V.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}V.EMPTY=null,V.RED=!0,V.BLACK=!1;V.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new V(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new $i(this.data.getIterator())}getIteratorFrom(t){return new $i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class $i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(t){this.fields=t,t.sort(q.comparator)}static empty(){return new at([])}unionWith(t){let n=new W(q.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new at(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Gt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new pt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new pt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Fu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(e){if(M(!!e),typeof e=="string"){let t=0;const n=Fu.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function me(e){return typeof e=="string"?pt.fromBase64String(e):pt.fromUint8Array(e)}/**
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
 */function Vu(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nn(e){const t=Lt(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class Uu{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class sn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}function Ys(e){return e==null}function rn(e){return e===0&&1/e==-1/0}function Bu(e){return typeof e=="number"&&Number.isInteger(e)&&!rn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const $e={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Vu(e)?4:$u(e)?9007199254740991:10:T()}function ct(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nn(e).isEqual(nn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Lt(s.timestampValue),o=Lt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return me(s.bytesValue).isEqual(me(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?rn(r)===rn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Gt(e.arrayValue.values||[],t.arrayValue.values||[],ct);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Bi(r)!==Bi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ct(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function ye(e,t){return(e.values||[]).find(n=>ct(n,t))!==void 0}function zt(e,t){if(e===t)return 0;const n=Kt(e),s=Kt(t);if(n!==s)return C(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ji(e.timestampValue,t.timestampValue);case 4:return ji(nn(e),nn(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(i,r){const o=me(i),a=me(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=C(o[c],a[c]);if(l!==0)return l}return C(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=C(U(i.latitude),U(r.latitude));return o!==0?o:C(U(i.longitude),U(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=zt(o[c],a[c]);if(l)return l}return C(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===$e.mapValue&&r===$e.mapValue)return 0;if(i===$e.mapValue)return 1;if(r===$e.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=C(a[u],l[u]);if(f!==0)return f;const p=zt(o[a[u]],c[l[u]]);if(p!==0)return p}return C(a.length,l.length)}(e.mapValue,t.mapValue);default:throw T()}}function ji(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=Lt(e),s=Lt(t),i=C(n.seconds,s.seconds);return i!==0?i:C(n.nanos,s.nanos)}function jt(e){return Is(e)}function Is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Lt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Is(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Is(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function bs(e){return!!e&&"integerValue"in e}function Js(e){return!!e&&"arrayValue"in e}function He(e){return!!e&&"mapValue"in e}function ie(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Re(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ie(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ie(e.arrayValue.values[n]);return t}return Object.assign({},e)}function $u(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!He(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ie(n)}setAll(t){let n=q.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ie(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());He(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];He(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Re(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(ie(this.value))}}function Fo(e){const t=[];return Re(e.fields,(n,s)=>{const i=new q([n]);if(He(s)){const r=Fo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new at(t)}/**
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
 */class tt{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new tt(t,0,O.min(),O.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new tt(t,1,n,O.min(),s,0)}static newNoDocument(t,n){return new tt(t,2,n,O.min(),st.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,O.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ju{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Hi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new ju(e,t,n,s,i,r,o)}function Zs(e){const t=D(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+jt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ys(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>jt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>jt(s)).join(",")),t.ht=n}return t.ht}function Hu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${jt(s.value)}`;var s}).join(", ")}]`),Ys(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>jt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>jt(n)).join(",")),`Target(${t})`}function ti(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Yu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ct(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gi(e.startAt,t.startAt)&&Gi(e.endAt,t.endAt)}class Q extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new qu(t,n,s):n==="array-contains"?new zu(t,s):n==="in"?new Wu(t,s):n==="not-in"?new Qu(t,s):n==="array-contains-any"?new Xu(t,s):new Q(t,n,s)}static lt(t,n,s){return n==="in"?new Gu(t,s):new Ku(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(zt(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.ft(zt(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qu extends Q{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.ft(n)}}class Gu extends Q{constructor(t,n){super(t,"in",n),this.keys=Vo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ku extends Q{constructor(t,n){super(t,"not-in",n),this.keys=Vo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Vo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class zu extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Js(n)&&ye(n.arrayValue,this.value)}}class Wu extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ye(this.value.arrayValue,n)}}class Qu extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ye(this.value.arrayValue,n)}}class Xu extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Js(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ye(this.value.arrayValue,s))}}class on{constructor(t,n){this.position=t,this.inclusive=n}}class re{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function qi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=zt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ct(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Nn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ju(e,t,n,s,i,r,o,a){return new Nn(e,t,n,s,i,r,o,a)}function Zu(e){return new Nn(e)}function Ki(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function th(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eh(e){for(const t of e.filters)if(t.dt())return t.field;return null}function nh(e){return e.collectionGroup!==null}function ve(e){const t=D(e);if(t._t===null){t._t=[];const n=eh(t),s=th(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new re(n)),t._t.push(new re(q.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new re(q.keyField(),r))}}}return t._t}function Wt(e){const t=D(e);if(!t.wt)if(t.limitType==="F")t.wt=Hi(t.path,t.collectionGroup,ve(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ve(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new re(r.field,o))}const s=t.endAt?new on(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new on(t.startAt.position,t.startAt.inclusive):null;t.wt=Hi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function Ts(e,t,n){return new Nn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Uo(e,t){return ti(Wt(e),Wt(t))&&e.limitType===t.limitType}function Bo(e){return`${Zs(Wt(e))}|lt:${e.limitType}`}function zi(e){return`Query(target=${Hu(Wt(e))}; limitType=${e.limitType})`}function $o(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=qi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ve(n),s)||n.endAt&&!function(i,r,o){const a=qi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ve(n),s))}(e,t)}function sh(e){return(t,n)=>{let s=!1;for(const i of ve(e)){const r=ih(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ih(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?zt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function jo(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rn(t)?"-0":t}}function Ho(e){return{integerValue:""+e}}function rh(e,t){return Bu(t)?Ho(t):jo(e,t)}/**
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
 */class xn{constructor(){this._=void 0}}function oh(e,t,n){return e instanceof an?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof we?Go(e,t):e instanceof Ee?Ko(e,t):function(s,i){const r=qo(s,i),o=Wi(r)+Wi(s.yt);return bs(r)&&bs(s.yt)?Ho(o):jo(s.It,o)}(e,t)}function ah(e,t,n){return e instanceof we?Go(e,t):e instanceof Ee?Ko(e,t):n}function qo(e,t){return e instanceof cn?bs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class an extends xn{}class we extends xn{constructor(t){super(),this.elements=t}}function Go(e,t){const n=zo(t);for(const s of e.elements)n.some(i=>ct(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ee extends xn{constructor(t){super(),this.elements=t}}function Ko(e,t){let n=zo(t);for(const s of e.elements)n=n.filter(i=>!ct(i,s));return{arrayValue:{values:n}}}class cn extends xn{constructor(t,n){super(),this.It=t,this.yt=n}}function Wi(e){return U(e.integerValue||e.doubleValue)}function zo(e){return Js(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ch(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof we&&s instanceof we||n instanceof Ee&&s instanceof Ee?Gt(n.elements,s.elements,ct):n instanceof cn&&s instanceof cn?ct(n.yt,s.yt):n instanceof an&&s instanceof an}(e.transform,t.transform)}class lh{constructor(t,n){this.version=t,this.transformResults=n}}class ut{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qe(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rn{}function Wo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Xo(e.key,ut.none()):new Oe(e.key,e.data,ut.none());{const n=e.data,s=st.empty();let i=new W(q.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ut(e.key,s,new at(i.toArray()),ut.none())}}function uh(e,t,n){e instanceof Oe?function(s,i,r){const o=s.value.clone(),a=Xi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ut?function(s,i,r){if(!qe(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Xi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Qo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function oe(e,t,n,s){return e instanceof Oe?function(i,r,o,a){if(!qe(i.precondition,r))return o;const c=i.value.clone(),l=Yi(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ut?function(i,r,o,a){if(!qe(i.precondition,r))return o;const c=Yi(i.fieldTransforms,a,r),l=r.data;return l.setAll(Qo(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(i,r,o){return qe(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function hh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=qo(s.transform,i||null);r!=null&&(n===null&&(n=st.empty()),n.set(s.field,r))}return n||null}function Qi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Gt(n,s,(i,r)=>ch(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Oe extends Rn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends Rn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Xi(e,t,n){const s=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,ah(o,a,n[i]))}return s}function Yi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,oh(r,o,t))}return s}class Xo extends Rn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fh extends Rn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var R,b;function dh(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function ph(e){if(e===void 0)return Mt("GRPC error has no .code"),d.UNKNOWN;switch(e){case R.OK:return d.OK;case R.CANCELLED:return d.CANCELLED;case R.UNKNOWN:return d.UNKNOWN;case R.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case R.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case R.INTERNAL:return d.INTERNAL;case R.UNAVAILABLE:return d.UNAVAILABLE;case R.UNAUTHENTICATED:return d.UNAUTHENTICATED;case R.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case R.NOT_FOUND:return d.NOT_FOUND;case R.ALREADY_EXISTS:return d.ALREADY_EXISTS;case R.PERMISSION_DENIED:return d.PERMISSION_DENIED;case R.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case R.ABORTED:return d.ABORTED;case R.OUT_OF_RANGE:return d.OUT_OF_RANGE;case R.UNIMPLEMENTED:return d.UNIMPLEMENTED;case R.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(b=R||(R={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Zt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Po(this.inner)}size(){return this.innerSize}}/**
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
 */const gh=new X(E.comparator);function ln(){return gh}const Yo=new X(E.comparator);function je(...e){let t=Yo;for(const n of e)t=t.insert(n.key,n);return t}function Jo(e){let t=Yo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Dt(){return ae()}function Zo(){return ae()}function ae(){return new Zt(e=>e.toString(),(e,t)=>e.isEqual(t))}const mh=new X(E.comparator),yh=new W(E.comparator);function H(...e){let t=yh;for(const n of e)t=t.add(n);return t}const vh=new W(C);function wh(){return vh}class Eh{constructor(t,n){this.databaseId=t,this.gt=n}}function As(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ih(e,t){return e.gt?t.toBase64():t.toUint8Array()}function bh(e,t){return As(e,t.toTimestamp())}function Ht(e){return M(!!e),O.fromTimestamp(function(t){const n=Lt(t);return new P(n.seconds,n.nanos)}(e))}function ta(e,t){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Th(e){const t=k.fromString(e);return M(Oh(t)),t}function Ss(e,t){return ta(e.databaseId,t.path)}function Ah(e){const t=Th(e);return t.length===4?k.emptyPath():Ch(t)}function Sh(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ch(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ji(e,t,n){return{name:Ss(e,t),fields:n.value.mapValue.fields}}function Dh(e,t){let n;if(t instanceof Oe)n={update:Ji(e,t.key,t.value)};else if(t instanceof Xo)n={delete:Ss(e,t.key)};else if(t instanceof Ut)n={update:Ji(e,t.key,t.data),updateMask:Rh(t.fieldMask)};else{if(!(t instanceof fh))return T();n={verify:Ss(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof an)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof we)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ee)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof cn)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function _h(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Ht(s.updateTime):Ht(i);return r.isEqual(O.min())&&(r=Ht(i)),new lh(r,s.transformResults||[])}(n,t))):[]}function kh(e){let t=Ah(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=ea(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new re($t(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ys(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new on(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new on(p,f)}(n.endAt)),Ju(t,i,o,r,a,"F",c,l)}function ea(e){return e?e.unaryFilter!==void 0?[xh(e)]:e.fieldFilter!==void 0?[Nh(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>ea(t)).reduce((t,n)=>t.concat(n)):T():[]}function $t(e){return q.fromServerFormat(e.fieldPath)}function Nh(e){return Q.create($t(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function xh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$t(e.unaryFilter.field);return Q.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=$t(e.unaryFilter.field);return Q.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$t(e.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$t(e.unaryFilter.field);return Q.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function Rh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Oh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Mh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&uh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=oe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=oe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Zo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Wo(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(O.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),H())}isEqual(t){return this.batchId===t.batchId&&Gt(this.mutations,t.mutations,(n,s)=>Qi(n,s))&&Gt(this.baseMutations,t.baseMutations,(n,s)=>Qi(n,s))}}class ei{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){M(t.mutations.length===s.length);let i=mh;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ei(t,n,s,i)}}/**
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
 */class Lh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ph{constructor(t){this.re=t}}function Fh(e){const t=kh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
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
 */class Vh{constructor(){this.Ye=new Uh}addToCollectionParentIndex(t,n){return this.Ye.add(n),h.resolve()}getCollectionParents(t,n){return h.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return h.resolve()}deleteFieldIndex(t,n){return h.resolve()}getDocumentsMatchingTarget(t,n){return h.resolve(null)}getIndexType(t,n){return h.resolve(0)}getFieldIndexes(t,n){return h.resolve([])}getNextCollectionGroupToUpdate(t){return h.resolve(null)}getMinOffset(t,n){return h.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,n){return h.resolve(wt.min())}updateCollectionGroup(t,n,s){return h.resolve()}updateIndexEntries(t,n){return h.resolve()}}class Uh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new W(k.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new W(k.comparator)).toArray()}}/**
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
 */class Qt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Qt(0)}static vn(){return new Qt(-1)}}/**
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
 */class Bh{constructor(){this.changes=new Zt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?h.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $h{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class jh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&oe(s.mutation,i,at.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,H()).next(()=>s))}getLocalViewOfDocuments(t,n,s=H()){const i=Dt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=je();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Dt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,H()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=ln();const o=ae(),a=ae();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ut)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),oe(u.mutation,l,u.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new $h(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ae();let i=new X((o,a)=>o-a),r=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||at.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(i.get(a.batchId)||H()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Zo();u.forEach(p=>{if(!r.has(p)){const w=Wo(n.get(p),s.get(p));w!==null&&f.set(p,w),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,f))}return h.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):h.resolve(Dt());let a=-1,c=r;return o.next(l=>h.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(u)?h.resolve():this.getBaseDocument(t,u,f).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,H())).next(u=>({batchId:a,changes:Jo(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let i=je();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=je();return this.indexManager.getCollectionParents(t,i).next(o=>h.forEach(o,a=>{const c=function(l,u){return new Nn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((u,f)=>{r=r.insert(u,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=je();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&oe(l.mutation,c,at.empty(),P.now()),$o(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):h.resolve(tt.newInvalidDocument(n))}}/**
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
 */class Hh{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return h.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ht(s.createTime)}),h.resolve()}getNamedQuery(t,n){return h.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Fh(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),h.resolve()}}/**
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
 */class qh{constructor(){this.overlays=new X(E.comparator),this.es=new Map}getOverlay(t,n){return h.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Dt();return h.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ue(t,n,r)}),h.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),h.resolve()}getOverlaysForCollection(t,n,s){const i=Dt(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return h.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new X((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Dt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Dt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return h.resolve(a)}ue(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Lh(n,s));let r=this.es.get(n);r===void 0&&(r=H(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class ni{constructor(){this.ns=new W(L.ss),this.rs=new W(L.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new L(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new L(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new E(new k([])),s=new L(n,t),i=new L(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new E(new k([])),s=new L(n,t),i=new L(n,t+1);let r=H();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new L(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class L{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return E.comparator(t.key,n.key)||C(t._s,n._s)}static os(t,n){return C(t._s,n._s)||E.comparator(t.key,n.key)}}/**
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
 */class Gh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new W(L.ss)}checkEmpty(t){return h.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new L(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return h.resolve(o)}lookupMutationBatch(t,n){return h.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return h.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return h.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return h.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new L(n,0),i=new L(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),h.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new W(C);return n.forEach(i=>{const r=new L(i,0),o=new L(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),h.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new L(new E(r),0);let a=new W(C);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),h.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return h.forEach(n.mutations,i=>{const r=new L(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new L(n,0),i=this.gs.firstAfterOrEqual(s);return h.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,h.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kh{constructor(t){this.Es=t,this.docs=new X(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return h.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),h.resolve(s)}getAllFromCollection(t,n,s){let i=ln();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Mu(Ou(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return h.resolve(i)}getAllFromCollectionGroup(t,n,s,i){T()}As(t,n){return h.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new zh(this)}getSize(t){return h.resolve(this.size)}}class zh extends Bh{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),h.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Wh{constructor(t){this.persistence=t,this.Rs=new Zt(n=>Zs(n),ti),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ni,this.targetCount=0,this.vs=Qt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),h.resolve()}getLastRemoteSnapshotVersion(t){return h.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return h.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),h.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),h.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Qt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,h.resolve()}updateTargetData(t,n){return this.Dn(n),h.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,h.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),h.waitFor(r).next(()=>i)}getTargetCount(t){return h.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return h.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),h.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),h.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),h.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return h.resolve(s)}containsKey(t,n){return h.resolve(this.Ps.containsKey(n))}}/**
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
 */class Qh{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Lo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Wh(this),this.indexManager=new Vh,this.remoteDocumentCache=function(s){return new Kh(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ph(n),this.Ns=new Hh(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Gh(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new Xh(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return h.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Xh extends Pu{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Fs=new ni,this.$s=null}static Bs(t){return new si(t)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),h.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),h.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),h.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return h.forEach(this.Ls,s=>{const i=E.fromPath(s);return this.Us(t,i).next(r=>{r||n.removeEntry(i,O.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return h.or([()=>h.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class ii{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=H(),i=H();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ii(t,n.fromCache,s,i)}}/**
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
 */class Yh{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(Ki(n))return h.resolve(null);let s=Wt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ts(n,null,"F"),s=Wt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=H(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(t,Ts(n,null,"F")):this.Bi(t,l,n,c)}))})))}Oi(t,n,s,i){return Ki(n)||i.isEqual(O.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(Ui()<=A.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.Bi(t,o,n,Ru(i,-1)))})}Fi(t,n){let s=new W(sh(t));return n.forEach((i,r)=>{$o(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return Ui()<=A.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Ni.getDocumentsMatchingQuery(t,n,wt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Jh{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new X(C),this.qi=new Zt(r=>Zs(r),ti),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jh(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Zh(e,t,n,s){return new Jh(e,t,n,s)}async function na(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=H();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function tf(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=h.resolve();return f.forEach(w=>{p=p.next(()=>l.getEntry(a,w)).next(I=>{const x=c.docVersions.get(w);M(x!==null),I.version.compareTo(x)<0&&(u.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),l.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=H();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function ef(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function nf(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class Zi{constructor(){this.activeTargetIds=wh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sf{constructor(){this.Lr=new Zi,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Zi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class rf{qr(t){}shutdown(){}}/**
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
 */class tr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class af{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class cf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw Es("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=of[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new bu;a.setWithCredentials(!0),a.listenOnce(wu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Zn.NO_ERROR:const l=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Zn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const u=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(w){const I=w.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(I)>=0?I:d.UNKNOWN}(f.status);o(new v(p,f.message))}else o(new v(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=yu(),o=vu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Iu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,f=!1;const p=new af({Hr:I=>{f?m("Connection","Not sending because WebChannel is closed:",I):(u||(m("Connection","Opening WebChannel transport."),l.open(),u=!0),m("Connection","WebChannel sending:",I),l.send(I))},Jr:()=>l.close()}),w=(I,x,Y)=>{I.listen(x,it=>{try{Y(it)}catch(nt){setTimeout(()=>{throw nt},0)}})};return w(l,Ue.EventType.OPEN,()=>{f||m("Connection","WebChannel transport opened.")}),w(l,Ue.EventType.CLOSE,()=>{f||(f=!0,m("Connection","WebChannel transport closed"),p.io())}),w(l,Ue.EventType.ERROR,I=>{f||(f=!0,Es("Connection","WebChannel transport errored:",I),p.io(new v(d.UNAVAILABLE,"The operation could not be completed")))}),w(l,Ue.EventType.MESSAGE,I=>{var x;if(!f){const Y=I.data[0];M(!!Y);const it=Y,nt=it.error||((x=it[0])===null||x===void 0?void 0:x.error);if(nt){m("Connection","WebChannel received error:",nt);const di=nt.status;let $n=function(Wa){const gi=R[Wa];if(gi!==void 0)return ph(gi)}(di),pi=nt.message;$n===void 0&&($n=d.INTERNAL,pi="Unknown error status: "+di+" with message "+nt.message),f=!0,p.io(new v($n,pi)),l.close()}else m("Connection","WebChannel received:",Y),p.ro(Y)}}),w(o,Eu.STAT_EVENT,I=>{I.stat===Fi.PROXY?m("Connection","Detected buffering proxy"):I.stat===Fi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function ts(){return typeof document<"u"?document:null}/**
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
 */function On(e){return new Eh(e,!0)}class sa{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class lf{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new sa(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uf extends lf{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=_h(t.writeResults,t.commitTime),s=Ht(t.commitTime);return this.listener.Zo(s,n)}return M(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Sh(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Dh(this.It,s))};this.Bo(n)}}/**
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
 */class hf extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(d.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class ff{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Mt(n),this.ou=!1):m("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class df{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Le(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c._u.add(4),await Me(c),c.gu.set("Unknown"),c._u.delete(4),await Mn(c)}(this))})}),this.gu=new ff(s,i)}}async function Mn(e){if(Le(e))for(const t of e.wu)await t(!0)}async function Me(e){for(const t of e.wu)await t(!1)}function Le(e){return D(e)._u.size===0}async function ia(e,t,n){if(!kn(t))throw t;e._u.add(1),await Me(e),e.gu.set("Offline"),n||(n=()=>ef(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Mn(e)})}function ra(e,t){return t().catch(n=>ia(e,n,t))}async function Ln(e){const t=D(e),n=Et(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;pf(t);)try{const i=await nf(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,gf(t,i)}catch(i){await ia(t,i)}oa(t)&&aa(t)}function pf(e){return Le(e)&&e.fu.length<10}function gf(e,t){e.fu.push(t);const n=Et(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function oa(e){return Le(e)&&!Et(e).No()&&e.fu.length>0}function aa(e){Et(e).start()}async function mf(e){Et(e).eu()}async function yf(e){const t=Et(e);for(const n of e.fu)t.Xo(n.mutations)}async function vf(e,t,n){const s=e.fu.shift(),i=ei.from(s,t,n);await ra(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ln(e)}async function wf(e,t){t&&Et(e).Yo&&await async function(n,s){if(i=s.code,dh(i)&&i!==d.ABORTED){const r=n.fu.shift();Et(n).Mo(),await ra(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ln(n)}var i}(e,t),oa(e)&&aa(e)}async function er(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=Le(n);n._u.add(3),await Me(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Mn(n)}async function Ef(e,t){const n=D(e);t?(n._u.delete(2),await Mn(n)):t||(n._u.add(2),await Me(n),n.gu.set("Unknown"))}function Et(e){return e.Iu||(e.Iu=function(t,n,s){const i=D(t);return i.su(),new uf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:mf.bind(null,e),Zr:wf.bind(null,e),tu:yf.bind(null,e),Zo:vf.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Ln(e)):(await e.Iu.stop(),e.fu.length>0&&(m("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class ri{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ri(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ca(e,t){if(Mt("AsyncQueue",`${t}: ${e}`),kn(e))return new v(d.UNAVAILABLE,`${t}: ${e}`);throw e}class If{constructor(){this.queries=new Zt(t=>Bo(t),Uo),this.onlineState="Unknown",this.Ru=new Set}}function bf(e){e.Ru.forEach(t=>{t.next()})}class Tf{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Zt(a=>Bo(a),Uo),this.rc=new Map,this.oc=new Set,this.uc=new X(E.comparator),this.cc=new Map,this.ac=new ni,this.hc={},this.lc=new Map,this.fc=Qt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Af(e,t,n){const s=_f(e);try{const i=await function(r,o){const a=D(r),c=P.now(),l=o.reduce((p,w)=>p.add(w.key),H());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let w=ln(),I=H();return a.Gi.getEntries(p,l).next(x=>{w=x,w.forEach((Y,it)=>{it.isValidDocument()||(I=I.add(Y))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,w)).next(x=>{u=x;const Y=[];for(const it of o){const nt=hh(it,u.get(it.key).overlayedDocument);nt!=null&&Y.push(new Ut(it.key,nt,Fo(nt.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,Y,o)}).next(x=>{f=x;const Y=x.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(p,x.batchId,Y)})}).then(()=>({batchId:f.batchId,changes:Jo(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new X(C)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Pn(s,i.changes),await Ln(s.remoteStore)}catch(i){const r=ca(i,"Failed to persist write");n.reject(r)}}function nr(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&bf(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Sf(e,t){const n=D(e),s=t.batch.batchId;try{const i=await tf(n.localStore,t);ua(n,s,null),la(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pn(n,i)}catch(i){await Mo(i)}}async function Cf(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(M(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,t);ua(s,t,n),la(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Pn(s,i)}catch(i){await Mo(i)}}function la(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function ua(e,t,n){const s=D(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}async function Pn(e,t,n){const s=D(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l?.fromCache?"not-current":"current"),l){i.push(l);const u=ii.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=D(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>h.forEach(c,f=>h.forEach(f.Si,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>h.forEach(f.Di,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!kn(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ui.get(f),w=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(w);l.Ui=l.Ui.insert(f,I)}}}(s.localStore,r))}async function Df(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await na(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Pn(n,s.ji)}}function _f(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cf.bind(null,t),t}class kf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=On(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Zh(this.persistence,new Yh,t.initialUser,this.It)}yc(t){return new Qh(si.Bs,this.It)}gc(t){return new sf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Df.bind(null,this.syncEngine),await Ef(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new If}createDatastore(t){const n=On(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new cf(i));var i;return function(r,o,a,c){return new hf(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>nr(this.syncEngine,a,0),o=tr.C()?new tr:new rf,new df(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,l){const u=new Tf(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);m("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Me(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function ha(e,t,n){if(!n)throw new v(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xf(e,t,n,s){if(t===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sr(e){if(!E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ir(e){if(E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function fa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(e);throw new v(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const rr=new Map;class or{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,xf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Fn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new or({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new or(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tu;switch(n.type){case"gapi":const s=n.client;return new Du(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=rr.get(t);n&&(m("ComponentProvider","Removing Datastore"),rr.delete(t),n.terminate())}(this),Promise.resolve()}}function Rf(e,t,n,s={}){var i;const r=(e=fa(e,Fn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&Es("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=j.MOCK_USER;else{o=cc(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new j(c)}e._authCredentials=new Au(new Ro(o,a))}}/**
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
 */class ht{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}}class ai{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class yt extends ai{constructor(t,n,s){super(t,n,Zu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new E(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function Of(e,t,...n){if(e=xt(e),ha("collection","path",t),e instanceof Fn){const s=k.fromString(t,...n);return ir(s),new yt(e,null,s)}{if(!(e instanceof ht||e instanceof yt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return ir(s),new yt(e.firestore,null,s)}}function Mf(e,t,...n){if(e=xt(e),arguments.length===1&&(t=Oo.R()),ha("doc","path",t),e instanceof Fn){const s=k.fromString(t,...n);return sr(s),new ht(e,null,new E(s))}{if(!(e instanceof ht||e instanceof yt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return sr(s),new ht(e.firestore,e instanceof yt?e.converter:null,new E(s))}}/**
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
 */class Lf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=j.UNAUTHENTICATED,this.clientId=Oo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ca(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Pf(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await na(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ff(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vf(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>er(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>er(t.remoteStore,r)),e.onlineComponents=t}async function Vf(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Pf(e,new kf)),e.offlineComponents}async function Uf(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Ff(e,new Nf)),e.onlineComponents}function Bf(e){return Uf(e).then(t=>t.syncEngine)}class $f{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new sa(this,"async_queue_retry"),this.Wc=()=>{const n=ts();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=ts();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=ts();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Nt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!kn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Mt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=ri.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class da extends Fn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new $f,this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||pa(this),this._firestoreClient.terminate()}}function jf(e,t){const n=typeof e=="object"?e:Cr(),s=typeof e=="string"?e:t||"(default)",i=be(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=rc("firestore");r&&Rf(i,...r)}return i}function Hf(e){return e._firestoreClient||pa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function pa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Uu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Lf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Ie{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ie(pt.fromBase64String(t))}catch(n){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ie(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ga{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ma{constructor(t){this._methodName=t}}/**
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
 */class ya{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
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
 */const qf=/^__.*__$/;class Gf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ut(t,this.data,this.fieldMask,n,this.fieldTransforms):new Oe(t,this.data,n,this.fieldTransforms)}}function va(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ci{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return un(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(va(this.sa)&&qf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Kf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||On(t)}da(t,n,s,i=!1){return new ci({sa:t,methodName:n,fa:s,path:q.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function zf(e){const t=e._freezeSettings(),n=On(e._databaseId);return new Kf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wf(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);ba("Data must be an object, but it was:",o,s);const a=Ea(s,o);let c,l;if(r.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const f of r.mergeFields){const p=Qf(t,f,n);if(!o.contains(p))throw new v(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Jf(u,p)||u.push(p)}c=new at(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new Gf(new st(a),c,l)}function wa(e,t){if(Ia(e=xt(e)))return ba("Unsupported field value:",t,e),Ea(e,t);if(e instanceof ma)return function(n,s){if(!va(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=wa(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rh(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:As(s.It,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:As(s.It,i)}}if(n instanceof ya)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ie)return{bytesValue:Ih(s.It,n._byteString)};if(n instanceof ht){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ta(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${oi(n)}`)}(e,t)}function Ea(e,t){const n={};return Po(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(e,(s,i)=>{const r=wa(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ia(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof ya||e instanceof Ie||e instanceof ht||e instanceof ma)}function ba(e,t,n){if(!Ia(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oi(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Qf(e,t,n){if((t=xt(t))instanceof ga)return t._internalPath;if(typeof t=="string")return Yf(e,t);throw un("Field path arguments must be of type string or ",e,!1,void 0,n)}const Xf=new RegExp("[~\\*/\\[\\]]");function Yf(e,t,n){if(t.search(Xf)>=0)throw un(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ga(...t.split("."))._internalPath}catch{throw un(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function un(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(d.INVALID_ARGUMENT,a+e+c)}function Jf(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function Zf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function td(e,t){const n=fa(e.firestore,da),s=Mf(e),i=Zf(e.converter,t);return ed(n,[Wf(zf(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ut.exists(!1))]).then(()=>s)}function ed(e,t){return function(n,s){const i=new Nt;return n.asyncQueue.enqueueAndForget(async()=>Af(await Bf(n),s,i)),i.promise}(Hf(e),t)}(function(e,t=!0){(function(n){Jt=n})(hl),vt(new ft("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new da(new Su(n.getProvider("auth-internal")),new ku(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ot(Vi,"3.7.2",e),ot(Vi,"3.7.2","esm2017")})();var nd="firebase",sd="9.13.0";/**
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
 */ot(nd,sd,"app");const Ta="@firebase/installations",li="0.5.16";/**
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
 */const Aa=1e4,Sa=`w:${li}`,Ca="FIS_v2",id="https://firebaseinstallations.googleapis.com/v1",rd=60*60*1e3,od="installations",ad="Installations";/**
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
 */const cd={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Pt=new dn(od,ad,cd);function Da(e){return e instanceof It&&e.code.includes("request-failed")}/**
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
 */function _a({projectId:e}){return`${id}/projects/${e}/installations`}function ka(e){return{token:e.token,requestStatus:2,expiresIn:ud(e.expiresIn),creationTime:Date.now()}}async function Na(e,t){const s=(await t.json()).error;return Pt.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xa({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ld(e,{refreshToken:t}){const n=xa(e);return n.append("Authorization",hd(t)),n}async function Ra(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ud(e){return Number(e.replace("s","000"))}function hd(e){return`${Ca} ${e}`}/**
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
 */async function fd({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=_a(e),i=xa(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Ca,appId:e.appId,sdkVersion:Sa},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ra(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ka(l.authToken)}}else throw await Na("Create Installation",c)}/**
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
 */function Oa(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function dd(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pd=/^[cdef][\w-]{21}$/,Cs="";function gd(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=md(e);return pd.test(n)?n:Cs}catch{return Cs}}function md(e){return dd(e).substr(0,22)}/**
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
 */function Vn(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ma=new Map;function La(e,t){const n=Vn(e);Pa(n,t),yd(n,t)}function Pa(e,t){const n=Ma.get(e);if(!!n)for(const s of n)s(t)}function yd(e,t){const n=vd();n&&n.postMessage({key:e,fid:t}),wd()}let _t=null;function vd(){return!_t&&"BroadcastChannel"in self&&(_t=new BroadcastChannel("[Firebase] FID Change"),_t.onmessage=e=>{Pa(e.data.key,e.data.fid)}),_t}function wd(){Ma.size===0&&_t&&(_t.close(),_t=null)}/**
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
 */const Ed="firebase-installations-database",Id=1,Ft="firebase-installations-store";let es=null;function ui(){return es||(es=Ar(Ed,Id,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ft)}}})),es}async function hn(e,t){const n=Vn(e),i=(await ui()).transaction(Ft,"readwrite"),r=i.objectStore(Ft),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&La(e,t.fid),t}async function Fa(e){const t=Vn(e),s=(await ui()).transaction(Ft,"readwrite");await s.objectStore(Ft).delete(t),await s.done}async function Un(e,t){const n=Vn(e),i=(await ui()).transaction(Ft,"readwrite"),r=i.objectStore(Ft),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&La(e,a.fid),a}/**
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
 */async function hi(e){let t;const n=await Un(e.appConfig,s=>{const i=bd(s),r=Td(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===Cs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function bd(e){const t=e||{fid:gd(),registrationStatus:0};return Va(t)}function Td(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Ad(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Sd(e)}:{installationEntry:t}}async function Ad(e,t){try{const n=await fd(e,t);return hn(e.appConfig,n)}catch(n){throw Da(n)&&n.customData.serverCode===409?await Fa(e.appConfig):await hn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Sd(e){let t=await ar(e.appConfig);for(;t.registrationStatus===1;)await Oa(100),t=await ar(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await hi(e);return s||n}return t}function ar(e){return Un(e,t=>{if(!t)throw Pt.create("installation-not-found");return Va(t)})}function Va(e){return Cd(e)?{fid:e.fid,registrationStatus:0}:e}function Cd(e){return e.registrationStatus===1&&e.registrationTime+Aa<Date.now()}/**
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
 */async function Dd({appConfig:e,heartbeatServiceProvider:t},n){const s=_d(e,n),i=ld(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Sa,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ra(()=>fetch(s,a));if(c.ok){const l=await c.json();return ka(l)}else throw await Na("Generate Auth Token",c)}function _d(e,{fid:t}){return`${_a(e)}/${t}/authTokens:generate`}/**
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
 */async function fi(e,t=!1){let n;const s=await Un(e.appConfig,r=>{if(!Ua(r))throw Pt.create("not-registered");const o=r.authToken;if(!t&&xd(o))return r;if(o.requestStatus===1)return n=kd(e,t),r;{if(!navigator.onLine)throw Pt.create("app-offline");const a=Od(r);return n=Nd(e,a),a}});return n?await n:s.authToken}async function kd(e,t){let n=await cr(e.appConfig);for(;n.authToken.requestStatus===1;)await Oa(100),n=await cr(e.appConfig);const s=n.authToken;return s.requestStatus===0?fi(e,t):s}function cr(e){return Un(e,t=>{if(!Ua(t))throw Pt.create("not-registered");const n=t.authToken;return Md(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Nd(e,t){try{const n=await Dd(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await hn(e.appConfig,s),n}catch(n){if(Da(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fa(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await hn(e.appConfig,s)}throw n}}function Ua(e){return e!==void 0&&e.registrationStatus===2}function xd(e){return e.requestStatus===2&&!Rd(e)}function Rd(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rd}function Od(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Md(e){return e.requestStatus===1&&e.requestTime+Aa<Date.now()}/**
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
 */async function Ld(e){const t=e,{installationEntry:n,registrationPromise:s}=await hi(t);return s?s.catch(console.error):fi(t).catch(console.error),n.fid}/**
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
 */async function Pd(e,t=!1){const n=e;return await Fd(n),(await fi(n,t)).token}async function Fd(e){const{registrationPromise:t}=await hi(e);t&&await t}/**
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
 */function Vd(e){if(!e||!e.options)throw ns("App Configuration");if(!e.name)throw ns("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ns(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ns(e){return Pt.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ba="installations",Ud="installations-internal",Bd=e=>{const t=e.getProvider("app").getImmediate(),n=Vd(t),s=be(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$d=e=>{const t=e.getProvider("app").getImmediate(),n=be(t,Ba).getImmediate();return{getId:()=>Ld(n),getToken:i=>Pd(n,i)}};function jd(){vt(new ft(Ba,Bd,"PUBLIC")),vt(new ft(Ud,$d,"PRIVATE"))}jd();ot(Ta,li);ot(Ta,li,"esm2017");/**
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
 */const fn="analytics",Hd="firebase_id",qd="origin",Gd=60*1e3,Kd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$a="https://www.googletagmanager.com/gtag/js";/**
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
 */const J=new Ds("@firebase/analytics");/**
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
 */function ja(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function zd(e,t){const n=document.createElement("script");n.src=`${$a}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Wd(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qd(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const c=(await ja(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){J.error(a)}e("config",i,r)}async function Xd(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ja(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){J.error(r)}}function Yd(e,t,n,s){async function i(r,o,a){try{r==="event"?await Xd(e,t,n,o,a):r==="config"?await Qd(e,t,n,s,o,a):r==="consent"?e("consent","update",a):e("set",o)}catch(c){J.error(c)}}return i}function Jd(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Yd(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function Zd(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($a)&&n.src.includes(e))return n;return null}/**
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
 */const tp={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},et=new dn("analytics","Analytics",tp);/**
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
 */const ep=30,np=1e3;class sp{constructor(t={},n=np){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ha=new sp;function ip(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rp(e){var t;const{appId:n,apiKey:s}=e,i={method:"GET",headers:ip(s)},r=Kd.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function op(e,t=Ha,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw et.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw et.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lp;return setTimeout(async()=>{a.abort()},n!==void 0?n:Gd),qa({appId:s,apiKey:i,measurementId:r},o,a,t)}async function qa(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=Ha){var r,o;const{appId:a,measurementId:c}=e;try{await ap(s,t)}catch(l){if(c)return J.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(r=l)===null||r===void 0?void 0:r.message}]`),{appId:a,measurementId:c};throw l}try{const l=await rp(e);return i.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!cp(u)){if(i.deleteThrottleMetadata(a),c)return J.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw l}const f=Number((o=u?.customData)===null||o===void 0?void 0:o.httpStatus)===503?yi(n,i.intervalMillis,ep):yi(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,p),J.debug(`Calling attemptFetch again in ${f} millis`),qa(e,p,s,i)}}function ap(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function cp(e){if(!(e instanceof It)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class lp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function up(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o=Object.assign(Object.assign({},s),{send_to:r});e("event",n,o)}}/**
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
 */async function hp(){var e;if(wr())try{await Er()}catch(t){return J.warn(et.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return J.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fp(e,t,n,s,i,r,o){var a;const c=op(e);c.then(w=>{n[w.measurementId]=w.appId,e.options.measurementId&&w.measurementId!==e.options.measurementId&&J.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>J.error(w)),t.push(c);const l=hp().then(w=>{if(w)return s.getId()}),[u,f]=await Promise.all([c,l]);Zd(r)||zd(r,u.measurementId),i("js",new Date);const p=(a=o?.config)!==null&&a!==void 0?a:{};return p[qd]="firebase",p.update=!0,f!=null&&(p[Hd]=f),i("config",u.measurementId,p),u.measurementId}/**
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
 */class dp{constructor(t){this.app=t}_delete(){return delete ce[this.app.options.appId],Promise.resolve()}}let ce={},lr=[];const ur={};let ss="dataLayer",pp="gtag",hr,Ga,fr=!1;function gp(){const e=[];if(Ja()&&e.push("This is a browser extension environment."),Za()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:t});J.warn(n.message)}}function mp(e,t,n){gp();const s=e.options.appId;if(!s)throw et.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)J.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(ce[s]!=null)throw et.create("already-exists",{id:s});if(!fr){Wd(ss);const{wrappedGtag:r,gtagCore:o}=Jd(ce,lr,ur,ss,pp);Ga=r,hr=o,fr=!0}return ce[s]=fp(e,lr,ur,t,hr,ss,n),new dp(e)}function yp(e=Cr()){e=xt(e);const t=be(e,fn);return t.isInitialized()?t.getImmediate():vp(e)}function vp(e,t={}){const n=be(e,fn);if(n.isInitialized()){const i=n.getImmediate();if(Ke(t,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:t})}function wp(e,t,n,s){e=xt(e),up(Ga,ce[e.app.options.appId],t,n,s).catch(i=>J.error(i))}const dr="@firebase/analytics",pr="0.8.4";function Ep(){vt(new ft(fn,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return mp(s,i,n)},"PUBLIC")),vt(new ft("analytics-internal",e,"PRIVATE")),ot(dr,pr),ot(dr,pr,"esm2017");function e(t){try{const n=t.getProvider(fn).getImmediate();return{logEvent:(s,i,r)=>wp(n,s,i,r)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}Ep();const Ip={apiKey:"AIzaSyC45jxkxnMWeUH_pFc4KMnPpHR1SFedErc",authDomain:"arepas-82306.firebaseapp.com",projectId:"arepas-82306",storageBucket:"arepas-82306.appspot.com",messagingSenderId:"319638635914",appId:"1:319638635914:web:451b2a543bb274636c7473",measurementId:"G-Y7P27687YY"},Ka=Sr(Ip),bp=jf(Ka);yp(Ka);var S={exports:{}},Bn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=mr.exports,Ap=Symbol.for("react.element"),Sp=Symbol.for("react.fragment"),Cp=Object.prototype.hasOwnProperty,Dp=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function za(e,t,n){var s,i={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Cp.call(t,s)&&!_p.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Ap,type:e,key:r,ref:o,props:i,_owner:Dp.current}}Bn.Fragment=Sp;Bn.jsx=za;Bn.jsxs=za;(function(e){e.exports=Bn})(S);const gr={producto:"",calificacion:"",comentario:""},Np=()=>{const[e,t]=mr.exports.useState(gr),n=r=>t({...e,[r.target.name]:r.target.value}),s=async({producto:r,calificacion:o,comentario:a})=>{try{const c=await td(Of(bp,"opinions"),{producto:r,calificacion:o,comentario:a});console.log("Document written with ID: ",c.id),t(gr)}catch(c){console.log(c)}finally{console.log("final")}},i=r=>{r.preventDefault(),s({producto:e.producto,calificacion:e.calificacion,comentario:e.comentario})};return S.exports.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"},children:[S.exports.jsx("br",{}),S.exports.jsxs("form",{action:"",onSubmit:i,style:{marginTop:"50px",textAlign:"center"},children:[S.exports.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"producto",children:"Producto que consumiste"}),S.exports.jsxs("select",{name:"producto",onChange:n,defaultValue:e.producto,id:"calificacion",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[S.exports.jsx("option",{selected:!0,children:"Producto"}),S.exports.jsx("option",{value:"queso",children:"Arepa con queso"}),S.exports.jsx("option",{value:"pollo",children:"Arepa con pollo"}),S.exports.jsx("option",{value:"carne",children:"Arepa con carne"}),S.exports.jsx("option",{value:"huevo",children:"Arepa con huevo"}),S.exports.jsx("option",{value:"jam\xF3n",children:"Arepa con jam\xF3n"}),S.exports.jsx("option",{value:"otro producto",children:"otro"})]}),S.exports.jsx("br",{}),S.exports.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"calificacion",children:"Calificacion"}),S.exports.jsxs("select",{name:"calificacion",defaultValue:e.calificacion,onChange:n,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[S.exports.jsx("option",{children:"De 1 a 5"}),S.exports.jsx("option",{value:"1",children:"1"}),S.exports.jsx("option",{value:"2",children:"2"}),S.exports.jsx("option",{value:"3",children:"3"}),S.exports.jsx("option",{value:"4",children:"4"}),S.exports.jsx("option",{value:"5",children:"5"})]}),S.exports.jsx("br",{}),S.exports.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"comentario",children:"Comentario y sugerencia de nuevo producto"}),S.exports.jsx("textarea",{onChange:n,name:"comentario",cols:30,rows:10,defaultValue:e.comentario,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:""}),S.exports.jsx("button",{className:"mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded",type:"submit",children:"Enviar"})]})]})};export{Np as FormOpinion};
