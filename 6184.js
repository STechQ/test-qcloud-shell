"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[6184,9508,8804],{78265:(n,e,a)=>{a.d(e,{Z:()=>r});var t=a(34663),i=a.n(t),o=a(7638),p=a.n(o)()(i());p.push([n.id,'\n*[data-v-5f9818f3] {\n    font-family: "Roboto";\n}\n.container[data-v-5f9818f3] {\n    padding: 32px 20px 20px\n}\n.updateOrCreateTextAreaDiv[data-v-5f9818f3] {\n    height: 77px;\n}\n.appInfo[data-v-5f9818f3] {\n    color: #151233;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.updateOrCreateTextarea[data-v-5f9818f3] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n}\n.updateOrCreateInputDiv[data-v-5f9818f3] {\n    height: 173px;\n}\n.updateOrCreateInput[data-v-5f9818f3] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n}\n.updateOrCreateRow[data-v-5f9818f3] {\n    display: flex;\n    text-align: end;\n}\n.updateOrCreateBtn[data-v-5f9818f3] {\n    background-color: #151233;\n    color: #fff;\n    border-radius: 4px;\n    /* width: 72px; */\n    height: 40px;\n    font-weight: 500;\n    font-size: 16px;\n    padding: 8px 15px;\n}\n.cancel-button[data-v-5f9818f3] {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    color: #757575;\n    padding: 8px 16px;\n    border-radius: 4px;\n    margin-right: 4px;\n    border: none;\n    background: transparent;\n}\n[data-v-5f9818f3]::placeholder {\n    padding-left: 10px;\n    padding-top: 5px;\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/application/addOrUpdateApp.vue"],names:[],mappings:";AAmGA;IACI,qBAAqB;AACzB;AACA;IACI;AACJ;AACA;IACI,YAAY;AAChB;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;AAEd;AAIA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AAEA;IACI,aAAa;AAEjB;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,eAAe;AACnB;AAEA;IACI,aAAa;IACb,eAAe;AACnB;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB",sourcesContent:['<script setup lang="ts">\nimport { computed } from \'@vue/reactivity\';\nimport { ref, watch } from \'vue\'\nimport { container } from \'../../../../domain/core/diContainer\';\nimport { IApplication } from "../../../../domain/model/models"\nimport { IIDEInputDefinitions } from \'../../../../domain/presentation/IIDEInputDefinitions\';\nimport { IApplicationUseCase } from \'../../../../domain/useCase/IApplicationUseCase\';\nimport { IUseCaseExecutor } from \'../../../../domain/useCase/IUseCaseExecutor\';\nimport IDEInput from "../../components/application/IDEInput.vue";\ninterface IAddOrUpdateAppPropsInline {\n    app?: IApplication;\n    templateName?: string;\n}\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst applicationUseCase = container.resolve<IApplicationUseCase>(IApplicationUseCase);\n\nconst props = defineProps<IAddOrUpdateAppPropsInline>();\nconst name = ref(props.app?.name);\nconst isAppNameValid = ref<boolean>(false);\nconst isDescriptionValid = ref<boolean>(true);\nconst description = ref(props.app?.description);\nconst emit = defineEmits(["close"]);\n\nconst validations = ref<Record<"name" | "description", IIDEInputDefinitions["validations"]>>({\n    name: { minAndMaxLength: { min: 3, max: 25 }, availableCharacters: true, nonSpaceCharacter: true },\n    description: { minAndMaxLength: { min: 3, max: 100 }, availableCharacters: false, nonSpaceCharacter: false },\n});\n\nfunction addOrUpdateApplication() {\n    executor.execute(async () => {\n        emit("close");\n        if (props.app) {\n            await applicationUseCase.updateApplication({ ID: props.app.ID, name: name.value, description: description.value, updateReason: "userUpdate" });\n        } else {\n            await applicationUseCase.createApplication({ name: name.value!, description: description.value, templateName: props.templateName });\n        }\n        name.value = description.value = "";\n    }, { loading: false });\n}\n\nfunction appNameValidationStatus(isValid: boolean) {\n    isAppNameValid.value = isValid\n\n}\nconst isThereUpdate = () => {\n    if(props.app) {\n        return !(props.app!.name == name.value && props.app!.description == description.value)\n    }\n    else {\n        return true;\n    }\n}\nfunction descriptionValidationStatus(isValid: boolean) {\n    isDescriptionValid.value = isValid\n\n}\n\nfunction setNameValue(value: string) {\n    name.value = value\n}\n\nfunction setDescValue(desc: string) {\n    description.value = desc\n}\nfunction close() {\n    emit("close");\n}\n\nconst addButtonDisabled = computed(() => !isAppNameValid.value || !isDescriptionValid.value || !isThereUpdate());\n\n<\/script>\n\n<template>\n    <div class="container">\n        <div class=\'updateOrCreateTextAreaDiv\'>\n            <IDEInput :isRequired="true" elementId="nameInput" @getValue="setNameValue" @validateStatus="appNameValidationStatus" placeholder=""\n                :type="\'text\'" :value="props.app?.name"  info-text="Application Name" :validations="validations.name" />\n        </div>\n        <div class=\'updateOrCreateInputDiv\'>\n            <IDEInput :isRequired="false" elementId="descriptionInput" @validateStatus="descriptionValidationStatus" placeholder="" \n                :type="\'textarea\'" :value="props.app?.description"   info-text="Description" :validations="validations.description" @getValue="setDescValue" />\n        </div>\n        <div class=\'updateOrCreateRow\'>\n            <div class="col">\n                <button class="cancel-button" @click="close()">Cancel</button>\n                <button :style="{ color: addButtonDisabled ? \'#757575\' : \'#FFFFFF\' }" class=\'updateOrCreateBtn\'\n                    @click="addOrUpdateApplication()" :disabled="addButtonDisabled">{{\n                            app ? "SAVE" : "CREATE"\n                    }}</button>\n            </div>\n        </div>\n    </div>\n\n\n\n</template>\n\n<style  scoped>\n* {\n    font-family: "Roboto";\n}\n.container {\n    padding: 32px 20px 20px\n}\n.updateOrCreateTextAreaDiv {\n    height: 77px;\n}\n\n.appInfo {\n    color: #151233;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n\n}\n\n\n\n.updateOrCreateTextarea {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n}\n\n.updateOrCreateInputDiv {\n    height: 173px;\n\n}\n\n.updateOrCreateInput {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n}\n\n.updateOrCreateRow {\n    display: flex;\n    text-align: end;\n}\n\n.updateOrCreateBtn {\n    background-color: #151233;\n    color: #fff;\n    border-radius: 4px;\n    /* width: 72px; */\n    height: 40px;\n    font-weight: 500;\n    font-size: 16px;\n    padding: 8px 15px;\n}\n.cancel-button {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    color: #757575;\n    padding: 8px 16px;\n    border-radius: 4px;\n    margin-right: 4px;\n    border: none;\n    background: transparent;\n}\n::placeholder {\n    padding-left: 10px;\n    padding-top: 5px;\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n</style>'],sourceRoot:""}]);const r=p},38695:(n,e,a)=>{a.d(e,{T:()=>t});const t=Symbol.for("IFormValidator")},19508:(n,e,a)=>{a.d(e,{h:()=>t});const t=Symbol.for("IApplicationUseCase")},38804:(n,e,a)=>{a.r(e),a.d(e,{default:()=>w});var t=a(71093),i=a(66190),o=a(73843),p=a(5627),r=a(19508),l=a(83487),s=a(45332);const A={class:"container"},d={class:"updateOrCreateTextAreaDiv"},c={class:"updateOrCreateInputDiv"},u={class:"updateOrCreateRow"},m={class:"col"},C=["disabled"],I=(0,t.aZ)({__name:"addOrUpdateApp",props:{app:null,templateName:null},emits:["close"],setup(n,{emit:e}){var a,I;const f=n,v=p.nC.resolve(l.y),x=p.nC.resolve(r.h),B=(0,o.iH)(null===(a=f.app)||void 0===a?void 0:a.name),h=(0,o.iH)(!1),g=(0,o.iH)(!0),b=(0,o.iH)(null===(I=f.app)||void 0===I?void 0:I.description),y=(0,o.iH)({name:{minAndMaxLength:{min:3,max:25},availableCharacters:!0,nonSpaceCharacter:!0},description:{minAndMaxLength:{min:3,max:100},availableCharacters:!1,nonSpaceCharacter:!1}});function O(n){h.value=n}function D(n){g.value=n}function U(n){B.value=n}function k(n){b.value=n}const V=(0,o.Fl)((()=>!h.value||!g.value||!(!f.app||f.app.name!=B.value||f.app.description!=b.value)));return(a,p)=>{var r,l;return(0,t.wg)(),(0,t.iD)("div",A,[(0,t._)("div",d,[(0,t.Wm)(s.Z,{isRequired:!0,elementId:"nameInput",onGetValue:U,onValidateStatus:O,placeholder:"",type:"text",value:null===(r=f.app)||void 0===r?void 0:r.name,"info-text":"Application Name",validations:y.value.name},null,8,["value","validations"])]),(0,t._)("div",c,[(0,t.Wm)(s.Z,{isRequired:!1,elementId:"descriptionInput",onValidateStatus:D,placeholder:"",type:"textarea",value:null===(l=f.app)||void 0===l?void 0:l.description,"info-text":"Description",validations:y.value.description,onGetValue:k},null,8,["value","validations"])]),(0,t._)("div",u,[(0,t._)("div",m,[(0,t._)("button",{class:"cancel-button",onClick:p[0]||(p[0]=n=>{e("close")})},"Cancel"),(0,t._)("button",{style:(0,i.normalizeStyle)({color:(0,o.SU)(V)?"#757575":"#FFFFFF"}),class:"updateOrCreateBtn",onClick:p[1]||(p[1]=n=>{v.execute((async()=>{e("close"),f.app?await x.updateApplication({ID:f.app.ID,name:B.value,description:b.value,updateReason:"userUpdate"}):await x.createApplication({name:B.value,description:b.value,templateName:f.templateName}),B.value=b.value=""}),{loading:!1})}),disabled:(0,o.SU)(V)},(0,i.toDisplayString)(n.app?"SAVE":"CREATE"),13,C)])])])}}});var f=a(17450),v=a.n(f),x=a(29530),B=a.n(x),h=a(16199),g=a.n(h),b=a(40458),y=a.n(b),O=a(62916),D=a.n(O),U=a(92165),k=a.n(U),V=a(78265),E={};E.styleTagTransform=k(),E.setAttributes=y(),E.insert=g().bind(null,"head"),E.domAPI=B(),E.insertStyleElement=D(),v()(V.Z,E),V.Z&&V.Z.locals&&V.Z.locals;const w=(0,a(32525).Z)(I,[["__scopeId","data-v-5f9818f3"]])}}]);
//# sourceMappingURL=6184.js.map?ver=0.0.298_1707821040076