"use strict";(self["webpackChunkvant_dormitory_system"]=self["webpackChunkvant_dormitory_system"]||[]).push([[784],{7275:function(t,e,a){a.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return e("div",[t.firstPage?e("van-nav-bar",{attrs:{title:t.firstPage},on:{"click-right":t.onClickRight}},[e("van-icon",{attrs:{slot:"right",name:"ellipsis"},slot:"right"})],1):e("van-nav-bar",{attrs:{title:t.secondPage,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[e("van-icon",{attrs:{slot:"right",name:"ellipsis"},slot:"right"})],1)],1)},o=[],n={props:["firstPage","secondPage"],methods:{onClickLeft(){this.$router.go(-1),console.log("返回")},onClickRight(){console.log("按钮")}}},s=n,l=a(1001),c=(0,l.Z)(s,i,o,!1,null,null,null),r=c.exports},5784:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("top-bar",{attrs:{firstPage:t.topBar}}),e("van-notice-bar",{attrs:{mode:"closeable"}},[e("div",[t._v(" 公告在LED灯或者寝室电子公告栏处显示，该页面用于对展示的公告进行操作 ")])]),e("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.noticeList,(function(a){return e("van-collapse-item",{key:a.id,attrs:{title:a.title,label:"公告发布于"+a.created_date,name:a.id,value:a.update_date}},[e("span",{staticClass:"text"},[t._v(t._s(a.content))]),e("div",{staticClass:"iconcss"},[e("van-icon",{staticStyle:{float:"right"},attrs:{name:"delete"},on:{click:function(e){return t.showdelNotice(a.id)}}}),e("van-icon",{staticStyle:{float:"right"},attrs:{name:"setting"},on:{click:function(e){return t.showupdateNotice(a)}}})],1)])})),1),e("van-dialog",{attrs:{title:t.dialogTitle,"show-cancel-button":""},on:{confirm:t.updateNotice},model:{value:t.showUpdate,callback:function(e){t.showUpdate=e},expression:"showUpdate"}},[e("span",[e("span",[t._v("公告标题:")]),e("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}})],1),e("span",[e("span",[t._v("公告内容:")]),e("van-field",{attrs:{placeholder:"请输入公告内容"},model:{value:t.params.content,callback:function(e){t.$set(t.params,"content",e)},expression:"params.content"}})],1)]),e("van-dialog",{attrs:{title:t.dialogTitle,"show-cancel-button":""},on:{confirm:t.delNotice},model:{value:t.showDel,callback:function(e){t.showDel=e},expression:"showDel"}})],1)},o=[],n=a(8979),s=a(7275),l={components:{TopBar:s.Z},name:"noticeIndex",data(){return{topBar:"公告管理页面",activeName:["1"],noticeList:[],showUpdate:!1,showDel:!1,dialogTitle:"标题",params:{id:"",title:"公告修改测试",content:""}}},created(){this.getNotice()},methods:{getCreatedTime(){for(let t=0;t<this.noticeList.length;t++){const e=new Date(this.noticeList[t].created_date),a=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),o=(e.getDate()+-1).toString().padStart(2,"0");this.noticeList[t].created_date=a+"-"+i+"-"+o}},getUpdateTime(){for(let t=0;t<this.noticeList.length;t++){const e=new Date(this.noticeList[t].update_date),a=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),o=(e.getDate()+-1).toString().padStart(2,"0");this.noticeList[t].update_date=a+"-"+i+"-"+o}},async getNotice(){const t=await(0,n.ZG)();this.noticeList=t.data,this.getCreatedTime(),this.getUpdateTime()},async updateNotice(){const t=await(0,n.Uy)({id:this.params.id,title:this.params.title,content:this.params.content});this.show=!1,console.log(t)},async delNotice(){const t=await(0,n.Io)(this.params.id);this.$router.go(0),console.log(t)},showdelNotice(t){this.dialogTitle="确定删除当前公告吗?",this.params.id=t,this.showDel=!0},showupdateNotice(t){this.dialogTitle="修改公告",this.params=t,this.showUpdate=!0}}},c=l,r=a(1001),d=(0,r.Z)(c,i,o,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=784.ce34f717.js.map