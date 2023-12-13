import{f as i,g as c,i as d,a as p,d as n,e as g,k as m}from"./vendor.c1a9009c.js";import{n as r}from"./index.a2d9aecc.js";import o from"./stocks.8e0b3800.js";var v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"pt-4 text mt-3"},e._l(e.articles,function(s){return t(i,{key:s,staticClass:"my-4",attrs:{color:"",flat:""}},[t(c,{staticClass:"d-flex justify-space-between align-center"},[t("span",{},[t("a",{attrs:{href:s.url,target:"_blank"}},[e._v(" "+e._s(s.title))])]),t("div",{staticClass:"pl-2"},[e._v(e._s(e.formatDateTime(s.publishedAt)))])])],1)}),1)},f=[];const w={data(){return{articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,a=e+this.rows;return this.articles.slice(e,a)}},methods:{formatDateTime(e){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,a)},async getData(){const e=100;try{return await(await fetch(`https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&LanguageCode=en&Tags=business&Page=1&PageSize=${e}`)).json()}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},l={};var x=r(w,v,f,!1,y,"7b48825f",null,null);function y(e){for(let a in l)this[a]=l[a]}var b=function(){return x.exports}(),k=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"pt-4 text mt-3"},e._l(e.articles,function(s){return t(i,{key:s,staticClass:"my-4",attrs:{color:"",flat:""}},[t(c,{staticClass:"d-flex justify-space-between align-center"},[t("span",{},[t("a",{attrs:{href:s.url,target:"_blank"}},[e._v(" "+e._s(s.title))])]),t("div",{staticClass:"pl-2"},[e._v(e._s(e.formatDateTime(s.publishedAt)))])])],1)}),1)},C=[];const P={data(){return{articles:[],currentPage:1,totalPages:1,rows:1,img:"https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg"}},computed:{paginatedArticles(){const e=(this.currentPage-1)*this.rows,a=e+this.rows;return this.articles.slice(e,a)}},methods:{formatDateTime(e){const a={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(e).toLocaleString(void 0,a)},async getData(){const e=100;try{return await(await fetch(`https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&LanguageCode=en&Tags=blockchain&Page=1&PageSize=${e}`)).json()}catch(a){return console.error("Error fetching news:",a),[]}},async fetchNews(){const e=await this.getData();this.articles=e,this.totalPages=Math.ceil(e.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},u={};var $=r(P,k,C,!1,S,"03f230ac",null,null);function S(e){for(let a in u)this[a]=u[a]}var T=function(){return $.exports}(),z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-16"},[t("div",{staticClass:"container mt-1"},[[t(d,{attrs:{placeholder:"Search by name"},on:{input:e.searchCryptocurrencies},model:{value:e.searchText,callback:function(s){e.searchText=s},expression:"searchText"}})]],2),t("div",{attrs:{id:"top-page"}}),t("div",{staticClass:"row"},e._l(e.displayedCryptocurrencies,function(s){return t("div",{key:s.id},[t("div",{staticClass:"card shadow-sm"},[t("div",{staticClass:"card-body"},[t("img",{staticClass:"bd-placeholder-img card-img-top",staticStyle:{width:"30px"},attrs:{src:s.image,alt:s.name}}),t("span",{staticClass:"name fw-bold pl-1",staticStyle:{"font-size":"18px"}},[e._v(e._s(s.name))]),t("span",{staticClass:"symbol"},[e._v("("+e._s(s.symbol)+")")]),t("br"),t("span",[e._v(" Price:$"+e._s(s.current_price))]),t("span",[e._v("(Market Cap: $"+e._s(s.market_cap.toLocaleString())+")")]),t("span",{class:{"positive-change":s.price_change_percentage_24h>0,"negative-change":s.price_change_percentage_24h<0}},[s.price_change_percentage_24h!==null?t("span",[e._v("24h: "+e._s(s.price_change_percentage_24h.toFixed(2))+"%")]):e._e()]),s.total_volume!==null?t("span",[e._v("24h Volume: $"+e._s(s.total_volume.toLocaleString()))]):e._e(),s.exchange_with_max_volume?t("div",[e._v(" Largest Volume Exchange: "+e._s(s.exchange_with_max_volume.name)+" ("+e._s(s.exchange_with_max_volume.symbol)+") Volume: $"+e._s(s.exchange_with_max_volume.volume.toLocaleString())+" ")]):e._e()])])])}),0)])},M=[];const j={data(){return{searchText:"",cryptocurrencies:[],currentPage:1,perPage:100}},computed:{displayedCryptocurrencies(){const e=(this.currentPage-1)*this.perPage,a=e+this.perPage;return this.cryptocurrencies.slice(e,a)},pageCount(){return Math.ceil(this.cryptocurrencies.length/this.perPage)}},mounted(){this.fetchCryptocurrencies()},methods:{async fetchCryptocurrencies(){try{const e=await p.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"usd",ids:"bitcoin,ethereum,tether,binance-coin,cardano,xrp,solana,polkadot,dogecoin,usd-coin,avalanche,terra,elrond,chainlink,litecoin,bitcoin-cash,stellar,vechain,filecoin,tron,eos,monero,cosmos,tezos,ftx-token,neo,celsius-network,dash,iota,zcash,the-graph,hedgetrade,decentraland,arweave,sushiswap,basic-attention-token,zilliqa,0x,augur,civic,dharma,band-protocol,edgeware,staked-ether,ankr,ren,verge,crypto-com-coin,ampleforth,request,truefi,illuvium,keep3rv1,smooth-love-potion,aelf,atletico-madrid-fan-token,bitcoin-gold,celo-dollar,fan-token,lina,waykichain,hive,mithril,wazirx,xinfin-network,nebulas,aavegotchi,math-token,harmony,singularitynet,small-love-potion,perlin,omni,btse-token,maidsafecoin,kleros,x-cash,grin,ravencoin,uquid-coin,nxt,zap,elrond-gold,byteball-bytes,chia,adex,aventus,dmarket,hypercash,opium,digixdao,tokenomy,chromia,latoken,district0x,allianceblock,keeperdao,gameswap",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});this.cryptocurrencies=e.data}catch(e){console.error("Error fetching cryptocurrencies:",e)}},searchCryptocurrencies(){const e=this.searchText.trim().toLowerCase();this.cryptocurrencies=this.cryptocurrencies.filter(a=>a.name.toLowerCase().includes(e)||a.symbol.toLowerCase().includes(e)),this.currentPage=1},nextPage(){this.currentPage<this.pageCount&&(this.currentPage++,this.scrollToTop())},prevPage(){this.currentPage>1&&(this.currentPage--,this.scrollToTop())},scrollToTop(){const e=document.getElementById("top-page");e&&e.scrollIntoView({behavior:"smooth"})}},watch:{searchText(e){e===""&&this.fetchCryptocurrencies()}}},_={};var D=r(j,z,M,!1,L,"0d03c348",null,null);function L(e){for(let a in _)this[a]=_[a]}var E=function(){return D.exports}(),I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"cont mt-9"},[t("div",{staticClass:"video-container"},[t("iframe",{ref:"videoRef",attrs:{width:"100%",height:"auto",frameborder:"0",allowfullscreen:"",src:"https://www.youtube.com/embed/iyOq8DhaMYw?si=r0Z_jUzPIvNgf2AJ"}})])]),t("div",{staticClass:"container"},[t(o),t("div",{staticClass:"mt-4"},[[t("div",{staticClass:"text-center"},[t(n,{attrs:{color:"primary"},on:{click:function(s){e.dialog=!0}}},[e._v(" Top crypto ")]),t(g,{attrs:{width:"auto"},model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}},[t(i,[t(c,[t("top")],1),t(m,[t("div",[t(n,{staticClass:"button",attrs:{color:"pripymary",block:""},on:{click:function(s){e.dialog=!1}}},[e._v("Close ")])],1)])],1)],1)],1)]],2),t("div",{staticClass:"mt-16"},[t("div",{staticClass:"baner"},[t(n,{staticStyle:{"background-color":"black",padding:"8px",position:"absolute",bottom:"0"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("MEDIUM")]),t("span",{staticStyle:{"font-size":"7px",color:"white","margin-top":"14px"}},[e._v("business")])])],1),t("medium"),t("div",{staticClass:"baner2 mt-10"},[t(n,{staticStyle:{"background-color":"black",padding:"8px",position:"absolute",bottom:"0"}},[t("h4",{staticClass:"mt-2 text-white"},[e._v("MEDIUM")]),t("span",{staticStyle:{"font-size":"7px",color:"white","margin-top":"14px"}},[e._v("crypto")])])],1),t("medium2")],1)],1)])},A=[];const R={data(){return{dialog:!1}},mounted(){this.$refs.videoRef.src+="&disablekb=1"},components:{medium:b,medium2:T,stocks:o,top:E},methods:{}},h={};var V=r(R,I,A,!1,F,"331d4d88",null,null);function F(e){for(let a in h)this[a]=h[a]}var U=function(){return V.exports}();export{U as default};
