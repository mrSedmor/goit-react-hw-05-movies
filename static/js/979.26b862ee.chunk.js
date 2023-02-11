"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[979],{844:function(e,t,n){n(791);t.Z=n.p+"static/media/placeholder-poster.f9db13c5f6963815666d104105243935.svg"},429:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return b}});var i=n(87),a=n(689),o=n(390),c=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}].reduce((function(e,t){var n=t.id,r=t.name;return e[n]=r,e}),{other:"Other"});var s=n(844),d="movie-card_card__zBfR1",m="movie-card_poster__UqRx9",u="movie-card_rating__oqFZx",l="movie-card_description__GuH66",v="movie-card_title__vFNZ9",p="movie-card_genres__dqddm",f=n(184),g=function(e){var t=e.movieInfo,n=t.poster_path,r=t.title,i=t.vote_average,a=t.release_date,g=t.genre_ids,h=o.Z.getPosterUrl({path:n,size:400,placeholder:s.Z}),y=new Date(a).getFullYear(),_=function(e){return e.length>3&&e.splice(2,e.length-2,"other"),e.map((function(e){return c[e]})).join(", ")}(g),b=Math.round(10*i);return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{className:m,src:h,alt:r,loading:"lazy"}),(0,f.jsxs)("span",{className:u,children:[b,"%"]}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("p",{className:v,children:r}),(0,f.jsxs)("p",{className:p,children:[_," | ",y]})]})]})},h="movie-list_list__FOFu+",y="movie-list_item__ucWIA",_=["id"],b=function(e){var t=e.movies,n=(0,a.TH)();return(0,f.jsx)("ul",{className:h,children:t.map((function(e){var t=e.id,a=r(e,_);return(0,f.jsx)("li",{className:y,children:(0,f.jsx)(i.OL,{to:"/movies/".concat(t),state:{from:n},children:(0,f.jsx)(g,{movieInfo:a})})},t)}))})}},979:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return l}});var o=n(439),c=n(791),s=n(87),d=n(390),m=n(429),u=n(184),l=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1],i=(0,s.lr)({}),l=(0,o.Z)(i,2),v=l[0],p=l[1],f=Object.fromEntries(v),g=f.query,h=void 0===g?"":g,y=f.newQuery,_=void 0===y?"":y,b=f.page,j=void 0===b?1:b;(0,c.useEffect)((function(){h&&d.Z.getMovies({query:h,page:j}).then((function(e){var t=e.data;return r(t.results)}))}),[h,j]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Find a movie:"}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_&&_!==h&&p(a({page:1,query:_},f))},children:[(0,u.jsx)("input",{type:"text",name:"newQuery",onChange:function(e){var t=e.target,n=t.name,r=t.value,i=r.trim().toLowerCase(),o=a({},f);i?o[n]=r:delete o[n],p(o)},value:_}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),(0,u.jsx)(m.Z,{movies:n})]})}},390:function(e,t,n){var r=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"06ae09073235b2b05f047c5928d7f44e"}}),i={all:"all",movie:"movie",tv:"tv",person:"person"},a={day:"day",week:"week"},o={MEDIA_TYPE:i,TIME_WINDOW:a,getTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,n=void 0===t?1:t,o=e.mediaType,c=void 0===o?i.movie:o,s=e.timeWindow,d=void 0===s?a.week:s;return r.get("/trending/".concat(c,"/").concat(d),{params:{page:n}})},getMovies:function(e){var t=e.page,n=void 0===t?1:t,i=e.query;return r.get("/search/movie",{params:{page:n,query:i}})},getMovieDetails:function(e){var t=e.movieId;return r.get("/movie/".concat(t)).catch((function(e){if(e.response.status=404)throw Error("Sorry. There is no movie with id ".concat(t));throw e}))},getMovieCredits:function(e){var t=e.movieId;return r.get("/movie/".concat(t,"/credits"))},getMovieReviews:function(e){var t=e.movieId;return r.get("/movie/".concat(t,"/reviews"))},getPosterUrl:function(e){var t=e.path,n=e.size,r=void 0===n?300:n,i=e.placeholder;return t?"https://image.tmdb.org/t/p/w".concat(r).concat(t):i}};t.Z=o}}]);
//# sourceMappingURL=979.26b862ee.chunk.js.map