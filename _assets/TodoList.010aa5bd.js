let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,J as i,aR as o,a,d9 as s,da as l,i as n,o as r,j as d,aM as p,aX as m,n as c,p as b,bp as u}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./colors.eda34fc4.js";import"./RightOutlined.095e9d4c.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import{T as f}from"./index.c6a9e5cf.js";import"./LeftOutlined.a2747bf9.js";import{T as _}from"./index.0408e61a.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.79bf1a1f.js";import{a as g}from"./index.c41153d6.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{t as h}from"./data.edc06832.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,a){var s=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,a.attrs);return e(o,i(s,{icon:x}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=a({name:"TodoList",components:{CollapseContainer:g,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:f,EllipsisOutlined:O},setup:()=>({todoList:h})});const T=u("data-v-352db18b");s("data-v-352db18b");const L=e("span",null,[b(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),w={class:"todo-list__item-title"},z={class:"todo-list__item-memo"},k={class:"todo-list__item-desc"},C=e("br",null,null,-1),I=b("待审批"),E={class:"todo-list__all"},M=b("查看更多");l();const P=T(((t,i,o,a,s,l)=>{const u=n("ListItemMeta"),f=n("Tag"),_=n("a-button"),j=n("ListItem"),g=n("List"),h=n("EllipsisOutlined"),x=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:T((()=>[L])),default:T((()=>[e(g,null,{default:T((()=>[(r(!0),d(p,null,m(t.todoList,(t=>(r(),d(j,{key:t.id,class:"todo-list__item"},{default:T((()=>[e(u,null,{title:T((()=>[e("div",null,[e("span",w,c(t.title),1),e("span",z,c(t.memo),1)])])),description:T((()=>[e("div",k,[b(" 提交人："+c(t.sbmter)+" ",1),C,b(" 提交时间："+c(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:T((()=>[e(f,{color:"blue"},{default:T((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",E,[e(x,{placement:"topRight"},{title:T((()=>[M])),default:T((()=>[e(h)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;