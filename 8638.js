"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[8638],{95987:(e,n,o)=>{o.d(n,{Z:()=>a});var t=o(34663),r=o.n(t),l=o(7638),i=o.n(l)()(r());i.push([e.id,"\n.explorerContainer[data-v-ca69c4f8] {\n    height: calc(100% - 50px) !important;\n    overflow: auto;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/sidebars/explorer.vue"],names:[],mappings:";AAyCA;IACI,oCAAoC;IACpC,cAAc;AAClB",sourcesContent:['<script setup lang="ts">\nimport { onMounted, ref, watch } from \'vue\';\nimport { container } from \'../../../../domain/core/diContainer\';\nimport { IFileExplorer } from \'../../../../domain/useCase/IFileExplorer\';\nimport { IUseCaseExecutor } from \'../../../../domain/useCase/IUseCaseExecutor\';\nimport { IViewModel } from \'../../../../domain/viewModel/IViewModel\';\n\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst rootDiv = ref<HTMLDivElement>();\n\nconst openApp = async () => {\n    executor.execute(async () => {\n        while (rootDiv.value!.firstElementChild) { rootDiv.value!.removeChild(rootDiv.value!.firstElementChild); }\n        const fileExplorer = await executor.resolveUseCase<IFileExplorer>(IFileExplorer);\n        await fileExplorer.loadFileExplorer(rootDiv.value!);\n    }, { loading: true, noContinueInBgBtn: true });\n};\n\nlet curAppId = viewModel.studio.appId!;\nwatch(viewModel, (val, oldVal) => {\n    if (!val.studio.appId) { return; }\n    if (val.studio.appId == curAppId) { return; }\n\n    curAppId = val.studio.appId;\n    openApp();\n});\n\n/* IMPORTANT: This "watch" code below will always run after "UI Settings" implementation,\n    because it always manipulates "viewmodel studio items" to set the initial(default) models(modelbody) to UI settings models. \n    Therefore, if we open this onMounted code, function "openApp" runs double.\n*/\n// onMounted(async () => {\n//     openApp();\n// });\n\n<\/script>\n<template>\n    <div class="explorerContainer" ref="rootDiv"></div>\n</template>\n<style scoped>\n.explorerContainer {\n    height: calc(100% - 50px) !important;\n    overflow: auto;\n}\n</style>'],sourceRoot:""}]);const a=i},38638:(e,n,o)=>{o.r(n),o.d(n,{default:()=>g});var t=o(71093),r=o(73843),l=o(5627),i=o(3329),a=o(83487),s=o(88613);const p=(0,t.aZ)({__name:"explorer",setup(e){const n=l.nC.resolve(s.J),o=l.nC.resolve(a.y),p=(0,r.iH)();let d=n.studio.appId;return(0,t.YP)(n,((e,n)=>{e.studio.appId&&e.studio.appId!=d&&(d=e.studio.appId,(async()=>{o.execute((async()=>{for(;p.value.firstElementChild;)p.value.removeChild(p.value.firstElementChild);const e=await o.resolveUseCase(i.g2);await e.loadFileExplorer(p.value)}),{loading:!0,noContinueInBgBtn:!0})})())})),(e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:"explorerContainer",ref_key:"rootDiv",ref:p},null,512))}});var d=o(17450),u=o.n(d),c=o(29530),v=o.n(c),m=o(16199),C=o.n(m),I=o(40458),f=o.n(I),w=o(62916),h=o.n(w),x=o(92165),A=o.n(x),E=o(95987),y={};y.styleTagTransform=A(),y.setAttributes=f(),y.insert=C().bind(null,"head"),y.domAPI=v(),y.insertStyleElement=h(),u()(E.Z,y),E.Z&&E.Z.locals&&E.Z.locals;const g=(0,o(32525).Z)(p,[["__scopeId","data-v-ca69c4f8"]])}}]);
//# sourceMappingURL=8638.js.map?ver=0.0.298_1707821040076