import{r as o,ce as a,e as t,aU as r}from"./index.8d47259d.js";import{r as s}from"./animation.8dadcc24.js";function n({el:n,to:c,duration:e=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),d=c-u;let p=0;e=a(e)?500:e;const f=function(){if(!t(i))return;p+=20;const o=(a=p,c=u,m=d,(a/=e/2)<1?m/2*a*a+c:-m/2*(--a*(a-2)-1)+c);var a,c,m;((o,a)=>{o.scrollTop=a})(n,o),p<e&&t(i)?s(f):l&&r(l)&&l()};return{start:()=>{i.value=!0,f()},stop:()=>{i.value=!1}}}export{n as u};