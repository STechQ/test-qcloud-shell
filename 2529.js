"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[2529],{19856:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(34663),o=t.n(i),A=t(7638),a=t.n(A)()(o());a.push([n.id,"\n*[data-v-adf945c2] {\n    font-family: 'Roboto';\n}\n.container[data-v-adf945c2] {\n    padding: 20px;\n}\n.cancel-button[data-v-adf945c2]{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px 16px;\n    gap: 4px;\n    width: 81px;\n    height: 40px;\n    border-radius: 4px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n.cancel-button-text[data-v-adf945c2]{\n    width: 49px;\n    height: 19px;\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: capitalize;\n    color: #757575;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.discard-button-text[data-v-adf945c2] {\n    width: 49px;\n    height: 19px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: capitalize;\n    text-decoration: underline;\n    color: #2C5A86;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.cancel-button-text[data-v-adf945c2]:hover{\n    color: #616161;\n}\n.check-in-button[data-v-adf945c2]{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px 16px;\n    gap: 4px;\n    width: 149px;\n    height: 40px;\n    background: #151233;\n    border-radius: 4px;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.check-in-button[data-v-adf945c2]:hover{\n    background-color: #2F3160;\n}\n.check-in-button[disabled][data-v-adf945c2]:hover{\n    background-color: #151233;\n}\n.check-in-button.disabled[data-v-adf945c2]{\n    pointer-events: none;\n}\n.check-in-button-text[data-v-adf945c2] {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.release-info:hover .release-info-tooltip[data-v-adf945c2] {\n    visibility: visible;\n    opacity: 1;\n}\n.release-info-tooltip[data-v-adf945c2] {\n    visibility: hidden;\n    background: #757575;\n    color: #FFFFFF;\n    font-size: 11px;\n    text-align: center;\n    border-radius: 4px;\n    letter-spacing: 0.2px;\n    padding: 6px 8px 6px 8px;\n    opacity: 0;\n    z-index: 1;\n    left: 150px;\n    width: 271px;\n    margin-top: 65px;\n}\n.check-in-definition-text[data-v-adf945c2]{\n    margin-left:8px;\n    font-size: 14px;\n    color: #757575;\n}\n.release-info[data-v-adf945c2]{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    isolation: isolate;\n    width: 20px;\n    height: 20px;\n    flex: none;\n    order: 2;\n    flex-grow: 0;\n    margin-right: 10px;\n}\n.release-info-icon[data-v-adf945c2] {\n    position: absolute;\n    font-family: 'Material Design Icons';\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    color: #757575;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n    z-index: 0;\n}\n.release-version-text[data-v-adf945c2]{\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 16px;\n    color: #212121;\n}\n.dialogContentDiv[data-v-adf945c2] {\n}\n.buttonGroup[data-v-adf945c2] {\n    display: flex;\n    flex-direction: row; \n    align-items: flex-start;\n    margin-top: 52px;\n}\n.buttonGroup .left[data-v-adf945c2] {\n    display: flex; \n    justify-content: flex-end;  \n    flex-direction: row; \n    align-items: flex-start;\n    gap: 4px;\n}\n.buttonGroup .right[data-v-adf945c2] {\n    display: flex; \n    justify-content: flex-end;  \n    flex-direction: row; \n    align-items: flex-start;\n    gap: 4px;\n\n    flex: none;\n    order: 2;\n    flex-grow: 1;\n}\n.switch[data-v-adf945c2] {\n    position: relative;\n    display: inline-block;\n    width: 36px;\n    height: 20px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n.switch input[data-v-adf945c2] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    display: inline-block;\n}\n.slider[data-v-adf945c2] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #BDBDBD;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n.slider[data-v-adf945c2]:before {\n    content: \"\";\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    left: 3px;\n    top: 3px;\n}\n.switch input:checked+.slider[data-v-adf945c2] {\n    background-color: #151233;\n}\n.switch input:focus+.slider[data-v-adf945c2] {\n    box-shadow: 0 0 1px #151233;\n}\n.switch input:checked+.slider[data-v-adf945c2]:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n}\n\n/* Rounded sliders */\n.slider.round[data-v-adf945c2] {\n    border-radius: 12px;\n}\n.slider.round[data-v-adf945c2]:before {\n    border-radius: 50%;\n}\n.checkbox[data-v-adf945c2]{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0px;\n    gap: 10px;\n    flex: none;\n    flex-grow: 0;\n}\n.margin[data-v-adf945c2] {\n    margin-left: 30px;\n}\n.select[data-v-adf945c2]:invalid {\n    color: gray;\n}\n.option[data-v-adf945c2] {\n    color: black;\n}\n.checkinInputs[data-v-adf945c2] {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n}\n.checkinTextarea[data-v-adf945c2] {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    height: 120px;\n    resize: none;\n}\n.checkinBtnText[data-v-adf945c2] {\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0.02px;\n    opacity: 1;\n}\n.checkinBtn[data-v-adf945c2] {\n    background-color: #151233;\n    width: 104px;\n    height: 32px;\n    color: white;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 22px;\n}\n.buttonGroupDiv[data-v-adf945c2] {\n    height: 264px;\n    top: 92px;\n    display: flex;\n    margin-top: 32px;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0px 20px;\n    gap: 20px;\n    width: 420px;\n    height: 264px;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n.dialogContentDivs[data-v-adf945c2] {\n    width: 100%;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 18px;\n    align-self: stretch;\n    margin-bottom: 20px;\n}\n.checkinLabels[data-v-adf945c2] {\n    color: #151233;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0;\n    opacity: 1;\n}\n.version-type[data-v-adf945c2] {\n    font-size: 14px;\n    line-height: 16px;\n    text-align: center;\n    color: #212121;\n    display: flex;\n    align-items: center;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/studio/savePlus.vue"],names:[],mappings:"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",sourcesContent:['<script setup lang="ts">\nimport { computed } from \'@vue/reactivity\';\nimport { ref } from \'vue\';\nimport { container } from \'../../../../../domain/core/diContainer\';\nimport { IConfig } from \'../../../../../domain/infrastructure/IConfig\';\nimport { IModel } from \'../../../../../domain/model/models\';\nimport { IIDEInputDefinitions } from \'../../../../../domain/presentation/IIDEInputDefinitions\';\nimport { IStudio } from \'../../../../../domain/useCase/IStudio\';\nimport { IUseCaseExecutor } from \'../../../../../domain/useCase/IUseCaseExecutor\';\nimport IDEInput from "../../../components/application/IDEInput.vue";\nimport StudioInfo from "../../ui/studioInfoComp.vue"\nimport RadioButtonComp from \'../../radioButtonComp.vue\';\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst studio = container.resolve<IStudio>(IStudio);\nconst config = container.resolve<IConfig>(IConfig);\n\ninterface ISavePlus {\n    item: IModel;\n}\n\nconst props = defineProps<ISavePlus>();\nconst releaseVersion = ref<boolean>(false);\nconst isNameValid = ref<boolean>(false);\nconst isDescriptionValid = ref<boolean>(true);\nconst validations = ref<Record<"name" | "description", IIDEInputDefinitions["validations"]>>({\n    name: { minAndMaxLength: { min: 2, max: 40 }},\n    description: { minAndMaxLength: { min: 2, max: 500 } },\n});\n\nconst checkin = ref(true);\nconst buttonName = computed(() => checkin.value ? "SAVE CHANGES" : "SAVE");\nconst version = ref<"major" | "minor" | "">("minor");\nconst comment = ref({ short: "", long: \'\', hasLong: false });\nconst emit = defineEmits(["close"]);\nconst buttonDisabled = computed(() => !isNameValid.value || !isDescriptionValid.value || version.value ==\'\');\n\nconst commentMaxLength = config.getValue("studio").commentMaxLength;\n\nfunction handleVersion(value: "major" | "minor") {\n    releaseVersion.value = value == \'major\'\n    version.value = value;\n}\n\nfunction save() {\n    executor.execute(async () => {\n        if (checkin.value) {\n            await studio.updateModel(props.item, { shortComment: comment.value.short, version: version.value, longComment: comment.value.long });\n        } else {\n            await studio.save(props.item);\n        }\n        emit("close");\n    }, { loading: true });\n}\n\nfunction discard(){\n    executor.execute(async () => {\n        await studio.undoCheckout(props.item);\n        emit("close");\n    }, { loading: true });\n}\n\nfunction cancel() {\n    emit("close");\n}\n\nfunction setNameValue(value: string) {\n    comment.value.short = value\n}\nfunction setNameValidationStatus(isValid: boolean) {\n    isNameValid.value = isValid\n}\n\nfunction setDescriptionValue(value: string) {\n\n    comment.value.long = value\n}\n\nfunction setDescriptionValidationStatus(isValid: boolean) {\n    isDescriptionValid.value = isValid\n}\n\n<\/script>\n<template>\n    <div class="container">\n        <template v-if="checkin">\n            <div class="dialogContentDiv">\n                <div class="dialogContentDivs">\n                    <IDEInput :isRequired="true" elementId="summaryInput" @getValue="setNameValue" @validateStatus="setNameValidationStatus"\n                        :placeholder="\'Summarise your new version.\'" :type="\'text\'" info-text="Summary" :disableRequiredIcon="false"\n                        :validations="validations.name" />\n                </div>\n\n                <div class="dialogContentDivs">\n                    <IDEInput :isRequired="false" elementId="descriptionInput" @getValue="setDescriptionValue" :disableRequiredIcon="true"\n                        @validateStatus="setDescriptionValidationStatus" :placeholder="\'Describe your new version.\'"\n                        :type="\'textarea\'" info-text="Description (Optional)" :validations="validations.description" />\n                </div>\n                <div class="checkbox">\n                    <RadioButtonComp :active="version == \'minor\'" :type="\'preview\'" @click="handleVersion(\'minor\')"></RadioButtonComp>\n                    <span class="version-type">Minor Version\n                        <span id="release-info" class="release-info">\n                            <i class="mdi mdi-information release-info-icon" /> \n                            <span class="release-info-tooltip">\n                                If you select this option, changes will be saved but\n                                will not be applied to publish of your application.\n                            </span>\n                        </span>\n                    </span>\n                    <RadioButtonComp :active="version == \'major\'" :type="\'preview\'" @click="handleVersion(\'major\')"></RadioButtonComp>\n                    <span class="version-type">Major Version</span>\n                </div>\n            </div>\n\n        </template>\n        <div class="buttonGroup">\n            <div type="button" style="align-self: center;" @click="discard()">\n                <span class="discard-button-text">Want To Discard Changes?</span>\n            </div>\n            <div class="right">\n                <div type="button" class="cancel-button" @click="cancel()">\n                    <span class="cancel-button-text">Cancel</span>\n                </div>\n                <div type="button" :class="!buttonDisabled? \'check-in-button\' : \'check-in-button disabled\'" @click="save()">\n                    <span class="check-in-button-text" :style="!isNameValid? \'color: #757575;\':\'\' ">{{ buttonName }}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n<style scoped>\n* {\n    font-family: \'Roboto\';\n}\n.container {\n    padding: 20px;\n}\n.cancel-button{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px 16px;\n    gap: 4px;\n    width: 81px;\n    height: 40px;\n    border-radius: 4px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n.cancel-button-text{\n    width: 49px;\n    height: 19px;\n    font-family: \'Roboto\';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: capitalize;\n    color: #757575;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.discard-button-text {\n    width: 49px;\n    height: 19px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: capitalize;\n    text-decoration: underline;\n    color: #2C5A86;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.cancel-button-text:hover{\n    color: #616161;\n}\n.check-in-button{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px 16px;\n    gap: 4px;\n    width: 149px;\n    height: 40px;\n    background: #151233;\n    border-radius: 4px;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.check-in-button:hover{\n    background-color: #2F3160;\n}\n.check-in-button[disabled]:hover{\n    background-color: #151233;\n}\n\n.check-in-button.disabled{\n    pointer-events: none;\n}\n\n.check-in-button-text {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.release-info:hover .release-info-tooltip {\n    visibility: visible;\n    opacity: 1;\n}\n\n.release-info-tooltip {\n    visibility: hidden;\n    background: #757575;\n    color: #FFFFFF;\n    font-size: 11px;\n    text-align: center;\n    border-radius: 4px;\n    letter-spacing: 0.2px;\n    padding: 6px 8px 6px 8px;\n    opacity: 0;\n    z-index: 1;\n    left: 150px;\n    width: 271px;\n    margin-top: 65px;\n}\n\n.check-in-definition-text{\n    margin-left:8px;\n    font-size: 14px;\n    color: #757575;\n}\n\n.release-info{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    isolation: isolate;\n    width: 20px;\n    height: 20px;\n    flex: none;\n    order: 2;\n    flex-grow: 0;\n    margin-right: 10px;\n}\n\n.release-info-icon {\n    position: absolute;\n    font-family: \'Material Design Icons\';\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    color: #757575;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n    z-index: 0;\n}\n\n.release-version-text{\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 16px;\n    color: #212121;\n}\n\n.dialogContentDiv {\n\n}\n\n.buttonGroup {\n    display: flex;\n    flex-direction: row; \n    align-items: flex-start;\n    margin-top: 52px;\n}\n\n.buttonGroup .left {\n    display: flex; \n    justify-content: flex-end;  \n    flex-direction: row; \n    align-items: flex-start;\n    gap: 4px;\n}\n\n.buttonGroup .right {\n    display: flex; \n    justify-content: flex-end;  \n    flex-direction: row; \n    align-items: flex-start;\n    gap: 4px;\n\n    flex: none;\n    order: 2;\n    flex-grow: 1;\n}\n\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 36px;\n    height: 20px;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    display: inline-block;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #BDBDBD;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    content: "";\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    left: 3px;\n    top: 3px;\n}\n\n.switch input:checked+.slider {\n    background-color: #151233;\n}\n\n.switch input:focus+.slider {\n    box-shadow: 0 0 1px #151233;\n}\n\n.switch input:checked+.slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 12px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.checkbox{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0px;\n    gap: 10px;\n    flex: none;\n    flex-grow: 0;\n}\n\n.margin {\n    margin-left: 30px;\n}\n\n.select:invalid {\n    color: gray;\n}\n\n.option {\n    color: black;\n}\n\n.checkinInputs {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n}\n\n.checkinTextarea {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    height: 120px;\n    resize: none;\n}\n\n.checkinBtnText {\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0.02px;\n    opacity: 1;\n}\n\n.checkinBtn {\n    background-color: #151233;\n    width: 104px;\n    height: 32px;\n    color: white;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 22px;\n\n}\n\n.buttonGroupDiv {\n    height: 264px;\n    top: 92px;\n    display: flex;\n    margin-top: 32px;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0px 20px;\n    gap: 20px;\n    width: 420px;\n    height: 264px;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n}\n\n.dialogContentDivs {\n    width: 100%;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 18px;\n    align-self: stretch;\n    margin-bottom: 20px;\n}\n\n.checkinLabels {\n    color: #151233;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0;\n    opacity: 1;\n}\n.version-type {\n    font-size: 14px;\n    line-height: 16px;\n    text-align: center;\n    color: #212121;\n    display: flex;\n    align-items: center;\n}\n</style>'],sourceRoot:""}]);const l=a},82529:(n,e,t)=>{t.r(e),t.d(e,{default:()=>W});var i=t(71093),o=t(66190),A=t(73843),a=t(5627),l=t(7952),r=t(6488),s=t(83487),c=t(38223),d=t(34521);const p=n=>((0,i.dD)("data-v-adf945c2"),n=n(),(0,i.Cn)(),n),x={class:"container"},u={key:0,class:"dialogContentDiv"},C={class:"dialogContentDivs"},f={class:"dialogContentDivs"},B={class:"checkbox"},I=p((()=>(0,i._)("span",{class:"version-type"},[(0,i.Uk)("Minor Version "),(0,i._)("span",{id:"release-info",class:"release-info"},[(0,i._)("i",{class:"mdi mdi-information release-info-icon"}),(0,i._)("span",{class:"release-info-tooltip"}," If you select this option, changes will be saved but will not be applied to publish of your application. ")])],-1))),g=p((()=>(0,i._)("span",{class:"version-type"},"Major Version",-1))),m={class:"buttonGroup"},h=[p((()=>(0,i._)("span",{class:"discard-button-text"},"Want To Discard Changes?",-1)))],v={class:"right"},b=[p((()=>(0,i._)("span",{class:"cancel-button-text"},"Cancel",-1)))],k=(0,i.aZ)({__name:"savePlus",props:{item:null},emits:["close"],setup(n,{emit:e}){const t=n,p=a.nC.resolve(s.y),k=a.nC.resolve(r.c),y=a.nC.resolve(l.E),w=(0,A.iH)(!1),E=(0,A.iH)(!1),V=(0,A.iH)(!0),Y=(0,A.iH)({name:{minAndMaxLength:{min:2,max:40}},description:{minAndMaxLength:{min:2,max:500}}}),F=(0,A.iH)(!0),D=(0,A.Fl)((()=>F.value?"SAVE CHANGES":"SAVE")),U=(0,A.iH)("minor"),z=(0,A.iH)({short:"",long:"",hasLong:!1}),S=(0,A.Fl)((()=>!E.value||!V.value||""==U.value));function R(n){w.value="major"==n,U.value=n}function Q(n){z.value.short=n}function Z(n){E.value=n}function j(n){z.value.long=n}function W(n){V.value=n}return y.getValue("studio").commentMaxLength,(n,a)=>((0,i.wg)(),(0,i.iD)("div",x,[F.value?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",C,[(0,i.Wm)(c.Z,{isRequired:!0,elementId:"summaryInput",onGetValue:Q,onValidateStatus:Z,placeholder:"Summarise your new version.",type:"text","info-text":"Summary",disableRequiredIcon:!1,validations:Y.value.name},null,8,["placeholder","validations"])]),(0,i._)("div",f,[(0,i.Wm)(c.Z,{isRequired:!1,elementId:"descriptionInput",onGetValue:j,disableRequiredIcon:!0,onValidateStatus:W,placeholder:"Describe your new version.",type:"textarea","info-text":"Description (Optional)",validations:Y.value.description},null,8,["placeholder","validations"])]),(0,i._)("div",B,[(0,i.Wm)(d.Z,{active:"minor"==U.value,type:"preview",onClick:a[0]||(a[0]=n=>R("minor"))},null,8,["active"]),I,(0,i.Wm)(d.Z,{active:"major"==U.value,type:"preview",onClick:a[1]||(a[1]=n=>R("major"))},null,8,["active"]),g])])):(0,i.kq)("v-if",!0),(0,i._)("div",m,[(0,i._)("div",{type:"button",style:{"align-self":"center"},onClick:a[2]||(a[2]=n=>{p.execute((async()=>{await k.undoCheckout(t.item),e("close")}),{loading:!0})})},h),(0,i._)("div",v,[(0,i._)("div",{type:"button",class:"cancel-button",onClick:a[3]||(a[3]=n=>{e("close")})},b),(0,i._)("div",{type:"button",class:(0,o.normalizeClass)((0,A.SU)(S)?"check-in-button disabled":"check-in-button"),onClick:a[4]||(a[4]=n=>{p.execute((async()=>{F.value?await k.updateModel(t.item,{shortComment:z.value.short,version:U.value,longComment:z.value.long}):await k.save(t.item),e("close")}),{loading:!0})})},[(0,i._)("span",{class:"check-in-button-text",style:(0,o.normalizeStyle)(E.value?"":"color: #757575;")},(0,o.toDisplayString)((0,A.SU)(D)),5)],2)])])]))}});var y=t(17450),w=t.n(y),E=t(29530),V=t.n(E),Y=t(16199),F=t.n(Y),D=t(40458),U=t.n(D),z=t(62916),S=t.n(z),R=t(92165),Q=t.n(R),Z=t(19856),j={};j.styleTagTransform=Q(),j.setAttributes=U(),j.insert=F().bind(null,"head"),j.domAPI=V(),j.insertStyleElement=S(),w()(Z.Z,j),Z.Z&&Z.Z.locals&&Z.Z.locals;const W=(0,t(32525).Z)(k,[["__scopeId","data-v-adf945c2"]])}}]);
//# sourceMappingURL=2529.js.map?ver=0.0.319_1717146860939