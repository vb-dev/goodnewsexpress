import{n as c,c as D,a as o}from"./index.a2d9aecc.js";import E from"./crypto-card2.c6110524.js";import T from"./crypto-card3.b03ab808.js";import j from"./crypto-card1.5a8d25de.js";import{l as n,r,f as l,q as u,g as _,w as g,a as k,y as d,t as h,e as A,k as M,d as v}from"./vendor.c1a9009c.js";var L=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(n,{staticClass:"v-col"},[t(r,{staticClass:"v-col",attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t(n,e._l(e.paginatedArticles,function(a){return t(r,{key:a,staticClass:"v-col",attrs:{cols:"12",md:"6"}},[t("div",[t(l,{attrs:{flat:"",color:e.hover?"white":"transparent",elevation:e.hover?12:0,hover:""}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),t(_,{staticClass:"text-center text v-col"},[t(g,{attrs:{color:"",size:"76"}},[t("img",{attrs:{src:a.source_info.img}})]),t("br"),t("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),t("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4",staticStyle:{"font-weight":"bold"}},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.body)+" ")]),t("span",{staticClass:"text-success"},[e._v(" "+e._s(a.source_info.name))])],1)],1)],1)])}),1)],1)])]),t(r)],1)],1)},R=[];const O={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:4}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},f={};var z=c(O,L,R,!1,V,"603dd231",null,null);function V(e){for(let s in f)this[s]=f[s]}var p=function(){return z.exports}(),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p}),N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"my-4"},[t(n,e._l(e.paginatedArticles.slice(2),function(a,i){return t(r,{attrs:{cols:"12",lg:"12",md:"12",keys:i}},[t(l,[t(u,{attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[t("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"}},[t("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[t(g,{attrs:{color:"",size:"46"}},[t("img",{attrs:{src:a.source_info.img}})]),t("span",{staticStyle:{color:"white","font-weight":"bold"}},[e._v(" "+e._s(a.source_info.name))]),t(_,[t("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[t("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])])])],1)])])],1)],1)}),1)],1)},F=[];const B={data(){return{articles:[],currentPage:1,totalPages:1,rows:6}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var H=c(B,N,F,!1,Y,null,null,null);function Y(e){for(let s in m)this[s]=m[s]}var y=function(){return H.exports}(),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),G=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(n,{staticClass:"v-col"},[t(r,{staticClass:"v-col",attrs:{cols:"12",xs:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t(n,e._l(e.paginatedArticles,function(a){return t(r,{key:a,staticClass:"v-col",attrs:{cols:"12",md:"12"}},[t("div",[t(l,{attrs:{flat:"",color:e.hover?"white":"transparent",elevation:e.hover?12:0,hover:""}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"300px"}}),t(_,{staticClass:"text-center text v-col"},[t(g,{attrs:{color:"",size:"76"}},[t("img",{attrs:{src:a.source_info.img}})]),t("br"),t("div",{staticClass:"d-flex align-center",staticStyle:{"font-size":"10px","font-weight":"bold"}}),t("div",{staticClass:"text-h5 font-weight-bold primary--text pt-4",staticStyle:{"font-weight":"bold"}},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.body)+" ")]),t("span",{staticClass:"text-success"},[e._v(" "+e._s(a.source_info.name))])],1)],1)],1)])}),1)],1)])]),t(r)],1)],1)},J=[];const K={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:2}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var Q=c(K,G,J,!1,U,"7b750858",null,null);function U(e){for(let s in w)this[s]=w[s]}var C=function(){return Q.exports}(),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C}),X=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"my-4"},[t(n,e._l(e.paginatedArticles.slice(4),function(a,i){return t(r,{attrs:{cols:"12",lg:"4",md:"12",keys:i}},[t(l,[t(u,{attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[t("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.3)"}},[t("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[t(g,{attrs:{color:"",size:"46"}},[t("img",{attrs:{src:a.source_info.img}})]),t("span",{staticStyle:{color:"white","font-weight":"bold"}},[e._v(" "+e._s(a.source_info.name))]),t(_,[t("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[t("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])])])],1)])])],1)],1)}),1)],1)},Z=[];const tt={data(){return{articles:[],currentPage:1,totalPages:1,rows:10}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},b={};var et=c(tt,X,Z,!1,st,null,null,null);function st(e){for(let s in b)this[s]=b[s]}var x=function(){return et.exports}(),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),rt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"crypto-prices"},e._l(e.cryptos,function(a){return t("div",{key:a.name,staticClass:"crypto-box"},[t("h6",{staticClass:"fw-bold"},[e._v(e._s(a.name))]),t("p",{staticClass:"fw-bold"},[e._v("Price: $"+e._s(a.price?a.price.toFixed(2):"Loading"))])])}),0)},ot=[];const nt={data(){return{cryptos:[{name:"Bitcoin",symbol:"bitcoin"},{name:"Ethereum",symbol:"ethereum"},{name:"Tether",symbol:"tether"}]}},methods:{async fetchCryptoPrices(){for(const e of this.cryptos)try{const t=(await k.get(`https://api.coingecko.com/api/v3/simple/price?ids=${e.symbol}&vs_currencies=usd`)).data;e.price=t[e.symbol].usd}catch(s){console.error(`Error fetching ${e.name} prices:`,s)}}},mounted(){this.fetchCryptoPrices(),setInterval(this.fetchCryptoPrices,6e4)}},P={};var it=c(nt,rt,ot,!1,ct,"055b5c14",null,null);function ct(e){for(let s in P)this[s]=P[s]}var S=function(){return it.exports}(),lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S}),_t=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(n,{staticClass:"mt-7"},[e._l(e.paginatedArticles,function(a){return t(r,{key:a,attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t(l,[t(u,{staticClass:"elevation-2 fill-height",staticStyle:{"border-radius":"16px"},attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[t("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.3)"}},[t("div",{staticClass:"text-h4 font-weight-bold primary--text pt-4"},[t(S),t("div",{staticClass:"text-body-1 py-4 text container "},[t("h2",[t("a",{staticClass:"fw-bold",staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])]),t("p",[t("strong",{staticStyle:{"font-size":"20px"}},[t("a",{staticClass:"text-white",attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.body))])])])]),t("div",{staticClass:"container"},[t("img",{staticStyle:{width:"40px"},attrs:{src:a.source_info.img}}),t("span",{staticClass:"text-success "},[e._v(" "+e._s(a.source_info.name))])])],1)])]),t("div",{staticClass:"container"},[t(_,[t("div",{staticClass:"d-flex align-center justify-space-between"},[t("div",{staticClass:"d-flex align-center"}),t("div",[t(n,{attrs:{"no-gutters":""}},[t(r,[t(d,{staticClass:"pa-2"},[t(p)],1)],1),t(r,[t(d,{staticClass:"pa-2"},[t(x)],1)],1)],1),t(h,{staticClass:"my-4",staticStyle:{"background-color":"green"}}),t(n,{attrs:{"no-gutters":""}},[t(r,[t(d,{},[t(C)],1)],1),t(r,[t(d,{staticClass:"pa-2 ma-2"},[t(y)],1)],1),t(r,[t(d,{},[t(p)],1)],1)],1)],1),t("div",{staticClass:"d-flex align-center"},[t("div")])]),t("div",[t(A,{staticClass:"dialog",attrs:{width:"300"},model:{value:e.dialogCompose,callback:function(i){e.dialogCompose=i},expression:"dialogCompose"}},[t(l,[t(_,{staticClass:"pa-5"},[t("div",{staticClass:"modal-body"},[t("top")],1)]),t(M,{staticClass:"pa-5"},[t(v,{staticClass:"ml-auto",attrs:{outlined:"",color:"red"},on:{click:function(i){return e.saveDraft()}}},[e._v("Cancel")])],1)],1)],1)],1),t("div",{staticClass:"my-2"},[t(v,{attrs:{color:"primary"},on:{click:function(i){return e.compose({})}}},[e._v("TopCrypto ")]),t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Altcoin news")])],1),t(j),t(T),t(E),t(h,{staticClass:"my-8"})],1)],1)],1)],1)])])}),t(r)],2),t(D)],1)},ut=[];const dt={name:"Category",components:{siderbar:()=>o(()=>import("./sidebar.618d6f6a.js"),["assets/sidebar.618d6f6a.js","assets/sidebar.15bb88ed.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css"]),cryptoCard1:()=>o(()=>import("./crypto-card1.5a8d25de.js"),["assets/crypto-card1.5a8d25de.js","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css"]),price:()=>o(()=>Promise.resolve().then(function(){return lt}),void 0),cryptoCard2:()=>o(()=>import("./crypto-card2.c6110524.js"),["assets/crypto-card2.c6110524.js","assets/crypto-card2.3876c062.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css"]),cryptoCard3:()=>o(()=>import("./crypto-card3.b03ab808.js"),["assets/crypto-card3.b03ab808.js","assets/crypto-card3.c5fba742.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css"]),test:()=>o(()=>Promise.resolve().then(function(){return I}),void 0),test2:()=>o(()=>Promise.resolve().then(function(){return at}),void 0),test3:()=>o(()=>Promise.resolve().then(function(){return q}),void 0),test4:()=>o(()=>Promise.resolve().then(function(){return W}),void 0),test5:()=>o(()=>import("./test5.ad67e383.js"),["assets/test5.ad67e383.js","assets/test5.ec78b5ea.css","assets/vendor.c1a9009c.js","assets/vendor.a36846b9.css","assets/index.a2d9aecc.js","assets/index.3feaf407.css"])},data(){return{drafts:[],sent:[],dialogCompose:!1,activeMessage:{},composeMessage:{},valid:!0,articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{compose(){this.dialogCompose=!0},saveDraft(){this.dialogCompose=!1},formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},$={};var gt=c(dt,_t,ut,!1,pt,"3d7d561b",null,null);function pt(e){for(let s in $)this[s]=$[s]}var wt=function(){return gt.exports}();export{wt as default};