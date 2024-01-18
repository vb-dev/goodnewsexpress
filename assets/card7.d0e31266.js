import{d as r,f as i,r as o,g as c,l,n as u}from"./vendor.c119a181.js";import{n as g}from"./index.21a7c686.js";var _=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("router-link",{attrs:{to:"/enter"}},[e(r,{staticStyle:{"border-radius":"20px",height:"25px",color:"white",padding:"10px","font-size":"15px"},attrs:{color:"indigo",depressed:""}},[t._v("entertainment")])],1),t._l(t.articles,function(a){return e(i,{key:a,staticClass:"mt-1"},[e(o,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(c,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e(u,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])])],1)],1)],1)],1)})],2)])},h=[];const d={data(){return{articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},n={};var p=g(d,_,h,!1,f,null,null,null);function f(t){for(let s in n)this[s]=n[s]}var w=function(){return p.exports}();export{w as default};
