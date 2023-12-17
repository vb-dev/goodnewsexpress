import{n as c,c as $,a as o}from"./index.0da50e64.js";import"./auto.5266c08e.js";/* empty css                                                        */import E from"./crypto-card2.c6dce7e8.js";import T from"./crypto-card3.a65a1689.js";import j from"./crypto-card1.0669e74a.js";import{l as i,r,f as l,q as u,g as _,x as g,a as k,y as d,u as h,e as A,k as L,d as v}from"./vendor.15c44b09.js";var M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(i,{staticClass:"v-col"},[e(r,{staticClass:"v-col",attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e(i,t._l(t.paginatedArticles,function(a){return e(r,{key:a,staticClass:"v-col",attrs:{cols:"12",md:"6"}},[e("div",[e(l,{attrs:{flat:"",color:t.hover?"white":"transparent",elevation:t.hover?12:0,hover:""}},[e(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),e(_,{staticClass:"text-center text v-col"},[e(g,{attrs:{color:"",size:"76"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br"),e("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),e("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4",staticStyle:{"font-weight":"bold"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")]),e("span",{staticClass:"text-success"},[t._v(" "+t._s(a.source_info.name))])],1)],1)],1)])}),1)],1)])]),e(r)],1)],1)},R=[];const O={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:4}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},f={};var V=c(O,M,R,!1,z,"603dd231",null,null);function z(t){for(let s in f)this[s]=f[s]}var p=function(){return V.exports}(),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p}),N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-4"},[e(i,t._l(t.paginatedArticles.slice(2),function(a,n){return e(r,{attrs:{cols:"12",lg:"12",md:"12",keys:n}},[e(l,[e(u,{attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[e("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(g,{attrs:{color:"",size:"46"}},[e("img",{attrs:{src:a.source_info.img}})]),e("span",{staticStyle:{color:"white","font-weight":"bold"}},[t._v(" "+t._s(a.source_info.name))]),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])])])],1)])])],1)],1)}),1)],1)},F=[];const B={data(){return{articles:[],currentPage:1,totalPages:1,rows:6}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var H=c(B,N,F,!1,Y,null,null,null);function Y(t){for(let s in m)this[s]=m[s]}var y=function(){return H.exports}(),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(i,{staticClass:"v-col"},[e(r,{staticClass:"v-col",attrs:{cols:"12",xs:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e(i,t._l(t.paginatedArticles,function(a){return e(r,{key:a,staticClass:"v-col",attrs:{cols:"12",md:"12"}},[e("div",[e(l,{attrs:{flat:"",color:t.hover?"white":"transparent",elevation:t.hover?12:0,hover:""}},[e(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),e(_,{staticClass:"text-center text v-col"},[e(g,{attrs:{color:"",size:"76"}},[e("img",{attrs:{src:a.source_info.img}})]),e("br"),e("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),e("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4",staticStyle:{"font-weight":"bold"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),e("div",{staticClass:"text-body-1 py-4"},[t._v(" "+t._s(a.body)+" ")]),e("span",{staticClass:"text-success"},[t._v(" "+t._s(a.source_info.name))])],1)],1)],1)])}),1)],1)])]),e(r)],1)],1)},J=[];const K={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:2}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var Q=c(K,G,J,!1,U,"7b750858",null,null);function U(t){for(let s in w)this[s]=w[s]}var x=function(){return Q.exports}(),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),X=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-4"},[e(i,t._l(t.paginatedArticles.slice(4),function(a,n){return e(r,{attrs:{cols:"12",lg:"4",md:"12",keys:n}},[e(l,[e(u,{attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[e("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.3)"}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(g,{attrs:{color:"",size:"46"}},[e("img",{attrs:{src:a.source_info.img}})]),e("span",{staticStyle:{color:"white","font-weight":"bold"}},[t._v(" "+t._s(a.source_info.name))]),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])])])],1)])])],1)],1)}),1)],1)},Z=[];const tt={data(){return{articles:[],currentPage:1,totalPages:1,rows:10}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},C={};var et=c(tt,X,Z,!1,st,null,null,null);function st(t){for(let s in C)this[s]=C[s]}var b=function(){return et.exports}(),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b}),rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"crypto-prices"},t._l(t.cryptos,function(a){return e("div",{key:a.name,staticClass:"crypto-box"},[e("h6",{staticClass:"fw-bold"},[t._v(t._s(a.name))]),e("p",{staticClass:"fw-bold"},[t._v("Price: $"+t._s(a.price?a.price.toFixed(2):"Loading"))])])}),0)},ot=[];const it={data(){return{cryptos:[{name:"Bitcoin",symbol:"bitcoin"},{name:"Ethereum",symbol:"ethereum"},{name:"Tether",symbol:"tether"}]}},methods:{async fetchCryptoPrices(){for(const t of this.cryptos)try{const e=(await k.get(`https://api.coingecko.com/api/v3/simple/price?ids=${t.symbol}&vs_currencies=usd`)).data;t.price=e[t.symbol].usd}catch(s){console.error(`Error fetching ${t.name} prices:`,s)}}},mounted(){this.fetchCryptoPrices(),setInterval(this.fetchCryptoPrices,6e4)}},P={};var nt=c(it,rt,ot,!1,ct,"055b5c14",null,null);function ct(t){for(let s in P)this[s]=P[s]}var S=function(){return nt.exports}(),lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S}),_t=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(i,{staticClass:"mt-7"},[t._l(t.paginatedArticles,function(a){return e(r,{key:a,attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e(l,[e(u,{staticClass:"elevation-2 fill-height",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[e("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.3)"}},[e("div",{staticClass:"text-h4 font-weight-bold primary--text pt-4"},[e(S),e("div",{staticClass:"text-body-1 py-4 text container "},[e("h2",[e("a",{staticClass:"fw-bold",staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),e("p",[e("strong",{staticStyle:{"font-size":"20px"}},[e("a",{staticClass:"text-white",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.body))])])])]),e("div",{staticClass:"container"},[e("img",{staticStyle:{width:"40px"},attrs:{src:a.source_info.img}}),e("span",{staticClass:"text-success "},[t._v(" "+t._s(a.source_info.name))])])],1)])]),e("div",{staticClass:"container"},[e(_,[e("div",{staticClass:"d-flex align-center justify-space-between"},[e("div",{staticClass:"d-flex align-center"}),e("div",[e(i,{attrs:{"no-gutters":""}},[e(r,[e(d,{staticClass:"pa-2"},[e(p)],1)],1),e(r,[e(d,{staticClass:"pa-2"},[e(b)],1)],1)],1),e(h,{staticClass:"my-4",staticStyle:{"background-color":"green"}}),e(i,{attrs:{"no-gutters":""}},[e(r,[e(d,{},[e(x)],1)],1),e(r,[e(d,{staticClass:"pa-2 ma-2"},[e(y)],1)],1),e(r,[e(d,{},[e(p)],1)],1)],1)],1),e("div",{staticClass:"d-flex align-center"},[e("div")])]),e("div",[e(A,{staticClass:"dialog",attrs:{width:"300"},model:{value:t.dialogCompose,callback:function(n){t.dialogCompose=n},expression:"dialogCompose"}},[e(l,[e(_,{staticClass:"pa-5"},[e("div",{staticClass:"modal-body"},[e("top")],1)]),e(L,{staticClass:"pa-5"},[e(v,{staticClass:"ml-auto",attrs:{outlined:"",color:"red"},on:{click:function(n){return t.saveDraft()}}},[t._v("Cancel")])],1)],1)],1)],1),e("div",{staticClass:"my-2"},[e(v,{attrs:{color:"primary"},on:{click:function(n){return t.compose({})}}},[t._v("TopCrypto ")]),e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("Altcoin news")])],1),e(j),e(T),e(E),e(h,{staticClass:"my-8"})],1)],1)],1)],1)])])}),e(r)],2),e($)],1)},ut=[];const dt={name:"Category",components:{siderbar:()=>o(()=>import("./sidebar.a293f7b2.js"),["assets/sidebar.a293f7b2.js","assets/sidebar.15bb88ed.css","assets/index.0da50e64.js","assets/index.fa736690.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css"]),cryptoCard1:()=>o(()=>import("./crypto-card1.0669e74a.js"),["assets/crypto-card1.0669e74a.js","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css","assets/index.0da50e64.js","assets/index.fa736690.css"]),price:()=>o(()=>Promise.resolve().then(function(){return lt}),void 0),cryptoCard2:()=>o(()=>import("./crypto-card2.c6dce7e8.js"),["assets/crypto-card2.c6dce7e8.js","assets/crypto-card2.3876c062.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css","assets/index.0da50e64.js","assets/index.fa736690.css"]),cryptoCard3:()=>o(()=>import("./crypto-card3.a65a1689.js"),["assets/crypto-card3.a65a1689.js","assets/crypto-card3.c5fba742.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css","assets/index.0da50e64.js","assets/index.fa736690.css"]),test:()=>o(()=>Promise.resolve().then(function(){return I}),void 0),test2:()=>o(()=>Promise.resolve().then(function(){return at}),void 0),test3:()=>o(()=>Promise.resolve().then(function(){return q}),void 0),test4:()=>o(()=>Promise.resolve().then(function(){return W}),void 0),test5:()=>o(()=>import("./test5.ce0dc81d.js"),["assets/test5.ce0dc81d.js","assets/test5.ec78b5ea.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css","assets/index.0da50e64.js","assets/index.fa736690.css"]),top:()=>o(()=>import("./top.5e950696.js"),["assets/top.5e950696.js","assets/top.vue_vue_type_style_index_0_scoped_true_lang.23e17492.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css","assets/auto.5266c08e.js","assets/index.0da50e64.js","assets/index.fa736690.css"]),spinner:()=>o(()=>import("./index.0da50e64.js").then(function(t){return t.s}),["assets/index.0da50e64.js","assets/index.fa736690.css","assets/vendor.15c44b09.js","assets/vendor.a36846b9.css"])},data(){return{drafts:[],sent:[],dialogCompose:!1,activeMessage:{},composeMessage:{},valid:!0,articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{compose(){this.dialogCompose=!0},saveDraft(){this.dialogCompose=!1},formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},D={};var gt=c(dt,_t,ut,!1,pt,"2bafa4b7",null,null);function pt(t){for(let s in D)this[s]=D[s]}var Ct=function(){return gt.exports}();export{Ct as default};