import{d as e,h as a,o as s,i as t,w as r,j as i}from"./index.ab86ea0e.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.6b7fc4eb.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import{_ as o}from"./index.354d0644.js";import"./usePageContext.201ece62.js";import{D as l}from"./index.a9b9d966.js";import{u as n}from"./useDescription.d33cf1c1.js";const m={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},c=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var d=e({components:{Description:l,PageWrapper:o},setup(){const[e]=n({title:"useDescription",data:m,schema:c}),[a]=n({title:"无边框",bordered:!1,data:m,schema:c});return{mockData:m,schema:c,register:e,register1:a}}});d.render=function(e,o,l,n,m,c){const d=a("Description"),p=a("PageWrapper");return s(),t(p,{title:"详情组件示例"},{default:r((()=>[i(d,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(d,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(d,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),i(d,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default d;