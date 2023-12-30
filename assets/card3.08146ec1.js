import{b as c,_ as l,n as _}from"./index.262391f3.js";import{l as d,n as i,s as h,f,r as u,d as m,x as n}from"./vendor.78cb272d.js";var v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.paginatedArticles,function(a,r){return e("div",{key:r,staticClass:"mb-3"},[e("div",{staticClass:"section-title mb-0 "},[e("hr"),e("a",{staticClass:"m-0  text-black font-weight-bold",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"20px"},attrs:{src:c}}),t._v(" "+t._s(a.author))]),t._v(" "),e("img",{staticStyle:{width:"20px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[t._m(0,!0),t._v(" "),e("img",{staticStyle:{width:"20px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]),e("div",{staticClass:"bg-white text-center p-3"},[a.urlToImage?e("img",{staticClass:"img-fluid",staticStyle:{"object-fit":"cover"},attrs:{src:a.urlToImage}}):e("img",{staticClass:"img-fluid",staticStyle:{"object-fit":"cover"},attrs:{src:t.image}})])])}),0)},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"20px"},attrs:{src:c}}),t._v("Mr.X")])}];const w={data(){return{image:"https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg",articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(`https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},g={};var b=_(w,v,y,!1,x,"3a56f289",null,null);function x(t){for(let s in g)this[s]=g[s]}var P=function(){return b.exports}(),S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-1"},t._l(t.articles,function(a){return e(d,{key:a,staticClass:"py-4"},[e(i,{staticClass:"col-sm"},[e(h,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e(f,{attrs:{flat:"",height:"100%",color:o?"white":"transparent",elevation:o?12:0,flat:"",hover:""}},[a.urlToImage?e(u,{attrs:{"aspect-ratio":16/9,height:"100%",src:a.urlToImage}}):e(u,{attrs:{"aspect-ratio":16/9,height:"100%",src:t.image}})],1)]}}],null,!0)})],1),e(i,{staticClass:"col-sm"},[e("div",[e("router-link",{attrs:{to:"/sport"}},[e(m,{staticStyle:{"border-radius":"20px","font-size":"12px",height:"20px",color:"white"},attrs:{color:"red",depressed:""}},[t._v("sport")])],1),e("h3",{staticClass:"text-h6 font-weight-bold pt-3"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("p",{staticClass:"text-h6 font-weight-bold pt-3 text--secondary"}),a.author?e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e(n,{staticStyle:{color:"rgb(61, 151, 225)"},attrs:{large:""}},[t._v("mdi mdi-account-box-outline")]),t._v(" "+t._s(a.author))],1)]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e(n,{staticStyle:{color:"rgb(61, 151, 225)"},attrs:{large:""}},[t._v("mdi mdi-account-box-outline")]),t._v("Mr.X")],1)]),e("div",{staticClass:"d-flex align-center"},[e(n,{staticStyle:{color:"rgb(61, 151, 225)"},attrs:{large:""}},[t._v("mdi-calendar-range")]),e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])],1)],1)]),e(i,{staticClass:"col-sm"},[e("card")],1)],1)}),1)},C=[];const D={components:{card:P},data(){return{image:"https://sport.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/sport-active-part-erasmus-plus-crop.jpg?h=5dabf909&itok=JM-JNmjy",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},p={};var $=_(D,S,C,!1,j,"fcbd327e",null,null);function j(t){for(let s in p)this[s]=p[s]}var k=function(){return $.exports}();export{k as default};
