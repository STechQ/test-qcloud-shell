"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[285],{4429:(n,t,o)=>{o.d(t,{Z:()=>l});var a=o(1864),e=o.n(a),r=o(352),i=o.n(r)()(e());i.push([n.id,"\n.confirmation-dialog-container[data-v-7a005bce] {\n    border-radius: 4px;\n    opacity: 1;\n    margin-left: 20px;\n    margin-top: 20px;\n    margin-right: 20px;\n    margin-bottom: 28px;\n}\n.dialog-text[data-v-7a005bce] {\n    width: 380px;\n    height: 120px;\n    color: #141414;\n\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / var(--unnamed-line-spacing-16)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    text-align: left;\n    font: normal normal normal 14px/16px Roboto;\n    letter-spacing: 0px;\n    color: #141414;\n    opacity: 1;\n}\n.button-container[data-v-7a005bce] {\n    width: 420px;\n    height: 72px;\n    text-align: end;\n    user-select: none;\n}\n.approve-button[data-v-7a005bce] {\n    height: 40px;\n    width: 97px;\n    border-radius: 4px;\n    opacity: 1;\n    margin-right: 20px;\n    margin-top: 16px;\n    background: #151233 0% 0% no-repeat padding-box;\n\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--white);\n    text-align: center;\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #ffffff;\n    float: right;\n    line-height: 40px;\n    cursor: pointer;\n}\n.cancel-button[data-v-7a005bce] {\n    height: 40px;\n    width: 90px;\n    float: right;\n    margin-right: 4px;\n    margin-top: 16px;\n    text-align: center;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--grey-darken-1);\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #757575;\n    opacity: 1;\n    line-height: 40px;\n    cursor: pointer;\n}\n.custom-button[data-v-7a005bce] {\n    height: 40px;\n    width: 90px;\n    float: right;\n    margin-right: 4px;\n    margin-top: 16px;\n    text-align: center;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--grey-darken-1);\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #757575;\n    opacity: 1;\n    line-height: 40px;\n    cursor: pointer;\n    border-radius: 4px;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/confirmationDialog.vue"],names:[],mappings:";AAsCA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;;IAEd;yCACqC;IACrC,kDAAkD;IAClD,gBAAgB;IAChB,2CAA2C;IAC3C,mBAAmB;IACnB,cAAc;IACd,UAAU;AACd;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,+CAA+C;;IAE/C,2HAA2H;IAC3H,qDAAqD;IACrD,mBAAmB;IACnB,kBAAkB;IAClB,2CAA2C;IAC3C,sBAAsB;IACtB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,2HAA2H;IAC3H,qDAAqD;IACrD,2BAA2B;IAC3B,2CAA2C;IAC3C,sBAAsB;IACtB,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,eAAe;AACnB;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,2HAA2H;IAC3H,qDAAqD;IACrD,2BAA2B;IAC3B,2CAA2C;IAC3C,sBAAsB;IACtB,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB",sourcesContent:['<script setup lang="ts">\nimport { container } from "../../../../domain/core/diContainer";\nimport { ILocalization } from "../../../../domain/infrastructure/ILocalization";\nimport { IConfirmationDialogProps, IConfirmationDialogReturnValue } from "../../../../domain/presentation/dialogs/IConfirmationDialogProps";\n\ninterface IConfirmationDialog extends IConfirmationDialogProps {\n    text: string;\n    approveText: string;\n    cancelText?: string;\n    rejectText?: string;\n    timeout?: number;\n    callback: (returnValue: IConfirmationDialogReturnValue) => void;\n}\n\nconst localization = container.resolve<ILocalization>(ILocalization);\nconst emit = defineEmits(["close"]);\nconst props = defineProps<IConfirmationDialog>();\nfunction returnAction(action: IConfirmationDialogReturnValue) {\n    props.callback(action);\n    emit("close");\n}\nif (props.timeout) {\n    const timer: NodeJS.Timeout = setTimeout(() => emit("close"), props.timeout);\n}\n<\/script>\n\n<template>\n    <div class="confirmation-dialog-container">\n        <p class="dialog-text">{{ props.text }}</p>\n    </div>\n    <div class="button-container">\n        <div class="approve-button" @click="returnAction(\'approve\')">{{ props.approveText }}</div>\n        <div v-if="props.cancelText" @click="returnAction(\'cancel\')" class="cancel-button">{{ props.cancelText }}</div>\n        <div v-if="props.rejectText" @click="returnAction(\'reject\')" class="cancel-button">{{ props.rejectText }}</div>\n    </div>\n</template>\n\n<style scoped>\n.confirmation-dialog-container {\n    border-radius: 4px;\n    opacity: 1;\n    margin-left: 20px;\n    margin-top: 20px;\n    margin-right: 20px;\n    margin-bottom: 28px;\n}\n\n.dialog-text {\n    width: 380px;\n    height: 120px;\n    color: #141414;\n\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / var(--unnamed-line-spacing-16)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    text-align: left;\n    font: normal normal normal 14px/16px Roboto;\n    letter-spacing: 0px;\n    color: #141414;\n    opacity: 1;\n}\n\n.button-container {\n    width: 420px;\n    height: 72px;\n    text-align: end;\n    user-select: none;\n}\n\n.approve-button {\n    height: 40px;\n    width: 97px;\n    border-radius: 4px;\n    opacity: 1;\n    margin-right: 20px;\n    margin-top: 16px;\n    background: #151233 0% 0% no-repeat padding-box;\n\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--white);\n    text-align: center;\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #ffffff;\n    float: right;\n    line-height: 40px;\n    cursor: pointer;\n}\n\n.cancel-button {\n    height: 40px;\n    width: 90px;\n    float: right;\n    margin-right: 4px;\n    margin-top: 16px;\n    text-align: center;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--grey-darken-1);\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #757575;\n    opacity: 1;\n    line-height: 40px;\n    cursor: pointer;\n}\n\n.custom-button {\n    height: 40px;\n    width: 90px;\n    float: right;\n    margin-right: 4px;\n    margin-top: 16px;\n    text-align: center;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/20px var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0-02);\n    color: var(--grey-darken-1);\n    font: normal normal normal 15px/20px Roboto;\n    letter-spacing: 0.02px;\n    color: #757575;\n    opacity: 1;\n    line-height: 40px;\n    cursor: pointer;\n    border-radius: 4px;\n}\n</style>\n'],sourceRoot:""}]);const l=i},5285:(n,t,o)=>{o.r(t),o.d(t,{default:()=>y});var a=o(2068),e=o(9045),r=o(3734),i=o(6595);const l={class:"confirmation-dialog-container"},A={class:"dialog-text"},c={class:"button-container"},p=(0,a.aZ)({__name:"confirmationDialog",props:{text:null,approveText:null,cancelText:null,rejectText:null,timeout:null,callback:null},emits:["close"],setup(n,{emit:t}){const o=n;function p(n){o.callback(n),t("close")}return r.nC.resolve(i.w),o.timeout&&setTimeout((()=>t("close")),o.timeout),(n,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("p",A,(0,e.toDisplayString)(o.text),1)]),(0,a._)("div",c,[(0,a._)("div",{class:"approve-button",onClick:t[0]||(t[0]=n=>p("approve"))},(0,e.toDisplayString)(o.approveText),1),o.cancelText?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[1]||(t[1]=n=>p("cancel")),class:"cancel-button"},(0,e.toDisplayString)(o.cancelText),1)):(0,a.kq)("v-if",!0),o.rejectText?((0,a.wg)(),(0,a.iD)("div",{key:1,onClick:t[2]||(t[2]=n=>p("reject")),class:"cancel-button"},(0,e.toDisplayString)(o.rejectText),1)):(0,a.kq)("v-if",!0)])],64))}});var m=o(5701),s=o.n(m),g=o(8236),d=o.n(g),x=o(6080),u=o.n(x),C=o(6850),f=o.n(C),v=o(7182),I=o.n(v),h=o(9213),B=o.n(h),b=o(4429),k={};k.styleTagTransform=B(),k.setAttributes=f(),k.insert=u().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=I(),s()(b.Z,k),b.Z&&b.Z.locals&&b.Z.locals;const y=(0,o(1419).Z)(p,[["__scopeId","data-v-7a005bce"]])}}]);
//# sourceMappingURL=285.js.map