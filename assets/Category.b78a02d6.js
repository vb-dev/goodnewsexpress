import{b as u,_,n as d,a as n,c as z}from"./index.38963f71.js";import{l as o,n as r,d as g,t as f,s as p,f as h,r as c,g as v,w as L}from"./vendor.78cb272d.js";var M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"top-of-page2"}}),t("br"),t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div"),t("router-link",{attrs:{to:"/cosmos"}},[t(g,{staticClass:"mt-2 ",staticStyle:{padding:"8px"},attrs:{color:"indigo"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("COSMOS")])])],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.paginatedArticles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t("div",{staticClass:"d-flex align-center"},[a.author?t("p",{},[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"15px"},attrs:{src:u}}),e._v(" "+e._s(a.author))]),e._v(" "),t("br"),t("img",{staticStyle:{width:"15px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"15px"},attrs:{src:u}}),e._v("Mr.X")]),e._v(" "),t("br"),t("img",{staticStyle:{width:"15px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])]),t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[t("a",{attrs:{href:a.url,target:"_blank"}},[a.hdurl?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.hdurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://cdn0.sbnation.com/assets/3717901/shutterstock_152383346.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}})],1),t(v,{staticClass:"text"},[t("div",{staticClass:"text-h5 font-weight-bold info--text"},[t("a",{staticStyle:{"font-size":"20px"},attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))]),t("br"),t("a",{staticClass:"a",staticStyle:{"font-size":"16px"},attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.explanation))])]),t("div",{staticClass:"text-body-1 py-4"})])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1),t("div",{staticClass:"pagination"},[t("span",{staticClass:"prev-bt",attrs:{disabled:e.currentPage===1},on:{click:e.prevPage}},[e._v("Previous")]),t("span",{staticClass:"page-numbers"},[e._v(e._s(e.currentPage)+" / "+e._s(e.totalPages))]),t("span",{staticClass:"next-bt",attrs:{disabled:e.currentPage===e.totalPages},on:{click:e.nextPage}},[e._v("Next")])])],1)},O=[];const N={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:27,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&start_date=2023-09-08&end_date=2023-11-10")).json()}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.scrollToTop2())},prevPage(){this.currentPage>1&&(this.currentPage--,this.scrollToTop2())},scrollToTop2(){const e=document.getElementById("top-of-page2");e&&e.scrollIntoView({behavior:"smooth"})}},mounted(){this.fetchNews()}},w={};var R=d(N,M,O,!1,V,"3d1ea260",null,null);function V(e){for(let s in w)this[s]=w[s]}var x=function(){return R.exports}(),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/science"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"blue",padding:"8px"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("SCIENCE")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.articles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://thephysicist.in/wp-content/uploads/2021/09/Science-News.jpg.webp","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.content)+" ")]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},X=[];const B={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=12;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},b={};var q=d(B,F,X,!1,Y,null,null,null);function Y(e){for(let s in b)this[s]=b[s]}var J=function(){return q.exports}(),U=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/enter"}},[t(g,{staticClass:"mt-2 ",staticStyle:{padding:"8px"},attrs:{color:"indigo"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("ENTERTAINMENT")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.articles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://www.famestreet.com/Pictures/explore/latest-news.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.content)+" ")]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},G=[];const K={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=12;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},P={};var Z=d(K,U,G,!1,Q,null,null,null);function Q(e){for(let s in P)this[s]=P[s]}var W=function(){return Z.exports}(),tt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/health"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"green",padding:"8px"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("HEALTH")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.articles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://thumbs.dreamstime.com/t/health-news-broadcast-tv-title-graphic-health-news-graphic-main-title-videos-images-background-seamless-looping-video-140535000.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.content)+" ")]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},et=[];const st={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=12;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},S={};var at=d(st,tt,et,!1,rt,null,null,null);function rt(e){for(let s in S)this[s]=S[s]}var it=function(){return at.exports}(),nt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/sport"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"red",padding:"8px"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("SPORT")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.articles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://sport.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/sport-active-part-erasmus-plus-crop.jpg?h=5dabf909&itok=JM-JNmjy","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.content)+" ")]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},ot=[];const ct={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=12;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},C={};var lt=d(ct,nt,ot,!1,ut,null,null,null);function ut(e){for(let s in C)this[s]=C[s]}var T=function(){return lt.exports}(),dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),_t=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/business/crypto"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"black",padding:"8px"},on:{click:e.closedHomeBusiness}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("CRYPTO")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.paginatedArticles,function(a){return t(r,{key:a,attrs:{cols:"12",lg:"4",md:"6"}},[t(p,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{color:i?"white":"transparent",elevation:i?12:0,flat:"",hover:""}},[a.imageurl?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px",src:a.imageurl}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px",src:"https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg"}}),t(v,[t("div",{staticClass:"text"},[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{staticStyle:{"font-weight":"bold"},attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.body)+" ")])]),t("span",{staticClass:"text-success"},[e._v(" "+e._s(a.source_info.name))]),t("div",{staticClass:"d-flex align-center",staticStyle:{padding:"5px"}},[t(L,{attrs:{color:"",size:"46"}},[t("img",{attrs:{src:a.source_info.img}})]),t("br")],1)])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},gt=[];const pt={data(){return{articles:[],currentPage:1,totalPages:1,rows:18}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(e){return console.error("Error fetching news:",e),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},$={};var ht=d(pt,_t,gt,!1,vt,"2c4de785",null,null);function vt(e){for(let s in $)this[s]=$[s]}var k=function(){return ht.exports}(),ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k}),mt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/tech"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"black",padding:"8px"}},[t("h4",{staticClass:"mt-2 text-danger"},[e._v("TECHNOLOGY")])])],1)],1),t(f,{staticClass:"my-4"}),t(o,e._l(e.articles,function(a){return t(r,{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var i=l.hover;return[t("div",[t(h,{attrs:{flat:"",color:i?"white":"transparent",elevation:i?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{staticClass:"text-body-1 py-4"},[e._v(" "+e._s(a.content)+" ")]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},yt=[];const wt={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=12;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},D={};var xt=d(wt,mt,yt,!1,bt,null,null,null);function bt(e){for(let s in D)this[s]=D[s]}var E=function(){return xt.exports}(),Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E}),St=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(o,[t(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("div",[t("router-link",{attrs:{to:"/business"}},[t(g,{staticClass:"mt-2",staticStyle:{"background-color":"gold",padding:"8px"},on:{click:e.closedHomeOpenBusiness}},[t("h4",{staticClass:"mt-2"},[e._v("BUSINESS")])])],1)],1),t(o,{staticClass:"cat"},e._l(e.articles.slice(1),function(a,l){return t(r,{key:l,attrs:{cols:"12",md:"6",lg:"4"}},[t(p,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(i){var y=i.hover;return[t("div",[t(h,{attrs:{flat:"",color:y?"white":"transparent",elevation:y?12:0,hover:""}},[a.urlToImage?t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):t(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),t(v,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.title))])]),t("div",{},[a.author?t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v(" "+e._s(a.author))])]):t("p",[t("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[t("img",{staticStyle:{width:"20px"},attrs:{src:u}}),e._v("Mr.X")])]),t("img",{staticStyle:{width:"20px"},attrs:{src:_}}),t("span",{staticClass:"pl-1"},[e._v(e._s(e.formatDateTime(a.publishedAt)))])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),t(r)],1)],1)},Ct=[];const Tt={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:12,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=13;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},j={};var $t=d(Tt,St,Ct,!1,kt,"001c4438",null,null);function kt(e){for(let s in j)this[s]=j[s]}var I=function(){return $t.exports}(),m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I}),Dt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("router-view"),t("div",{staticClass:"mt-16",attrs:{id:"news"}},[t(I),t(E),t(k),t(T),t(it),t(W),t(J),t(x)],1),t(z)],1)},Et=[];const jt={name:"Category",components:{siderbar:()=>n(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"]),bus:()=>n(()=>Promise.resolve().then(function(){return m}),void 0),sport:()=>n(()=>Promise.resolve().then(function(){return dt}),void 0),tech:()=>n(()=>Promise.resolve().then(function(){return Pt}),void 0),enter:()=>n(()=>Promise.resolve().then(function(){return m}),void 0),health:()=>n(()=>Promise.resolve().then(function(){return m}),void 0),science:()=>n(()=>Promise.resolve().then(function(){return m}),void 0),crypto:()=>n(()=>Promise.resolve().then(function(){return ft}),void 0),cosmos:()=>n(()=>Promise.resolve().then(function(){return H}),void 0),spinner:()=>n(()=>import("./Myspinner.23a6cc05.js"),["assets/Myspinner.23a6cc05.js","assets/Myspinner.82f29700.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,s=e+this.rows;return this.articles.slice(e,s)}},methods:{formatDateTime(e){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(e).toLocaleString(void 0,s)},async getData(){const e=3;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${e}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},A={};var It=d(jt,Dt,Et,!1,At,"39b72f06",null,null);function At(e){for(let s in A)this[s]=A[s]}var Mt=function(){return It.exports}();export{Mt as default};