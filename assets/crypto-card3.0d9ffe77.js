import{l as o,n as r,s as _,f as p,r as u,g as d,w as g}from"./vendor.78cb272d.js";import{n as h}from"./index.38963f71.js";var v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{attrs:{id:"top-off-page"}}),e(o,[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e(o,t._l(t.paginatedArticles.slice(0),function(a,c){return e(r,{key:c,attrs:{cols:"12",md:"6"}},[e(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[e("div",[e(p,{attrs:{flat:"",color:n?"white":"transparent",elevation:n?12:0,hover:""}},[e(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),e(d,{staticClass:"text-center text"},[e(g,{attrs:{color:"",size:"76"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br"),e("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),e("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")]),e("span",{staticClass:"text-success"},[t._v(t._s(a.source_info.name))])],1)],1)],1)]}}],null,!0)})],1)}),1)],1)]),e(r),e("div",{staticClass:"pagination"},[e("span",{staticClass:"prev-bt",attrs:{disabled:t.currentPage===1},on:{click:t.prevPage}},[t._v("Previous")]),e("span",{staticClass:"page-numbers"},[t._v(t._s(t.currentPage)+" / "+t._s(t.totalPages))]),e("span",{staticClass:"next-bt",attrs:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[t._v("Next")])])],1)],1)},f=[];const m={name:"Category",data(){return{articles:[],currentPage:1,totalPages:1,rows:6}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,coindesk&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.scrollToTop())},prevPage(){this.currentPage>1&&(this.currentPage--,this.scrollToTop())},scrollToTop(){const t=document.getElementById("top-off-page");t&&t.scrollIntoView({behavior:"smooth"})}},mounted(){this.fetchNews()}},i={};var x=h(m,v,f,!1,y,"d9a3711a",null,null);function y(t){for(let s in i)this[s]=i[s]}var w=function(){return x.exports}();export{w as default};
