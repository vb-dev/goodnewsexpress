import{n as l,a as _}from"./index.a2d9aecc.js";import{l as o,r,s as u,f as d,q as g,g as h,w as p}from"./vendor.c1a9009c.js";var v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(o,[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e("div",{staticClass:"my-2"},[e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("Our Authors")])]),e(o,t._l(t.paginatedArticles,function(a){return e(r,{key:a,attrs:{cols:"12",md:"6"}},[e(u,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(c){var n=c.hover;return[e("div",[e(d,{attrs:{flat:"",color:n?"white":"transparent",elevation:n?12:0,hover:""}},[e(g,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),e(h,{staticClass:"text-center"},[e(p,{attrs:{color:"accent",size:"76"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br"),e("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}},[t._v(" "+t._s(a.categories)+" ")]),e("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4"},[t._v(t._s(a.title)+" ")]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")])],1)],1)],1)]}}],null,!0)})],1)}),1)],1)])]),e(r,[e("div",[e("siderbar")],1)])],1)],1)},f=[];const m={name:"Category",components:{siderbar:()=>_(()=>import("./sidebar.618d6f6a.js"),["assets/sidebar.618d6f6a.js","assets/sidebar.15bb88ed.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:8}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},i={};var y=l(m,v,f,!1,x,"aab14244",null,null);function x(t){for(let s in i)this[s]=i[s]}var P=function(){return y.exports}();export{P as default};
