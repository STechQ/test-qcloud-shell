"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[2782],{73701:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(34663),s=t.n(o),c=t(7638),i=t.n(c)()(s());i.push([n.id,"\n.rootSection[data-v-93fe0e5a] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden auto;\n}\n.columnsSection[data-v-93fe0e5a] {\n  height: calc(100% - 18px);\n  display: flex;\n}\n.contentSection[data-v-93fe0e5a] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/standAlone.vue"],names:[],mappings:";AAmBA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;AACvB;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,OAAO;AACT",sourcesContent:['<script setup lang="ts">\nimport { computed } from "vue";\nimport Header from "../components/main/header.vue";\nimport Article from "../components/main/article.vue";\n\n\nconst contentWidth = computed(() => `calc(100% - 40px)`);\n<\/script>\n<template>\n  <section class="rootSection">\n    <section class="columnsSection">\n      <section class="contentSection" :style="{width: contentWidth}">\n        <Header />\n        <Article />\n      </section>\n    </section>\n  </section>\n</template>\n<style scoped>\n.rootSection {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden auto;\n}\n\n.columnsSection {\n  height: calc(100% - 18px);\n  display: flex;\n}\n.contentSection {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\n</style>'],sourceRoot:""}]);const a=i},38945:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"9a830afdb3af3bb0515b62ea00be093f.svg"},91743:(n,e,t)=>{t.d(e,{L:()=>c});let o=!1;new Promise((n=>n())).then((()=>o=!0)),"undefined"!=typeof doNothing&&doNothing();const s=!0===o;function c(n,e={}){let t,o,c;const i=n=>{c&&clearTimeout(c),c=setTimeout((()=>{o(new Error(`The operation has timed out. timeoutValue  : ${n}`))}),n)};return n&&i(n),{startTimer:i,promise:new Promise(((n,c)=>{var i;i=n,t=s&&e.fixSyncResolve?n=>setTimeout((()=>i(n))):i,o=c})),resolver:t,reject:o}}},5627:(n,e,t)=>{t.d(e,{OH:()=>a,b2:()=>o.b2,bh:()=>i,f3:()=>o.f3,nC:()=>o.nC});var o=t(53266),s=t(91743);function c(){const n=(0,s.L)();return setTimeout((()=>{n.resolver()}),100),n.promise}async function i(n,e){await a([n]);const t=o.nC.resolve(n);await e(t)}async function a(n,e){let t=!1;for(;!t;)try{n.forEach((n=>o.nC.resolve(n))),t=!0}catch(n){await c()}await(null==e?void 0:e())}},91056:(n,e,t)=>{t.d(e,{u:()=>o});const o=Symbol.for("IDialog")},1937:(n,e,t)=>{t.d(e,{Ax:()=>s,v5:()=>o});const o=Symbol.for("IRouter");function s(n){}},90585:(n,e,t)=>{t.d(e,{m:()=>o});const o=Symbol.for("IAuthenticationUseCase")},83487:(n,e,t)=>{t.d(e,{y:()=>o});const o=Symbol.for("IUseCaseExecutor")},88613:(n,e,t)=>{t.d(e,{J:()=>o});const o=Symbol.for("IViewModel")},34452:(n,e,t)=>{t.r(e),t.d(e,{default:()=>B});var o=t(71093),s=t(66190),c=t(73843),i=t(60318),a=t(24752);const l={class:"rootSection"},r={class:"columnsSection"},d=(0,o.aZ)({__name:"standAlone",setup(n){const e=(0,o.Fl)((()=>"calc(100% - 40px)"));return(n,t)=>((0,o.wg)(),(0,o.iD)("section",l,[(0,o._)("section",r,[(0,o._)("section",{class:"contentSection",style:(0,s.normalizeStyle)({width:(0,c.SU)(e)})},[(0,o.Wm)(i.Z),(0,o.Wm)(a.Z)],4)])]))}});var A=t(17450),u=t.n(A),m=t(29530),f=t.n(m),p=t(16199),h=t.n(p),v=t(40458),y=t.n(v),C=t(62916),S=t.n(C),b=t(92165),x=t.n(b),E=t(73701),w={};w.styleTagTransform=x(),w.setAttributes=y(),w.insert=h().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=S(),u()(E.Z,w),E.Z&&E.Z.locals&&E.Z.locals;const B=(0,t(32525).Z)(d,[["__scopeId","data-v-93fe0e5a"]])}}]);
//# sourceMappingURL=2782.js.map