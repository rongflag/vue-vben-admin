import{d as e,h as t,o as i,i as o,j as r,w as s,m as a}from"./index.c87ef19b.js";import"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import"./index.4ac4bb42.js";import{_ as n}from"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import{u as d}from"./useTable.c40daa9c.js";import{getBasicColumns as m}from"./tableData.7aa0192c.js";import{d as c}from"./table.ce658911.js";var p=e({components:{BasicTable:n},setup(){const[e,{reload:t}]=d({title:"远程加载示例",api:c,columns:m()});return{registerTable:e,handleReloadCurrent:function(){t()},handleReload:function(){t({page:1})}}}});const l={class:"p-4"},u=a(" 刷新当前页 "),j=a(" 刷新并返回第一页 ");p.render=function(e,a,n,d,m,c){const p=t("a-button"),f=t("BasicTable");return i(),o("div",l,[r(f,{onRegister:e.registerTable},{toolbar:s((()=>[r(p,{type:"primary",onClick:e.handleReloadCurrent},{default:s((()=>[u])),_:1},8,["onClick"]),r(p,{type:"primary",onClick:e.handleReload},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default p;