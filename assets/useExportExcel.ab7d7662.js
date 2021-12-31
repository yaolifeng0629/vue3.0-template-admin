var e=Object.defineProperty,t=(t,n,l)=>(((t,n,l)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l})(t,"symbol"!=typeof n?n+"":n,l),l);import{F as n}from"./FileSaver.min.c5329070.js";import{X as l}from"./xlsx.fd26daf7.js";import"./vendor.e22f163e.js";function o(e,t){t&&(e=Number(e)+1462);return(Date.parse(String(e))-Date.parse(String(new Date(Date.UTC(1899,11,30)))))/864e5}function r(e,t){const n={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let s=0;s!==e.length;++s)for(let t=0;t!==e[s].length;++t){r.s.r>s&&(r.s.r=s),r.s.c>t&&(r.s.c=t),r.e.r<s&&(r.e.r=s),r.e.c<t&&(r.e.c=t);const c={v:e[s][t]};if(null!==c.v){const e=l.utils.encode_cell({c:t,r:s});if("number"==typeof c.v)c.t="n";else if("boolean"==typeof c.v)c.t="b";else if(c.v instanceof Date){c.t="n";const e=l.SSF.parse_date_code(14);c.z=e,c.v=o(c.v)}else c.t="s";n[e]=c}}return r.s.c<1e7&&(n["!ref"]=l.utils.encode_range(r)),n}class s{constructor(e=[],n={}){t(this,"SheetNames"),t(this,"Sheets"),this.SheetNames=e,this.Sheets=n}}function c(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let l=0;l!==e.length;++l)n[l]=255&e.charCodeAt(l);return t}function a(e){const t=function(e){console.log(e);const t=[],n=null==e?void 0:e.querySelectorAll("tr"),l=[];for(let o=0;o<n.length;++o){const e=[],r=n[o].querySelectorAll("td");for(let t=0;t<r.length;++t){const n=r[t];let s=n.getAttribute("colspan"),c=n.getAttribute("rowspan"),a=n.innerText;if("number"==typeof a&&a===Number(a)&&(a=Number(a)),l.forEach((t=>{if(o>=t.s.r&&o<=t.e.r&&e.length>=t.s.c&&e.length<=t.e.c)for(let n=0;n<=t.e.c-t.s.c;++n)e.push(null)})),(c||s)&&(c=c||1,s=s||1,l.push({s:{r:o,c:e.length},e:{r:o+c-1,c:e.length+s-1}})),e.push(""!==a?a:null),s)for(let t=0;t<s-1;++t)e.push(null)}t.push(e)}return[t,l]}(document.getElementById(e)),o=t[1],a=t[0],i="SheetJS",u=new s,h=r(a);h["!merges"]=o,u.SheetNames.push(i),u.Sheets.SheetJS=h;const f=l.write(u,{bookType:"xlsx",bookSST:!1,type:"binary"});n.exports.saveAs(new Blob([c(f)],{type:"application/octet-stream"}),"test.xlsx")}function i(e){var t,o,a,i,u;const h=null!=(t=null==e?void 0:e.filename)?t:"defaultExcel",f=null!=(o=null==e?void 0:e.bookType)?o:"xlsx",p=null!=(a=null==e?void 0:e.multiHeader)?a:[],g=null!=(i=null==e?void 0:e.merges)?i:[],m=null==(u=e.autoWidth)||u,S=[...e.data];S.unshift(e.header);for(let n=p.length-1;n>-1;n--)S.unshift(p[n]);const d="SheetJS",b=new s,v=r(S);if(g.length>0&&(v["!merges"]||(v["!merges"]=[]),g.forEach((e=>{v["!merges"].push(l.utils.decode_range(e))}))),m){const e=S.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length})))),t=e[0];for(let n=1;n<e.length;n++)for(let l=0;l<e[n].length;l++)t[l].wch<e[n][l].wch&&(t[l].wch=e[n][l].wch);v["!cols"]=t}b.SheetNames.push(d),b.Sheets.SheetJS=v;const y=l.write(b,{bookType:f,bookSST:!1,type:"binary"});n.exports.saveAs(new Blob([c(y)],{type:"application/octet-stream"}),`${h}.${f}`)}var u={exportTableToExcel:a,exportJsonToExcel:i};export{u as default,i as exportJsonToExcel,a as exportTableToExcel};