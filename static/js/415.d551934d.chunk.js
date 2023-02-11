"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{844:function(e,i,n){n(791);i.Z=n.p+"static/media/placeholder-poster.f9db13c5f6963815666d104105243935.svg"},429:function(e,i,n){function a(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n.d(i,{Z:function(){return j}});var t=n(87),r=n(689),o=n(390),d=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}].reduce((function(e,i){var n=i.id,a=i.name;return e[n]=a,e}),{other:"Other"});var c=n(844),s="movie-card_card__zBfR1",m="movie-card_poster__UqRx9",l="movie-card_rating__oqFZx",v="movie-card_description__GuH66",u="movie-card_title__vFNZ9",f="movie-card_genres__dqddm",p=n(184),g=function(e){var i=e.movieInfo,n=i.poster_path,a=i.title,t=i.vote_average,r=i.release_date,g=i.genre_ids,h=o.Z.getPosterUrl({path:n,size:400,placeholder:c.Z}),_=new Date(r).getFullYear(),y=function(e){return e.length>3&&e.splice(2,e.length-2,"other"),e.map((function(e){return d[e]})).join(", ")}(g),j=Math.round(10*t);return(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("img",{className:m,src:h,alt:a,loading:"lazy"}),(0,p.jsxs)("span",{className:l,children:[j,"%"]}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("p",{className:u,children:a}),(0,p.jsxs)("p",{className:f,children:[y," | ",_]})]})]})},h="movie-list_list__FOFu+",_="movie-list_item__ucWIA",y=["id"],j=function(e){var i=e.movies,n=(0,r.TH)();return(0,p.jsx)("ul",{className:h,children:i.map((function(e){var i=e.id,r=a(e,y);return(0,p.jsx)("li",{className:_,children:(0,p.jsx)(t.OL,{to:"/movies/".concat(i),state:{from:n},children:(0,p.jsx)(g,{movieInfo:r})})},i)}))})}},415:function(e,i,n){n.r(i);var a=n(439),t=n(791),r=n(429),o=n(390),d=n(184);i.default=function(){var e=(0,t.useState)([]),i=(0,a.Z)(e,2),n=i[0],c=i[1];return(0,t.useEffect)((function(){o.Z.getTrending({page:1}).then((function(e){var i=e.data;return c(i.results)}))}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Trending today"}),(0,d.jsx)(r.Z,{movies:n})]})}},390:function(e,i,n){var a=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"06ae09073235b2b05f047c5928d7f44e"}}),t={all:"all",movie:"movie",tv:"tv",person:"person"},r={day:"day",week:"week"},o={MEDIA_TYPE:t,TIME_WINDOW:r,getTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page,n=void 0===i?1:i,o=e.mediaType,d=void 0===o?t.movie:o,c=e.timeWindow,s=void 0===c?r.week:c;return a.get("/trending/".concat(d,"/").concat(s),{params:{page:n}})},getMovies:function(e){var i=e.page,n=void 0===i?1:i,t=e.query;return a.get("/search/movie",{params:{page:n,query:t}})},getMovieDetails:function(e){var i=e.movieId;return a.get("/movie/".concat(i)).catch((function(e){if(e.response.status=404)throw Error("Sorry. There is no movie with id ".concat(i));throw e}))},getMovieCredits:function(e){var i=e.movieId;return a.get("/movie/".concat(i,"/credits"))},getMovieReviews:function(e){var i=e.movieId;return a.get("/movie/".concat(i,"/reviews"))},getPosterUrl:function(e){var i=e.path,n=e.size,a=void 0===n?300:n,t=e.placeholder;return i?"https://image.tmdb.org/t/p/w".concat(a).concat(i):t}};i.Z=o}}]);
//# sourceMappingURL=415.d551934d.chunk.js.map