"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[9321],{36515:(n,o,t)=>{t.d(o,{Z:()=>s});var e=t(51864),i=t.n(e),a=t(60352),l=t.n(a)()(i());l.push([n.id,"\n.avatarLogo[data-v-096a0eb4] {\n    vertical-align: middle;\n    margin-top: 5px;\n    border-radius: 50%;\n}\n.dialogContainer[data-v-096a0eb4] {\n    position: absolute;\n    background-color: white;\n    width: 440px;\n    border-radius: 4px;\n}\n.content-container[data-v-096a0eb4] {\n    top: 0%;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    opacity: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.dialog-title[data-v-096a0eb4] {\n    background-color: white;\n    height: 60px;\n    padding-left: 20px;\n    display: flex;\n    border-radius: 4px 4px 0px 0px;\n    border-bottom: 1px solid #37373733;\n}\n.blockShadow[data-v-096a0eb4] {\n    background-color: black;\n    top: 0px;\n    left: 0px;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    opacity: 0.5;\n}\n.transparent[data-v-096a0eb4] {\n    background-color: transparent;\n}\n.shadow[data-v-096a0eb4] {\n    box-shadow: inset 0 -3px 5px rgb(0 0 0 / 41%), 0 0 0 2px rgb(0 0 0), 0.3em 0.3em 1em rgb(0 0 0 / 55%);\n}\n.disapear[data-v-096a0eb4] {\n    animation: 0.5s ease 0s 1 normal none running animateleft-096a0eb4;\n}\n.title[data-v-096a0eb4] {\n    flex: 1 1 0px;\n    color: #212121;\n    padding-top: 17px;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    letter-spacing: 0px;\n    opacity: 1;\n    font-family: 'Roboto';\n}\n.close[data-v-096a0eb4] {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) / 29px Material Design Icons Desktop;\n    color: var(--unnamed-color-a1a1a1);\n    text-align: left;\n    font: normal normal normal 24px/29px Material Design Icons Desktop;\n    letter-spacing: 0.43px;\n    color: #a1a1a1;\n    opacity: 1;\n    float: right;\n    margin-top: 18px;\n    margin-right: 12px;\n    margin-bottom: 18px;\n\n    cursor: pointer;\n}\n@keyframes animateright-096a0eb4 {\nfrom {\n        right: -300px;\n        opacity: 0;\n}\nto {\n        right: 0;\n        opacity: 1;\n}\n}\n@keyframes animateleft-096a0eb4 {\nfrom {\n        right: 0;\n        opacity: 1;\n}\nto {\n        right: -300px;\n        opacity: 0;\n}\n}\n.dialogScroll[data-v-096a0eb4]::-webkit-scrollbar {\n  width: 12px;\n}\n.dialogScroll[data-v-096a0eb4]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.dialogScroll[data-v-096a0eb4]::-webkit-scrollbar-thumb {\n  background-color: #D0D1E9;    \n  border-radius: 16px;\n}\n\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/ui/dialog.vue"],names:[],mappings:";AA8EA;IACI,sBAAsB;IACtB,eAAe;IACf,kBAAkB;AACtB;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;AACtC;AAEA;IACI,uBAAuB;IACvB,QAAQ;IACR,SAAS;IACT,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AAEA;IACI,6BAA6B;AACjC;AAEA;IACI,qGAAqG;AACzG;AAEA;IACI,kEAAyD;AAC7D;AAEA;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,UAAU;IACV,qBAAqB;AACzB;AAEA;IACI,gJAAgJ;IAChJ,kCAAkC;IAClC,gBAAgB;IAChB,kEAAkE;IAClE,sBAAsB;IACtB,cAAc;IACd,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;;IAEnB,eAAe;AACnB;AAEA;AACI;QACI,aAAa;QACb,UAAU;AACd;AAEA;QACI,QAAQ;QACR,UAAU;AACd;AACJ;AAEA;AACI;QACI,QAAQ;QACR,UAAU;AACd;AAEA;QACI,aAAa;QACb,UAAU;AACd;AACJ;AAEA;EACE,WAAW;AACb;AAEA;EACE,uBAAuB;AACzB;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB",sourcesContent:['<script setup lang="ts">\nimport { ref } from "vue";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IDialog, IDialogOptions } from "../../../../domain/presentation/IDialog";\nimport { IZindex } from "../../../../domain/presentation/IZindex";\ninterface IDialogProps {\n    options: IDialogOptions;\n    component: object;\n    id: string;\n    parameters: any;\n}\ninterface ITypeDetails {\n    class: string;\n    color: string;\n}\nconst typeDict: Record<NonNullable<IDialogOptions["type"]>, ITypeDetails> = {\n    warning: {\n        class: "mdi mdi-alert",\n        color: "#F3CA40",\n    },\n};\nconst zindex = container.resolve<IZindex>(IZindex);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst props = defineProps<IDialogProps>();\nconst containerDiv = ref<HTMLDivElement>();\nconst zindexValue = ref(zindex.getZIndex(IDialog));\nconst barVisible = !(!props.options.title && !props.options.closable);\nfunction close(reason: "close" | "outclick" | "component") {\n    if (reason == "outclick" && !props.options.closeOnOutClick) {\n        return;\n    }\n\n    props.options.closeCb?.(reason);\n    containerDiv.value?.classList.add("disapear");\n    zindex.removeZIndex(IDialog, zindexValue.value);\n    setTimeout(() => dialog.closeDialog(props.id), 500);\n}\nconst showBlockShadow = !props.options.noBlockShadow || props.options.closeOnOutClick;\nconst transparentClass = props.options.noBlockShadow && props.options.closeOnOutClick;\n<\/script>\n<template>\n    <template v-if="showBlockShadow">\n        <teleport to="body">\n            <div class="blockShadow" :class="{ transparent: transparentClass }" :style="{ zIndex: zindexValue }" @click="close(\'outclick\')"></div>\n            <div class="content-container">\n                <div class="dialogContainer shadow" ref="containerDiv" :style="{ zIndex: zindexValue, width: props.options.width }">\n                    <div v-if="barVisible">\n                        <div class="dialog-title">\n                            <div v-if="props.options.image" class="col-1" style="text-align: center">\n                                <img\n                                    class="avatarLogo"\n                                    src="../../../../images/is-bankasi-logo.jpg"\n                                    :style="{ width: props.options.image?.width, height: props.options.image?.height }"\n                                />\n                            </div>\n                            <div v-if="props.options.type" class="col-1" style="text-align: center; margin-right: 7px">\n                                <i\n                                    :class="typeDict[props.options.type].class"\n                                    :style="{ color: typeDict[props.options.type].color, \'font-size\': \'36px\' }"\n                                ></i>\n                            </div>\n                            <div class="col-9">\n                                <div class="title">{{ props.options.title }}</div>\n                            </div>\n                            <div :class="props.options.image ? \'col-2\' : \'col-3\'">\n                                <div class="close mdi mdi-close" v-if="props.options.closable" @click="close(\'close\')"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="content dialogScroll" :style="{ overflow: props.options.overflow, height: props.options.height, maxHeight:props.options.maxHeight }">\n                        <component :is="props.component" @close="close(\'component\')" v-bind="props.parameters"> </component>\n                    </div>\n                </div>\n            </div>\n        </teleport>\n    </template>\n</template>\n<style scoped>\n.avatarLogo {\n    vertical-align: middle;\n    margin-top: 5px;\n    border-radius: 50%;\n}\n\n.dialogContainer {\n    position: absolute;\n    background-color: white;\n    width: 440px;\n    border-radius: 4px;\n}\n\n.content-container {\n    top: 0%;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    opacity: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialog-title {\n    background-color: white;\n    height: 60px;\n    padding-left: 20px;\n    display: flex;\n    border-radius: 4px 4px 0px 0px;\n    border-bottom: 1px solid #37373733;\n}\n\n.blockShadow {\n    background-color: black;\n    top: 0px;\n    left: 0px;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    opacity: 0.5;\n}\n\n.transparent {\n    background-color: transparent;\n}\n\n.shadow {\n    box-shadow: inset 0 -3px 5px rgb(0 0 0 / 41%), 0 0 0 2px rgb(0 0 0), 0.3em 0.3em 1em rgb(0 0 0 / 55%);\n}\n\n.disapear {\n    animation: 0.5s ease 0s 1 normal none running animateleft;\n}\n\n.title {\n    flex: 1 1 0px;\n    color: #212121;\n    padding-top: 17px;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    letter-spacing: 0px;\n    opacity: 1;\n    font-family: \'Roboto\';\n}\n\n.close {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) / 29px Material Design Icons Desktop;\n    color: var(--unnamed-color-a1a1a1);\n    text-align: left;\n    font: normal normal normal 24px/29px Material Design Icons Desktop;\n    letter-spacing: 0.43px;\n    color: #a1a1a1;\n    opacity: 1;\n    float: right;\n    margin-top: 18px;\n    margin-right: 12px;\n    margin-bottom: 18px;\n\n    cursor: pointer;\n}\n\n@keyframes animateright {\n    from {\n        right: -300px;\n        opacity: 0;\n    }\n\n    to {\n        right: 0;\n        opacity: 1;\n    }\n}\n\n@keyframes animateleft {\n    from {\n        right: 0;\n        opacity: 1;\n    }\n\n    to {\n        right: -300px;\n        opacity: 0;\n    }\n}\n\n.dialogScroll::-webkit-scrollbar {\n  width: 12px;               \n}\n\n.dialogScroll::-webkit-scrollbar-track {\n  background: transparent;        \n}\n\n.dialogScroll::-webkit-scrollbar-thumb {\n  background-color: #D0D1E9;    \n  border-radius: 16px;   \n}\n\n</style>\n'],sourceRoot:""}]);const s=l},3676:(n,o,t)=>{t.d(o,{Z:()=>e});const e=t.p+"ba9dafacc5c3455703c53a8a9cfb0a0e.jpg"},49321:(n,o,t)=>{t.r(o),t.d(o,{default:()=>O});var e=t(62068),i=t(81407),a=t(49045),l=t(3676),s=t(3734),r=t(22455),A=t(22262);const p={class:"content-container"},c={key:0},d={class:"dialog-title"},g={key:0,class:"col-1",style:{"text-align":"center"}},m={key:1,class:"col-1",style:{"text-align":"center","margin-right":"7px"}},C={class:"col-9"},v={class:"title"},u=(0,e.aZ)({__name:"dialog",props:{options:null,component:null,id:null,parameters:null},setup(n){const o=n,t={warning:{class:"mdi mdi-alert",color:"#F3CA40"}},u=s.nC.resolve(A.O),b=s.nC.resolve(r.u),h=(0,i.iH)(),x=(0,i.iH)(u.getZIndex(r.u)),I=!(!o.options.title&&!o.options.closable);function k(n){var t,e,i;("outclick"!=n||o.options.closeOnOutClick)&&(null===(e=(t=o.options).closeCb)||void 0===e||e.call(t,n),null===(i=h.value)||void 0===i||i.classList.add("disapear"),u.removeZIndex(r.u,x.value),setTimeout((()=>b.closeDialog(o.id)),500))}const f=!o.options.noBlockShadow||o.options.closeOnOutClick,B=o.options.noBlockShadow&&o.options.closeOnOutClick;return(n,s)=>{var r,A;return(0,i.SU)(f)?((0,e.wg)(),(0,e.j4)(e.lR,{key:0,to:"body"},[(0,e._)("div",{class:(0,a.normalizeClass)(["blockShadow",{transparent:(0,i.SU)(B)}]),style:(0,a.normalizeStyle)({zIndex:x.value}),onClick:s[0]||(s[0]=n=>k("outclick"))},null,6),(0,e._)("div",p,[(0,e._)("div",{class:"dialogContainer shadow",ref_key:"containerDiv",ref:h,style:(0,a.normalizeStyle)({zIndex:x.value,width:o.options.width})},[I?((0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",d,[o.options.image?((0,e.wg)(),(0,e.iD)("div",g,[(0,e._)("img",{class:"avatarLogo",src:l.Z,style:(0,a.normalizeStyle)({width:null===(r=o.options.image)||void 0===r?void 0:r.width,height:null===(A=o.options.image)||void 0===A?void 0:A.height})},null,4)])):(0,e.kq)("v-if",!0),o.options.type?((0,e.wg)(),(0,e.iD)("div",m,[(0,e._)("i",{class:(0,a.normalizeClass)(t[o.options.type].class),style:(0,a.normalizeStyle)({color:t[o.options.type].color,"font-size":"36px"})},null,6)])):(0,e.kq)("v-if",!0),(0,e._)("div",C,[(0,e._)("div",v,(0,a.toDisplayString)(o.options.title),1)]),(0,e._)("div",{class:(0,a.normalizeClass)(o.options.image?"col-2":"col-3")},[o.options.closable?((0,e.wg)(),(0,e.iD)("div",{key:0,class:"close mdi mdi-close",onClick:s[1]||(s[1]=n=>k("close"))})):(0,e.kq)("v-if",!0)],2)])])):(0,e.kq)("v-if",!0),(0,e._)("div",{class:"content dialogScroll",style:(0,a.normalizeStyle)({overflow:o.options.overflow,height:o.options.height,maxHeight:o.options.maxHeight})},[((0,e.wg)(),(0,e.j4)((0,e.LL)(o.component),(0,e.dG)({onClose:s[2]||(s[2]=n=>k("component"))},o.parameters),null,16))],4)],4)])])):(0,e.kq)("v-if",!0)}}});var b=t(75701),h=t.n(b),x=t(8236),I=t.n(x),k=t(6080),f=t.n(k),B=t(56850),y=t.n(B),w=t(87182),D=t.n(w),E=t(39213),z=t.n(E),S=t(36515),Z={};Z.styleTagTransform=z(),Z.setAttributes=y(),Z.insert=f().bind(null,"head"),Z.domAPI=I(),Z.insertStyleElement=D(),h()(S.Z,Z),S.Z&&S.Z.locals&&S.Z.locals;const O=(0,t(51419).Z)(u,[["__scopeId","data-v-096a0eb4"]])}}]);
//# sourceMappingURL=9321.js.map