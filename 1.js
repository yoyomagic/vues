webpackJsonp([1],{231:function(e,t,i){"use strict";function s(e){i(335)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(266),o=i.n(n),l=i(316),a=i(87),r=s,c=a(o.a,l.a,!1,r,null,null);t.default=c.exports},241:function(e,t,i){t=e.exports=i(17)(void 0),t.push([e.i,".toolbar{width:100%;padding:8px;background-color:#fff;overflow:hidden;line-height:32px;border:1px solid #e6ebf5}",""])},242:function(e,t,i){"use strict";function s(e){i(244)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(243),o=i(87),l=s,a=o(null,n.a,!1,l,null,null);t.default=a.exports},243:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"toolbar"},[e._t("default")],2)},n=[],o={render:s,staticRenderFns:n};t.a=o},244:function(e,t,i){var s=i(241);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(88)("30466406",s,!0)},245:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HelpHint",props:{placement:{default:"top"},content:String},data:function(){return{}}}},246:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(245),n=i.n(s),o=i(247),l=i(87),a=l(n.a,o.a,!1,null,null,null);t.default=a.exports},247:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("span",{staticStyle:{"margin-right":"8px"}},[e._t("default")],2),e._v(" "),i("el-tooltip",{attrs:{content:e.content,placement:e.placement}},[i("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])],1)},n=[],o={render:s,staticRenderFns:n};t.a=o},265:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(52),n=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={name:"PermissionsEdit",props:{role:[Object,Boolean]},data:function(){return{dialogFormVisible:!1,btnLoading:!1,allPermissions:[],searchPermissionsDisplayName:"",multipleSelection:[]}},watch:{role:{handler:function(){var e=this;e.role&&(e.dialogFormVisible=!0)},deep:!0},searchPermissionsDisplayName:{handler:function(){this.searchPermissions()}}},methods:{changeFun:function(e){this.multipleSelection=e},searchPermissions:function(){for(var e=this.$refs.permissionsTable.$el.querySelectorAll("tbody tr"),t=this.$refs.permissionsTable.$el.getElementsByClassName("el-table__body-wrapper")[0],i=e[1].offsetHeight,s=!1,n=0;n<this.allPermissions.length;n++)this.searchPermissionsDisplayName&&-1!=this.allPermissions[n].display_name.indexOf(this.searchPermissionsDisplayName)?(e[n].style.backgroundColor="#85ce61",s||(t.scrollTo(0,n*i),s=!0)):e[n].style.backgroundColor="#fff"},btnOk:function(){var e=this,t=this;t.$notify({title:"编辑“"+t.role.name+"”权限成功！",message:"自己对接Api,角色id："+t.role.id+",选择了"+t.multipleSelection.length+"项权限",type:"success"}),this.$emit("success"),this.btnLoading=!0,setTimeout(function(){e.btnLoading=!1,e.dialogFormVisible=!1,e.$refs.permissionsTable.clearSelection()},600)}},mounted:function(){for(var e=this,t=n.default.options.routes[0].children,i=0;i<t.length;i++){var s=t[i];e.allPermissions.push({id:"",name:s.name+"View",display_name:s.meta.title+"查看权限",description:"查看权限"}),e.allPermissions.push({id:"",name:s.name+"Edit",display_name:s.meta.title+"编辑权限",description:"编辑权限"})}},components:{}}},266:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(242),o=s(n),l=i(246),a=s(l),r=i(304),c=s(r),u=i(303),d=s(u);t.default={data:function(){return{roleEditTitle:"角色编辑",currentEditRole:!1,dialogFormVisible:!1,currentEditPermissions:!1,params:{name:""},roleData:[{id:1,key:"SuperAdmin",name:"超级管理员",description:"具有最高权限,全站唯一"},{id:2,key:"NormalAdmin",name:"普通管理员",description:"拥有所有权限,除权限管理权限"},{id:4,key:"Admin",name:"一般管理员",description:"只有查看权限"}]}},methods:{searchRole:function(){for(var e=this.$refs.table.$el.querySelectorAll("tbody tr"),t=e[1].offsetHeight,i=!1,s=0;s<this.roleData.length;s++)this.params.name&&-1!=this.roleData[s].name.indexOf(this.params.name)?(e[s].style.backgroundColor="#85ce61",i||(scrollTo(0,s*t+66),i=!0)):e[s].style.backgroundColor="#fff"},tableAction:function(){return this.$createElement("HelpHint",{props:{content:"编辑角色 / 编辑角色权限"}},"操作")},roleEditChange:function(e){console.log(e);var t=this;t.$notify({title:t.roleEditTitle+"成功！",message:"自己对接Api,并调用你的初始化列表函数！",type:"success"}),t.dialogFormVisible=!1},editRole:function(e){this.currentEditRole=e||!1,this.dialogFormVisible=!0},UploadRole:function(e){},deleteRole:function(e){this.$message({message:"这里请求api删除或者恢复用户之后刷新分页组件，列表自动更新",type:"success"})},resetting:function(e){var t=this.$refs[e].$el;t.style.transform="rotate(180deg)",setTimeout(function(){t.style.transform="rotate(0deg)"},600),this.$message({message:"已经成功重置密码",type:"success"})}},components:{ToolBar:o.default,HelpHint:a.default,RoleEdit:c.default,PermissionsEdit:d.default}}},267:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RoleEdit",props:{dialogFormVisible:Boolean,data:[Object,Boolean],title:String},data:function(){return{form:{id:null,name:"",description:""},btnLoading:!1}},watch:{data:{handler:function(){if(this.data)for(var e in this.form)this.form[e]=this.data[e];else for(var t in this.form)this.form[t]=""},deep:!0}},methods:{handleChange:function(){},btnOk:function(){var e=this,t=!1;if(this.form.name.length<=2&&(t="角色名称必须大于2个字符"),t)return void this.$message.error(t);this.$emit("val-change",this.form),this.btnLoading=!0,setTimeout(function(){e.btnLoading=!1},1e3)}},components:{}}},280:function(e,t,i){t=e.exports=i(17)(void 0),t.push([e.i,"",""])},284:function(e,t,i){t=e.exports=i(17)(void 0),t.push([e.i,"",""])},285:function(e,t,i){t=e.exports=i(17)(void 0),t.push([e.i,"",""])},303:function(e,t,i){"use strict";function s(e){i(334)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(265),o=i.n(n),l=i(315),a=i(87),r=s,c=a(o.a,l.a,!1,r,null,null);t.default=c.exports},304:function(e,t,i){"use strict";function s(e){i(330)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(267),o=i.n(n),l=i(311),a=i(87),r=s,c=a(o.a,l.a,!1,r,null,null);t.default=c.exports},311:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-dialog"},[i("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,"show-close":!1,width:"45%"}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",{attrs:{label:"角色名称"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色描述"}},[i("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入角色描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.$emit("cancel")}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.btnOk}},[e._v("确 定")])],1)],1)],1)},n=[],o={render:s,staticRenderFns:n};t.a=o},315:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-dialog"},[i("el-dialog",{attrs:{title:"编辑“"+e.role.name+"”的权限",visible:e.dialogFormVisible,"show-close":!1}},[i("el-table",{ref:"permissionsTable",staticStyle:{width:"100%"},attrs:{data:e.allPermissions,border:"",height:"500"},on:{"selection-change":e.changeFun}},[i("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"权限KEY"}}),e._v(" "),i("el-table-column",{attrs:{prop:"display_name",label:"权限名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"description",label:"权限描述"},scopedSlots:e._u([{key:"default",fn:function(t){return i("div",{},[e._v("\n          "+e._s(t.row.description?t.row.description:"暂无描述")+"\n        ")])}}])})],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("div",{staticStyle:{float:"left"}},[i("el-input",{attrs:{placeholder:"搜索权限名称",clearable:""},model:{value:e.searchPermissionsDisplayName,callback:function(t){e.searchPermissionsDisplayName=t},expression:"searchPermissionsDisplayName"}})],1),e._v(" "),i("el-button",{on:{click:function(t){e.dialogFormVisible=!1,e.$emit("cancel")}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.btnOk}},[e._v("确 定")])],1)],1)],1)},n=[],o={render:s,staticRenderFns:n};t.a=o},316:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-list"},[i("ToolBar",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:function(t){e.editRole(!1)}}},[e._v("添加")]),e._v(" "),i("div",{staticStyle:{float:"right"}},[i("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入角色名称！",size:"small",clearable:""},on:{clear:e.searchRole},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}}),e._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-search",size:"small"},on:{click:e.searchRole}})],1)],1),e._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.roleData,border:""}},[i("el-table-column",{attrs:{prop:"key",label:"角色key"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作","render-header":e.tableAction,width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small",circle:""},on:{click:function(i){e.editRole(t.row)}}}),e._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-setting",size:"small",circle:""},on:{click:function(i){e.currentEditPermissions=t.row}}})]}}])})],1),e._v(" "),i("RoleEdit",{attrs:{title:e.roleEditTitle,dialogFormVisible:e.dialogFormVisible,data:e.currentEditRole},on:{"val-change":e.roleEditChange,cancel:function(t){e.dialogFormVisible=!1}}}),e._v(" "),i("PermissionsEdit",{attrs:{role:e.currentEditPermissions},on:{success:function(t){e.currentEditPermissions=!1},cancel:function(t){e.currentEditPermissions=!1}}})],1)},n=[],o={render:s,staticRenderFns:n};t.a=o},330:function(e,t,i){var s=i(280);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(88)("2fd39950",s,!0)},334:function(e,t,i){var s=i(284);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(88)("22eede34",s,!0)},335:function(e,t,i){var s=i(285);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(88)("939857a6",s,!0)}});