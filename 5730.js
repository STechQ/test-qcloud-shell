"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[5730,9240,8695,5627],{26149:(n,e,o)=>{o.d(e,{Z:()=>l});var t=o(8375),a=o.n(t),i=o(7638),r=o.n(i)()(a());r.push([n.id,'\n.infoText[data-v-32ae2707] {\n    color: #151233;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.textAreaClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707]:disabled,\n.textAreaClass[data-v-32ae2707]:disabled {\n    opacity: 0.4;\n}\n.errorMessage[data-v-32ae2707] {\n    color: #212121;\n    font-style: normal;\n    font-weight: 400;\n    font-family: \'ROBOTO\';\n    font-size: 12px;\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.validationErrorIcon[data-v-32ae2707] {\n    color: red;\n    font-size: 13px;\n}\n[data-v-32ae2707]::placeholder {\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n.requiredIcon[data-v-32ae2707] {\n    color: #757575;\n    font-size: 15px;\n}\n.title[data-v-32ae2707] {\n    background-color: red;\n}\n.dropdown-menu[data-v-32ae2707] {\n    display: list-item;\n    position: absolute;\n    inset: 0px auto auto 0px;\n    margin: 0px;\n    background-color: #FFFFFF;\n    border: 0.5px solid var(--grey);\n    box-shadow: 2px 2px 4px #00000029;\n    border-radius: 2px;\n    padding: .5rem 0;\n}\n.deneme[data-v-32ae2707] {\n    background-color: red;\n}\na[data-v-32ae2707] {\n    text-decoration: none;\n}\n.popover__title[data-v-32ae2707] {\n    font-size: 24px;\n    line-height: 36px;\n    text-decoration: none;\n    color: rgb(228, 68, 68);\n    text-align: center;\n    padding: 15px 0;\n}\n.popover__content[data-v-32ae2707] {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    left: 120px;\n    transform: translate(0, 10px);\n    background-color: white;\n    width: auto;\n    padding-left: 0px;\n    padding-right: 10px;\n    z-index: 10;\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, -20px);\n    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n    border: 0.5px solid grey;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    box-shadow: 2px 2px 4px #00000029;\n    opacity: 1;\n    border-radius: 4px;\n}\n.popover__content_textArea[data-v-32ae2707] {\n    margin-top: 17px\n}\n.popover__content_input[data-v-32ae2707] {\n    margin-top: 24px\n}\n.popover__content[data-v-32ae2707]:before {\n    position: absolute;\n    z-index: -1;\n    content: "";\n    right: calc(50% - 10px);\n    top: -8px;\n    border-style: solid;\n    background-color: white;\n    border-width: 0 10px 10px 10px;\n    border-color: transparent transparent transparent transparent;\n    transition-duration: 0.3s;\n    transition-property: transform;\n    border-left: 0.5px solid grey;\n    border-top: 0.5px solid grey;\n    transform: rotate(45deg);\n    margin-top: 2.5px;\n    /* border: 0.5px solid grey; */\n}\n.popoverText[data-v-32ae2707] {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    color: #212121;\n    letter-spacing: 0px;\n    opacity: 1;\n    margin-left: 5px;\n    padding-top: 3px;\n}\n.popoverIcon[data-v-32ae2707] {\n    font-style: normal;\n    font-size: 16px;\n    letter-spacing: 0.29px;\n    color: #29C660;\n    opacity: 1;\n}\n.errorContent[data-v-32ae2707] {\n\n    display: flex;\n}\n.closeIcon[data-v-32ae2707] {\n    color: red;\n}\n.errorDiv[data-v-32ae2707] {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: 12px;\n}\n.hover-info:hover .button-tooltip[data-v-32ae2707] {\n    visibility: visible;\n    transition: opacity 0.3s ease-out 1s;\n    opacity: 1;\n}\n.hover-info[data-v-32ae2707] {\n    color: #757575;\n    font-size: 20px;\n    margin-left: 10px;\n}\n.button-tooltip[data-v-32ae2707] {\n    visibility: hidden;\n    position: absolute;\n    background: #757575;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-family: \'Roboto\';\n    text-align: center;\n    border-radius: 4px;\n    letter-spacing: 0.2px;\n    padding: 6px 8px 6px 8px;\n    margin-top: 15px;\n    opacity: 0;\n    z-index: 1; \n    width: 300px;\n}\ninput[data-v-32ae2707]:disabled,\ntextarea[data-v-32ae2707]:disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n    background: #E3E3E3;\n}\ninput[data-v-32ae2707]:disabled::placeholder,\ntextarea[data-v-32ae2707]:disabled::placeholder {\n    color: #BCBCBC;\n}\n',""]);const l=r},93405:(n,e,o)=>{o.d(e,{Z:()=>l});var t=o(8375),a=o.n(t),i=o(7638),r=o.n(i)()(a());r.push([n.id,"\n.autocomplete[data-v-ce7ebd40] {\n    position: relative;\n}\n.autocomplete .label[data-v-ce7ebd40] {\n    margin:0;\n    color: #151233;\n    font-weight: bold;\n    font-size: 14px;\n}\n.autocomplete .icon-arrow[data-v-ce7ebd40] {\n    position: absolute;\n    right: 5px;\n    bottom: 8px;\n    font-size: 16px;\n    color: #A1A1A1;\n}\n.autocomplete ul[data-v-ce7ebd40] {\n    margin: 0;\n    padding: 0;\n}\n.autocomplete li[data-v-ce7ebd40] {\n    list-style: none;\n}\n.autocomplete input[data-v-ce7ebd40] {\n    border-radius: 4px;\n    outline: none;\n    height: 40px;\n    width: 100%;\n    border: 1px solid #A1A1A1;\n    padding-left: 7px;\n    margin-top: 3px;\n}\n.autocomplete .autocomplete-items[data-v-ce7ebd40] {\n    position: absolute;\n    background-color: #FFF;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    width: -webkit-fill-available;\n    padding: 10px 0;\n    z-index: 9999;\n}\n.autocomplete .autocomplete-items li[data-v-ce7ebd40] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 8px 12px;\n    color: #212121;\n}\n.autocomplete .autocomplete-items .option[data-v-ce7ebd40] {\n    cursor: pointer;\n}\n.autocomplete .autocomplete-items .option[data-v-ce7ebd40]:hover {\n    background-color: #EEEEEE;\n}\n",""]);const l=r},57793:(n,e,o)=>{o.d(e,{Z:()=>d});var t=o(8375),a=o.n(t),i=o(7638),r=o.n(i),l=o(79240),p=r()(a());p.i(l.Z),p.push([n.id,"\n.role[data-v-37946342] {\n    width: 100%;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border: 1px solid #BCBCBC;\n    border-radius: 4px;\n    padding: 0px 12px;\n}\n.select-name[data-v-37946342] {\n    color: #151233;\n    font-weight: bold;\n    font-size: 14px;\n}\n.continue-button[data-v-37946342] {\n    font-weight: 500;\n    font-size: 16px;\n    color: #FFFFFF;\n    background: #151233;\n    padding: 8px 16px;\n    border-radius: 4px;\n    border: none;\n}\n",""]);const d=p},65013:(n,e,o)=>{o.d(e,{Z:()=>l});var t=o(8375),a=o.n(t),i=o(7638),r=o.n(i)()(a());r.push([n.id,"\n.role .items {\n    color: #212121;\n    border-radius: 8px;\n    border: 1px solid #E3E3E3;\n    overflow: hidden;\n    background-color: #FFFFFF;\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n    margin-top: 8px;\n}\n.role .items .option {\n    color: #212121;\n    padding-left: 12px;\n    line-height: 32px;\n}\n.role .items .option:hover {\n    background-color: #EEEEEE;\n}\n.role i {\n    font-size: 16px;\n    color: #BCBCBC;\n}\n.role-tag-name {\n    align-items: center;\n    padding: 5px 8px;\n    background: #D0D1E9;\n    display: flex;\n    justify-content: center;\n    border-radius: 20px;\n    margin-right: 4px;\n    font-size: 14px;\n    color: #2F3160;\n    white-space: nowrap;\n    font-weight: 500;\n}\n",""]);const l=r},79240:(n,e,o)=>{o.d(e,{Z:()=>l});var t=o(8375),a=o.n(t),i=o(7638),r=o.n(i)()(a());r.push([n.id,'* {\n    font-family: \'Roboto\'\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #EEEEEE !important;\n}\n\n.nav-container {\n    background-color: #eceff1;\n    height: 72px;\n    border-bottom: 1px solid #bcbcbc;\n    display: flex;\n}\n\n.navbar {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n\n.vertical-nav {\n    width: 56px;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #151233;\n    z-index: 1;\n}\n\n.nav-icons {\n    display: flex;\n}\n\n#inside-logo {\n    margin-left: 38px;\n    margin-top: 8px;\n}\n\n/* .page-content {     //applicationList menu gap\n    margin-left: 3.5rem;\n} */\n\n.bottom-icons {\n    margin-right: 8px;\n    margin-bottom: 10px;\n    width: 100%;\n}\n\n.home-icon {\n    font-size: 30px;\n    margin-left: -3px;\n    color: #ffffff;\n}\n\n.vertical-icons {\n    color: #ffffff;\n}\n\n.vertical-icons-text {\n    margin-top: 8px;\n    margin-left: 5px;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.vertical-icons-containers {\n    display: flex;\n    height: 40px;\n    width: 40px;\n    margin-left: 2px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n}\n\n.wrapper {\n    display: flex;\n    width: 100%;\n    border-radius: 4px;\n    margin: 8px 8px 0 5px;\n}\n\n.vertical-icons-containers:hover,\n.wrapper:hover {\n    background-color: #3e3c56;\n}\n\n.grid-icon {\n    padding-top: 10px;\n    padding-bottom: 44px;\n}\n\n.navbar-icons {\n    float: right;\n    padding-right: 55px;\n    text-align: -webkit-right;\n}\n\n/* .logo {\n    margin-top: 18px;\n    margin-left: 14px;\n} */\n\n.bell,\n.forum {\n    font-size: 32px;\n}\n\n.user {\n    font-size: 38px;\n    color: red;\n}\n\n.separator {\n    margin: 3rem 0;\n    border-bottom: 1px dashed #fff;\n}\n\n.applications {\n    font-size: 26px;\n    color: #151233;\n    font-weight: bold;\n}\n\n.applications-container {\n    margin-left: 88px;\n    margin-top: 22px;\n    margin-right: 23px;\n}\n\n.app-text {\n    font-size: 18px;\n    color: #212121;\n    font-weight: bold;\n}\n\n.app-text2 {\n    font-size: 15px;\n    color: #616161;\n}\n\n.createAppCursor {\n    cursor: pointer;\n}\n\n.sideNavCursor {\n    cursor: pointer;\n}\n\n.collapse-card {\n    background-color: #dee1e2 !important;\n    border: none !important;\n}\n\n.collapse-card-dec {\n    border: 1px solid #d0d1e9;\n    border-radius: 6px !important;\n}\n\n.etkilesimlivideo-text {\n    margin-left: 23px;\n}\n\n.collapse-title {\n    color: #000;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.collapse-text {\n    color: #757575;\n    font-size: 12px;\n}\n\n.collapse-plus-icon {\n    color: #d5d5d5;\n}\n\n.plus-icon-container {\n    margin-left: 2px;\n    margin-top: 25px !important;\n}\n\n.plus-icon {\n    font-size: 34px;\n    color: #151233;\n}\n\n.plus-btn {\n    margin-bottom: 15px;\n    margin-right: 7px;\n    margin-left: -5px;\n}\n\n.text-container {\n    display: flex;\n    margin-left: 15px;\n    margin-top: 14px;\n    align-items: center;\n}\n\ninput[type="search"] {\n    border: none;\n    border-radius: 4px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 350px;\n    font-size: 18px;\n    padding-left: 40px;\n    margin-right: 25px;\n}\n\ninput[type="search"]::placeholder {\n    color: #909090;\n}\n\n.search-icon {\n    position: absolute;\n    margin-left: 10px;\n    margin-top: 6px;\n    font-size: 24px;\n    color: #909090;\n}\n\n.dashboard-icon,\n.bulleted-icon {\n    font-size: 30px;\n    margin: 10px;\n}\n\n.filter-icons-container {\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 46px;\n    color: #909090;\n}\n\n.logout-icon {\n    cursor: pointer;\n}\n\n.profile-icon {\n    font-size: 38px;\n    cursor: pointer;\n}\n\n.openApp-link {\n    cursor: pointer;\n}\n\n.last-opened {\n    display: flex;\n    align-items: center;\n}\n\n.last-opened-text {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 680;\n    margin-left: 20px;\n    margin-top: 15px;\n}\n\n.last-open-icon {\n    color: #616161;\n    font-size: 20px;\n    margin-left: 5px;\n}\n\n.each-card {\n    height: 330px;\n    width: 280px;\n    margin-bottom: 26px;\n    border-radius: 10px;\n    box-shadow: 1px 1px 2px #21212129;\n}\n\n\n.card-logo {\n    border-radius: 9px 9px 0px 0px;\n}\n\n.name-input-div {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 18px;\n}\n\n.input-label {\n    color: #000000;\n    font-weight: 500;\n    font-family: \'Roboto\';\n    font-size: 14px;\n    margin-left: 6px;\n}\n\n.label-value {\n    color: #151233;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    font-family: "ROBOTO";\n}\n\n.card-title {\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n    color: #00559f;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.card-description {\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n    color: #757575;\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n\n.card-info {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 700;\n    margin-bottom: 20px;\n}\n\n.vertical-dot-icon {\n    font-size: 24px;\n}\n\n.dot-icon {\n    margin-top: -3px !important;\n    color: #909090;\n    text-align: end;\n}\n\n.card-mpt {\n    font-size: 14px;\n    color: #757575;\n    font-weight: 600;\n}\n\n.card-numbers {\n    color: #00559f;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.open-in-studio {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    color: #212121;\n    font-weight: 500;\n    font-size: 16px;\n    padding-top: 21px;\n    letter-spacing: 0.02px;\n    margin-left: 23px;\n    font-family: \'Roboto\';\n}\n\n.dashes {\n    border-left: 2px solid #dee1e2;\n    border-right: 2px solid #dee1e2;\n    height: 35px;\n}\n\n.table-logo {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    padding-right: 2px;\n}\n\n.vue-table .VueTables__search-field label {\n    display: none\n}\n\n.vue-table .form-control {\n    border: 1px solid #BCBCBC;\n    color: #212121\n}\n\n.vue-table .form-control:focus {\n    box-shadow: none;\n    border-color: #BCBCBC;\n}\n\n.vue-table table {\n    border: 1px solid #E3E3E3;\n    margin-top: 12px;\n    margin-bottom: 20px;\n    /* border-radius: 10px; */\n    vertical-align: middle;\n    width: 100%;\n}\n\n.vue-table table tbody {\n    border-top: none !important;\n}\n\n.vue-table .td-border {\n    border-left: 4px solid #00559f !important;\n    display: flex;\n    align-items: center;\n}\n\n.vue-table th {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 500;\n    border: none;\n    background: #F5F5F5 !important;\n    padding: 8px 0 8px 20px;\n}\n\n.vue-table td {\n    color: #212121 !important;\n    font-size: 14px;\n    border: none;\n    background: #FFFFFF;\n    padding: 8px 0 8px 20px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 209px;\n    white-space: nowrap;\n}\n\n.vue-table .table-container {\n    border: 1px solid #e0e0e0;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px #00000029;\n}\n\n.vue-table tbody>tr:hover td {\n    background-color: #eeeeee;\n}\n\n.vue-table .VuePagination {\n    margin: 0;\n}\n\n.vue-table .VuePagination nav {\n    display: flex;\n    padding: 0;\n}\n\n.vue-table .VuePagination nav ul {\n    margin: 0;\n    margin-left: auto;\n    align-items: center;\n\n}\n\n.vue-table .VuePagination nav p {\n    display: none\n}\n\n.vue-table .VuePagination .page-link {\n    border: none;\n    color: #616161;\n    font-size: 14px;\n}\n\n.vue-table .VuePagination .page-link:hover {\n    background-color: #EEEEEE;\n}\n\n.vue-table .VuePagination .page-link.active {\n    background-color: #151233;\n    color: #FFFFFF;\n    border-radius: 4px;\n}\n\n.vue-table .VuePagination .page-link:focus {\n    box-shadow: none;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page .page-link,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page .page-link {\n    color: #151233;\n    background: none;\n    font-size: 18px;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page .page-link:hover,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page .page-link:hover {\n    background: none;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page.disabled .page-link,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page.disabled .page-link {\n    color: #BCBCBC;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-chunk,\n.vue-table .VuePagination .VuePagination__pagination-item-next-chunk {\n    display: none;\n}\n\n.VueTables__child-row-toggler {\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    display: block;\n    margin: auto;\n    text-align: center;\n}\n\n.VueTables__child-row-toggler--closed::before {\n    font-family: "Material Design Icons";\n    content: "\\F0143";\n}\n\n.VueTables__child-row-toggler--open::before {\n    font-family: "Material Design Icons";\n    content: "\\F0140";\n}\n\n.node-text {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--grey-darken-4);\n    text-align: left;\n    font: normal normal normal 16px/21px Roboto;\n    letter-spacing: 0px;\n    color: #212121;\n    opacity: 1;\n}\n\n.deploy-screen-disabled-node .node-text {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--grey-darken-4);\n    text-align: left;\n    font: normal normal normal 16px/21px Roboto;\n    letter-spacing: 0px;\n    color: gray;\n    opacity: 1;\n}\n\n.deploy-screen-disabled-icon {\n    color: gray !important;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #BDBDBD;\n    border-radius: 8px;\n    border: 4px solid transparent;\n    background-clip: padding-box;\n}\n\n::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n::-webkit-scrollbar {\n    background: transparent;\n}\n\ndiv[class="node-wrapper deploy-screen-disabled-node"] .checkbox-wrapper {\n    background: #eeede7 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="node-wrapper focused deploy-screen-disabled-node"] .checkbox-wrapper {\n    background: #eeede7 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="checkbox-wrapper checked"] {\n    background: #151233 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="checkbox-wrapper indeterminate"] {\n    background: #151233 0% 0% no-repeat padding-box !important;\n}\n\n.user-menu-border {\n    border-bottom: 1px solid #eee;\n    margin: 8px;\n}',""]);const l=r},7638:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var l=0;l<this.length;l++){var p=this[l][0];null!=p&&(r[p]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);t&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),o&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=o):s[2]=o),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},8375:n=>{n.exports=function(n){return n[1]}},17450:n=>{var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var i={},r=[],l=0;l<n.length;l++){var p=n[l],d=t.base?p[0]+t.base:p[0],s=i[d]||0,c="".concat(d," ").concat(s);i[d]=s+1;var u=o(c),v={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(v);else{var g=a(v,t);t.byIndex=l,e.splice(l,0,{identifier:c,updater:g,references:1})}r.push(c)}return r}function a(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var l=o(i[r]);e[l].references--}for(var p=t(n,a),d=0;d<i.length;d++){var s=o(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=p}}},16199:n=>{var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},62916:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},40458:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},29530:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,a&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},92165:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},32525:(n,e)=>{e.Z=(n,e)=>{const o=n.__vccOpts||n;for(const[n,t]of e)o[n]=t;return o}},91743:(n,e,o)=>{o.d(e,{L:()=>i});let t=!1;new Promise((n=>n())).then((()=>t=!0)),"undefined"!=typeof doNothing&&doNothing();const a=!0===t;function i(n,e={}){let o,t,i;const r=n=>{i&&clearTimeout(i),i=setTimeout((()=>{t(new Error(`The operation has timed out. timeoutValue  : ${n}`))}),n)};return n&&r(n),{startTimer:r,promise:new Promise(((n,i)=>{var r;r=n,o=a&&e.fixSyncResolve?n=>setTimeout((()=>r(n))):r,t=i})),resolver:o,reject:t}}},5627:(n,e,o)=>{o.d(e,{OH:()=>p,b2:()=>t.b2,bh:()=>l,f3:()=>t.f3,nC:()=>t.nC,tu:()=>i});var t=o(53266),a=o(91743);function i(n){let e;return()=>e||(e=n())}function r(){const n=(0,a.L)();return setTimeout((()=>{n.resolver()}),100),n.promise}async function l(n,e){await p([n]);const o=t.nC.resolve(n);await e(o)}async function p(n,e){let o=!1;for(;!o;)try{n.forEach((n=>t.nC.resolve(n))),o=!0}catch(n){await r()}await(null==e?void 0:e())}},38695:(n,e,o)=>{o.d(e,{T:()=>t});const t=Symbol.for("IFormValidator")},1937:(n,e,o)=>{o.d(e,{Ax:()=>a,v5:()=>t});const t=Symbol.for("IRouter");function a(n){}},83487:(n,e,o)=>{o.d(e,{y:()=>t});const t=Symbol.for("IUseCaseExecutor")},38223:(n,e,o)=>{o.d(e,{Z:()=>H});var t=o(71093),a=o(66190),i=o(46233),r=o(73843),l=o(5627),p=o(38695);const d={key:0,class:"infoText"},s={key:1,class:"hover-info"},c=(n=>((0,t.dD)("data-v-32ae2707"),n=n(),(0,t.Cn)(),n))((()=>(0,t._)("i",{class:"mdi mdi-information",style:{"font-size":"20px"}},null,-1))),u={class:"button-tooltip"},v={class:"popover__wrapper"},g=["placeholder","id","disabled"],x=["id","placeholder","type","disabled"],f={style:{height:"100%"},class:"errorDiv"},m={class:"errorContent"},b={class:"popoverText"},h=(0,t.aZ)({__name:"IDEInput",props:{elementId:null,isRequired:{type:Boolean},infoText:null,placeholder:null,type:null,textAreaHeight:null,value:null,validations:null,disableRequiredIcon:{type:Boolean},infoHover:null,isDisabled:{type:Boolean}},emits:["validateStatus","getValue"],setup(n,{emit:e}){const o=n,h=l.nC.resolve(p.T),y=(0,r.iH)([]),w=(0,r.iH)(!1),_=(0,r.iH)(o.value||""),k=(0,r.iH)(!o.isRequired),z=(0,r.iH)(!1);function C(){A()}function F(){w.value=!1}function E(){e("getValue",_.value),z.value=!0,A()}function A(){return o.isRequired&&0==_.value.length?(y.value=[],void V(!1)):!o.isRequired&&0==_.value.length||!o.validations?(y.value=[],void V(!0)):(y.value=h.validate(_.value,o.validations),void V(!(0!=y.value.filter((n=>0==n.isValid)).length&&_.value.length>0)))}function V(n){e("validateStatus",n),w.value=!n,k.value=n}return A(),(0,t.YP)((()=>o.value),(n=>{_.value=null!=n?n:""})),(e,r)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[n.infoText?((0,t.wg)(),(0,t.iD)("span",d,(0,a.toDisplayString)(n.infoText),1)):(0,t.kq)("v-if",!0),n.infoHover?((0,t.wg)(),(0,t.iD)("span",s,[c,(0,t._)("span",u,(0,a.toDisplayString)(n.infoHover),1)])):(0,t.kq)("v-if",!0),(0,t._)("div",null,[(0,t._)("div",v,["textarea"==o.type?(0,t.wy)(((0,t.wg)(),(0,t.iD)("textarea",{key:0,class:"textAreaClass",style:(0,a.normalizeStyle)((z.value?"border: 1px solid "+(k.value?"#A1A1A1;":"red;"):"")+(o.textAreaHeight?" height:"+o.textAreaHeight:"")),placeholder:o.placeholder,"onUpdate:modelValue":r[0]||(r[0]=n=>_.value=n),onInput:r[1]||(r[1]=n=>E()),id:o.elementId,onFocus:r[2]||(r[2]=n=>C()),onBlur:r[3]||(r[3]=n=>F()),disabled:n.isDisabled},null,44,g)),[[i.vModelText,_.value]]):(0,t.wy)(((0,t.wg)(),(0,t.iD)("input",{key:1,id:o.elementId,class:"inputClass",placeholder:o.placeholder,type:o.type,"onUpdate:modelValue":r[4]||(r[4]=n=>_.value=n),style:(0,a.normalizeStyle)(z.value?"border: 1px solid "+(k.value?"#A1A1A1;":"red;"):""),onInput:r[5]||(r[5]=n=>E()),onFocus:r[6]||(r[6]=n=>C()),onBlur:r[7]||(r[7]=n=>F()),disabled:n.isDisabled},null,44,x)),[[i.vModelDynamic,_.value]]),w.value&&y.value.length>0?((0,t.wg)(),(0,t.iD)("div",{key:2,class:(0,a.normalizeClass)("textarea"==o.type?"popover__content popover__content_textArea":"popover__content popover__content_input")},[(0,t._)("div",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.value,(n=>((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("i",{class:(0,a.normalizeClass)(n.isValid?"popoverIcon mdi mdi-check-circle":"popoverIcon mdi mdi-close-circle closeIcon")},null,2),(0,t._)("a",b,(0,a.toDisplayString)(n.message),1)])))),256))])],2)):(0,t.kq)("v-if",!0)])])],64))}});var y=o(17450),w=o.n(y),_=o(29530),k=o.n(_),z=o(16199),C=o.n(z),F=o(40458),E=o.n(F),A=o(62916),V=o.n(A),D=o(92165),T=o.n(D),S=o(26149),I={};I.styleTagTransform=T(),I.setAttributes=E(),I.insert=C().bind(null,"head"),I.domAPI=k(),I.insertStyleElement=V(),w()(S.Z,I),S.Z&&S.Z.locals&&S.Z.locals;const H=(0,o(32525).Z)(h,[["__scopeId","data-v-32ae2707"]])},5730:(n,e,o)=>{o.r(e),o.d(e,{default:()=>nn});var t=o(71093),a=o(66190),i=o(73843),r=o(5627),l=o(1937),p=o(38223),d=o(19496);const s={class:"autocomplete"},c={class:"label"},u=["placeholder","value"],v={key:0,class:"autocomplete-items"},g={key:0},x=["onMousedown"],f=(0,t.aZ)({__name:"autocomplete",props:{options:{type:Array,required:!0},placeholder:{type:String,default:""},value:{type:String,default:""},label:{type:String}},emits:["changeValue"],setup(n,{emit:e}){const o=n,r=(0,i.iH)(o.value),l=(0,i.iH)(!1),p=(0,i.iH)([]);function d(n){const t=n.target.value;r.value=t,p.value=o.options.filter((n=>n.name.includes(t)));const a=o.options.find((n=>n.name===t));a?f(a):e("changeValue",t)}function f(n){r.value=n.name,l.value=!1,e("changeValue",n.value)}function m(){l.value=!l.value}function b(){l.value=!1}return(0,t.YP)((()=>o.options),(n=>{p.value=n})),(e,i)=>((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",{onClick:m,onFocusout:b,tabindex:"0"},[(0,t._)("span",c,(0,a.toDisplayString)(o.label),1),(0,t._)("input",{placeholder:n.placeholder,value:r.value,onInput:d},null,40,u),(0,t._)("span",{class:(0,a.normalizeClass)(["icon-arrow mdi",l.value?"mdi-chevron-up":"mdi-chevron-down"])},null,2)],32),l.value?((0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("ul",null,[0===p.value.length?((0,t.wg)(),(0,t.iD)("li",g,"No data")):(0,t.kq)("v-if",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(p.value,(n=>((0,t.wg)(),(0,t.iD)("li",{key:n.value,class:"option",onMousedown:e=>f(n)},(0,a.toDisplayString)(n.name),41,x)))),128))])])):(0,t.kq)("v-if",!0)]))}});var m=o(17450),b=o.n(m),h=o(29530),y=o.n(h),w=o(16199),_=o.n(w),k=o(40458),z=o.n(k),C=o(62916),F=o.n(C),E=o(92165),A=o.n(E),V=o(93405),D={};D.styleTagTransform=A(),D.setAttributes=z(),D.insert=_().bind(null,"head"),D.domAPI=y(),D.insertStyleElement=F(),b()(V.Z,D),V.Z&&V.Z.locals&&V.Z.locals;var T=o(32525);const S=(0,T.Z)(f,[["__scopeId","data-v-ce7ebd40"]]);var I=o(83487);const H=n=>((0,t.dD)("data-v-37946342"),n=n(),(0,t.Cn)(),n),P={class:"container d-flex justify-content-center align-items-center h-100"},Z={class:"card w-full"},B=H((()=>(0,t._)("div",{class:"card-header"}," Select or Create User ",-1))),R={class:"card-body"},M={class:"row"},q={class:"col"},O={class:"col"},U={class:"row mt-2"},j={class:"col"},N=H((()=>(0,t._)("span",{class:"select-name"},"Roles",-1))),L={class:"col"},Y=H((()=>(0,t._)("span",{class:"select-name"},"Swimlane",-1))),W={class:"card-footer d-flex justify-content-end"},K=["disabled"],G=(0,t.aZ)({__name:"preDashboard",setup(n){const e=r.nC.resolve(I.y),o=(0,i.iH)([]),s=(0,i.iH)([]),c=(0,i.iH)([]),u=(0,i.iH)([]),v=(0,i.iH)(""),g=(0,i.iH)(""),x=(0,i.iH)([]),f=(0,i.iH)([]),m=(0,i.iH)(!1),b=(0,i.iH)(!1),h=(0,i.iH)(!1),y=(0,i.iH)({name:{minAndMaxLength:{min:2,max:40},availableCharacters:!0,nonSpaceCharacter:!0}}),w=(0,i.iH)(!1),_=window.workflow;(0,t.bv)((async()=>{e.execute((async()=>{u.value=await _.listUsers(),function(){let n=[];u.value.forEach((e=>{n.push({name:e.name,value:e.id})})),o.value=n}(),s.value=_.listUserRoles().map((n=>({name:n,value:n}))),c.value=_.listSwimlanes().map((n=>({name:n,value:n})))}),{loading:!0})}));const k=(0,t.Fl)((()=>!w||!v.value||0==x.value.length||0==f.value.length));function z(n){v.value=n;const e=u.value.find((e=>e.id===n));m.value=b.value=h.value=!!e,e&&(g.value=e.unit,x.value=e.roles,f.value=e.swimlane||[])}function C(n){g.value=n}function F(n){x.value=n.map((n=>n.name))}function E(n){f.value=n.map((n=>n.name))}async function A(){e.execute((async()=>{var n;const e=(null===(n=u.value.find((n=>n.id===v.value)))||void 0===n?void 0:n.name)||"",o={id:v.value,unit:g.value,name:e,roles:x.value,swimlane:f.value};await _.insertUser(o);const t=r.nC.resolve(l.v5);await t.push("../processlivepreview/dashboard")}),{loading:!0})}function V(n){w.value=n}return(n,e)=>((0,t.wg)(),(0,t.iD)("div",P,[(0,t._)("div",Z,[B,(0,t._)("div",R,[(0,t._)("div",M,[(0,t._)("div",q,[(0,t.Wm)(S,{label:"Username",options:o.value,onChangeValue:z},null,8,["options"])]),(0,t._)("div",O,[(0,t.Wm)(p.Z,{"element-id":"preDashboardUnit",isRequired:!0,placeholder:"",type:"text","info-text":"Unit",value:g.value,onGetValue:C,isDisabled:m.value,onValidateStatus:V,validations:y.value.name},null,8,["value","isDisabled","validations"])])]),(0,t._)("div",U,[(0,t._)("div",j,[N,(0,t.Wm)(d.Z,{class:"role",options:s.value,multiple:!0,disabled:b.value,defaultMultiple:x.value.map((n=>({name:n}))),multipleSelectedClass:"role-tag-name",onInput:F},null,8,["options","disabled","defaultMultiple"])]),(0,t._)("div",L,[Y,(0,t.Wm)(d.Z,{class:"role",options:c.value,multiple:!0,disabled:h.value,defaultMultiple:f.value.map((n=>({name:n}))),multipleSelectedClass:"role-tag-name",onInput:E},null,8,["options","disabled","defaultMultiple"])])])]),(0,t._)("div",W,[(0,t._)("button",{class:"continue-button",style:(0,a.normalizeStyle)({opacity:(0,i.SU)(k)?"0.5":"1"}),disabled:(0,i.SU)(k),onClick:A},"Continue",12,K)])])]))}});var J=o(57793),$={};$.styleTagTransform=A(),$.setAttributes=z(),$.insert=_().bind(null,"head"),$.domAPI=y(),$.insertStyleElement=F(),b()(J.Z,$),J.Z&&J.Z.locals&&J.Z.locals;var Q=o(65013),X={};X.styleTagTransform=A(),X.setAttributes=z(),X.insert=_().bind(null,"head"),X.domAPI=y(),X.insertStyleElement=F(),b()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;const nn=(0,T.Z)(G,[["__scopeId","data-v-37946342"]])}}]);