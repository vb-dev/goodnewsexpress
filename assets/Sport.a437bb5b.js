import{b as i,_ as n,n as u,c as T,a as h}from"./index.572379cf.js";import{l as o,n as r,s as p,f as g,r as c,g as l,v as d,w as f}from"./vendor.c119a181.js";var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(o,{staticClass:"mt-2"},t._l(t.articles.slice(42),function(a,_){return e(r,{key:_,attrs:{cols:"12",md:"6",lg:"3"}},[e(p,[e("div",[e(g,{staticClass:"no-border-no-shadow v-card"},[a.urlToImage?e(c,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(c,{staticClass:"elevation-2",attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(l,[e("div",{staticClass:" font-weight-bold  card-body "},[e("div",{staticClass:"text"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)])],1)}),1)],1)},z=[];const A={data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=98;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&language=45&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var j=u(A,D,z,!1,I,"70506849",null,null);function I(t){for(let s in m)this[s]=m[s]}var v=function(){return j.exports}(),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v}),E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-6"},[e(o,{staticClass:" "},t._l(t.articles.slice(32),function(a,_){return e(r,{key:_,attrs:{lg:"4"}},[e(g,{attrs:{dark:"",flat:""}},[a.urlToImage?e(c,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:a.urlToImage}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(l),e(l,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"pl-2"},[e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])])],1)]):e(c,{staticClass:"elevation-2 fill-height",attrs:{"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(l),e(l,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{},[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v(" "+t._s(a.author))]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])]):e("p",[e("strong",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:i}}),t._v("Mr.X")]),t._v(" "),e("br"),e("img",{staticStyle:{width:"15px"},attrs:{src:n}}),e("span",{staticClass:"pl-1"},[t._v(t._s(t.formatDateTime(a.publishedAt)))])])])],1)])],1)],1)}),1)],1)},M=[];const L={data(){return{image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg",articles:[],currentPage:1,totalPages:1,rows:3,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=41;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var R=u(L,E,M,!1,N,"1c212dfe",null,null);function N(t){for(let s in w)this[s]=w[s]}var y=function(){return R.exports}(),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.item.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v(" "+t._s(t.item.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(t.item.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(t.item.publishedAt))+" ")])])},F=[];const H={data(){return{image:"https://intramurals.mit.edu/wp-content/uploads/sites/2/2022/08/MIT-INTRAMURAL-SPORTS-1080x853.png",articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=32;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},S={};var X=u(H,V,F,!1,q,"0f015c8d",null,null);function q(t){for(let s in S)this[s]=S[s]}var P=function(){return X.exports}(),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P}),B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(o,{staticClass:"row"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e(o,{staticClass:"mt-1"},t._l(t.articles.slice(1),function(a,_){return e(r,{key:_,attrs:{cols:"12",md:"6",lg:"4"}},[e(p,[e("div",[e(g,{},[a.urlToImage?e(c,{attrs:{src:a.urlToImage,"aspect-ratio":16/9,height:"200px"}}):e(c,{staticClass:"elevation-2",attrs:{src:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}),e(l,[e("div",{staticClass:" font-weight-bold   "},[e("div",{staticClass:"text"},[e("a",{staticClass:"  ",attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])]),a.author?e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v(" "+t._s(a.author)+" "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.formatDateTime(a.publishedAt)))])]):e("p",{staticStyle:{"font-family":"gotic","font-size":"10px"}},[e("img",{staticStyle:{width:"10px"},attrs:{src:i}}),t._v("Mr.X "),e("br"),e("img",{staticStyle:{width:"10px"},attrs:{src:n}}),e("span",{staticClass:"pl-1",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.formatDateTime(a.publishedAt))+" ")])])])])],1)],1)])],1)}),1)],1),e(r)],1)},G=[];const J={name:"Category",components:{},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,image:"https://ucaststudios.com/wp-content/uploads/2020/07/Athletes-in-Different-Sports.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=28;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&language=45&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},x={};var K=u(J,B,G,!1,Q,"40ebadbd",null,null);function Q(t){for(let s in x)this[s]=x[s]}var b=function(){return K.exports}(),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b}),Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.articles.slice(1),function(a,_){return e(g,{key:a,staticClass:"mt-1"},[a.urlToImage?e(c,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:a.urlToImage}},[e(l,{staticClass:"fill-height d-flex align-end"},[e(o,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold mt-2"},[t._v("SPORT")]),e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(d,{staticClass:"elevation-4",attrs:{color:""}},[e(f,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1):e(c,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:t.image}},[e(l,{staticClass:"fill-height d-flex align-end"},[e(o,{staticClass:"flex-column"},[e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title))])])]),e(r,{staticClass:"d-flex align-center"},[e(d,{staticClass:"elevation-4",attrs:{color:""}},[e(f,{attrs:{large:""}},[t._v("mdi-calendar-range")])],1),e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(a.publishedAt))+" ")])],1)],1)],1)],1)],1)}),1)},Z=[];const tt={data(){return{image:"https://native-english.com.ua/wp-content/uploads/2017/10/original.jpg",articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=2;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=45&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},C={};var et=u(tt,Y,Z,!1,st,null,null,null);function st(t){for(let s in C)this[s]=C[s]}var at=function(){return et.exports}(),rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(o,{staticClass:"row mt-8"},[e(r,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e(at),e("div",{staticClass:"container"},[e("div",[e(b),e(P),e(y)],1),e(o,[e(v)],1)],1)],1)]),e(r)],1),e(T)],1)},it=[];const nt={name:"Category",components:{baner3:()=>h(()=>import("./baner2.6d429c1c.js"),["assets/baner2.6d429c1c.js","assets/vendor.c119a181.js","assets/vendor.a36846b9.css","assets/index.572379cf.js","assets/index.908ab510.css"]),cardSport:()=>h(()=>Promise.resolve().then(function(){return O}),void 0),cardSport2:()=>h(()=>Promise.resolve().then(function(){return U}),void 0),cardSport3:()=>h(()=>Promise.resolve().then(function(){return W}),void 0),cardSport4:()=>h(()=>Promise.resolve().then(function(){return k}),void 0),spinner:()=>h(()=>import("./Myspinner.206cd3ce.js"),["assets/Myspinner.206cd3ce.js","assets/Myspinner.82f29700.css","assets/index.572379cf.js","assets/index.908ab510.css","assets/vendor.c119a181.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:100,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(s){return console.error("Error fetching news:",s),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},$={};var ot=u(nt,rt,it,!1,ct,null,null,null);function ct(t){for(let s in $)this[s]=$[s]}var ut=function(){return ot.exports}();export{ut as default};
