"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[6484],{65812:(n,e,i)=>{i.d(e,{Z:()=>l});var t=i(34663),o=i.n(t),a=i(7638),s=i.n(a)()(o());s.push([n.id,"\narticle[data-v-1f895aa7] {\n  height: calc(100% - 20px);\n  margin-left: 33px;\n  margin-top: 94px;\n  margin-right: 33px;\n}\narticle[data-v-1f895aa7] {\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  scrollbar-width: none;\n  /* Firefox */\n}\narticle[data-v-1f895aa7]::-webkit-scrollbar {\n  display: none;\n  /* Safari and Chrome */\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/main/article.vue"],names:[],mappings:";AAQA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,YAAY;AACd;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB",sourcesContent:['<script setup lang="ts">\n<\/script>\n<template>\n  <article>\n    <router-view></router-view>\n  </article>\n</template>\n<style scoped>\narticle {\n  height: calc(100% - 20px);\n  margin-left: 33px;\n  margin-top: 94px;\n  margin-right: 33px;\n}\n\narticle {\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\narticle::-webkit-scrollbar {\n  display: none;\n  /* Safari and Chrome */\n}\n</style>'],sourceRoot:""}]);const l=s},26879:(n,e,i)=>{i.d(e,{Z:()=>r});var t=i(34663),o=i.n(t),a=i(7638),s=i.n(a),l=i(79240),d=s()(o());d.i(l.Z),d.push([n.id,'\n.user-info-dropwdown[data-v-37d5b172] {\n  width: 246px;\n  border: 1px solid #E3E3E3;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.menuıtem[data-v-37d5b172]:hover {\n  background-color: #d5d5d5 !important;\n  cursor: pointer;\n}\n.menuıtem[data-v-37d5b172] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n}\n.user-info[data-v-37d5b172] {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px 20px;\n}\n.user-name[data-v-37d5b172] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email[data-v-37d5b172] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevronIcon[data-v-37d5b172] {\n  cursor: pointer;\n}\n.documantationsText[data-v-37d5b172] {\n  margin-top: 28px;\n  color: #212121;\n  font-family: "Roboto";\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 500;\n}\n.out-link-text[data-v-37d5b172] {\n  color: #212121;\n  text-decoration: none;\n}\n@media (max-width: 1350px) {\n.row-responsive > *[data-v-37d5b172] {\n    width: unset;\n}\n}\n.header[data-v-37d5b172] {\n  min-height: 72px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #E3E3E3;\n  position: absolute;\n  width: 100%;\n  align-items: center;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/main/header.vue"],names:[],mappings:";AAuJA;EACE,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;AACE;IACE,YAAY;AACd;AACF;AAEA;EACE,gBAAgB;EAChB,+CAA+C;EAC/C,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB",sourcesContent:['<script setup lang="ts">\nimport { computed, defineAsyncComponent, ref } from "vue";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IRouter } from "../../../../domain/presentation/IRouter";\nimport { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\nimport { IViewModel } from "../../../../domain/viewModel/IViewModel";\nimport "bootstrap/js/dist/dropdown";\nimport { IAuthenticationUseCase } from "../../../../domain/useCase/IAuthenticationUseCase";\nimport { IDialog } from "../../../../domain/presentation/IDialog";\nimport ChatBot from "../dialogs/chatbot.vue"\n\nconst router = container.resolve<IRouter>(IRouter);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst authentication = container.resolve<IAuthenticationUseCase>(IAuthenticationUseCase);\nconst user = viewModel.user!;\nconst dialog = container.resolve<IDialog>(IDialog);\nconst isBackOfficeAvailable = computed(() => !!viewModel.user?.userRoles?.find(i => i.name == "superAdmin"));\n\nfunction gotoBackOffice() {\n//   router.push("/backoffice/dashboard");\n  goToUrl(\'/backoffice/dashboard\');\n}\n\nfunction gotoStandAloneUIEditor() {\n  // router.push("/standAlone/uiEditor");\n  goToUrl(\'/standAlone/uiEditor\');\n\n}\n\nfunction logout() {\n  executor.execute(async () => { await authentication.signOut(); }, { loading: true });\n}\n\nfunction openFeedbackDialog () {\n  dialog.showDialog(\n        defineAsyncComponent(() => import(`../../components/dialogs/giveUsFeedbackDialog.vue`)),\n        { closable: true, title: "Give Us Feedback", width: "540px", maxHeight: "706px" },\n    );\n}\nfunction goToProfile() {\n  router.push("/completeProfile");\n}\nfunction goToUrl(url: string) {\n  window.open(url, "_blank")\n}\n<\/script>\n<template>\n  <div class="page-content">\n    <nav>\n      <div class="container-fluid">\n        <div class="row row-responsive header">\n          <div class="col-xl-2">\n            <img v-if="viewModel.user?.selectedOrganization?.accountType === \'premium\'" src="../../../../images/plateau_logo-premium.svg" alt="" width="314" height="50" class="logo" />\n            <img v-else src="../../../../images/plateau_logo-navy.svg" alt="" width="205" height="36" />\n          </div>\n\n          <div class="col-xl-8">\n            <a class="documantationsText" href="https://docs.onplateau.com" target="_blank">Documentation</a>\n            <a style="padding-left: 34px" href="https://www.youtube.com/@PlateauStudio" target="_blank" class="documantationsText">Academy</a>\n            <a style="padding-left: 34px" href="https://discourse.softtech.com.tr/" target="_blank" class="documantationsText">Discourse</a>\n          </div>\n          \n          <div class="navbar-icons col-xl-2" style="display: flex;">\n            <div style="margin-left: auto;">\n              <ChatBot />\n            </div>\n            <div class="col-xl-1 p-0 dot-icon" style="display: flex">\n              <img src="../../../../images/profile-image-dark-header.svg" class="profile-icon" style="margin-right: 4px;"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-target="#dropdown-menu"/>\n              <i\n                class="mdi mdi-chevron-down chevronIcon"\n                data-bs-toggle="dropdown"\n                aria-expanded="false"\n                data-bs-target="#dropdown-menu"\n                id="dropdownMenuButton1"\n                style="padding-top: 10px; margin-right: -11px; font-size: 16px"\n              ></i>\n              <ul style="width: 246px" class="dropdown-menu user-info-dropwdown" aria-labelledby="dropdownMenuButton1">\n                <li>\n                  <div class="user-info">\n                    <img src="../../../../images/profile-image-dark-in-menu.svg" style="margin-right: 12px;"/>\n                    <div style="display: grid;">\n                      <span class="user-name">{{ user.name + \' \' + user.lastName }}</span>\n                      <span class="user-email">{{ user.email }}</span>\n                    </div>\n                    \n                  </div>\n                </li>\n                \x3c!-- <li>\n                  <div class="menuıtem" @click="openFeedbackDialog()">\n                    <i class="mdi mdi-lifebuoy" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Give Us Feedback</a>\n                  </div>\n                </li> --\x3e\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://docs.onplateau.com/\')">\n                    <i class="mdi mdi-file-document-multiple-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Documentation</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://www.youtube.com/@PlateauStudio\')">\n                    <i class="mdi mdi-school-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Academy</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://discourse.softtech.com.tr/\')">\n                    <i class="mdi mdi-comment-multiple-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Discourse</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="gotoStandAloneUIEditor">\n                    <i class="mdi mdi-palette" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>StandAlone UI Editor</a>\n                  </div>\n                </li>\n                <li v-if="isBackOfficeAvailable">\n                  <div class="menuıtem" @click="gotoBackOffice">\n                    <i class="mdi mdi-chart-line" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Back Office</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="logout()">\n                    <i class="mdi mdi-logout" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Logout</a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          \x3c!-- <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-bell bell"></i>\n                        </div>\n                    </div>\n\n                    <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-forum forum"></i>\n                        </div>\n                    </div> --\x3e\n        </div>\n      </div>\n    </nav>\n  </div>\n</template>\n<style scoped>\n@import url("../../../../styles/IDE3.css");\n.user-info-dropwdown {\n  width: 246px;\n  border: 1px solid #E3E3E3;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.menuıtem:hover {\n  background-color: #d5d5d5 !important;\n  cursor: pointer;\n}\n.menuıtem {\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px 20px;\n}\n.user-name {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email {\n  font-size: 14px;\n  line-height: 16px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevronIcon {\n  cursor: pointer;\n}\n.documantationsText {\n  margin-top: 28px;\n  color: #212121;\n  font-family: "Roboto";\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 500;\n}\n.out-link-text {\n  color: #212121;\n  text-decoration: none;\n}\n@media (max-width: 1350px) {\n  .row-responsive > * {\n    width: unset;\n  }\n}\n\n.header {\n  min-height: 72px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #E3E3E3;\n  position: absolute;\n  width: 100%;\n  align-items: center;\n}\n</style>\n'],sourceRoot:""}]);const r=d},24752:(n,e,i)=>{i.d(e,{Z:()=>h});var t=i(71093),o=i(17450),a=i.n(o),s=i(29530),l=i.n(s),d=i(16199),r=i.n(d),c=i(40458),p=i.n(c),m=i(62916),u=i.n(m),A=i(92165),g=i.n(A),v=i(65812),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=r().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=u(),a()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const x={},h=(0,i(32525).Z)(x,[["render",function(n,e){const i=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)("article",null,[(0,t.Wm)(i)])}],["__scopeId","data-v-1f895aa7"]])},70113:(n,e,i)=>{i.d(e,{Z:()=>an});var t=i(71093),o=i(73843),a=i(66190);const s=i.p+"2aafcf249dbaf1ab65675f23356f7df8.svg",l=i.p+"8b092b3e10f27640b9a7ae7f4b6c4e62.svg",d=i.p+"2e738a5ca759de8d9a216530dcc1fddf.svg";var r=i(38945),c=i(5627),p=i(1937),m=i(83487),u=i(88613),A=(i(14095),i(90585)),g=i(91056),v=i(86241);const f=n=>((0,t.dD)("data-v-37d5b172"),n=n(),(0,t.Cn)(),n),x={class:"page-content"},h={class:"container-fluid"},C={class:"row row-responsive header"},b={class:"col-xl-2"},w={key:0,src:s,alt:"",width:"314",height:"50",class:"logo"},B={key:1,src:l,alt:"",width:"205",height:"36"},E=f((()=>(0,t._)("div",{class:"col-xl-8"},[(0,t._)("a",{class:"documantationsText",href:"https://docs.onplateau.com",target:"_blank"},"Documentation"),(0,t._)("a",{style:{"padding-left":"34px"},href:"https://www.youtube.com/@PlateauStudio",target:"_blank",class:"documantationsText"},"Academy"),(0,t._)("a",{style:{"padding-left":"34px"},href:"https://discourse.softtech.com.tr/",target:"_blank",class:"documantationsText"},"Discourse")],-1))),y={class:"navbar-icons col-xl-2",style:{display:"flex"}},k={style:{"margin-left":"auto"}},_={class:"col-xl-1 p-0 dot-icon",style:{display:"flex"}},I=f((()=>(0,t._)("img",{src:d,class:"profile-icon",style:{"margin-right":"4px"},id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-target":"#dropdown-menu"},null,-1))),z=f((()=>(0,t._)("i",{class:"mdi mdi-chevron-down chevronIcon","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-target":"#dropdown-menu",id:"dropdownMenuButton1",style:{"padding-top":"10px","margin-right":"-11px","font-size":"16px"}},null,-1))),U={style:{width:"246px"},class:"dropdown-menu user-info-dropwdown","aria-labelledby":"dropdownMenuButton1"},D={class:"user-info"},F=f((()=>(0,t._)("img",{src:r.Z,style:{"margin-right":"12px"}},null,-1))),T={style:{display:"grid"}},S={class:"user-name"},Z={class:"user-email"},M=[f((()=>(0,t._)("i",{class:"mdi mdi-file-document-multiple-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"Documentation",-1)))],q=[f((()=>(0,t._)("i",{class:"mdi mdi-school-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"Academy",-1)))],O=[f((()=>(0,t._)("i",{class:"mdi mdi-comment-multiple-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"Discourse",-1)))],R=[f((()=>(0,t._)("i",{class:"mdi mdi-palette",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"StandAlone UI Editor",-1)))],P={key:0},j=[f((()=>(0,t._)("i",{class:"mdi mdi-chart-line",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"Back Office",-1)))],Y=[f((()=>(0,t._)("i",{class:"mdi mdi-logout",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),f((()=>(0,t._)("a",null,"Logout",-1)))],V=(0,t.aZ)({__name:"header",setup(n){c.nC.resolve(p.v5);const e=c.nC.resolve(m.y),i=c.nC.resolve(u.J),s=c.nC.resolve(A.m),l=i.user,d=(c.nC.resolve(g.u),(0,t.Fl)((()=>{var n,e;return!!(null===(e=null===(n=i.user)||void 0===n?void 0:n.userRoles)||void 0===e?void 0:e.find((n=>"superAdmin"==n.name)))})));function r(){V("/backoffice/dashboard")}function f(){V("/standAlone/uiEditor")}function V(n){window.open(n,"_blank")}return(n,c)=>{var p,m;return(0,t.wg)(),(0,t.iD)("div",x,[(0,t._)("nav",null,[(0,t._)("div",h,[(0,t._)("div",C,[(0,t._)("div",b,["premium"===(null===(m=null===(p=(0,o.SU)(i).user)||void 0===p?void 0:p.selectedOrganization)||void 0===m?void 0:m.accountType)?((0,t.wg)(),(0,t.iD)("img",w)):((0,t.wg)(),(0,t.iD)("img",B))]),E,(0,t._)("div",y,[(0,t._)("div",k,[(0,t.Wm)(v.Z)]),(0,t._)("div",_,[I,z,(0,t._)("ul",U,[(0,t._)("li",null,[(0,t._)("div",D,[F,(0,t._)("div",T,[(0,t._)("span",S,(0,a.toDisplayString)((0,o.SU)(l).name+" "+(0,o.SU)(l).lastName),1),(0,t._)("span",Z,(0,a.toDisplayString)((0,o.SU)(l).email),1)])])]),(0,t.kq)(' <li>\n                  <div class="menuıtem" @click="openFeedbackDialog()">\n                    <i class="mdi mdi-lifebuoy" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Give Us Feedback</a>\n                  </div>\n                </li> '),(0,t._)("li",null,[(0,t._)("div",{class:"menuıtem",onClick:c[0]||(c[0]=n=>V("https://docs.onplateau.com/"))},M)]),(0,t._)("li",null,[(0,t._)("div",{class:"menuıtem",onClick:c[1]||(c[1]=n=>V("https://www.youtube.com/@PlateauStudio"))},q)]),(0,t._)("li",null,[(0,t._)("div",{class:"menuıtem",onClick:c[2]||(c[2]=n=>V("https://discourse.softtech.com.tr/"))},O)]),(0,t._)("li",null,[(0,t._)("div",{class:"menuıtem",onClick:f},R)]),(0,o.SU)(d)?((0,t.wg)(),(0,t.iD)("li",P,[(0,t._)("div",{class:"menuıtem",onClick:r},j)])):(0,t.kq)("v-if",!0),(0,t._)("li",null,[(0,t._)("div",{class:"menuıtem",onClick:c[3]||(c[3]=n=>{e.execute((async()=>{await s.signOut()}),{loading:!0})})},Y)])])])]),(0,t.kq)(' <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-bell bell"></i>\n                        </div>\n                    </div>\n\n                    <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-forum forum"></i>\n                        </div>\n                    </div> ')])])])])}}});var W=i(17450),G=i.n(W),J=i(29530),L=i.n(J),N=i(16199),H=i.n(N),Q=i(40458),X=i.n(Q),K=i(62916),$=i.n(K),nn=i(92165),en=i.n(nn),tn=i(26879),on={};on.styleTagTransform=en(),on.setAttributes=X(),on.insert=H().bind(null,"head"),on.domAPI=L(),on.insertStyleElement=$(),G()(tn.Z,on),tn.Z&&tn.Z.locals&&tn.Z.locals;const an=(0,i(32525).Z)(V,[["__scopeId","data-v-37d5b172"]])}}]);
//# sourceMappingURL=6484.js.map