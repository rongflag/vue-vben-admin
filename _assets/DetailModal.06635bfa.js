import{a as t,u as s,i as e,o as i,j as o,w as r,k as a,J as m}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./colors.5d91bbdf.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./index.ecbd9889.js";import"./index.05f15b52.js";import"./CloseOutlined.9f910fbc.js";import"./FullscreenOutlined.be319401.js";import"./RightOutlined.be55439d.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import{u as n}from"./useDescription.f4830c3d.js";import{D as p}from"./index.5d5a6530.js";import"./useAttrs.54875f54.js";import{s as d}from"./index.de57128c.js";import"./useWindowSizeFn.8c096a0b.js";import{getDescSchema as c}from"./data.d45bb750.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:p},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=n({column:2,schema:c()});return{register:e,useI18n:s,t:t}}});l.render=function(t,s,n,p,d,c){const l=e("Description"),j=e("BasicModal");return i(),o(j,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;