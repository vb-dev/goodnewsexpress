import{b as c,_ as l,n as u,c as A,a as g}from"./index.be81c56c.js";import{p as n,q as r,r as p,f as h,o as i,g as _,v as f,w as v}from"./vendor.eb8fde39.js";var z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(n,{staticClass:"mt-2"},t._l(t.articles.slice(42),function(a,o){return e(r,{key:o,attrs:{cols:"12",md:"6",lg:"3"}},[e(p,[e("div",[e(h,{staticClass:"no-border-no-shadow v-card"},[a.urlToImage?e(i,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(i,{staticClass:"elevation-2",attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:" font-weight-bold primary--text card-body"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)],1)])],1)}),1)],1)},j=[];const I={data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=98;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&language=14&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var k=u(I,z,j,!1,E,"2e9db7fd",null,null);function E(t){for(let s in m)this[s]=m[s]}var w=function(){return k.exports}(),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w}),L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e(n,{staticClass:" "},t._l(t.articles.slice(32),function(a,o){return e(r,{key:o,attrs:{lg:"4"}},[e(h,{attrs:{dark:"",flat:""}},[a.urlToImage?e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:a.urlToImage}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"pl-2"},[e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)]):e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)])],1)],1)}),1)],1)},R=[];const N={data(){return{image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg",articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=41;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},y={};var O=u(N,L,R,!1,V,"20e9cb9f",null,null);function V(t){for(let s in y)this[s]=y[s]}var P=function(){return O.exports}(),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P}),H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e("div",t._l(t.articles.slice(28),function(a,o){return e(n,{key:o,staticClass:"py-4"},[e(r,{attrs:{cols:"12",md:"4"}},[e(p,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(D){var d=D.hover;return[e(h,{attrs:{flat:"",height:"100%",color:d?"white":"transparent",elevation:d?12:0,flat:"",hover:""}},[a.urlToImage?e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:a.urlToImage}}):e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:t.image}})],1)]}}],null,!0)})],1),e(r,[e("div",[e("h3",{staticClass:" font-weight-bold pt-3"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("p",{staticClass:"text-h6 font-weight-regular pt-3 text--secondary"},[t._v(" "+t._s(a.content)+" ")]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)}),1)])},X=[];const q={data(){return{image:"https://intramurals.mit.edu/wp-content/uploads/sites/2/2022/08/MIT-INTRAMURAL-SPORTS-1080x853.png",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=32;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},S={};var U=u(q,H,X,!1,B,"7a757fb1",null,null);function B(t){for(let s in S)this[s]=S[s]}var x=function(){return U.exports}(),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(n,{staticClass:"row"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e("div"),e(n,{staticClass:"mt-2"},t._l(t.articles.slice(1),function(a,o){return e(r,{key:o,attrs:{cols:"12",md:"6",lg:"4"}},[e(p,[e("div",[e(h,{staticClass:"no-border-no-shadow v-card"},[a.urlToImage?e(i,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(i,{staticClass:"elevation-2",attrs:{src:t.image,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:" font-weight-bold primary--text card-body"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:c}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:l}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)],1)])],1)}),1)],1)])]),e(r)],1)],1)},K=[];const Q={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=28;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&language=14&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},b={};var W=u(Q,J,K,!1,Y,"6069cfcc",null,null);function Y(t){for(let s in b)this[s]=b[s]}var C=function(){return W.exports}(),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C}),tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.articles.slice(1),function(a,o){return e(h,{key:a,staticClass:"mt-1"},[a.urlToImage?e(i,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(n,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold mt-2"},[t._v("SPORT")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(f,{staticClass:"elevation-4",attrs:{color:""}},[e(v,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1):e(i,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:t.image}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(n,{staticClass:"flex-column"},[e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(f,{staticClass:"elevation-4",attrs:{color:""}},[e(v,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},et=[];const st={data(){return{image:"https://native-english.com.ua/wp-content/uploads/2017/10/original.jpg",articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=2;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},$={};var at=u(st,tt,et,!1,rt,null,null,null);function rt(t){for(let s in $)this[s]=$[s]}var it=function(){return at.exports}(),nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(n,{staticClass:"row mt-8"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e(it),e("div",{staticClass:"container"},[e("div",[e(C),e(x),e(P)],1),e(n,[e(w)],1)],1)],1)]),e(r)],1),e(A)],1)},ot=[];const ct={name:"Category",components:{baner3:()=>g(()=>import("./baner2.4978142e.js"),["assets/baner2.4978142e.js","assets/vendor.eb8fde39.js","assets/vendor.a36846b9.css","assets/index.be81c56c.js","assets/index.c3be5612.css"]),cardSport:()=>g(()=>Promise.resolve().then(function(){return F}),void 0),cardSport2:()=>g(()=>Promise.resolve().then(function(){return G}),void 0),cardSport3:()=>g(()=>Promise.resolve().then(function(){return Z}),void 0),cardSport4:()=>g(()=>Promise.resolve().then(function(){return M}),void 0),spinner:()=>g(()=>import("./Myspinner.981f6f24.js"),["assets/Myspinner.981f6f24.js","assets/Myspinner.82f29700.css","assets/index.be81c56c.js","assets/index.c3be5612.css","assets/vendor.eb8fde39.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},T={};var lt=u(ct,nt,ot,!1,_t,null,null,null);function _t(t){for(let s in T)this[s]=T[s]}var ht=function(){return lt.exports}();export{ht as default};
