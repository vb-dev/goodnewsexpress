import{b as n,_ as o,n as _,c as D,a as h}from"./index.1e6a19fb.js";import{l as c,n as r,s as d,f as g,r as i,g as u,v as z,w as j}from"./vendor.c119a181.js";var A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(c,{staticClass:"mt-2"},t._l(t.articles.slice(42),function(a,l){return e(r,{key:l,attrs:{cols:"12",md:"6",lg:"3"}},[e(d,[e("div",[e(g,{staticClass:"no-border-no-shadow v-card"},[a.urlToImage?e(i,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(i,{staticClass:"elevation-2",attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(u,[e("div",{staticClass:" font-weight-bold  card-body "},[e("div",{staticClass:"text"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)])],1)}),1)},I=[];const k={data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=98;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Page=1&language=45&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},f={};var E=_(k,A,I,!1,M,"80ae4886",null,null);function M(t){for(let s in f)this[s]=f[s]}var v=function(){return E.exports}(),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v}),O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e(c,{staticClass:" "},t._l(t.articles.slice(32),function(a,l){return e(r,{key:l,attrs:{lg:"4"}},[e(g,{attrs:{dark:"",flat:""}},[a.urlToImage?e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:a.urlToImage}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(u),e(u,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"pl-2"},[e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)]):e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(u,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:o}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:o}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)])],1)],1)}),1)],1)},N=[];const R={data(){return{image:"https://www.patriotsoftware.com/wp-content/uploads/2019/05/9-business-formulas-math-haters-cant-ignore.jpg",articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=41;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var V=_(R,O,N,!1,H,"d29b6738",null,null);function H(t){for(let s in m)this[s]=m[s]}var w=function(){return V.exports}(),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w}),X=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e("div",t._l(t.articles.slice(28),function(a,l){return e(c,{key:l,staticClass:"py-4"},[e(r,{attrs:{cols:"12",md:"4"}},[e(d,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function($){var p=$.hover;return[e(g,{attrs:{flat:"",height:"100%",color:p?"white":"transparent",elevation:p?12:0,flat:"",hover:""}},[a.urlToImage?e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:a.urlToImage}}):e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:t.image}})],1)]}}],null,!0)})],1),e(r,[e("div",[e("h3",{staticClass:" font-weight-bold pt-3"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])])],1)}),1)])},q=[];const B={data(){return{image:"https://imageio.forbes.com/specials-images/imageserve/652793e77333947df2b942eb/The-Impact-Of-Digital-Transformation-On-Business-Models--Opportunities-And-Challenges/960x0.jpg?format=jpg&width=960",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=32;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},y={};var G=_(B,X,q,!1,J,"9d2048d6",null,null);function J(t){for(let s in y)this[s]=y[s]}var P=function(){return G.exports}(),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P}),Q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(c,{staticClass:"row"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e(c,{staticClass:"mt-1"},t._l(t.articles.slice(1),function(a,l){return e(r,{key:l,attrs:{cols:"12",md:"6",lg:"4"}},[e(d,[e("div",[e(g,{},[a.urlToImage?e(i,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(i,{staticClass:"elevation-2",attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(u,[e("div",{staticClass:" font-weight-bold   "},[e("div",{staticClass:"text"},[e("a",{staticClass:"  ",attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)])],1)}),1)],1),e(r)],1)},U=[];const W={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=28;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Page=1&language=45&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},x={};var Y=_(W,Q,U,!1,Z,"0d489b24",null,null);function Z(t){for(let s in x)this[s]=x[s]}var b=function(){return Y.exports}(),tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b}),et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.articles,function(a){return e(g,{key:a,staticClass:"mt-1"},[e(i,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(u,{staticClass:"fill-height d-flex align-end"},[e(c,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold "},[t._v("TECHNOLOGIE")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(z,{staticClass:"elevation-4",attrs:{color:""}},[e(j,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},st=[];const at={data(){return{articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},S={};var rt=_(at,et,st,!1,it,null,null,null);function it(t){for(let s in S)this[s]=S[s]}var T=function(){return rt.exports}(),nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),ot=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(c,{staticClass:"row mt-8"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e(T),e("div",{staticClass:"container"},[e("div",[e(b),e(P),e(w)],1),e(c,[e(v)],1)],1)],1)])]),e(r)],1),e(D)],1)},ct=[];const lt={name:"Category",components:{siderbar:()=>h(()=>import("./sidebar.6fac20db.js"),["assets/sidebar.6fac20db.js","assets/sidebar.19ef77d2.css","assets/index.1e6a19fb.js","assets/index.b5072d1f.css","assets/vendor.c119a181.js","assets/vendor.a36846b9.css"]),baner5:()=>h(()=>Promise.resolve().then(function(){return nt}),void 0),cardTech:()=>h(()=>Promise.resolve().then(function(){return F}),void 0),cardTech2:()=>h(()=>Promise.resolve().then(function(){return K}),void 0),cardTech3:()=>h(()=>Promise.resolve().then(function(){return tt}),void 0),cardTech4:()=>h(()=>Promise.resolve().then(function(){return L}),void 0),spinner:()=>h(()=>import("./Myspinner.07c873a2.js"),["assets/Myspinner.07c873a2.js","assets/Myspinner.82f29700.css","assets/index.1e6a19fb.js","assets/index.b5072d1f.css","assets/vendor.c119a181.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},C={};var ht=_(lt,ot,ct,!1,_t,null,null,null);function _t(t){for(let s in C)this[s]=C[s]}var dt=function(){return ht.exports}();export{dt as default};