import{n as i}from"./index.addff8c5.js";import"./vendor.78cb272d.js";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row mt-10"},e._l(e.videos,function(o){return r("div",{key:o.id,staticClass:"col-md-4 mb-4"},[r("iframe",{attrs:{src:e.getVideoEmbedUrl(o.id),frameborder:"0",allowfullscreen:""}}),r("h6",[e._v(e._s(o.title))])])}),0)])},a=[];const c={data(){return{loading:!0,videos:[],apiKey:"AIzaSyAyEgYJYS7yHtiV6ILF1nGKN9POo4yUjRw"}},async mounted(){try{const e=await this.fetchVideos();this.videos=e.items.map(t=>({id:t.id.videoId,title:t.snippet.title}))}catch(e){console.error("Error fetching videos:",e)}finally{this.loading=!1}},methods:{async fetchVideos(){const e=`https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=20&regionCode=US&type=video&videoCategoryId=17&key=${this.apiKey}`,t=await fetch(e),r=await t.json();if(t.ok)return r;throw new Error(r.error.message||"Error fetching videos")},getVideoEmbedUrl(e){return`https://www.youtube.com/embed/${e}`}}},s={};var d=i(c,n,a,!1,l,null,null,null);function l(e){for(let t in s)this[t]=s[t]}var v=function(){return d.exports}();export{v as default};
