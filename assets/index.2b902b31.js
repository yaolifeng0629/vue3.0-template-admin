var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&d(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&d(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{_ as u}from"./lodash.0c8485ed.js";import{r as i}from"./index.c261eb95.js";import{y as c,d as p,k as m,e as k,c as v,s as f,q as _,m as b,v as y,I as j,g,i as w,r as I,b as T,aQ as V,F as h,t as L,bm as M,p as S,f as x,A as P,w as C,n as U}from"./vendor.67cd59db.js";import{S as N}from"./sortable.esm.d55fbdd0.js";const O={class:"task-table"},E={key:1},z={key:1},D={key:1},A=j("保存"),B=j("编辑"),q=j("删除"),$={class:"task-table__add"},F=j("+ 新增任务");var Q=p({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup(e,{emit:a}){function t(){a("addProjectTask")}return(l,s)=>{const o=m("el-input"),d=m("el-table-column"),u=m("el-option"),i=m("el-select"),c=m("el-tag"),p=m("el-button"),w=m("el-popconfirm"),I=m("el-table");return k(),v("div",O,[f(I,{data:e.data,style:{width:"100%"}},{default:_((()=>[f(d,{prop:"taskName",label:"任务名称"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":a=>e.row.taskName=a},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",E,y(e.row.taskName),1))])),_:1}),f(d,{prop:"developTime",label:"开发工时"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":a=>e.row.developTime=a},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",z,y(e.row.developTime),1))])),_:1}),f(d,{prop:"developMember",label:"开发人"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":a=>e.row.developMember=a},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",D,y(e.row.developMember),1))])),_:1}),f(d,{prop:"taskStatus",label:"任务状态"},{default:_((a=>{var t;return[a.row.edit?(k(),b(i,{key:0,modelValue:a.row.taskStatus,"onUpdate:modelValue":e=>a.row.taskStatus=e,placeholder:"选择任务状态"},{default:_((()=>[f(u,{label:"准备阶段",value:"preparation"}),f(u,{label:"开发中",value:"development"}),f(u,{label:"开发完成",value:"completed"}),f(u,{label:"测试阶段",value:"test"}),f(u,{label:"待发布",value:"released"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(k(),b(c,{key:1,type:null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.type},{default:_((()=>{var t;return[j(y(null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.text),1)]})),_:2},1032,["type"]))]})),_:1}),f(d,{label:"操作",width:"200"},{default:_((e=>[e.row.edit?(k(),b(p,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:t=>function(e){console.log(e);const t=e.taskId;a("updateTask",t,r(n({},e),{edit:!1}))}(e.row)},{default:_((()=>[A])),_:2},1032,["onClick"])):(k(),b(p,{key:1,size:"mini",icon:"el-icon-edit",onClick:t=>function(e){console.log(e);const t=e.taskId;a("modifyTaskEdit",t,!0)}(e.row)},{default:_((()=>[B])),_:2},1032,["onClick"])),f(w,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>function(e){const t=e.taskId;a("deleteProjectTask",t)}(e.row)},{reference:_((()=>[f(p,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:_((()=>[q])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),g("div",$,[f(p,{onClick:t},{default:_((()=>[F])),_:1})])])}}});Q.__scopeId="data-v-48a10ce8";const G={class:"task-column"},H={class:"task-column__head"},J={class:"task-column__num"},K={class:"task-column__num-count"},R={class:"task-column__type"},W=(e=>(S("data-v-4c7abf2b"),e=e(),x(),e))((()=>g("div",{class:"task-column__add"}," + ",-1))),X=["id","data-taskStatus","data-taskId"],Y={class:"task-column__content"},Z={class:"task-column__content-detail"},ee={class:"task-column__content-time"};var ae=p({props:{target:null,statusMap:null},emits:["moveTask"],setup(e,{emit:a}){const t=e,l=w((()=>u.groupBy(t.target.taskList,(e=>e.taskStatus)))),s=w((()=>Object.keys(l.value))),o=I([]);return T((()=>{for(let e=0;e<s.value.length;e++){const t=document.getElementById(s.value[e]),l=new N(t,{group:"task",animation:150,onAdd:e=>{const t=e.from.dataset.taskstatus,l=e.to.dataset.taskstatus,s=Number(e.from.dataset.taskid);a("moveTask",t,l,s)}});o.value.push(l)}})),V((()=>{u.forEach(o.value,(e=>{e.destroy()}))})),(a,t)=>{const o=m("el-card");return k(),v("div",G,[(k(!0),v(h,null,L(M(s),(a=>(k(),b(o,{class:"task-column__item"},{default:_((()=>{var t;return[g("div",H,[g("div",J,[g("div",K,y(M(l)[a].length||0),1)]),g("div",R,y((null==(t=e.statusMap.get(a))?void 0:t.text)||"未定义"),1),W]),(k(!0),v(h,null,L(M(l)[a],(e=>(k(),v("div",{id:a,"data-taskStatus":a,"data-taskId":e.taskId},[g("div",Y,[g("p",null,y(e.taskName),1),g("div",Z,[g("span",null,"负责人："+y(e.developMember||"-"),1),g("span",ee,"工时："+y(e.developTime||"-"),1)])])],8,X)))),256))]})),_:2},1024)))),256))])}}});ae.__scopeId="data-v-4c7abf2b";const te=e=>(S("data-v-002a6822"),e=e(),x(),e),le={class:"board"},se={class:"board__info"},oe=j("项目看板"),de=te((()=>g("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),ne={class:"board__project"},re=te((()=>g("div",{class:"board__project-title"},"项目概览",-1))),ue={class:"board__project-list"},ie=["onClick"],ce={class:"board__detail"},pe=te((()=>g("div",{class:"board__detail-title"},"项目详情",-1))),me={key:0,class:"board__detail-empty"},ke={key:1,class:"board__detail-content"},ve={class:"board__detail-head"},fe=te((()=>g("span",{class:"board__detail-name"},"项目名称",-1))),_e=te((()=>g("span",{class:"board__detail-name"},"负责人",-1))),be=te((()=>g("span",{class:"board__detail-name"},"开发工时",-1))),ye=te((()=>g("span",{class:"board__detail-name"},"项目状态",-1))),je=te((()=>g("span",{class:"board__detail-name"},"任务总数",-1))),ge=te((()=>g("span",{class:"board__detail-name"},"任务进度",-1))),we=j("： "),Ie={class:"board__detail-search"},Te=j("查询"),Ve={class:"board__detail-table"};var he=p({setup(e){const a=c({taskStatus:null,developMember:""}),t=new Map([["preparation",{text:"准备阶段",type:"info"}],["development",{text:"开发中",type:""}],["completed",{text:"开发完成",type:"success"}],["test",{text:"测试阶段",type:"danger"}],["released",{text:"待发布",type:"warning"}]]),l=I([]),s=I("column"),{store:o,updatedProjectInfo:d,addProjectTask:p,deleteTask:T,modifyTaskEdit:V,moveTask:S}=(()=>{const e=c({data:[],target:{}});return i({url:"/api/project/list",method:"get",json:!0}).then((a=>{0===a.status&&(e.data=a.data,e.target=a.data[0])})),{store:e,updatedProjectInfo:function(a,t,l){const s=u.findIndex(e.data,["projectId",a]),o=e.data[s].taskList,d=u.map(o,((e,a)=>e.taskId===t?l:e));e.data[s].taskList=d},addProjectTask:function(a,t){const l=u.findIndex(e.data,["projectId",a]),s=e.data[l].taskList;e.data[l].taskList=u.concat(s,t,[])},deleteTask:function(a,t){const l=u.findIndex(e.data,["projectId",a]),s=e.data[l].taskList,o=u.map(s,((e,a)=>{if(e.taskId!==t)return e})).filter((e=>e));e.data[l].taskList=o},getProjectDetail:function(a){return u.find(e.data,(e=>e.projectId===a))},modifyTaskEdit:function(a,t,l=!1){const s=u.findIndex(e.data,["projectId",a]),o=e.data[s].taskList,d=u.map(o,((e,a)=>e.taskId===t?r(n({},e),{edit:l}):e));e.data[s].taskList=d},moveTask:function(a,t,l){const s=u.map(e.target.taskList,(e=>(e.taskId===l&&(e.taskStatus=t),e))),o=r(n({},e.target),{taskList:s});e.target=o,console.log(e.target.taskList,"move")}}})(),{data:x,target:N}=P(o);C((()=>N.value),(e=>{l.value=e.taskList}),{deep:!0});const O=w((()=>{const e=u.countBy(N.value.taskList,(e=>e.taskStatus));return u.map(Object.entries(e),(([e,a])=>{const l=t.get(e);return r(n({},l),{count:a})}))})),E=w((()=>{const e=u.map(N.value.taskList,(e=>e.developMember)).filter((e=>e));return u.uniq(e)}));function z(){console.log("search!",a);const e=a.taskStatus,t=a.developMember;if(e&&t){const a=u.map(N.value.taskList,(a=>{if(a.developMember===t&&a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(e){const a=u.map(N.value.taskList,(a=>{if(a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(t){const e=u.map(N.value.taskList,(e=>{if(e.developMember===t)return e})).filter((e=>e));l.value=e}else l.value=N.value.taskList}function D(e,a){const t=N.value.projectId;V(t,e,a)}function A(e,a){const t=N.value.projectId;d(t,e,a)}function B(){const e=N.value.projectId,a={taskName:"",developTime:"",developMember:"",taskStatus:"preparation",edit:!0,taskId:Date.now()};p(e,a)}function q(e){const a=N.value.projectId;T(a,e)}function $(e){switch(e.paneName){case"table":console.log("表格形式");break;case"column":console.log("列表形式")}}function F(e,a,t){S(e,a,t)}return(e,o)=>{const d=m("el-divider"),n=m("el-avatar"),r=m("el-col"),u=m("el-row"),i=m("el-card"),c=m("el-tag"),p=m("el-option"),w=m("el-select"),I=m("el-form-item"),T=m("el-button"),V=m("el-form"),S=m("el-tab-pane"),P=m("el-tabs");return k(),v("div",le,[g("div",se,[f(d,{"content-position":"left"},{default:_((()=>[oe])),_:1}),de]),g("div",ne,[re,g("div",ue,[(k(!0),v(h,null,L(M(x),((e,a)=>(k(),v("div",{key:a,class:U(["board__project-item",{"board__project-item--active":M(N).projectId===e.projectId}]),onClick:a=>{return t=e,void(N.value=t);var t}},[f(i,null,{default:_((()=>[f(u,null,{default:_((()=>[f(r,{span:5},{default:_((()=>[f(n,{class:"board__project-avatar",size:90},{default:_((()=>[j(y(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),f(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:_((()=>[g("p",null,"项目名称："+y(e.projectName),1),g("p",null,"总负责人："+y(e.principal),1),g("p",null,"开发耗时："+y(e.timeConsuming),1),g("p",null,"项目状态: "+y(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,ie)))),128))])]),g("div",ce,[pe,f(i,{class:"board__detail-wrap"},{default:_((()=>[M(N).projectId?(k(),v("div",ke,[g("div",ve,[f(u,null,{default:_((()=>[f(r,{span:5},{default:_((()=>[fe,j("："+y(M(N).projectName),1)])),_:1}),f(r,{span:5},{default:_((()=>[_e,j("："+y(M(N).principal),1)])),_:1}),f(r,{span:5},{default:_((()=>[be,j("："+y(M(N).timeConsuming),1)])),_:1}),f(r,{span:5},{default:_((()=>[ye,j("："+y(M(N).status),1)])),_:1})])),_:1}),f(u,{class:"board__detail-task"},{default:_((()=>[f(r,{span:5},{default:_((()=>[je,j("："+y(M(N).taskList.length),1)])),_:1}),f(r,{span:18},{default:_((()=>[ge,we,(k(!0),v(h,null,L(M(O),((e,a)=>(k(),b(c,{key:a,class:"board__detail-tag",type:e.type},{default:_((()=>[j(y(e.text)+": "+y(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),f(P,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value=e),type:"card",onTabClick:$},{default:_((()=>[f(S,{label:"表格模式",name:"table"},{default:_((()=>[g("div",Ie,[f(V,{inline:!0,model:M(a)},{default:_((()=>[f(I,{label:"开发人"},{default:_((()=>[f(w,{clearable:"",modelValue:M(a).developMember,"onUpdate:modelValue":o[0]||(o[0]=e=>M(a).developMember=e),placeholder:"选择任务开发者"},{default:_((()=>[(k(!0),v(h,null,L(M(E),((e,a)=>(k(),b(p,{key:a,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(I,{label:"任务状态"},{default:_((()=>[f(w,{clearable:"",modelValue:M(a).taskStatus,"onUpdate:modelValue":o[1]||(o[1]=e=>M(a).taskStatus=e),placeholder:"选择任务状态"},{default:_((()=>[f(p,{label:"准备阶段",value:"preparation"}),f(p,{label:"开发中",value:"development"}),f(p,{label:"开发完成",value:"completed"}),f(p,{label:"测试阶段",value:"test"}),f(p,{label:"待发布",value:"released"})])),_:1},8,["modelValue"])])),_:1}),f(I,null,{default:_((()=>[f(T,{type:"primary",onClick:z},{default:_((()=>[Te])),_:1})])),_:1})])),_:1},8,["model"])]),g("div",Ve,[f(Q,{data:l.value,status:M(t),onUpdateTask:A,onModifyTaskEdit:D,onAddProjectTask:B,onDeleteProjectTask:q},null,8,["data","status"])])])),_:1}),f(S,{label:"列表模式",name:"column"},{default:_((()=>[f(ae,{statusMap:M(t),target:M(N),onMoveTask:F},null,8,["statusMap","target"])])),_:1})])),_:1},8,["modelValue"])])):(k(),v("div",me,"请选择项目，查看项目详情！！！"))])),_:1})])])}}});he.__scopeId="data-v-002a6822";export{he as default};
