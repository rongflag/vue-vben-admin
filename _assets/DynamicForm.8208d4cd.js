import{a as e,i as l,o,j as i,k as s,w as t,p as a}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import{s as n}from"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./RightOutlined.f897cf51.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.7d4fdf7c.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import{a as d}from"./index.05f15b52.js";import"./LoadingOutlined.443e49ec.js";import"./RightOutlined.be55439d.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import{u as p}from"./useForm.4a900a75.js";const r=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],c=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:n,CollapseContainer:d},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:s}]=p({labelWidth:120,schemas:r,actionColOptions:{span:24}}),[t]=p({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:e,register1:t,schemas:r,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=a("更改字段3label"),j=a("同时更改字段3,4label"),h=a("往字段3后面插入字段10"),g=a("删除字段11");m.render=function(e,a,n,d,p,r){const c=l("a-button"),m=l("BasicForm"),P=l("CollapseContainer");return o(),i("div",f,[s("div",b,[s(c,{onClick:e.changeLabel3,class:"mr-2"},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{onClick:e.changeLabel34,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),s(c,{onClick:e.appendField,class:"mr-2"},{default:t((()=>[h])),_:1},8,["onClick"]),s(c,{onClick:e.deleteField,class:"mr-2"},{default:t((()=>[g])),_:1},8,["onClick"])]),s(P,{title:"动态表单示例,动态根据表单内其他值改变"},{default:t((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(P,{class:"mt-5",title:"componentProps动态改变"},{default:t((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;