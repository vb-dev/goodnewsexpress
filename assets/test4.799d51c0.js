import{l as n,n as r,f as i,r as c,g as l,v as _}from"./vendor.c119a181.js";import{n as u}from"./index.21a7c686.js";var d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(n,{staticClass:"v-col"},[e(r,{staticClass:"v-col",attrs:{cols:"12",xs:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e(n,t._l(t.paginatedArticles,function(a){return e(r,{key:a,staticClass:"v-col",attrs:{cols:"12",md:"12"}},[e("div",[e(i,{attrs:{flat:"",color:t.hover?"white":"transparent",elevation:t.hover?12:0,hover:""}},[e(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),e(l,{staticClass:"text-center text v-col"},[e(_,{attrs:{color:"",size:"76"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br"),e("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),e("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4",staticStyle:{"font-weight":"bold"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")]),e("span",{staticClass:"text-success"},[t._v(" "+t._s(a.source_info.name))])],1)],1)],1)])}),1)],1)])]),e(r)],1)],1)},g=[];const p={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:2}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},o={};var h=u(p,d,g,!1,v,"7b750858",null,null);function v(t){for(let s in o)this[s]=o[s]}var x=function(){return h.exports}();export{x as default};
