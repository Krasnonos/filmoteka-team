!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var l=document.querySelector("#watched"),i=document.querySelector("#queue"),u=document.querySelector(".js-watched-text"),c=document.querySelector(".js-queue-text");i.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),l.removeAttribute("data-current"),u.style.display="none",c.style.display="block"})),l.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),i.removeAttribute("data-current"),c.style.display="none",u.style.display="block"}));var o=a("bpxeT"),s=a("2TvXO"),d=(o=a("bpxeT"),s=a("2TvXO"),a("dIxxU"));e(d).defaults.baseURL="https://api.themoviedb.org";var m="c8ef48bae82b60cf66a4f0e6e3dd153e";function f(e){return p.apply(this,arguments)}function p(){return(p=e(o)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(d)("3/movie/".concat(n,"?api_key=").concat(m,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=a("l5bVx"),y=e(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(t,n,r,a,l){var i,u=null!=n?n:t.nullContext||{},c=t.hooks.helperMissing,o="function",s=t.escapeExpression,d=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+s((void 0===(i=null!=(i=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"filmId",hash:{},data:l,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):i)+'" class="gallery-list__card">\n        <button type="button" data-filmid="'+s((void 0===(i=null!=(i=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"filmId",hash:{},data:l,loc:{start:{line:3,column:43},end:{line:3,column:53}}}):i)+'" class="remove-film-btn">\n            <svg class="remove-film-svg" width="26" height="30">\n                <use href="./images/icons.svg#icon-clear"></use>\n            </svg>\n        </button>\n\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="https://image.tmdb.org/t/p/w300'+s((void 0===(i=null!=(i=d(r,"urlImg")||(null!=n?d(n,"urlImg"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"urlImg",hash:{},data:l,loc:{start:{line:10,column:79},end:{line:10,column:89}}}):i)+'" alt="'+s((void 0===(i=null!=(i=d(r,"title")||(null!=n?d(n,"title"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"title",hash:{},data:l,loc:{start:{line:10,column:96},end:{line:10,column:105}}}):i)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+s((void 0===(i=null!=(i=d(r,"title")||(null!=n?d(n,"title"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"title",hash:{},data:l,loc:{start:{line:14,column:44},end:{line:14,column:53}}}):i)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+s((void 0===(i=null!=(i=d(r,"ganres")||(null!=n?d(n,"ganres"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"ganres",hash:{},data:l,loc:{start:{line:17,column:47},end:{line:17,column:57}}}):i)+' | <span class="gallery-list__Year">'+s((void 0===(i=null!=(i=d(r,"relisYer")||(null!=n?d(n,"relisYer"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"relisYer",hash:{},data:l,loc:{start:{line:17,column:93},end:{line:17,column:105}}}):i)+'</span> </p>\n                <span class="gallery-list__rating">'+s((void 0===(i=null!=(i=d(r,"ratting")||(null!=n?d(n,"ratting"):n))?i:c)?"undefined":e(g)(i))===o?i.call(u,{name:"ratting",hash:{},data:l,loc:{start:{line:18,column:51},end:{line:18,column:62}}}):i)+"</span>\n\n            </div>\n        </div>\n    </div>\n</li>\n"},useData:!0});function v(e){var t="";return e.forEach((function(e){var n={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:e.poster_path,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:e.genres.map((function(e){return e.name})).slice(0,2).join(", ")||"XXXX",ratting:e.vote_average};t+=y(n)})),t}a("88LCY"),a("4ltia");var h=a("8nrFW"),b=[];function x(t){b=e(h)(t)}function S(){return b}var _=document.querySelector("#watched"),k=document.querySelector("#queue"),q=document.querySelector(".gallery-list"),w=document.querySelector(".js-watched-text"),I=document.querySelector(".js-queue-text");function L(){return(L=e(o)(e(s).mark((function t(n){var r,a,l,i,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_.dataset.key,a=localStorage.getItem(r),l=JSON.parse(a)){e.next=6;break}return q.innerHTML="",e.abrupt("return");case 6:return e.next=8,l.map((function(e){return f(e)}));case 8:return i=e.sent,e.next=11,Promise.all(i);case 11:u=e.sent,c=u.map((function(e){return e.data})),q.innerHTML=v(c),x(c),O(r);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(e){return X.apply(this,arguments)}function X(){return(X=e(o)(e(s).mark((function t(n){var r,a,l,i,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.currentTarget.dataset.key,a=localStorage.getItem(r),l=JSON.parse(a)){e.next=6;break}return q.innerHTML="",e.abrupt("return");case 6:return e.next=8,l.map((function(e){return f(e)}));case 8:return i=e.sent,e.next=11,Promise.all(i);case 11:u=e.sent,c=u.map((function(e){return e.data})),q.innerHTML=v(c),x(c),O(r);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function O(e){"watched-films"===e?w.style.display="none":I.style.display="none"}k.addEventListener("click",T),_.addEventListener("click",T),document.addEventListener("DOMContentLoaded",(function(e){return L.apply(this,arguments)})),a("13upn"),a("3gTut");var j=document.querySelector(".clear-library-btn"),E=document.querySelector(".gallery-list"),M=document.querySelector(".js-watched-text"),N=document.querySelector(".js-queue-text");j.addEventListener("click",(function(e){var t=document.querySelector('button[data-current="currentPage"]');(function(e){localStorage.removeItem(e),E.innerHTML=""})(t.dataset.key),"watched"===t.id?M.style.display="block":N.style.display="block"}));o=a("bpxeT"),s=a("2TvXO");var P=document.querySelector(".gallery-list"),A=document.querySelector(".js-watched-text"),H=document.querySelector(".js-queue-text");function Y(){return(Y=e(o)(e(s).mark((function t(n){var r,a,l,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("svg"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:r=n.target.closest(".remove-film-btn").dataset.filmid,a=J(),U(r,a),C(a),l=S(),i=l.filter((function(e){return e.id!==Number(r)})),P.innerHTML=v(i),x(i);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function J(){return document.querySelector('button[data-current="currentPage"]').dataset.key}function U(e,t){var n=JSON.parse(localStorage.getItem(t)).filter((function(t){return t!==e}));return localStorage.setItem(t,JSON.stringify(n)),n}function C(e){0===JSON.parse(localStorage.getItem(e)).length&&(localStorage.removeItem(e),"watched-films"===e?A.style.display="block":H.style.display="block")}P.addEventListener("click",(function(e){return Y.apply(this,arguments)}))}();
//# sourceMappingURL=library.b3b9f897.js.map
