import{d as e,r as i,h as t,o as a,i as n,j as s,l,aL as r}from"./index.c87ef19b.js";import{_ as c}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import{_ as d}from"./index.e1f7b2d9.js";var o=e({components:{ClickOutSide:d,PageWrapper:c},setup(){const e=i("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const u=r("data-v-7a637453"),C=u(((e,i,r,c,d,o)=>{const C=t("ClickOutSide"),k=t("PageWrapper");return a(),n(k,{title:"点内外部触发事件"},{default:u((()=>[s(C,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:u((()=>[s("div",{onClick:i[1]||(i[1]=(...i)=>e.innerClick&&e.innerClick(...i)),class:"demo-box"},l(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));o.render=C,o.__scopeId="data-v-7a637453";export default o;