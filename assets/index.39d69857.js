import{d as e,r as s,cp as a,cq as t,h as i,o,i as r,j as n,bs as l,H as d,b8 as p,bw as c,m}from"./index.25b7b5fc.js";import{a as u}from"./index.290ee578.js";import{_ as f}from"./index.751a0b92.js";import{F as v,S as j,a as S,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.d317f8e9.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.1a47fee9.js";import"./index.10a2e5b4.js";import"./RightOutlined.80d69337.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./index.95c10fda.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=s("Fade"),a=s(!0);return{options:w,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const O=c("data-v-51fb1392");a("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,s,a,t,c,m)=>{const u=i("Select"),f=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":s[1]||(s[1]=s=>e.value=s),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[p,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;