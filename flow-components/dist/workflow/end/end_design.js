/*! For license information please see end_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react")):"function"==typeof define&&define.amd?define(["react"],l):"object"==typeof exports?exports.flowcomponent=l(require("react")):e.flowcomponent=l(e.react)}(this,(e=>(()=>{var l={6094:(e,l,n)=>{"use strict";var s=n(8156),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,n){var s,a={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)o.call(l,s)&&!r.hasOwnProperty(s)&&(a[s]=l[s]);if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===a[s]&&(a[s]=l[s]);return{$$typeof:t,type:e,key:c,ref:d,props:a,_owner:i.current}}l.Fragment=a,l.jsx=c,l.jsxs=c},4512:(e,l,n)=>{"use strict";e.exports=n(6094)},8156:l=>{"use strict";l.exports=e},5685:(e,l)=>{var n;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e="",l=0;l<arguments.length;l++){var n=arguments[l];n&&(e=o(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var n in e)s.call(e,n)&&e[n]&&(l=o(l,n));return l}function o(e,l){return l?e?e+" "+l:e+l:e}e.exports?(t.default=t,e.exports=t):void 0===(n=function(){return t}.apply(l,[]))||(e.exports=n)}()}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return l[e](a,a.exports,s),a.exports}s.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return s.d(l,{a:l}),l},s.d=(e,l)=>{for(var n in l)s.o(l,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})},s.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var t={};return(()=>{"use strict";s.r(t),s.d(t,{default:()=>x});var e=s(4512),l=s(8156);s.p,s.p;const n=({label:n,isKeepOpen:s=!1,onAddButton:t,children:a})=>{const[o,i]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>i(!o),children:[!s&&(0,e.jsx)("i",{className:"mdi "+(o?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:n})]}),t&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),t()}})]}),(s||o)&&(0,e.jsx)("ul",{className:"variable-list",children:a})]})};var a=s(5685),o=s.n(a);s.p;const i=({isOpen:n,onClose:s,children:t,footer:a=[],title:i,type:r="dialog",position:c})=>{if(!n)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const n=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:n})}}),[c]),(0,e.jsx)("div",{className:o()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:o()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const n=l.getBoundingClientRect(),s=e.clientX-n.left,t=e=>{u({top:e.clientY,left:e.clientX-s})},a=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",a)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:s,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:t}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})};function r(e,n){(0,l.useEffect)((()=>{const l=l=>{const s=null==e?void 0:e.current;s&&!s.contains((null==l?void 0:l.target)||null)&&n(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,n])}s.p;const c=n=>{var s;const[t,a]=(0,l.useState)(!1),o=(0,l.useRef)(null);return r(o,(()=>a(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:o,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!t)},children:n.iconClass&&(0,e.jsx)("i",{className:n.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:t?"block":"none"},children:null===(s=n.options)||void 0===s?void 0:s.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{a(!1),l.onClick(e)},children:l.name},l.name)))})]})},d=({collapsibleLabel:s,fields:t,disabledFields:a=[],fieldLabel:o,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:v=!0,createItemLabel:m,dialogTitle:f,maxItemLen:h,onChange:b,validate:x,getFieldLabel:g})=>{const[y,j]=(0,l.useState)([]),[N,k]=(0,l.useState)(!1),[C,S]=(0,l.useState)(0),[w,E]=(0,l.useState)({top:0}),[L,O]=(0,l.useState)(!1),[$,_]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),l=t.filter((l=>!e.has(JSON.stringify(l))));j(l)}),[t]);const R=(e,l,n=!1)=>{E({top:e.pageY}),O(n),S(l),x&&_(x(y[l])),k(!0)},D=(e,l,n=o)=>{if(!e)return;if(n.includes(".")){const s=n.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(s)||"object"!=typeof s?s:s.value?`${s.type}.${s.value}`:`Variable ${l+1}`}const s=e?e[n]:e;return Array.isArray(s)||"object"!=typeof s?s:s.value?`${s.type}.${s.value}`:`Variable ${l+1}`},P=e=>{j(e),b(JSON.parse(JSON.stringify([...a,...e])))};function F(e,l){const n=[...y];((e,l,n)=>{const s=l.split("."),t=s.pop();s.reduce(((e,l)=>e[l]),e)[t]=n})(n[C],e,l),P(n),x&&_(x(n[C]))}const A=()=>{if(void 0!==h&&y.length>=h)return;const e=[...y];e.push(JSON.parse(JSON.stringify(d))),P(e)},B=(e,l)=>{var n;const s=null===(n={true:a,false:y}[L.toString()])||void 0===n?void 0:n[C];return{Expression:{expression:(null==s?void 0:s[l])||{type:"string",value:""},onBlur:e=>{F(l,e)}},Checkbox:{checked:D(s,0,l)||!1,onChange:e=>{F(l,e.target.checked)}},Select:{value:D(s,0,l)||"",onChange:e=>{F(l,e)}},Input:{value:D(s,0,l)||"",onBlur:e=>{F(l,e.target.value)}},MultiSelect:{values:D(s,0,l)||[],onChange:e=>{F(l,e)}}}[e]||{value:(null==s?void 0:s[l])||"",onChange:e=>{F(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==y?void 0:y.length)&&0==a.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:A,children:[(0,e.jsx)("p",{children:m}),void 0===h||void 0!==h&&y.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n,{label:s,isKeepOpen:!v,...(()=>{if(u&&!(void 0!==h&&y.length>=h))return{onAddButton:A}})(),children:[null==a?void 0:a.map(((l,n)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==g?void 0:g(l))||D(l,n)||`Variable ${n+1}`})},`item${n}`))),null==y?void 0:y.map(((l,n)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==g?void 0:g(l))||D(l,n)||`Variable ${n+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),P([...y].filter(((e,n)=>n!=l)))})(e,n)}}]})]},`item${n}`)))]}),(0,e.jsxs)(i,{isOpen:N,title:f,onClose:()=>(k(!1),void _("")),position:w,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===$?"none":""},children:["$",$]}),r.map(((l,n)=>{var s,t;if((L||!l.isRendered||(null===(s=null==l?void 0:l.isRendered)||void 0===s?void 0:s.call(l,y[C])))&&(!L||!l.isRendered||(null===(t=null==l?void 0:l.isRendered)||void 0===t?void 0:t.call(l,a[C]))))return(0,e.jsx)(l.component,{...B(l.component.name,l.key),disabled:L,...l.props,children:l.children},l.key)}))]})]})})},u=(s.p,({label:n,options:s=[],className:t,placeholder:a,value:o,disabled:i,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[p,v]=(0,l.useState)(o),[m,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return r(h,(()=>u(!1))),(0,l.useEffect)((()=>{const e=m.find((e=>e.value===o));e?v(e.name):o||v("")}),[o,m]),(0,l.useEffect)((()=>{f(s)}),[s]),(0,e.jsxs)("div",{className:`select-flow position-relative ${t||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:n}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input",onClick:()=>{i||u(!d)},style:{cursor:i?"not-allowed":"default",opacity:i?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none",pointerEvents:i?"none":"all"},children:(0,e.jsx)("ul",{children:s.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=p?(e=>{c(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})}),p=(s.p,({label:l,className:n,checked:s,disabled:t,onChange:a})=>(0,e.jsxs)("div",{className:`checkbox-flow ${n||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:s,onChange:a,disabled:t}),(0,e.jsx)("label",{className:"p-0",children:l})]})),v=({id:l,label:n,remove:s})=>(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{children:n}),(0,e.jsx)("i",{className:"mdi mdi-close",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(l)}})]}),m=({label:n,options:s,className:t,placeholder:a,values:o,disabled:i,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[m,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=s.filter((e=>null==o?void 0:o.some((l=>e.value===l))));e&&f(e)}),[o]),r(h,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${t||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block",children:n}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input w-100",onClick:()=>{i||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:m.map(((l,n)=>(0,e.jsx)(v,{id:n,remove:e=>{(e=>{const l=m.filter(((l,n)=>n!==e));f(l),c(l.map((e=>e.value)))})(e)},label:l.name},crypto.randomUUID())))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none"},children:(0,e.jsx)("ul",{children:s.map(((l,n)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=m;m.some((l=>l.value===e.value))?l=m.filter((l=>l.value!==e.value)):l.push(e),f(l),c(l.map((e=>e.value)))})(l),children:(0,e.jsx)(p,{checked:m.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})},f=(s.p,s.p,({label:n,className:s,placeholder:t,value:a,disabled:o,isDigit:i=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,l.useState)(a);return(0,l.useEffect)((()=>{u(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${s||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block p-0",children:n}),(0,e.jsx)("input",{className:"w-100",placeholder:t,value:d,onChange:e=>{i&&!new RegExp(/^\d+$/).test(e.target.value)||(null==r||r(e),u(e.target.value))},onBlur:c,disabled:o})]})}),h=({label:n,className:s,types:t,expression:a,constantsOptions:o,onChange:i,onBlur:r})=>{const[c,d]=(0,l.useState)([]),[p,v]=(0,l.useState)(t[0]),[m,h]=(0,l.useState)("");return(0,l.useEffect)((()=>{v(a.type),h(a.value)}),[a]),(0,l.useEffect)((()=>{d(t.map((e=>({name:e,value:e}))))}),[t]),(0,e.jsxs)("div",{className:`expression-flow ${s||""}`,children:[(0,e.jsx)(u,{label:n,options:c,value:p,onChange:e=>{null==i||i({value:"",type:e}),null==r||r({value:m,type:e})}}),"constant"===p?(0,e.jsx)(u,{options:o||[],value:m,onChange:e=>{null==i||i({type:p,value:e}),null==r||r({type:p,value:e}),h(e)}}):(0,e.jsx)(f,{className:"mt-2",value:m,onChange:e=>{null==i||i({type:p,value:e.target.value}),h(e.target.value)},onBlur:e=>null==r?void 0:r({type:p,value:e.target.value})})]})},b=n=>{const[s,t]=(0,l.useState)({label:n.label||{type:"string",value:""},description:n.description||""});(0,l.useEffect)((()=>{t({label:n.label||{type:"string",value:""},description:n.description||""})}),[n.label,n.description]);const a=[{component:h,key:"label",props:{label:"Label",types:["string"]}},{component:f,key:"description",props:{label:"Description"}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(d,{emptyValues:{label:{type:"string",value:""},description:""},dialogTitle:"Label",getFieldLabel:e=>{var l;return(null===(l=e.label)||void 0===l?void 0:l.value)||""},fields:[s],fieldLabel:"Label",collapsibleLabel:"LABEL",isAddible:!1,isDeletable:!1,dialogElements:a,onChange:e=>{t(e[0]),n.onChangeLabel(e[0].label),n.onChangeDescription(e[0].description)}})})},x={name:"end",panelLabel:"End",version:"0.8",inputs:[{name:"_"}],outputs:[],icon:"mdi-flag-checkered",defaultProps:()=>({label:{type:"string",value:"End"},description:"end",forms:[],actions:[]}),editSection:n=>()=>{var s,t,a,o;const[i,r]=(0,l.useState)([]),c=(null===(a=null===(t=null===(s=null==n?void 0:n.callbacks)||void 0===s?void 0:s.ui)||void 0===t?void 0:t.getRoles)||void 0===a?void 0:a.call(t).map((e=>e.value)))||[],[v,f]=(0,l.useState)(!1),h=i.map((e=>({name:`${e.name}`,value:e.ID}))),x=c.map((e=>({name:`${e}`,value:e})));if(!n.callbacks.ui)throw new Error("end can not execute on environments without UI");const g=n.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{r(await g.getModels("qjson"))})()}),[]);const y=[{component:u,key:"id",props:{label:"Form",types:null===(o=n.propValues.forms)||void 0===o?void 0:o.map((e=>e.id)),options:h}},{component:m,key:"roles",props:{label:"Roles",options:x}},{component:p,key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b,{label:n.propValues.label,description:n.propValues.description,onChangeLabel:e=>n.callbacks.setProp("label",e),onChangeDescription:e=>n.callbacks.setProp("description",e)}),(0,e.jsx)(d,{fields:n.propValues.forms||[],dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=i.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:y,emptyValues:{id:"",roles:[],readonly:!0},createItemLabel:"Add Forms",onChange:e=>{n.callbacks.setProp("forms",e)}})]})}}})(),t})()));