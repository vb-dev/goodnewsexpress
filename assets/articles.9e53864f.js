import p from"./nasa.1e0c4ba7.js";import{_ as x,n as r,a as P}from"./index.38963f71.js";import{l,n,t as C,s as $,f as o,r as i,g as c,d as u}from"./vendor.78cb272d.js";var D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"top-of-page2"}}),e("br"),e(l,[e(n,{attrs:{cols:"12",lg:"12",xl:"8"}},[e("div",[e("div",[e("div"),e(C,{staticClass:"my-4"}),e(l,t._l(t.paginatedArticles,function(s){return e(n,{key:s,attrs:{cols:"12",md:"6",lg:"4"}},[e("div",{staticClass:"d-flex align-center"},[e("img",{staticStyle:{width:"15px"},attrs:{src:x}}),e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(s.date)))])]),e($,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(d){var _=d.hover;return[e("div",[e(o,{attrs:{flat:"",color:_?"white":"transparent",elevation:_?12:0,hover:""}},[e("a",{attrs:{href:s.url,target:"_blank"}},[s.hdurl?e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:s.hdurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}}):e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://cdn0.sbnation.com/assets/3717901/shutterstock_152383346.jpg","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}})],1),e(c,{staticClass:"text"},[e("div",{staticClass:"text-h5 font-weight-bold info--text"},[e("a",{staticStyle:{"font-size":"20px"},attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title))]),e("br"),e("a",{staticClass:"a",staticStyle:{"font-size":"16px"},attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.explanation))])]),e("div",{staticClass:"text-body-1 py-4"})])],1)],1)]}}],null,!0)})],1)}),1)],1)])]),e(n)],1),e("div",{staticClass:"pagination"},[e("span",{staticClass:"prev-bt",attrs:{disabled:t.currentPage===1},on:{click:t.prevPage}},[t._v("Previous")]),e("span",{staticClass:"page-numbers"},[t._v(t._s(t.currentPage)+" / "+t._s(t.totalPages))]),e("span",{staticClass:"next-bt",attrs:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[t._v("Next")])])],1)},k=[];const S={name:"Category",components:{siderbar:()=>P(()=>import("./sidebar.a3aaf7ea.js"),["assets/sidebar.a3aaf7ea.js","assets/sidebar.15bb88ed.css","assets/index.38963f71.js","assets/index.6de66539.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"])},data(){return{articles:[],currentPage:1,totalPages:1,rows:48,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){try{return await(await fetch("https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&start_date=2023-06-08&end_date=2023-10-10")).json()}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.scrollToTop2())},prevPage(){this.currentPage>1&&(this.currentPage--,this.scrollToTop2())},scrollToTop2(){const t=document.getElementById("top-of-page2");t&&t.scrollIntoView({behavior:"smooth"})}},mounted(){this.fetchNews()}},h={};var j=r(S,D,k,!1,T,"8ebd9f3e",null,null);function T(t){for(let a in h)this[a]=h[a]}var g=function(){return j.exports}(),E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e(o,{staticClass:"mt-1"},[e(i,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"600px",src:t.image}},[e(c,{staticClass:"fill-height d-flex align-end"},[e(l,{staticClass:"flex-column"},[e(n,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}})]),e(n,{staticClass:"d-flex align-center"})],1)],1)],1)],1)],1)},I=[];const M={data(){return{image:"https://cs14.pikabu.ru/post_img/big/2023/02/11/11/167614534911538297.jpg",articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){const t=1;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=${t}`)).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},v={};var z=r(M,E,I,!1,A,null,null,null);function A(t){for(let a in v)this[a]=v[a]}var f=function(){return z.exports}(),N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-4 text mt-3"},t._l(t.articles,function(s){return e(o,{key:s,staticClass:"my-4",attrs:{color:"",flat:""}},[e(c,{staticClass:"d-flex justify-space-between align-center"},[e("span",{},[e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title))])]),e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(s.publishedAt)))])])],1)}),1)},F=[];const R={data(){return{articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&language=14&PageSize=${t}`)).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},m={};var H=r(R,N,F,!1,O,"571c1af2",null,null);function O(t){for(let a in m)this[a]=m[a]}var L=function(){return H.exports}(),U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-4 text mt-3"},t._l(t.articles,function(s){return e(o,{key:s,staticClass:"my-4",attrs:{color:"",flat:""}},[e(c,{staticClass:"d-flex justify-space-between align-center"},[e("span",{},[e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title))])]),e("div",{staticClass:"pl-2"},[t._v(t._s(t.formatDateTime(s.publishedAt)))])])],1)}),1)},q=[];const K={data(){return{articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){const t=100;try{return(await(await fetch(` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Page=1&language=14&PageSize=${t}`)).json()).items}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},w={};var B=r(K,U,q,!1,V,"ae70c898",null,null);function V(t){for(let a in w)this[a]=w[a]}var Z=function(){return B.exports}(),W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-4 p-4 rounded",staticStyle:{"box-shadow":"0 0 20px 0 rgb(0 0 0 / 50%)"}},[e("div",{staticClass:"text-center "},[e("h3",{staticClass:"f "},[t._v("Search photos and images with descriptions by date")]),e("label",{attrs:{for:"titleInput"}},[t._v("Enter Title")]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleInput,expression:"titleInput"}],staticClass:"input",attrs:{placeholder:"Enter title here",type:"text",id:"titleInput"},domProps:{value:t.titleInput},on:{input:function(s){s.target.composing||(t.titleInput=s.target.value)}}})]),e("p",[e(u,{staticClass:"btn mb-4  text-white",attrs:{color:"info"},on:{click:t.fetchAPOD}},[t._v("search")])],1)]),t.apodData?e(n,{attrs:{cols:"12",lg:"12",xl:"12"}},[e("a",{attrs:{href:t.apodData.url,target:"_blank"}},[e("h2",[t._v(t._s(t.apodData.title))])]),e("p",[t._v(t._s(t.apodData.date))]),e("a",{attrs:{href:t.apodData.url,target:"_blank"}},[t.apodData.hdurl?e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"46px"},attrs:{src:t.apodData.hdurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}}):e(i,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:"https://i0.wp.com/www.worldmissioncentre.com/wp-content/uploads/icons/youtube-icon-flat-red-play-button-logo-vector.png?fit=800%2C800&ssl=1","aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}})],1),e("p",{staticClass:"fw-bold"},[t._v(t._s(t.apodData.explanation))])]):t._e()],1)},Y=[];const G={data(){return{dateInput:"",apodData:null,error:null,apiKey:"0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4"}},methods:{searchOff(){this.dateInput=""},formatDate(t){const a=t.substring(0,2),e=t.substring(2,4);return`${t.substring(4,8)}-${e}-${a}`.replace(/(\d{4})-(\d{2})-(\d{2})/,"$1-$2-$3")},async fetchAPOD(){try{const t=`https://images-api.nasa.gov/search?q=${this.titleInput}&media_type=image`,a=await fetch(t),e=await a.json();a.ok&&e.collection.items.length>0?(this.apodData=e.collection.items[0].data[0],this.error=null):(this.apodData=null,this.error="No images found for the given title.")}catch(t){console.error("Error fetching APOD:",t),this.apodData=null,this.error="An unexpected error occurred."}}}},b={};var J=r(G,W,Y,!1,Q,"92e9f59e",null,null);function Q(t){for(let a in b)this[a]=b[a]}var X=function(){return J.exports}(),tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"cont mt-9"},[e("div",{staticClass:"video-container"},[e("iframe",{ref:"videoRef",attrs:{width:"100%",height:"auto",frameborder:"0",allowfullscreen:"",src:"https://www.youtube.com/embed/tNkZsRW7h2c?si=S0DWz6tKM-xh4eo6"}})])]),e("div",{staticClass:"container"},[e("div",{staticClass:"baner"},[e(u,{staticStyle:{"background-color":"black",padding:"8px",position:"absolute",bottom:"0"}},[e("h4",{staticClass:"mt-2 text-white"},[t._v("MEDIUM")]),e("span",{staticStyle:{"font-size":"7px",color:"white","margin-top":"14px"}},[t._v("science")])])],1),e("medium"),e("br"),e("br"),e("br"),e("div",{staticClass:"baner2"},[e(u,{staticStyle:{"background-color":"black",padding:"8px",position:"absolute",bottom:"0"}},[e("h4",{staticClass:"mt-2 text-white"},[t._v("MEDIUM")]),e("span",{staticStyle:{"font-size":"7px",color:"white","margin-top":"14px"}},[t._v("tech")])])],1),e("medium2"),e(p),e(f),e(g),e("br"),e("br"),e("br")],1)])},et=[];const at={components:{nasa:p,banerCosmos:f,nasa2:g,medium:L,medium2:Z,testCosmos2:X},mounted(){this.$refs.videoRef.src+="&disablekb=1"}},y={};var st=r(at,tt,et,!1,rt,"4f7d22fd",null,null);function rt(t){for(let a in y)this[a]=y[a]}var ct=function(){return st.exports}();export{ct as default};
