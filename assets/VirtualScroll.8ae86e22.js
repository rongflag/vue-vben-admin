import{aO as t,aP as e,d as a,cr as s,cs as i,h as d,o as r,i as o,j as l,l as m,bz as n,m as c}from"./index.0fe5b4aa.js";import{D as p}from"./index.38c23a97.js";import{_ as u}from"./index.65a34c2d.js";import"./index.5e23d9bb.js";import"./index.db17a88d.js";import"./RightOutlined.41d2778b.js";import"./types.6e0f3d6a.js";import"./isEqual.68d23930.js";import"./toInteger.44429000.js";import"./DownOutlined.18f1db32.js";import"./index.8d91dadc.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";import"./transButton.4dcaf1a5.js";const _=t((()=>e((()=>import("./index.fa09dde1.js")),["/assets/index.fa09dde1.js","/assets/index.5ddcb78c.css","/assets/index.0fe5b4aa.js","/assets/index.94daecd6.css"]))),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var f=a({components:{VScroll:_,Divider:p,PageWrapper:u},setup:()=>({data:j})});const v=n("data-v-ee54a078");s("data-v-ee54a078");const h=c("基础滚动示例"),b={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=c("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};i();const P=v(((t,e,a,s,i,n)=>{const c=d("Divider"),p=d("VScroll"),u=d("PageWrapper");return r(),o(u,{class:"virtual-scroll-demo"},{default:v((()=>[l(c,null,{default:v((()=>[h])),_:1}),l("div",b,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:v((({item:t})=>[l("div",x,m(t.title),1)])),_:1},8,["items"])]),l(c,null,{default:v((()=>[g])),_:1}),l("div",w,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:v((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));f.render=P,f.__scopeId="data-v-ee54a078";export default f;