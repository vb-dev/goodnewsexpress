import{s as c,l,m as _,r as u,f as d,q as n,g,v as p}from"./vendor.871b096d.js";import{n as h}from"./index.54a35515.js";var v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("br"),e("br"),e("h2",{staticClass:"text-h4 font-weight-bold pb-4"},[t._v("Blockchain")]),e(c,{staticClass:"my-1"}),e(l,t._l(t.articles,function(a){return e(_,{key:a,attrs:{cols:"12",lg:"4",md:"6"}},[e(u,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.hover;return[e("div",[e(d,{attrs:{color:r?"white":"transparent",elevation:r?12:0,flat:"",hover:""}},[a.imageurl?e(n,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px",src:a.imageurl}}):e(n,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px",src:"https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg"}}),e(g,[e("div",{staticClass:"text"},[e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e("a",{staticStyle:{"font-weight":"bold"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")])]),e("span",{staticClass:"text-success"},[t._v(" "+t._s(a.source_info.name))]),e("div",{staticClass:"d-flex align-center",staticStyle:{padding:"5px"}},[e(p,{attrs:{color:"",size:"46"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br")],1)])],1)],1)]}}],null,!0)})],1)}),1)],1)},f=[];const m={data(){return{articles:[],currentPage:1,totalPages:1,rows:3}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},o={};var y=h(m,v,f,!1,x,"1ed6edeb",null,null);function x(t){for(let s in o)this[s]=o[s]}var C=function(){return y.exports}();export{C as default};
