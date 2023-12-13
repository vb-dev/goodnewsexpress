import{_,n as p,a as d}from"./index.a2d9aecc.js";import{l as o,r,t as u,s as g,f as h,q as i,g as v}from"./vendor.c1a9009c.js";var f=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{attrs:{id:"top-of-page"}}),a("br"),a(o,[a(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[a("div",[a("div",[a("div",[a("h3",{staticClass:"fw-bold"},[t._v("COSMOS"),a("img",{staticStyle:{width:"100px"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"}})]),a("p",{staticClass:"fw-bold"},[t._v("Photos of space and space objects with articles and video from archive NASA")])]),a(u,{staticClass:"my-4"}),a(o,t._l(t.paginatedArticles,function(e){return a(r,{key:e,attrs:{cols:"12",md:"6",lg:"4"}},[a("div",{staticClass:"d-flex align-center"},[a("img",{staticStyle:{width:"15px"},attrs:{src:_}}),a("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(e.date)))])]),a(g,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[a("div",[a(h,{attrs:{flat:"",color:n?"white":"transparent",elevation:n?12:0,hover:""}},[a("a",{attrs:{href:e.url,target:"_blank"}},[e.hdurl?a(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:e.hdurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):a(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://cdn0.sbnation.com/assets/3717901/shutterstock_152383346.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}})],1),a(v,{staticClass:"text"},[a("div",{staticClass:"text-h5 font-weight-bold info--text"},[a("a",{staticStyle:{"font-size":"20px"},attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title))]),a("br"),a("a",{staticClass:"a",staticStyle:{"font-size":"16px"},attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.explanation))])]),a("div",{staticClass:"text-body-1 py-4"})])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),a(r)],1),a("div",{staticClass:"pagination"},[a("span",{staticClass:"prev-bt",attrs:{disabled:t.currentPage===1},on:{click:t.prevPage}},[t._v("Previous")]),a("span",{staticClass:"page-numbers"},[t._v(t._s(t.currentPage)+" / "+t._s(t.totalPages))]),a("span",{staticClass:"next-bt",attrs:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[t._v("Next")])])],1)},m=[];const b={name:"Category",components:{siderbar:()=>d(()=>import("./sidebar.618d6f6a.js"),["assets/sidebar.618d6f6a.js","assets/sidebar.15bb88ed.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:48,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100")).json()}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.scrollToTop())},prevPage(){this.currentPage>1&&(this.currentPage--,this.scrollToTop())},scrollToTop(){const t=document.getElementById("top-of-page");t&&t.scrollIntoView({behavior:"smooth"})}},mounted(){this.fetchNews()}},c={};var x=p(b,f,m,!1,w,"ccb5b476",null,null);function w(t){for(let s in c)this[s]=c[s]}var C=function(){return x.exports}();export{C as default};
