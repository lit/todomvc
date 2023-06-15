function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,a=globalThis,d=a.trustedTypes,h=d?d.emptyScript:"",c=a.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},f="finalized";class m extends HTMLElement{static addInitializer(t){this.finalize(),(this.i??=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];for(const[e,i]of this.elementProperties){const s=this._$El(e,i);void 0!==s&&(this._$Eh.set(s,e),t.push(s))}return t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.i&&(this.i=[...t.i]),this.elementProperties=new Map(t.elementProperties),this._$Eh=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$El(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this.v()}v(){this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),this.constructor.i?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){const t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(this._$Ep.set(e,this[e]),delete this[e])}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){const s=this.constructor._$El(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:p).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:p;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this._$Ep&&=this._$Ep.forEach(((t,e)=>this[e]=t));let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC&&=this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$Ek()}updated(t){}firstUpdated(t){}}m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},c?.({ReactiveElement:m}),(a.reactiveElementVersions??=[]).push("2.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,b=void 0,v=$.trustedTypes,_=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,A="?"+x,E=`<${A}>`,w=document,C=()=>w.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,L=t=>S(t)||"function"==typeof t?.[Symbol.iterator],T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,O=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),j=new WeakMap,B=w.createTreeWalker(w,129),V=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===N?"!--"===a[1]?r=P:void 0!==a[1]?r=U:void 0!==a[2]?(M.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=H):void 0!==a[3]&&(r=H):r===H?">"===a[0]?(r=o??N,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?H:'"'===a[3]?O:D):r===O||r===D?r=H:r===P||r===U?r=N:(r=H,o=void 0);const c=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+E:d>=0?(s.push(l),i.slice(0,d)+y+i.slice(d)+x+c):i+x+(-2===d?e:c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,d]=V(t,e);if(this.el=F.createElement(a,i),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=B.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(y)){const e=d[n++],i=s.getAttribute(t).split(x),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?Z:"?"===r[1]?Q:"@"===r[1]?G:K}),s.removeAttribute(t)}else t.startsWith(x)&&(l.push({type:6,index:o}),s.removeAttribute(t));if(M.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),B.nextNode(),l.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===A)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:o}),t+=x.length-1}o++}b?.({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:t})}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){if(e===z)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=k(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=W(t,o._$AS(t,e.values),o,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??w).importNode(e,!0);B.currentNode=s;let o=B.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new J(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new X(o,this,t)),this._$AV.push(e),l=i[++r]}n!==l?.index&&(o=B.nextNode(),n++)}return s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(b?.({kind:"set part",part:i,value:t[e],valueIndex:e,values:t,templateInstance:this}),void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),k(t)?t===I||null==t||""===t?(this._$AH!==I&&(b?.({kind:"commit nothing to child",start:this._$AA,end:this._$AB,parent:this._$AM,options:this.options}),this._$AR()),this._$AH=I):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):L(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),b?.({kind:"commit node",start:this._$AA,parent:this._$AM,value:t,options:this.options}),this._$AH=this.k(t))}_(t){if(this._$AH!==I&&k(this._$AH)){const e=this._$AA.nextSibling;b?.({kind:"commit text",node:e,value:t,options:this.options}),e.data=t}else this.$(w.createTextNode(t)),b?.({kind:"commit text",node:this._$AA.nextSibling,value:t,options:this.options});this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if(this._$AH?._$AD===s)b?.({kind:"template updating",template:s,instance:this._$AH,parts:this._$AH._$AV,options:this.options,values:e}),this._$AH.p(e);else{const t=new q(s,this),i=t.u(this.options);b?.({kind:"template instantiated",template:s,instance:t,parts:t._$AV,options:this.options,fragment:i,values:e}),t.p(e),b?.({kind:"template instantiated and updated",template:s,instance:t,parts:t._$AV,options:this.options,fragment:i,values:e}),this.$(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new F(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=W(this,s[i+r],e,r),l===z&&(l=this._$AH[r]),n||=!k(l)||l!==this._$AH[r],l===I?t=I:t!==I&&(t+=(l??"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):(b?.({kind:"commit attribute",element:this.element,name:this.name,value:t,options:this.options}),this.element.setAttribute(this.name,t??""))}}class Z extends K{constructor(){super(...arguments),this.type=3}j(t){b?.({kind:"commit property",element:this.element,name:this.name,value:t,options:this.options}),this.element[this.name]=t===I?void 0:t}}class Q extends K{constructor(){super(...arguments),this.type=4}j(t){b?.({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!t||t===I),options:this.options}),this.element.toggleAttribute(this.name,!!t&&t!==I)}}class G extends K{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??I)===z)return;const i=this._$AH,s=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==I&&(i===I||s);b?.({kind:"commit event listener",element:this.element,name:this.name,value:t,options:this.options,removeListener:s,addListener:o,oldListener:i}),s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b?.({kind:"commit to element binding",element:this.element,value:t,options:this.options}),W(this,t)}}const Y={S:y,A:x,P:A,M:1,C:V,L:q,V:L,D:W,R:J,I:K,H:Q,N:G,U:Z,B:X},tt=$.litHtmlPolyfillSupport;tt?.(F,J),($.litHtmlVersions??=[]).push("3.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(b?.({kind:"begin render",id:0,value:t,container:e,options:i,part:o}),void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new J(e.insertBefore(C(),t),t,void 0,i??{})}return o._$AI(t),b?.({kind:"end render",id:0,value:t,container:e,options:i,part:o}),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}et.finalized=!0,et._$litElement$=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const it=globalThis.litElementPolyfillSupport;it?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},nt=(t,e,i)=>{e.constructor.createProperty(i,t)};function rt(t){return(e,i)=>void 0!==i?nt(t,e,i):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function lt(t){return rt({...t,state:!0})}const at=r`button{margin:0;padding:0;border:0;background:0 0;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:focus{outline:0}.edit,.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}@media screen and (-webkit-min-device-pixel-ratio:0){.toggle-all,li .toggle{background:0 0}li .toggle{height:40px}}@media (max-width:430px){.footer{height:50px}.filters{bottom:10px}}`,dt=["all","active","completed"];class ht extends EventTarget{#t;#e;#i=this.#s();constructor(){super();const t=window.localStorage.getItem("todos");let e;try{e=t&&JSON.parse(t)}catch{}e?(this.#e=e.todos,this.#t=e.nextId):(this.#e=[],this.#t=1)}get all(){return this.#e}get active(){return this.#e.filter((t=>!t.completed))}get completed(){return this.#e.filter((t=>t.completed))}get allCompleted(){return this.#e.every((t=>t.completed))}connect(){window.addEventListener("hashchange",this.#o)}disconnect(){window.removeEventListener("hashchange",this.#o)}filtered(){switch(this.#i){case"active":return this.active;case"completed":return this.completed;case"all":case void 0:return this.all}}#n(){window.localStorage.setItem("todos",JSON.stringify({todos:this.#e,nextId:this.#t})),this.dispatchEvent(new Event("change"))}add(t){this.#e.push({text:t,completed:!1,id:this.#t++}),this.#n()}delete(t){const e=this.#e.findIndex((e=>e.id===t));this.#e.splice(e>>>0,1),this.#n()}update(t){const e=this.#e.findIndex((e=>e.id===t.id)),i=this.#e[e];this.#e=[...this.#e.slice(0,e),{...i,...t},...this.#e.slice(e+1)],this.#n()}toggle(t){const e=this.#e.find((e=>e.id===t));void 0!==e&&(e.completed=!e.completed,this.#n())}toggleAll(){const t=this.#e.every((t=>t.completed));this.#e=this.#e.map((e=>({...e,completed:!t}))),this.#n()}clearCompleted(){this.#e=this.active,this.#n()}get filter(){return this.#i}set filter(t){this.#i=t,this.#n()}#o=()=>{this.filter=this.#s()};#s(){let t=/#\/(.*)/.exec(window.location.hash)?.[1];return e=t,dt.includes(e)?t:"all";var e}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=1,pt=2,ut=t=>(...e)=>({_$litDirective$:t,values:e});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{R:ft}=Y,mt=()=>document.createComment(""),$t=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(mt(),o),n=s.insertBefore(mt(),o);i=new ft(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,o),t=e}}}return i},bt=(t,e,i=t)=>(t._$AI(e,i),t),vt={},_t=(t,e=vt)=>t._$AH=e,yt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},xt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},At=ut(class extends gt{constructor(t){if(super(t),t.type!==pt)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.ht(e,i,s);if(!Array.isArray(o))return this.dt=r,n;const l=this.dt??=[],a=[];let d,h,c=0,p=o.length-1,u=0,g=n.length-1;for(;c<=p&&u<=g;)if(null===o[c])c++;else if(null===o[p])p--;else if(l[c]===r[u])a[u]=bt(o[c],n[u]),c++,u++;else if(l[p]===r[g])a[g]=bt(o[p],n[g]),p--,g--;else if(l[c]===r[g])a[g]=bt(o[c],n[g]),$t(t,a[g+1],o[c]),c++,g--;else if(l[p]===r[u])a[u]=bt(o[p],n[u]),$t(t,o[c],o[p]),p--,u++;else if(void 0===d&&(d=xt(r,u,g),h=xt(l,c,p)),d.has(l[c]))if(d.has(l[p])){const e=h.get(r[u]),i=void 0!==e?o[e]:null;if(null===i){const e=$t(t,o[c]);bt(e,n[u]),a[u]=e}else a[u]=bt(i,n[u]),$t(t,o[c],i),o[e]=null;u++}else yt(o[p]),p--;else yt(o[c]),c++;for(;u<=g;){const e=$t(t,a[g+1]);bt(e,n[u]),a[u++]=e}for(;c<=p;){const t=o[c++];null!==t&&yt(t)}return this.dt=r,_t(t,a),z}}),Et=ut(class extends gt{constructor(t){if(super(t),t.type!==ct||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const s=!!e[t];s===this.it.has(t)||this.st?.has(t)||(s?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return z}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wt extends Event{static{this.eventName="todo-add"}constructor(t){super(wt.eventName,{bubbles:!0,composed:!0}),this.text=t}}class Ct extends Event{static{this.eventName="todo-delete"}constructor(t){super(Ct.eventName,{bubbles:!0,composed:!0}),this.id=t}}class kt extends Event{static{this.eventName="todo-edit"}constructor(t){super(kt.eventName,{bubbles:!0,composed:!0}),this.todo=t}}class St extends Event{static{this.eventName="todo-toggle-all"}constructor(){super(St.eventName,{bubbles:!0,composed:!0})}}class Lt extends Event{static{this.eventName="clear-completed"}constructor(){super(Lt.eventName,{bubbles:!0,composed:!0})}}let Tt=class extends et{constructor(){super(...arguments),this.isEditing=!1}static{this.styles=[at,r`:host{display:block}li{position:relative;font-size:24px;border-bottom:1px solid #ededed}li:last-child{border-bottom:none}li.editing{border-bottom:none;padding:0}li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}li.editing .view{display:none}li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none}li .toggle{opacity:0}li .toggle+label{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);background-repeat:no-repeat;background-position:center left}li .toggle:checked+label{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)}li label{word-break:break-all;padding:15px 15px 15px 60px;display:block;line-height:1.2;transition:color .4s}li.completed label{color:#d9d9d9;text-decoration:line-through}li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;transition:color .2s ease-out}li .destroy:hover{color:#af5b5e}li .destroy:after{content:"×"}li:hover .destroy{display:block}li .edit{display:none}li.editing:last-child{margin-bottom:-1px}`]}render(){const t={todo:!0,completed:this.todo?.completed??!1,editing:this.isEditing};return R`<li class="${Et(t)}"><div class="view"><input class="toggle" type="checkbox" .checked="${this.todo?.completed??!1}" @change="${this.#r}"> <label @dblclick="${this.#l}">${this.todo?.text}</label> <button @click="${this.#a}" class="destroy"></button></div><input class="edit" type="text" @change="${this.#d}" @keyup="${this.#h}" @blur="${this.#c}" .value="${this.todo?.text??""}"></li>`}#r(){this.dispatchEvent(new kt({...this.todo,completed:!this.todo.completed}))}#a(){this.dispatchEvent(new Ct(this.todo.id))}#l(){this.isEditing=!0}#d(t){const e=t.target.value;this.dispatchEvent(new kt({...this.todo,text:e})),this.isEditing=!1}#h(t){"escape"===t.key&&this.#c(t)}#c(t){t.target.value=this.todo?.text??""}};t([rt({attribute:!1})],Tt.prototype,"todo",void 0),t([lt()],Tt.prototype,"isEditing",void 0),Tt=t([st("todo-item")],Tt);const Nt=t=>(e,i)=>{const s=Object.getOwnPropertyDescriptor(e,i);if(null==s||null==s.get||null==s.set)throw new Error(`updateOnEvent should only be called on an accessor, but ${i} did not have both a getter and setter`);const{get:o,set:n}=s,r={...s,set(e){const i=this.__updateOnEventListener??=()=>this.requestUpdate(),s=o.call(this);return s?.removeEventListener?.(t,i),e?.addEventListener?.(t,i),n.call(this,e)}};Object.defineProperty(e,i,r)};let Pt=class extends et{static{this.styles=[at,r`:host{display:block}.todo-list{margin:0;padding:0;list-style:none}.toggle-all{text-align:center;border:none;opacity:0;position:absolute}.toggle-all+label{width:60px;height:34px;font-size:0;position:absolute;top:-52px;left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.toggle-all+label:before{content:"❯";font-size:22px;color:#e6e6e6;padding:10px 27px 10px 27px}.toggle-all:checked+label:before{color:#737373}`]}render(){return R`${(this.todoList?.all.length??0)>0?R`<input @change="${this.#p}" id="toggle-all" type="checkbox" class="toggle-all" .checked="${this.todoList?.allCompleted??!1}"> <label for="toggle-all">Mark all as complete</label>`:I}<ul class="todo-list">${At(this.todoList?.filtered()??[],(t=>t.id),(t=>R`<todo-item .todo="${t}"></todo-item>`))}</ul>`}#p(){this.dispatchEvent(new St)}};t([Nt("change"),rt({attribute:!1})],Pt.prototype,"todoList",void 0),Pt=t([st("todo-list")],Pt);let Ut=class extends et{static{this.styles=[at,r`:host{display:block}input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}`]}render(){return R`<input @change="${this.#u}" class="new-todo" autofocus autocomplete="off" placeholder="what needs to be done?">`}#u(t){const e=t.target,{value:i}=e;i.length>0&&this.dispatchEvent(new wt(i)),e.value=""}};t([Nt("change"),rt({attribute:!1})],Ut.prototype,"todoList",void 0),Ut=t([st("todo-form")],Ut);let Ht=class extends et{static{this.styles=[at,r`:host{display:block}.footer{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.clear-completed,.clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}`]}render(){return this.todoList?.all.length?R`<footer class="footer"><span class="todo-count"><strong>${this.todoList?.active.length}</strong> items left</span><ul class="filters"><li>${Dt({text:"All",filter:"all",selectedFilter:this.todoList?.filter})}</li><li>${Dt({text:"Active",filter:"active",selectedFilter:this.todoList?.filter})}</li><li>${Dt({text:"Completed",filter:"completed",selectedFilter:this.todoList?.filter})}</li></ul>${this.todoList?.completed.length?R`<button @click="${this.#g}" class="clear-completed">Clear Completed</button>`:I}</footer>`:I}#g(){this.dispatchEvent(new Lt)}};function Dt({text:t,filter:e,selectedFilter:i}){return R`<a class="${Et({selected:e===i})}" href="#/${e}">${t}</a>`}t([Nt("change"),rt({attribute:!1})],Ht.prototype,"todoList",void 0),Ht=t([st("todo-footer")],Ht);let Ot=class extends et{static{this.styles=[at,r`:host{display:block}.todoapp{background:#fff;margin:130px 0 40px 0;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}`]}constructor(){super(),this.todoList=new ht,this.#f=t=>{this.todoList.add(t.text)},this.#m=t=>{this.todoList.delete(t.id)},this.#$=t=>{this.todoList.update(t.todo)},this.#b=t=>{this.todoList.toggleAll()},this.#v=t=>{this.todoList.clearCompleted()},this.addEventListener(wt.eventName,this.#f),this.addEventListener(Ct.eventName,this.#m),this.addEventListener(kt.eventName,this.#$),this.addEventListener(St.eventName,this.#b),this.addEventListener(Lt.eventName,this.#v)}connectedCallback(){super.connectedCallback(),this.todoList.connect()}disconnectedCallback(){super.disconnectedCallback(),this.todoList.disconnect()}render(){return R`<section class="todoapp"><header class="header"><h1>todos</h1><todo-form .todoList="${this.todoList}"></todo-form></header><section class="main"><todo-list .todoList="${this.todoList}"></todo-list></section><todo-footer .todoList="${this.todoList}"></todo-footer></section>`}#f;#m;#$;#b;#v};t([Nt("change"),lt()],Ot.prototype,"todoList",void 0),Ot=t([st("todo-app")],Ot);export{Ot as TodoApp};
