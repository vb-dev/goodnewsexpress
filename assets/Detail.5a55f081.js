import{c as _,n as c,a as s}from"./index.262391f3.js";import l from"./crypto-card2.dd7d97d2.js";import d from"./crypto-card3.e21becbd.js";import p from"./crypto-card1.0e0d4fd1.js";import{l as i,n as o,f as u,r as m,g,t as h}from"./vendor.78cb272d.js";var f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e(i,{staticClass:"mt-7 "},[e(o,{attrs:{cols:"12",lg:"12",xl:"8"}},[t._l(t.paginatedArticles,function(r){return e(u,{key:r,staticClass:"mt-1"},[e(m,{attrs:{"aspect-ratio":16/9,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"500px",src:r.imageurl}},[e(g,{staticClass:"fill-height d-flex align-end"},[e(i,{staticClass:"flex-column"},[e("h2",{staticClass:"text-h4 text-white font-weight-bold b mt-2"},[t._v("CRYPRO")]),e(o,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h5",{staticClass:"text-h5 py-3",staticStyle:{"line-height":"1.2","font-weight":"bold"}},[e("a",{staticStyle:{color:"white"},attrs:{href:r.url,target:"_blank"}},[t._v(" "+t._s(r.title))])])]),e(o,{staticClass:"d-flex align-center"},[e("div",{staticClass:"text-h6 pl-2"},[t._v(" "+t._s(t.formatDateTime(r.publishedAt))+" ")])])],1)],1)],1)],1)}),e("div",{staticClass:"my-2"},[e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("Altcoin news")])]),e(p),e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("Coindesk")]),e(d),e(l),e(h,{staticClass:"my-8"})],2),e(o)],1),e(_)],1)},v=[];const y={name:"Category",components:{siderbar:()=>s(()=>import("./sidebar.91e922cd.js"),["assets/sidebar.91e922cd.js","assets/sidebar.15bb88ed.css","assets/index.262391f3.js","assets/index.9057cb6d.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css"]),cryptoCard1:()=>s(()=>import("./crypto-card1.0e0d4fd1.js"),["assets/crypto-card1.0e0d4fd1.js","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),price:()=>s(()=>import("./price.25cb7547.js"),["assets/price.25cb7547.js","assets/price.fa1c289f.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),cryptoCard2:()=>s(()=>import("./crypto-card2.dd7d97d2.js"),["assets/crypto-card2.dd7d97d2.js","assets/crypto-card2.e74b2fb0.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),cryptoCard3:()=>s(()=>import("./crypto-card3.e21becbd.js"),["assets/crypto-card3.e21becbd.js","assets/crypto-card3.1781c857.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),test:()=>s(()=>import("./test.a2a0ced5.js"),["assets/test.a2a0ced5.js","assets/test.a36b22ce.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),test2:()=>s(()=>import("./test2.274f6a33.js"),["assets/test2.274f6a33.js","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),test3:()=>s(()=>import("./test3.36088ea9.js"),["assets/test3.36088ea9.js","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),test4:()=>s(()=>import("./test4.863cda5d.js"),["assets/test4.863cda5d.js","assets/test4.1d56fad5.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"]),test5:()=>s(()=>import("./test5.73b6ee51.js"),["assets/test5.73b6ee51.js","assets/test5.ec78b5ea.css","assets/vendor.78cb272d.js","assets/vendor.a36846b9.css","assets/index.262391f3.js","assets/index.9057cb6d.css"])},data(){return{drafts:[],sent:[],dialogCompose:!1,activeMessage:{},composeMessage:{},valid:!0,articles:[],currentPage:1,totalPages:1,rows:1}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,a=t+this.rows;return this.articles.slice(t,a)}},methods:{compose(){this.dialogCompose=!0},saveDraft(){this.dialogCompose=!1},formatDateTime(t){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleString(void 0,a)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},n={};var C=c(y,f,v,!1,P,"331db321",null,null);function P(t){for(let a in n)this[a]=n[a]}var j=function(){return C.exports}();export{j as default};
