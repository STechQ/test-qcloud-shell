/*! For license information please see s3FileDelete_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var l=s(7111);l.createRoot,l.hydrateRoot},6094:(e,t,s)=>{"use strict";var l=s(8156),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var l,a={},c=null,d=null;for(l in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,l)&&!r.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:n,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)l.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return s[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return(()=>{"use strict";n.r(a),n.d(a,{default:()=>j});var e=n(4512),t=n(8156);n.p;const s=({label:s,className:l,placeholder:n,value:a,disabled:i,isDigit:o=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,t.useState)(a);return(0,t.useEffect)((()=>{u(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${l||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:n,value:d,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),u(t))},onBlur:c,disabled:i})]})},l=(n.p,({label:s,isKeepOpen:l=!1,onAddButton:n,children:a})=>{const[i,o]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!i),children:[!l&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),n&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n(e)}})]}),(l||i)&&(0,e.jsx)("ul",{className:"variable-list",children:a})]})}),i=n=>{const[a,i]=(0,t.useState)(n.label.value||"");return(0,t.useEffect)((()=>{i(n.label.value||"")}),[n.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(l,{label:n.collapsibleLabel||"NAME",children:(0,e.jsx)(s,{disabled:n.disabled,className:"w-100",value:a,onChange:e=>{i(e),n.onChangeLabel({type:"string",value:e})}})})})};n.p;var o=n(5685),r=n.n(o);n.p;const c=({isOpen:s,onClose:l,children:n,footer:a=[],title:i,type:o="dialog",position:c})=>{if(!s)return null;const[d,u]=(0,t.useState)({top:0}),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:s})}}),[c]),(0,e.jsx)("div",{className:r()({overlay:"modal"===o}),children:(0,e.jsxs)("div",{ref:p,className:r()("dialog",{"dialog-monaco":"modal"==o}),style:d,children:["dialog"===o?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const s=t.getBoundingClientRect(),l=e.clientX-s.left,n=e=>{u({top:e.clientY-10,left:e.clientX-l})},a=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})};function d(e,s){(0,t.useEffect)((()=>{const t=t=>{const l=null==e?void 0:e.current;l&&!l.contains((null==t?void 0:t.target)||null)&&s(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,s])}n.p;const u=s=>{var l;const[n,a]=(0,t.useState)(!1),i=(0,t.useRef)(null);return d(i,(()=>a(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!n)},children:s.iconClass&&(0,e.jsx)("i",{className:s.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:n?"block":"none"},children:null===(l=s.options)||void 0===l?void 0:l.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{a(!1),t.onClick(e)},children:t.name},t.name)))})]})},p=({collapsibleLabel:s,fields:n,disabledFields:a=[],fieldLabel:i,dialogElements:o,emptyValues:r,isAddible:d=!0,isDeletable:p=!0,isCollabsible:v=!0,createItemLabel:m,dialogTitle:f,maxItemLen:g,disabled:y,onChange:h,validate:b,getFieldLabel:x})=>{const[j,S]=(0,t.useState)([]),[N,k]=(0,t.useState)(!1),[C,E]=(0,t.useState)(0),[w,O]=(0,t.useState)({top:0}),[L,A]=(0,t.useState)(!1),[P,V]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),t=n.filter((t=>!e.has(JSON.stringify(t))));S(t)}),[n]);const R=(e,t,s=!1)=>{O({top:e.pageY}),A(s),E(t),b&&V(b(j[t])),k(!0)},$=(e,t,s=i)=>{if(!e)return;if(s.includes(".")){const t=D(s,e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`${"name"==i?"Variable ":i}`}const l=e?e[s]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`${"name"==i?"Variable ":i}`},D=(e,t)=>{if(t)return e.split(".").reduce(((e,t)=>e[t]),t)},_=e=>{S(e),h(JSON.parse(JSON.stringify([...a,...e])))};function F(e,t){const s=[...j];((e,t,s)=>{const l=t.split("."),n=l.pop();l.reduce(((e,t)=>e[t]),e)[n]=s})(s[C],e,t),_(s),b&&V(b(s[C]))}const I=e=>{if(y)return;if(void 0!==g&&j.length>=g)return;const t=[...j],s=JSON.parse(JSON.stringify(r));Object.keys(s).forEach((e=>{if("name"==e)s[e]=""==s[e]?`Variable ${(t.length+1).toString()}`:s[e];else if("object"==typeof s[e]&&s[e].hasOwnProperty("value")){let l=s[e].value;l=""==l?i+" "+(t.length+1).toString():l,s[e].value=l}})),t.push(s),_(t),e&&O({top:e.pageY}),E(t.indexOf(s)),k(!0)},K=(e,t)=>{var s;const l={true:a,false:j};y&&(l[L.toString()]={...a,...j});const n=null===(s=l[L.toString()])||void 0===s?void 0:s[C];return{Expression:{expression:(null==n?void 0:n[t])||{type:"string",value:""},onBlur:e=>{F(t,e)}},Checkbox:{checked:$(n,0,t)||!1,onChange:e=>{F(t,e)}},Select:{value:$(n,0,t)||"",onChange:e=>{F(t,e)}},Input:{value:$(n,0,t)||"",onChange:e=>{F(t,e)}},MultiSelect:{values:$(n,0,t)||[],onChange:e=>{F(t,e)}},Mapping:{mapping:D(t,n)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{F(t+".inParamMapping",e)},onChangeOutParamMapping:e=>{F(t+".outParamMapping",e)}}}[e]||{value:(null==n?void 0:n[t])||"",onChange:e=>{F(t,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==a.length&&d?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>I(e),children:[(0,e.jsx)("p",{children:m}),void 0===g||void 0!==g&&j.length<g?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l,{label:s,isKeepOpen:!v,...(()=>{if(d&&!(void 0!==g&&j.length>=g))return{onAddButton:I}})(),children:[null==a?void 0:a.map(((t,s)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>R(e,s,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(t))||$(t)||`${"name"==i?"Variable ":i} ${s+1}`})},`item${s}`))),null==j?void 0:j.map(((t,s)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>R(e,s,y),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(t))||$(t)||`${"name"==i?"Variable ":i} ${s+1}`}),p&&(0,e.jsx)(u,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),_([...j].filter(((e,s)=>s!=t))),k(!1)})(e,s)}}]})]},`item${s}`)))]}),(0,e.jsxs)(c,{isOpen:N,title:f,onClose:()=>(k(!1),void V("")),position:w,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===P?"none":""},children:["$",P]}),o.map(((t,s)=>{var l,n;if((L||!t.isRendered||(null===(l=null==t?void 0:t.isRendered)||void 0===l?void 0:l.call(t,j[C])))&&(!L||!t.isRendered||(null===(n=null==t?void 0:t.isRendered)||void 0===n?void 0:n.call(t,a[C]))))return(0,e.jsx)(t.component,{...K(t.componentName,t.key),disabled:L,...t.props,children:t.children},t.key)}))]})]})})};function v(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function m(e){const s=(0,t.useSyncExternalStore)(v,(()=>function(e){var t,s,l,n,a;const i=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(s=null==i?void 0:i.width)&&void 0!==s?s:0,height:null!==(l=null==i?void 0:i.height)&&void 0!==l?l:0,top:null!==(n=null==i?void 0:i.top)&&void 0!==n?n:0,left:null!==(a=null==i?void 0:i.left)&&void 0!==a?a:0})}(e)));return(0,t.useMemo)((()=>JSON.parse(s)),[s])}n.p,n.p;const f=({label:s,options:l=[],className:n,placeholder:a,value:i,disabled:o,onChange:r})=>{const[c,u]=(0,t.useState)(!1),[p,v]=(0,t.useState)(i),[f,g]=(0,t.useState)([]),y=(0,t.useRef)(null),h=(0,t.useRef)(null),b=(0,t.useRef)(null),{width:x,top:j,left:S,height:N}=m(h),{height:k}=m(b);return d(y,(()=>u(!1))),(0,t.useEffect)((()=>{const e=f.find((e=>e.value===i));e?v(e.name):i||v("")}),[i,f]),(0,t.useEffect)((()=>{g(l)}),[l]),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:s}),(0,e.jsxs)("div",{ref:y,children:[(0,e.jsxs)("div",{className:"input",ref:h,onClick:()=>{o||u(!c)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:b,style:{display:c?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return j+N+5+k>e?{top:j-k-5,left:S,width:x}:{top:j+N+5,left:S,width:x}})()},children:(0,e.jsx)("ul",{children:l.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=p?(e=>{r(e.value),u(!1)})(t):u(!1),children:t.name},t.value)))})})]})]})};n(4645),n.p;const g=({children:t,className:s,color:l="primary",disabled:n,onClick:a})=>(0,e.jsx)("button",{className:r()("button-flow",s,l),disabled:n,onClick:a,children:t});n.p;const y=({node:s,level:l=0,onSelect:n,selected:a})=>{const[i,o]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=a.split(".");e.length>0&&o(i.concat(e))}),[a]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((t=>{const c=Array.isArray(s[t])?s[t].length>0:"object"==typeof s[t]&&null!==s[t],d=a===t,u=a.split(".").length>1?a.split(".").filter(((e,t)=>0!==t)).join("."):a;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:r()("tree-row",{selected:d}),onClick:()=>(e=>{n(e)})(t),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*l:20*l+10},onClick:()=>(e=>{i.includes(e)?o(i.filter((t=>t!==e))):o([...i,e])})(t),children:[c&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(t)?"down":"right")}),(0,e.jsx)("span",{children:t})]})},t),c&&i.includes(t)&&(0,e.jsx)(y,{node:s[t],level:l+1,onSelect:e=>n(`${t}.${e}`),selected:u})]})}))})},h=({className:l,isOpen:n,selected:a,position:i,items:o,onSelected:d,onClose:u})=>{const[p,v]=(0,t.useState)(""),[m,f]=(0,t.useState)(""),[h,b]=(0,t.useState)(o),[x,j]=(0,t.useState)({top:200});return(0,t.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,l)=>{if("object"==typeof t[l]){if(!l)return s;if(0===Object.keys(t[l]).length)return s[l]="",s;t[l].type?s[l]=t[l].type:s[l]=e(t[l])}else s[l]=t[l];return s}),{});if(!o)return;const t=e(o);b(JSON.parse(JSON.stringify(t))),v("")}),[o]),(0,t.useEffect)((()=>{a&&v(a)}),[a]),(0,t.useEffect)((()=>{i&&j(i)}),[i]),(0,e.jsx)("div",{className:r()("picker",l),children:(0,e.jsx)(c,{title:"Picker",position:x,isOpen:n,onClose:()=>u(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{className:"mb-3",placeholder:"Search",value:m,onChange:e=>f(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(y,{node:(e=>{const t=s=>Object.keys(s).reduce(((l,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(l[n]=s[n]),Array.isArray(s[n])){const t=s[n].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(l[n]=t)}if("object"==typeof s[n]&&null!==s[n]){const e=t(s[n]);Object.keys(e).length>0&&(l[n]=e)}return l}),{});return h?t(h):{}})(m),selected:p,onSelect:e=>{v(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(g,{color:"secondary",className:"px-2",onClick:()=>u(),children:"Cancel"}),(0,e.jsx)(g,{className:"ms-3 px-2",disabled:!p,onClick:()=>{d(p),u()},children:"SELECT"})]})]})})})},b=({label:l,className:n,types:a,expression:i,disabled:o,constantsOptions:r,store:c,onChange:d,onBlur:u})=>{const[p,v]=(0,t.useState)([]),[m,g]=(0,t.useState)(a[0]),[y,b]=(0,t.useState)(""),[x,j]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{g(i.type),b(i.value)}),[i]),(0,t.useEffect)((()=>{v(a.map((e=>({name:e,value:e}))))}),[a]),(0,e.jsxs)("div",{className:`expression-flow ${n||""}`,children:[(0,e.jsx)(f,{label:l,options:p,disabled:o||x,value:m,onChange:e=>{null==d||d({value:"",type:e}),null==u||u({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,e.jsx)(f,{className:"w-100",options:r||[],value:y,disabled:o||x,onChange:e=>{null==d||d({type:m,value:e}),null==u||u({type:m,value:e}),b(e)}}):(0,e.jsx)(s,{className:"w-100",value:y,onChange:e=>{null==d||d({type:m,value:e}),b(e)},disabled:o||x,onBlur:e=>null==u?void 0:u({type:m,value:e.target.value})}),["context","input","output","vars"].includes(m)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{o||j(!0)},children:(0,e.jsx)("i",{className:y?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(h,{isOpen:x,items:c[m],onClose:()=>j(!1),selected:y,onSelected:e=>{null==d||d({type:m,value:e}),null==u||u({type:m,value:e}),b(e)}})]})]})]})};var x;x={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(x);const j={name:"s3FileDelete",panelLabel:"S3 File Delete",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#07345E",icon:"mdi-aws",defaultProps:()=>({label:{type:"string",value:"S3 File Delete"},description:"S3 File Delete",storageHandle:{type:"string",value:""},accessKeyId:{type:"string",value:""},secretAccessKey:{type:"string",value:""},endpoint:{type:"string",value:""},region:{type:"string",value:""}}),editSection:s=>()=>{const[n,a]=(0,t.useState)({key:s.propValues.storageHandle||{type:"string",value:""}}),[o,r]=(0,t.useState)({key:s.propValues.accessKeyId||{type:"string",value:""}}),[c,d]=(0,t.useState)({key:s.propValues.secretAccessKey||{type:"string",value:""}}),[u,v]=(0,t.useState)({key:s.propValues.endpoint||{type:"string",value:""}}),[m,f]=(0,t.useState)({key:s.propValues.region||{type:"string",value:""}}),[g,y]=(0,t.useState)(),[h,x]=(0,t.useState)([]);(0,t.useEffect)((()=>{a({key:s.propValues.storageHandle||{type:"string",value:""}})}),[s.propValues.storageHandle]),(0,t.useEffect)((()=>{r({key:s.propValues.accessKeyId||{type:"string",value:""}})}),[s.propValues.accessKeyId]),(0,t.useEffect)((()=>{d({key:s.propValues.secretAccessKey||{type:"string",value:""}})}),[s.propValues.secretAccessKey]),(0,t.useEffect)((()=>{v({key:s.propValues.endpoint||{type:"string",value:""}})}),[s.propValues.endpoint]),(0,t.useEffect)((()=>{f({key:s.propValues.region||{type:"string",value:""}})}),[s.propValues.region]),(0,t.useEffect)((()=>{(async()=>{var e,t;const l=await(null===(t=null===(e=s.callbacks.ui)||void 0===e?void 0:e.getModels)||void 0===t?void 0:t.call(e,"constant"));l&&y(l)})()}),[]),(0,t.useEffect)((()=>{if(g){const e=g.map((e=>({name:e.name,value:e.ID})));x(e)}}),[g]);const j=e=>{var t,s;return"constant"!==e.key.type?(null===(t=e.key)||void 0===t?void 0:t.value)||"":(null===(s=h.find((t=>e.key.value===t.value)))||void 0===s?void 0:s.name)||""},S=e=>[{component:b,componentName:"Expression",key:"key",props:{label:"Key",types:e,constantsOptions:h,store:s.callbacks.nestedStore}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i,{label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsxs)(l,{label:"PROPERTIES",children:[(0,e.jsx)(p,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Storage Handle",getFieldLabel:e=>e.key.value||"",fields:[n],fieldLabel:"Storage Handle",collapsibleLabel:"STORAGE HANDLE",isAddible:!1,isDeletable:!1,dialogElements:S(["string","input","context","vars"]),onChange:e=>{a(e[0]),s.callbacks.setProp("storageHandle",e[0].key)}}),(0,e.jsx)(p,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Access Key Id",getFieldLabel:e=>j(e),fields:[o],fieldLabel:"Access Key Id",collapsibleLabel:"ACCESS KEY ID",isAddible:!1,isDeletable:!1,dialogElements:S(["string","input","context","vars","constant"]),onChange:e=>{r(e[0]),s.callbacks.setProp("accessKeyId",e[0].key)}}),(0,e.jsx)(p,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Secret Access Key",getFieldLabel:e=>j(e),fields:[c],fieldLabel:"Secret Access Key",collapsibleLabel:"SECRET ACCESS KEY",isAddible:!1,isDeletable:!1,dialogElements:S(["string","input","context","vars","constant"]),onChange:e=>{d(e[0]),s.callbacks.setProp("secretAccessKey",e[0].key)}}),(0,e.jsx)(p,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Endpoint",getFieldLabel:e=>j(e),fields:[u],fieldLabel:"Endpoint",collapsibleLabel:"ENDPOINT",isAddible:!1,isDeletable:!1,dialogElements:S(["string","input","context","vars","constant"]),onChange:e=>{v(e[0]),s.callbacks.setProp("endpoint",e[0].key)}}),(0,e.jsx)(p,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Region",getFieldLabel:e=>j(e),fields:[m],fieldLabel:"Region",collapsibleLabel:"REGION",isAddible:!1,isDeletable:!1,dialogElements:S(["string","input","context","vars","constant"]),onChange:e=>{f(e[0]),s.callbacks.setProp("region",e[0].key)}})]})]})}}})(),a})()));