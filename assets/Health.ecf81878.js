import{b as n,_ as o,n as g,c as T,a as h}from"./index.21a7c686.js";import{l,n as r,f as p,r as i,g as _,s as f,v as $,w as D}from"./vendor.c119a181.js";var z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e(l,{staticClass:" "},t._l(t.articles.slice(32),function(a,c){return e(r,{key:c,attrs:{lg:"4"}},[e(p,{attrs:{dark:"",flat:""}},[a.urlToImage?e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:a.urlToImage}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"pl-2"},[e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)]):e(i,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(_),e(_,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:o}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:o}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)])],1)],1)}),1)],1)},A=[];const I={data(){return{image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg",articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=41;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},v={};var j=g(I,z,A,!1,k,"3962b9e2",null,null);function k(t){for(let s in v)this[s]=v[s]}var m=function(){return j.exports}(),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e("div",t._l(t.articles.slice(28),function(a,c){return e(l,{key:c,staticClass:"py-4"},[e(r,{attrs:{cols:"12",md:"4"}},[e(f,{attrs:{"close-delay":"50","open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(d){var u=d.hover;return[e(p,{attrs:{flat:"",height:"100%",color:u?"white":"transparent",elevation:u?12:0,flat:"",hover:""}},[a.urlToImage?e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:a.urlToImage}}):e(i,{attrs:{"aspect-ratio":16/9,height:"100%",src:t.image}})],1)]}}],null,!0)})],1),e(r,[e("div",[e("h3",{staticClass:" font-weight-bold pt-3"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])])],1)}),1)])},H=[];const L={data(){return{image:"https://intramurals.mit.edu/wp-content/uploads/sites/2/2022/08/MIT-INTRAMURAL-SPORTS-1080x853.png",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=32;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var R=g(L,M,H,!1,N,"65d67f5a",null,null);function N(t){for(let s in w)this[s]=w[s]}var y=function(){return R.exports}(),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(l,{staticClass:"row"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e(l,{staticClass:"mt-1"},t._l(t.articles.slice(1),function(a,c){return e(r,{key:c,attrs:{cols:"12",md:"6",lg:"4"}},[e(f,[e("div",[e(p,{},[a.urlToImage?e(i,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(i,{staticClass:"elevation-2",attrs:{src:t.image,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:" font-weight-bold   "},[e("div",{staticClass:"text"},[e("a",{staticClass:"  ",attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)])],1)}),1)],1),e(r)],1)},F=[];const X={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,image:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=28;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&language=45&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},x={};var q=g(X,V,F,!1,G,"60ae7a42",null,null);function G(t){for(let s in x)this[s]=x[s]}var P=function(){return q.exports}(),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P}),Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.articles,function(a){return e(p,{key:a,staticClass:"mt-1"},[e(i,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold mt-2"},[t._v(" GEZONDHEID")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e($,{staticClass:"elevation-4",attrs:{color:""}},[e(D,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},B=[];const J={data(){return{articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},b={};var K=g(J,Z,B,!1,Q,null,null,null);function Q(t){for(let s in b)this[s]=b[s]}var S=function(){return K.exports}(),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S}),Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(l,{staticClass:"row mt-8"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e(S),e("div",{staticClass:"container"},[e("div",[e("div",[e(P),e(y),e(m)],1),e(l,t._l(t.articles.slice(41),function(a,c){return e(r,{key:c,attrs:{cols:"12",md:"6",lg:"4"}},[e(f,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(d){var u=d.hover;return[e("div",[e(p,{attrs:{flat:"",color:u?"white":"transparent",elevation:u?12:0,hover:""}},[a.urlToImage?e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:a.urlToImage,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://thumbs.dreamstime.com/t/health-news-broadcast-tv-title-graphic-health-news-graphic-main-title-videos-images-background-seamless-looping-video-140535000.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(_,[e("div",{staticClass:"text-h5 font-weight-bold "},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:o}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)]}}],null,!0)})],1)}),1)],1)])],1),e(r)],1),e(T)],1)},tt=[];const et={name:"healt",components:{siderbar:()=>h(()=>import("./sidebar.b394a0da.js"),["assets/sidebar.b394a0da.js","assets/sidebar.19ef77d2.css","assets/index.21a7c686.js","assets/index.cd097bcb.css","assets/vendor.c119a181.js","assets/vendor.a36846b9.css"]),baner6:()=>h(()=>Promise.resolve().then(function(){return W}),void 0),cardHealth:()=>h(()=>Promise.resolve().then(function(){return E}),void 0),cardHealth2:()=>h(()=>Promise.resolve().then(function(){return O}),void 0),cardHealth3:()=>h(()=>Promise.resolve().then(function(){return U}),void 0),spinner:()=>h(()=>import("./Myspinner.f2850987.js"),["assets/Myspinner.f2850987.js","assets/Myspinner.82f29700.css","assets/index.21a7c686.js","assets/index.cd097bcb.css","assets/vendor.c119a181.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},C={};var st=g(et,Y,tt,!1,at,"471b6940",null,null);function at(t){for(let s in C)this[s]=C[s]}var nt=function(){return st.exports}();export{nt as default};
