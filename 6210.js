"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[6210],{51992:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(34663),i=t.n(a),l=t(7638),o=t.n(l)()(i());o.push([n.id,"\n.main-group[data-v-0585193a] {\n    display: flex;\n    padding: 32px 0;\n}\n.content[data-v-0585193a] {\n    background-color: white;\n    height: calc(100vh - 128px);\n    display: flex;\n    width: 100%;\n}\n.content div[data-v-0585193a] {\n    width: 100%;\n}\n.leftnavbuttontext.selected[data-v-0585193a] {\n    color: #151233;\n}\n.leftnavbuttontext[data-v-0585193a] {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 23px;\n    color: #A1A1A1;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.leftnavbuttonicon[data-v-0585193a] {\n    font-size: 24px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    gap: 10px;\n    width: 24px;\n    height: 24px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n.leftnav[data-v-0585193a] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 32px 0px;\n    height: 100%;\n    border-radius: 11px 0px 0px 11px;\n}\n.leftnavbutton.selected[data-v-0585193a] {\n    background: #FFFFFF;\n    /* Plateau Navy */\n    border-left: 5px solid #151233;\n}\n.leftnavbutton[data-v-0585193a] {\n    box-sizing: border-box;\n    width: -webkit-fill-available;\n    height: 56px;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 16px;\n    gap: 8px;\n    cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/organization/group.vue"],names:[],mappings:";AA2CA;IACI,aAAa;IACb,eAAe;AACnB;AAEA;IACI,uBAAuB;IACvB,2BAA2B;IAC3B,aAAa;IACb,WAAW;AACf;AAEA;IACI,WAAW;AACf;AAEA;IACI,cAAc;AAClB;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,QAAQ;IACR,YAAY;AAChB;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,YAAY;AAChB;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,gCAAgC;AACpC;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;AAClC;AAEA;IACI,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,QAAQ;IACR,eAAe;AACnB",sourcesContent:['<script setup lang="ts">\nimport { ref } from "vue";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IViewModel } from "../../../../domain/viewModel/IViewModel";\nimport Members from "./members.vue";\nimport Organizations from "./organizations.vue";\n\nconst viewModel = container.resolve<IViewModel>(IViewModel);\n\ntype TNavBar = "Members" | "Organizations";\nconst showingTab = ref(<TNavBar>("Members"));\nfunction selectTab(val: TNavBar) {\n    showingTab.value = val;\n}\n\n<\/script>\n<template>\n    <div class="main-group">\n        <div class="leftnav">\n            <div :class="\'leftnavbutton\' + (showingTab === \'Members\' ? \' selected\' : \'\')" @click="selectTab(\'Members\')">\n                <i class="mdi mdi-account-multiple-plus-outline leftnavbuttonicon"></i>\n                <span :class="\'leftnavbuttontext\' + (showingTab === \'Members\' ? \' selected\' : \'\')">Members</span>\n            </div>\n            <div :class="\'leftnavbutton\' + (showingTab === \'Organizations\' ? \' selected\' : \'\')"\n                @click="selectTab(\'Organizations\')">\n                <i class="mdi mdi-domain leftnavbuttonicon"></i>\n                <span\n                    :class="\'leftnavbuttontext\' + (showingTab === \'Organizations\' ? \' selected\' : \'\')">Organizations</span>\n            </div>\n        </div>\n\n        <div class="content">\n            <div v-if="showingTab === \'Members\'">\n                <Members></Members>\n            </div>\n            <div v-else-if="showingTab === \'Organizations\'">\n                <Organizations></Organizations>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n.main-group {\n    display: flex;\n    padding: 32px 0;\n}\n\n.content {\n    background-color: white;\n    height: calc(100vh - 128px);\n    display: flex;\n    width: 100%;\n}\n\n.content div {\n    width: 100%;\n}\n\n.leftnavbuttontext.selected {\n    color: #151233;\n}\n\n.leftnavbuttontext {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 23px;\n    color: #A1A1A1;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.leftnavbuttonicon {\n    font-size: 24px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    gap: 10px;\n    width: 24px;\n    height: 24px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n\n.leftnav {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 32px 0px;\n    height: 100%;\n    border-radius: 11px 0px 0px 11px;\n}\n\n.leftnavbutton.selected {\n    background: #FFFFFF;\n    /* Plateau Navy */\n    border-left: 5px solid #151233;\n}\n\n.leftnavbutton {\n    box-sizing: border-box;\n    width: -webkit-fill-available;\n    height: 56px;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 16px;\n    gap: 8px;\n    cursor: pointer;\n}\n</style>'],sourceRoot:""}]);const s=o},76210:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Y});var a=t(71093),i=t(66190),l=t(73843),o=t(5627),s=t(88613),A=t(75835),r=t(2759);const d=n=>((0,a.dD)("data-v-0585193a"),n=n(),(0,a.Cn)(),n),c={class:"main-group"},p={class:"leftnav"},v=d((()=>(0,a._)("i",{class:"mdi mdi-account-multiple-plus-outline leftnavbuttonicon"},null,-1))),u=d((()=>(0,a._)("i",{class:"mdi mdi-domain leftnavbuttonicon"},null,-1))),f={class:"content"},g={key:0},b={key:1},m=(0,a.aZ)({__name:"group",setup(n){o.nC.resolve(s.J);const e=(0,l.iH)("Members");function t(n){e.value=n}return(n,l)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",p,[(0,a._)("div",{class:(0,i.normalizeClass)("leftnavbutton"+("Members"===e.value?" selected":"")),onClick:l[0]||(l[0]=n=>t("Members"))},[v,(0,a._)("span",{class:(0,i.normalizeClass)("leftnavbuttontext"+("Members"===e.value?" selected":""))},"Members",2)],2),(0,a._)("div",{class:(0,i.normalizeClass)("leftnavbutton"+("Organizations"===e.value?" selected":"")),onClick:l[1]||(l[1]=n=>t("Organizations"))},[u,(0,a._)("span",{class:(0,i.normalizeClass)("leftnavbuttontext"+("Organizations"===e.value?" selected":""))},"Organizations",2)],2)]),(0,a._)("div",f,["Members"===e.value?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(A.default)])):"Organizations"===e.value?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(r.default)])):(0,a.kq)("v-if",!0)])]))}});var x=t(17450),C=t.n(x),B=t(29530),I=t.n(B),h=t(16199),w=t.n(h),z=t(40458),y=t.n(z),M=t(62916),k=t.n(M),T=t(92165),O=t.n(T),_=t(51992),F={};F.styleTagTransform=O(),F.setAttributes=y(),F.insert=w().bind(null,"head"),F.domAPI=I(),F.insertStyleElement=k(),C()(_.Z,F),_.Z&&_.Z.locals&&_.Z.locals;const Y=(0,t(32525).Z)(m,[["__scopeId","data-v-0585193a"]])}}]);
//# sourceMappingURL=6210.js.map?ver=0.0.298_1707821040076