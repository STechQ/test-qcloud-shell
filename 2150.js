"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[2150],{98509:(n,e,i)=>{i.d(e,{Z:()=>s});var t=i(34663),a=i.n(t),o=i(7638),l=i.n(o)()(a());l.push([n.id,"\n*[data-v-82ee48d2] {\n        font-family: 'Roboto';\n}\n.container[data-v-82ee48d2] {\n        padding: 32px 20px 20px;\n}\n.name-label[data-v-82ee48d2] {\n        font-weight: 500;\n        font-size: 15px;\n        line-height: 18px;\n        color: #151233;\n        margin-bottom: 4px;\n}\n.e-mail-input[data-v-82ee48d2] {\n        border: 1px solid #BCBCBC;\n        border-radius: 4px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        padding: 8px 8px 8px 12px;\n        width: 95%;\n        font-size: 15px;\n        color: #212121;\n        outline: none;\n}\n.e-mail-input[data-v-82ee48d2]::placeholder {\n        color: #BCBCBC\n}\n.buttons-div[data-v-82ee48d2] {\n        display: flex;\n        justify-content: end;\n}\n.cancel-button[data-v-82ee48d2] {\n        font-weight: 500;\n        font-size: 16px;\n        text-align: center;\n        color: #757575;\n        display: flex;\n        align-items: center;\n        padding: 8px 16px;\n        border-radius: 4px;\n        margin-right: 4px;\n        border: none;\n        background: transparent;\n}\n.send-invite-button[data-v-82ee48d2] {\n        font-weight: 500;\n        font-size: 16px;\n        text-align: center;\n        color: #FFFFFF;\n        background: #151233;\n        display: flex;\n        align-items: center;\n        padding: 8px 16px;\n        border-radius: 4px;\n        border: none;\n}\n.send-invite-button[data-v-82ee48d2]:disabled {\n        color: #757575\n}\n.button-tooltip[data-v-82ee48d2] {\n        visibility: hidden;\n        position: absolute;\n        background: #757575;\n        color: #FFFFFF;\n        font-size: 11px;\n        font-family: 'Roboto';\n        text-align: center;\n        border-radius: 4px;\n        letter-spacing: 0.2px;\n        padding: 6px 8px 6px 8px;\n        top: 56px;\n        left: 63px;\n        opacity: 0;\n}\n.send-invite-button:disabled:hover + .button-tooltip[data-v-82ee48d2] {\n        visibility: visible;\n        transition: opacity 0.3s ease-out 0.5s;\n        opacity: 1;\n}\n.remove-field[data-v-82ee48d2] {\n        display: none;\n        padding: 0 5px;\n        width: 5%;\n}\n.e-mail-addresses[data-v-82ee48d2] {\n        display: flex;\n        margin-bottom: 10px;\n}\n.e-mail-input:hover + .remove-field[data-v-82ee48d2],\n    .remove-field[data-v-82ee48d2]:hover {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 24px;\n        cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/organization/invitePeopleDialog.vue"],names:[],mappings:";AAmII;QACI,qBAAqB;AACzB;AACA;QACI,uBAAuB;AAC3B;AACA;QACI,gBAAgB;QAChB,eAAe;QACf,iBAAiB;QACjB,cAAc;QACd,kBAAkB;AACtB;AACA;QACI,yBAAyB;QACzB,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,eAAe;QACf,cAAc;QACd,aAAa;AACjB;AACA;QACI;AACJ;AACA;QACI,aAAa;QACb,oBAAoB;AACxB;AACA;QACI,gBAAgB;QAChB,eAAe;QACf,kBAAkB;QAClB,cAAc;QACd,aAAa;QACb,mBAAmB;QACnB,iBAAiB;QACjB,kBAAkB;QAClB,iBAAiB;QACjB,YAAY;QACZ,uBAAuB;AAC3B;AACA;QACI,gBAAgB;QAChB,eAAe;QACf,kBAAkB;QAClB,cAAc;QACd,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,iBAAiB;QACjB,kBAAkB;QAClB,YAAY;AAChB;AACA;QACI;AACJ;AACA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,mBAAmB;QACnB,cAAc;QACd,eAAe;QACf,qBAAqB;QACrB,kBAAkB;QAClB,kBAAkB;QAClB,qBAAqB;QACrB,wBAAwB;QACxB,SAAS;QACT,UAAU;QACV,UAAU;AACd;AACA;QACI,mBAAmB;QACnB,sCAAsC;QACtC,UAAU;AACd;AACA;QACI,aAAa;QACb,cAAc;QACd,SAAS;AACb;AACA;QACI,aAAa;QACb,mBAAmB;AACvB;AACA;;QAEI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,eAAe;QACf,eAAe;AACnB",sourcesContent:['<template>\n    <div class="container">\n        <div class="label-div">\n            <label class="name-label">Email Adresses</label>\n        </div>\n        <div style="overflow: auto; max-height: 470px;">\n            <div v-for="(field, index) in invitations" :key="index" class="e-mail-addresses">\n                <input class="e-mail-input" :ref="\'field-\' + index" v-model="field.mail" @paste="handlePaste($event, index)" size="50" @input="addField(); field.mail = field.mail.toLowerCase()"\n                    placeholder="name@example.com" />\n                <span class="remove-field" @click="removeField(index)"><i class="mdi mdi-close"></i></span>\n             </div>\n        </div>\n        <StudioInfo style="margin:20px 0px 52px" :infoText="`You can copy and paste multiple email addresses at once by using \',\' between items.`"></StudioInfo>\n        <div class="buttons-div">\n            <button class="cancel-button" @click="close()">Cancel</button>\n            <button id="sendButton" class="send-invite-button" :disabled="!checkEmailValidation() || checkDuplicateEmails()" @click="inviteMember">{{props.onBackoffice ? \'ADD OWNER\' : \'SEND INVITATION\'}}</button>\n            <span v-if="!checkEmailValidation()" class="button-tooltip" style="top: 340px; left: 470px; z-index: 1; width: 174px;">Email addresses must be valid.</span>\n            <span v-if="checkDuplicateEmails()" class="button-tooltip" style="top: 340px; left: 470px; z-index: 1; width: 174px;">There are duplicate mails.</span>\n        </div>\n    </div>\n</template>\n<script setup lang="ts">\n    import { ref } from "vue";\n    import { container } from "../../../../../domain/core/diContainer";\n    import { IUseCaseExecutor } from "../../../../../domain/useCase/IUseCaseExecutor";\n    import { IViewModel } from "../../../../../domain/viewModel/IViewModel";\n    import { IRouter } from "../../../../../domain/presentation/IRouter";\n    import StudioInfo from "../../ui/studioInfoComp.vue"\n    \n    import { IInvitationRequestItem } from "../../../../../../../common/qCloudTemp/symDtoObjects";\n    \n    interface IInvitationProps{\n        ID?: string;\n        action?: \'add\' | \'remove\';\n        onBackoffice?: boolean;\n        inviteCb: (request: {invitations: Array<IInvitationRequestItem>, ID?: string, action?: \'add\' | \'remove\'}) => Promise<void>;\n    }\n\n    interface IInvitationItem {\n        mail: string;\n        name?: string;\n        id?: string;\n    }\n    const props = defineProps<IInvitationProps>();\n    type InvitationList = Array<IInvitationItem>;\n    const viewModel = container.resolve<IViewModel>(IViewModel);\n    const executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\n    const router = container.resolve<IRouter>(IRouter);\n    const selectedOrganizationId = ref(viewModel.user?.selectedOrganization?.id);\n    const emit = defineEmits(["close"]);\n    const invitations = ref<InvitationList>([{ mail: "" }, { mail: "" },{ mail: "" }]);\n    const addField = (value?: IInvitationItem) => {\n        let emptyInputCount: number = 0;\n        invitations.value.forEach(element => {\n            if(element.mail == "") {\n                emptyInputCount++\n            }\n        });\n        if(emptyInputCount == 0) {\n            invitations.value.push(value || { mail: "" });\n        }\n    };\n    function close() {\n        emit("close");\n    }\n    const removeField = (index: number) => {\n        if (invitations.value.length <= 1) { insertField(0, undefined, true); return false; }\n        invitations.value.splice(index, 1); return true;\n    };\n    const checkEmailValidation = () => {\n        let areAllEmailsValid = true;\n        let emptyMailCount = 0;\n        invitations.value.forEach(invite => {\n            if(invite.mail != \'\' && !validateMail(invite.mail)) {\n                areAllEmailsValid = false;\n                return areAllEmailsValid;\n            }\n        });\n        invitations.value.forEach(invite => {\n            if(invite.mail == \'\') {\n                emptyMailCount++;\n            }\n        })\n        if(emptyMailCount == invitations.value.length) {\n            areAllEmailsValid = false;\n        }\n        return areAllEmailsValid;\n    }\n    function checkDuplicateEmails () {\n        const emailAddresses = invitations.value.filter(item => item.mail != \'\').map(function(item){ return item.mail; })\n        const isDuplicate = emailAddresses.some(function(item, idx){ return emailAddresses.indexOf(item) != idx;} );\n        return isDuplicate;\n    }\n    const insertField = (index: number, value: IInvitationItem | undefined, override: boolean) => {\n        value = value || { mail: "" };\n        if (override) {\n            invitations.value.splice(index, 1, value);\n        } else {\n            invitations.value.splice(index, 0, value);\n        }\n    };\n    const handlePaste = (event: ClipboardEvent, index: number) => {\n        const { clipboardData } = event;\n        if (!clipboardData) { return; }\n\n        event.preventDefault();\n        const text = clipboardData.getData(\'text\');\n        const values = text.split(/[\\s;]+/);\n\n        const override = invitations.value[index].mail == "";\n\n        insertField(index, { mail: values[0] }, override);\n        values.slice(1).forEach((value, curIndex) => insertField(index + curIndex + 1, { mail: value }, false));\n    }\n    function onManageOrganization() {\n        router.push(`/main/manage/${selectedOrganizationId.value}`);\n    }\n    const inviteMember = async () => {\n        executor.execute(async () => {\n            const mails = invitations.value.map(inv => ({ email: inv.mail }));\n            props.inviteCb && await props.inviteCb({invitations: mails, ID: props.ID, action: props.action });\n            while (removeField(0));\n            close();\n            if(!props.onBackoffice) { onManageOrganization() };\n        }, { loading: true });\n    };\n    const validateMail = (email: string) => !email ? true : /^(?=.{1,64}@)[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,})$/.test(email); //RFC 5322-compliant 🤔\n    // /(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/.test(email); // 🤯 https://www.w3resource.com/javascript/form/email-validation.php // ne halt ettiğini anlamadım, isterseniz içinde 1 @ ve 1 . var mı diye de bakabiliriz. 😂\n\n<\/script>\n<style scoped>\n    * {\n        font-family: \'Roboto\';\n    }\n    .container {\n        padding: 32px 20px 20px;\n    }\n    .name-label {\n        font-weight: 500;\n        font-size: 15px;\n        line-height: 18px;\n        color: #151233;\n        margin-bottom: 4px;\n    }\n    .e-mail-input {\n        border: 1px solid #BCBCBC;\n        border-radius: 4px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        padding: 8px 8px 8px 12px;\n        width: 95%;\n        font-size: 15px;\n        color: #212121;\n        outline: none;\n    }\n    .e-mail-input::placeholder {\n        color: #BCBCBC\n    }   \n    .buttons-div {\n        display: flex;\n        justify-content: end;\n    }\n    .cancel-button {\n        font-weight: 500;\n        font-size: 16px;\n        text-align: center;\n        color: #757575;\n        display: flex;\n        align-items: center;\n        padding: 8px 16px;\n        border-radius: 4px;\n        margin-right: 4px;\n        border: none;\n        background: transparent;\n    }\n    .send-invite-button {\n        font-weight: 500;\n        font-size: 16px;\n        text-align: center;\n        color: #FFFFFF;\n        background: #151233;\n        display: flex;\n        align-items: center;\n        padding: 8px 16px;\n        border-radius: 4px;\n        border: none;\n    }\n    .send-invite-button:disabled {\n        color: #757575\n    }\n    .button-tooltip {\n        visibility: hidden;\n        position: absolute;\n        background: #757575;\n        color: #FFFFFF;\n        font-size: 11px;\n        font-family: \'Roboto\';\n        text-align: center;\n        border-radius: 4px;\n        letter-spacing: 0.2px;\n        padding: 6px 8px 6px 8px;\n        top: 56px;\n        left: 63px;\n        opacity: 0;\n    }\n    .send-invite-button:disabled:hover + .button-tooltip {\n        visibility: visible;\n        transition: opacity 0.3s ease-out 0.5s;\n        opacity: 1;\n    } \n    .remove-field {\n        display: none;\n        padding: 0 5px;\n        width: 5%;\n    }\n    .e-mail-addresses {\n        display: flex;\n        margin-bottom: 10px;\n    }\n    .e-mail-input:hover + .remove-field,\n    .remove-field:hover {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 24px;\n        cursor: pointer;\n    }\n</style>'],sourceRoot:""}]);const s=l},97554:(n,e,i)=>{i.d(e,{Z:()=>s});var t=i(34663),a=i.n(t),o=i(7638),l=i.n(o)()(a());l.push([n.id,'\n*[data-v-3f1afca0] {\n        font-family: "Roboto";\n}\n.info-div[data-v-3f1afca0] {\n        background: #F5F5FA;\n        border-radius: 4px;\n        width: 100%;\n}\n.info-text[data-v-3f1afca0] {\n        color: #757575;\n        font-size: 14px;\n        display: flex;\n        align-items: center;\n}\n.info-text i[data-v-3f1afca0] {\n        font-size: 24px;\n        color: #151233;\n        margin-right: 8px;\n}\n.text-area[data-v-3f1afca0] {\n        border-radius: 4px;\n        color: #212121;\n        padding: 0px 8px;\n        font-size: 12px;\n        height: 32px;\n        font-weight: 500;\n        background: #FFFFFF;\n        display: flex;\n        align-items: center;\n        margin-top: 10px;\n}\n.copy-icon[data-v-3f1afca0] {\n        font-size: 16px;\n        color: #151233;\n        margin-left: auto;\n        font-weight: 400;\n        cursor: pointer;\n}\n.icon-tooltip[data-v-3f1afca0] {\n        position: absolute;\n        background: #757575;\n        color: #FFFFFF;\n        font-size: 11px;\n        text-align: center;\n        border-radius: 4px;\n        padding: 5px 8px;\n        right: 35px;\n        top: 200px;\n}\n',"",{version:3,sources:["webpack://./src/presentation/vue3/components/ui/studioInfoComp.vue"],names:[],mappings:";AAkCI;QACI,qBAAqB;AACzB;AACA;QACI,mBAAmB;QACnB,kBAAkB;QAClB,WAAW;AACf;AACA;QACI,cAAc;QACd,eAAe;QACf,aAAa;QACb,mBAAmB;AACvB;AACA;QACI,eAAe;QACf,cAAc;QACd,iBAAiB;AACrB;AACA;QACI,kBAAkB;QAClB,cAAc;QACd,gBAAgB;QAChB,eAAe;QACf,YAAY;QACZ,gBAAgB;QAChB,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,gBAAgB;AACpB;AACA;QACI,eAAe;QACf,cAAc;QACd,iBAAiB;QACjB,gBAAgB;QAChB,eAAe;AACnB;AACA;QACI,kBAAkB;QAClB,mBAAmB;QACnB,cAAc;QACd,eAAe;QACf,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,WAAW;QACX,UAAU;AACd",sourcesContent:['<template>\n    <div class="info-div" :style="{padding: props.textAreaValue ? \'12px\' : \'5px 12px\'}">\n        <div class="info-text">\n            <i class="mdi mdi-information"></i>\n            <span v-html="props.infoText"></span>\n        </div>\n        <div class="text-area" v-if="props.textAreaValue">\n            {{ props.textAreaValue }}\n            <i class="mdi mdi-content-copy copy-icon" @click="copyText()"></i>\n            <span v-show="showTooltip" class="icon-tooltip">Text copied!</span>\n        </div>\n    </div>\n</template>\n<script setup lang="ts">\n    import { ref } from "vue";\n\n    interface IInfoCompProp {\n        infoText: string,\n        textAreaValue?: string;\n    }\n    const props = defineProps<IInfoCompProp>();\n    const showTooltip = ref(false);\n    function copyText() {\n        if(props.textAreaValue) {\n            navigator.clipboard.writeText(props.textAreaValue);\n            showTooltip.value = true;\n            setTimeout(() => {\n                showTooltip.value = false;\n            }, 2000);\n        }\n\n    }\n<\/script>\n<style scoped>\n    * {\n        font-family: "Roboto";\n    }\n    .info-div {\n        background: #F5F5FA;\n        border-radius: 4px;\n        width: 100%;\n    }\n    .info-text {\n        color: #757575;\n        font-size: 14px;\n        display: flex;\n        align-items: center;\n    }\n    .info-text i {\n        font-size: 24px;\n        color: #151233;\n        margin-right: 8px;\n    }\n    .text-area {\n        border-radius: 4px;\n        color: #212121;\n        padding: 0px 8px;\n        font-size: 12px;\n        height: 32px;\n        font-weight: 500;\n        background: #FFFFFF;\n        display: flex;\n        align-items: center;\n        margin-top: 10px;\n    }\n    .copy-icon {\n        font-size: 16px;\n        color: #151233;\n        margin-left: auto;\n        font-weight: 400;\n        cursor: pointer;\n    }\n    .icon-tooltip {\n        position: absolute;\n        background: #757575;\n        color: #FFFFFF;\n        font-size: 11px;\n        text-align: center;\n        border-radius: 4px;\n        padding: 5px 8px;\n        right: 35px;\n        top: 200px;\n    }\n</style>'],sourceRoot:""}]);const s=l},12150:(n,e,i)=>{i.r(e),i.d(e,{default:()=>R});var t=i(71093),a=i(46233),o=i(66190),l=i(73843),s=i(5627),r=i(83487),A=i(88613),d=i(1937),p=i(74720);const c=n=>((0,t.dD)("data-v-82ee48d2"),n=n(),(0,t.Cn)(),n),u={class:"container"},m=c((()=>(0,t._)("div",{class:"label-div"},[(0,t._)("label",{class:"name-label"},"Email Adresses")],-1))),x={style:{overflow:"auto","max-height":"470px"}},v=["onUpdate:modelValue","onPaste","onInput"],f=["onClick"],C=[c((()=>(0,t._)("i",{class:"mdi mdi-close"},null,-1)))],B={class:"buttons-div"},g=["disabled"],b={key:0,class:"button-tooltip",style:{top:"340px",left:"470px","z-index":"1",width:"174px"}},h={key:1,class:"button-tooltip",style:{top:"340px",left:"470px","z-index":"1",width:"174px"}},Q=(0,t.aZ)({__name:"invitePeopleDialog",props:{ID:null,action:null,onBackoffice:{type:Boolean},inviteCb:{type:Function}},emits:["close"],setup(n,{emit:e}){var i,c;const Q=n,y=s.nC.resolve(A.J),I=s.nC.resolve(r.y),k=s.nC.resolve(d.v5),w=(0,l.iH)(null===(c=null===(i=y.user)||void 0===i?void 0:i.selectedOrganization)||void 0===c?void 0:c.id),F=(0,l.iH)([{mail:""},{mail:""},{mail:""}]);function z(){e("close")}const D=n=>F.value.length<=1?(_(0,void 0,!0),!1):(F.value.splice(n,1),!0),E=()=>{let n=!0,e=0;return F.value.forEach((e=>{if(""!=e.mail&&!Z(e.mail))return n=!1,n})),F.value.forEach((n=>{""==n.mail&&e++})),e==F.value.length&&(n=!1),n};function T(){const n=F.value.filter((n=>""!=n.mail)).map((function(n){return n.mail}));return n.some((function(e,i){return n.indexOf(e)!=i}))}const _=(n,e,i)=>{e=e||{mail:""},i?F.value.splice(n,1,e):F.value.splice(n,0,e)},V=async()=>{I.execute((async()=>{const n=F.value.map((n=>({email:n.mail})));for(Q.inviteCb&&await Q.inviteCb({invitations:n,ID:Q.ID,action:Q.action});D(0););z(),Q.onBackoffice||k.push(`/main/manage/${w.value}`)}),{loading:!0})},Z=n=>!n||/^(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(n);return(n,e)=>((0,t.wg)(),(0,t.iD)("div",u,[m,(0,t._)("div",x,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.value,((n,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e,class:"e-mail-addresses"},[(0,t.wy)((0,t._)("input",{class:"e-mail-input",ref_for:!0,ref:"field-"+e,"onUpdate:modelValue":e=>n.mail=e,onPaste:n=>((n,e)=>{const{clipboardData:i}=n;if(!i)return;n.preventDefault();const t=i.getData("text").split(/[\s;]+/),a=""==F.value[e].mail;_(e,{mail:t[0]},a),t.slice(1).forEach(((n,i)=>_(e+i+1,{mail:n},!1)))})(n,e),size:"50",onInput:e=>{(n=>{let e=0;F.value.forEach((n=>{""==n.mail&&e++})),0==e&&F.value.push({mail:""})})(),n.mail=n.mail.toLowerCase()},placeholder:"name@example.com"},null,40,v),[[a.vModelText,n.mail]]),(0,t._)("span",{class:"remove-field",onClick:n=>D(e)},C,8,f)])))),128))]),(0,t.Wm)(p.Z,{style:{margin:"20px 0px 52px"},infoText:"You can copy and paste multiple email addresses at once by using ',' between items."},null,8,["infoText"]),(0,t._)("div",B,[(0,t._)("button",{class:"cancel-button",onClick:e[0]||(e[0]=n=>z())},"Cancel"),(0,t._)("button",{id:"sendButton",class:"send-invite-button",disabled:!E()||T(),onClick:V},(0,o.toDisplayString)(Q.onBackoffice?"ADD OWNER":"SEND INVITATION"),9,g),E()?(0,t.kq)("v-if",!0):((0,t.wg)(),(0,t.iD)("span",b,"Email addresses must be valid.")),T()?((0,t.wg)(),(0,t.iD)("span",h,"There are duplicate mails.")):(0,t.kq)("v-if",!0)])]))}});var y=i(17450),I=i.n(y),k=i(29530),w=i.n(k),F=i(16199),z=i.n(F),D=i(40458),E=i.n(D),T=i(62916),_=i.n(T),V=i(92165),Z=i.n(V),M=i(98509),q={};q.styleTagTransform=Z(),q.setAttributes=E(),q.insert=z().bind(null,"head"),q.domAPI=w(),q.insertStyleElement=_(),I()(M.Z,q),M.Z&&M.Z.locals&&M.Z.locals;const R=(0,i(32525).Z)(Q,[["__scopeId","data-v-82ee48d2"]])},74720:(n,e,i)=>{i.d(e,{Z:()=>w});var t=i(71093),a=i(66190),o=i(46233),l=i(73843);const s={class:"info-text"},r=(n=>((0,t.dD)("data-v-3f1afca0"),n=n(),(0,t.Cn)(),n))((()=>(0,t._)("i",{class:"mdi mdi-information"},null,-1))),A=["innerHTML"],d={key:0,class:"text-area"},p={class:"icon-tooltip"},c=(0,t.aZ)({__name:"studioInfoComp",props:{infoText:null,textAreaValue:null},setup(n){const e=n,i=(0,l.iH)(!1);return(n,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"info-div",style:(0,a.normalizeStyle)({padding:e.textAreaValue?"12px":"5px 12px"})},[(0,t._)("div",s,[r,(0,t._)("span",{innerHTML:e.infoText},null,8,A)]),e.textAreaValue?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Uk)((0,a.toDisplayString)(e.textAreaValue)+" ",1),(0,t._)("i",{class:"mdi mdi-content-copy copy-icon",onClick:l[0]||(l[0]=n=>{e.textAreaValue&&(navigator.clipboard.writeText(e.textAreaValue),i.value=!0,setTimeout((()=>{i.value=!1}),2e3))})}),(0,t.wy)((0,t._)("span",p,"Text copied!",512),[[o.vShow,i.value]])])):(0,t.kq)("v-if",!0)],4))}});var u=i(17450),m=i.n(u),x=i(29530),v=i.n(x),f=i(16199),C=i.n(f),B=i(40458),g=i.n(B),b=i(62916),h=i.n(b),Q=i(92165),y=i.n(Q),I=i(97554),k={};k.styleTagTransform=y(),k.setAttributes=g(),k.insert=C().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=h(),m()(I.Z,k),I.Z&&I.Z.locals&&I.Z.locals;const w=(0,i(32525).Z)(c,[["__scopeId","data-v-3f1afca0"]])}}]);
//# sourceMappingURL=2150.js.map?ver=0.0.313_1711531914858