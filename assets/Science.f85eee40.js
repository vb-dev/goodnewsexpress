import{b as i,_ as c,n as h,c as C,a as u}from"./index.262391f3.js";import{l,n as r,f as p,r as n,g as _,s as f,w as T,x as $}from"./vendor.78cb272d.js";var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e(l,{staticClass:" "},t._l(t.articles.slice(32),function(a,o){return e(r,{key:o,attrs:{lg:"4"}},[e(p,{attrs:{dark:"",flat:""}},[a.urlToImage?e(n,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:a.urlToImage}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"pl-2"},[e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)]):e(n,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)])],1)],1)}),1)],1)},A=[];const I={data(){return{image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg",articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=41;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},v={};var z=h(I,D,A,!1,j,"9f7aa3ce",null,null);function j(t){for(let s in v)this[s]=v[s]}var m=function(){return z.exports}(),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e("div",t._l(t.articles.slice(28),function(a,o){return e(l,{key:o,staticClass:"py-4"},[e(r,{attrs:{cols:"12",md:"4"}},[e(f,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(d){var g=d.hover;return[e(p,{attrs:{flat:"",height:"100%",color:g?"white":"transparent",elevation:g?12:0,flat:"",hover:""}},[a.urlToImage?e(n,{attrs:{"aspect-ratio":16/9,height:"100%",src:a.urlToImage}}):e(n,{attrs:{"aspect-ratio":16/9,height:"100%",src:t.image}})],1)]}}],null,!0)})],1),e(r,[e("div",[e("h3",{staticClass:" font-weight-bold pt-3"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("p",{staticClass:"text-h6 font-weight-regular pt-3 text--secondary"},[t._v(" "+t._s(a.content)+" ")]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)}),1)])},M=[];const L={data(){return{image:"https://intramurals.mit.edu/wp-content/uploads/sites/2/2022/08/MIT-INTRAMURAL-SPORTS-1080x853.png",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=32;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var R=h(L,k,M,!1,N,"bc303156",null,null);function N(t){for(let s in w)this[s]=w[s]}var y=function(){return R.exports}(),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(l,{staticClass:"row"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e("div"),e(l,{staticClass:"mt-2"},t._l(t.articles.slice(1),function(a,o){return e(r,{key:o,attrs:{cols:"12",md:"6",lg:"4"}},[e(f,[e("div",[e(p,{staticClass:"no-border-no-shadow v-card"},[a.urlToImage?e(n,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(n,{staticClass:"elevation-2",attrs:{src:t.image,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:" font-weight-bold primary--text card-body"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)],1)])],1)}),1)],1)])]),e(r)],1)],1)},F=[];const H={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=28;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Page=1&language=14&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},x={};var X=h(H,V,F,!1,q,"42787058",null,null);function q(t){for(let s in x)this[s]=x[s]}var S=function(){return X.exports}(),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S}),B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.articles,function(a){return e(p,{key:a,staticClass:"mt-1"},[e(n,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold mt-2"},[t._v("SCIENCE")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(T,{staticClass:"elevation-4",attrs:{color:""}},[e($,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},G=[];const J={data(){return{articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},P={};var K=h(J,B,G,!1,Q,null,null,null);function Q(t){for(let s in P)this[s]=P[s]}var W=function(){return K.exports}(),Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(l,{staticClass:"row mt-8"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e(W),e("div",{staticClass:"container"},[e("div",[e("div",[e(S),e(y),e(m)],1),e(l,t._l(t.articles.slice(41),function(a,o){return e(r,{key:o,attrs:{cols:"12",md:"6",lg:"4"}},[e(f,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(d){var g=d.hover;return[e("div",[e(p,{attrs:{flat:"",color:g?"white":"transparent",elevation:g?12:0,hover:""}},[a.urlToImage?e(n,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):e(n,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://thephysicist.in/wp-content/uploads/2021/09/Science-News.jpg.webp","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.content)+" ")]),e("div",{staticClass:"d-flex align-center"},[a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])],1),e(r)],1),e(C)],1)},Z=[];const tt={name:"Category",components:{siderbar:()=>u(()=>import("./sidebar.91e922cd.js"),["assets/sidebar.91e922cd.js","assets/sidebar.15bb88ed.css","assets/index.262391f3.js","assets/index.9057cb6d.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"]),baner4:()=>u(()=>import("./baner2.4ee88ef1.js"),["assets/baner2.4ee88ef1.js","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),cardScience:()=>u(()=>Promise.resolve().then(function(){return E}),void 0),cardScience2:()=>u(()=>Promise.resolve().then(function(){return O}),void 0),cardScience3:()=>u(()=>Promise.resolve().then(function(){return U}),void 0),spinner:()=>u(()=>import("./Myspinner.86a374e6.js"),["assets/Myspinner.86a374e6.js","assets/Myspinner.82f29700.css","assets/index.262391f3.js","assets/index.9057cb6d.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},b={};var et=h(tt,Y,Z,!1,st,null,null,null);function st(t){for(let s in b)this[s]=b[s]}var it=function(){return et.exports}();export{it as default};
