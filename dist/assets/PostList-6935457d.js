import{_ as I}from"./AppDate-cb14dc0d.js";import{_ as S}from"./AppFormField-d88df94d.js";import{v as $,i as x,l as g,o as e,a as A,w as F,d as l,h as n,c as o,e as i,t as u,z as P,u as B,K as E,F as q,r as w,C as M,p as N}from"./index-600bec0e.js";const D={class:"btn-group"},K={class:"btn btn-blue",type:"submit",name:"Publish"},L={__name:"PostEditor",props:{id:{required:!1},post:{type:Object,default:()=>({text:null})}},emits:["save"],setup(d,{emit:_}){const p=$(),r=d,m=_,s=x(r.post),h=x(Math.random()),c=function(){m("save",s.value),s.value.text="",h.value=Math.random()},f=function(){p.back()};return(a,v)=>{const y=S,k=g("VForm");return e(),A(k,{onSubmit:c},{default:F(()=>[l(y,{name:"thread_content",label:"Content:",as:"textarea",modelValue:s.value.text,"onUpdate:modelValue":v[0]||(v[0]=b=>s.value.text=b),rules:"required",rows:"8",cols:"30"},null,8,["modelValue"]),n("div",D,[r.post.text===null?(e(),o("button",{key:0,type:"button",class:"btn btn-ghost",onClick:f}," Cancel ")):i("",!0),n("button",K,u(r.post.text===null?"Submit":"Update"),1)])]),_:1})}}},U={class:"post-list"},j={key:0,class:"user-info"},z={href:"#",class:"user-name"},O={href:"#"},R={class:"desktop-only text-small"},G={class:"desktop-only text-small"},H={class:"post-content"},J={key:0},Q={key:1},T=["onClick"],W={class:"post-date text-faded"},X={key:0,class:"edition-info"},st={__name:"PostList",props:{posts:{type:Array,required:!0}},setup(d){const _=P(),p=B(),r=E(),m=d,s=x(null),h=function(a){s.value=a===s.value?null:a},c=function(a){return p.user(a)},f=function(a){r.updatePost(a),s.value=null};return(a,v)=>{const y=N,k=L,b=g("fa"),V=I;return e(),o("div",U,[(e(!0),o(q,null,w(m.posts,t=>{var C;return e(),o("div",{class:"post",key:t.id},[c(t.userId)?(e(),o("div",j,[n("a",z,u(c(t.userId).name),1),n("a",O,[l(y,{class:"avatar-large",src:c(t.userId).avatar,alt:"person"},null,8,["src"])]),n("p",R,u(c(t.userId).postsCount)+" posts",1),n("p",G,u(c(t.userId).threadsCount)+" threads",1)])):i("",!0),n("div",H,[s.value===t.id?(e(),o("div",J,[l(k,{post:t,onSave:f},null,8,["post"])])):(e(),o("div",Q,[n("p",null,u(t.text),1)])),t.userId===M(_).id?(e(),o("a",{key:2,onClick:Y=>h(t.id),style:{"margin-left":"1rem"},class:"link-unstyled",title:"Make a change"},[l(b,{icon:"fa-solid fa-pencil"})],8,T)):i("",!0)]),n("div",W,[(C=t.edited)!=null&&C.at?(e(),o("div",X,"edited")):i("",!0),l(V,{"time-change":t.publishedAt},null,8,["time-change"])])])}),128))])}}};export{st as _,L as a};