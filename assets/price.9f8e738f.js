import{a as c}from"./vendor.c119a181.js";import{n}from"./index.21a7c686.js";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"crypto-prices"},e._l(e.cryptos,function(r){return s("div",{key:r.name,staticClass:"crypto-box"},[s("h6",{staticClass:"fw-bold"},[e._v(e._s(r.name))]),s("p",{staticClass:"fw-bold"},[e._v("Price: $"+e._s(r.price?r.price.toFixed(2):"Loading"))])])}),0)},a=[];const _={data(){return{cryptos:[{name:"Bitcoin",symbol:"bitcoin"},{name:"Ethereum",symbol:"ethereum"},{name:"Tether",symbol:"tether"}]}},methods:{async fetchCryptoPrices(){for(const e of this.cryptos)try{const s=(await c.get(`https://api.coingecko.com/api/v3/simple/price?ids=${e.symbol}&vs_currencies=usd`)).data;e.price=s[e.symbol].usd}catch(t){console.error(`Error fetching ${e.name} prices:`,t)}}},mounted(){this.fetchCryptoPrices(),setInterval(this.fetchCryptoPrices,6e4)}},o={};var p=n(_,i,a,!1,l,"055b5c14",null,null);function l(e){for(let t in o)this[t]=o[t]}var d=function(){return p.exports}();export{d as default};
