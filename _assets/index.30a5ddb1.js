import{a as o,aV as t,u as e,i,o as s,j as r,k as a,w as n}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import{T as l}from"./index.c6a9e5cf.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import{L as m}from"./LockOutlined.577e9ed0.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import{a as d}from"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";var c=o({name:"FullScreen",components:{LockOutlined:m,Tooltip:l,LockAction:t((()=>import("./LockModal.43f37de0.js")))},setup(){const{t:o}=e(),[t,{openModal:i}]=d();return{t:o,register:t,handleLock:function(){i(!0)}}}});c.render=function(o,t,e,l,m,d){const c=i("LockOutlined"),p=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:t[1]||(t[1]=(...t)=>o.handleLock&&o.handleLock(...t))},[a(p,{title:o.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:n((()=>[a(c)])),_:1},8,["title","mouseEnterDelay"]),a(u,{onRegister:o.register},null,8,["onRegister"])])};export default c;