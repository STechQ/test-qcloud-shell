"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[581],{3747:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(1864),a=t.n(o),i=t(352),l=t.n(i)()(a());l.push([e.id,"\n.margin-left-10[data-v-d2bc9f68]{\n        margin-left: 10px;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/main/applicationExport.vue"],names:[],mappings:";AAqKI;QACI,iBAAiB;AACrB",sourcesContent:['<script setup lang="ts">\nimport { ExportType } from "@stechquick/algae/lib/qCloudTemp/exporter";\nimport { ref } from "vue";\nimport { useRoute } from "vue-router";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IExportViewItem } from "../../../../domain/model/models";\nimport { IRouter } from "../../../../domain/presentation/IRouter";\nimport { ICreateExportJob } from "../../../../domain/useCase/ICreateExportJob";\nimport { IGetExportSelectionData } from "../../../../domain/useCase/IGetExportSelectionData";\nimport { IGetExportTypes } from "../../../../domain/useCase/IGetExportTypes";\nimport { IListModelVersions } from "../../../../domain/useCase/IListModelVersions";\nimport { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\nimport { IViewModel } from "../../../../domain/viewModel/IViewModel";\nimport ExportTypeSelector from "../../components/export/exportTypeSelector.vue";\n\nconst router = container.resolve<IRouter>(IRouter);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\n\nconst routerParams = router.getRouteParams<{ appID: string }>();\n\nconst exportTypes = ref([] as unknown as Array<{ name: ExportType; text: string; }>);\nconst selectedTypeName = ref("" as unknown as ExportType);\nconst step = ref("" as unknown as "step1" | "step2");\nconst selectionData = ref([] as unknown as Array<IExportViewItem>);\nconst selectedModels = ref([] as unknown as Array<string>);\nstep.value = "step1"\n\nexecutor.execute(async () => {\n    exportTypes.value = await executor.executeUseCase<IGetExportTypes>(IGetExportTypes, { objectType: "application" });\n}, { loading: true });\n\nfunction onTypeSelect(name: ExportType) {\n    selectedTypeName.value = name;\n}\n\nasync function onModelChecked(model: IExportViewItem) {\n    executor.execute(async () => {\n        model.isSelected = selectedModels.value.indexOf(model.id) > -1;\n        const versions = [{text:\'1.0\', value:\'1.0\'},{text:\'2.0\', value:\'2.0\'},{text:\'3.0\', value:\'3.0\'}]\n        // const versions = await executor.executeUseCase<IListModelVersions>(IListModelVersions, { modelID: model.id, versionType: "major" });\n        model.versions = versions;\n    }, { loading: true });\n}\n\nfunction back() {\n    switch (step.value) {\n        case "step1": break; //TODO\n        case "step2": step.value = "step1"; break;\n    }\n}\n\nfunction next() {\n    step.value = "step2";\n    executor.execute(async () => {\n        const applicationID = routerParams.appID;\n        const exportType = selectedTypeName.value;\n        selectionData.value = await executor.executeUseCase<IGetExportSelectionData>(IGetExportSelectionData, { applicationID, exportType });\n    }, { loading: true });\n}\n\nfunction create() {\n    // executor.execute(async () => {\n    //     await executor.executeUseCase<ICreateExportJob>(ICreateExportJob, {\n    //         app: { ID: routerParams.appID, name: "aaa" },\n    //         exportType: selectedTypeName.value,\n    //         selectionData: selectionData.value\n    //     });\n    // }, { loading: true });\n}\n\n<\/script>\n\n<template>\n    <h2>Export Application</h2>\n\n    \x3c!-- BUTTONS (HEADER) --\x3e\n    \x3c!-- <div>\n        <button @click="back()">Back</button>\n        <button v-if="step == \'step1\'" :disabled="!selectedTypeName" @click="next()">Next</button>\n        <button\n            v-if="step == \'step2\'"\n            :disabled="selectedModels.length == 0"\n            @click="create()"\n        >Create</button>\n    </div> --\x3e\n\n    <div>\n        <p></p>\n    </div>\n\n    \x3c!-- STEP 1 --\x3e\n    <div v-show="step == \'step1\'">\n        <b>Please select an export type</b>\n        <div\n            v-for="exportType in exportTypes"\n            :key="exportType.name"\n            v-bind:value="exportType.name"\n        >\n            <label>\n                <input\n                    type="radio"\n                    name="radio"\n                    :value="exportType.name"\n                    :id="exportType.name"\n                    @change="onTypeSelect(exportType.name)"\n                />\n                {{ exportType.text }}\n            </label>\n        </div>\n    </div>\n\n    \x3c!-- STEP 2 --\x3e\n    <div v-if="step == \'step2\'">\n        <b>Please select the models in the modules which you need to export</b>\n        <div v-for="module in selectionData" :key="module.id" v-bind:value="module.id">\n            <div>\n                <p></p>\n            </div>\n            <b>{{ module.name }}</b>\n            <div v-for="model in module.children" :key="model.id" v-bind:value="model.id">\n                <div class="margin-left-10">\n                    <input\n                        type="checkbox"\n                        :id="model.id"\n                        :value="model.id"\n                        v-model="selectedModels"\n                        :key="model.id"\n                        @change="onModelChecked(model)"\n                    />\n                    {{ model.name }}\n                    <select\n                        :disabled="selectedModels.indexOf(model.id) <= -1"\n                        v-model="model.selectedVersion"\n                    >\n                        <option disabled value>Please select one</option>\n                        <option\n                            v-for="version in model.versions!"\n                            :key="version.value"\n                        >{{ version.text }}</option>\n                    </select>\n                </div>\n            </div>\n            <div class="margin-left-10" v-if="!module.children || module.children.length == 0">\n                There isn\'t any item in this module\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <p></p>\n    </div>\n\n    \x3c!-- BUTTONS (FOOTER) --\x3e\n    <div>\n        <button @click="back()">Back</button>\n        <button v-if="step == \'step1\'" :disabled="!selectedTypeName" @click="next()">Next</button>\n        <button\n            v-if="step == \'step2\'"\n            :disabled="selectedModels.length == 0"\n            @click="create()"\n        >Create</button>\n    </div>\n</template>\n\n<style scoped>\n    .margin-left-10{\n        margin-left: 10px;\n    }\n</style>'],sourceRoot:""}]);const s=l},581:(e,n,t)=>{t.r(n),t.d(n,{default:()=>L});var o=t(2068),a=t(9045),i=t(1705),l=t(1407),s=t(3734),d=t(5078),r=t(7260),p=t(7208),c=t(664);const u=e=>((0,o.dD)("data-v-d2bc9f68"),e=e(),(0,o.Cn)(),e),v=u((()=>(0,o._)("h2",null,"Export Application",-1))),m=u((()=>(0,o._)("div",null,[(0,o._)("p")],-1))),x=u((()=>(0,o._)("b",null,"Please select an export type",-1))),y=["value"],b=["value","id","onChange"],k={key:0},f=u((()=>(0,o._)("b",null,"Please select the models in the modules which you need to export",-1))),T=["value"],g=u((()=>(0,o._)("div",null,[(0,o._)("p")],-1))),h=["value"],I={class:"margin-left-10"},w=["id","value","onChange"],C=["disabled","onUpdate:modelValue"],D=u((()=>(0,o._)("option",{disabled:"",value:""},"Please select one",-1))),E={key:0,class:"margin-left-10"},S=u((()=>(0,o._)("div",null,[(0,o._)("p")],-1))),_=["disabled"],U=["disabled"],M=(0,o.aZ)({__name:"applicationExport",setup(e){const n=s.nC.resolve(d.v),t=s.nC.resolve(c.y),u=n.getRouteParams(),M=(0,l.iH)([]),P=(0,l.iH)(""),A=(0,l.iH)(""),N=(0,l.iH)([]),V=(0,l.iH)([]);return A.value="step1",t.execute((async()=>{M.value=await t.executeUseCase(p.W,{objectType:"application"})}),{loading:!0}),(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[v,(0,o.kq)(" BUTTONS (HEADER) "),(0,o.kq)(' <div>\n        <button @click="back()">Back</button>\n        <button v-if="step == \'step1\'" :disabled="!selectedTypeName" @click="next()">Next</button>\n        <button\n            v-if="step == \'step2\'"\n            :disabled="selectedModels.length == 0"\n            @click="create()"\n        >Create</button>\n    </div> '),m,(0,o.kq)(" STEP 1 "),(0,o.wy)((0,o._)("div",null,[x,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(M.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name,value:e.name},[(0,o._)("label",null,[(0,o._)("input",{type:"radio",name:"radio",value:e.name,id:e.name,onChange:n=>{return t=e.name,void(P.value=t);var t}},null,40,b),(0,o.Uk)(" "+(0,a.toDisplayString)(e.text),1)])],8,y)))),128))],512),[[i.vShow,"step1"==A.value]]),(0,o.kq)(" STEP 2 "),"step2"==A.value?((0,o.wg)(),(0,o.iD)("div",k,[f,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(N.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,value:e.id},[g,(0,o._)("b",null,(0,a.toDisplayString)(e.name),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,value:e.id},[(0,o._)("div",I,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{type:"checkbox",id:e.id,value:e.id,"onUpdate:modelValue":n[0]||(n[0]=e=>V.value=e),key:e.id,onChange:n=>async function(e){t.execute((async()=>{e.isSelected=V.value.indexOf(e.id)>-1,e.versions=[{text:"1.0",value:"1.0"},{text:"2.0",value:"2.0"},{text:"3.0",value:"3.0"}]}),{loading:!0})}(e)},null,40,w)),[[i.vModelCheckbox,V.value]]),(0,o.Uk)(" "+(0,a.toDisplayString)(e.name)+" ",1),(0,o.wy)((0,o._)("select",{disabled:V.value.indexOf(e.id)<=-1,"onUpdate:modelValue":n=>e.selectedVersion=n},[D,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.versions,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.value},(0,a.toDisplayString)(e.text),1)))),128))],8,C),[[i.vModelSelect,e.selectedVersion]])])],8,h)))),128)),e.children&&0!=e.children.length?(0,o.kq)("v-if",!0):((0,o.wg)(),(0,o.iD)("div",E," There isn't any item in this module "))],8,T)))),128))])):(0,o.kq)("v-if",!0),S,(0,o.kq)(" BUTTONS (FOOTER) "),(0,o._)("div",null,[(0,o._)("button",{onClick:n[1]||(n[1]=e=>function(){switch(A.value){case"step1":break;case"step2":A.value="step1"}}())},"Back"),"step1"==A.value?((0,o.wg)(),(0,o.iD)("button",{key:0,disabled:!P.value,onClick:n[2]||(n[2]=e=>(A.value="step2",void t.execute((async()=>{const e=u.appID,n=P.value;N.value=await t.executeUseCase(r.P,{applicationID:e,exportType:n})}),{loading:!0})))},"Next",8,_)):(0,o.kq)("v-if",!0),"step2"==A.value?((0,o.wg)(),(0,o.iD)("button",{key:1,disabled:0==V.value.length,onClick:n[3]||(n[3]=e=>{})},"Create",8,U)):(0,o.kq)("v-if",!0)])],64))}});var P=t(5701),A=t.n(P),N=t(8236),V=t.n(N),q=t(6080),O=t.n(q),H=t(6850),R=t.n(H),B=t(7182),G=t.n(B),Z=t(9213),K=t.n(Z),Y=t(3747),J={};J.styleTagTransform=K(),J.setAttributes=R(),J.insert=O().bind(null,"head"),J.domAPI=V(),J.insertStyleElement=G(),A()(Y.Z,J),Y.Z&&Y.Z.locals&&Y.Z.locals;const L=(0,t(1419).Z)(M,[["__scopeId","data-v-d2bc9f68"]])}}]);
//# sourceMappingURL=581.js.map