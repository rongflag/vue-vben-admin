import{d as e,h as s,o as i,i as t,w as o,j as r,a0 as a}from"./index.ab86ea0e.js";import{_ as n}from"./index.a7622831.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.1d647a6e.js";import"./index.09b61073.js";import"./index.6b7fc4eb.js";import{_ as d,a as m}from"./index.d81018f6.js";import"./index.86c70840.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./uuid.a6cec785.js";import"./download.b2f1bf52.js";import{u as l}from"./useForm.6db0bffb.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=e({components:{BasicDrawer:d,BasicForm:n},setup(){const[e,{setFieldsValue:s}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[i]=m((e=>{s({field2:e.data,field1:e.info})}));return{register:i,schemas:p,registerForm:e}}});c.render=function(e,n,d,m,l,p){const c=s("BasicForm"),u=s("BasicDrawer");return i(),t(u,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;