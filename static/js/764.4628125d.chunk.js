"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{844:function(e,t,r){r(791);t.Z=r.p+"static/media/placeholder-poster.f9db13c5f6963815666d104105243935.svg"},409:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,{Z:function(){return O}});var i=r(87),a=r(689),o=r(390),c=r(433),s=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}].reduce((function(e,t){var r=t.id,n=t.name;return e[r]=n,e}),{other:"Other"});var m=r(844),d="movie-card_posterWrapper__XCokE",u="movie-card_poster__xh2iF",l="movie-card_rating__w57D0",v="movie-card_year__CxYz6",p="movie-card_description__X-tWE",f="movie-card_title__+ZwDr",h="movie-card_genres__Kc-TX",g=r(184),_=function(e){var t=e.movieInfo,r=t.poster_path,n=t.title,i=t.vote_average,a=t.release_date,_=t.genre_ids,y=o.Z.getPosterUrl({path:r,size:400,placeholder:m.Z}),b=a?new Date(a).getFullYear():null,j=function(e){var t=(0,c.Z)(e);return t.length>3&&t.splice(2,t.length-2,"other"),t.map((function(e){return s[e]})).join(", ")}(_),w=Math.round(10*i);return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("img",{className:u,src:y,alt:n,loading:"lazy"}),(0,g.jsxs)("div",{className:l,children:[w,"%"]}),Boolean(b)&&(0,g.jsx)("div",{className:v,children:b})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("p",{className:f,children:n}),(0,g.jsxs)("p",{className:h,children:[" ",j," "]})]})]})},y="movie-list_list__crBS3",b="movie-list_item__x24-v",j=["id"],w=function(e){var t=e.movies,r=(0,a.TH)();return(0,g.jsx)("ul",{className:y,children:t.map((function(e){var t=e.id,a=n(e,j);return(0,g.jsx)("li",{className:b,children:(0,g.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,g.jsx)(_,{movieInfo:a})})},t)}))})},O=w;w.defaultValues={movies:[]}},764:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return f}});var o=r(439),c=r(791),s=r(87),m=r(390),d=r(409),u="movies_form__zwO86",l="movies_input__7d0c-",v="movies_button__Ttu3L",p=r(184),f=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),r=t[0],n=t[1],i=(0,s.lr)({}),f=(0,o.Z)(i,2),h=f[0],g=f[1],_=Object.fromEntries(h),y=_.query,b=void 0===y?"":y,j=_.newQuery,w=void 0===j?"":j,O=_.page,x=void 0===O?1:O;(0,c.useEffect)((function(){b&&m.Z.getMovies({query:b,page:x}).then((function(e){var t=e.data;return n(t.results)}))}),[b,x]);return(0,p.jsxs)("main",{children:[(0,p.jsx)("h2",{children:"Find a movie:"}),(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w&&w!==b&&g(a(a({},_),{},{page:1,query:w}))},className:u,children:[(0,p.jsx)("input",{type:"text",className:l,name:"newQuery",onChange:function(e){var t=e.target,r=t.name,n=t.value,i=n.trim().toLowerCase(),o=a({},_);i?o[r]=n:delete o[r],g(o)},value:w}),(0,p.jsx)("button",{type:"submit",className:v,children:"Search"})]}),(0,p.jsx)(d.Z,{movies:r})]})}},390:function(e,t,r){var n=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"06ae09073235b2b05f047c5928d7f44e"}}),i={all:"all",movie:"movie",tv:"tv",person:"person"},a={day:"day",week:"week"},o={MEDIA_TYPE:i,TIME_WINDOW:a,getTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,r=void 0===t?1:t,o=e.mediaType,c=void 0===o?i.movie:o,s=e.timeWindow,m=void 0===s?a.week:s;return n.get("/trending/".concat(c,"/").concat(m),{params:{page:r}})},getMovies:function(e){var t=e.page,r=void 0===t?1:t,i=e.query;return n.get("/search/movie",{params:{page:r,query:i}})},getMovieDetails:function(e){var t=e.movieId;return n.get("/movie/".concat(t)).catch((function(e){if(e.response.status=404)throw Error("Sorry. There is no movie with id ".concat(t,"."));throw e}))},getMovieCredits:function(e){var t=e.movieId;return n.get("/movie/".concat(t,"/credits"))},getMovieReviews:function(e){var t=e.movieId;return n.get("/movie/".concat(t,"/reviews"))},getPosterUrl:function(e){var t=e.path,r=e.size,n=void 0===r?300:r,i=e.placeholder;return t?"https://image.tmdb.org/t/p/w".concat(n).concat(t):i}};t.Z=o}}]);
//# sourceMappingURL=764.4628125d.chunk.js.map