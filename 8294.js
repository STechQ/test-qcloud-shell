"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[8294],{65812:(n,e,o)=>{o.d(e,{Z:()=>l});var i=o(34663),t=o.n(i),a=o(7638),s=o.n(a)()(t());s.push([n.id,"\narticle[data-v-1f895aa7] {\n  height: calc(100% - 20px);\n  margin-left: 33px;\n  margin-top: 94px;\n  margin-right: 33px;\n}\narticle[data-v-1f895aa7] {\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  scrollbar-width: none;\n  /* Firefox */\n}\narticle[data-v-1f895aa7]::-webkit-scrollbar {\n  display: none;\n  /* Safari and Chrome */\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/main/article.vue"],names:[],mappings:";AAQA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,YAAY;AACd;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB",sourcesContent:['<script setup lang="ts">\n<\/script>\n<template>\n  <article>\n    <router-view></router-view>\n  </article>\n</template>\n<style scoped>\narticle {\n  height: calc(100% - 20px);\n  margin-left: 33px;\n  margin-top: 94px;\n  margin-right: 33px;\n}\n\narticle {\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\narticle::-webkit-scrollbar {\n  display: none;\n  /* Safari and Chrome */\n}\n</style>'],sourceRoot:""}]);const l=s},54782:(n,e,o)=>{o.d(e,{Z:()=>c});var i=o(34663),t=o.n(i),a=o(7638),s=o.n(a),l=o(79240),r=s()(t());r.i(l.Z),r.push([n.id,'\n.user-info-dropwdown[data-v-bc449574] {\n  width: 246px;\n  border: 1px solid #E3E3E3;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.menuıtem[data-v-bc449574]:hover {\n  background-color: #d5d5d5 !important;\n  cursor: pointer;\n}\n.menuıtem[data-v-bc449574] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n}\n.user-info[data-v-bc449574] {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px 20px;\n}\n.user-name[data-v-bc449574] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email[data-v-bc449574] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevronIcon[data-v-bc449574] {\n  cursor: pointer;\n}\n.documantationsText[data-v-bc449574] {\n  margin-top: 28px;\n  color: #212121;\n  font-family: "Roboto";\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 500;\n}\n.out-link-text[data-v-bc449574] {\n  color: #212121;\n  text-decoration: none;\n}\n@media (max-width: 1350px) {\n.row-responsive > *[data-v-bc449574] {\n    width: unset;\n}\n}\n.header[data-v-bc449574] {\n  min-height: 72px;\n  background: #ECEFF1 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #E3E3E3;\n  position: absolute;\n  width: 100%;\n  align-items: center;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/main/header.vue"],names:[],mappings:";AAsIA;EACE,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;AACE;IACE,YAAY;AACd;AACF;AAEA;EACE,gBAAgB;EAChB,+CAA+C;EAC/C,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB",sourcesContent:['<script setup lang="ts">\nimport { computed, defineAsyncComponent, ref } from "vue";\nimport { container } from "../../../../domain/core/diContainer";\nimport { IRouter } from "../../../../domain/presentation/IRouter";\nimport { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\nimport { IViewModel } from "../../../../domain/viewModel/IViewModel";\nimport "bootstrap/js/dist/dropdown";\nimport { IAuthenticationUseCase } from "../../../../domain/useCase/IAuthenticationUseCase";\nimport { IDialog } from "../../../../domain/presentation/IDialog";\nconst router = container.resolve<IRouter>(IRouter);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst authentication = container.resolve<IAuthenticationUseCase>(IAuthenticationUseCase);\nconst user = viewModel.user!;\nconst dialog = container.resolve<IDialog>(IDialog);\nconst isBackOfficeAvailable = computed(() => !!viewModel.user?.userRoles?.find(i => i.name == "superAdmin"));\n\nfunction gotoBackOffice() {\n//   router.push("/backoffice/dashboard");\n  goToUrl(\'/backoffice/dashboard\');\n}\n\nfunction logout() {\n  executor.execute(async () => { await authentication.signOut(); }, { loading: true });\n}\n\nfunction openFeedbackDialog () {\n  dialog.showDialog(\n        defineAsyncComponent(() => import(`../../components/dialogs/giveUsFeedbackDialog.vue`)),\n        { closable: true, title: "Give Us Feedback", width: "540px", maxHeight: "706px" },\n    );\n}\nfunction goToProfile() {\n  router.push("/completeProfile");\n}\nfunction goToUrl(url: string) {\n  window.open(url, "_blank")\n}\n<\/script>\n<template>\n  <div class="page-content">\n    <nav>\n      <div class="container-fluid">\n        <div class="row row-responsive header">\n          <div class="col-xl-2">\n            <img v-if="viewModel.user?.selectedOrganization?.accountType === \'premium\'" src="../../../../images/plateau_logo-navy.svg" alt="" width="205" height="36" class="logo" />\n            <img v-else src="../../../../images/plateau_logo-beta.png" alt="" width="205" height="36" />\n          </div>\n\n          <div class="col-xl-8">\n            <a class="documantationsText" href="https://studio.onplateau.com/docs/ui/docs/Introduction/studio-description" target="_blank">Documentation</a>\n            <a style="padding-left: 34px" href="https://www.youtube.com/@PlateauStudio" target="_blank" class="documantationsText">Academy</a>\n            <a style="padding-left: 34px" href="https://discourse.softtech.com.tr/" target="_blank" class="documantationsText">Discourse</a>\n          </div>\n\n          <div class="navbar-icons col-xl-2">\n            <div class="col-xl-1 p-0 dot-icon" style="display: flex">\n              <img src="../../../../images/profile-image-dark-header.svg" class="profile-icon" style="margin-right: 4px;"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-target="#dropdown-menu"/>\n              <i\n                class="mdi mdi-chevron-down chevronIcon"\n                data-bs-toggle="dropdown"\n                aria-expanded="false"\n                data-bs-target="#dropdown-menu"\n                id="dropdownMenuButton1"\n                style="padding-top: 10px; margin-right: -11px; font-size: 16px"\n              ></i>\n              <ul style="width: 246px" class="dropdown-menu user-info-dropwdown" aria-labelledby="dropdownMenuButton1">\n                <li>\n                  <div class="user-info">\n                    <img src="../../../../images/profile-image-dark-in-menu.svg" style="margin-right: 12px;"/>\n                    <div style="display: grid;">\n                      <span class="user-name">{{ user.name + \' \' + user.lastName }}</span>\n                      <span class="user-email">{{ user.email }}</span>\n                    </div>\n                    \n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="openFeedbackDialog()">\n                    <i class="mdi mdi-lifebuoy" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Give Us Feedback</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://studio.onplateau.com/docs/ui/docs/Introduction/studio-description\')">\n                    <i class="mdi mdi-file-document-multiple-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Documentation</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://www.youtube.com/@PlateauStudio\')">\n                    <i class="mdi mdi-school-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Academy</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="goToUrl(\'https://discourse.softtech.com.tr/\')">\n                    <i class="mdi mdi-comment-multiple-outline" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Discourse</a>\n                  </div>\n                </li>\n                <li v-if="isBackOfficeAvailable">\n                  <div class="menuıtem" @click="gotoBackOffice">\n                    <i class="mdi mdi-chart-line" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Back Office</a>\n                  </div>\n                </li>\n                <li>\n                  <div class="menuıtem" @click="logout()">\n                    <i class="mdi mdi-logout" style="font-size: 20px; margin-right: 8px;"></i>\n                    <a>Logout</a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          \x3c!-- <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-bell bell"></i>\n                        </div>\n                    </div>\n\n                    <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-forum forum"></i>\n                        </div>\n                    </div> --\x3e\n        </div>\n      </div>\n    </nav>\n  </div>\n</template>\n<style scoped>\n@import url("../../../../styles/IDE3.css");\n.user-info-dropwdown {\n  width: 246px;\n  border: 1px solid #E3E3E3;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.menuıtem:hover {\n  background-color: #d5d5d5 !important;\n  cursor: pointer;\n}\n.menuıtem {\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px 20px;\n}\n.user-name {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  color: #212121;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email {\n  font-size: 14px;\n  line-height: 16px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevronIcon {\n  cursor: pointer;\n}\n.documantationsText {\n  margin-top: 28px;\n  color: #212121;\n  font-family: "Roboto";\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 500;\n}\n.out-link-text {\n  color: #212121;\n  text-decoration: none;\n}\n@media (max-width: 1350px) {\n  .row-responsive > * {\n    width: unset;\n  }\n}\n\n.header {\n  min-height: 72px;\n  background: #ECEFF1 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #E3E3E3;\n  position: absolute;\n  width: 100%;\n  align-items: center;\n}\n</style>\n'],sourceRoot:""}]);const c=r},57890:(n,e,o)=>{o.d(e,{Z:()=>l});var i=o(34663),t=o.n(i),a=o(7638),s=o.n(a)()(t());s.push([n.id,"\n.rootSection[data-v-037934e7] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden auto;\n}\n\n/* .rootSection::-webkit-scrollbar {\n    width: 8px;\n}\n\n.rootSection::-webkit-scrollbar-thumb {\n  background: #bcbcbc 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n}\n\n.rootSection::-webkit-scrollbar-thumb:hover {\n    background: #555;\n} */\n.columnsSection[data-v-037934e7] {\n  height: calc(100% - 18px);\n  display: flex;\n}\n.contentSection[data-v-037934e7] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/pages/main.vue"],names:[],mappings:";AAuBA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;;;;;;;;;;GAWG;AACH;EACE,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,OAAO;AACT",sourcesContent:['<script setup lang="ts">\nimport { computed } from "vue";\n//import Navbar from "../components/main/navbar.vue";\nimport Header from "../components/main/header.vue";\nimport Article from "../components/main/article.vue";\n//import Footer from "../components/main/footer.vue";\n\n\nconst contentWidth = computed(() => `calc(100% - 40px)`);\n<\/script>\n<template>\n  <section class="rootSection">\n    <section class="columnsSection">\n      \x3c!-- <Navbar /> --\x3e\n      <section class="contentSection" :style="{width: contentWidth}">\n        <Header />\n        <Article />\n      </section>\n    </section>\n    \x3c!-- <Footer /> --\x3e\n  </section>\n</template>\n<style scoped>\n.rootSection {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden auto;\n}\n\n/* .rootSection::-webkit-scrollbar {\n    width: 8px;\n}\n\n.rootSection::-webkit-scrollbar-thumb {\n  background: #bcbcbc 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n}\n\n.rootSection::-webkit-scrollbar-thumb:hover {\n    background: #555;\n} */\n.columnsSection {\n  height: calc(100% - 18px);\n  display: flex;\n}\n.contentSection {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\n</style>'],sourceRoot:""}]);const l=s},38945:(n,e,o)=>{o.d(e,{Z:()=>i});const i=o.p+"9a830afdb3af3bb0515b62ea00be093f.svg"},91743:(n,e,o)=>{o.d(e,{L:()=>a});let i=!1;new Promise((n=>n())).then((()=>i=!0)),"undefined"!=typeof doNothing&&doNothing();const t=!0===i;function a(n,e={}){let o,i,a;const s=n=>{a&&clearTimeout(a),a=setTimeout((()=>{i(new Error(`The operation has timed out. timeoutValue  : ${n}`))}),n)};return n&&s(n),{startTimer:s,promise:new Promise(((n,a)=>{var s;s=n,o=t&&e.fixSyncResolve?n=>setTimeout((()=>s(n))):s,i=a})),resolver:o,reject:i}}},5627:(n,e,o)=>{o.d(e,{OH:()=>l,b2:()=>i.b2,bh:()=>s,f3:()=>i.f3,nC:()=>i.nC});var i=o(53266),t=o(91743);function a(){const n=(0,t.L)();return setTimeout((()=>{n.resolver()}),100),n.promise}async function s(n,e){await l([n]);const o=i.nC.resolve(n);await e(o)}async function l(n,e){let o=!1;for(;!o;)try{n.forEach((n=>i.nC.resolve(n))),o=!0}catch(n){await a()}await(null==e?void 0:e())}},91056:(n,e,o)=>{o.d(e,{u:()=>i});const i=Symbol.for("IDialog")},1937:(n,e,o)=>{o.d(e,{Ax:()=>t,v5:()=>i});const i=Symbol.for("IRouter");function t(n){}},90585:(n,e,o)=>{o.d(e,{m:()=>i});const i=Symbol.for("IAuthenticationUseCase")},83487:(n,e,o)=>{o.d(e,{y:()=>i});const i=Symbol.for("IUseCaseExecutor")},88613:(n,e,o)=>{o.d(e,{J:()=>i});const i=Symbol.for("IViewModel")},38294:(n,e,o)=>{o.r(e),o.d(e,{default:()=>An});var i=o(71093),t=o(66190),a=o(73843);const s=o.p+"8b092b3e10f27640b9a7ae7f4b6c4e62.svg",l=o.p+"633dc086671772fc608838c511c44db3.png",r=o.p+"b043e9f9323b8a1a8ec18340d981808d.svg";var c=o(38945),d=o(5627),u=o(1937),p=o(83487),m=o(88613),A=(o(14095),o(90585)),g=o(91056);const v=n=>((0,i.dD)("data-v-bc449574"),n=n(),(0,i.Cn)(),n),f={class:"page-content"},h={class:"container-fluid"},x={class:"row row-responsive header"},b={class:"col-xl-2"},C={key:0,src:s,alt:"",width:"205",height:"36",class:"logo"},w={key:1,src:l,alt:"",width:"205",height:"36"},B=v((()=>(0,i._)("div",{class:"col-xl-8"},[(0,i._)("a",{class:"documantationsText",href:"https://studio.onplateau.com/docs/ui/docs/Introduction/studio-description",target:"_blank"},"Documentation"),(0,i._)("a",{style:{"padding-left":"34px"},href:"https://www.youtube.com/@PlateauStudio",target:"_blank",class:"documantationsText"},"Academy"),(0,i._)("a",{style:{"padding-left":"34px"},href:"https://discourse.softtech.com.tr/",target:"_blank",class:"documantationsText"},"Discourse")],-1))),E={class:"navbar-icons col-xl-2"},y={class:"col-xl-1 p-0 dot-icon",style:{display:"flex"}},k=v((()=>(0,i._)("img",{src:r,class:"profile-icon",style:{"margin-right":"4px"},id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-target":"#dropdown-menu"},null,-1))),_=v((()=>(0,i._)("i",{class:"mdi mdi-chevron-down chevronIcon","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-target":"#dropdown-menu",id:"dropdownMenuButton1",style:{"padding-top":"10px","margin-right":"-11px","font-size":"16px"}},null,-1))),I={style:{width:"246px"},class:"dropdown-menu user-info-dropwdown","aria-labelledby":"dropdownMenuButton1"},S={class:"user-info"},z=v((()=>(0,i._)("img",{src:c.Z,style:{"margin-right":"12px"}},null,-1))),T={style:{display:"grid"}},D={class:"user-name"},U={class:"user-email"},Z=[v((()=>(0,i._)("i",{class:"mdi mdi-lifebuoy",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Give Us Feedback",-1)))],F=[v((()=>(0,i._)("i",{class:"mdi mdi-file-document-multiple-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Documentation",-1)))],q=[v((()=>(0,i._)("i",{class:"mdi mdi-school-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Academy",-1)))],M=[v((()=>(0,i._)("i",{class:"mdi mdi-comment-multiple-outline",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Discourse",-1)))],R={key:0},O=[v((()=>(0,i._)("i",{class:"mdi mdi-chart-line",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Back Office",-1)))],P=[v((()=>(0,i._)("i",{class:"mdi mdi-logout",style:{"font-size":"20px","margin-right":"8px"}},null,-1))),v((()=>(0,i._)("a",null,"Logout",-1)))],Y=(0,i.aZ)({__name:"header",setup(n){d.nC.resolve(u.v5);const e=d.nC.resolve(p.y),s=d.nC.resolve(m.J),l=d.nC.resolve(A.m),r=s.user,c=d.nC.resolve(g.u),v=(0,i.Fl)((()=>{var n,e;return!!(null===(e=null===(n=s.user)||void 0===n?void 0:n.userRoles)||void 0===e?void 0:e.find((n=>"superAdmin"==n.name)))}));function Y(){j("/backoffice/dashboard")}function j(n){window.open(n,"_blank")}return(n,d)=>{var u,p;return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("nav",null,[(0,i._)("div",h,[(0,i._)("div",x,[(0,i._)("div",b,["premium"===(null===(p=null===(u=(0,a.SU)(s).user)||void 0===u?void 0:u.selectedOrganization)||void 0===p?void 0:p.accountType)?((0,i.wg)(),(0,i.iD)("img",C)):((0,i.wg)(),(0,i.iD)("img",w))]),B,(0,i._)("div",E,[(0,i._)("div",y,[k,_,(0,i._)("ul",I,[(0,i._)("li",null,[(0,i._)("div",S,[z,(0,i._)("div",T,[(0,i._)("span",D,(0,t.toDisplayString)((0,a.SU)(r).name+" "+(0,a.SU)(r).lastName),1),(0,i._)("span",U,(0,t.toDisplayString)((0,a.SU)(r).email),1)])])]),(0,i._)("li",null,[(0,i._)("div",{class:"menuıtem",onClick:d[0]||(d[0]=n=>{c.showDialog((0,i.RC)((()=>Promise.all([o.e(6233),o.e(4503),o.e(1886)]).then(o.bind(o,24503)))),{closable:!0,title:"Give Us Feedback",width:"540px",maxHeight:"706px"})})},Z)]),(0,i._)("li",null,[(0,i._)("div",{class:"menuıtem",onClick:d[1]||(d[1]=n=>j("https://studio.onplateau.com/docs/ui/docs/Introduction/studio-description"))},F)]),(0,i._)("li",null,[(0,i._)("div",{class:"menuıtem",onClick:d[2]||(d[2]=n=>j("https://www.youtube.com/@PlateauStudio"))},q)]),(0,i._)("li",null,[(0,i._)("div",{class:"menuıtem",onClick:d[3]||(d[3]=n=>j("https://discourse.softtech.com.tr/"))},M)]),(0,a.SU)(v)?((0,i.wg)(),(0,i.iD)("li",R,[(0,i._)("div",{class:"menuıtem",onClick:Y},O)])):(0,i.kq)("v-if",!0),(0,i._)("li",null,[(0,i._)("div",{class:"menuıtem",onClick:d[4]||(d[4]=n=>{e.execute((async()=>{await l.signOut()}),{loading:!0})})},P)])])])]),(0,i.kq)(' <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-bell bell"></i>\n                        </div>\n                    </div>\n\n                    <div class="py-1 navbar-icons">\n                        <div class="media d-flex align-items-center">\n                            <i class="mdi mdi-forum forum"></i>\n                        </div>\n                    </div> ')])])])])}}});var j=o(17450),W=o.n(j),N=o(29530),G=o.n(N),H=o(16199),V=o.n(H),L=o(40458),J=o.n(L),Q=o(62916),X=o.n(Q),$=o(92165),K=o.n($),nn=o(54782),en={};en.styleTagTransform=K(),en.setAttributes=J(),en.insert=V().bind(null,"head"),en.domAPI=G(),en.insertStyleElement=X(),W()(nn.Z,en),nn.Z&&nn.Z.locals&&nn.Z.locals;var on=o(32525);const tn=(0,on.Z)(Y,[["__scopeId","data-v-bc449574"]]);var an=o(65812),sn={};sn.styleTagTransform=K(),sn.setAttributes=J(),sn.insert=V().bind(null,"head"),sn.domAPI=G(),sn.insertStyleElement=X(),W()(an.Z,sn),an.Z&&an.Z.locals&&an.Z.locals;const ln={},rn=(0,on.Z)(ln,[["render",function(n,e){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("article",null,[(0,i.Wm)(o)])}],["__scopeId","data-v-1f895aa7"]]),cn={class:"rootSection"},dn={class:"columnsSection"},un=(0,i.aZ)({__name:"main",setup(n){const e=(0,i.Fl)((()=>"calc(100% - 40px)"));return(n,o)=>((0,i.wg)(),(0,i.iD)("section",cn,[(0,i._)("section",dn,[(0,i.kq)(" <Navbar /> "),(0,i._)("section",{class:"contentSection",style:(0,t.normalizeStyle)({width:(0,a.SU)(e)})},[(0,i.Wm)(tn),(0,i.Wm)(rn)],4)]),(0,i.kq)(" <Footer /> ")]))}});var pn=o(57890),mn={};mn.styleTagTransform=K(),mn.setAttributes=J(),mn.insert=V().bind(null,"head"),mn.domAPI=G(),mn.insertStyleElement=X(),W()(pn.Z,mn),pn.Z&&pn.Z.locals&&pn.Z.locals;const An=(0,on.Z)(un,[["__scopeId","data-v-037934e7"]])}}]);
//# sourceMappingURL=8294.js.map