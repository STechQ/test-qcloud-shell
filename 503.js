"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[503],{9019:(e,o,n)=>{n.d(o,{Z:()=>a});var t=n(1864),s=n.n(t),r=n(352),i=n.n(r)()(s());i.push([e.id,"\n.wizard-icon[data-v-90e67246] {\n    /* Layout Properties */\n    top: 32px;\n    left: 36px;\n    /* UI Properties */\n    position: relative;\n    text-align: left;\n    font: normal normal normal 30px/36px Material Design Icons Desktop;\n    color: #007c77;\n}\n.title[data-v-90e67246] {\n    /* Layout Properties */\n    top: 34px;\n    left: 72px;\n    /* UI Properties */\n    color: #007c77;\n    font-size: 20px;\n    font-family: \"Roboto\";\n    position: absolute;\n    font-weight: 500;\n}\n.step[data-v-90e67246] {\n    /* Layout Properties */\n    top: 35px;\n    right: 32px;\n    position: absolute;\n    font-family: 'Roboto';\n    font-size: 16px;\n    color: #757575;\n}\n.count[data-v-90e67246] {\n    text-align: right;\n    font: normal normal bold 18px/24px Roboto;\n    color: #007c77;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/editors/processEditor/ProcessEditorHeader.vue"],names:[],mappings:";AASA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,kEAAkE;IAClE,cAAc;AAClB;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,cAAc;AAClB;AAEA;IACI,iBAAiB;IACjB,yCAAyC;IACzC,cAAc;AAClB",sourcesContent:['<template>\n    <i class="mdi mdi-auto-fix wizard-icon" />\n    <div class="title">Process Wizard</div>\n    <div class="step">Step <span class="count">1</span></div>\n</template>\n\n<script setup lang="ts"><\/script>\n\n<style scoped>\n.wizard-icon {\n    /* Layout Properties */\n    top: 32px;\n    left: 36px;\n    /* UI Properties */\n    position: relative;\n    text-align: left;\n    font: normal normal normal 30px/36px Material Design Icons Desktop;\n    color: #007c77;\n}\n\n.title {\n    /* Layout Properties */\n    top: 34px;\n    left: 72px;\n    /* UI Properties */\n    color: #007c77;\n    font-size: 20px;\n    font-family: "Roboto";\n    position: absolute;\n    font-weight: 500;\n}\n\n.step {\n    /* Layout Properties */\n    top: 35px;\n    right: 32px;\n    position: absolute;\n    font-family: \'Roboto\';\n    font-size: 16px;\n    color: #757575;\n}\n\n.count {\n    text-align: right;\n    font: normal normal bold 18px/24px Roboto;\n    color: #007c77;\n}\n</style>\n'],sourceRoot:""}]);const a=i},4104:(e,o,n)=>{n.d(o,{Z:()=>a});var t=n(1864),s=n.n(t),r=n(352),i=n.n(r)()(s());i.push([e.id,"\n.process-editor[data-v-f175542c] {\n    width: 1000px;\n    height: 616px;\n    background: white;\n    position: absolute;\n    margin-left: calc((100% - 1000px)/2);\n    margin-top: 26px;\n    border: 1px solid #D5D5D5;\n    border-radius: 4px;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/editors/processEditor/processEditor.vue"],names:[],mappings:";AA4OA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB",sourcesContent:['<script setup lang="ts">\nimport { IProcessEditorProps } from "../../../../application/objects/editors/processEditorImpl";\nimport { ref } from "vue";\nimport {\n    SINGLE_APPROVAL,\n    DOUBLE_APPROVAL,\n    TRIPLE_APPROVAL,\n    QUADRUPLE_APPROVAL,\n    QUINTUPLE_APPROVAL,\n    extraProcessConfigVariables,\n} from "../../../../domain/objects/editors/processEditor/constants/processTemplates";\nimport ProcessDefinitionTab from "./approvalWizards/tabs/processDefinitionTab.vue";\nimport EditProcessVariablesTab from "./approvalWizards/tabs/editProcessVariablesTab.vue";\nimport SingleApprovalWizard from "./approvalWizards/singleApprovalWizard.vue";\nimport DoubleApprovalWizard from "./approvalWizards/doubleApprovalWizard.vue";\nimport TripleApprovalWizard from "./approvalWizards/tripleApprovalWizard.vue";\nimport QuadrupleApprovalWizard from "./approvalWizards/quadrupleApprovalWizard.vue";\nimport QuintupleApprovalWizard from "./approvalWizards/quintupleApprovalWizard.vue";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\nimport { ICreateModel } from "../../../../domain/useCase/ICreateModel";\nimport { IStudio } from "../../../../domain/useCase/IStudio";\n\nimport { IModule } from "../../../../domain/model/models";\nimport { CryptoHelper } from "@stechquick/algae/lib/helpers/cryptoHelper";\nimport { IProcessEditorUtil } from "../../../../domain/useCase/IProcessEditorUtil";\nimport { IModelsOfModule } from "../../../../domain/presentation/editors/IProcessEditorModel";\nimport { extractProcessVariables } from "@stechquick/plateau-process-designer";\nimport ProcessEditorHeader from "./ProcessEditorHeader.vue";\nimport ScreenSelectionTab from "./tabs/ScreenSelectionTab.vue";\n\ninterface IProps {\n    functions: IProcessEditorProps["functions"];\n    callbacks: IProcessEditorProps["callbacks"];\n}\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst studio = container.resolve<IStudio>(IStudio);\nconst processEditorUtil = container.resolve<IProcessEditorUtil>(IProcessEditorUtil);\nconst props = defineProps<IProps>();\nconst processDefinitionTabKey = ref("");\nconst disableFinishButton = ref(false);\nconst isNextActive = ref(true);\n\nconst processModel = ref(processEditorUtil.getEmptyProcessWizardModel("_"));\nconst processEditorState = ref(processEditorUtil.getEmptyProcessEditorState());\nconst currentModule = ref({} as IModule);\nconst modelsOfModule = ref({\n    screens: [],\n    bpmns: [],\n} as IModelsOfModule);\n\nprops.functions.getModel = async () => {\n    return { model: processModel.value, state: processEditorState.value };\n};\n\nprops.functions.setModel = async (model, module, state) => {\n    currentModule.value = module;\n    modelsOfModule.value = processEditorUtil.getModelsOfModule(module);\n    processDefinitionTabKey.value = CryptoHelper.CreateGuid();\n    processModel.value = model;\n    processEditorState.value = state;\n};\n\nasync function handleNext() {\n    const stepper = processEditorState.value.stepper;\n    const selectedExistingBpmnFile = processModel.value.selectedExistingBpmnFile;\n    if (stepper.isTabValid) {\n        if (!processModel.value.createNewBpmnFile) {\n            isNextActive.value = false;\n            const existingBpmnVariableCache = processEditorState.value.existingBpmnVariableCache;\n            const bpmnVariableFromCache = existingBpmnVariableCache[processModel.value.selectedExistingBpmnFile.ID];\n            if (bpmnVariableFromCache) {\n                processModel.value.selectedExistingBpmnFile.variables = bpmnVariableFromCache;\n            }\n            const bpmnModel = await props.callbacks.getBpmnModel(selectedExistingBpmnFile.ID);\n            const extractedProcessVariables = await extractProcessVariables(bpmnModel);\n            const editableVariables = processEditorUtil\n                .extractEditableProcessVariables(extractedProcessVariables, [\n                    "initiator",\n                    "formJson",\n                    "userId",\n                    "tenantId",\n                    "isChange",\n                    "refreshAfterSendToApproval",\n                ])\n                .concat(extraProcessConfigVariables);\n\n            editableVariables.forEach((editableVariable: any) => {\n                if (!processModel.value.selectedExistingBpmnFile.variables.some((variable) => variable.key === editableVariable.source)) {\n                    processModel.value.selectedExistingBpmnFile.variables.push({\n                        key: editableVariable.source,\n                        type: "STRING",\n                        value: processEditorUtil.handleProcessVariables(\n                            processModel.value,\n                            editableVariable.source,\n                            modelsOfModule.value,\n                            "process_name"\n                        ),\n                        isDeletable: false,\n                    });\n                }\n            });\n            processModel.value.selectedExistingBpmnFile.variables = processModel.value.selectedExistingBpmnFile.variables.filter((variable) =>\n                editableVariables.some((editableVariable) => editableVariable.source == variable.key)\n            );\n            isNextActive.value = true;\n        }\n        stepper.currentStep++;\n        stepper.isTabValid = false;\n        props.callbacks.modified({ state: true });\n    }\n}\n\nfunction handleBack() {\n    processEditorState.value.stepper!.currentStep--;\n    processEditorState.value.stepper!.isTabValid = false;\n    props.callbacks.modified({ state: true });\n}\n\nfunction handleFinish() {\n    const bpmnFile = processEditorUtil.generateBpmnFile(processModel.value, processEditorState.value.creatingProcessFileName);\n    executor.execute(\n        async () => {\n            const createdItem = await executor.executeUseCase<ICreateModel>(ICreateModel, {\n                name: processEditorState.value.creatingProcessFileName,\n                parentObjectId: currentModule.value.ID,\n                modelType: "bpmn",\n                modelBody: [{ key: "bpmn", model: bpmnFile }],\n                modelAdditionals: {},\n            });\n\n            if (processModel.value.createNewBpmnFile) {\n                processModel.value.selectedExistingBpmnFile.variables = [];\n            }\n            \n            processModel.value.createNewBpmnFile = false;\n\n            processModel.value.selectedExistingBpmnFile.ID = createdItem.ID;\n            modelsOfModule.value.bpmns.push(createdItem);\n            processEditorState.value.stepper.currentStep = 0;\n            disableFinishButton.value = true;\n            studio.openItem(createdItem, { fromHistory: false, noFocus: true });\n        },\n        { loading: true }\n    );\n    props.callbacks.modified({ state: true });\n}\n<\/script>\n<template>\n    <div class="process-editor">\n        <ProcessEditorHeader/>\n        <ScreenSelectionTab/>\n    </div>\n    <div class="process-editor" v-if="false">\n        <ProcessDefinitionTab\n            v-if="processEditorState.stepper.currentStep === 0"\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n            :enable-finish-button="() => (disableFinishButton = false)"\n            :is-next-active="isNextActive"\n            :key="processDefinitionTabKey"\n        />\n        <EditProcessVariablesTab\n            v-if="!processModel.createNewBpmnFile && processEditorState.stepper.currentStep === 1"\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <SingleApprovalWizard\n            v-if="\n                processModel.processType === SINGLE_APPROVAL.value && processEditorState.stepper.currentStep !== 0 && processModel.createNewBpmnFile\n            "\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <DoubleApprovalWizard\n            v-if="\n                processModel.processType === DOUBLE_APPROVAL.value && processEditorState.stepper.currentStep !== 0 && processModel.createNewBpmnFile\n            "\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <TripleApprovalWizard\n            v-if="\n                processModel.processType === TRIPLE_APPROVAL.value && processEditorState.stepper.currentStep !== 0 && processModel.createNewBpmnFile\n            "\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <QuadrupleApprovalWizard\n            v-if="\n                processModel.processType === QUADRUPLE_APPROVAL.value &&\n                processEditorState.stepper.currentStep !== 0 &&\n                processModel.createNewBpmnFile\n            "\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <QuintupleApprovalWizard\n            v-if="\n                processModel.processType === QUINTUPLE_APPROVAL.value &&\n                processEditorState.stepper.currentStep !== 0 &&\n                processModel.createNewBpmnFile\n            "\n            :model="processModel"\n            :models-of-module="modelsOfModule"\n            :state="processEditorState"\n            :modified="props.callbacks.modified"\n        />\n        <div>\n            <button style="margin-bottom: 5%" :disabled="!processEditorState.stepper.currentStep" @click="handleBack">Back</button>\n            <button\n                v-if="!processEditorState.stepper.isApproveTab && !(!processModel.createNewBpmnFile && processEditorState.stepper.currentStep === 1)"\n                @click="handleNext"\n                :disabled="!processEditorState.stepper.isTabValid || !isNextActive"\n            >\n                Next\n            </button>\n            <button v-if="processEditorState.stepper.isApproveTab" @click="handleFinish" :disabled="disableFinishButton">Finish</button>\n        </div>\n    </div>\n</template>\n<style scoped>\n\n.process-editor {\n    width: 1000px;\n    height: 616px;\n    background: white;\n    position: absolute;\n    margin-left: calc((100% - 1000px)/2);\n    margin-top: 26px;\n    border: 1px solid #D5D5D5;\n    border-radius: 4px;\n}\n</style>'],sourceRoot:""}]);const a=i},7293:(e,o,n)=>{function t(e,o){return e.length<o?`Input length must be bigger than ${o}.`:""}function s(e){return/^[a-zA-Z][a-zA-Z0-9_]*$/.test(e)?"":"Input must start with letter and following characters must be letter, number or _"}function r(e){return/(^X$)|(^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256})/.test(e)?"":"URL must be valid and start with https:// "}n.d(o,{Wc:()=>t,at:()=>s,fe:()=>r})},503:(e,o,n)=>{n.r(o),n.d(o,{default:()=>W});var t=n(2068),s=n(1407);n(8718),n(1705),n(9045),n(7293);Boolean;var r=n(3734),i=n(7409);Boolean;Boolean;var a=n(664),l=(n(9388),n(3900)),p=n(1461);n(7623);const d=e=>((0,t.dD)("data-v-90e67246"),e=e(),(0,t.Cn)(),e),c=d((()=>(0,t._)("i",{class:"mdi mdi-auto-fix wizard-icon"},null,-1))),u=d((()=>(0,t._)("div",{class:"title"},"Process Wizard",-1))),m=d((()=>(0,t._)("div",{class:"step"},[(0,t.Uk)("Step "),(0,t._)("span",{class:"count"},"1")],-1)));var A=n(5701),f=n.n(A),v=n(8236),b=n.n(v),I=n(6080),E=n.n(I),B=n(6850),x=n.n(B),C=n(7182),P=n.n(C),M=n(9213),g=n.n(M),S=n(9019),h={};h.styleTagTransform=g(),h.setAttributes=x(),h.insert=E().bind(null,"head"),h.domAPI=b(),h.insertStyleElement=P(),f()(S.Z,h),S.Z&&S.Z.locals&&S.Z.locals;var k=n(1419);const y={},V=(0,k.Z)(y,[["render",function(e,o){return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,u,m],64)}],["__scopeId","data-v-90e67246"]]),T={},z=(0,k.Z)(T,[["render",function(e,o){return null}]]),F={class:"process-editor"},U=(0,t.aZ)({__name:"processEditor",props:{functions:null,callbacks:null},setup(e){const o=e,n=(r.nC.resolve(a.y),r.nC.resolve(l.c),r.nC.resolve(i.s)),d=(0,s.iH)(""),c=((0,s.iH)(!1),(0,s.iH)(!0),(0,s.iH)(n.getEmptyProcessWizardModel("_"))),u=(0,s.iH)(n.getEmptyProcessEditorState()),m=(0,s.iH)({}),A=(0,s.iH)({screens:[],bpmns:[]});return o.functions.getModel=async()=>({model:c.value,state:u.value}),o.functions.setModel=async(e,o,t)=>{m.value=o,A.value=n.getModelsOfModule(o),d.value=p.j.CreateGuid(),c.value=e,u.value=t},(e,o)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",F,[(0,t.Wm)(V),(0,t.Wm)(z)]),(0,t.kq)("v-if",!0)],64))}});var w=n(4104),D={};D.styleTagTransform=g(),D.setAttributes=x(),D.insert=E().bind(null,"head"),D.domAPI=b(),D.insertStyleElement=P(),f()(w.Z,D),w.Z&&w.Z.locals&&w.Z.locals;const W=(0,k.Z)(U,[["__scopeId","data-v-f175542c"]])}}]);
//# sourceMappingURL=503.js.map