"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[68],{33295:(n,e,a)=>{a.d(e,{Z:()=>r});var t=a(51864),i=a.n(t),p=a(60352),o=a.n(p)()(i());o.push([n.id,'\n.updateOrCreateTextAreaDiv[data-v-8ebb8468] {\n    margin-left: 28px;\n    margin-right: 28px;\n    margin-top: 30px;\n    height: 77px;\n}\n.appInfo[data-v-8ebb8468] {\n    color: #151233;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.updateOrCreateTextarea[data-v-8ebb8468] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n}\n.updateOrCreateInputDiv[data-v-8ebb8468] {\n    margin-top: 22px;\n    margin-left: 28px;\n    margin-right: 28px;\n    height: 173px;\n}\n.updateOrCreateInput[data-v-8ebb8468] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n}\n.updateOrCreateRow[data-v-8ebb8468] {\n    display: flex;\n    text-align: end;\n    margin-left: 28px;\n    margin-right: 28px;\n    border-top: 1px solid #E0E0E0;\n    margin-top: 32px;\n}\n.updateOrCreateBtn[data-v-8ebb8468] {\n    background-color: #151233;\n    color: #fff;\n    border-radius: 4px;\n    width: 79px;\n    height: 32px;\n    margin-top: 13px;\n    margin-bottom: 7px;\n    margin-top: 21px;\n    opacity: 1;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0.2px;\n    opacity: 1;\n}\n[data-v-8ebb8468]::placeholder {\n    padding-left: 10px;\n    padding-top: 5px;\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/application/addOrUpdateApp.vue"],names:[],mappings:";AAsFA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;AAEd;AAIA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;AAEjB;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,eAAe;AACnB;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,6BAA6B;IAC7B,gBAAgB;AACpB;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,UAAU;AACd;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB",sourcesContent:['<script setup lang="ts">\nimport { computed } from \'@vue/reactivity\';\nimport { ref } from \'vue\'\nimport { container } from \'../../../../domain/core/diContainer\';\nimport { IApplication } from "../../../../domain/model/models"\nimport { IIDEInputDefinitions } from \'../../../../domain/presentation/IIDEInputDefinitions\';\nimport { IApplicationUseCase } from \'../../../../domain/useCase/IApplicationUseCase\';\nimport { IUseCaseExecutor } from \'../../../../domain/useCase/IUseCaseExecutor\';\nimport IDEInput from "../../components/application/IDEInput.vue";\ninterface IAddOrUpdateAppPropsInline {\n    app?: IApplication;\n    templateName?: string;\n}\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst applicationUseCase = container.resolve<IApplicationUseCase>(IApplicationUseCase);\n\nconst props = defineProps<IAddOrUpdateAppPropsInline>();\nconst name = ref(props.app?.name);\nconst isAppNameValid = ref<boolean>(false);\nconst isDescriptionValid = ref<boolean>(true);\nconst description = ref(props.app?.description);\nconst emit = defineEmits(["close"]);\n\nconst validations = ref<Record<"name" | "description", IIDEInputDefinitions["validations"]>>({\n    name: { minAndMaxLength: { min: 3, max: 25 }, availableCharacters: true, nonSpaceCharacter: true },\n    description: { minAndMaxLength: { min: 3, max: 100 }, availableCharacters: false, nonSpaceCharacter: false },\n});\n\nfunction addOrUpdateApplication() {\n    executor.execute(async () => {\n        emit("close");\n        if (props.app) {\n            await applicationUseCase.updateApplication({ ID: props.app.ID, name: name.value, description: description.value });\n        } else {\n            await applicationUseCase.createApplication({ name: name.value!, description: description.value, templateName: props.templateName });\n        }\n        name.value = description.value = "";\n    }, { loading: false });\n}\n\nfunction appNameValidationStatus(isValid: boolean) {\n    isAppNameValid.value = isValid\n\n}\n\nfunction descriptionValidationStatus(isValid: boolean) {\n    isDescriptionValid.value = isValid\n\n}\n\nfunction setNameValue(value: string) {\n    name.value = value\n}\n\nfunction setDescValue(desc: string) {\n    description.value = desc\n}\nconst addButtonDisabled = computed(() => !isAppNameValid.value || !isDescriptionValid.value);\n\n<\/script>\n\n<template>\n    <div class=\'updateOrCreateTextAreaDiv\'>\n        <IDEInput :isRequired="true" @getValue="setNameValue" @validateStatus="appNameValidationStatus" placeholder=""\n            :type="\'text\'" :value="props.app?.name"  info-text="Application Name" :validations="validations.name" />\n    </div>\n    <div class=\'updateOrCreateInputDiv\'>\n        <IDEInput :isRequired="false" @validateStatus="descriptionValidationStatus" placeholder="" \n            :type="\'textarea\'" :value="props.app?.description"   info-text="Description" :validations="validations.description" @getValue="setDescValue" />\n    </div>\n    <div class=\'updateOrCreateRow\'>\n        <div class="col">\n            <button :style="{ opacity: addButtonDisabled ? \'0.5\' : \'\' }" class=\'updateOrCreateBtn\'\n                @click="addOrUpdateApplication()" :disabled="addButtonDisabled">{{\n                        app ? "UPDATE" : "CREATE"\n                }}</button>\n        </div>\n    </div>\n\n\n\n\n</template>\n\n<style  scoped>\n.updateOrCreateTextAreaDiv {\n    margin-left: 28px;\n    margin-right: 28px;\n    margin-top: 30px;\n    height: 77px;\n}\n\n.appInfo {\n    color: #151233;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n\n}\n\n\n\n.updateOrCreateTextarea {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n}\n\n.updateOrCreateInputDiv {\n    margin-top: 22px;\n    margin-left: 28px;\n    margin-right: 28px;\n    height: 173px;\n\n}\n\n.updateOrCreateInput {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n}\n\n.updateOrCreateRow {\n    display: flex;\n    text-align: end;\n    margin-left: 28px;\n    margin-right: 28px;\n    border-top: 1px solid #E0E0E0;\n    margin-top: 32px;\n}\n\n.updateOrCreateBtn {\n    background-color: #151233;\n    color: #fff;\n    border-radius: 4px;\n    width: 79px;\n    height: 32px;\n    margin-top: 13px;\n    margin-bottom: 7px;\n    margin-top: 21px;\n    opacity: 1;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0.2px;\n    opacity: 1;\n}\n\n::placeholder {\n    padding-left: 10px;\n    padding-top: 5px;\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n</style>'],sourceRoot:""}]);const r=o},56068:(n,e,a)=>{a.r(e),a.d(e,{default:()=>V});var t=a(62068),i=a(49045),p=a(81407),o=a(3734),r=a(97936),A=a(80664),l=a(60163);const s={class:"updateOrCreateTextAreaDiv"},d={class:"updateOrCreateInputDiv"},c={class:"updateOrCreateRow"},u={class:"col"},m=["disabled"],C=(0,t.aZ)({__name:"addOrUpdateApp",props:{app:null,templateName:null},emits:["close"],setup(n,{emit:e}){var a,C;const B=n,I=o.nC.resolve(A.y),x=o.nC.resolve(r.h),v=(0,p.iH)(null===(a=B.app)||void 0===a?void 0:a.name),g=(0,p.iH)(!1),f=(0,p.iH)(!0),h=(0,p.iH)(null===(C=B.app)||void 0===C?void 0:C.description),b=(0,p.iH)({name:{minAndMaxLength:{min:3,max:25},availableCharacters:!0,nonSpaceCharacter:!0},description:{minAndMaxLength:{min:3,max:100},availableCharacters:!1,nonSpaceCharacter:!1}});function y(n){g.value=n}function O(n){f.value=n}function D(n){v.value=n}function E(n){h.value=n}const k=(0,p.Fl)((()=>!g.value||!f.value));return(a,o)=>{var r,A;return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",s,[(0,t.Wm)(l.Z,{isRequired:!0,onGetValue:D,onValidateStatus:y,placeholder:"",type:"text",value:null===(r=B.app)||void 0===r?void 0:r.name,"info-text":"Application Name",validations:b.value.name},null,8,["value","validations"])]),(0,t._)("div",d,[(0,t.Wm)(l.Z,{isRequired:!1,onValidateStatus:O,placeholder:"",type:"textarea",value:null===(A=B.app)||void 0===A?void 0:A.description,"info-text":"Description",validations:b.value.description,onGetValue:E},null,8,["value","validations"])]),(0,t._)("div",c,[(0,t._)("div",u,[(0,t._)("button",{style:(0,i.normalizeStyle)({opacity:(0,p.SU)(k)?"0.5":""}),class:"updateOrCreateBtn",onClick:o[0]||(o[0]=n=>{I.execute((async()=>{e("close"),B.app?await x.updateApplication({ID:B.app.ID,name:v.value,description:h.value}):await x.createApplication({name:v.value,description:h.value,templateName:B.templateName}),v.value=h.value=""}),{loading:!1})}),disabled:(0,p.SU)(k)},(0,i.toDisplayString)(n.app?"UPDATE":"CREATE"),13,m)])])],64)}}});var B=a(75701),I=a.n(B),x=a(8236),v=a.n(x),g=a(6080),f=a.n(g),h=a(56850),b=a.n(h),y=a(87182),O=a.n(y),D=a(39213),E=a.n(D),k=a(33295),U={};U.styleTagTransform=E(),U.setAttributes=b(),U.insert=f().bind(null,"head"),U.domAPI=v(),U.insertStyleElement=O(),I()(k.Z,U),k.Z&&k.Z.locals&&k.Z.locals;const V=(0,a(51419).Z)(C,[["__scopeId","data-v-8ebb8468"]])}}]);
//# sourceMappingURL=68.js.map