"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[9524,2525,1],{1492:(e,n,o)=>{o.d(n,{Z:()=>c});var t=o(34663),i=o.n(t),r=o(7638),s=o.n(r),a=o(79240),l=s()(i());l.i(a.Z),l.push([e.id,"\n.container[data-v-8264f5fa] {\n    padding: 32px 20px 20px;\n}\n.import-btn[data-v-8264f5fa] {\n    background: none;\n    border: none;\n    font-size: 14px;\n    font-weight: 500;\n    color: #2C5A86;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/module/versionSettings.vue"],names:[],mappings:";AAuFA;IACI,uBAAuB;AAC3B;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB",sourcesContent:['<script setup lang="ts">\nimport { onBeforeMount, ref } from "vue";\nimport { container } from "../../../../../domain/core/diContainer";\nimport { ILocalization } from "../../../../../domain/infrastructure/ILocalization";\nimport { IModule, IModuleVersion } from "../../../../../domain/model/models";\nimport { IModuleVersionUseCase } from "../../../../../domain/useCase/IModuleVersionUseCase";\nimport { IStudio } from "../../../../../domain/useCase/IStudio";\nimport { IUseCaseExecutor } from "../../../../../domain/useCase/IUseCaseExecutor";\nimport { IViewModel } from "../../../../../domain/viewModel/IViewModel";\n\ninterface IModuleItem {\n    module: IModule;\n    mainOrgId?: string\n}\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst moduleVersionUseCase = container.resolve<IModuleVersionUseCase>(IModuleVersionUseCase);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst studio = container.resolve<IStudio>(IStudio);\n\n\nconst props = defineProps<IModuleItem>();\nconst localization = container.resolve<ILocalization>(ILocalization);\nconst versions = ref<Array<IModuleVersion>>([]);\nconst tableColumns = ref(["version", "description", "createdBy", "createDate", "state"]);\nconst tableOptions = ref({\n    filterable: false,\n    perPage: 5,\n    perPageValues: [],\n    headings: {\n        version: localization.get("version"),\n        description: localization.get("description"),\n        createdBy: localization.get("createdBy"),\n        createDate: localization.get("createDate"),\n        state: "",\n    },\n    resizableColumns: false,\n    skin: \'module-versions\',\n    texts: {\n        count: "",\n        noResults: "No matching records",\n\n    },\n});\nconst dateOptions: any = { month: \'2-digit\', day: \'2-digit\', year: \'numeric\', hour: \'numeric\', minute: \'numeric\', second: \'numeric\' };\nonBeforeMount(() => {\n    getVersions();\n})\nfunction getVersions() {\n    executor.execute(async () => {\n        versions.value = await moduleVersionUseCase.listModuleVersions(props.module.ID, props.mainOrgId);\n    }, { loading: true })\n}\nfunction importModuleVersion(moduleVersion: IModuleVersion) {\n    executor.execute(async () => {\n        const applicationID = viewModel.studio.appId;\n        await studio.detachModuleFromApplication(props.module, applicationID, true, props.module.currentVersion, props.mainOrgId);\n        props.module.relatedApplications = props.module.relatedApplications.filter(i => i.applicationID != applicationID);\n\n        await studio.attachModuletoApplication(props.module, applicationID, true, moduleVersion.version, props.mainOrgId);\n        props.module.relatedApplications.push({ applicationID, importedVersion: moduleVersion.version });\n        moduleVersion.relatedApplications!.push({ applicationID, importedVersion: moduleVersion.version });\n        props.module.currentVersion = moduleVersion.version;\n    }, { loading: true })\n\n}\nfunction computeImportedVersion() {\n    return props.module.currentVersion;\n}\n<\/script>\n<template>\n    <div class="container vue-table">\n        <v-client-table ref="table" :data="versions" :columns="tableColumns" :options="tableOptions">\n            <template #createDate="props">\n                <span>{{ new Intl.DateTimeFormat("tr-TR", dateOptions).format(new Date(props.row.createDate)) }}</span>\n            </template>\n            <template #state="props">\n                <button v-if="props.row.version == computeImportedVersion()" class="import-btn"\n                    style="color: #D5D5D5; cursor: default;">Using</button>\n                <button v-else class="import-btn" @click="importModuleVersion(props.row)">Use This Version</button>\n            </template>\n        </v-client-table>\n    </div>\n\n</template>\n<style scoped>\n@import url("../../../../../../src/styles/IDE3.css");\n\n.container {\n    padding: 32px 20px 20px;\n}\n\n.import-btn {\n    background: none;\n    border: none;\n    font-size: 14px;\n    font-weight: 500;\n    color: #2C5A86;\n}\n</style>'],sourceRoot:""}]);const c=l},32525:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},99524:(e,n,o)=>{o.r(n),o.d(n,{default:()=>U});var t=o(71093),i=o(66190),r=o(73843),s=o(5627),a=o(70985),l=o(83240),c=o(6488),u=o(83487),p=o(88613);const d={class:"container vue-table"},m={key:0,class:"import-btn",style:{color:"#D5D5D5",cursor:"default"}},I=["onClick"],v=(0,t.aZ)({__name:"versionSettings",props:{module:null,mainOrgId:null},setup(e){const n=e,o=s.nC.resolve(u.y),v=s.nC.resolve(l.e),g=s.nC.resolve(p.J),f=s.nC.resolve(c.c),A=s.nC.resolve(a.w),V=(0,r.iH)([]),C=(0,r.iH)(["version","description","createdBy","createDate","state"]),D=(0,r.iH)({filterable:!1,perPage:5,perPageValues:[],headings:{version:A.get("version"),description:A.get("description"),createdBy:A.get("createdBy"),createDate:A.get("createDate"),state:""},resizableColumns:!1,skin:"module-versions",texts:{count:"",noResults:"No matching records"}}),b={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};function w(e){o.execute((async()=>{const o=g.studio.appId;await f.detachModuleFromApplication(n.module,o,!0,n.module.currentVersion,n.mainOrgId),n.module.relatedApplications=n.module.relatedApplications.filter((e=>e.applicationID!=o)),await f.attachModuletoApplication(n.module,o,!0,e.version,n.mainOrgId),n.module.relatedApplications.push({applicationID:o,importedVersion:e.version}),e.relatedApplications.push({applicationID:o,importedVersion:e.version}),n.module.currentVersion=e.version}),{loading:!0})}function h(){return n.module.currentVersion}return(0,t.wF)((()=>{o.execute((async()=>{V.value=await v.listModuleVersions(n.module.ID,n.mainOrgId)}),{loading:!0})})),(e,n)=>{const o=(0,t.up)("v-client-table");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(o,{ref:"table",data:V.value,columns:C.value,options:D.value},{createDate:(0,t.w5)((e=>[(0,t._)("span",null,(0,i.toDisplayString)(new Intl.DateTimeFormat("tr-TR",b).format(new Date(e.row.createDate))),1)])),state:(0,t.w5)((e=>[e.row.version==h()?((0,t.wg)(),(0,t.iD)("button",m,"Using")):((0,t.wg)(),(0,t.iD)("button",{key:1,class:"import-btn",onClick:n=>w(e.row)},"Use This Version",8,I))])),_:1},8,["data","columns","options"])])}}});var g=o(17450),f=o.n(g),A=o(29530),V=o.n(A),C=o(16199),D=o.n(C),b=o(40458),w=o.n(b),h=o(62916),M=o.n(h),y=o(92165),x=o.n(y),B=o(1492),k={};k.styleTagTransform=x(),k.setAttributes=w(),k.insert=D().bind(null,"head"),k.domAPI=V(),k.insertStyleElement=M(),f()(B.Z,k),B.Z&&B.Z.locals&&B.Z.locals;const U=(0,o(32525).Z)(v,[["__scopeId","data-v-8264f5fa"]])}}]);
//# sourceMappingURL=9524.js.map?ver=0.0.314_1714489212950