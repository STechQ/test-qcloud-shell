"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[2077],{31681:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(51864),s=t.n(a),o=t(60352),i=t.n(o)()(s());i.push([n.id,"\n.content-area[data-v-c2d8fbba] {\n  overflow-y: scroll;\n  height: 100%;\n}\n.tables-area[data-v-c2d8fbba] {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 10px;\n}\n.section-area[data-v-c2d8fbba] {\n  margin-bottom: 25px;\n}\n.header-text[data-v-c2d8fbba] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.btn-action[data-v-c2d8fbba] {\n  margin-left: 10px;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/systemuser/main.vue"],names:[],mappings:";AA6SA;EACE,kBAAkB;EAClB,YAAY;AACd;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AAEA;EACE,iBAAiB;AACnB",sourcesContent:['<script setup lang="ts">\nimport { defineAsyncComponent, onBeforeMount, onMounted, ref } from "vue";\nimport { AuthenticationType, IDomain, ISystemUser, ITenantUser } from \'@stechquick/algae/lib/qCloudTemp/quickCloud\';\nimport { container } from \'../../../../domain/core/diContainer\';\nimport { IRouter, routeDefinition } from \'../../../../domain/presentation/IRouter\';\nimport { ISystemUserManagement } from \'../../../../domain/useCase/ISystemUserManagement\';\nimport { IUseCaseExecutor } from \'../../../../domain/useCase/IUseCaseExecutor\';\nimport { ILocalization } from "../../../../domain/infrastructure/ILocalization";\nimport { IDialog } from "../../../../domain/presentation/IDialog";\nimport { CreatePromiseData } from "@stechquick/algae/lib/helpers/createPromiseData";\n\ninterface IInitOptions {\n  domains?: boolean;\n  tenants?: boolean;\n  systemUsers?: boolean;\n}\n\ninterface ITenantDomainRelation {\n  domainID: string;\n  tenantID: string;\n  domainName: string;\n  tenantName: string;\n  loginType: AuthenticationType;\n}\n\nrouteDefinition({ noAuth: true });\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst systemUserManagement = container.resolve<ISystemUserManagement>(ISystemUserManagement);\nconst localization = container.resolve<ILocalization>(ILocalization);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst router = container.resolve<IRouter>(IRouter);\n\nconst domains = ref<Array<IDomain>>([]);\nconst tenants = ref<Array<ITenantUser>>([]);\nconst domainTenantRelations = ref<Array<ITenantDomainRelation>>([]);\nconst systemUsers = ref<Array<ISystemUser>>([]);\n\nconst dtBaseOptions = {\n  filterable: false, perPage: 10, perPageValues: [],\n  sortIcon: { base: \'mdi\', is: \'mdi mdi-unfold-less-horizontal\', up: \'mdi mdi-arrow-up\', down: \'mdi mdi-arrow-down\' },\n};\n\nconst domainsDtOptions = {\n  ...dtBaseOptions,\n  headings: {\n    ID: "Domain ID",\n    name: "Domain Name",\n    dbName: "Database Name",\n    createdBy: localization.get(\'applicationListcreatedByHeader\'),\n    createDate: localization.get(\'applicationListcreatedDateHeader\'),\n  }\n};\n\nconst tenantsDtOptions = {\n  ...dtBaseOptions,\n  headings: {\n    ID: "Tenant ID",\n    name: " Tenant Name",\n    createdBy: localization.get(\'applicationListcreatedByHeader\'),\n    createDate: localization.get(\'applicationListcreatedDateHeader\'),\n  }\n};\n\nconst relationsDtOptions = {\n  ...dtBaseOptions,\n  headings: {\n    domainID: "Domain ID",\n    domainName: "Domain Name",\n    tenantID: "Tenant ID",\n    tenantName: "Tenant Name",\n    loginType: "Login Type",\n  }\n};\n\nconst systemUsersDtOptions = {\n  ...dtBaseOptions,\n  headings: {\n    ID: "User ID",\n    name: "Name",\n    mailAddress: "E-Mail Address",\n    loginType: "Login Type",\n    createdBy: localization.get(\'applicationListcreatedByHeader\'),\n    createDate: localization.get(\'applicationListcreatedDateHeader\'),\n  }\n};\n\nlet dtOptions: any = { month: \'2-digit\', day: \'2-digit\', year: \'numeric\', hour: \'numeric\', minute: \'numeric\', second: \'numeric\' };\nconst domainsDatatableColumns = ref([\'ID\', \'name\', \'dbName\', \'createdBy\', \'createDate\', "actions"]);\nconst tenantsDatatableColumns = ref([\'ID\', \'name\', \'createdBy\', \'createDate\', "actions"]);\nconst relationsDatatableColumns = ref([\'domainID\', \'domainName\', \'tenantID\', \'tenantName\', "loginType", "actions"]);\nconst systemUsersDatatableColumns = ref([\'ID\', \'name\', \'mailAddress\', "loginType", \'createdBy\', \'createDate\', "actions"]);\nconst domainsDataTable = ref(domainsDtOptions);\nconst tenantsDataTable = ref(tenantsDtOptions);\nconst relationsDataTable = ref(relationsDtOptions);\nconst systemUsersDataTable = ref(systemUsersDtOptions);\n\nfunction fillRelationTableData(domains: Array<IDomain>, tenants: Array<ITenantUser>) {\n  const items: Array<ITenantDomainRelation> = [];\n\n  tenants.forEach(tenant => {\n    const relations = tenant.tenantRelations;\n    if (!relations) { return; }\n\n    relations.forEach(relation => {\n      const domain = domains.find(i => i.ID == relation.tenantID)!;\n      const item: ITenantDomainRelation = {\n        domainID: relation.tenantID,\n        domainName: domain.name,\n        tenantID: tenant.ID,\n        tenantName: tenant.name,\n        loginType: relation.loginType,\n      }\n      items.push(item);\n    });\n  });\n\n  domainTenantRelations.value = items;\n}\n\nasync function getData(options: IInitOptions) {\n  await executor.execute(async () => {\n    const domainsProm = options.domains ? systemUserManagement.listDomains() : (async () => domains.value)();\n    const tenantsProm = options.tenants ? systemUserManagement.listTenants() : (async () => tenants.value)();\n    const systemUsersProm = options.systemUsers ? systemUserManagement.listSystemUsers() : (async () => systemUsers.value)();\n\n    [domains.value, tenants.value, systemUsers.value] = await Promise.all([domainsProm, tenantsProm, systemUsersProm]);\n\n    if (options.tenants) {\n      fillRelationTableData(domains.value, tenants.value);\n    }\n  }, { loading: true });\n}\n\nconst checkUserProm = CreatePromiseData<void>();\n\nonBeforeMount(async () => {\n  await executor.execute(async () => {\n    await systemUserManagement.checkUser();\n    checkUserProm.resolver();\n  }, { loading: true });\n});\n\nonMounted(async () => {\n  await checkUserProm.promise;\n  await getData({ domains: true, tenants: true, systemUsers: true });\n});\n\n\n\nasync function createNewDomian() {\n  const closeCb = async (reason: "close" | "outclick" | "component") => {\n    if (reason != "component") { return; }\n    await getData({ domains: true });\n  };\n\n  dialog.showDialog(defineAsyncComponent(() => import(`../../components/dialogs/systemuser/createDomain.vue`)), { closable: true, title: "Create Domain", closeCb }, {});\n}\n\nasync function createNewTenant() {\n  const closeCb = async (reason: "close" | "outclick" | "component") => {\n    if (reason != "component") { return; }\n    await getData({ tenants: true });\n  };\n\n  dialog.showDialog(defineAsyncComponent(() => import(`../../components/dialogs/systemuser/createTenant.vue`)), { closable: true, title: "Create Tenant", closeCb }, {});\n}\n\nasync function createNewRelation() {\n  const closeCb = async (reason: "close" | "outclick" | "component") => {\n    if (reason != "component") { return; }\n    await getData({ domains: true, tenants: true });\n  };\n\n  const domainOptions = domains.value.map(i => { return { text: i.name, value: i.ID } });\n  const tenantOptions = tenants.value.map(i => { return { text: i.name, value: i.ID } });\n\n  dialog.showDialog(defineAsyncComponent(\n    () => import(`../../components/dialogs/systemuser/attachDomainToTenant.vue`)),\n    { closable: true, title: "Attach Domain To Tenant", closeCb },\n    { domainOptions, tenantOptions },\n  );\n}\n\nasync function createNewSystemUSer() {\n  const closeCb = async (reason: "close" | "outclick" | "component") => {\n    if (reason != "component") { return; }\n    await getData({ systemUsers: true });\n  };\n\n  dialog.showDialog(defineAsyncComponent(() => import(`../../components/dialogs/systemuser/createSystemUser.vue`)), { closable: true, title: "Create New System User", closeCb }, {});\n}\n\nasync function openUsersPage(dbName: string) {\n  router.push(`/systemuser/listusers/${dbName}`);\n}\n\nasync function deleteDomian(domainID: string, domainName: string) {\n  await executor.execute(async () => {\n    await systemUserManagement.deleteDomain(domainID, domainName);\n    await getData({ domains: true, tenants: true });\n  }, { loading: true });\n}\n\nasync function deleteTenant(tenantID: string, tenantName: string) {\n  await executor.execute(async () => {\n    await systemUserManagement.deleteTenant(tenantID, tenantName);\n    await getData({ tenants: true });\n  }, { loading: true });\n}\n\nasync function deleteSystemUser(systemUserID: string, systemUserName: string) {\n  await executor.execute(async () => {\n    await systemUserManagement.deleteSystemUser(systemUserID, systemUserName);\n    await getData({ systemUsers: true });\n  }, { loading: true });\n}\n\nasync function removeRelation(domainID: string, tenantID: string, domainName: string, tenantName: string) {\n  await executor.execute(async () => {\n    await systemUserManagement.detachDomainFromTenant(domainID, tenantID, domainName, tenantName);\n    await getData({ tenants: true });\n  }, { loading: true });\n}\n\n<\/script>\n<template>\n  <div class="content-area">\n    <div class="tables-area">\n      <div class="section-area">\n        <div>\n          <button @click="getData({ domains: true, tenants: true, systemUsers: true })">Refresh Tables</button>\n        </div>\n      </div>\n      <div class="section-area">\n        <div class="header-text">Domains\n          <button class="btn-action" @click="createNewDomian()">Create New Domain</button>\n        </div>\n        <div>\n          <v-client-table ref=\'table\' :data="domains" :columns="domainsDatatableColumns" :options="domainsDataTable">\n            <template #createdDate="props">\n              <span>{{ new Intl.DateTimeFormat("tr-TR", dtOptions).format(new Date(props.row.createDate)) }}</span>\n            </template>\n            <template #actions="props">\n              <div>\n                <button class="btn-action" @click="openUsersPage(props.row.dbName)">Users</button>\n                <button class="btn-action" @click="deleteDomian(props.row.ID, props.row.name)">Delete</button>\n              </div>\n            </template>\n          </v-client-table>\n        </div>\n      </div>\n      <div class="section-area">\n        <div class="header-text">Tenants <button @click="createNewTenant()">Create New Tenant</button></div>\n        <div>\n          <v-client-table ref=\'table\' :data="tenants" :columns="tenantsDatatableColumns" :options="tenantsDataTable">\n            <template #createdDate="props">\n              <span>{{ new Intl.DateTimeFormat("tr-TR", dtOptions).format(new Date(props.row.createDate)) }}</span>\n            </template>\n            <template #actions="props">\n              <div>\n                <button class="btn-action" @click="deleteTenant(props.row.ID, props.row.name)">Delete</button>\n              </div>\n            </template>\n          </v-client-table>\n        </div>\n      </div>\n      <div class="section-area">\n        <div class="header-text">Tenant & Domain Relations <button @click="createNewRelation()">Add New\n            Relation</button></div>\n        <div>\n          <v-client-table ref=\'table\' :data="domainTenantRelations" :columns="relationsDatatableColumns"\n            :options="relationsDataTable">\n            <template #actions="props">\n              <div>\n                <button\n                  @click="removeRelation(props.row.domainID, props.row.tenantID, props.row.domainName, props.row.tenantName)">Remove</button>\n              </div>\n            </template>\n          </v-client-table>\n        </div>\n      </div>\n      <div class="section-area">\n        <div class="header-text">System Users <button @click="createNewSystemUSer()">Create System User</button>\n        </div>\n        <div>\n          <v-client-table ref=\'table\' :data="systemUsers" :columns="systemUsersDatatableColumns"\n            :options="systemUsersDataTable">\n            <template #actions="props">\n              <div>\n                <button class="btn-action" @click="deleteSystemUser(props.row.ID, props.row.userName)">Delete</button>\n              </div>\n            </template>\n          </v-client-table>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.content-area {\n  overflow-y: scroll;\n  height: 100%;\n}\n\n.tables-area {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 10px;\n}\n\n.section-area {\n  margin-bottom: 25px;\n}\n\n.header-text {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn-action {\n  margin-left: 10px;\n}\n</style>'],sourceRoot:""}]);const r=i},92077:(n,e,t)=>{t.r(e),t.d(e,{default:()=>j});var a=t(62068),s=t(49045),o=t(81407),i=t(3734),r=t(35078),c=t(91145),l=t(80664),m=t(86595),d=t(22455),u=t(69185);const p={class:"content-area"},D={class:"tables-area"},y={class:"section-area"},b={class:"section-area"},g={class:"header-text"},v=(0,a.Uk)("Domains "),w=["onClick"],I=["onClick"],f={class:"section-area"},C={class:"header-text"},T=(0,a.Uk)("Tenants "),U=["onClick"],A={class:"section-area"},h={class:"header-text"},N=(0,a.Uk)("Tenant & Domain Relations "),k=["onClick"],B={class:"section-area"},x={class:"header-text"},_=(0,a.Uk)("System Users "),R=["onClick"],E=(0,a.aZ)({__name:"main",setup(n){(0,r.A)({noAuth:!0});const e=i.nC.resolve(l.y),E=i.nC.resolve(c.H),S=i.nC.resolve(m.w),H=i.nC.resolve(d.u),O=i.nC.resolve(r.v),P=(0,o.iH)([]),L=(0,o.iH)([]),M=(0,o.iH)([]),z=(0,o.iH)([]),F={filterable:!1,perPage:10,perPageValues:[],sortIcon:{base:"mdi",is:"mdi mdi-unfold-less-horizontal",up:"mdi mdi-arrow-up",down:"mdi mdi-arrow-down"}},Z={...F,headings:{ID:"Domain ID",name:"Domain Name",dbName:"Database Name",createdBy:S.get("applicationListcreatedByHeader"),createDate:S.get("applicationListcreatedDateHeader")}},q={...F,headings:{ID:"Tenant ID",name:" Tenant Name",createdBy:S.get("applicationListcreatedByHeader"),createDate:S.get("applicationListcreatedDateHeader")}},W={...F,headings:{domainID:"Domain ID",domainName:"Domain Name",tenantID:"Tenant ID",tenantName:"Tenant Name",loginType:"Login Type"}},V={...F,headings:{ID:"User ID",name:"Name",mailAddress:"E-Mail Address",loginType:"Login Type",createdBy:S.get("applicationListcreatedByHeader"),createDate:S.get("applicationListcreatedDateHeader")}};let Y={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};const $=(0,o.iH)(["ID","name","dbName","createdBy","createDate","actions"]),j=(0,o.iH)(["ID","name","createdBy","createDate","actions"]),X=(0,o.iH)(["domainID","domainName","tenantID","tenantName","loginType","actions"]),G=(0,o.iH)(["ID","name","mailAddress","loginType","createdBy","createDate","actions"]),J=(0,o.iH)(Z),K=(0,o.iH)(q),Q=(0,o.iH)(W),nn=(0,o.iH)(V);async function en(n){await e.execute((async()=>{const e=n.domains?E.listDomains():(async()=>P.value)(),t=n.tenants?E.listTenants():(async()=>L.value)(),a=n.systemUsers?E.listSystemUsers():(async()=>z.value)();[P.value,L.value,z.value]=await Promise.all([e,t,a]),n.tenants&&function(n,e){const t=[];e.forEach((e=>{const a=e.tenantRelations;a&&a.forEach((a=>{const s=n.find((n=>n.ID==a.tenantID)),o={domainID:a.tenantID,domainName:s.name,tenantID:e.ID,tenantName:e.name,loginType:a.loginType};t.push(o)}))})),M.value=t}(P.value,L.value)}),{loading:!0})}const tn=(0,u.X)();return(0,a.wF)((async()=>{await e.execute((async()=>{await E.checkUser(),tn.resolver()}),{loading:!0})})),(0,a.bv)((async()=>{await tn.promise,await en({domains:!0,tenants:!0,systemUsers:!0})})),(n,i)=>{const r=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",D,[(0,a._)("div",y,[(0,a._)("div",null,[(0,a._)("button",{onClick:i[0]||(i[0]=n=>en({domains:!0,tenants:!0,systemUsers:!0}))},"Refresh Tables")])]),(0,a._)("div",b,[(0,a._)("div",g,[v,(0,a._)("button",{class:"btn-action",onClick:i[1]||(i[1]=n=>async function(){H.showDialog((0,a.RC)((()=>t.e(7248).then(t.bind(t,57248)))),{closable:!0,title:"Create Domain",closeCb:async n=>{"component"==n&&await en({domains:!0})}},{})}())},"Create New Domain")]),(0,a._)("div",null,[(0,a.Wm)(r,{ref:"table",data:P.value,columns:$.value,options:J.value},{createdDate:(0,a.w5)((n=>[(0,a._)("span",null,(0,s.toDisplayString)(new Intl.DateTimeFormat("tr-TR",(0,o.SU)(Y)).format(new Date(n.row.createDate))),1)])),actions:(0,a.w5)((n=>[(0,a._)("div",null,[(0,a._)("button",{class:"btn-action",onClick:e=>async function(n){O.push(`/systemuser/listusers/${n}`)}(n.row.dbName)},"Users",8,w),(0,a._)("button",{class:"btn-action",onClick:t=>async function(n,t){await e.execute((async()=>{await E.deleteDomain(n,t),await en({domains:!0,tenants:!0})}),{loading:!0})}(n.row.ID,n.row.name)},"Delete",8,I)])])),_:1},8,["data","columns","options"])])]),(0,a._)("div",f,[(0,a._)("div",C,[T,(0,a._)("button",{onClick:i[2]||(i[2]=n=>async function(){H.showDialog((0,a.RC)((()=>t.e(3793).then(t.bind(t,73793)))),{closable:!0,title:"Create Tenant",closeCb:async n=>{"component"==n&&await en({tenants:!0})}},{})}())},"Create New Tenant")]),(0,a._)("div",null,[(0,a.Wm)(r,{ref:"table",data:L.value,columns:j.value,options:K.value},{createdDate:(0,a.w5)((n=>[(0,a._)("span",null,(0,s.toDisplayString)(new Intl.DateTimeFormat("tr-TR",(0,o.SU)(Y)).format(new Date(n.row.createDate))),1)])),actions:(0,a.w5)((n=>[(0,a._)("div",null,[(0,a._)("button",{class:"btn-action",onClick:t=>async function(n,t){await e.execute((async()=>{await E.deleteTenant(n,t),await en({tenants:!0})}),{loading:!0})}(n.row.ID,n.row.name)},"Delete",8,U)])])),_:1},8,["data","columns","options"])])]),(0,a._)("div",A,[(0,a._)("div",h,[N,(0,a._)("button",{onClick:i[3]||(i[3]=n=>async function(){const n=P.value.map((n=>({text:n.name,value:n.ID}))),e=L.value.map((n=>({text:n.name,value:n.ID})));H.showDialog((0,a.RC)((()=>t.e(559).then(t.bind(t,30559)))),{closable:!0,title:"Attach Domain To Tenant",closeCb:async n=>{"component"==n&&await en({domains:!0,tenants:!0})}},{domainOptions:n,tenantOptions:e})}())},"Add New Relation")]),(0,a._)("div",null,[(0,a.Wm)(r,{ref:"table",data:M.value,columns:X.value,options:Q.value},{actions:(0,a.w5)((n=>[(0,a._)("div",null,[(0,a._)("button",{onClick:t=>async function(n,t,a,s){await e.execute((async()=>{await E.detachDomainFromTenant(n,t,a,s),await en({tenants:!0})}),{loading:!0})}(n.row.domainID,n.row.tenantID,n.row.domainName,n.row.tenantName)},"Remove",8,k)])])),_:1},8,["data","columns","options"])])]),(0,a._)("div",B,[(0,a._)("div",x,[_,(0,a._)("button",{onClick:i[4]||(i[4]=n=>async function(){H.showDialog((0,a.RC)((()=>t.e(2290).then(t.bind(t,92290)))),{closable:!0,title:"Create New System User",closeCb:async n=>{"component"==n&&await en({systemUsers:!0})}},{})}())},"Create System User")]),(0,a._)("div",null,[(0,a.Wm)(r,{ref:"table",data:z.value,columns:G.value,options:nn.value},{actions:(0,a.w5)((n=>[(0,a._)("div",null,[(0,a._)("button",{class:"btn-action",onClick:t=>async function(n,t){await e.execute((async()=>{await E.deleteSystemUser(n,t),await en({systemUsers:!0})}),{loading:!0})}(n.row.ID,n.row.userName)},"Delete",8,R)])])),_:1},8,["data","columns","options"])])])])])}}});var S=t(75701),H=t.n(S),O=t(8236),P=t.n(O),L=t(6080),M=t.n(L),z=t(56850),F=t.n(z),Z=t(87182),q=t.n(Z),W=t(39213),V=t.n(W),Y=t(31681),$={};$.styleTagTransform=V(),$.setAttributes=F(),$.insert=M().bind(null,"head"),$.domAPI=P(),$.insertStyleElement=q(),H()(Y.Z,$),Y.Z&&Y.Z.locals&&Y.Z.locals;const j=(0,t(51419).Z)(E,[["__scopeId","data-v-c2d8fbba"]])}}]);
//# sourceMappingURL=2077.js.map