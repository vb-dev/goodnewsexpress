import{f as i,q as o,g as l}from"./vendor.c1a9009c.js";import{n}from"./index.a2d9aecc.js";var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.adClosed?e._e():t("div",{staticClass:"floating-ad bg-black",staticStyle:{"background-color":"black"}},[t(i,{staticStyle:{"background-color":"black"}},[t(o,{staticClass:"ad-image",attrs:{width:e.isMobile?"100%":"300px",height:(e.isMobile,"auto"),src:e.image,"aspect-ratio":16/9,gradient:"to top, rgba(25, 32, 72, .4), rgba(25, 32, 72, .0)"}},[t("div",{staticClass:"mask"}),t("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[t(l,[t("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[t("h1",{staticClass:"text-white"},[e._v("VBD")]),t("p",{staticClass:"text-white"},[e._v("Software development")]),t("p",{staticClass:"text-white"},[e._v("Mobile development")]),t("p",{staticClass:"text-white"},[e._v("Web development")])])])],1)]),t("button",{on:{click:e.closeAd}},[t("img",{staticStyle:{width:"15px"},attrs:{src:"https://freesvg.org/img/close-button.png"}})])],1)],1)},d=[];const c={data(){return{isMobile:!1,adClosed:!1,image:"https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg"}},mounted(){const e=localStorage.getItem("adClosed");this.adClosed=e==="true",this.isMobile=window.innerWidth<=600,window.addEventListener("resize",this.handleResize)},methods:{closeAd(){this.adClosed=!0,localStorage.setItem("adClosed","true")},closeAd(){this.adClosed=!0,localStorage.setItem("adClosed","true")},handleResize(){this.isMobile=window.innerWidth<=600}},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},a={};var _=n(c,r,d,!1,u,"7d08e92e",null,null);function u(e){for(let s in a)this[s]=a[s]}var p=function(){return _.exports}();export{p as default};