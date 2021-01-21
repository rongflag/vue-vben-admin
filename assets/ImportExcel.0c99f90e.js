import{x as e}from"./index.7fe32124.js";import{d as t,r as n,e as s,o as a,i as r,H as l,bc as c,j as o,b4 as u}from"./index.a566a5ca.js";var i=t({name:"ImportExcel",emits:["success","error"],setup(t,{emit:a}){const r=n(null),l=n(!1);function c(t){if(!t||!t["!ref"])return[];const n=[],s=e.utils.decode_range(t["!ref"]),a=s.s.r;for(let r=s.s.c;r<=s.e.c;++r){const s=t[e.utils.encode_cell({c:r,r:a})];let l="UNKNOWN "+r;s&&s.t&&(l=e.utils.format_cell(s)),n.push(l)}return n}function o(t){return l.value=!0,new Promise(((n,s)=>{const r=new FileReader;r.onload=async t=>{try{const s=t.target&&t.target.result,r=function(t){const n=[];for(const s of t.SheetNames){const a=t.Sheets[s],r=c(a),l=e.utils.sheet_to_json(a);n.push({header:r,results:l,meta:{sheetName:s}})}return n}(e.read(s,{type:"array"}));a("success",r),n("")}catch(r){s(r),a("error")}finally{l.value=!1}},r.readAsArrayBuffer(t)}))}return{handleUpload:function(){const e=s(r);e&&e.click()},handleInputClick:function(e){const t=e&&e.target.files,n=t&&t[0];n&&async function(e){const t=s(r);t&&(t.value=""),await o(e)}(n)},inputRef:r}}});i.render=function(e,t,n,s,i,f){return a(),r("div",null,[l(o("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick&&e.handleInputClick(...t))},null,544),[[c,!1]]),o("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload&&e.handleUpload(...t))},[u(e.$slots,"default")])])};export default i;