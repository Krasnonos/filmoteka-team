!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=l),l.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=l("8NIkP"))&&n.__esModule?n:{default:n}})),l.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),l.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),l.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),l.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=l("8NIkP"))&&n.__esModule?n:{default:n}}));var a=document.querySelector("#watched"),u=document.querySelector("#queue"),i=document.querySelector(".js-watched-text"),o=document.querySelector(".js-queue-text");u.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),a.removeAttribute("data-current"),i.style.display="none",o.style.display="block"})),a.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),u.removeAttribute("data-current"),o.style.display="none",i.style.display="block"}));var c=l("bpxeT"),s=l("2TvXO"),d=(c=l("bpxeT"),s=l("2TvXO"),l("dIxxU"));e(d).defaults.baseURL="https://api.themoviedb.org";var f="c8ef48bae82b60cf66a4f0e6e3dd153e";function m(e){return p.apply(this,arguments)}function p(){return(p=e(c)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(d)("3/movie/".concat(n,"?api_key=").concat(f,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=l("l5bVx"),g=e(l("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,a){var u,i=null!=n?n:t.nullContext||{},o=t.hooks.helperMissing,c="function",s=t.escapeExpression,d=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+s((void 0===(u=null!=(u=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):u)+'" class="gallery-list__card">\n        <button type="button" data-filmid="'+s((void 0===(u=null!=(u=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"filmId",hash:{},data:a,loc:{start:{line:3,column:43},end:{line:3,column:53}}}):u)+'" class="remove-film-btn">\n            <svg class="remove-film-svg" width="26" height="30">\n                <use href="./images/icons.svg#icon-clear"></use>\n            </svg>\n        </button>\n\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="https://image.tmdb.org/t/p/w300'+s((void 0===(u=null!=(u=d(r,"urlImg")||(null!=n?d(n,"urlImg"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"urlImg",hash:{},data:a,loc:{start:{line:10,column:79},end:{line:10,column:89}}}):u)+'" alt="'+s((void 0===(u=null!=(u=d(r,"title")||(null!=n?d(n,"title"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"title",hash:{},data:a,loc:{start:{line:10,column:96},end:{line:10,column:105}}}):u)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+s((void 0===(u=null!=(u=d(r,"title")||(null!=n?d(n,"title"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"title",hash:{},data:a,loc:{start:{line:14,column:44},end:{line:14,column:53}}}):u)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+s((void 0===(u=null!=(u=d(r,"ganres")||(null!=n?d(n,"ganres"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"ganres",hash:{},data:a,loc:{start:{line:17,column:47},end:{line:17,column:57}}}):u)+' | <span class="gallery-list__Year">'+s((void 0===(u=null!=(u=d(r,"relisYer")||(null!=n?d(n,"relisYer"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"relisYer",hash:{},data:a,loc:{start:{line:17,column:93},end:{line:17,column:105}}}):u)+'</span> </p>\n                <span class="gallery-list__rating">'+s((void 0===(u=null!=(u=d(r,"ratting")||(null!=n?d(n,"ratting"):n))?u:o)?"undefined":e(y)(u))===c?u.call(i,{name:"ratting",hash:{},data:a,loc:{start:{line:18,column:51},end:{line:18,column:62}}}):u)+"</span>\n\n            </div>\n        </div>\n    </div>\n</li>\n"},useData:!0});function v(e){var t="";return e.forEach((function(e){var n={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:e.poster_path,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:e.genres.map((function(e){return e.name})).slice(0,2).join(", ")||"XXXX",ratting:e.vote_average};t+=g(n)})),t}l("88LCY"),l("4ltia");var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e){return b.default(e)||_.default(e)||S.default(e)||x.default()};var b=k(l("kMC0W")),_=k(l("7AJDX")),x=k(l("8CtQK")),S=k(l("auk6i"));function k(e){return e&&e.__esModule?e:{default:e}}var w=[];function q(t){w=e(h)(t)}function I(){return w}var j=document.querySelector("#watched"),M=document.querySelector("#queue"),O=document.querySelector(".gallery-list"),X=document.querySelector(".js-watched-text"),P=document.querySelector(".js-queue-text");function T(e){return A.apply(this,arguments)}function A(){return(A=e(c)(e(s).mark((function t(n){var r,l,a,u,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.currentTarget.dataset.key,l=localStorage.getItem(r),a=JSON.parse(l)){e.next=6;break}return O.innerHTML="",e.abrupt("return");case 6:return e.next=8,a.map((function(e){return m(e)}));case 8:return u=e.sent,e.next=11,Promise.all(u);case 11:i=e.sent,o=i.map((function(e){return e.data})),O.innerHTML=v(o),q(o),L(r);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(e){"watched-films"===e?X.style.display="none":P.style.display="none"}M.addEventListener("click",T),j.addEventListener("click",T),l("13upn"),l("3gTut");var E=document.querySelector(".clear-library-btn"),N=document.querySelector(".gallery-list"),C=document.querySelector(".js-watched-text"),J=document.querySelector(".js-queue-text");E.addEventListener("click",(function(e){var t=document.querySelector('button[data-current="currentPage"]');(function(e){localStorage.removeItem(e),N.innerHTML=""})(t.dataset.key),"watched"===t.id?C.style.display="block":J.style.display="block"}));c=l("bpxeT"),s=l("2TvXO");var U=document.querySelector(".gallery-list"),Y=document.querySelector(".js-watched-text"),D=document.querySelector(".js-queue-text");function H(){return(H=e(c)(e(s).mark((function t(n){var r,l,a,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("svg"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:r=n.target.closest(".remove-film-btn").dataset.filmid,l=R(),W(r,l),K(l),a=I(),u=a.filter((function(e){return e.id!==Number(r)})),U.innerHTML=v(u),q(u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(){return document.querySelector('button[data-current="currentPage"]').dataset.key}function W(e,t){var n=JSON.parse(localStorage.getItem(t)).filter((function(t){return t!==e}));return localStorage.setItem(t,JSON.stringify(n)),n}function K(e){0===JSON.parse(localStorage.getItem(e)).length?(localStorage.removeItem(e),"watched-films"===e?Y.style.display="block":D.style.display="block"):console.log(localStorage.getItem(e))}U.addEventListener("click",(function(e){return H.apply(this,arguments)}))}();
//# sourceMappingURL=library.500af6b9.js.map
