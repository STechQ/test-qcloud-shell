/*! For license information please see restServiceCall_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{var t={6094:(e,t,a)=>{"use strict";var n=a(8156),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,a){var n,i={},p=null,u=null;for(n in void 0!==a&&(p=""+a),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!r.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:l,type:e,key:p,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=p,t.jsxs=p},4512:(e,t,a)=>{"use strict";e.exports=a(6094)},8156:t=>{"use strict";t.exports=e},5685:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=s(e,i(a)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)n.call(e,a)&&e[a]&&(t=s(t,a));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var l={};return(()=>{"use strict";n.r(l),n.d(l,{default:()=>j});var e,t=n(4512),a=n(8156);let i;e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0},Object.keys(e);const s=i={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const o=()=>p;let r;const p=r={inParamMapping:[],outParamMapping:[],props:{httpMethod:"GET"}},u=(n.p,n.p,({label:e,isKeepOpen:n=!1,onAddButton:l,children:i})=>{const[s,o]=(0,a.useState)(!0);return(0,t.jsxs)("div",{className:"variables ",children:[(0,t.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,t.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!s),children:[!n&&(0,t.jsx)("i",{className:"mdi "+(s?"mdi-chevron-down":"mdi-chevron-right")}),(0,t.jsx)("p",{children:e})]}),l&&(0,t.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),l()}})]}),(n||s)&&(0,t.jsx)("ul",{className:"variable-list",children:i})]})});var d=n(5685),c=n.n(d);n.p;const v=({isOpen:e,onClose:n,children:l,footer:i=[],title:s,type:o="dialog",position:r})=>{if(!e)return null;const[p,u]=(0,a.useState)({top:0}),d=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e,t;if(r){const a=window.innerHeight>r.top+((null===(e=d.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(t=d.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:a})}}),[r]),(0,t.jsx)("div",{className:c()({overlay:"modal"===o}),children:(0,t.jsxs)("div",{ref:d,className:c()("dialog",{"dialog-monaco":"modal"==o}),style:p,children:["dialog"===o?(0,t.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=d.current;if(!t)return;const a=t.getBoundingClientRect(),n=e.clientX-a.left,l=e=>{u({top:e.clientY,left:e.clientX-n})},i=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",i)})(e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}):(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"dialog-header",children:[(0,t.jsx)("h5",{className:"dialog-title m-0",children:s}),(0,t.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,t.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,t.jsx)("div",{className:"dialog-body",children:l}),i.length>0&&(0,t.jsx)("div",{className:"dialog-footer",children:i.map((e=>e))})]})})};function m(e,t){(0,a.useEffect)((()=>{const a=a=>{const n=null==e?void 0:e.current;n&&!n.contains((null==a?void 0:a.target)||null)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])}n.p;const g=e=>{var n;const[l,i]=(0,a.useState)(!1),s=(0,a.useRef)(null);return m(s,(()=>i(!1))),(0,t.jsxs)("div",{className:"dropdown-flow",ref:s,children:[(0,t.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),i(!l)},children:e.iconClass&&(0,t.jsx)("i",{className:e.iconClass})}),(0,t.jsx)("ul",{className:"py-3",style:{display:l?"block":"none"},children:null===(n=e.options)||void 0===n?void 0:n.map((e=>(0,t.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{i(!1),e.onClick(t)},children:e.name},e.name)))})]})},f=({collapsibleLabel:e,fields:n,disabledFields:l=[],fieldLabel:i,dialogElements:s,emptyValues:o,isAddible:r=!0,isDeletable:p=!0,isCollabsible:d=!0,createItemLabel:c,dialogTitle:m,maxItemLen:f,onChange:h,validate:b,getFieldLabel:x})=>{const[y,j]=(0,a.useState)([]),[S,P]=(0,a.useState)(!1),[N,C]=(0,a.useState)(0),[M,E]=(0,a.useState)({top:0}),[w,k]=(0,a.useState)(!1),[O,L]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=new Set(l.map((e=>JSON.stringify(e)))),t=n.filter((t=>!e.has(JSON.stringify(t))));j(t)}),[n]);const _=(e,t,a=!1)=>{E({top:e.pageY}),k(a),C(t),b&&L(b(y[t])),P(!0)},I=(e,t,a=i)=>{if(!e)return;if(a.includes(".")){const n=a.split(".").reduce(((e,t)=>e[t]),e);return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`Variable ${t+1}`}const n=e?e[a]:e;return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`Variable ${t+1}`},R=e=>{j(e),h(JSON.parse(JSON.stringify([...l,...e])))};function A(e,t){const a=[...y];((e,t,a)=>{const n=t.split("."),l=n.pop();n.reduce(((e,t)=>e[t]),e)[l]=a})(a[N],e,t),R(a),b&&L(b(a[N]))}const V=()=>{if(void 0!==f&&y.length>=f)return;const e=[...y];e.push(JSON.parse(JSON.stringify(o))),R(e)},$=(e,t)=>{var a;const n=null===(a={true:l,false:y}[w.toString()])||void 0===a?void 0:a[N];return{Expression:{expression:(null==n?void 0:n[t])||{type:"string",value:""},onBlur:e=>{A(t,e)}},Checkbox:{checked:I(n,0,t)||!1,onChange:e=>{A(t,e.target.checked)}},Select:{value:I(n,0,t)||"",onChange:e=>{A(t,e)}},Input:{value:I(n,0,t)||"",onBlur:e=>{A(t,e.target.value)}},MultiSelect:{values:I(n,0,t)||[],onChange:e=>{A(t,e)}}}[e]||{value:(null==n?void 0:n[t])||"",onChange:e=>{A(t,e)}}};return(0,t.jsx)(t.Fragment,{children:0==(null==y?void 0:y.length)&&0==l.length&&r?(0,t.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:V,children:[(0,t.jsx)("p",{children:c}),void 0===f||void 0!==f&&y.length<f?(0,t.jsx)("i",{className:"mdi mdi-plus"}):(0,t.jsx)(t.Fragment,{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{label:e,isKeepOpen:!d,...(()=>{if(r&&!(void 0!==f&&y.length>=f))return{onAddButton:V}})(),children:[null==l?void 0:l.map(((e,a)=>(0,t.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==a&&"vertical-line"}`,onClick:e=>_(e,a,!0),children:(0,t.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||I(e,a)||`Variable ${a+1}`})},`item${a}`))),null==y?void 0:y.map(((e,a)=>(0,t.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==a&&"vertical-line"}`,onClick:e=>_(e,a),children:[(0,t.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||I(e,a)||`Variable ${a+1}`}),p&&(0,t.jsx)(g,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),R([...y].filter(((e,a)=>a!=t)))})(e,a)}}]})]},`item${a}`)))]}),(0,t.jsxs)(v,{isOpen:S,title:m,onClose:()=>(P(!1),void L("")),position:M,children:[(0,t.jsxs)("p",{style:{color:"red",display:""===O?"none":""},children:["$",O]}),s.map(((e,a)=>{var n,i;if((w||!e.isRendered||(null===(n=null==e?void 0:e.isRendered)||void 0===n?void 0:n.call(e,y[N])))&&(!w||!e.isRendered||(null===(i=null==e?void 0:e.isRendered)||void 0===i?void 0:i.call(e,l[N]))))return(0,t.jsx)(e.component,{...$(e.component.name,e.key),disabled:w,...e.props,children:e.children},e.key)}))]})]})})},h=(n.p,n.p,({label:e,options:n=[],className:l,placeholder:i,value:s,disabled:o,onChange:r})=>{const[p,u]=(0,a.useState)(!1),[d,c]=(0,a.useState)(s),[v,g]=(0,a.useState)([]),f=(0,a.useRef)(null);return m(f,(()=>u(!1))),(0,a.useEffect)((()=>{const e=v.find((e=>e.value===s));e?c(e.name):s||c("")}),[s,v]),(0,a.useEffect)((()=>{g(n)}),[n]),(0,t.jsxs)("div",{className:`select-flow position-relative ${l||""}`,children:[e&&(0,t.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,t.jsxs)("div",{ref:f,children:[(0,t.jsxs)("div",{className:"input",onClick:()=>{o||u(!p)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,t.jsx)("input",{className:"w-100 ellipsis-text",placeholder:i,value:d,onChange:()=>{}}),(0,t.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,t.jsx)("div",{className:"options",style:{display:p?"block":"none",pointerEvents:o?"none":"all"},children:(0,t.jsx)("ul",{children:n.map((e=>(0,t.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=d?(e=>{r(e.value),u(!1)})(e):u(!1),children:e.name},e.value)))})})]})]})}),b=(n.p,({label:e,className:n,placeholder:l,value:i,disabled:s,isDigit:o=!1,onChange:r,onBlur:p})=>{const[u,d]=(0,a.useState)(i);return(0,a.useEffect)((()=>{d(i)}),[i]),(0,t.jsxs)("div",{className:`input-flow ${n||""}`,children:[e&&(0,t.jsx)("label",{className:"d-block p-0",children:e}),(0,t.jsx)("input",{className:"w-100",placeholder:l,value:u,onChange:e=>{o&&!new RegExp(/^\d+$/).test(e.target.value)||(null==r||r(e),d(e.target.value))},onBlur:p,disabled:s})]})}),x=({label:e,className:n,types:l,expression:i,onChange:s,onBlur:o})=>{const[r,p]=(0,a.useState)([]),[u,d]=(0,a.useState)(l[0]),[c,v]=(0,a.useState)("");return(0,a.useEffect)((()=>{d(i.type),v(i.value)}),[i]),(0,a.useEffect)((()=>{p(l.map((e=>({name:e,value:e}))))}),[l]),(0,t.jsxs)("div",{className:`expression-flow ${n||""}`,children:[(0,t.jsx)(h,{label:e,options:r,value:u,onChange:e=>{null==s||s({value:c,type:e}),null==o||o({value:c,type:e})}}),(0,t.jsx)(b,{className:"mt-2",value:c,onChange:e=>{null==s||s({type:u,value:e.target.value}),v(e.target.value)},onBlur:e=>null==o?void 0:o({type:u,value:e.target.value})})]})},y=({mapping:e,mappingSchema:n,onChangeInParamMapping:l,onChangeOutParamMapping:i})=>{const[s,o]=(0,a.useState)((null==e?void 0:e.inParamMapping)||[]),[r,p]=(0,a.useState)((null==e?void 0:e.outParamMapping)||[]);(0,a.useEffect)((()=>{o((null==e?void 0:e.inParamMapping)||[])}),[null==e?void 0:e.inParamMapping]),(0,a.useEffect)((()=>{p((null==e?void 0:e.outParamMapping)||[])}),[null==e?void 0:e.outParamMapping]);const u=[{component:x,key:"mapping",props:{label:"Assignment",types:["input","context","string"]}}],d=[{component:x,key:"mapping",props:{label:"Assignment",types:["context","output"]}}];function c(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Set Variable",getFieldLabel:e=>e.variable.value,fields:Object.values(s).filter((e=>n.inParamMapping.findIndex((t=>t.variable.value===e.variable.value))<0)),disabledFields:Object.values(s).filter((e=>n.inParamMapping.findIndex((t=>t.variable.value===e.variable.value))>=0)),fieldLabel:"variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:u,onChange:e=>{o(e),l(e)},validate:c}),(0,t.jsx)(f,{emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Set Variable",fields:Object.values(r).filter((e=>n.outParamMapping.findIndex((t=>t.variable.value===e.variable.value))<0)),disabledFields:Object.values(r).filter((e=>n.outParamMapping.findIndex((t=>t.variable.value===e.variable.value))>=0)),fieldLabel:"variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:d,onChange:e=>{p(e),i(e)},validate:c})]})},j={name:"restServiceCall",version:"0.8",color:"#CDDC39",icon:"mdi-api",inputs:[{name:"_"}],outputs:["_"],defaultProps:()=>({label:{type:"string",value:"Rest Service"},description:"Rest Service",type:"referenced",id:"",mapping:structuredClone(o())}),editSection:e=>()=>{var n,l,i,r,p,d,c,v,m,g;const[f,x]=(0,a.useState)([]),[j,S]=(0,a.useState)((null===(l=null===(n=e.propValues.mapping)||void 0===n?void 0:n.props)||void 0===l?void 0:l.httpMethod)||"GET"),[P,N]=(0,a.useState)(e.propValues.id||""),[C,M]=(0,a.useState)([]),[E,w]=(0,a.useState)((null===(i=e.propValues.mapping)||void 0===i?void 0:i.inParamMapping)||[]),[k,O]=(0,a.useState)((null===(r=e.propValues.mapping)||void 0===r?void 0:r.outParamMapping)||[]),[L,_]=(0,a.useState)(e.propValues.description||"Rest Service"),[I,R]=(0,a.useState)((null===(d=null===(p=e.propValues.mapping)||void 0===p?void 0:p.props)||void 0===d?void 0:d.httpMethod)?[{name:null===(v=null===(c=e.propValues.mapping)||void 0===c?void 0:c.props)||void 0===v?void 0:v.httpMethod,value:null===(g=null===(m=e.propValues.mapping)||void 0===m?void 0:m.props)||void 0===g?void 0:g.httpMethod}]:[]);(0,a.useEffect)((()=>{(async()=>{var t,a;const n=await(null===(a=null===(t=e.callbacks.ui)||void 0===t?void 0:t.getModels)||void 0===a?void 0:a.call(t,"restService"));n&&M(n)})()}),[]),(0,a.useEffect)((()=>{if(C){const t=C.map((e=>({name:e.name,value:e.ID})));x(t),e.callbacks.setProp("type","referenced")}}),[C]);const{ExpressionComp:A}=e.react,[V,$]=(0,a.useState)(e.propValues.label||{type:"string",value:"Rest Service Call"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{label:"PROPERTIES",children:[(0,t.jsx)("label",{children:"Label"}),(0,t.jsx)(A,{types:["input","context","output","number","string"],expression:V,onChange:t=>{$(t),e.callbacks.setProp("label",t)}}),(0,t.jsx)(b,{label:"Description",value:L,onChange:t=>{_(t.target.value),e.callbacks.setProp("description",t.target.value)},onBlur:t=>{_(t.target.value),e.callbacks.setProp("description",t.target.value)}}),(0,t.jsx)(h,{label:"RestService",options:f,value:P,onChange:t=>(t=>{var a,n;N(t);const l=C.find((e=>e.ID==t));l&&(e.callbacks.setProp("id",l.ID),null===(n=null===(a=e.callbacks.ui)||void 0===a?void 0:a.getModelBodyIO)||void 0===n||n.call(a,l.ID,s.serviceEditor.modelKeys.single).then((t=>{var a,n;if(t){const l=(null===(n=null===(a=t.otherProps)||void 0===a?void 0:a.httpMethods)||void 0===n?void 0:n.map((e=>({name:e,value:e}))))||[];R(l),S(l.length>0?l[0].name:"GET");const i=Object.values(t.inputs).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),s=Object.values(t.outputs).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"output",value:""}})));w(i),O(s),e.callbacks.setProp("mapping",{inParamMapping:i,outParamMapping:s,props:{httpMethod:j}})}})))})(t)}),(0,t.jsx)(h,{label:"Methods",options:I,value:j,onChange:t=>(t=>{S(t),e.callbacks.setProp("mapping",{inParamMapping:E,outParamMapping:k,props:{httpMethod:t}})})(t)})]}),(0,t.jsx)(y,{mapping:{inParamMapping:E,outParamMapping:k},mappingSchema:structuredClone(o()),onChangeInParamMapping:t=>{w(t),e.callbacks.setProp("mapping",{inParamMapping:t,outParamMapping:k,props:{httpMethod:j}})},onChangeOutParamMapping:t=>{O(t),e.callbacks.setProp("mapping",{inParamMapping:E,outParamMapping:t,props:{httpMethod:j}})}})]})}}})(),l})()));