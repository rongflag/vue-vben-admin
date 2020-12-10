import{a as e,i as o,o as s,j as t,k as i,w as l}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import{s as p}from"./index.3d914ca4.js";import"./index.3926bcc0.js";import"./colors.7cad5419.js";import"./index.73d6b745.js";import"./RightOutlined.6271d6f8.js";import"./index.309c8c25.js";import"./types.19f6acce.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.de1b91a6.js";import"./index.2d1b8ed6.js";import"./UpOutlined.9fb79b46.js";import"./DownOutlined.28064e9e.js";import"./index.34bfa216.js";import"./index.ae35b363.js";import"./index.257889b7.js";import{s as n}from"./index.ece84d19.js";import"./CloseOutlined.11b614e0.js";import"./index.6b4afdd3.js";import"./LeftOutlined.a0990950.js";import"./functional.d4e0e18b.js";import"./RightOutlined.1397f8a7.js";import"./useContext.114680ae.js";import"./useTimeout.0990510e.js";import"./useDebounce.9e3543c4.js";import"./useEventListener.c24bc5c8.js";import"./useBreakpoint.a0fed2b4.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./animation.f3edcb57.js";import"./useScrollTo.ef044c36.js";import"./index.47077e70.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import"./index.44bbd0bc.js";import"./index.bb2606ae.js";import"./useWindowSizeFn.bf57cf6c.js";import"./uuid.40269c00.js";import"./download.492c51b9.js";import{u as r}from"./useForm.648d9376.js";var a=e({components:{BasicForm:p,CollapseContainer:n},setup(){const[e]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};a.render=function(e,p,n,r,a,d){const m=o("BasicForm"),b=o("CollapseContainer");return s(),t("div",c,[i(b,{title:"基础收缩示例"},{default:l((()=>[i(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),i(b,{title:"超过3行自动收起",class:"mt-4"},{default:l((()=>[i(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default a;