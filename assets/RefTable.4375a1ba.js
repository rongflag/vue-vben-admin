import{d as e,r as t,g as o,e as i,h as n,o as s,i as a,j as l,w as c,m as r}from"./index.c87ef19b.js";import"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import"./index.4ac4bb42.js";import{_ as m}from"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import{getBasicColumns as u,getBasicShortColumns as d}from"./tableData.7aa0192c.js";import{d as f}from"./table.ce658911.js";var p=e({components:{BasicTable:m},setup(){const e=t(null),{createMessage:n}=o();function s(){const t=i(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:f,columns:u(),changeLoading:function(){s().setLoading(!0),setTimeout((()=>{s().setLoading(!1)}),1e3)},changeColumns:function(){s().setColumns(d())},reloadTable:function(){s().setColumns(u()),s().reload({page:1})},getColumn:function(){n.info("请在控制台查看！")},getTableData:function(){n.info("请在控制台查看！")},getPagination:function(){n.info("请在控制台查看！")},setPaginationInfo:function(){s().setPagination({current:2}),s().reload()},getSelectRowList:function(){n.info("请在控制台查看！")},getSelectRowKeyList:function(){n.info("请在控制台查看！")},setSelectedRowKeyList:function(){s().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){s().clearSelectedRowKeys()}}}});const g={class:"p-4"},C={class:"mb-4"},j=r("还原"),b=r("开启loading"),k=r("更改Columns"),w=r("获取Columns"),S=r("获取表格数据"),R=r("跳转到第2页"),_={class:"mb-4"},x=r("获取选中行"),T=r("获取选中行Key"),y=r("设置选中行"),L=r("清空选中行"),h=r("获取分页信息");p.render=function(e,t,o,i,r,m){const u=n("a-button"),d=n("BasicTable");return s(),a("div",g,[l("div",C,[l(u,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[j])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[b])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[k])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[w])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[S])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[R])),_:1},8,["onClick"])]),l("div",_,[l(u,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[x])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[y])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[L])),_:1},8,["onClick"]),l(u,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[h])),_:1},8,["onClick"])]),l(d,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;