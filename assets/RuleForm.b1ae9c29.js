import{d as e,g as s,h as o,o as a,i,w as l,j as t,m as r}from"./index.c87ef19b.js";import{_ as n}from"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import{a as c}from"./index.1cf93748.js";import"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import{u as d}from"./useForm.1ecf8423.js";import{_ as p}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var u=e({components:{BasicForm:n,CollapseContainer:c,PageWrapper:p},setup(){const{createMessage:e}=s(),[o,{validateFields:a,clearValidate:i,getFieldsValue:l,setFieldsValue:t}]=d({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=l();e.success("values:"+JSON.stringify(s))},setFormValues:function(){t({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await a()}catch(e){}},resetValidate:async function(){i()}}}});const f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),g=r("获取表单值"),P=r("设置表单值");u.render=function(e,s,r,n,c,d){const p=o("a-button"),m=o("BasicForm"),u=o("CollapseContainer"),v=o("PageWrapper");return a(),i(v,{title:"表单校验示例"},{default:l((()=>[t("div",f,[t(p,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),t(p,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),t(p,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[g])),_:1},8,["onClick"]),t(p,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[P])),_:1},8,["onClick"])]),t(u,{title:"表单校验"},{default:l((()=>[t(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;