!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.bd1d5b8f.js","6q1P2":"image-not-found-adaptive.85e4068c.png","41aTV":"Logo.9211a2b0.png","7nwxg":"library.6faaddf3.js"}'));var o=a("4Nugj"),s=a("bpxeT"),u=a("2TvXO"),c=a("dIxxU"),l={params:{api_key:"c8ef48bae82b60cf66a4f0e6e3dd153e"}},f=t(c).create({baseURL:"https://api.themoviedb.org/3/configuration",https:{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/plain"}}});function d(e){return p.apply(this,arguments)}function p(){return(p=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("",l);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=t(s)(t(u).mark((function e(){var n,r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:return n=e.sent,r=n.data.images.secure_base_url+n.data.images.poster_sizes[3],e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o=a("4Nugj"),o=a("4Nugj");function v(e){e.preventDefault(),"Escape"===e.code&&y()}function m(e){e.target===o.refs.modalBackdropRef&&y()}function y(){o.refs.modalBackdropRef.classList.add("is-hidden"),o.refs.bodyRef.classList.remove("modal-open"),document.querySelector(".modal__box .modal").remove(),document.removeEventListener("click",m),window.removeEventListener("keydown",v)}var g=[];function b(e){e.forEach((function(e){g.push(e)}))}function k(e){for(var t=e.target;!t.hasAttribute("data-filmid")&&"BODY"!==t.nodeName;)t=t.parentElement;return t}a("13upn");var w=a("88LCY");var x;x=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6q1P2");var _="";function I(e){var n=g.find((function(t){return t.id===Number(e)}));if(n){var r,i=n.poster_path,a=n.profile_path,o=n.backdrop_path,s=n.title,u=n.overview,c=void 0===u?"missing":u,l=n.genre_ids,f=n.popularity,d=void 0===f?"missing":f,p=n.vote_average,h=void 0===p?"missing":p,v=n.vote_count,m=void 0===v?"missing":v,y=n.original_name,b=n.name;return _=i&&i.length>20?G+i:o?G+o:a?G+a:t(x),l&&0!==l.length?genre=(r=l[0],w.genreIds.find((function(e){return e.id===Number(r)})).name):genre="missing",originalTitle=s||(y||(b||"missing")),{id:e,absolut_poster_path:_,genre:genre,original_title:originalTitle,original_title_to_UpperCase:originalTitle.toUpperCase(),popularity_to_Fixed:d.toFixed(1),vote_average:h,vote_count:m,overview:c}}}s=a("bpxeT"),u=a("2TvXO"),c=a("dIxxU");var E=a("13upn"),T="https://api.themoviedb.org/3/movie/",N={params:{api_key:"c8ef48bae82b60cf66a4f0e6e3dd153e"}},S={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/plain"}},O=t(c).create({baseURL:"https://api.themoviedb.org/3/configuration",https:S});function A(e){return C.apply(this,arguments)}function C(){return(C=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("",N);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return R.apply(this,arguments)}function R(){return(R=t(s)(t(u).mark((function e(n){var r,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(c).create({baseURL:T+n,https:S}),(0,E.spinnerOn)(),e.next=4,A(O);case 4:return i=e.sent,e.next=7,A(r);case 7:return a=e.sent,o=i.data.images.secure_base_url+i.data.images.poster_sizes[3]+a.data.poster_path,a.data.absolut_poster_path=o,a.data.genre=a.data.genres[0].name,a.data.original_title_to_UpperCase=a.data.original_title.toUpperCase(),a.data.popularity_to_Fixed=a.data.popularity.toFixed(1),e.abrupt("return",a.data);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o=a("4Nugj");var L,P,M=a("l5bVx"),U=t(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var o,s=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,f=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='modal' data-movie-id='"+l((void 0===(o=null!=(o=f(r,"id")||(null!=n?f(n,"id"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"id",hash:{},data:a,loc:{start:{line:1,column:34},end:{line:1,column:40}}}):o)+"'>\n  <div class='modal__thumb-for-image'>\n    <img class='modal__poster' src='"+l((void 0===(o=null!=(o=f(r,"absolut_poster_path")||(null!=n?f(n,"absolut_poster_path"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"absolut_poster_path",hash:{},data:a,loc:{start:{line:3,column:36},end:{line:3,column:59}}}):o)+"' />\n  </div>\n  <div class='modal__thumb-for-description'>\n    <div class='modal__original-title'>"+l((void 0===(o=null!=(o=f(r,"original_title")||(null!=n?f(n,"original_title"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:6,column:39},end:{line:6,column:57}}}):o)+"</div>\n    <table class='modal__movie-info-table'>\n      <tbody>\n        <tr class='modal__movie-info-table-row row1'>\n          <td class='modal__movie-info-table-title col1'>Vote / Votes</td>\n          <td class='col2'>\n            <div class='cell-div'>\n              <div class='col2-vote'>"+l((void 0===(o=null!=(o=f(r,"vote_average")||(null!=n?f(n,"vote_average"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:13,column:37},end:{line:13,column:53}}}):o)+"</div>\n              <p>/</p>\n              <div class='col2-votes'>"+l((void 0===(o=null!=(o=f(r,"vote_count")||(null!=n?f(n,"vote_count"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"vote_count",hash:{},data:a,loc:{start:{line:15,column:38},end:{line:15,column:52}}}):o)+"</div>\n            </div>\n          </td>\n        </tr>\n        <tr class='modal__movie-info-table-row row2'>\n          <td class='modal__movie-info-table-title col1'>Popularity</td>\n          <td class='col2'>"+l((void 0===(o=null!=(o=f(r,"popularity_to_Fixed")||(null!=n?f(n,"popularity_to_Fixed"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"popularity_to_Fixed",hash:{},data:a,loc:{start:{line:21,column:27},end:{line:21,column:50}}}):o)+"</td>\n        </tr>\n        <tr class='modal__movie-info-table-row row3'>\n          <td class='modal__movie-info-table-title col1'>Original Title</td>\n          <td class='col2'>"+l((void 0===(o=null!=(o=f(r,"original_title_to_UpperCase")||(null!=n?f(n,"original_title_to_UpperCase"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"original_title_to_UpperCase",hash:{},data:a,loc:{start:{line:25,column:27},end:{line:25,column:58}}}):o)+"</td>\n        </tr>\n        <tr class='modal__movie-info-table-row row4'>\n          <td class='modal__movie-info-table-title col1'>Genre</td>\n          <td class='col2'>"+l((void 0===(o=null!=(o=f(r,"genre")||(null!=n?f(n,"genre"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"genre",hash:{},data:a,loc:{start:{line:29,column:27},end:{line:29,column:36}}}):o)+"</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3 class='modal__movie-about'>ABOUT</h3>\n    <p class='modal__movie-about-description'>"+l((void 0===(o=null!=(o=f(r,"overview")||(null!=n?f(n,"overview"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"overview",hash:{},data:a,loc:{start:{line:34,column:46},end:{line:34,column:58}}}):o)+"</p>\n\n    <div class='modal__button-block'>\n      <button type='button' class='modal__button-tmpl add-to-watched-button'>\n        ADD TO WATCHED\n      </button>\n      <button type='button' class='modal__button-tmpl add-to-queue-button'>\n        ADD TO QUEUE\n      </button>\n    </div>\n  </div>\n</div>"},useData:!0}),j={};L=void 0!==n?n:"undefined"!=typeof window?window:j,P=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,l,d,h){if(!u("body"))return!1;t||p.Notify.init({});var v=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof d?m=d:"object"==typeof h&&(m=h),t=c(!0,t,m)}var y,g,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(k.id=o.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var w=e.document.getElementById(o.overlayID)||e.document.createElement("div");w.id=o.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=t.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||t.backOverlayColor,w.className=t.cssAnimation?"nx-with-animation":"",w.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(w)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(k);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=b.textColor,x.style.background=b.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof d&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var I="";s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(o.wrapID);E.insertBefore(x,E.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var N,S,O=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(N)},A=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){O();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),O();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var C=function(){N=setTimeout((function(){O()}),t.timeout),S=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(N),clearTimeout(S)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&f>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),R=0;R<D.length;R++){var L=D[R];null!==L.parentNode&&L.parentNode.removeChild(L)}t=c(!0,t,v)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){d(n,e,t,r)},failure:function(e,t,n){d(r,e,t,n)},warning:function(e,t,n){d(i,e,t,n)},info:function(e,t,n){d(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return P(L)})):"object"==typeof j?j=P(L):L.Notiflix=P(L);var F="watched-films",V="queue-films",H=[],z=[];function B(){var e=document.querySelector(".modal").getAttribute("data-movie-id");H.includes(e)?j.Notify.info("The movie has already been added to watched."):(H.push(e),j.Notify.success("The movie has been added to the list of watched."),localStorage.setItem(F,JSON.stringify(H)))}function W(){var e=document.querySelector(".modal").getAttribute("data-movie-id");z.includes(e)?j.Notify.info("The movie has already been added to the queue."):(z.push(e),j.Notify.success("The movie has been added to the queue list."),localStorage.setItem(V,JSON.stringify(z)))}function q(e){var t=U(e);o.refs.modalBoxRef.insertAdjacentHTML("beforeend",t),o.refs.bodyRef.classList.add("modal-open"),o.refs.modalBackdropRef.classList.remove("is-hidden");var n=document.querySelector(".add-to-watched-button"),r=document.querySelector(".add-to-queue-button");n.addEventListener("click",B),r.addEventListener("click",W),window.addEventListener("keydown",v),document.addEventListener("click",m)}function K(e){var t=k(e);t.hasAttribute("data-filmid")&&q(I(t.dataset.filmid))}null!=localStorage.getItem(F)&&(H=JSON.parse(localStorage.getItem(F))),null!=localStorage.getItem(V)&&(z=JSON.parse(localStorage.getItem(V))),j.Notify.init({width:"350px",success:{background:"#ff6b01"},info:{background:"#eb150c"}});var G="";(function(){return h.apply(this,arguments)})().then((function(e){G=e,document.addEventListener("click",K),o.refs.closeModalButtonRef.addEventListener("click",y)}));s=a("bpxeT"),u=a("2TvXO");var J=document.querySelector(".advice-list"),X=document.querySelector(".advice-list__nav-btn--left");function Y(e){var t=Number(22),n=Number(-22),r=0,i=e.currentTarget.classList.contains("advice-list__nav-btn--right"),a=setInterval((function(){r!=t&&r!=n?(i?r+=1:r-=1,J.scrollBy(r,0)):clearInterval(a)}),30)}document.querySelector(".advice-list__nav-btn--right").addEventListener("click",Y),X.addEventListener("click",Y),J.addEventListener("touchstart",(function(e){$=e.touches[0].clientX,Q=e.touches[0].clientY}),!1),J.addEventListener("touchmove",(function(e){if(!$||!Q)return;var t=e.touches[0].clientX,n=e.touches[0].clientY,r=$-t,i=Q-n;Math.abs(r),Math.abs(i);$=null,Q=null}),!1);var $=null,Q=null;s=a("bpxeT"),u=a("2TvXO");t(c=a("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var Z="c8ef48bae82b60cf66a4f0e6e3dd153e";function ee(){return te.apply(this,arguments)}function te(){return(te=t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(c)("3/genre/movie/list?api_key=".concat(Z));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne,re=document.querySelector(".advice-list");(ne=t(s)(t(u).mark((function e(){var n,r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:n=e.sent,r=n.data.genres,i=r.map((function(e){var t=e.id,n=e.name;return'<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="'.concat(t,'">').concat(n,"</button></li>")})).join(""),re.innerHTML=i;case 6:case"end":return e.stop()}}),e)}))),function(){return ne.apply(this,arguments)})();s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT"),u=a("2TvXO");t(c=a("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var ie="c8ef48bae82b60cf66a4f0e6e3dd153e";function ae(e){return oe.apply(this,arguments)}function oe(){return(oe=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(c)("/3/movie/".concat(n,"/recommendations?api_key=").concat(ie));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){var t=e.length-1;return e[Math.round(Math.random()*(t-0)+0)]}E=a("13upn");var ue=document.querySelector(".advice-list");document.querySelector(".backdrop");function ce(){return(ce=t(s)(t(u).mark((function e(n){var r,i,a,o,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r=n.target.dataset.id,e.next=6,ae(r);case 6:return i=e.sent,a=i.data.results,o=se(a),s=o.id,e.next=12,D(s);case 12:q(e.sent),(0,E.spinnerOff)(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),j.Notify.info("We are sorry but this genre is empty.");case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}ue.addEventListener("click",(function(e){return ce.apply(this,arguments)})),a("3gTut");s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT"),u=a("2TvXO");t(c=a("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var le="c8ef48bae82b60cf66a4f0e6e3dd153e";function fe(e){return de.apply(this,arguments)}function de(){return(de=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(c)("3/trending/all/day?api_key=".concat(le,"&page=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}M=a("l5bVx");var pe=t(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var o,s=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,f=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(o=null!=(o=f(r,"filmId")||(null!=n?f(n,"filmId"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):o)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="https://image.tmdb.org/t/p/w300'+l((void 0===(o=null!=(o=f(r,"urlImg")||(null!=n?f(n,"urlImg"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:79},end:{line:4,column:89}}}):o)+'" alt="'+l((void 0===(o=null!=(o=f(r,"title")||(null!=n?f(n,"title"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:4,column:96},end:{line:4,column:105}}}):o)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(o=null!=(o=f(r,"title")||(null!=n?f(n,"title"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):o)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(o=null!=(o=f(r,"ganres")||(null!=n?f(n,"ganres"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):o)+' | <span class="gallery-list__Year">'+l((void 0===(o=null!=(o=f(r,"relisYer")||(null!=n?f(n,"relisYer"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):o)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>\n"},useData:!0}),he=(w=a("88LCY"),a("4ltia"));function ve(e){var t="";return e.forEach((function(e){var n;console.log(e.genre_ids);var r={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:e.poster_path,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:(null===(n=e.genre_ids)||void 0===n?void 0:n.map((function(e){return(0,he.convertGanres)(w.genreIds,e)})).join(", "))||"XXXX"};t+=pe(r)})),t}var me=a("cadKG");function ye(){return(ye=t(s)(t(u).mark((function e(){var n,r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe(1);case 3:n=e.sent,r=n.data.results,me.refs.galleryListEl.insertAdjacentHTML("afterbegin",ve(r)),b(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),me.refs.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return ye.apply(this,arguments)}));var ge,be,ke,we,xe,_e,Ie,Ee=document.querySelector(".add-block"),Te=document.querySelector(".add-block__time"),Ne=document.querySelector(".add-block__btn");be=(ge=["https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg","https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg"]).length-1,ke=Math.round(Math.random()*(be-0)+0),we='<img\n    src="'.concat(ge[ke],'"\n    alt="advertising"\n    class="add-block__image"\n  />'),Ee.insertAdjacentHTML("beforeend",we),xe=Date.now(),_e=0,Ie=setInterval((function(){if(1===_e)return clearInterval(Ie),Te.classList.add("is-hidden"),void Ne.classList.remove("is-hidden");var e=Date.now();_e=Number(11-((e-xe)/1e3).toFixed()),Te.textContent=_e}),1e3),Ne.addEventListener("click",(function(){Ee.classList.add("is-hidden")}));s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT");var Se=a("8MBJY"),Oe=a("a2hTj"),Ae=(u=a("2TvXO"),c=a("dIxxU"),function(){"use strict";function e(){t(Se)(this,e),this.searchQuery="",this.page=1}return t(Oe)(e,[{key:"getFilm",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("c8ef48bae82b60cf66a4f0e6e3dd153e","&language=en-US&query=").concat(e.searchQuery,"&page=").concat(e.page,"&include_adult=false"),t.prev=1,t.next=4,c.get(r);case 4:return i=t.sent,t.abrupt("return",i);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}());function Ce(e){return De.apply(this,arguments)}function De(){return(De=t(s)(t(u).mark((function e(n){var r,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Ae).query=n,e.next=4,r.getFilm();case 4:return i=e.sent,a=i.data.results,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:10770,name:"TV Movie"}];function Le(e,t){var n=[],r="";e.filter((function(e){e.id===t&&n.push(e.name)}));var i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r+=" ".concat(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Pe;function Me(e){return e.map((function(e){var n=e.id,r=e.original_title,i=e.title,a=e.genre_ids,o=e.poster_path,s=e.backdrop_path,u=e.release_date,c="https://image.tmdb.org/t/p/w500",l=a.map((function(e){return Le(Re,e)}));return o||s||(c=t(Pe),o="",s=""),{filmId:n,urlImg:"".concat(c).concat(o||s),title:r||i,ganres:l.length>=3?"".concat(l[0],", ").concat(l[1],", Other"):l.join(", ")||"Film",relisYer:(u||"XXXX").slice(0,4)}}))}Pe=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("41aTV");var Ue={text:document.querySelector(".header_container_line"),galleryList:document.querySelector(".gallery-list"),form:document.querySelector(".home-header_search"),input:document.querySelector(".home-header_search_input"),btn:document.querySelector(".home-header_search_button"),backdropSpinnerRef:document.querySelector(".backdrop-spinner")},je=(M=a("l5bVx"),t(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var o,s=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,f=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(o=null!=(o=f(r,"filmId")||(null!=n?f(n,"filmId"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):o)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+l((void 0===(o=null!=(o=f(r,"urlImg")||(null!=n?f(n,"urlImg"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):o)+'" alt="'+l((void 0===(o=null!=(o=f(r,"title")||(null!=n?f(n,"title"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):o)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(o=null!=(o=f(r,"title")||(null!=n?f(n,"title"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):o)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(o=null!=(o=f(r,"ganres")||(null!=n?f(n,"ganres"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):o)+' | <span class="gallery-list__Year">'+l((void 0===(o=null!=(o=f(r,"relisYer")||(null!=n?f(n,"relisYer"):n))?o:u)?"undefined":t(M)(o))===c?o.call(s,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):o)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>"},useData:!0}));function Fe(e){var t=e.map((function(e){return je(e)})).join("");Ue.galleryList.innerHTML=t}E=a("13upn");function Ve(){return(Ve=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),Ue.input.addEventListener("input",ze),""!==(r=n.currentTarget.elements.searchQuery.value)){e.next=6;break}return He(),e.abrupt("return");case 6:return(0,E.spinnerOn)(),e.next=9,Ce(r);case 9:if(i=e.sent,(0,E.spinnerOff)(),0!==i.length){e.next=14;break}return He(),e.abrupt("return");case 14:b(i),Fe(Me(i));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(){Ue.text.style.display="block",Ue.text.textContent="Search result not successful. Enter the correct movie name and"}function ze(e){Ue.text.style.display="none"}Ue.form.addEventListener("submit",(function(e){return Ve.apply(this,arguments)})),a("13upn");s=a("bpxeT"),u=a("2TvXO"),me=a("cadKG");var Be,We=document.querySelector(".pagination"),qe=document.querySelector(".gallery-list");function Ke(){return Ge.apply(this,arguments)}function Ge(){return Ge=t(s)(t(u).mark((function e(){var n,r,i,a,o,s=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,e.prev=1,e.next=4,fe(n);case 4:return r=e.sent,e.next=7,r.data.results;case 7:i=e.sent,a=r.data.page,o=r.data.total_pages,qe.innerHTML="",me.refs.galleryListEl.insertAdjacentHTML("afterbegin",ve(i)),b(i),console.log(r),Je(a,o),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0),me.refs.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 21:case"end":return e.stop()}}),e,null,[[1,17]])}))),Ge.apply(this,arguments)}function Je(e,t){Be=e;var n="",r=e-1,i=e+2,a=e+1;e>1&&(n+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),e>2&&(n+='<li class="pagination__number">1</li>'),e>4&&(n+='<li class="pagination__number">...</li>'),e>3&&(n+='<li class="pagination__number">'.concat(e-2,"</li>")),e>=2&&(n+='<li class="pagination__number">'.concat(r,"</li>")),n+='<li class="pagination__number active">'.concat(e,"</li>"),e<t-1&&(n+='<li class="pagination__number">'.concat(a,"</li>")),e<t-2&&(n+='<li class="pagination__number">'.concat(i,"</li>")),e<=t-1&&(e<t-3&&(n+='<li class="pagination__number points-none">...</li>'),n+='<li class="pagination__number points-none">'.concat(t,"</li>")),e<t&&(n+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),We.innerHTML=n,We.addEventListener("click",Xe)}function Xe(e){if(e.preventDefault(),"LI"===e.target.nodeName){var t=e.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),t){case"←":Ke(Be-1);break;case"→":Ke(Be+1);break;case"...":break;default:Ke(t)}}}console.log(We),Ke(),console.log("&larr;"),console.log("&rarr;"),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT"),Se=a("8MBJY"),Oe=a("a2hTj");var Ye=a("hKHmD"),$e=a("8nrFW"),Qe=(u=a("2TvXO"),s=a("bpxeT"),Se=a("8MBJY"),Oe=a("a2hTj"),{});Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=function(e,t){return Ze.default(e)||et.default(e,t)||nt.default(e,t)||tt.default()};var Ze=rt(a("8slrw")),et=rt(a("7AJDX")),tt=rt(a("ifqQW")),nt=rt(a("auk6i"));function rt(e){return e&&e.__esModule?e:{default:e}}$e=a("8nrFW"),u=a("2TvXO");var it=a("ds8z5"),at=(Se=a("8MBJY"),Oe=a("a2hTj"),a("eYQtU")),ot=($e=a("8nrFW"),{});Object.defineProperty(ot,"__esModule",{value:!0}),ot.default=function(e){return dt(e)};var st=ft(a("ge8co")),ut=ft(a("cZGw3")),ct=ft(a("fVNic")),lt=ft(a("gD1JV"));function ft(e){return e&&e.__esModule?e:{default:e}}function dt(e){var t="function"==typeof Map?new Map:void 0;return dt=function(e){if(null===e||!ut.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return st.default(e,arguments,ct.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),lt.default(n,e)},dt(e)}var pt=a("2MbLg"),ht=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},vt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ht(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},mt=function(e){return function(e){var t=ht(e);return vt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},yt=function(e){try{return vt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gt=function(){"use strict";function e(){var n=this;t(Se)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(Oe)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function kt(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function wt(){return"object"==typeof indexedDB}function xt(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function _t(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e,i,a){var o;return t(Se)(this,r),(o=n.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(t(it)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(it)(o),Et.prototype.create),o}return r}(t(ot)(Error)),Et=function(){"use strict";function e(n,r,i){t(Se)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(Oe)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Tt(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new It(a,u,i);return c}}]),e}();function Tt(e,t){return e.replace(Nt,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Nt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ot(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(At(l)&&At(f)){if(!Ot(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function At(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(Qe)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Dt(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(Qe)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Rt(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(){"use strict";function e(n,r){var i=this;t(Se)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(Oe)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Pt),void 0===r.error&&(r.error=Pt),void 0===r.complete&&(r.complete=Pt);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Pt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=144e5;function Ut(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(Mt,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e){return e&&e._delegate?e._delegate:e}var Ft=function(){"use strict";function e(n,r,i){t(Se)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(Oe)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Vt="[DEFAULT]",Ht=function(){"use strict";function e(n,r){t(Se)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(Oe)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new gt;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(Qe)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t($e)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t($e)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=t(Qe)(c.value,2),d=f[0],p=f[1],h=this.normalizeInstanceIdentifier(d);i===h&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Vt?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;return this.component?this.component.multipleInstances?e:Vt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,Bt,Wt=function(){"use strict";function e(n){t(Se)(this,e),this.name=n,this.providers=new Map}return t(Oe)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ht(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),qt=(Se=a("8MBJY"),Oe=a("a2hTj"),Ye=a("hKHmD"),$e=a("8nrFW"),[]);(Bt=zt||(zt={}))[Bt.DEBUG=0]="DEBUG",Bt[Bt.VERBOSE=1]="VERBOSE",Bt[Bt.INFO=2]="INFO",Bt[Bt.WARN=3]="WARN",Bt[Bt.ERROR=4]="ERROR",Bt[Bt.SILENT=5]="SILENT";var Kt,Gt={debug:zt.DEBUG,verbose:zt.VERBOSE,info:zt.INFO,warn:zt.WARN,error:zt.ERROR,silent:zt.SILENT},Jt=zt.INFO,Xt=(Kt={},t(Ye)(Kt,zt.DEBUG,"log"),t(Ye)(Kt,zt.VERBOSE,"log"),t(Ye)(Kt,zt.INFO,"info"),t(Ye)(Kt,zt.WARN,"warn"),t(Ye)(Kt,zt.ERROR,"error"),Kt),Yt=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=Xt[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t($e)(i)))}},$t=function(){"use strict";function e(n){t(Se)(this,e),this.name=n,this._logLevel=Jt,this._logHandler=Yt,this._userLogHandler=null,qt.push(this)}return t(Oe)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in zt))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Gt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,zt.DEBUG].concat(t($e)(n))),this._logHandler.apply(this,[this,zt.DEBUG].concat(t($e)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,zt.VERBOSE].concat(t($e)(n))),this._logHandler.apply(this,[this,zt.VERBOSE].concat(t($e)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,zt.INFO].concat(t($e)(n))),this._logHandler.apply(this,[this,zt.INFO].concat(t($e)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,zt.WARN].concat(t($e)(n))),this._logHandler.apply(this,[this,zt.WARN].concat(t($e)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,zt.ERROR].concat(t($e)(n))),this._logHandler.apply(this,[this,zt.ERROR].concat(t($e)(n)))}}]),e}();s=a("bpxeT");var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){en.default(e,t,n[t])}))}return e};var Zt,en=(Zt=a("hKHmD"))&&Zt.__esModule?Zt:{default:Zt};var tn,nn;$e=a("8nrFW"),u=a("2TvXO"),$e=a("8nrFW");var rn=new WeakMap,an=new WeakMap,on=new WeakMap,sn=new WeakMap,un=new WeakMap;var cn={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return an.get(e);if("objectStoreNames"===t)return e.objectStoreNames||on.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ln(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(nn||(nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(pn(this),n),dn(rn.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return dn(e.apply(pn(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[pn(this),n].concat(t($e)(i)));return on.set(s,n.sort?n.sort():[n]),dn(s)}}function fn(e){return"function"==typeof e?ln(e):(e instanceof IDBTransaction&&function(e){if(!an.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));an.set(e,t)}}(e),t=e,(tn||(tn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,cn):e);var t}function dn(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(dn(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&rn.set(e,t)})).catch((function(){})),un.set(n,t),n;var t,n;if(sn.has(e))return sn.get(e);var r=fn(e);return r!==e&&(sn.set(e,r),un.set(r,e)),r}var pn=function(e){return un.get(e)};function hn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=dn(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(dn(s.result),e.oldVersion,e.newVersion,dn(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var vn=["get","getKey","getAll","getAllKeys","count"],mn=["put","add","delete","clear"],yn=new Map;function gn(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(yn.get(n))return yn.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=mn.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||vn.includes(r))){var o,c=(o=t(s)(t(u).mark((function e(n){var o,s,c,l,f,d,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=p.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=p[c];return f=this.transaction(n,a?"readwrite":"readonly"),d=f.store,i&&(d=d.index(s.shift())),e.next=7,Promise.all([(l=d)[r].apply(l,t($e)(s)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)});return yn.set(n,c),c}}}cn=function(e){return t(Qt)({},e,{get:function(t,n,r){return gn(t,n)||e.get(t,n,r)},has:function(t,n){return!!gn(t,n)||e.has(t,n)}})}(cn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bn=function(){"use strict";function e(n){t(Se)(this,e),this.container=n}return t(Oe)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var kn,wn,xn="@firebase/app",_n="0.7.26",In=new $t("@firebase/app"),En="[DEFAULT]",Tn=(kn={},t(Ye)(kn,xn,"fire-core"),t(Ye)(kn,"@firebase/app-compat","fire-core-compat"),t(Ye)(kn,"@firebase/analytics","fire-analytics"),t(Ye)(kn,"@firebase/analytics-compat","fire-analytics-compat"),t(Ye)(kn,"@firebase/app-check","fire-app-check"),t(Ye)(kn,"@firebase/app-check-compat","fire-app-check-compat"),t(Ye)(kn,"@firebase/auth","fire-auth"),t(Ye)(kn,"@firebase/auth-compat","fire-auth-compat"),t(Ye)(kn,"@firebase/database","fire-rtdb"),t(Ye)(kn,"@firebase/database-compat","fire-rtdb-compat"),t(Ye)(kn,"@firebase/functions","fire-fn"),t(Ye)(kn,"@firebase/functions-compat","fire-fn-compat"),t(Ye)(kn,"@firebase/installations","fire-iid"),t(Ye)(kn,"@firebase/installations-compat","fire-iid-compat"),t(Ye)(kn,"@firebase/messaging","fire-fcm"),t(Ye)(kn,"@firebase/messaging-compat","fire-fcm-compat"),t(Ye)(kn,"@firebase/performance","fire-perf"),t(Ye)(kn,"@firebase/performance-compat","fire-perf-compat"),t(Ye)(kn,"@firebase/remote-config","fire-rc"),t(Ye)(kn,"@firebase/remote-config-compat","fire-rc-compat"),t(Ye)(kn,"@firebase/storage","fire-gcs"),t(Ye)(kn,"@firebase/storage-compat","fire-gcs-compat"),t(Ye)(kn,"@firebase/firestore","fire-fst"),t(Ye)(kn,"@firebase/firestore-compat","fire-fst-compat"),t(Ye)(kn,"fire-js","fire-js"),t(Ye)(kn,"firebase","fire-js-all"),kn),Nn=new Map,Sn=new Map;function On(e,t){try{e.container.addComponent(t)}catch(n){In.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function An(e){var t=e.name;if(Sn.has(t))return In.debug("There were multiple attempts to register component ".concat(t,".")),!1;Sn.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Nn.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){On(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Cn(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dn=(wn={},t(Ye)(wn,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(Ye)(wn,"bad-app-name","Illegal App name: '{$appName}"),t(Ye)(wn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(Ye)(wn,"app-deleted","Firebase App named '{$appName}' already deleted"),t(Ye)(wn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(Ye)(wn,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(Ye)(wn,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),t(Ye)(wn,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),t(Ye)(wn,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),t(Ye)(wn,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),wn),Rn=new Et("app","Firebase",Dn),Ln=function(){"use strict";function e(n,r,i){var a=this;t(Se)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ft("app",(function(){return a}),"PUBLIC"))}return t(Oe)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}]),e}(),Pn="9.8.3";function Mn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:En,t=Nn.get(e);if(!t)throw Rn.create("no-app",{appName:e});return t}function Un(e,t,n){var r,i=null!==(r=Tn[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void In.warn(s.join(" "))}An(new Ft("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jn="firebase-heartbeat-store",Fn=null;function Vn(){return Fn||(Fn=hn("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(jn)}}).catch((function(e){throw Rn.create("storage-open",{originalErrorMessage:e.message})}))),Fn}function Hn(e){return zn.apply(this,arguments)}function zn(){return(zn=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Vn();case 4:return i=e.sent,e.abrupt("return",i.transaction(jn).objectStore(jn).get(qn(n)));case 8:throw e.prev=8,e.t0=e.catch(1),Rn.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Bn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=t(s)(t(u).mark((function e(n,r){var i,a,o,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Vn();case 4:return a=e.sent,o=a.transaction(jn,"readwrite"),s=o.objectStore(jn),e.next=9,s.put(r,qn(n));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),Rn.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function qn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(){"use strict";function e(n){var r=this;t(Se)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Yn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(Oe)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Gn(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i,a,o,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Gn(),i=Jn(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=mt(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function Gn(){return(new Date).toISOString().substring(0,10)}function Jn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),$n(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),$n(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Xn,Yn=function(){"use strict";function e(n){t(Se)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(Oe)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(wt()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",xt().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Hn(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",Bn(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Bn(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t($e)(a.heartbeats).concat(t($e)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function $n(e){return mt(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn="",An(new Ft("platform-logger",(function(e){return new bn(e)}),"PRIVATE")),An(new Ft("heartbeat",(function(e){return new Kn(e)}),"PRIVATE")),Un(xn,_n,Xn),Un(xn,_n,"esm2017"),Un("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Un("firebase","9.8.3","app");s=a("bpxeT"),Se=a("8MBJY"),Oe=a("a2hTj"),Ye=a("hKHmD"),u=a("2TvXO"),s=a("bpxeT"),Ye=a("hKHmD"),$e=a("8nrFW"),u=a("2TvXO");var Qn,Zn="@firebase/installations",er="0.5.10",tr=1e4,nr="w:".concat(er),rr="FIS_v2",ir=36e5,ar=(Qn={},t(Ye)(Qn,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(Ye)(Qn,"not-registered","Firebase Installation is not registered."),t(Ye)(Qn,"installation-not-found","Firebase Installation not found."),t(Ye)(Qn,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(Ye)(Qn,"app-offline","Could not process request. Application offline."),t(Ye)(Qn,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Qn),or=new Et("installations","Installations",ar);function sr(e){return e instanceof It&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function cr(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function lr(e,t){return fr.apply(this,arguments)}function fr(){return(fr=t(s)(t(u).mark((function e(n,r){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",or.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dr(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pr(e,t){var n=t.refreshToken,r=dr(e);return r.append("Authorization",function(e){return"".concat(rr," ").concat(e)}(n)),r}function hr(e){return vr.apply(this,arguments)}function vr(){return(vr=t(s)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mr(e,t){return yr.apply(this,arguments)}function yr(){return(yr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i,a,o,s,c,l,f,d,p,h,v,m;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=ur(i),c=dr(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&c.append("x-firebase-client",f);case 9:return d={fid:o,authVersion:rr,appId:i.appId,sdkVersion:nr},p={method:"POST",headers:c,body:JSON.stringify(d)},e.next=13,hr((function(){return fetch(s,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:cr(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,lr("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var br=/^[cdef][\w-]{21}$/;function kr(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t($e)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return br.test(n)?n:""}catch(e){return""}}function wr(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=new Map;function _r(e,t){var n=wr(e);Ir(n,t),function(e,t){var n=Tr();n&&n.postMessage({key:e,fid:t});Nr()}(n,t)}function Ir(e,t){var n=xr.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Er=null;function Tr(){return!Er&&"BroadcastChannel"in self&&((Er=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Ir(e.data.key,e.data.fid)}),Er}function Nr(){0===xr.size&&Er&&(Er.close(),Er=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr="firebase-installations-store",Or=null;function Ar(){return Or||(Or=hn("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Sr)}})),Or}function Cr(e,t){return Dr.apply(this,arguments)}function Dr(){return(Dr=t(s)(t(u).mark((function e(n,r){var i,a,o,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=wr(n),e.next=3,Ar();case 3:return a=e.sent,o=a.transaction(Sr,"readwrite"),s=o.objectStore(Sr),e.next=8,s.get(i);case 8:return c=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===r.fid||_r(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rr(e){return Lr.apply(this,arguments)}function Lr(){return(Lr=t(s)(t(u).mark((function e(n){var r,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=wr(n),e.next=3,Ar();case 3:return i=e.sent,a=i.transaction(Sr,"readwrite"),e.next=7,a.objectStore(Sr).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pr(e,t){return Mr.apply(this,arguments)}function Mr(){return(Mr=t(s)(t(u).mark((function e(n,r){var i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=wr(n),e.next=3,Ar();case 3:return a=e.sent,o=a.transaction(Sr,"readwrite"),s=o.objectStore(Sr),e.next=8,s.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||_r(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ur(e){return jr.apply(this,arguments)}function jr(){return(jr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Pr(n.appConfig,(function(e){var t=Fr(e),i=Vr(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fr(e){return qr(e||{fid:kr(),registrationStatus:0})}function Vr(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(or.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Hr.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:zr(e)}:{installationEntry:t}}function Hr(){return(Hr=t(s)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mr(n,r);case 3:return i=e.sent,e.abrupt("return",Cr(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!sr(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Rr(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Cr(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function zr(e){return Br.apply(this,arguments)}function Br(){return(Br=t(s)(t(u).mark((function e(n){var r,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wr(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,gr(100);case 6:return e.next=8,Wr(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,Ur(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wr(e){return Pr(e,(function(e){if(!e)throw or.create("installation-not-found");return qr(e)}))}function qr(e){return 1===(t=e).registrationStatus&&t.registrationTime+tr<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Kr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i,a,o,s,c,l,f,d,p,h,v;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=Jr(i,r),s=pr(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:nr,appId:i.appId}},d={method:"POST",headers:s,body:JSON.stringify(f)},e.next=13,hr((function(){return fetch(o,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,v=cr(h),e.abrupt("return",v);case 22:return e.next=24,lr("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Jr(e,t){var n=t.fid;return"".concat(ur(e),"/").concat(n,"/authTokens:generate")}function Xr(e){return Yr.apply(this,arguments)}function Yr(){return Yr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i,a,o,s=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,Pr(n.appConfig,(function(e){if(!ni(e))throw or.create("not-registered");var t=e.authToken;if(!r&&ri(t))return e;if(1===t.requestStatus)return i=$r(n,r),e;if(!navigator.onLine)throw or.create("app-offline");var a=ii(e);return i=ei(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),Yr.apply(this,arguments)}function $r(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=t(s)(t(u).mark((function e(n,r){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zr(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,gr(100);case 6:return e.next=8,Zr(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Xr(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zr(e){return Pr(e,(function(e){if(!ni(e))throw or.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+tr<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function ei(e,t){return ti.apply(this,arguments)}function ti(){return(ti=t(s)(t(u).mark((function e(n,r){var i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Kr(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Cr(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!sr(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Rr(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Cr(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function ni(e){return void 0!==e&&2===e.registrationStatus}function ri(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ir}(e)}function ii(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ai(){return(ai=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,Ur(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):Xr(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oi(){return oi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i,a,o=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,si(i);case 4:return e.next=6,Xr(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),oi.apply(this,arguments)}function si(e){return ui.apply(this,arguments)}function ui(){return(ui=t(s)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ur(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ci(e){return or.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li="installations",fi=function(e){var t=Cn(e.getProvider("app").getImmediate(),li).getImmediate(),n={getId:function(){return function(e){return ai.apply(this,arguments)}(t)},getToken:function(e){return function(e){return oi.apply(this,arguments)}(t,e)}};return n};An(new Ft(li,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw ci("App Configuration");if(!e.name)throw ci("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw ci(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Cn(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),An(new Ft("installations-internal",fi,"PRIVATE")),Un(Zn,er),Un(Zn,er,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var di,pi="analytics",hi=6e4,vi="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mi="https://www.googletagmanager.com/gtag/js",yi=new $t("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function bi(e,t){var n=document.createElement("script");n.src="".concat(mi,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function ki(e,t,n,r,i,a){return wi.apply(this,arguments)}function wi(){return(wi=t(s)(t(u).mark((function e(n,r,i,a,o,s){var c,l,f;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[o],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,gi(i);case 9:if(l=e.sent,!(f=l.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),yi.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function xi(e,t,n,r,i){return _i.apply(this,arguments)}function _i(){return(_i=t(s)(t(u).mark((function e(n,r,i,a,o){var s,c,l,f,d,p,h,v,m,y,g;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),e.next=7,gi(i);case 7:l=e.sent,f=!0,d=!1,p=void 0,e.prev=9,h=c[Symbol.iterator]();case 11:if(f=(v=h.next()).done){e.next=24;break}if(m=v.value,y=l.find((function(e){return e.measurementId===m})),!(g=y&&r[y.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),d=!0,p=e.t0;case 30:e.prev=30,e.prev=31,f||null==h.return||h.return();case 33:if(e.prev=33,!d){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),yi.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Ii(e,n,r,i,a){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[a]&&"function"==typeof window[a]&&(o=window[a]),window[a]=function(e,n,r,i){function a(){return(a=t(s)(t(u).mark((function a(o,s,c){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,xi(e,n,r,s,c);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,ki(e,n,r,i,s,c);case 9:t.next=12;break;case 11:e("set",s);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),yi.error(t.t0);case 17:case"end":return t.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return a.apply(this,arguments)}}(o,e,n,r),{gtagCore:o,wrappedGtag:window[a]}}function Ei(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.src&&o.src.includes(mi))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ti=(di={},t(Ye)(di,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(Ye)(di,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(Ye)(di,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(Ye)(di,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(Ye)(di,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(Ye)(di,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(Ye)(di,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(Ye)(di,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(Ye)(di,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(Ye)(di,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),di),Ni=new Et("analytics","Analytics",Ti),Si=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(Se)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(Oe)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),Oi=new Si;function Ai(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Ci(e){return Di.apply(this,arguments)}function Di(){return(Di=t(s)(t(u).mark((function e(n){var r,i,a,o,s,c,l,f;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:Ai(a)},s=vi.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(l=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Ni.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function Ri(e){return Li.apply(this,arguments)}function Li(){return Li=t(s)(t(u).mark((function e(n){var r,i,a,o,c,l,f,d,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:Oi,i=p.length>2?p[2]:void 0,a=n.options,o=a.appId,c=a.apiKey,l=a.measurementId,o){e.next=4;break}throw Ni.create("no-app-id");case 4:if(c){e.next=8;break}if(!l){e.next=7;break}return e.abrupt("return",{measurementId:l,appId:o});case 7:throw Ni.create("no-api-key");case 8:return f=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new Fi,setTimeout(t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==i?i:hi),e.abrupt("return",Pi({appId:o,apiKey:c,measurementId:l},f,d,r));case 12:case"end":return e.stop()}}),e)}))),Li.apply(this,arguments)}function Pi(e,t,n){return Mi.apply(this,arguments)}function Mi(){return Mi=t(s)(t(u).mark((function e(n,r,i){var a,o,s,c,l,f,d,p,h=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=h.length>3&&void 0!==h[3]?h[3]:Oi,c=n.appId,l=n.measurementId,e.prev=2,e.next=5,Ui(i,a);case 5:e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(2),!l){e.next=12;break}return yi.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t0.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 12:throw e.t0;case 13:return e.prev=13,e.next=16,Ci(n);case 16:return f=e.sent,s.deleteThrottleMetadata(c),e.abrupt("return",f);case 21:if(e.prev=21,e.t1=e.catch(13),ji(e.t1)){e.next=31;break}if(s.deleteThrottleMetadata(c),!l){e.next=30;break}return yi.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t1.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 30:throw e.t1;case 31:return d=503===Number(e.t1.customData.httpStatus)?Ut(o,s.intervalMillis,30):Ut(o,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:o+1},s.setThrottleMetadata(c,p),yi.debug("Calling attemptFetch again in ".concat(d," millis")),e.abrupt("return",Pi(n,p,i,s));case 36:case"end":return e.stop()}}),e,null,[[2,7],[13,21]])}))),Mi.apply(this,arguments)}function Ui(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(Ni.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function ji(e){if(!(e instanceof It&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Fi=function(){"use strict";function e(){t(Se)(this,e),this.listeners=[]}return t(Oe)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();function Vi(){return Hi.apply(this,arguments)}function Hi(){return(Hi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(wt()){e.next=5;break}return yi.warn(Ni.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,xt();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),yi.warn(Ni.create("indexeddb-unavailable",{errorInfo:e.t0}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function zi(){return(zi=t(s)(t(u).mark((function e(n,r,i,a,o,s,c){var l,f,d,p,h,v,m;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(f=Ri(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&yi.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return yi.error(e)})),r.push(f),d=Vi().then((function(e){return e?a.getId():void 0})),e.t0=t(Qe),e.next=8,Promise.all([f,d]);case 8:return e.t1=e.sent,p=(0,e.t0)(e.t1,2),h=p[0],v=p[1],Ei()||bi(s,h.measurementId),o("js",new Date),(m=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",m.update=!0,null!=v&&(m.firebase_id=v),o("config",h.measurementId,m),e.abrupt("return",h.measurementId);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi,Wi,qi=function(){"use strict";function e(n){t(Se)(this,e),this.app=n}return t(Oe)(e,[{key:"_delete",value:function(){return delete Ki[this.app.options.appId],Promise.resolve()}}]),e}(),Ki={},Gi=[],Ji={},Xi="dataLayer",Yi="gtag",$i=!1;function Qi(e,t,n){!function(){var e=[];if(kt()&&e.push("This is a browser extension environment."),_t()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Ni.create("invalid-analytics-context",{errorInfo:t});yi.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw Ni.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ni.create("no-api-key");yi.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Ki[a])throw Ni.create("already-exists",{id:a});if(!$i){r=Xi,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Ii(Ki,Gi,Ji,Xi,Yi),s=o.wrappedGtag,u=o.gtagCore;Wi=s,Bi=u,$i=!0}return Ki[a]=function(e,t,n,r,i,a,o){return zi.apply(this,arguments)}(e,Gi,Ji,t,Bi,Xi,n),new qi(e)}function Zi(){return(Zi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r,i,a,o){var s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,c=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ea(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Cn(e,pi);if(n.isInitialized()){var r=n.getImmediate();if(Ot(t,n.getOptions()))return r;throw Ni.create("already-initialized")}var i=n.initialize({options:t});return i}function ta(e,t,n,r){e=jt(e),function(e,t,n,r,i){return Zi.apply(this,arguments)}(Wi,Ki[e.app.options.appId],t,n,r).catch((function(e){return yi.error(e)}))}var na="@firebase/analytics",ra="0.7.10";An(new Ft(pi,(function(e,t){var n=t.options;return Qi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),An(new Ft("analytics-internal",(function(e){try{var t=e.getProvider(pi).getImmediate();return{logEvent:function(e,n,r){return ta(t,e,n,r)}}}catch(e){throw Ni.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Un(na,ra),Un(na,ra,"esm2017");it=a("ds8z5"),s=a("bpxeT"),Se=a("8MBJY"),Oe=a("a2hTj"),Ye=a("hKHmD");var ia={};Object.defineProperty(ia,"__esModule",{value:!0}),ia.default=function(e,t,n){return oa(e,t,n)};var aa=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function oa(e,t,n){return(oa="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=aa.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var sa=a("fVNic");at=a("eYQtU"),$e=a("8nrFW"),pt=a("2MbLg"),u=a("2TvXO");function ua(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ca(){return t(Ye)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var la=ca,fa=new Et("auth","Firebase",ca()),da={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},pa=new $t("@firebase/auth");function ha(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;pa.logLevel<=zt.ERROR&&(a=pa).error.apply(a,["Auth (".concat(Pn,"): ").concat(e)].concat(t($e)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw ga.apply(void 0,[e].concat(t($e)(r)))}function ma(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return ga.apply(void 0,[e].concat(t($e)(r)))}function ya(e,n,r){var i=Object.assign(Object.assign({},la()),t(Ye)({},n,r));return new Et("auth","Firebase",i).create(n,{appName:e.name})}function ga(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t($e)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t($e)(u)))}return(a=fa).create.apply(a,[e].concat(t($e)(r)))}function ba(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw ga.apply(void 0,[n].concat(t($e)(i)))}function ka(e){var t="INTERNAL ASSERTION FAILED: "+e;throw ha(t),new Error(t)}function wa(e,t){e||ka(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xa=new Map;function _a(e){wa(e instanceof Function,"Expected a class definition");var t=xa.get(e);return t?(wa(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xa.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e,t){var n=Cn(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ot(n.getOptions(),null!=t?t:{}))return r;va(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ea(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ta(){return"http:"===Na()||"https:"===Na()}function Na(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sa=function(){"use strict";function e(n,r){t(Se)(this,e),this.shortDelay=n,this.longDelay=r,wa(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(Oe)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ta()||kt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e,t){wa(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa,Ca=function(){"use strict";function e(){t(Se)(this,e)}return t(Oe)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ka("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ka("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ka("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Da=(Aa={},t(Ye)(Aa,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(Ye)(Aa,"MISSING_CUSTOM_TOKEN","internal-error"),t(Ye)(Aa,"INVALID_IDENTIFIER","invalid-email"),t(Ye)(Aa,"MISSING_CONTINUE_URI","internal-error"),t(Ye)(Aa,"INVALID_PASSWORD","wrong-password"),t(Ye)(Aa,"MISSING_PASSWORD","internal-error"),t(Ye)(Aa,"EMAIL_EXISTS","email-already-in-use"),t(Ye)(Aa,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(Ye)(Aa,"INVALID_IDP_RESPONSE","invalid-credential"),t(Ye)(Aa,"INVALID_PENDING_TOKEN","invalid-credential"),t(Ye)(Aa,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(Ye)(Aa,"MISSING_REQ_TYPE","internal-error"),t(Ye)(Aa,"EMAIL_NOT_FOUND","user-not-found"),t(Ye)(Aa,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(Ye)(Aa,"EXPIRED_OOB_CODE","expired-action-code"),t(Ye)(Aa,"INVALID_OOB_CODE","invalid-action-code"),t(Ye)(Aa,"MISSING_OOB_CODE","internal-error"),t(Ye)(Aa,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(Ye)(Aa,"INVALID_ID_TOKEN","invalid-user-token"),t(Ye)(Aa,"TOKEN_EXPIRED","user-token-expired"),t(Ye)(Aa,"USER_NOT_FOUND","user-token-expired"),t(Ye)(Aa,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(Ye)(Aa,"INVALID_CODE","invalid-verification-code"),t(Ye)(Aa,"INVALID_SESSION_INFO","invalid-verification-id"),t(Ye)(Aa,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(Ye)(Aa,"MISSING_SESSION_INFO","missing-verification-id"),t(Ye)(Aa,"SESSION_EXPIRED","code-expired"),t(Ye)(Aa,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(Ye)(Aa,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(Ye)(Aa,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(Ye)(Aa,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(Ye)(Aa,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(Ye)(Aa,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(Ye)(Aa,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(Ye)(Aa,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(Ye)(Aa,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(Ye)(Aa,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(Ye)(Aa,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Aa),Ra=new Sa(3e4,6e4);function La(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Pa(e,t,n,r){return Ma.apply(this,arguments)}function Ma(){return Ma=t(s)(t(u).mark((function e(n,r,i,a){var o,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",Ua(n,o,t(s)(t(u).mark((function e(){var o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),c=Ct(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Ca.fetch()(Ha(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Ma.apply(this,arguments)}function Ua(e,t,n){return ja.apply(this,arguments)}function ja(){return(ja=t(s)(t(u).mark((function e(n,r,i){var a,o,s,c,l,f,d,p,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Da),r),e.prev=2,o=new za(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Ba(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,f=t(Qe)(l.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw Ba(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw Ba(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw Ba(n,"user-disabled",c);case 29:if(h=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw ya(n,h,p);case 34:va(n,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof It)){e.next=41;break}throw e.t0;case 41:va(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Fa(e,t,n,r){return Va.apply(this,arguments)}function Va(){return Va=t(s)(t(u).mark((function e(n,r,i,a){var o,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Pa(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&va(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Va.apply(this,arguments)}function Ha(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Oa(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var za=function(){"use strict";function e(n){var r=this;t(Se)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(ma(n.auth,"network-request-failed"))}),Ra.get())}))}return t(Oe)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Ba(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ma(e,t,r);return i.customData._tokenResponse=n,i}function Wa(e,t){return qa.apply(this,arguments)}function qa(){return(qa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pa(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ka(e,t){return Ga.apply(this,arguments)}function Ga(){return(Ga=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pa(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return Xa=t(s)(t(u).mark((function e(n){var r,i,a,o,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=jt(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,ba((o=$a(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Ja(Ya(o.auth_time)),issuedAtTime:Ja(Ya(o.iat)),expirationTime:Ja(Ya(o.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Xa.apply(this,arguments)}function Ya(e){return 1e3*Number(e)}function $a(e){var n=t(Qe)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return ha("JWT malformed, contained fewer than 3 sections"),null;try{var o=yt(i);return o?JSON.parse(o):(ha("Failed to decode base64 JWT payload"),null)}catch(e){return ha("Caught error parsing JWT payload as JSON",e),null}}function Qa(e,t){return Za.apply(this,arguments)}function Za(){return Za=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof It&&eo(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Za.apply(this,arguments)}function eo(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var to=function(){"use strict";function e(n){t(Se)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(Oe)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===t.t0.code&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),no=function(){"use strict";function e(n,r){t(Se)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(Oe)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e){return io.apply(this,arguments)}function io(){return(io=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i,a,o,s,c,l,f,d,p,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Qa(n,Ka(i,{idToken:a}));case 7:ba(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?so(s.providerUserInfo):[],l=oo(n.providerData,c),f=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),p=!!f&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ao(){return(ao=t(s)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=jt(n),e.next=3,ro(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oo(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t($e)(r).concat(t($e)(n))}function so(e){return e.map((function(e){var t=e.providerId,n=ua(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function uo(e,t){return co.apply(this,arguments)}function co(){return(co=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ua(n,{},t(s)(t(u).mark((function e(){var i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ct({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,c=Ha(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ca.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo=function(){"use strict";function e(){t(Se)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(Oe)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){ba(e.idToken,"internal-error"),ba(void 0!==e.idToken,"internal-error"),ba(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,ba(n=$a(t),"internal-error"),ba(void 0!==n.exp,"internal-error"),ba(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ba(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(s)(t(u).mark((function i(){var a,o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,uo(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(c));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return ka("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(ba("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(ba("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(ba("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e,t){ba("string"==typeof e||void 0===e,"internal-error",{appName:t})}var po=function(){"use strict";function e(n){t(Se)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=ua(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new to(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t($e)(o.providerData):[],this.metadata=new no(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(Oe)(e,[{key:"getIdToken",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Qa(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(ba(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Xa.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ao.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(ba(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){ba(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(u).mark((function i(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,ro(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Qa(e,Wa(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,k=n.emailVerified,w=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;ba(b&&_,t,"internal-error");var I=lo.fromJSON(this.name,_);ba("string"==typeof b,t,"internal-error"),fo(f,t.name),fo(d,t.name),ba("boolean"==typeof k,t,"internal-error"),ba("boolean"==typeof w,t,"internal-error"),fo(p,t.name),fo(h,t.name),fo(v,t.name),fo(m,t.name),fo(y,t.name),fo(g,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(t(u).mark((function a(){var o,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new lo).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,ro(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),ho=function(){"use strict";function e(){t(Se)(this,e),this.type="NONE",this.storage={}}return t(Oe)(e,[{key:"_isAvailable",value:function(){return t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(s)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ho.type="NONE";var vo=ho;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var yo=function(){"use strict";function e(n,r,i){t(Se)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=mo(this.userKey,o.apiKey,s),this.fullPersistenceKey=mo("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(Oe)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?po._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(s)(t(u).mark((function a(){var o,c,l,f,d,p,h,v,m,y,g,b,k;return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(_a(vo),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),c=o[0]||_a(vo),l=mo(i,n.config.apiKey,n.name),f=null,d=!0,p=!1,h=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(l);case 16:if(!(g=a.sent)){a.next=22;break}return b=po._fromJSON(n,g),y!==c&&(f=b),c=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=o.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(c,n,i));case 46:if(c=k[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(c,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Io(t))return"Blackberry";if(Eo(t))return"Webos";if(ko(t))return"Safari";if((t.includes("chrome/")||wo(t))&&!t.includes("edge/"))return"Chrome";if(_o(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function bo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/firefox\//i.test(e)}function ko(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/crios\//i.test(e)}function xo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/iemobile/i.test(e)}function _o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/android/i.test(e)}function Io(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/blackberry/i.test(e)}function Eo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/webos/i.test(e)}function To(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return/iphone|ipad|ipod/i.test(e)}function No(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return To(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function So(){return((e=bt()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Oo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();return To(e)||_o(e)||Eo(e)||Io(e)||/windows phone/i.test(e)||xo(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=go(bt());break;case"Worker":t="".concat(go(bt()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Pn,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Co=function(){"use strict";function e(n){t(Se)(this,e),this.auth=n,this.queue=[]}return t(Oe)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a,o,s,c,l,f,d,p,h,v,m,y,g;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:a=[],t.prev=4,o=!0,s=!1,c=void 0,t.prev=6,l=n.queue[Symbol.iterator]();case 8:if(o=(f=l.next()).done){t.next=16;break}return d=f.value,t.next=12,d(e);case 12:d.onAbort&&a.push(d.onAbort);case 13:o=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,c=t.t0;case 22:t.prev=22,t.prev=23,o||null==l.return||l.return();case 25:if(t.prev=25,!s){t.next=28;break}throw c;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),a.reverse(),p=!0,h=!1,v=void 0,t.prev=36,m=a[Symbol.iterator]();!(p=(y=m.next()).done);p=!0){g=y.value;try{g()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),h=!0,v=t.t2;case 44:t.prev=44,t.prev=45,p||null==m.return||m.return();case 47:if(t.prev=47,!h){t.next=50;break}throw v;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),Do=function(){"use strict";function e(n,r,i){t(Se)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.beforeStateQueue=new Co(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(Oe)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=_a(n));var r=this;return this._initializationPromise=this.queue(t(s)(t(u).mark((function i(){var a,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,yo.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a,o,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:f=t.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return ba(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ro(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===t.t0.code){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?jt(e):null)&&ba(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&ba(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(_a(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Et("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(s)(t(u).mark((function i(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return ba(i=e&&_a(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,yo.create(n,[_a(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ba(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&(n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh()),n.currentUser=e,!e){t.next=7;break}return t.next=5,n.assertedPersistence.setCurrentUser(e);case 5:t.next=9;break;case 7:return t.next=9,n.assertedPersistence.removeCurrentUser();case 9:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return ba(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ao(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i,a;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(Ye)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){return jt(e)}var Lo=function(){"use strict";function e(n){var r,i,a=this;t(Se)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new Lt((function(e){return a.observer=e}),r)).subscribe.bind(i)}return t(Oe)(e,[{key:"next",get:function(){return ba(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Po=function(){"use strict";function e(n,r){t(Se)(this,e),this.providerId=n,this.signInMethod=r}return t(Oe)(e,[{key:"toJSON",value:function(){return ka("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ka("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ka("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ka("not implemented")}}]),e}();function Mo(e,t){return Uo.apply(this,arguments)}function Uo(){return(Uo=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pa(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jo(e,t){return Fo.apply(this,arguments)}function Fo(){return(Fo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithPassword",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vo(e,t){return Ho.apply(this,arguments)}function Ho(){return(Ho=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithEmailLink",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zo(e,t){return Bo.apply(this,arguments)}function Bo(){return(Bo=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithEmailLink",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(Se)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return t(Oe)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",jo(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",Vo(e,{email:n._email,oobCode:n._password}));case 5:va(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(s)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Mo(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",zo(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:va(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Po);function qo(e,t){return Ko.apply(this,arguments)}function Ko(){return(Ko=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithIdp",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Go=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){var e;return t(Se)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(Oe)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return qo(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,qo(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,qo(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ct(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):va("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=ua(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Po);function Jo(e,t){return Xo.apply(this,arguments)}function Xo(){return(Xo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pa(n,"POST","/v1/accounts:sendVerificationCode",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yo(){return(Yo=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithPhoneNumber",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $o(){return($o=t(s)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fa(n,"POST","/v1/accounts:signInWithPhoneNumber",La(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Ba(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qo=t(Ye)({},"USER_NOT_FOUND","user-not-found");function Zo(){return(Zo=t(s)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Fa(n,"POST","/v1/accounts:signInWithPhoneNumber",La(n,i),Qo));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var es=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e){var i;return t(Se)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(Oe)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Yo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return $o.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Zo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Po);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts=function(){"use strict";function e(n){var r,i,a,o,s,u;t(Se)(this,e);var c=Dt(Rt(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);ba(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(Oe)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=Dt(Rt(e)).link,n=t?Dt(Rt(t)).deep_link_id:null,r=Dt(Rt(e)).deep_link_id;return(r?Dt(Rt(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns=function(){"use strict";function e(){t(Se)(this,e),this.providerId=e.PROVIDER_ID}return t(Oe)(e,null,[{key:"credential",value:function(e,t){return Wo._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ts.parseLink(t);return ba(n,"argument-error"),Wo._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ns.PROVIDER_ID="password",ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rs=function(){"use strict";function e(n){t(Se)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(Oe)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),is=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){var e;return t(Se)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(Oe)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t($e)(this.scopes)}}]),r}(rs),as=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){return t(Se)(this,r),n.call(this,"facebook.com")}return t(Oe)(r,null,[{key:"credential",value:function(e){return Go._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(is);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.FACEBOOK_SIGN_IN_METHOD="facebook.com",as.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var os=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){var e;return t(Se)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(Oe)(r,null,[{key:"credential",value:function(e,t){return Go._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(is);os.GOOGLE_SIGN_IN_METHOD="google.com",os.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ss=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){return t(Se)(this,r),n.call(this,"github.com")}return t(Oe)(r,null,[{key:"credential",value:function(e){return Go._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(is);ss.GITHUB_SIGN_IN_METHOD="github.com",ss.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var us=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){return t(Se)(this,r),n.call(this,"twitter.com")}return t(Oe)(r,null,[{key:"credential",value:function(e,t){return Go._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(is);function cs(e,t){return ls.apply(this,arguments)}function ls(){return(ls=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fa(n,"POST","/v1/accounts:signUp",La(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */us.TWITTER_SIGN_IN_METHOD="twitter.com",us.PROVIDER_ID="twitter.com";var fs=function(){"use strict";function e(n){t(Se)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(Oe)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(s)(t(u).mark((function o(){var s,c,l;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,po._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,c=ds(i),l=new e({user:s,providerId:c,_tokenResponse:i,operationType:r}),t.abrupt("return",l);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(s)(t(u).mark((function a(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=ds(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function ds(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ps=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e,i,a,o){var s,u;return t(Se)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(t(it)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return t(Oe)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(It);function hs(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw ps._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e,t){return ms.apply(this,arguments)}function ms(){return ms=t(s)(t(u).mark((function e(n,r){var i,a,o=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Qa,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",fs._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),ms.apply(this,arguments)}function ys(e,t){return gs.apply(this,arguments)}function gs(){return gs=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i,a,o,s,c,l,f=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,Qa(n,hs(a,o,r,n),i);case 6:return ba((s=e.sent).idToken,a,"internal-error"),ba(c=$a(s.idToken),a,"internal-error"),l=c.sub,ba(n.uid===l,a,"user-mismatch"),e.abrupt("return",fs._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&va(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),gs.apply(this,arguments)}function bs(e,t){return ks.apply(this,arguments)}function ks(){return ks=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n,r){var i,a,o,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,hs(n,a,r);case 4:return o=e.sent,e.next=7,fs._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),ks.apply(this,arguments)}function ws(e,t){return xs.apply(this,arguments)}function xs(){return(xs=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bs(Ro(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _s(e,t,n){return Is.apply(this,arguments)}function Is(){return(Is=t(s)(t(u).mark((function e(n,r,i){var a,o,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ro(n),e.next=3,cs(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,fs._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Es(e,t){return Pa(e,"POST","/v2/accounts/mfaEnrollment:start",La(e,t))}new WeakMap;var Ts="__sak",Ns=function(){"use strict";function e(n,r){t(Se)(this,e),this.storageRetriever=n,this.type=r}return t(Oe)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){var e,i;return t(Se)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(ko(i=bt())||To(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Oo(),e._shouldAllowMigration=!0,e}return t(Oe)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);So()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(s)(t(u).mark((function o(){return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(ia)(t(sa)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(s)(t(u).mark((function a(){var o;return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(ia)(t(sa)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(s)(t(u).mark((function a(){return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(ia)(t(sa)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Ns);Ss.type="LOCAL";var Os=Ss,As=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(){return t(Se)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(Oe)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Ns);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */As.type="SESSION";var Cs=As;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){return Promise.all(e.map((n=t(s)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rs=function(){"use strict";function e(n){t(Se)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(Oe)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a,o,c,l,f,d,p;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,o=a.eventId,c=a.eventType,l=a.data,null==(f=n.handlersMap[c])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:c}),d=Array.from(f).map(function(){var e=t(s)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Ds(d);case 9:p=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:c,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ls(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.receivers=[];var Ps=function(){"use strict";function e(n){t(Se)(this,e),this.target=n,this.handlers=new Set}return t(Oe)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(s)(t(u).mark((function a(){var o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var u=Ls("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:n},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(){return void 0!==Ms().WorkerGlobalScope&&"function"==typeof Ms().importScripts}function js(){return Fs.apply(this,arguments)}function Fs(){return(Fs=t(s)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vs="firebaseLocalStorageDb",Hs="firebaseLocalStorage",zs="fbase_key",Bs=function(){"use strict";function e(n){t(Se)(this,e),this.request=n}return t(Oe)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Ws(e,t){return e.transaction([Hs],t?"readwrite":"readonly").objectStore(Hs)}function qs(){var e=indexedDB.deleteDatabase(Vs);return new Bs(e).toPromise()}function Ks(){var e=indexedDB.open(Vs,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Hs,{keyPath:zs})}catch(e){r(e)}})),e.addEventListener("success",t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Hs)){t.next=12;break}return i.close(),t.next=5,qs();case 5:return t.t0=n,t.next=8,Ks();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Gs(e,t,n){return Js.apply(this,arguments)}function Js(){return(Js=t(s)(t(u).mark((function e(n,r,i){var a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Ws(n,!0).put((a={},t(Ye)(a,zs,r),t(Ye)(a,"value",i),a)),e.abrupt("return",new Bs(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xs(e,t){return Ys.apply(this,arguments)}function Ys(){return(Ys=t(s)(t(u).mark((function e(n,r){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ws(n,!1).get(r),e.next=3,new Bs(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $s(e,t){var n=Ws(e,!0).delete(t);return new Bs(n).toPromise()}var Qs=function(){"use strict";function e(){t(Se)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(Oe)(e,[{key:"_openDb",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ks();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Us()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(s)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=Rs._getInstance(Us()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(s)(t(u).mark((function n(r,i){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(s)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,js();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Ps(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(s)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ks();case 5:return n=e.sent,e.next=8,Gs(n,Ts,"1");case 8:return e.next=10,$s(n,Ts);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(s)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(s)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Gs(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Xs(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(s)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(s)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return $s(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r,i,a,o,s,c,l,f,d,p,h,v,m,y,g,b,k;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Ws(e,!1).getAll();return new Bs(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,c=void 0,t.prev=10,l=r[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,p=d.fbase_key,h=d.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,y=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=g.next()).done);v=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,y=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!m){t.next=41;break}throw y;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(s)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Qs.type="LOCAL";var Zs=Qs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t){return Pa(e,"POST","/v2/accounts/mfaSignIn:start",La(e,t))}function tu(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ma("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function nu(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nu("rcb"),new Sa(3e4,6e4);var ru="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e,t,n){return au.apply(this,arguments)}function au(){return(au=t(s)(t(u).mark((function e(n,r,i){var a,o,s,c,l,f,d,p;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,ba("string"==typeof o,n,"argument-error"),ba(i.type===ru,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return ba("enroll"===c.type,n,"internal-error"),e.next=15,Es(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return ba("signin"===c.type,n,"internal-error"),ba(f=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,eu(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Jo(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ou=function(){"use strict";function e(n){t(Se)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Ro(n)}return t(Oe)(e,[{key:"verifyPhoneNumber",value:function(e,t){return iu(this.auth,e,jt(t))}}],[{key:"credential",value:function(e,t){return es._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?es._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function su(e,t){return t?_a(t):(ba(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ou.PROVIDER_ID="phone",ou.PHONE_SIGN_IN_METHOD="phone";var uu=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e){var i;return t(Se)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(Oe)(r,[{key:"_getIdTokenResponse",value:function(e){return qo(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return qo(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return qo(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Po);function cu(e){return bs(e.auth,new uu(e),e.bypassAuthState)}function lu(e){var t=e.auth,n=e.user;return ba(n,t,"internal-error"),ys(n,new uu(e),e.bypassAuthState)}function fu(e){return du.apply(this,arguments)}function du(){return(du=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,ba(i=n.user,r,"internal-error"),e.abrupt("return",vs(i,new uu(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pu=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(Se)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(Oe)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(s)(t(u).mark((function e(r,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a,o,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,c=e.error,l=e.type,!c){t.next=4;break}return n.reject(c),t.abrupt("return");case 4:return f={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(l)(f);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cu;case"linkViaPopup":case"linkViaRedirect":return fu;case"reauthViaPopup":case"reauthViaRedirect":return lu;default:va(this.auth,"internal-error")}}},{key:"resolve",value:function(e){wa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){wa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),hu=new Sa(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vu=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e,i,a,o,s){var u;return t(Se)(this,r),(u=n.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(it)(u),u}return t(Oe)(r,[{key:"executeNotNull",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return ba(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wa(1===e.filter.length,"Popup operations only handle one event"),r=Ls(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(ma(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ma(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ma(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,hu.get())};t()}}]),r}(pu);vu.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mu=new Map,yu=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(Se)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(Oe)(r,[{key:"execute",value:function(){var e=this,n=this;return t(s)(t(u).mark((function i(){var a,o;return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=mu.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,gu(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(ia)(t(sa)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:mu.set(n.auth._key(),a);case 21:return n.bypassAuthState||mu.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(ia)(t(sa)(r.prototype),"onAuthEvent",n)};return t(s)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(pu);function gu(e,t){return bu.apply(this,arguments)}function bu(){return(bu=t(s)(t(u).mark((function e(n,r){var i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xu(r),a=wu(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ku(e,t){mu.set(e._key(),t)}function wu(e){return _a(e._redirectPersistence)}function xu(e){return mo("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){return Iu.apply(this,arguments)}function Iu(){return Iu=t(s)(t(u).mark((function e(n,r){var i,a,o,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Ro(n),o=su(a,r),s=new yu(a,o,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),Iu.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eu=function(){"use strict";function e(n){t(Se)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(Oe)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nu(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Nu(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ma(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tu(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Tu(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Tu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Nu(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Su(e){return Ou.apply(this,arguments)}function Ou(){return Ou=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(u).mark((function e(n){var r,i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Pa(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Ou.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Au=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cu=/^https?/;function Du(){return(Du=t(s)(t(u).mark((function e(n){var r,i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Su(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Ru(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:va(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ru(e){var t=Ea(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Cu.test(r))return!1;if(Au.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lu=new Sa(3e4,6e4);function Pu(){var e=Ms().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t($e)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Mu=null;function Uu(e){return Mu=Mu||function(e){return new Promise((function(t,n){var r,i,a;function o(){Pu(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Pu(),n(ma(e,"network-request-failed"))},timeout:Lu.get()})}if(null===(i=null===(r=Ms().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ms().gapi)||void 0===a?void 0:a.load)){var s=nu("iframefcb");return Ms()[s]=function(){gapi.load?o():n(ma(e,"network-request-failed"))},tu("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Mu=null,e}))}(e),Mu}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ju=new Sa(5e3,15e3),Fu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hu(e){var t=e.config;ba(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Oa(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Pn},i=Vu.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Ct(r).slice(1))}function zu(e){return Bu.apply(this,arguments)}function Bu(){return Bu=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Uu(n);case 2:return r=e.sent,ba(i=Ms().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Hu(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fu,dontclear:!0},(function(e){return new Promise((r=t(s)(t(u).mark((function r(i,a){var o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){Ms().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=ma(n,"network-request-failed"),s=Ms().setTimeout((function(){a(o)}),ju.get()),e.ping(c).then(c,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Bu.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qu="_blank",Ku="http://localhost",Gu=function(){"use strict";function e(n){t(Se)(this,e),this.window=n,this.associatedEvent=null}return t(Oe)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Ju(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Wu),{width:i.toString(),height:a.toString(),top:o,left:s}),l=bt().toLowerCase();r&&(u=wo(l)?qu:r),bo(l)&&(n=n||Ku,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,n){var r=t(Qe)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(No(l)&&"_self"!==u)return Xu(n||"",u),new Gu(null);var d=window.open(n||"",u,f);ba(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Gu(d)}function Xu(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yu="__/auth/handler",$u="emulator/auth/handler";function Qu(e,n,r,i,a,o){ba(e.config.authDomain,e,"auth-domain-config-required"),ba(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:Pn,eventId:a};if(n instanceof rs){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",St(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=t(Qe)(f.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof is){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var y,g,b=s,k=!0,w=!1,x=void 0;try{for(var _,I=Object.keys(b)[Symbol.iterator]();!(k=(_=I.next()).done);k=!0){var E=_.value;void 0===b[E]&&delete b[E]}}catch(e){w=!0,x=e}finally{try{k||null==I.return||I.return()}finally{if(w)throw x}}return"".concat((y=e,g=y.config,g.emulator?Oa(g,$u):"https://".concat(g.authDomain,"/").concat(Yu)),"?").concat(Ct(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zu="webStorageSupport",ec=function(){"use strict";function e(){t(Se)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cs,this._completeRedirectFn=_u,this._overrideRedirectResult=ku}return t(Oe)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(s)(t(u).mark((function o(){var s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wa(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=Qu(e,n,r,Ea(),i),t.abrupt("return",Ju(e,c,Ls()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(s)(t(u).mark((function o(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=Qu(e,n,r,Ea(),i),Ms().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(wa(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zu(e);case 2:return i=t.sent,a=new Eu(e),i.register("authEvent",(function(t){return ba(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Zu,{type:Zu},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),va(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Du.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Oo()||ko()||To()}}]),e}(),tc=ec,nc=function(e){"use strict";t(at)(r,e);var n=t(pt)(r);function r(e){var i;return t(Se)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(Oe)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Pa(e,"POST","/v2/accounts/mfaEnrollment:finalize",La(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Pa(e,"POST","/v2/accounts/mfaSignIn:finalize",La(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(Se)(this,e),this.factorId=n}return t(Oe)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return ka("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(Se)(this,e)}return t(Oe)(e,null,[{key:"assertion",value:function(e){return nc._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var rc,ic="@firebase/auth",ac="0.20.3",oc=function(){"use strict";function e(n){t(Se)(this,e),this.auth=n,this.internalListeners=new Map}return t(Oe)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(s)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){ba(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();rc="Browser",An(new Ft("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){ba(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),ba(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:rc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ao(rc)},i=new Do(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_a);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),An(new Ft("auth-internal",(function(e){var t=Ro(e.getProvider("auth").getImmediate());return new oc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Un(ic,ac,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rc)),Un(ic,ac,"esm2017");var sc,uc=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:En,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Rn.create("bad-app-name",{appName:String(i)});var a=Nn.get(i);if(a){if(Ot(e,a.options)&&Ot(r,a.config))return a;throw Rn.create("duplicate-app",{appName:i})}var o=new Wt(i),s=!0,u=!1,c=void 0;try{for(var l,f=Sn.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var d=l.value;o.addComponent(d)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var p=new Ln(e,r,o);return Nn.set(i,p),p}({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),cc=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn(),t=Cn(e=jt(e),pi);t.isInitialized()?t.getImmediate():ea(e)}(uc),
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn(),t=Cn(e,"auth");return t.isInitialized()?t.getImmediate():Ia(e,{popupRedirectResolver:tc,persistence:[Zs,Os,Cs]})}(uc)),lc=document.querySelector("#btnLogin"),fc=document.querySelector("#btnSignup"),dc=document.querySelector("#user-email"),pc=document.querySelector("#user-name"),hc=document.querySelector("[data-modal]"),vc=document.querySelector("#user-login"),mc=document.querySelector("#user-library"),yc=document.querySelector("#user-logout"),gc=(sc=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=dc.value,i=pc.value,e.prev=3,e.next=6,(t=cc,a=r,o=i,ws(jt(t),ns.credential(a,o))).then((function(e){e&&(j.Notify.success("Hello: ".concat(r)),hc.classList.toggle("is-hidden"),xc(),dc.value="",pc.value="",console.log(e)),console.log("btnclick loginEmailPassword")}));case 6:e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),kc(e.t0);case 13:case"end":return e.stop()}var t,a,o}),e,null,[[3,9]])}))),function(e){return sc.apply(this,arguments)});lc.addEventListener("click",gc);var bc=function(){var e=t(s)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=dc.value,i=pc.value,e.prev=3,e.next=6,_s(cc,r,i).then((function(e){e&&(j.Notify.success("Registration completed successfully. Click Log in"),console.log(e)),console.log("btnclick createAccount")}));case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),i.length<7?j.Notify.info("Your password have less than 6 characters"):(console.log(e.t0),kc(e.t0));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();fc.addEventListener("click",bc);var kc=function(e){e.code==da.INVALID_PASSWORD?j.Notify.info("Wrong password. Try again"):j.Notify.info("Error: ".concat(e.message))},wc=function(){var e=t(s)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,jt(cc).signOut();case 2:xc(),j.Notify.info("You have been logged out.");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function xc(){vc.classList.toggle("hidden-link"),mc.classList.toggle("hidden-link"),yc.classList.toggle("hidden-link")}yc.addEventListener("click",wc)}();
//# sourceMappingURL=index.bd1d5b8f.js.map
