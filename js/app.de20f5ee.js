(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=i("5c96"),o=i.n(n),s=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",[i("keep-alive",[t.$route.meta.keepAlive?i("router-view"):t._e()],1)],1),i("transition",[t.$route.meta.keepAlive?t._e():i("router-view",{key:t.$route.fullPath})],1)],1)}),r=[],l={name:"App"},c=l,u=(i("034f"),i("2877")),d=Object(u["a"])(c,s,r,!1,null,null,null),p=d.exports,f=i("8c4f"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-aside",{staticClass:"sideBar"},[i("el-col",[i("h2",[t._v("Movie DB")])]),i("el-col",t._l(t.hotTags,(function(e){return i("el-tag",{key:e,staticClass:"movieTag",on:{click:function(i){return t.addTag(e)}}},[t._v(t._s(e)+" ")])})),1),i("el-col",[t._l(t.filterTags,(function(e){return i("el-tag",{key:e,staticClass:"filterTag",attrs:{closable:"","disable-transitions":!1},on:{close:function(i){return t.closeTag(e)}}},[t._v(" "+t._s(e)+" ")])})),t.tagInputVisible?i("el-input",{ref:"saveTagInput",staticClass:"inputNewTag",attrs:{size:"small"},on:{blur:t.handleTagInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleTagInputConfirm(e)}},model:{value:t.tagInputValue,callback:function(e){t.tagInputValue=e},expression:"tagInputValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showTagInput}},[t._v("+ 输入标签")])],2)],1),i("el-container",[i("el-header",[i("el-col",{staticClass:"optionModule",attrs:{span:2,xs:3}},[i("el-popover",{ref:"popover",attrs:{placement:"right",width:"200",trigger:"click"}},[i("div",[i("div",{staticClass:"hotTag",attrs:{id:"topTags"}},t._l(t.hotTags,(function(e){return i("el-tag",{key:e,staticClass:"movieTag",on:{click:function(i){return t.addTag(e)}}},[t._v(t._s(e)+" ")])})),1),t._l(t.filterTags,(function(e){return i("el-tag",{key:e,staticClass:"filterTag inlineTag",attrs:{closable:"","disable-transitions":!1},on:{close:function(i){return t.closeTag(e)}}},[t._v(" "+t._s(e)+" ")])})),t.tagInputVisible?i("el-input",{ref:"saveTagInput",staticClass:"inputNewTag",attrs:{size:"small"},on:{blur:t.handleTagInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleTagInputConfirm(e)}},model:{value:t.tagInputValue,callback:function(e){t.tagInputValue=e},expression:"tagInputValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showTagInput}},[t._v("+ 输入标签")])],2),i("el-button",{staticClass:"optionButton",style:t.optionButtonStyle,attrs:{slot:"reference",icon:"el-icon-menu",circle:""},slot:"reference"})],1)],1),i("el-col",{staticClass:"searchBar",attrs:{span:4,xs:10,sm:6,md:6}},[i("el-input",{attrs:{placeholder:"输入电影名称","suffix-icon":"el-icon-search",clearable:""},on:{input:t.search},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1),i("el-col",{staticClass:"orderMenu",attrs:{span:5,offset:10,xs:{span:10,offset:0},sm:{span:8,offset:6},md:{span:7,offset:9}}},[i("div",[i("el-button",{class:{activeText:"year"===t.order_by},attrs:{type:"text"},on:{click:function(e){return t.sort("year")}}},[t._v("按年份")]),i("el-button",{class:{activeText:"year"!=t.order_by},attrs:{type:"text"},on:{click:function(e){return t.sort("rating")}}},[t._v("按评分")])],1)])],1),i("el-main",[i("transition",{attrs:{name:"el-fade-in-linear"}},[i("el-row",{directives:[{name:"show",rawName:"v-show",value:t.movieShow,expression:"movieShow"},{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"movieList",attrs:{gutter:20,"element-loading-background":"rgba(0, 0, 0, 0.3)"}},t._l(t.movies,(function(e){return i("el-col",{key:e.id,staticClass:"movieCard",attrs:{span:8,md:6,lg:4,xl:3}},[i("div",{staticClass:"movieItem"},[i("el-popover",{staticClass:"pcPoster",attrs:{"open-delay":400,placement:"right",width:"400",trigger:"hover"}},[i("div",{staticClass:"infomer"},[i("div",{staticClass:"intro"},[t._v(" "+t._s(e.intro)+" ")]),i("div",t._l(e.tags,(function(e){return i("el-tag",{key:e,staticClass:"movieTag",on:{click:function(i){return t.addTag(e)}}},[t._v(t._s(e))])})),1)]),i("div",{staticClass:"poster",style:"background-image: url("+e.poster.replace(/\.webp/,".jpg")+")",attrs:{slot:"reference"},on:{click:function(i){return t.goToMovie(e.id)}},slot:"reference"},[i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:e.poster.replace(/\.webp/,".jpg")}})])]),i("div",{staticClass:"poster mobilePoster",style:"background-image: url("+e.poster.replace(/\.webp/,".jpg")+")",attrs:{slot:"reference"},on:{click:function(i){return t.goToMovie(e.id)}},slot:"reference"})],1),i("div",{staticClass:"movieInfo"},[i("p",{staticClass:"movieTitle",attrs:{title:e.title}},[t._v(" "+t._s(e.title+(""!==e.original_title?" / ":"")+e.original_title)+" "),i("span",{staticClass:"movieYear"},[t._v(" ( "+t._s(e.year)+")")])]),i("div",{staticClass:"doubanRating"},[i("label",{staticClass:"豆瓣评分："}),i("el-rate",{attrs:{value:e.rating/2,disabled:"","text-color":"#ff9900","disabled-void-color":""}}),i("i",{staticClass:"ratingText"},[t._v(" "+t._s(e.rating)+" ")])],1)])])})),1)],1)],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.webAppTip,expression:"webAppTip"}],staticClass:"tooltiptext"},[i("img",{staticClass:"img-rounded",staticStyle:{display:"inline-block",width:"38px","border-radius":"5px",float:"left"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAACFklEQVRoge1bS04CQRDtbscFHoBIYkg8hCYkLjyGuNWNHsCtF9AbGJZ+7qCJilHCOQyGEwibaq2ZZj5M20QkPeDrRwikaOj3pmredNcEeX5xqQUgVNUEqkIQjoYgHA1BOBoi3xPut1oiiiIhpRRKyfh1NB6Lx9c3rzy8C9dai73dnULsqdfzTcN/qZMuLxTVd9Z9w7twrakUk9K/1VQgvJxxiZBxIkupKwDhsBmHFW53dQhzs7k6QMZxSz24egaIjMMKJ4u5gbg6aMa1xdwkgrkBb0tRSx11P74spe6158YlzY8SiWhNbNRqpvmokkakTBqRSVNSZe8ncSXjy2Ahbr4/GfM5Hon3wYeVi1P4UftArJuOaPyDSk4RUIZAPq4MgXxcOZel282mODs9+eVhnI3O7d2PnzmFsxFt1usLJ+QLLtN0nuO283GVMLdw22JjleAyzRmlXr70/AV86vCTzSoPIorvpvCWlefkMWTG8sEnE0vjZlw6huM0eZ/FXRl3Cr/vvgh67iZkSBcnMrECyZjAFMmYKKWnzVajIY4P24V5BsOhuLq+mfd4zgWncCa0aMCu3JZlAROWrL4QtqV5EhilDmpusMKtpa4gzC3cQkoBITy4eg4QGbcJhzA3CuaWAVY4hLnZXB024xLB3Gz7cYxSt+3H//stJAaX+gM3Macal77hXTij2+9XMW0BsH/NCMLRACv8Cz2iOdlhMGeNAAAAAElFTkSuQmCC"}}),i("span",{staticStyle:{"margin-left":"10px",display:"inline-block",width:"250px"}},[t._v("将此web app安装到本机，点击 "),i("img",{staticStyle:{display:"inline-block"},attrs:{width:"18",height:"18",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAMAAAB5ytLYAAAAqFBMVEUAAAD///+A//+qqv+ZzP+SttuAv9+Av+qGyfKMzPKLxeiJxOuJyO2Mxe+GxuyMxuyIw+mKxeqHw+uJxO2JwuyKxe2Kw+2Jxe2Kxu2Jw+yIxOyJxO2JxO2JxeyIw+yJw+uLxeuJxeyJxOuIxeyKxOyKxOyJxO2Jxe2JxOuJxeyKxOuIxOuJxO2Iw+uJxOyJxOyJxOyJxOyJxOyJxe2JxeyJxOyJxOuJxOwDAgImAAAANnRSTlMAAQIDBQcIDBMUFhocHygoLzBARVBTVWFianh9goiJjY2Vm52hpairt8DC3d3j8PP09vf5/f5I5QpwAAAAAWJLR0QB/wIt3gAAAJBJREFUOMtjYEAD3EKcDASAgLa5riB+JRw6ema6BqL4lLBoGsqZ82uayjLhVqNkKiZpzsWqrMGMW42IFANQDQMDK34XgdUw0EyNhJaCPAQIw9RA+fIqqlA16ub6UCAFUwMTMDaBqpE2Z8Zll6zhqJqBU8MnzkZQDSoYVTNE1ciY8/LgAIpGjBA1auZ4ADsDAwDuKCjgkeBotQAAAABJRU5ErkJggg=="}}),t._v(" 添加到主屏幕")])])],1)},v=[],m=(i("4de4"),i("4160"),i("c975"),i("a434"),i("159b"),i("96cf"),i("1da1")),h=i("bc3a"),y={name:"home",data:function(){return{api:"./api",token:"",loading:!1,movies:[],type:"",page:1,limit:40,q:"",order_by:"year",movieShow:!1,noMore:!1,filterTags:[],tagInputVisible:!1,tagInputValue:"",hotTags:["美国","中国大陆","香港","日本","韩国","剧情","经典","人性","犯罪","悬疑","科幻","喜剧","喜剧","2022","2021","2000","1995"]}},computed:{webAppTip:function(){return!(!this.isIos()||this.isInStandaloneMode())},optionButtonStyle:function(){return this.filterTags.length>0?{color:"tomato"}:{color:"#606266"}}},methods:{init:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getMovies();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),listenScoller:function(){var t=this;window.addEventListener("scroll",(function(){if("/home"==t.$route.path){var e=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight||document.body.clientHeight,a=document.documentElement.scrollHeight||document.body.scrollHeight;e+i+100>=a&&t.infLoad()}}))},reset:function(){this.movieShow=!1,this.movies=[],this.type="",this.page=1,this.limit=40,this.q="",this.order_by="year"},refreshByTag:function(){this.noMore=!1,this.page=1,this.movies=[],this.getMovies()},getMovies:function(){var t=this;t.loading=!0;var e={collection:"movie",database:"Douban",dataSource:"Cluster0",filter:{},sort:{},skip:(t.page-1)*t.limit,limit:t.limit};""!==t.q&&(e["filter"]["title"]={},e["filter"]["title"]["$regex"]=t.q,e["filter"]["title"]["$options"]="i"),e["sort"][t.order_by]=-1,e["sort"]["_id"]=-1,t.filterTags.length>0&&(e["filter"]["tags"]={},e["filter"]["tags"]["$all"]=t.filterTags);var i={"Content-Type":"application/json","Access-Control-Request-Headers":"*","api-key":"LLppSL7L7bjMm7uHavkXOICu9iymDvwn51rADdUM7hXDjEhxVGZ8zPRqnKOdnLu8"};setTimeout((function(){h.post("https://dataapi.8610000.xyz",JSON.stringify(e),{headers:i}).then((function(e){0==e.data.documents.length&&(t.noMore=!0),e.data.documents.forEach((function(e){t.movies.push(e),t.movieShow=!0})),setTimeout((function(){t.loading=!1}),400)})).catch((function(e){console.log(e),t.loading=!1,t.init(!0)}))}),1e3)},menuSelect:function(t){this.reset(),this.type="3"===t?"剧集":"2"===t?"电影":"",this.getMovies()},infLoad:function(){this.noMore||this.loading||(this.page++,this.getMovies())},sort:function(t){this.reset(),this.order_by=t,this.getMovies()},search:function(){this.page=1,this.movies=[],this.getMovies()},goToMovie:function(t){this.$router.push({path:"/movie/".concat(t)})},addTag:function(t){-1===this.filterTags.indexOf(t)&&(this.filterTags.push(t),this.refreshByTag())},closeTag:function(t){var e=this.filterTags.indexOf(t);this.filterTags.splice(e,1),this.refreshByTag()},showTagInput:function(){var t=this;this.tagInputVisible=!0,this.$nextTick((function(e){console.log(e),t.$refs.saveTagInput.$refs.input.focus()}))},handleTagInputConfirm:function(){var t=this.tagInputValue;""!==t&&-1===this.filterTags.indexOf(t)&&(this.filterTags.push(t),this.refreshByTag()),this.tagInputVisible=!1,this.tagInputValue=""},isIos:function(){var t=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)},isInStandaloneMode:function(){return"standalone"in window.navigator&&window.navigator.standalone}},mounted:function(){this.init(),this.listenScoller()},watch:{$route:function(){"/home"===this.$route.path&&localStorage.newTag&&""!=localStorage.newTag&&-1===this.filterTags.indexOf(localStorage.newTag)&&(this.filterTags.push(localStorage.newTag),this.refreshByTag(),localStorage.newTag="")},filterTags:function(){this.noMore=!1},q:function(){this.noMore=!1}}},b=y,w=(i("5f95"),Object(u["a"])(b,g,v,!1,null,"4526acd2",null)),C=w.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("transition",{attrs:{name:"el-fade-in"}},[t.contentShow?i("el-row",[i("div",{staticClass:"backDropContainer"},[i("div",{staticClass:"backDropImage",style:"background-image: url('"+t.fanart+"')"})]),i("div",{staticClass:"backDropContainer backgroundContainer"}),i("el-col",{attrs:{span:24}},["/7d7d7d.png"!=t.fanart?i("div",{staticClass:"mobileFanart",style:"background-image: url('"+t.fanart+"')"}):t._e(),"/7d7d7d.png"===t.fanart?i("div",{staticStyle:{height:"60px"}}):t._e()]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"movieInfo"},[i("div",{staticClass:"posterContainer"},[i("img",{staticClass:"posterContent",attrs:{src:t.movieInfo.pic.large.replace(/\.webp/,".jpg")}})]),i("div",{staticClass:"movieDetail"},[i("div",{staticClass:"movieTitle detailItem"},[t._v(" "+t._s(t.movieInfo.title)+" ")]),t.movieInfo.original_title!=t.movieInfo.title?i("div",{staticClass:"movieOriginalTitle detailItem"},[i("div",[t._v(t._s(t.movieInfo.original_title))])]):t._e(),i("div",{staticClass:"movieMInfo detailItem"},[i("div",{staticClass:"mInfoItem"},[i("i",{staticClass:"el-icon-star-on",staticStyle:{color:"red","font-size":"1.4em"}}),i("span",[t._v(t._s(t.movieInfo.rating?t.movieInfo.rating.value:-1))])]),i("div",{staticClass:"mInfoItem"},[t._v(" "+t._s(t.movieInfo.year)+" ")]),i("div",{staticClass:"mInfoItem"},[t._v(" 发布于 "+t._s(t.movieInfo.pubdate.length>0?t.movieInfo.pubdate[0]:"null")+" ")]),i("div",{staticClass:"mInfoItem"})]),i("div",{staticClass:"movieTags detailItem"},[t._l(t.movieInfo.genres,(function(e){return i("a",{key:e.id,staticClass:"tag",on:{click:function(i){return t.addTag(e.text)}}},[t._v(" "+t._s(e.text)+" ")])})),i("a",{key:t.movieInfo.year,staticClass:"tag",on:{click:function(e){return t.addTag(t.movieInfo.year)}}},[t._v(" "+t._s(t.movieInfo.year)+" ")])],2),i("div",{staticClass:"movieDirectors detailItem"},[t.movieInfo.directors>0?i("span",[t._v("导演: ")]):t._e(),t._l(t.movieInfo.directors,(function(e){return i("a",{key:e.id,staticClass:"director",attrs:{href:e.url}},[t._v(" "+t._s(e.name)+" ")])}))],2),i("div",{staticClass:"movieBtns detailItem"},[t.movieInfo.trailer?i("button",{staticClass:"detailBtn",on:{click:function(e){return t.window.open(t.movieInfo.trailer.video_url)}}},[i("i",{staticClass:"detailBtnIcon el-icon-film"}),i("div",{staticClass:"detailBtnText"},[t._v("预告片")])]):t._e(),i("button",{staticClass:"detailBtn",on:{click:function(e){return t.window.open(t.movieInfo.sharing_url)}}},[i("i",{staticClass:"detailBtnIcon el-icon-link"}),i("div",{staticClass:"detailBtnText"},[t._v("豆瓣")])])]),i("div",{class:t.introClass},[t._v(" "+t._s(t.movieInfo.intro)+" ")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!t.introFull,expression:"!introFull"}],staticClass:"moreLessBtn",on:{click:function(e){t.introFull=!t.introFull}}},[t._v("展开"),i("i",{staticClass:"el-icon-caret-bottom"})]),i("a",{directives:[{name:"show",rawName:"v-show",value:t.introFull,expression:"introFull"}],staticClass:"moreLessBtn",on:{click:function(e){t.introFull=!t.introFull}}},[t._v("收起"),i("i",{staticClass:"el-icon-caret-top"})])])])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"movieExtra"},[i("div",{staticClass:"movieActors extraItem"},[i("h4",{staticStyle:{"margin-bottom":"6px",color:"white"}},[t._v("演职人员")]),i("div",{staticClass:"actorsContainer"},[t._l(t.movieInfo.directors.slice(0,2),(function(e){return i("div",{key:e.id,staticClass:"actor"},[e.avatar?i("div",{staticClass:"actorImg",style:"background-image: url("+e.avatar.normal.replace(/\.webp/,".jpg")+")",on:{click:function(i){return t.window.open(e.url)}}},[i("div",{staticClass:"cover"}),i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:e.avatar.normal.replace(/\.webp/,".jpg")}})]):i("div",{staticClass:"actorImg",style:"background-image: url(https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png)",on:{click:function(i){return t.window.open(e.url)}}},[i("div",{staticClass:"cover"}),i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:"https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"}})]),i("span",{staticClass:"actorText"},[t._v(" "+t._s(e.name))]),i("span",{staticClass:"actorText1"},[t._v("导演")])])})),t._l(t.movieInfo.actors.slice(0,5),(function(e){return i("div",{key:e.id,staticClass:"actor"},[e.avatar?i("div",{staticClass:"actorImg",style:"background-image: url("+e.avatar.normal.replace(/\.webp/,".jpg")+")",on:{click:function(i){return t.window.open(e.url)}}},[i("div",{staticClass:"cover"}),i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:e.avatar.normal.replace(/\.webp/,".jpg")}})]):i("div",{staticClass:"actorImg",style:"background-image: url(https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png)",on:{click:function(i){return t.window.open(e.url)}}},[i("div",{staticClass:"cover"}),i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:"https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"}})]),i("span",{staticClass:"actorText"},[t._v(" "+t._s(e.name))]),i("span",{staticClass:"actorText1"},[t._v(" 演员")])])}))],2)])])]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"movieExtra"},[t.recommendMovies.length>0?i("div",{staticClass:"movieRelatedMovies extraItem"},[i("h4",{staticStyle:{"margin-bottom":"6px",color:"white"}},[t._v("推荐影片")]),i("div",{staticClass:"relateMoviesContainer"},t._l(t.recommendMovies,(function(e){return i("div",{key:e.id,staticClass:"relatedMovies"},[i("div",{staticClass:"relatedMoviesImg",style:"background-image: url("+e.pic.normal.replace(/\.webp/,".jpg")+")",on:{click:function(i){return t.gotoMovie(e.id)}}},[i("div",{staticClass:"cover"}),i("img",{staticStyle:{width:"1px",height:"1px"},attrs:{src:e.pic.normal.replace(/\.webp/,".jpg")}})]),i("span",{staticClass:"relatedMovieText"},[t._v(" "+t._s(e.title))])])})),0)]):t._e()])])],1):t._e()],1)],1),i("el-header",[i("transition",{attrs:{name:"el-fade-in"}},[i("el-col",{attrs:{span:12,lg:11}},[i("button",{staticClass:"backButton",on:{click:function(e){return t.goBack()}}},[i("i",{staticClass:"el-icon-back"})])]),i("el-col",{attrs:{span:12}})],1)],1)],1)},k=[],I=(i("fb6a"),i("bc3a")),A={name:"movie",data:function(){return{window:window,id:"",playOptions:[{label:"nPlayer"},{label:"VLC"},{label:"MXPlayer"},{label:"MXPlayer Pro"},{label:"PotPlayer"},{label:"IINA"}],fanart:"",playType:"nPlayer",videoFiles:[],movieInfo:{},introFull:!1,potplayer:"C:\\\\Program Files\\\\DAUM\\\\PotPlayer\\\\PotPlayerMini64.exe",tipVisible:!1,fromIndex:!1,contentShow:!1,playListVisible:!1,recommendMovies:[]}},methods:{init:function(){this.id=this.$route.params.id},getData:function(){var t=this;I.get("https://douban.8610000.xyz/data/".concat(t.id,".json")).then((function(e){var i=e.data;t.poster=i.pic.large,t.fanart=i.extra&&i.extra.backdrops.length>0&&""!==i.extra.backdrops[0]?"https://www.themoviedb.org/t/p/original"+i.extra.backdrops[0]:"/7d7d7d.png",t.movieInfo=i,t.contentShow=!0,t.getRecommendations()})).catch((function(t){console.log(t),window.open("/","_self")}))},getRecommendations:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.get("https://douban.8610000.xyz/recommendation/".concat(this.id,".json"));case 2:e=t.sent,this.recommendMovies=e.data.recommendations.slice(0,7);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goBack:function(){this.fromIndex?this.$router.go(-1):this.$router.push({path:"/home"})},gotoMovie:function(t){this.$router.push({path:"/movie/".concat(t)})},addTag:function(t){localStorage.newTag=t,this.goBack()}},beforeRouteEnter:function(t,e,i){i((function(t){"/home"===e.fullPath&&(t.fromIndex=!0)}))},mounted:function(){this.init(),this.getData()}},_=A,T=(i("f2ed"),Object(u["a"])(_,x,k,!1,null,"5ae2cccc",null)),M=T.exports,O=f["a"].prototype.push;f["a"].prototype.push=function(t){return O.call(this,t).catch((function(t){return t}))},a["default"].use(f["a"]);var S=[{path:"",redirect:"/home"},{path:"/home",component:C,meta:{keepAlive:!0}},{path:"/movie/:id",component:M,meta:{keepAlive:!1}}],B=new f["a"]({routes:S,mode:"hash",linkActiveClass:"active"}),J=B;a["default"].config.productionTip=!1,a["default"].use(o.a),new a["default"]({router:J,render:function(t){return t(p)}}).$mount("#app")},"5f95":function(t,e,i){"use strict";i("b879")},"7d05":function(t,e,i){},"85ec":function(t,e,i){},b879:function(t,e,i){},f2ed:function(t,e,i){"use strict";i("7d05")}});
//# sourceMappingURL=app.de20f5ee.js.map