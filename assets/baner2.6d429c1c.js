import{f as g,r as n,g as i,l,n as r,w as o}from"./vendor.c119a181.js";import{n as h}from"./index.572379cf.js";var _=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.articles,function(s){return e(g,{key:s,staticClass:"mt-1"},[s.urlToImage?e(n,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:s.urlToImage}},[e(i,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e("h2",{staticClass:"text-white font-weight-bold b mt-2"},[t._v("AMUSEMENT")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(o,{attrs:{large:""}},[t._v("mdi-calendar-range")]),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(s.publishedAt))+" ")])],1)],1)],1)],1):e(n,{attrs:{src:t.image,"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px"}},[e(i,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(o,{attrs:{large:""}},[t._v("mdi-calendar-range")]),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(s.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},u=[];const d={data(){return{image:"https://horroria.com/wp-content/uploads/2020/12/world-of-Entertainment.jpg",articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},c={};var p=h(d,_,u,!1,f,null,null,null);function f(t){for(let a in c)this[a]=c[a]}var w=function(){return p.exports}();export{w as default};
