import{_ as e}from"./index.60b3070f.js";import{a as s}from"./index.6c4bbdf5.js";import{d as o,g as t,h as i,o as l,i as r,w as a,j as n,m as p}from"./index.25b7b5fc.js";import{_ as d}from"./index.751a0b92.js";import{u as m}from"./useForm.78d22a3e.js";import"./index.3e59d4ea.js";import"./responsiveObserve.c545f1cc.js";import"./index.7d0dbe6d.js";import"./vendor.3b1829c7.js";import"./findIndex.159bea82.js";import"./isEqual.ef398636.js";import"./_baseProperty.74f89655.js";import"./toInteger.34e54435.js";import"./index.e5942447.js";import"./index.290ee578.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.6346a568.js";import"./index.f418f493.js";import"./UpOutlined.2e609594.js";import"./index.013441f2.js";import"./EyeOutlined.bbf9afc6.js";import"./index.eefcbda4.js";import"./colors.e7a38d90.js";import"./RightOutlined.80d69337.js";import"./RedoOutlined.e878d1f7.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./Tree.4dd17072.js";import"./util.e01c1bab.js";import"./useAttrs.cecee0af.js";import"./index.95c10fda.js";import"./index.617b1909.js";import"./uuid.07519bd8.js";import"./index.3186655d.js";import"./DeleteOutlined.04eb5723.js";import"./index.341c3125.js";import"./useTimeout.4101b58e.js";import"./useWindowSizeFn.b36958a0.js";import"./FullscreenOutlined.b884f50f.js";import"./index.071f175b.js";import"./index.463e2338.js";import"./index.ec6a717d.js";import"./LeftOutlined.06ccfb10.js";import"./download.6995c76c.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./index.d317f8e9.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./index.1a47fee9.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const{createMessage:e}=t(),[s,{setProps:o}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});const f={class:"mb-4"},b=p("更改labelWidth"),j=p("还原labelWidth"),P=p("更改Size"),x=p("还原Size"),C=p("禁用表单"),h=p("解除禁用"),k=p("紧凑表单"),_=p("还原正常间距"),O=p(" 操作按钮位置 "),g={class:"mb-4"},v=p(" 隐藏操作按钮 "),S=p(" 显示操作按钮 "),w=p(" 隐藏重置按钮 "),B=p(" 显示重置按钮 "),W=p(" 隐藏查询按钮 "),y=p(" 显示查询按钮 "),F=p(" 修改重置按钮 "),R=p(" 修改查询按钮 ");u.render=function(e,s,o,t,p,d){const m=i("a-button"),c=i("BasicForm"),u=i("CollapseContainer"),z=i("PageWrapper");return l(),r(z,{title:"UseForm操作示例"},{default:a((()=>[n("div",f,[n(m,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),n(m,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[j])),_:1}),n(m,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),n(m,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[x])),_:1}),n(m,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[C])),_:1}),n(m,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[h])),_:1}),n(m,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),n(m,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),n(m,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[O])),_:1})]),n("div",g,[n(m,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),n(m,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),n(m,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[w])),_:1}),n(m,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[B])),_:1}),n(m,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[W])),_:1}),n(m,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[y])),_:1}),n(m,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[F])),_:1}),n(m,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[R])),_:1})]),n(u,{title:"useForm示例"},{default:a((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;