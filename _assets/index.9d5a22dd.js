import{a as s,i,o as t,j as e,k as o,aM as a,b9 as n,w as c,p as l}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import{A as d}from"./index.d0df79f5.js";import"./CloseOutlined.9f910fbc.js";import"./LeftOutlined.a260af09.js";import"./LoadingOutlined.443e49ec.js";import"./RightOutlined.be55439d.js";import{c as r}from"./index.f0ed6ddc.js";const m=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var p=s({components:{Alert:d},setup:()=>({imgList:m,handleClick:function(s){r({imageList:[s]})},handlePreview:function(){r({imageList:m})}})});const f={class:"p-4"},u={class:"flex justify-center mt-4"},h=l("预览图片");p.render=function(s,l,d,r,m,p){const j=i("Alert"),g=i("a-button");return t(),e("div",f,[o(j,{message:"有预览图",type:"info"}),o("div",u,[(t(!0),e(a,null,n(s.imgList,(i=>(t(),e("img",{src:i,key:i,class:"mr-2",onClick:t=>s.handleClick(i)},null,8,["src","onClick"])))),128))]),o(j,{message:"无预览图",type:"info"}),o(g,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:c((()=>[h])),_:1},8,["onClick"])])};export default p;