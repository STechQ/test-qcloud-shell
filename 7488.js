"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[7488],{63267:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(34663),a=t.n(o),i=t(7638),l=t.n(i)()(a());l.push([e.id,'\n.createButtonDiv[data-v-5378fa42] {\n    height: 72px;\n    top: calc(100% - 72px);\n    width: 100%;\n    position: absolute\n}\n.createButton[data-v-5378fa42] {\n    background-color: #151233;\n    color: white;\n    border-radius: 4px;\n    border: none;\n    width: 97px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 117px);\n    top: 16px;\n    position: absolute;\n}\n.cancelButton[data-v-5378fa42] {\n    background-color: transparent;\n    color: #757575;\n    border-radius: 4px;\n    border: none;\n    width: 90px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 211px);\n    top: 16px;\n    position: absolute;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/create/createDialogFooter.vue/createDialogFooter.vue"],names:[],mappings:";AAwBA;IACI,YAAY;IACZ,sBAAsB;IACtB,WAAW;IACX;AACJ;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,SAAS;IACT,kBAAkB;AACtB;AAEA;IACI,6BAA6B;IAC7B,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,SAAS;IACT,kBAAkB;AACtB",sourcesContent:['<template>\n    <div class="createButtonDiv">\n        <button class="cancelButton" @click="props.cancelButtonCb">{{ cancelButtonText || "Cancel" }}</button>\n        <button :style="{ opacity: props.createButtonEnabled ? \'\' : \'0.5\' }" class="createButton"\n            @click="props.createButtonCb" :disabled="!props.createButtonEnabled">\n            {{ createButtonText || "CREATE" }}\n        </button>\n    </div>\n</template>\n\n<script setup lang="ts">\n\ninterface ICreateDialogFooter {\n    createButtonText?: string;\n    cancelButtonText?: string;\n    createButtonEnabled?: boolean;\n    createButtonCb: () => void;\n    cancelButtonCb: () => void;\n}\nconst props = defineProps<ICreateDialogFooter>();\n\n<\/script>\n\n<style scoped>\n.createButtonDiv {\n    height: 72px;\n    top: calc(100% - 72px);\n    width: 100%;\n    position: absolute\n}\n\n.createButton {\n    background-color: #151233;\n    color: white;\n    border-radius: 4px;\n    border: none;\n    width: 97px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 117px);\n    top: 16px;\n    position: absolute;\n}\n\n.cancelButton {\n    background-color: transparent;\n    color: #757575;\n    border-radius: 4px;\n    border: none;\n    width: 90px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 211px);\n    top: 16px;\n    position: absolute;\n}\n</style>\n'],sourceRoot:""}]);const s=l},54395:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(34663),a=t.n(o),i=t(7638),l=t.n(i),s=t(79240),c=l()(a());c.i(s.Z),c.push([e.id,"\n.duplicate-note-div[data-v-37e28b39] {\n    margin-bottom: 10px;\n}\n.duplicate-text[data-v-37e28b39] {\n    font-weight: bold;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/create/duplicateScreen.vue"],names:[],mappings:";AAiFA;IACI,mBAAmB;AACvB;AAEA;IACI,iBAAiB;AACrB",sourcesContent:['<script setup lang="ts">\nimport { ref } from "vue";\nimport { container } from "../../../../../domain/core/diContainer";\nimport { ICreateModel, ICreateModelParam } from "../../../../../domain/useCase/ICreateModel";\nimport { IUseCaseExecutor } from "../../../../../domain/useCase/IUseCaseExecutor";\nimport { IStudio } from "../../../../../domain/useCase/IStudio";\nimport { IModel } from "../../../../../domain/model/models";\nimport IDEInput from "../../../components/application/IDEInput.vue";\nimport { IIDEInputDefinitions } from "../../../../../domain/presentation/IIDEInputDefinitions";\nimport CreateDialogFooter from "./createDialogFooter.vue/createDialogFooter.vue";\nimport { IDuplicateScreenInline } from "../../IComponentProps";\n\nconst param = defineProps<{ param: IDuplicateScreenInline }>();\nconst props = param.param;\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst studio = container.resolve<IStudio>(IStudio);\n\nconst emit = defineEmits(["close"]);\n\nconst name = ref("");\nconst isNameValid = ref<boolean>(false);\n\nconst validations = ref<Record<"name", IIDEInputDefinitions["validations"]>>({\n    name: { minAndMaxLength: { min: 2, max: 40 }, availableCharacters: true, nonSpaceCharacter: true }\n});\n\nfunction create() {\n    const finalPath = props.path.split(\'/\').slice(0, -1).join("/");\n    executor.execute(\n        async () => {\n            const createObject: ICreateModelParam = {\n                name: name.value,\n                ownerId: props.ownerId,\n                modelBody: [{ key: "qjson", model: "" }],\n                modelType: "qjson",\n                modelAdditionals: { qjsonType: "qjson" },\n                duplicateFrom: props.duplicateFrom,\n                path: finalPath.length > 0 ? finalPath : \'/\'\n            };\n            const createdModel = await executor.executeUseCase<ICreateModel>(ICreateModel, createObject);\n            await onAfterModelCreated(createdModel);\n            emit("close");\n        },\n        { loading: true }\n    );\n}\n\nasync function onAfterModelCreated(createdModel: IModel) {\n    await studio.checkout(createdModel);\n    studio.openItem(createdModel);\n}\n\nfunction setNameValue(value: string) {\n    name.value = value;\n}\n\nfunction setNameValidationStatus(isValid: boolean) {\n    isNameValid.value = isValid;\n}\n\n<\/script>\n\n<template>\n    <div class="name-input-div">\n        <div class="duplicate-note-div">\n            <span class="label-value">* This new Item will be duplicated from\n                <span class="duplicate-text">{{ props.duplicateFrom.name }}.qjson </span>\n            </span>\n        </div>\n        <div class="input-label">Name</div>\n        <IDEInput :isRequired="true" :disable-required-icon="true" @getValue="setNameValue"\n            @validateStatus="setNameValidationStatus" placeholder="" :type="\'text\'" info-text=""\n            :validations="validations.name" />\n    </div>\n    <CreateDialogFooter :cancel-button-cb="() => emit(\'close\')" :create-button-cb="create"\n        :create-button-enabled="isNameValid" />\n</template>\n\n<style scoped>\n@import url("../../../../../styles/IDE3.css");\n.duplicate-note-div {\n    margin-bottom: 10px;\n}\n\n.duplicate-text {\n    font-weight: bold;\n}\n</style>\n'],sourceRoot:""}]);const r=c},54439:(e,n,t)=>{t.d(n,{Z:()=>h});var o=t(71093),a=t(66190);const i={class:"createButtonDiv"},l=["disabled"],s=(0,o.aZ)({__name:"createDialogFooter",props:{createButtonText:null,cancelButtonText:null,createButtonEnabled:{type:Boolean},createButtonCb:{type:Function},cancelButtonCb:{type:Function}},setup(e){const n=e;return(t,s)=>((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("button",{class:"cancelButton",onClick:s[0]||(s[0]=(...e)=>n.cancelButtonCb&&n.cancelButtonCb(...e))},(0,a.toDisplayString)(e.cancelButtonText||"Cancel"),1),(0,o._)("button",{style:(0,a.normalizeStyle)({opacity:n.createButtonEnabled?"":"0.5"}),class:"createButton",onClick:s[1]||(s[1]=(...e)=>n.createButtonCb&&n.createButtonCb(...e)),disabled:!n.createButtonEnabled},(0,a.toDisplayString)(e.createButtonText||"CREATE"),13,l)]))}});var c=t(17450),r=t.n(c),d=t(29530),u=t.n(d),p=t(16199),m=t.n(p),A=t(40458),b=t.n(A),B=t(62916),I=t.n(B),C=t(92165),v=t.n(C),f=t(63267),x={};x.styleTagTransform=v(),x.setAttributes=b(),x.insert=m().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=I(),r()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;const h=(0,t(32525).Z)(s,[["__scopeId","data-v-5378fa42"]])},37488:(e,n,t)=>{t.r(n),t.d(n,{default:()=>q});var o=t(71093),a=t(66190),i=t(73843),l=t(5627),s=t(69292),c=t(83487),r=t(6488),d=t(99234),u=t(54439);const p={class:"name-input-div"},m={class:"duplicate-note-div"},A={class:"label-value"},b={class:"duplicate-text"},B=(e=>((0,o.dD)("data-v-37e28b39"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"input-label"},"Name",-1))),I=(0,o.aZ)({__name:"duplicateScreen",props:{param:null},emits:["close"],setup(e,{emit:n}){const t=e.param,I=l.nC.resolve(c.y),C=l.nC.resolve(r.c),v=(0,i.iH)(""),f=(0,i.iH)(!1),x=(0,i.iH)({name:{minAndMaxLength:{min:2,max:40},availableCharacters:!0,nonSpaceCharacter:!0}});function h(){const e=t.path.split("/").slice(0,-1).join("/");I.execute((async()=>{const o={name:v.value,ownerId:t.ownerId,modelBody:[{key:"qjson",model:""}],modelType:"qjson",modelAdditionals:{qjsonType:"qjson"},duplicateFrom:t.duplicateFrom,path:e.length>0?e:"/"},a=await I.executeUseCase(s.E,o);await async function(e){await C.checkout(e),C.openItem(e)}(a),n("close")}),{loading:!0})}function g(e){v.value=e}function y(e){f.value=e}return(e,l)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",p,[(0,o._)("div",m,[(0,o._)("span",A,[(0,o.Uk)("* This new Item will be duplicated from "),(0,o._)("span",b,(0,a.toDisplayString)((0,i.SU)(t).duplicateFrom.name)+".qjson ",1)])]),B,(0,o.Wm)(d.Z,{isRequired:!0,"disable-required-icon":!0,onGetValue:g,onValidateStatus:y,placeholder:"",type:"text","info-text":"",validations:x.value.name},null,8,["validations"])]),(0,o.Wm)(u.Z,{"cancel-button-cb":()=>n("close"),"create-button-cb":h,"create-button-enabled":f.value},null,8,["cancel-button-cb","create-button-enabled"])],64))}});var C=t(17450),v=t.n(C),f=t(29530),x=t.n(f),h=t(16199),g=t.n(h),y=t(40458),w=t.n(y),D=t(62916),E=t.n(D),k=t(92165),T=t.n(k),S=t(54395),Z={};Z.styleTagTransform=T(),Z.setAttributes=w(),Z.insert=g().bind(null,"head"),Z.domAPI=x(),Z.insertStyleElement=E(),v()(S.Z,Z),S.Z&&S.Z.locals&&S.Z.locals;const q=(0,t(32525).Z)(I,[["__scopeId","data-v-37e28b39"]])}}]);
//# sourceMappingURL=7488.js.map?ver=0.0.287_1702826346505