import{_ as e}from"./index.504f71eb.js";import{a as i}from"./index.f0041cf8.js";import{_ as o}from"./index.708aa57b.js";import{d as l,h as t,o as s,i as a,w as n,j as d,m as p}from"./index.8d47259d.js";import{u as r}from"./useForm.ae3bffc7.js";import"./index.a58d597a.js";import"./index.536a9ea9.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.33bd45d6.js";import"./isEqual.ffb3460c.js";import"./_baseProperty.74f89655.js";import"./toInteger.27c519d9.js";import"./index.7f13caf3.js";import"./index.3961b9e0.js";import"./SearchOutlined.d8605098.js";import"./EyeOutlined.9a4d07ec.js";import"./index.b469a9ef.js";import"./CheckOutlined.6d03f126.js";import"./DownOutlined.9a820ce4.js";import"./index.c9ca5f2c.js";import"./colors.dd4ad3f2.js";import"./index.ec9c374a.js";import"./UpOutlined.95ad411b.js";import"./index.f5c06edb.js";import"./RightOutlined.23eff149.js";import"./RedoOutlined.b6b87535.js";import"./index.2acdbd5b.js";import"./EllipsisOutlined.ac143bad.js";import"./types.0ac09200.js";import"./Tree.b4631d72.js";import"./util.1b616812.js";import"./useAttrs.34eee9f3.js";/* empty css              */import"./uuid.0a03c18e.js";import"./index.e5edd96c.js";import"./DeleteOutlined.a59dead9.js";import"./index.01cab755.js";import"./index.8ced19a3.js";import"./useTimeout.b2057379.js";import"./useWindowSizeFn.3ba76d97.js";import"./FullscreenOutlined.937dc91b.js";import"./index.481b27de.js";import"./index.e522e81d.js";import"./index.cf2978a3.js";import"./LeftOutlined.4109bee3.js";import"./download.a4b42605.js";import"./domUtils.958d292f.js";import"./_stringToArray.60f5614b.js";import"./index.be6382ea.js";import"./useScrollTo.c394ad0f.js";import"./animation.8dadcc24.js";import"./index.98409887.js";import"./index.14140aab.js";import"./usePageContext.43e63c2e.js";import"./transButton.aa4c77a9.js";import"./ArrowLeftOutlined.503463ec.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:i}=e;await i()}})}];var f=l({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const[e,{setProps:i,updateSchema:o,appendSchemaByField:l,removeSchemaByFiled:t}]=r({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=r({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:i,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){t("field11")}}}});const b={class:"mb-4"},u=p(" 更改字段3label "),j=p(" 同时更改字段3,4label "),h=p(" 往字段3后面插入字段10 "),x=p(" 删除字段11 ");f.render=function(e,i,o,l,p,r){const c=t("a-button"),m=t("BasicForm"),f=t("CollapseContainer"),P=t("PageWrapper");return s(),a(P,{title:"动态表单示例"},{default:n((()=>[d("div",b,[d(c,{onClick:e.changeLabel3,class:"mr-2"},{default:n((()=>[u])),_:1},8,["onClick"]),d(c,{onClick:e.changeLabel34,class:"mr-2"},{default:n((()=>[j])),_:1},8,["onClick"]),d(c,{onClick:e.appendField,class:"mr-2"},{default:n((()=>[h])),_:1},8,["onClick"]),d(c,{onClick:e.deleteField,class:"mr-2"},{default:n((()=>[x])),_:1},8,["onClick"])]),d(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:n((()=>[d(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),d(f,{class:"mt-5",title:"componentProps动态改变"},{default:n((()=>[d(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;