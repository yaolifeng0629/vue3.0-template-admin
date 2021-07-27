var i=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(e,l,c)=>l in e?i(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,n=(i,e)=>{for(var l in e||(e={}))t.call(e,l)&&o(i,l,e[l]);if(c)for(var l of c(e))a.call(e,l)&&o(i,l,e[l]);return i},s=(i,c)=>e(i,l(c));import{u as r,a as d}from"./index.25816aae.js";import{d as u,n as m,r as f,g as p,s as g,p as b,a as h,j as k,o as v,c as y,b as w,F as _,k as C,w as V,aM as S,B as z,H as x,E as j,G as E,f as O,A as q,t as M,I}from"./vendor.2a513c56.js";import{_ as U}from"./message-box.56fdf2bd.js";var A=u({name:"Icon",props:{msg:{type:String,required:!1,default:""}},emits:["success"],setup:(i,{emit:e})=>{const l=m({icons:["ic ic-accessory","ic ic-activity","ic ic-activity-fill","ic ic-add","ic ic-addition-fill","ic ic-addition","ic ic-addpeople-fill","ic ic-addpeople","ic ic-addressbook-fill","ic ic-addressbook","ic ic-barrage-fill","ic ic-barrage","ic ic-browse-fill","ic ic-browse","ic ic-brush","ic ic-brush-fill","ic ic-businesscard-fill","ic ic-businesscard","ic ic-camera-fill","ic ic-camera","ic ic-clock-fill","ic ic-clock","ic ic-close","ic ic-collection-fill","ic ic-collection","ic ic-computer-fill","ic ic-computer","ic ic-coordinates-fill","ic ic-coordinates","ic ic-coupons-fill","ic ic-coupons","ic ic-createtask-fill","ic ic-createtask","ic ic-customerservice-fill","ic ic-customerservice","ic ic-delete-fill","ic ic-delete","ic ic-document","ic ic-document-fill","ic ic-dynamic ic-fill","ic ic-dynamic","ic ic-editor","ic ic-eit","ic ic-emoji-fill","ic ic-emoji","ic ic-empty","ic ic-empty-fill","ic ic-enter","ic ic-enterinto","ic ic-enterinto-fill","ic ic-feedback-fill","ic ic-feedback","ic ic-flag-fill","ic ic-flag","ic ic-flashlight","ic ic-flashlight-fill","ic ic-flip","ic ic-flip-fill","ic ic-fullscreen","ic ic-group","ic ic-group-fill","ic ic-headlines-fill","ic ic-headlines","ic ic-homepage-fill","ic ic-homepage","ic ic-integral-fill","ic ic-integral","ic ic-interactive-fill","ic ic-interactive","ic ic-keyboard","ic ic-label","ic ic-label-fill","ic ic-like-fill","ic ic-like","ic ic-live-fill","ic ic-live","ic ic-lock-fill","ic ic-lock","ic ic-mail","ic ic-mail-fill","ic ic-manage-fill","ic ic-manage","ic ic-message","ic ic-message-fill","ic ic-mine","ic ic-mine-fill","ic ic-mobilephone-fill","ic ic-mobilephone","ic ic-more","ic ic-narrow","ic ic-offline-fill","ic ic-offline","ic ic-order-fill","ic ic-order","ic ic-other","ic ic-people-fill","ic ic-people","ic ic-picture-fill","ic ic-picture","ic ic-play","ic ic-play-fill","ic ic-playon-fill","ic ic-playon","ic ic-praise-fill","ic ic-praise","ic ic-prompt-fill","ic ic-prompt","ic ic-qrcode-fill","ic ic-qrcode","ic ic-redpacket-fill","ic ic-redpacket","ic ic-refresh","ic ic-remind-fill","ic ic-remind","ic ic-return","ic ic-right","ic ic-scan","ic ic-select-fill","ic ic-select","ic ic-send","ic ic-service-fill","ic ic-service","ic ic-setup-fill","ic ic-setup","ic ic-share-fill","ic ic-share","ic ic-shielding-fill","ic ic-shielding","ic ic-smallscreen-fill","ic ic-smallscreen","ic ic-stealth-fill","ic ic-stealth","ic ic-success-fill","ic ic-success","ic ic-suspend","ic ic-switch","ic ic-systemprompt-fill","ic ic-systemprompt","ic ic-tailor","ic ic-task","ic ic-task-fill","ic ic-tasklist-fill","ic ic-tasklist","ic ic-text","ic ic-time-fill","ic ic-time","ic ic-translation-fill","ic ic-translation","ic ic-trash","ic ic-trash-fill","ic ic-undo","ic ic-unlock-fill","ic ic-unlock","ic ic-video","ic ic-video-fill","ic ic-warning-fill","ic ic-warning","ic ic-workbench-fill","ic ic-workbench","ic ic-search","ic ic-searchfill","ic ic-publishgoods-fill","ic ic-shop-fill","ic ic-transaction-fill","ic ic-packup","ic ic-unfold","ic ic-wangwang","ic ic-financial-fill","ic ic-marketing-fill","ic ic-shake","ic ic-decoration-fill","ic ic-questions","ic ic-supply","ic ic-tools","ic ic-int","ic ic-commodity","ic ic-zhtn"],data:[""],key:""}),c=f(0);return p((()=>{l.data=l.icons})),s(n({count:c},g(l)),{search:()=>{const{key:i}=l,{icons:e}=l;l.data=i?e.filter((i=>e=>e.toLowerCase().indexOf(i.toLowerCase())>0)(i)):e},selected:i=>{e("success",i)}})}});const R=V();b("data-v-57f84410");const P={class:"icon-panel"},F=w("br",null,null,-1),D=w("br",null,null,-1),L=w("br",null,null,-1);h();const Z=R(((i,e,l,c,t,a)=>{const o=k("el-button"),n=k("el-input");return v(),y("div",P,[w(n,{modelValue:i.key,"onUpdate:modelValue":e[2]||(e[2]=e=>i.key=e),placeholder:"搜索图标",onInput:i.search},{default:R((()=>[w(o,{icon:"el-icon-search",onClick:e[1]||(e[1]=e=>i.search())})])),_:1},8,["modelValue","onInput"]),F,D,w("section",null,[(v(!0),y(_,null,C(i.data,(e=>(v(),y("span",{key:e,class:"icon-items",onClick:l=>i.selected(e)},[w("i",{class:e},null,2),L],8,["onClick"])))),128))])])}));A.render=Z,A.__scopeId="data-v-57f84410";const $=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,B=(i,e,l)=>{$.test(e)?l():l(new Error("必须输入正确的路径"))};var T=u({name:"MenuNew",components:{Icons:A},emits:["success"],setup(i,{emit:e}){const l={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:B,trigger:"blur"}]},c=f(),t=m({form:{path:"",meta:{title:"",icon:""}},modal:!1,loading:!1});return s(n({},g(t)),{formRef:c,rules:l,onSuccess:i=>{console.log("val is ",i),t.modal=!1,t.form.meta.icon=i},submitForm:()=>{c.value.validate((i=>!!i&&(console.log(t.form),e("success",t.form),!0)))},handleClickChoose:()=>{t.modal=!t.modal,console.log(" state.modal",t.modal)}})}});const N={class:"new"},G=j("选择图标"),H=w("i",{class:"fa fa-plus"},null,-1),J=j(" 确认修改 ");T.render=function(i,e,l,c,t,a){const o=k("el-input"),n=k("el-form-item"),s=k("el-button"),r=k("icons"),d=k("el-popover"),u=k("el-row"),m=k("el-form"),f=S("loading");return z((v(),y("div",N,[w(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:x((()=>[w(n,{label:"菜单名称",prop:"meta.title"},{default:x((()=>[w(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),w(n,{label:"菜单图标",prop:"meta.icon"},{default:x((()=>[w(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),w(s,{disabled:"disabled"},{default:x((()=>[w("i",{class:i.form.meta.icon},null,2)])),_:1}),w(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:x((()=>[w(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:x((()=>[G])),_:1},8,["onClick"])])),default:x((()=>[w(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),w(n,{label:"菜单路径",prop:"path"},{default:x((()=>[w(o,{modelValue:i.form.path,"onUpdate:modelValue":e[3]||(e[3]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),w(u,{class:"btn-container"},{default:x((()=>[w(s,{size:"mini",type:"primary",onClick:e[4]||(e[4]=e=>i.submitForm())},{default:x((()=>[H,J])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};const K=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,Q=(i,e,l)=>{K.test(e)?l():l(new Error("必须输入正确的路径"))};var W=u({name:"MenuEdit",components:{Icons:A},props:{currentMenu:{type:Object,default:null}},emits:["success"],setup(i,{emit:e}){const l=E(i,"currentMenu");console.log(l);const c={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:Q,trigger:"blur"}]},t=f(),a=m({form:l,modal:!1,loading:!1});return s(n({},g(a)),{formRef:t,rules:c,onSuccess:i=>{console.log("val is ",i),a.modal=!1,a.form.meta.icon=i},submitForm:()=>{t.value.validate((i=>!!i&&(console.log(a.form),e("success",a.form),!0)))},handleClickChoose:()=>{a.modal=!a.modal,console.log(" state.modal",a.modal)}})}});const X={class:"new"},Y=j("选择图标"),ii=w("i",{class:"fa fa-plus"},null,-1),ei=j(" 确认修改 ");W.render=function(i,e,l,c,t,a){const o=k("el-input"),n=k("el-form-item"),s=k("el-button"),r=k("icons"),d=k("el-popover"),u=k("el-row"),m=k("el-form"),f=S("loading");return z((v(),y("div",X,[w(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:x((()=>[w(n,{label:"菜单名称",prop:"meta.title"},{default:x((()=>[w(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),w(n,{label:"菜单图标",prop:"meta.icon"},{default:x((()=>[w(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),w(s,{disabled:"disabled"},{default:x((()=>[w("i",{class:i.form.meta.icon},null,2)])),_:1}),w(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:x((()=>[w(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:x((()=>[Y])),_:1},8,["onClick"])])),default:x((()=>[w(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),w(n,{label:"菜单路径",prop:"path"},{default:x((()=>[w(o,{modelValue:i.form.path,"onUpdate:modelValue":e[3]||(e[3]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),w(u,{class:"btn-container"},{default:x((()=>[w(s,{size:"mini",type:"primary",onClick:e[4]||(e[4]=e=>i.submitForm())},{default:x((()=>[ii,ei])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};var li=u({name:"Menu",components:{MenuNew:T,MenuEdit:W},setup(){const i=r(),e=O((()=>i.getters["settingsModule/getLangState"])),l=m({url:{c:"/menu/add",r:"/menu/list",u:"/menu/update",d:"/menu/delete"},param:{limit:10,page:1},data:[{path:"/",redirect:"/home",meta:{title:"首页",icon:"el-icon-s-home"},children:[{path:"/home",name:"home",component:()=>d((()=>__import__("./home.b86bf8f2.js")),["assets/home.b86bf8f2.js","assets/home.e63236b1.css","assets/index.25816aae.js","assets/index.65286e91.css","assets/vendor.2a513c56.js","assets/index.b075c2a9.js"]),meta:{title:"首页",icon:"home"}}]}],total:1,loading:!1,addVisible:!1,editVisible:!1,detailVisible:!1,posted:{menu:{path:"",meta:{title:"",icon:""}}}}),c=O((()=>i.state.permissionModule.accessRoutes)),t=i=>{console.log(i)};return p((()=>{(()=>{const i=c.value.filter((i=>{var e;return!0!==(null==(e=null==i?void 0:i.meta)?void 0:e.hidden)}));l.data=i})()})),s(n({},g(l)),{onError:()=>{},lang:e,onAddSuccess:()=>{l.addVisible=!1,t()},onEditSuccess:()=>{console.log("on edit success"),l.editVisible=!1},onDelete:(i,e)=>{console.log(e),(i=>{console.log(i),U.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{q({type:"success",message:"删除成功"})})).catch((()=>{q({type:"info",message:"已取消删除"})}))})(i)},onCurrentChange:i=>{t(i)},onSizeChange:i=>{l.param.limit=i,t(i)},onCreate:()=>{l.addVisible=!0},onRefresh:()=>{t()},onEdit:(i,e)=>{console.log("row,",e,i),l.posted.menu=e,l.editVisible=!0}})}});const ci=j("新增"),ti=j("刷新"),ai={class:"pagination"};li.render=function(i,e,l,c,t,a){const o=k("el-button"),n=k("el-col"),s=k("el-table-column"),r=k("el-tag"),d=k("el-tooltip"),u=k("el-table"),m=k("el-pagination"),f=k("el-row"),p=k("el-card"),g=k("menu-new"),b=k("el-dialog"),h=k("menu-edit"),C=S("loading");return v(),y("div",null,[w(p,{class:"card-ctrl"},{default:x((()=>[w(f,null,{default:x((()=>[w(n,null,{default:x((()=>[w(n,null,{default:x((()=>[w(o,{type:"primary",icon:"el-icon-plus",size:"small",onClick:i.onCreate},{default:x((()=>[ci])),_:1},8,["onClick"]),w(o,{type:"success",icon:"el-icon-refresh",size:"small",onClick:i.onRefresh},{default:x((()=>[ti])),_:1},8,["onClick"])])),_:1}),z(w(u,{data:i.data,stripe:"",class:"table"},{default:x((()=>[w(s,{label:"菜单名称",align:"center"},{default:x((e=>[w("span",null,M(e.row.meta.title[i.lang]),1)])),_:1}),w(s,{label:"图标",align:"center"},{default:x((i=>[w("i",{class:i.row.meta.icon},null,2)])),_:1}),w(s,{label:"路径",align:"center"},{default:x((i=>[w(r,{size:"mini",type:"info"},{default:x((()=>[j(M(i.row.path),1)])),_:2},1024)])),_:1}),w(s,{label:"操作",align:"center"},{default:x((e=>[0!=e.row.state?(v(),y(_,{key:0},[w(d,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:x((()=>[w(o,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:l=>i.onEdit(e.$index,e.row)},null,8,["onClick"])])),_:2},1024),w(d,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:x((()=>[w(o,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:l=>i.onDelete(e.$index,e.row)},null,8,["onClick"])])),_:2},1024)],64)):I("",!0)])),_:1})])),_:1},8,["data"]),[[C,i.loading]]),w("div",ai,[w(m,{"current-page":i.param.page,"page-size":i.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:i.total,background:"",onCurrentChange:i.onCurrentChange,onSizeChange:i.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1})])),_:1})])),_:1}),w(b,{modelValue:i.addVisible,"onUpdate:modelValue":e[1]||(e[1]=e=>i.addVisible=e),width:"632px",title:"新增菜单"},{default:x((()=>[w(g,{onSuccess:i.onAddSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"]),w(b,{modelValue:i.editVisible,"onUpdate:modelValue":e[2]||(e[2]=e=>i.editVisible=e),center:"",width:"632px",title:i.posted.menu.meta.title},{default:x((()=>[w(h,{"current-menu":i.posted.menu,onSuccess:i.onEditSuccess},null,8,["current-menu","onSuccess"])])),_:1},8,["modelValue","title"])])};export default li;
