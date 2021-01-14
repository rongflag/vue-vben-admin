import{d as e,g as o,h as t,o as s,i as r,aL as a,j as n}from"./index.ab86ea0e.js";import{_ as i}from"./index.a7622831.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.1d647a6e.js";import"./index.09b61073.js";import"./index.6b7fc4eb.js";import"./index.86c70840.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./uuid.a6cec785.js";import"./download.b2f1bf52.js";import{u as l}from"./useForm.6db0bffb.js";import{_ as p}from"./index.354d0644.js";import"./usePageContext.201ece62.js";const c=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=e({components:{BasicForm:i,PageWrapper:p},setup(){const{createMessage:e}=o(),[t,{validate:s,setProps:r}]=l({labelCol:{span:7},wrapperCol:{span:10},schemas:c,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await s(),r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}}});return{register:t}}});const d=a("data-v-18a97988"),u=d(((e,o,a,i,l,p)=>{const c=t("BasicForm"),m=t("PageWrapper");return s(),r(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"},{default:d((()=>[n(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-18a97988";export default m;