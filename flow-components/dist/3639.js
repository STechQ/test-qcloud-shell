"use strict";exports.id=3639,exports.ids=[3639],exports.modules={4024:(e,r,n)=>{n.d(r,{U$:()=>y,Cw:()=>S});var t=n(9318),s=n(4767),i=n(9988),o=n(9063),a=n(6941),c=n(1897),l=n(8074);class d extends(o.mY.classBuilder().ep({...a.q}).m((function(e,r,n,t){return[(0,i.p2)(n,this.serialize,this.deserialize),(0,s.a3)(n,e.getEndpointParameterInstructions())]})).s("AWSSecurityTokenServiceV20110615","AssumeRoleWithWebIdentity",{}).n("STSClient","AssumeRoleWithWebIdentityCommand").f(c.Cz,c.b4).ser(l.pO).de(l.l$).build()){}const u="us-east-1",g=async(e,r,n)=>{const t="function"==typeof e?await e():e,s="function"==typeof r?await r():r;return n?.debug?.("@aws-sdk/client-sts::resolveRegion","accepting first of:",`${t} (provider)`,`${s} (parent client)`,`${u} (STS default)`),t??s??u};var p=n(1570);const f=(e,r)=>r?class extends e{constructor(e){super(e);for(const e of r)this.middlewareStack.use(e)}}:e,y=(e={},r)=>((e,r)=>{let n,s;return async(i,o)=>{if(s=i,!n){const{logger:t=e?.parentClientConfig?.logger,region:i,requestHandler:o=e?.parentClientConfig?.requestHandler,credentialProviderLogger:a}=e,c=await g(i,e?.parentClientConfig?.region,a);n=new r({credentialDefaultProvider:()=>async()=>s,region:c,requestHandler:o,logger:t})}const{Credentials:a}=await n.send(new t.x(o));if(!a||!a.AccessKeyId||!a.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRole call with role ${o.RoleArn}`);return{accessKeyId:a.AccessKeyId,secretAccessKey:a.SecretAccessKey,sessionToken:a.SessionToken,expiration:a.Expiration,credentialScope:a.CredentialScope}}})(e,f(p.X,r)),S=(e={},r)=>((e,r)=>{let n;return async t=>{if(!n){const{logger:t=e?.parentClientConfig?.logger,region:s,requestHandler:i=e?.parentClientConfig?.requestHandler,credentialProviderLogger:o}=e,a=await g(s,e?.parentClientConfig?.region,o);n=new r({region:a,requestHandler:i,logger:t})}const{Credentials:s}=await n.send(new d(t));if(!s||!s.AccessKeyId||!s.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${t.RoleArn}`);return{accessKeyId:s.AccessKeyId,secretAccessKey:s.SecretAccessKey,sessionToken:s.SessionToken,expiration:s.Expiration,credentialScope:s.CredentialScope}}})(e,f(p.X,r))},3639:(e,r,n)=>{n.r(r),n.d(r,{getDefaultRoleAssumer:()=>t.U$});var t=n(4024)}};