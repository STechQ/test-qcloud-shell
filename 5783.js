"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[5783],{63490:(n,a,t)=>{t.d(a,{Z:()=>d});var e=t(34663),i=t.n(e),o=t(7638),s=t.n(o)()(i());s.push([n.id,"\n.manage-tag-div[data-v-ce563e10] {\n        width: 85%; \n        display: flex; \n        justify-content: end;\n        position: absolute;\n        top: 80px;\n        right: 36px;\n}\n.manage-btn[data-v-ce563e10] {\n        border: 1px solid #151233;\n        border-radius: 4px;\n        padding: 1.5px 16px;\n        font-size: 15px;\n        color: #151233;\n        display: flex;\n        align-items: center;\n        font-weight: 500;\n}\n.tag-info-type[data-v-ce563e10] {\n        border: 1px solid #E3E3E3;\n        box-shadow: 1px 1px 2px rgba(33, 33, 33, 0.16);\n        border-radius: 10px;\n        background: #FFFFFF;\n        margin-right: 37px;\n        padding: 24px 24px 18px;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n}\n.tag-info-type[data-v-ce563e10]:last-child {\n        margin-right: 0;\n}\n.tag-info-type-name[data-v-ce563e10] {\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 23px;\n        color: #757575;\n        margin-bottom: 20px;\n        min-width: 100px;\n        flex: 1;\n}\n.tag-info[data-v-ce563e10] {\n        font-weight: 500;\n        font-size: 28px;\n        line-height: 33px;\n        color: #151233;\n}\n    /* @media (min-width: 2400px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 7);\n        }\n    }\n\n    @media (max-width: 2400px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 6);\n        }\n    }\n\n    @media (max-width: 2150px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 5);\n        }\n    }\n\n    @media (max-width: 1820px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 4);\n        }\n    }\n\n    @media (max-width: 1470px) {\n        .tag-info-type {\n            flex: 1 0 auto;\n            width: calc(100% / 3);\n        }\n    }\n\n    @media (max-width: 1250px) {\n        .tag-info-type {\n            flex: 1 0 auto;\n            width: calc(100% / 2);\n        }\n    }\n\n    @media (max-width: 950px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: 100%;\n        }\n    } */\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/backoffice/tag.vue"],names:[],mappings:";AAmGI;QACI,UAAU;QACV,aAAa;QACb,oBAAoB;QACpB,kBAAkB;QAClB,SAAS;QACT,WAAW;AACf;AACA;QACI,yBAAyB;QACzB,kBAAkB;QAClB,mBAAmB;QACnB,eAAe;QACf,cAAc;QACd,aAAa;QACb,mBAAmB;QACnB,gBAAgB;AACpB;AACA;QACI,yBAAyB;QACzB,8CAA8C;QAC9C,mBAAmB;QACnB,mBAAmB;QACnB,kBAAkB;QAClB,uBAAuB;QACvB,aAAa;QACb,sBAAsB;QACtB,OAAO;AACX;AACA;QACI,eAAe;AACnB;AACA;QACI,gBAAgB;QAChB,eAAe;QACf,iBAAiB;QACjB,cAAc;QACd,mBAAmB;QACnB,gBAAgB;QAChB,OAAO;AACX;AACA;QACI,gBAAgB;QAChB,eAAe;QACf,iBAAiB;QACjB,cAAc;AAClB;IACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OA+CG",sourcesContent:['<script setup lang="ts">\n    import { ref, onBeforeMount, defineAsyncComponent } from "vue";\n    import { IOrganization } from "../../../../../../common/qCloudTemp/membership";\n    import { ITags } from "../../../../../../common/qCloudTemp/quickCloud";\n    import { container } from "../../../../domain/core/diContainer";\n    import { IDialog } from "../../../../domain/presentation/IDialog";\n    import { IRouter } from "../../../../domain/presentation/IRouter";\n    import { IBackofficeUseCase } from "../../../../domain/useCase/IBackofficeUseCase";\n    import { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\n    import OrganizationList from "../../components/backoffice/organization/organizationList.vue";\n\n\n    const router = container.resolve<IRouter>(IRouter);\n    const executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\n    const backofficeUseCase = container.resolve<IBackofficeUseCase>(IBackofficeUseCase);\n        \n    const routerParams = router.getRouteParams<{ tagId: string }>();\n    backofficeUseCase.setBreadcrumb(["Tags", "Tag Detail"]);\n    const tag = ref<ITags>();\n    const orgInfo = ref<Array<IOrganization>>([]);\n    const dialog = container.resolve<IDialog>(IDialog);\n    const organizationsDataIsReady = ref(false);\n\n    onBeforeMount(() => {\n        getOrganizations();\n    })\n    function formatDate(date?: Date) {\n        if(date) {\n            const formatter = new Intl.DateTimeFormat(\'en-GB\', { year: \'numeric\', month: \'long\', day: \'numeric\', hour: \'numeric\', minute: \'numeric\' });\n            const formattedDate = formatter.format(new Date(date));\n            return formattedDate;\n        }\n    }\n    function getOrganizations() {\n        executor.execute(async () => {\n            tag.value = await backofficeUseCase.getTag(routerParams.tagId);\n            orgInfo.value = await backofficeUseCase.getOrganizationsByTagId(routerParams.tagId);\n            organizationsDataIsReady.value = true;\n        }, { loading: true });\n    }\n\n    function openAddOrUpdateTagDialog() {\n        const closeCb = (reason: "close" | "outclick" | "component") => {\n            if(reason == "component") {\n                getOrganizations();\n            }\n        }\n        dialog.showDialog(\n            defineAsyncComponent(() => import(`../../components/dialogs/backoffice/addOrUpdateTag.vue`)),\n            { closable: true, title: "Update Tag", width: "542px", maxHeight: "379px", closeCb }, {tag: tag.value}\n        );\n    }\n<\/script>\n\n<template>\n    <div class="manage-tag-div">\n        <button class="manage-btn" @click="openAddOrUpdateTagDialog()"><i class="mdi mdi-cog" style="font-size: 20px; margin-right: 4px"></i><span>UPDATE TAG</span></button>\n    </div>  \n    <div  style="display: flex; margin-bottom: 32px;">\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Name</div>\n            <div class="tag-info">{{ tag?.name }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Organization Count</div>\n            <div class="tag-info">{{ orgInfo.length }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Description</div>\n            <div class="tag-info">{{ tag?.description }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">ID</div>\n            <div class="tag-info" style="font-size: 20px;">{{ tag?.ID }}</div>\n        </div>\n    </div>\n    <div  style="display: flex; margin-bottom: 32px;">\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Date Created</div>\n            <div class="tag-info">{{ formatDate(tag?.createDate) }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Creted By</div>\n            <div class="tag-info" style="font-size: 20px;">{{ tag?.createdBy }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Date Updated</div>\n            <div class="tag-info">{{ formatDate(tag?.updateDate) }}</div>\n        </div>\n        <div class="tag-info-type">\n            <div class="tag-info-type-name">Updated By</div>\n            <div class="tag-info" style="font-size: 20px;">{{ tag?.updatedBy }}</div>\n        </div>\n    </div>\n    <div v-if="organizationsDataIsReady" style="margin-bottom: 32px;">\n        <OrganizationList :organizations="orgInfo" :tagID = "tag?.ID" @refreshTable="getOrganizations"></OrganizationList>\n    </div>\n</template>\n<style scoped>\n    .manage-tag-div {\n        width: 85%; \n        display: flex; \n        justify-content: end;\n        position: absolute;\n        top: 80px;\n        right: 36px;\n    }\n    .manage-btn {\n        border: 1px solid #151233;\n        border-radius: 4px;\n        padding: 1.5px 16px;\n        font-size: 15px;\n        color: #151233;\n        display: flex;\n        align-items: center;\n        font-weight: 500;\n    }\n    .tag-info-type {\n        border: 1px solid #E3E3E3;\n        box-shadow: 1px 1px 2px rgba(33, 33, 33, 0.16);\n        border-radius: 10px;\n        background: #FFFFFF;\n        margin-right: 37px;\n        padding: 24px 24px 18px;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n    }\n    .tag-info-type:last-child {\n        margin-right: 0;\n    }\n    .tag-info-type-name {\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 23px;\n        color: #757575;\n        margin-bottom: 20px;\n        min-width: 100px;\n        flex: 1;\n    }\n    .tag-info {\n        font-weight: 500;\n        font-size: 28px;\n        line-height: 33px;\n        color: #151233; \n    }\n    /* @media (min-width: 2400px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 7);\n        }\n    }\n\n    @media (max-width: 2400px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 6);\n        }\n    }\n\n    @media (max-width: 2150px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 5);\n        }\n    }\n\n    @media (max-width: 1820px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: calc(100% / 4);\n        }\n    }\n\n    @media (max-width: 1470px) {\n        .tag-info-type {\n            flex: 1 0 auto;\n            width: calc(100% / 3);\n        }\n    }\n\n    @media (max-width: 1250px) {\n        .tag-info-type {\n            flex: 1 0 auto;\n            width: calc(100% / 2);\n        }\n    }\n\n    @media (max-width: 950px) {\n        .tag-info-type {\n            flex: 0 0 auto;\n            width: 100%;\n        }\n    } */\n</style>'],sourceRoot:""}]);const d=s},91056:(n,a,t)=>{t.d(a,{u:()=>e});const e=Symbol.for("IDialog")},75783:(n,a,t)=>{t.r(a),t.d(a,{default:()=>en});var e=t(71093),i=t(66190),o=t(73843),s=t(5627),d=t(91056),l=t(1937),g=t(20559),r=t(83487),c=t(7222);const p=n=>((0,e.dD)("data-v-ce563e10"),n=n(),(0,e.Cn)(),n),f={class:"manage-tag-div"},m=[p((()=>(0,e._)("i",{class:"mdi mdi-cog",style:{"font-size":"20px","margin-right":"4px"}},null,-1))),p((()=>(0,e._)("span",null,"UPDATE TAG",-1)))],v={style:{display:"flex","margin-bottom":"32px"}},A={class:"tag-info-type"},u=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Name",-1))),x={class:"tag-info"},y={class:"tag-info-type"},C=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Organization Count",-1))),h={class:"tag-info"},B={class:"tag-info-type"},b=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Description",-1))),w={class:"tag-info"},D={class:"tag-info-type"},I=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"ID",-1))),z={class:"tag-info",style:{"font-size":"20px"}},_={style:{display:"flex","margin-bottom":"32px"}},Q={class:"tag-info-type"},k=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Date Created",-1))),T={class:"tag-info"},U={class:"tag-info-type"},O=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Creted By",-1))),F={class:"tag-info",style:{"font-size":"20px"}},E={class:"tag-info-type"},R=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Date Updated",-1))),S={class:"tag-info"},P={class:"tag-info-type"},Z=p((()=>(0,e._)("div",{class:"tag-info-type-name"},"Updated By",-1))),q={class:"tag-info",style:{"font-size":"20px"}},G={key:0,style:{"margin-bottom":"32px"}},H=(0,e.aZ)({__name:"tag",setup(n){const a=s.nC.resolve(l.v5),p=s.nC.resolve(r.y),H=s.nC.resolve(g.X),j=a.getRouteParams();H.setBreadcrumb(["Tags","Tag Detail"]);const L=(0,o.iH)(),W=(0,o.iH)([]),X=s.nC.resolve(d.u),M=(0,o.iH)(!1);function N(n){if(n)return new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(n))}function V(){p.execute((async()=>{L.value=await H.getTag(j.tagId),W.value=await H.getOrganizationsByTagId(j.tagId),M.value=!0}),{loading:!0})}return(0,e.wF)((()=>{V()})),(n,a)=>{var o,s,d,l,g,r,p,H;return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",f,[(0,e._)("button",{class:"manage-btn",onClick:a[0]||(a[0]=n=>{X.showDialog((0,e.RC)((()=>Promise.all([t.e(9607),t.e(4324)]).then(t.bind(t,10756)))),{closable:!0,title:"Update Tag",width:"542px",maxHeight:"379px",closeCb:n=>{"component"==n&&V()}},{tag:L.value})})},m)]),(0,e._)("div",v,[(0,e._)("div",A,[u,(0,e._)("div",x,(0,i.toDisplayString)(null===(o=L.value)||void 0===o?void 0:o.name),1)]),(0,e._)("div",y,[C,(0,e._)("div",h,(0,i.toDisplayString)(W.value.length),1)]),(0,e._)("div",B,[b,(0,e._)("div",w,(0,i.toDisplayString)(null===(s=L.value)||void 0===s?void 0:s.description),1)]),(0,e._)("div",D,[I,(0,e._)("div",z,(0,i.toDisplayString)(null===(d=L.value)||void 0===d?void 0:d.ID),1)])]),(0,e._)("div",_,[(0,e._)("div",Q,[k,(0,e._)("div",T,(0,i.toDisplayString)(N(null===(l=L.value)||void 0===l?void 0:l.createDate)),1)]),(0,e._)("div",U,[O,(0,e._)("div",F,(0,i.toDisplayString)(null===(g=L.value)||void 0===g?void 0:g.createdBy),1)]),(0,e._)("div",E,[R,(0,e._)("div",S,(0,i.toDisplayString)(N(null===(r=L.value)||void 0===r?void 0:r.updateDate)),1)]),(0,e._)("div",P,[Z,(0,e._)("div",q,(0,i.toDisplayString)(null===(p=L.value)||void 0===p?void 0:p.updatedBy),1)])]),M.value?((0,e.wg)(),(0,e.iD)("div",G,[(0,e.Wm)(c.Z,{organizations:W.value,tagID:null===(H=L.value)||void 0===H?void 0:H.ID,onRefreshTable:V},null,8,["organizations","tagID"])])):(0,e.kq)("v-if",!0)],64)}}});var j=t(17450),L=t.n(j),W=t(29530),X=t.n(W),M=t(16199),N=t.n(M),V=t(40458),Y=t.n(V),J=t(62916),K=t.n(J),$=t(92165),nn=t.n($),an=t(63490),tn={};tn.styleTagTransform=nn(),tn.setAttributes=Y(),tn.insert=N().bind(null,"head"),tn.domAPI=X(),tn.insertStyleElement=K(),L()(an.Z,tn),an.Z&&an.Z.locals&&an.Z.locals;const en=(0,t(32525).Z)(H,[["__scopeId","data-v-ce563e10"]])}}]);
//# sourceMappingURL=5783.js.map