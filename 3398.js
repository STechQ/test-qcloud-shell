"use strict";(self.webpackChunkqcloud_shell=self.webpackChunkqcloud_shell||[]).push([[3398],{93398:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var u=a(62068),t=a(49045),s=a(51705),n=a(81407),d=a(3734),i=a(80664),o=a(19690);const r={key:0},v=(0,u.Uk)(" User Name "),p=(0,u.Uk)(" E-Mail "),c=(0,u.Uk)(" Password "),m=(0,u.aZ)({__name:"createUser",props:{dbName:null},emits:["close"],setup(e,{emit:l}){const a=e,m=d.nC.resolve(i.y),w=d.nC.resolve(o.h),_=(0,n.iH)(),y=(0,n.iH)(),k=(0,n.iH)();return(e,n)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[a.dbName?((0,u.wg)(),(0,u.iD)("div",r,"This user will be created in this db: "+(0,t.toDisplayString)(a.dbName),1)):(0,u.kq)("v-if",!0),(0,u._)("div",null,[v,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>_.value=e)},null,512),[[s.vModelText,_.value]])]),(0,u._)("div",null,[p,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>y.value=e)},null,512),[[s.vModelText,y.value]])]),(0,u._)("div",null,[c,(0,u.wy)((0,u._)("input",{type:"password","onUpdate:modelValue":n[2]||(n[2]=e=>k.value=e)},null,512),[[s.vModelText,k.value]])]),(0,u._)("div",null,[(0,u._)("button",{onClick:n[3]||(n[3]=e=>async function(){await m.execute((async()=>{_.value&&y.value&&k.value?(await w.createUser({name:_.value,mailAddress:y.value,password:k.value},a.dbName),l("close")):alert("All fields are required!")}),{loading:!0})}())},"Create")])],64))}})}}]);
//# sourceMappingURL=3398.js.map