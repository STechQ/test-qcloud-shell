"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[2290],{92290:(e,l,a)=>{a.r(l),a.d(l,{default:()=>p});var u=a(62068),t=a(51705),n=a(81407),o=a(3734),i=a(80664),s=a(91145);const v=(0,u.Uk)(" User Name "),r=(0,u.Uk)(" Login Type "),d=(0,u._)("option",{value:"QCLOUDAUTH"},"QCLOUDAUTH",-1),U={key:0},c=(0,u.Uk)(" Password "),p=(0,u.aZ)({__name:"createSystemUser",emits:["close"],setup(e,{emit:l}){const a=o.nC.resolve(i.y),p=o.nC.resolve(s.H),y=(0,n.iH)(),w=(0,n.iH)(),_=(0,n.iH)("QCLOUDAUTH");return(e,n)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",null,[v,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>y.value=e)},null,512),[[t.vModelText,y.value]])]),(0,u._)("div",null,[r,(0,u.wy)((0,u._)("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>_.value=e)},[d,(0,u.kq)(' <option value="ADFS">ADFS</option> ')],512),[[t.vModelSelect,_.value]])]),"QCLOUDAUTH"==_.value?((0,u.wg)(),(0,u.iD)("div",U,[c,(0,u.wy)((0,u._)("input",{type:"password","onUpdate:modelValue":n[2]||(n[2]=e=>w.value=e)},null,512),[[t.vModelText,w.value]])])):(0,u.kq)("v-if",!0),(0,u._)("div",null,[(0,u._)("button",{onClick:n[3]||(n[3]=e=>async function(){await a.execute((async()=>{if(!y.value||!_.value)return void alert("User Name and LoginType required!");let e;if("QCLOUDAUTH"==_.value){if(!w.value)return void alert("password required!");e=w.value}await p.createSystemUser(y.value,_.value,e),l("close")}),{loading:!0})}())},"Create")])],64))}})}}]);
//# sourceMappingURL=2290.js.map