"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[5116],{63267:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(8375),a=e.n(o),l=e(7638),s=e.n(l)()(a());s.push([n.id,'\n.createButtonDiv[data-v-5378fa42] {\n    height: 72px;\n    top: calc(100% - 72px);\n    width: 100%;\n    position: absolute\n}\n.createButton[data-v-5378fa42] {\n    background-color: #151233;\n    color: white;\n    border-radius: 4px;\n    border: none;\n    width: 97px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 117px);\n    top: 16px;\n    position: absolute;\n}\n.cancelButton[data-v-5378fa42] {\n    background-color: transparent;\n    color: #757575;\n    border-radius: 4px;\n    border: none;\n    width: 90px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 211px);\n    top: 16px;\n    position: absolute;\n}\n',""]);const c=s},16324:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(8375),a=e.n(o),l=e(7638),s=e.n(l),c=e(79240),i=s()(a());i.i(c.Z),i.push([n.id,"\n.select-input[data-v-b6276172] {\n    width: 100%;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border: 1px solid #BCBCBC;\n    border-radius: 4px;\n    padding: 0px 12px;\n}\n.input-text[data-v-b6276172] {\n    color: #151233;\n    font-weight: bold;\n    font-size: 14px;\n}\n",""]);const r=i},75073:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(8375),a=e.n(o),l=e(7638),s=e.n(l)()(a());s.push([n.id,"\n.select-input .items {\n    color: #212121;\n    border-radius: 8px;\n    border: 1px solid #E3E3E3;\n    overflow: hidden;\n    background-color: #FFFFFF;\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n    margin-top: 8px;\n}\n.select-input .items .option {\n    color: #212121;\n    padding-left: 12px;\n    line-height: 32px;\n}\n.select-input .items .option:hover {\n    background-color: #EEEEEE;\n}\n\n",""]);const c=s},54439:(n,t,e)=>{e.d(t,{Z:()=>Z});var o=e(71093),a=e(66190);const l={class:"createButtonDiv"},s=["disabled"],c=(0,o.aZ)({__name:"createDialogFooter",props:{createButtonText:null,cancelButtonText:null,createButtonEnabled:{type:Boolean},createButtonCb:{type:Function},cancelButtonCb:{type:Function}},setup(n){const t=n;return(e,c)=>((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("button",{class:"cancelButton",onClick:c[0]||(c[0]=(...n)=>t.cancelButtonCb&&t.cancelButtonCb(...n))},(0,a.toDisplayString)(n.cancelButtonText||"Cancel"),1),(0,o._)("button",{style:(0,a.normalizeStyle)({opacity:t.createButtonEnabled?"":"0.5"}),class:"createButton",onClick:c[1]||(c[1]=(...n)=>t.createButtonCb&&t.createButtonCb(...n)),disabled:!t.createButtonEnabled},(0,a.toDisplayString)(n.createButtonText||"CREATE"),13,s)]))}});var i=e(17450),r=e.n(i),u=e(29530),d=e.n(u),p=e(16199),b=e.n(p),h=e(40458),v=e.n(h),x=e(62916),m=e.n(x),f=e(92165),g=e.n(f),w=e(63267),B={};B.styleTagTransform=g(),B.setAttributes=v(),B.insert=b().bind(null,"head"),B.domAPI=d(),B.insertStyleElement=m(),r()(w.Z,B),w.Z&&w.Z.locals&&w.Z.locals;const Z=(0,e(32525).Z)(c,[["__scopeId","data-v-5378fa42"]])},89645:(n,t,e)=>{e.r(t),e.d(t,{default:()=>D});var o=e(71093),a=e(73843),l=e(5627),s=e(83487),c=e(54439),i=e(19496),r=e(1937);const u={class:"name-input-div"},d={class:"row mt-3"},p={class:"col"},b=(n=>((0,o.dD)("data-v-b6276172"),n=n(),(0,o.Cn)(),n))((()=>(0,o._)("span",{class:"input-text"},"Workflow Models",-1))),h=(0,o.aZ)({__name:"createNewProcess",props:{parentId:null,processItems:null},emits:["close"],setup(n,{emit:t}){const e=n,h=l.nC.resolve(s.y),v=l.nC.resolve(r.v5),x=((0,a.iH)(""),(0,a.iH)("")),m=(0,a.iH)([]),f=(0,a.iH)([]),g=(0,a.iH)([]),w=((0,a.iH)(""),(0,a.iH)("")),B=window.workflow,Z=(0,o.Fl)((()=>x.value.length>0));function y(n){x.value=n,w.value=e.processItems.find((t=>t.name==n)).ID}function C(){h.execute((async()=>{B.setProcessToViewModel(w.value),B.setIsNewProcess(!0),v.push("../processlivepreview/processinstancestarter"),t("close")}),{loading:!0})}return(0,o.bv)((async()=>{h.execute((async()=>{m.value=await B.listUsers(),function(){let n=[];m.value.forEach((t=>{n.push({name:t.name,id:t.id})})),f.value=n}(),g.value=e.processItems.map((n=>n.name))}),{loading:!0})})),(n,e)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",u,[(0,o._)("div",d,[(0,o._)("div",p,[b,(0,o.Wm)(i.Z,{class:"select-input",options:g.value,placeholder:"Select workflow model",onInput:y},null,8,["options"])])])]),(0,o.Wm)(c.Z,{"cancel-button-cb":()=>t("close"),"create-button-cb":C,"create-button-enabled":(0,a.SU)(Z)},null,8,["cancel-button-cb","create-button-enabled"])],64))}});var v=e(17450),x=e.n(v),m=e(29530),f=e.n(m),g=e(16199),w=e.n(g),B=e(40458),Z=e.n(B),y=e(62916),C=e.n(y),E=e(92165),_=e.n(E),T=e(16324),k={};k.styleTagTransform=_(),k.setAttributes=Z(),k.insert=w().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=C(),x()(T.Z,k),T.Z&&T.Z.locals&&T.Z.locals;var I=e(75073),F={};F.styleTagTransform=_(),F.setAttributes=Z(),F.insert=w().bind(null,"head"),F.domAPI=f(),F.insertStyleElement=C(),x()(I.Z,F),I.Z&&I.Z.locals&&I.Z.locals;const D=(0,e(32525).Z)(h,[["__scopeId","data-v-b6276172"]])}}]);