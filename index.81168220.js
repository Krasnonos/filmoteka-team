!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return s.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return(s=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.81168220.js","6q1P2":"image-not-found-adaptive.85e4068c.png","41aTV":"Logo.9211a2b0.png","7nwxg":"library.84b49e4d.js"}')),i("7SdJ7");var a=i("bpxeT"),s=i("2TvXO"),o=document.querySelector(".advice-list"),u=document.querySelector(".advice-list__nav-btn--left");function c(e){var t=Number(22),n=Number(-22),r=0,i=e.currentTarget.classList.contains("advice-list__nav-btn--right"),a=setInterval((function(){r!=t&&r!=n?(i?r+=1:r-=1,o.scrollBy(r,0)):clearInterval(a)}),30)}document.querySelector(".advice-list__nav-btn--right").addEventListener("click",c),u.addEventListener("click",c),o.addEventListener("touchstart",(function(e){l=e.touches[0].clientX,h=e.touches[0].clientY}),!1),o.addEventListener("touchmove",(function(e){if(!l||!h)return;var t=e.touches[0].clientX,n=e.touches[0].clientY,r=l-t,i=h-n;Math.abs(r),Math.abs(i);l=null,h=null}),!1);var l=null,h=null;a=i("bpxeT"),s=i("2TvXO");e(re=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var f="c8ef48bae82b60cf66a4f0e6e3dd153e";function p(){return d.apply(this,arguments)}function d(){return(d=e(a)(e(s).mark((function t(){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(re)("3/genre/movie/list?api_key=".concat(f));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v,g=document.querySelector(".advice-list");(v=e(a)(e(s).mark((function t(){var n,r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,r=n.data.genres,i=r.map((function(e){var t=e.id,n=e.name;return'<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="'.concat(t,'">').concat(n,"</button></li>")})).join(""),g.innerHTML=i;case 6:case"end":return e.stop()}}),t)}))),function(){return v.apply(this,arguments)})();a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");e(re=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var m="c8ef48bae82b60cf66a4f0e6e3dd153e";function y(e){return k.apply(this,arguments)}function k(){return(k=e(a)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(re)("/3/movie/".concat(n,"/recommendations?api_key=").concat(m));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(e){var t=e.length-1;return e[Math.round(Math.random()*(t-0)+0)]}var w=i("bsgZn"),_=i("k88BM"),I=i("13upn"),E=i("h6c0i"),T=document.querySelector(".advice-list");document.querySelector(".backdrop");function x(){return(x=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r=n.target.dataset.id,e.next=6,y(r);case 6:return i=e.sent,a=i.data.results,o=b(a),u=o.id,e.next=12,(0,w.getModalData)(u);case 12:c=e.sent,(0,_.showModal)(c),(0,I.spinnerOff)(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),E.Notify.info("We are sorry but this genre is empty.");case 20:case"end":return e.stop()}}),t,null,[[2,17]])})))).apply(this,arguments)}T.addEventListener("click",(function(e){return x.apply(this,arguments)})),i("3gTut");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");e(re=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var S="c8ef48bae82b60cf66a4f0e6e3dd153e";function A(e){return O.apply(this,arguments)}function O(){return(O=e(a)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(re)("3/trending/all/day?api_key=".concat(S,"&page=").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var R=i("l5bVx"),N=e(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(t,n,r,i,a){var s,o=null!=n?n:t.nullContext||{},u=t.hooks.helperMissing,c="function",l=t.escapeExpression,h=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="https://image.tmdb.org/t/p/w300'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:79},end:{line:4,column:89}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:96},end:{line:4,column:105}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>\n"},useData:!0}),C=i("88LCY"),D=i("4ltia");function P(e){var t="";return e.forEach((function(e){var n,r=null===(n=e.genre_ids)||void 0===n?void 0:n.map((function(e){return(0,D.convertGanres)(C.genreIds,e)}));r.length>2&&(r.length=2,r.push("Others"));var i={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:e.poster_path,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:r.join(", ")||"Others"};t+=N(i)})),t}i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("6q1P2");var L={galleryListEl:document.querySelector(".gallery-list"),libraryEmptyWachEl:document.querySelector(".js-watched-text")},M=i("jtBSM"),U=(a=i("bpxeT"),s=i("2TvXO"),M=i("jtBSM"),document.querySelector(".pagination")),j=document.querySelector(".gallery-list"),F=1;function V(e){return H.apply(this,arguments)}function H(){return(H=e(a)(e(s).mark((function t(n){var r,i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(n);case 3:return r=e.sent,e.next=6,r.data.results;case 6:i=e.sent,a=r.data.page,o=r.data.total_pages,j.innerHTML="",L.galleryListEl.insertAdjacentHTML("afterbegin",P(i)),(0,M.setResultData)(i),console.log(r),B(a,o),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),L.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 20:case"end":return e.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function B(e,t){F=e;var n="",r=e-1,i=e+2,a=e+1;e>1&&(n+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),e>2&&(n+='<li class="pagination__number display-none">1</li>'),e>4&&(n+='<li class="pagination__number display-none">...</li>'),e>3&&(n+='<li class="pagination__number">'.concat(e-2,"</li>")),e>=2&&(n+='<li class="pagination__number">'.concat(r,"</li>")),n+='<li class="pagination__number active">'.concat(e,"</li>"),e<t-1&&(n+='<li class="pagination__number">'.concat(a,"</li>")),e<t-2&&(n+='<li class="pagination__number">'.concat(i,"</li>")),e<=t-1&&(e<t-3&&(n+='<li class="pagination__number display-none">...</li>'),n+='<li class="pagination__number display-none">'.concat(t,"</li>")),e<t&&(n+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),U.innerHTML=n,U.addEventListener("click",q)}function q(e){if("LI"===e.target.nodeName){var t=e.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),t){case"←":V(F-1);break;case"→":V(F+1);break;case"...":break;default:V(t)}}}function z(){return(z=e(a)(e(s).mark((function t(){var n,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(1);case 3:n=e.sent,r=n.data.results,console.log(n),L.galleryListEl.insertAdjacentHTML("afterbegin",P(r)),B(1,n.data.total_pages),(0,M.setResultData)(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),L.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return z.apply(this,arguments)}));var K,W,G,X,Y,J,$,Q=document.querySelector(".add-block"),Z=document.querySelector(".add-block__time"),ee=document.querySelector(".add-block__btn");W=(K=["https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg","https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg"]).length-1,G=Math.round(Math.random()*(W-0)+0),X='<img\n    src="'.concat(K[G],'"\n    alt="advertising"\n    class="add-block__image"\n  />'),Q.insertAdjacentHTML("beforeend",X),Y=Date.now(),J=0,$=setInterval((function(){if(1===J)return clearInterval($),Z.classList.add("is-hidden"),void ee.classList.remove("is-hidden");var e=Date.now();J=Number(11-((e-Y)/1e3).toFixed()),Z.textContent=J}),1e3),ee.addEventListener("click",(function(){Q.classList.add("is-hidden")})),i("7SdJ7");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT");var te=i("8MBJY"),ne=i("a2hTj"),re=(s=i("2TvXO"),i("dIxxU")),ie=function(){"use strict";function t(){e(te)(this,t),this.searchQuery="",this.page=1}return e(ne)(t,[{key:"getFilm",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("c8ef48bae82b60cf66a4f0e6e3dd153e","&language=en-US&query=").concat(t.searchQuery,"&page=").concat(t.page,"&include_adult=false"),e.prev=1,e.next=4,re.get(r);case 4:return i=e.sent,e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),t}();function ae(e){return se.apply(this,arguments)}function se(){return(se=e(a)(e(s).mark((function t(n){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new ie).query=n,e.next=4,r.getFilm();case 4:return i=e.sent,a=i.data.results,e.abrupt("return",a);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var oe=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:10770,name:"TV Movie"}];function ue(e,t){var n=[],r="";e.filter((function(e){e.id===t&&n.push(e.name)}));var i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r+=" ".concat(c)}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return r}var ce;function le(t){return t.map((function(t){var n=t.id,r=t.original_title,i=t.title,a=t.genre_ids,s=t.poster_path,o=t.backdrop_path,u=t.release_date,c="https://image.tmdb.org/t/p/w500",l=a.map((function(e){return ue(oe,e)}));return s||o||(c=e(ce),s="",o=""),{filmId:n,urlImg:"".concat(c).concat(s||o),title:r||i,ganres:l.length>=3?"".concat(l[0],", ").concat(l[1],", Other"):l.join(", ")||"Film",relisYer:(u||"XXXX").slice(0,4)}}))}ce=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("41aTV");var he={text:document.querySelector(".header_container_line"),galleryList:document.querySelector(".gallery-list"),form:document.querySelector(".home-header_search"),input:document.querySelector(".home-header_search_input"),btn:document.querySelector(".home-header_search_button"),backdropSpinnerRef:document.querySelector(".backdrop-spinner")},fe=(R=i("l5bVx"),e(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(t,n,r,i,a){var s,o=null!=n?n:t.nullContext||{},u=t.hooks.helperMissing,c="function",l=t.escapeExpression,h=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":e(R)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>"},useData:!0}));function pe(e){var t=e.map((function(e){return fe(e)})).join("");he.galleryList.innerHTML=t}I=i("13upn"),M=i("jtBSM");function de(){return(de=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),he.input.addEventListener("input",ge),""!==(r=n.currentTarget.elements.searchQuery.value)){e.next=6;break}return ve(),e.abrupt("return");case 6:return(0,I.spinnerOn)(),e.next=9,ae(r);case 9:if(i=e.sent,(0,I.spinnerOff)(),0!==i.length){e.next=14;break}return ve(),e.abrupt("return");case 14:(0,M.setResultData)(i),pe(le(i));case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ve(){he.text.style.display="block",he.text.textContent="Search result not successful. Enter the correct movie name and"}function ge(e){he.text.style.display="none"}he.form.addEventListener("submit",(function(e){return de.apply(this,arguments)})),i("13upn"),i("6SrrD"),i("74hJy"),i("2Eauc"),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();a=i("bpxeT"),s=i("2TvXO"),E=i("h6c0i"),a=i("bpxeT"),te=i("8MBJY"),ne=i("a2hTj");var me=i("hKHmD"),ye=i("8nrFW"),ke=(s=i("2TvXO"),a=i("bpxeT"),te=i("8MBJY"),ne=i("a2hTj"),{});Object.defineProperty(ke,"__esModule",{value:!0}),ke.default=function(e,t){return be.default(e)||we.default(e,t)||Ie.default(e,t)||_e.default()};var be=Ee(i("8slrw")),we=Ee(i("7AJDX")),_e=Ee(i("ifqQW")),Ie=Ee(i("auk6i"));function Ee(e){return e&&e.__esModule?e:{default:e}}ye=i("8nrFW"),s=i("2TvXO");var Te=i("ds8z5"),xe=(te=i("8MBJY"),ne=i("a2hTj"),i("eYQtU")),Se=(ye=i("8nrFW"),{});Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=function(e){return De(e)};var Ae=Ce(i("ge8co")),Oe=Ce(i("cZGw3")),Re=Ce(i("fVNic")),Ne=Ce(i("gD1JV"));function Ce(e){return e&&e.__esModule?e:{default:e}}function De(e){var t="function"==typeof Map?new Map:void 0;return De=function(e){if(null===e||!Oe.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Ae.default(e,arguments,Re.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Ne.default(n,e)},De(e)}var Pe=i("2MbLg"),Le=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],s=i+1<e.length,o=s?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|o>>4,f=(15&o)<<2|c>>6,p=63&c;u||(p=64,s||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Le(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{var o=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0,o=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==s||null==o||null==u)throw Error();var c=a<<2|s>>4;if(r.push(c),64!==o){var l=s<<4&240|o>>2;if(r.push(l),64!==u){var h=o<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ue=function(e){return function(e){var t=Le(e);return Me.encodeByteArray(t,!0)}(e).replace(/\./g,"")},je=function(e){try{return Me.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var Fe=function(){"use strict";function t(){var n=this;e(te)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(ne)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function Ve(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function He(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Be(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function qe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ze(){var e=Ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ke(){return"object"==typeof indexedDB}function We(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Ge(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
var Xe=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i,a){var s;return e(te)(this,r),(s=n.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(Te)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(Te)(s),Ye.prototype.create),s}return r}(e(Se)(Error)),Ye=function(){"use strict";function t(n,r,i){e(te)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(ne)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),s=this.errors[e],o=s?Je(s,i):"Error",u="".concat(this.serviceName,": ").concat(o," (").concat(a,")."),c=new Xe(a,u,i);return c}}]),t}();function Je(e,t){return e.replace($e,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var $e=/\{\$([^}]+)}/g;
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
 */function Qe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ze(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(et(l)&&et(h)){if(!Ze(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}var f=!0,p=!1,d=void 0;try{for(var v,g=r[Symbol.iterator]();!(f=(v=g.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){p=!0,d=e}finally{try{f||null==g.return||g.return()}finally{if(p)throw d}}return!0}function et(e){return null!==e&&"object"==typeof e}
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
 */function tt(t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=function(t,r){var i=e(ke)(r.value,2),a=i[0],s=i[1];Array.isArray(s)?s.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(s))},u=Object.entries(t)[Symbol.iterator]();!(r=(s=u.next()).done);r=!0)o(0,s)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function nt(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(ke)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function rt(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var it=function(){"use strict";function t(n,r){var i=this;e(te)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(ne)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;if(o in e&&"function"==typeof e[o])return!0}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=at),void 0===r.error&&(r.error=at),void 0===r.complete&&(r.complete=at);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function at(){}
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
var st=144e5;function ot(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(st,r+i)}
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
function ut(e){return e&&e._delegate?e._delegate:e}var ct=function(){"use strict";function t(n,r,i){e(te)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(ne)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),lt="[DEFAULT]",ht=function(){"use strict";function t(n,r){e(te)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(ne)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Fe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:lt})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,s=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=e(ke)(a.value,2),u=o[0],c=o[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(ye)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(ye)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),s=!0,o=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=e(ke)(c.value,2),f=h[0],p=h[1],d=this.normalizeInstanceIdentifier(f);i===d&&p.resolve(a)}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===lt?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.component?this.component.multipleInstances?e:lt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var ft,pt,dt=function(){"use strict";function t(n){e(te)(this,t),this.name=n,this.providers=new Map}return e(ne)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ht(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),vt=(te=i("8MBJY"),ne=i("a2hTj"),me=i("hKHmD"),ye=i("8nrFW"),[]);(pt=ft||(ft={}))[pt.DEBUG=0]="DEBUG",pt[pt.VERBOSE=1]="VERBOSE",pt[pt.INFO=2]="INFO",pt[pt.WARN=3]="WARN",pt[pt.ERROR=4]="ERROR",pt[pt.SILENT=5]="SILENT";var gt,mt={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},yt=ft.INFO,kt=(gt={},e(me)(gt,ft.DEBUG,"log"),e(me)(gt,ft.VERBOSE,"log"),e(me)(gt,ft.INFO,"info"),e(me)(gt,ft.WARN,"warn"),e(me)(gt,ft.ERROR,"error"),gt),bt=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s;if(!(n<t.logLevel)){var o=(new Date).toISOString(),u=kt[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(s=console)[u].apply(s,["[".concat(o,"]  ").concat(t.name,":")].concat(e(ye)(i)))}},wt=function(){"use strict";function t(n){e(te)(this,t),this.name=n,this._logLevel=yt,this._logHandler=bt,this._userLogHandler=null,vt.push(this)}return e(ne)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ft))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?mt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.DEBUG].concat(e(ye)(n))),this._logHandler.apply(this,[this,ft.DEBUG].concat(e(ye)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.VERBOSE].concat(e(ye)(n))),this._logHandler.apply(this,[this,ft.VERBOSE].concat(e(ye)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.INFO].concat(e(ye)(n))),this._logHandler.apply(this,[this,ft.INFO].concat(e(ye)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.WARN].concat(e(ye)(n))),this._logHandler.apply(this,[this,ft.WARN].concat(e(ye)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.ERROR].concat(e(ye)(n))),this._logHandler.apply(this,[this,ft.ERROR].concat(e(ye)(n)))}}]),t}();a=i("bpxeT");var _t={};Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Et.default(e,t,n[t])}))}return e};var It,Et=(It=i("hKHmD"))&&It.__esModule?It:{default:It};var Tt,xt;ye=i("8nrFW"),s=i("2TvXO"),ye=i("8nrFW");var St=new WeakMap,At=new WeakMap,Ot=new WeakMap,Rt=new WeakMap,Nt=new WeakMap;var Ct={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return At.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ot.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Dt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xt||(xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Mt(this),n),Lt(St.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Lt(t.apply(Mt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s,o=(s=t).call.apply(s,[Mt(this),n].concat(e(ye)(i)));return Ot.set(o,n.sort?n.sort():[n]),Lt(o)}}function Pt(e){return"function"==typeof e?Dt(e):(e instanceof IDBTransaction&&function(e){if(!At.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));At.set(e,t)}}(e),t=e,(Tt||(Tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ct):e);var t}function Lt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Lt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&St.set(e,t)})).catch((function(){})),Nt.set(n,t),n;var t,n;if(Rt.has(e))return Rt.get(e);var r=Pt(e);return r!==e&&(Rt.set(e,r),Nt.set(r,e)),r}var Mt=function(e){return Nt.get(e)};function Ut(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,s=n.terminated,o=indexedDB.open(e,t),u=Lt(o);return i&&o.addEventListener("upgradeneeded",(function(e){i(Lt(o.result),e.oldVersion,e.newVersion,Lt(o.transaction))})),r&&o.addEventListener("blocked",(function(){return r()})),u.then((function(e){s&&e.addEventListener("close",(function(){return s()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var jt=["get","getKey","getAll","getAllKeys","count"],Ft=["put","add","delete","clear"],Vt=new Map;function Ht(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Vt.get(n))return Vt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=Ft.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||jt.includes(r))){var u,c=(u=e(a)(e(s).mark((function t(n){var a,u,c,l,h,f,p=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=p[c];return h=this.transaction(n,o?"readwrite":"readonly"),f=h.store,i&&(f=f.index(u.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(ye)(u)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return Vt.set(n,c),c}}}Ct=function(t){return e(_t)({},t,{get:function(e,n,r){return Ht(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ht(e,n)||t.has(e,n)}})}(Ct);
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
var Bt=function(){"use strict";function t(n){e(te)(this,t),this.container=n}return e(ne)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var qt,zt,Kt="@firebase/app",Wt="0.7.26",Gt=new wt("@firebase/app"),Xt="[DEFAULT]",Yt=(qt={},e(me)(qt,Kt,"fire-core"),e(me)(qt,"@firebase/app-compat","fire-core-compat"),e(me)(qt,"@firebase/analytics","fire-analytics"),e(me)(qt,"@firebase/analytics-compat","fire-analytics-compat"),e(me)(qt,"@firebase/app-check","fire-app-check"),e(me)(qt,"@firebase/app-check-compat","fire-app-check-compat"),e(me)(qt,"@firebase/auth","fire-auth"),e(me)(qt,"@firebase/auth-compat","fire-auth-compat"),e(me)(qt,"@firebase/database","fire-rtdb"),e(me)(qt,"@firebase/database-compat","fire-rtdb-compat"),e(me)(qt,"@firebase/functions","fire-fn"),e(me)(qt,"@firebase/functions-compat","fire-fn-compat"),e(me)(qt,"@firebase/installations","fire-iid"),e(me)(qt,"@firebase/installations-compat","fire-iid-compat"),e(me)(qt,"@firebase/messaging","fire-fcm"),e(me)(qt,"@firebase/messaging-compat","fire-fcm-compat"),e(me)(qt,"@firebase/performance","fire-perf"),e(me)(qt,"@firebase/performance-compat","fire-perf-compat"),e(me)(qt,"@firebase/remote-config","fire-rc"),e(me)(qt,"@firebase/remote-config-compat","fire-rc-compat"),e(me)(qt,"@firebase/storage","fire-gcs"),e(me)(qt,"@firebase/storage-compat","fire-gcs-compat"),e(me)(qt,"@firebase/firestore","fire-fst"),e(me)(qt,"@firebase/firestore-compat","fire-fst-compat"),e(me)(qt,"fire-js","fire-js"),e(me)(qt,"firebase","fire-js-all"),qt),Jt=new Map,$t=new Map;function Qt(e,t){try{e.container.addComponent(t)}catch(n){Gt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Zt(e){var t=e.name;if($t.has(t))return Gt.debug("There were multiple attempts to register component ".concat(t,".")),!1;$t.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,s=Jt.values()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){Qt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return!0}function en(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var tn=(zt={},e(me)(zt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(me)(zt,"bad-app-name","Illegal App name: '{$appName}"),e(me)(zt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(me)(zt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(me)(zt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(me)(zt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(me)(zt,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),e(me)(zt,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),e(me)(zt,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),e(me)(zt,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),zt),nn=new Ye("app","Firebase",tn),rn=function(){"use strict";function t(n,r,i){var a=this;e(te)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ct("app",(function(){return a}),"PUBLIC"))}return e(ne)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}]),t}(),an="9.8.3";function sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=Jt.get(e);if(!t)throw nn.create("no-app",{appName:e});return t}function on(e,t,n){var r,i=null!==(r=Yt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){var o=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&o.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&s&&o.push("and"),s&&o.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Gt.warn(o.join(" "))}Zt(new ct("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var un="firebase-heartbeat-store",cn=null;function ln(){return cn||(cn=Ut("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(un)}}).catch((function(e){throw nn.create("storage-open",{originalErrorMessage:e.message})}))),cn}function hn(e){return fn.apply(this,arguments)}function fn(){return(fn=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,ln();case 4:return i=e.sent,e.abrupt("return",i.transaction(un).objectStore(un).get(vn(n)));case 8:throw e.prev=8,e.t0=e.catch(1),nn.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function pn(e,t){return dn.apply(this,arguments)}function dn(){return(dn=e(a)(e(s).mark((function t(n,r){var i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,ln();case 4:return a=e.sent,o=a.transaction(un,"readwrite"),u=o.objectStore(un),e.next=9,u.put(r,vn(n));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),nn.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function vn(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var gn=function(){"use strict";function t(n){var r=this;e(te)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new bn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(ne)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=mn(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=mn(),i=yn(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=Ue(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function mn(){return(new Date).toISOString().substring(0,10)}function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,s=void 0;try{for(var o,u=function(e,i){var a=i.value,s=n.find((function(e){return e.agent===a.agent}));if(s){if(s.dates.push(a.date),wn(n)>t)return s.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),wn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var l=u(c,o);if("break"===l)break}}catch(e){a=!0,s=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw s}}return{heartbeatsToSend:n,unsentEntries:r}}var kn,bn=function(){"use strict";function t(n){e(te)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(ne)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ke()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",We().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,hn(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",pn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",pn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(ye)(a.heartbeats).concat(e(ye)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function wn(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}
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
 */kn="",Zt(new ct("platform-logger",(function(e){return new Bt(e)}),"PRIVATE")),Zt(new ct("heartbeat",(function(e){return new gn(e)}),"PRIVATE")),on(Kt,Wt,kn),on(Kt,Wt,"esm2017"),on("fire-js","");
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
on("firebase","9.8.3","app");a=i("bpxeT"),te=i("8MBJY"),ne=i("a2hTj"),me=i("hKHmD"),s=i("2TvXO"),a=i("bpxeT"),me=i("hKHmD"),ye=i("8nrFW"),s=i("2TvXO");var _n,In="@firebase/installations",En="0.5.10",Tn=1e4,xn="w:".concat(En),Sn="FIS_v2",An=36e5,On=(_n={},e(me)(_n,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(me)(_n,"not-registered","Firebase Installation is not registered."),e(me)(_n,"installation-not-found","Firebase Installation not found."),e(me)(_n,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(me)(_n,"app-offline","Could not process request. Application offline."),e(me)(_n,"delete-pending-registration","Can't delete installation while there is a pending registration request."),_n),Rn=new Ye("installations","Installations",On);function Nn(e){return e instanceof Xe&&e.code.includes("request-failed")}
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
 */function Cn(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function Dn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Pn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(a)(e(s).mark((function t(n,r){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Rn.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mn(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Un(e,t){var n=t.refreshToken,r=Mn(e);return r.append("Authorization",function(e){return"".concat(Sn," ").concat(e)}(n)),r}function jn(e){return Fn.apply(this,arguments)}function Fn(){return(Fn=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l,h,f,p,d,v,g;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,u=Cn(i),c=Mn(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:o,authVersion:Sn,appId:i.appId,sdkVersion:xn},p={method:"POST",headers:c,body:JSON.stringify(f)},e.next=13,jn((function(){return fetch(u,p)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,g={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:Dn(v.authToken)},e.abrupt("return",g);case 22:return e.next=24,Pn("Create Installation",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Bn(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var qn=/^[cdef][\w-]{21}$/;function zn(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(ye)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return qn.test(n)?n:""}catch(e){return""}}function Kn(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var Wn=new Map;function Gn(e,t){var n=Kn(e);Xn(n,t),function(e,t){var n=Jn();n&&n.postMessage({key:e,fid:t});$n()}(n,t)}function Xn(e,t){var n=Wn.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){(0,s.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}}var Yn=null;function Jn(){return!Yn&&"BroadcastChannel"in self&&((Yn=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Xn(e.data.key,e.data.fid)}),Yn}function $n(){0===Wn.size&&Yn&&(Yn.close(),Yn=null)}
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
 */var Qn="firebase-installations-store",Zn=null;function er(){return Zn||(Zn=Ut("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Qn)}})),Zn}function tr(e,t){return nr.apply(this,arguments)}function nr(){return(nr=e(a)(e(s).mark((function t(n,r){var i,a,o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Kn(n),e.next=3,er();case 3:return a=e.sent,o=a.transaction(Qn,"readwrite"),u=o.objectStore(Qn),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(r,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===r.fid||Gn(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rr(e){return ir.apply(this,arguments)}function ir(){return(ir=e(a)(e(s).mark((function t(n){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Kn(n),e.next=3,er();case 3:return i=e.sent,a=i.transaction(Qn,"readwrite"),e.next=7,a.objectStore(Qn).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ar(e,t){return sr.apply(this,arguments)}function sr(){return(sr=e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Kn(n),e.next=3,er();case 3:return a=e.sent,o=a.transaction(Qn,"readwrite"),u=o.objectStore(Qn),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||Gn(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function or(e){return ur.apply(this,arguments)}function ur(){return(ur=
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
e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ar(n.appConfig,(function(e){var t=cr(e),i=lr(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function cr(e){return vr(e||{fid:zn(),registrationStatus:0})}function lr(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Rn.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return hr.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:fr(e)}:{installationEntry:t}}function hr(){return(hr=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Vn(n,r);case 3:return i=e.sent,e.abrupt("return",tr(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Nn(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,rr(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,tr(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function fr(e){return pr.apply(this,arguments)}function pr(){return(pr=e(a)(e(s).mark((function t(n){var r,i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dr(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,Bn(100);case 6:return e.next=8,dr(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,or(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dr(e){return ar(e,(function(e){if(!e)throw Rn.create("installation-not-found");return vr(e)}))}function vr(e){return 1===(t=e).registrationStatus&&t.registrationTime+Tn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function gr(e,t){return mr.apply(this,arguments)}function mr(){return(mr=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l,h,f,p,d,v;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=yr(i,r),u=Un(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:xn,appId:i.appId}},f={method:"POST",headers:u,body:JSON.stringify(h)},e.next=13,jn((function(){return fetch(o,f)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return d=e.sent,v=Dn(d),e.abrupt("return",v);case 22:return e.next=24,Pn("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function yr(e,t){var n=t.fid;return"".concat(Cn(e),"/").concat(n,"/authTokens:generate")}function kr(e){return br.apply(this,arguments)}function br(){return br=
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
e(a)(e(s).mark((function t(n){var r,i,a,o,u=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,ar(n.appConfig,(function(e){if(!xr(e))throw Rn.create("not-registered");var t=e.authToken;if(!r&&Sr(t))return e;if(1===t.requestStatus)return i=wr(n,r),e;if(!navigator.onLine)throw Rn.create("app-offline");var a=Ar(e);return i=Er(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),br.apply(this,arguments)}function wr(e,t){return _r.apply(this,arguments)}function _r(){return(_r=e(a)(e(s).mark((function t(n,r){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ir(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,Bn(100);case 6:return e.next=8,Ir(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",kr(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ir(e){return ar(e,(function(e){if(!xr(e))throw Rn.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Tn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Er(e,t){return Tr.apply(this,arguments)}function Tr(){return(Tr=e(a)(e(s).mark((function t(n,r){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,gr(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,tr(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Nn(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,rr(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,tr(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function xr(e){return void 0!==e&&2===e.registrationStatus}function Sr(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+An}(e)}function Ar(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Or(){return(Or=
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
e(a)(e(s).mark((function t(n){var r,i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,or(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):kr(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rr(){return Rr=
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
e(a)(e(s).mark((function t(n){var r,i,a,o=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,Nr(i);case 4:return e.next=6,kr(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Rr.apply(this,arguments)}function Nr(e){return Cr.apply(this,arguments)}function Cr(){return(Cr=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,or(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dr(e){return Rn.create("missing-app-config-values",{valueName:e})}
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
 */var Pr="installations",Lr=function(e){var t=en(e.getProvider("app").getImmediate(),Pr).getImmediate(),n={getId:function(){return function(e){return Or.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Rr.apply(this,arguments)}(t,e)}};return n};Zt(new ct(Pr,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Dr("App Configuration");if(!e.name)throw Dr("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;if(!e.options[s])throw Dr(s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:en(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Zt(new ct("installations-internal",Lr,"PRIVATE")),on(In,En),on(In,En,"esm2017");
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
var Mr,Ur="analytics",jr=6e4,Fr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vr="https://www.googletagmanager.com/gtag/js",Hr=new wt("@firebase/analytics");
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
function Br(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function qr(e,t){var n=document.createElement("script");n.src="".concat(Vr,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function zr(e,t,n,r,i,a){return Kr.apply(this,arguments)}function Kr(){return(Kr=e(a)(e(s).mark((function t(n,r,i,a,o,u){var c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[o],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,Br(i);case 9:if(l=e.sent,!(h=l.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[h.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),Hr.error(e.t0);case 19:n("config",o,u);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Wr(e,t,n,r,i){return Gr.apply(this,arguments)}function Gr(){return(Gr=e(a)(e(s).mark((function t(n,r,i,a,o){var u,c,l,h,f,p,d,v,g,m,y;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!o||!o.send_to){e.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),e.next=7,Br(i);case 7:l=e.sent,h=!0,f=!1,p=void 0,e.prev=9,d=c[Symbol.iterator]();case 11:if(h=(v=d.next()).done){e.next=24;break}if(g=v.value,m=l.find((function(e){return e.measurementId===g})),!(y=m&&r[m.appId])){e.next=19;break}u.push(y),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:h=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,p=e.t0;case 30:e.prev=30,e.prev=31,h||null==d.return||d.return();case 33:if(e.prev=33,!f){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),e.next=41,Promise.all(u);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),Hr.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Xr(t,n,r,i,o){var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(u=window[o]),window[o]=function(t,n,r,i){function o(){return(o=e(a)(e(s).mark((function a(o,u,c){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Wr(t,n,r,u,c);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,zr(t,n,r,i,u,c);case 9:e.next=12;break;case 11:t("set",u);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),Hr.error(e.t0);case 17:case"end":return e.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return o.apply(this,arguments)}}(u,t,n,r),{gtagCore:u,wrappedGtag:window[o]}}function Yr(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;if(s.src&&s.src.includes(Vr))return s}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var Jr=(Mr={},e(me)(Mr,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(me)(Mr,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(me)(Mr,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(me)(Mr,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(me)(Mr,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(me)(Mr,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(me)(Mr,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(me)(Mr,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(me)(Mr,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(me)(Mr,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Mr),$r=new Ye("analytics","Analytics",Jr),Qr=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(te)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(ne)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Zr=new Qr;function ei(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function ti(e){return ni.apply(this,arguments)}function ni(){return(ni=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:ei(a)},u=Fr.replace("{app-id}",i),e.next=6,fetch(u,o);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:h=e.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw $r.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function ri(e){return ii.apply(this,arguments)}function ii(){return ii=e(a)(e(s).mark((function t(n){var r,i,o,u,c,l,h,f,p=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:Zr,i=p.length>2?p[2]:void 0,o=n.options,u=o.appId,c=o.apiKey,l=o.measurementId,u){t.next=4;break}throw $r.create("no-app-id");case 4:if(c){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:u});case 7:throw $r.create("no-api-key");case 8:return h=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ci,setTimeout(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:jr),t.abrupt("return",ai({appId:u,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return t.stop()}}),t)}))),ii.apply(this,arguments)}function ai(e,t,n){return si.apply(this,arguments)}function si(){return si=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l,h,f,p,d=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,u=d.length>3&&void 0!==d[3]?d[3]:Zr,c=n.appId,l=n.measurementId,e.prev=2,e.next=5,oi(i,a);case 5:e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(2),!l){e.next=12;break}return Hr.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t0.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 12:throw e.t0;case 13:return e.prev=13,e.next=16,ti(n);case 16:return h=e.sent,u.deleteThrottleMetadata(c),e.abrupt("return",h);case 21:if(e.prev=21,e.t1=e.catch(13),ui(e.t1)){e.next=31;break}if(u.deleteThrottleMetadata(c),!l){e.next=30;break}return Hr.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t1.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 30:throw e.t1;case 31:return f=503===Number(e.t1.customData.httpStatus)?ot(o,u.intervalMillis,30):ot(o,u.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:o+1},u.setThrottleMetadata(c,p),Hr.debug("Calling attemptFetch again in ".concat(f," millis")),e.abrupt("return",ai(n,p,i,u));case 36:case"end":return e.stop()}}),t,null,[[2,7],[13,21]])}))),si.apply(this,arguments)}function oi(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r($r.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function ui(e){if(!(e instanceof Xe&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var ci=function(){"use strict";function t(){e(te)(this,t),this.listeners=[]}return e(ne)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();function li(){return hi.apply(this,arguments)}function hi(){return(hi=
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
e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ke()){e.next=5;break}return Hr.warn($r.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,We();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),Hr.warn($r.create("indexeddb-unavailable",{errorInfo:e.t0}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function fi(){return(fi=e(a)(e(s).mark((function t(n,r,i,a,o,u,c){var l,h,f,p,d,v,g;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(h=ri(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&Hr.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return Hr.error(e)})),r.push(h),f=li().then((function(e){return e?a.getId():void 0})),t.t0=e(ke),t.next=8,Promise.all([h,f]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),d=p[0],v=p[1],Yr()||qr(u,d.measurementId),o("js",new Date),(g=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",g.update=!0,null!=v&&(g.firebase_id=v),o("config",d.measurementId,g),t.abrupt("return",d.measurementId);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var pi,di,vi=function(){"use strict";function t(n){e(te)(this,t),this.app=n}return e(ne)(t,[{key:"_delete",value:function(){return delete gi[this.app.options.appId],Promise.resolve()}}]),t}(),gi={},mi=[],yi={},ki="dataLayer",bi="gtag",wi=!1;function _i(e,t,n){!function(){var e=[];if(Be()&&e.push("This is a browser extension environment."),Ge()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=$r.create("invalid-analytics-context",{errorInfo:t});Hr.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw $r.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw $r.create("no-api-key");Hr.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=gi[a])throw $r.create("already-exists",{id:a});if(!wi){r=ki,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var s=Xr(gi,mi,yi,ki,bi),o=s.wrappedGtag,u=s.gtagCore;di=o,pi=u,wi=!0}return gi[a]=function(e,t,n,r,i,a,s){return fi.apply(this,arguments)}(e,mi,yi,t,pi,ki,n),new vi(e)}function Ii(){return(Ii=
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
e(a)(e(s).mark((function t(n,r,i,a,o){var u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:u=e.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ei(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=en(e,Ur);if(n.isInitialized()){var r=n.getImmediate();if(Ze(t,n.getOptions()))return r;throw $r.create("already-initialized")}var i=n.initialize({options:t});return i}function Ti(e,t,n,r){e=ut(e),function(e,t,n,r,i){return Ii.apply(this,arguments)}(di,gi[e.app.options.appId],t,n,r).catch((function(e){return Hr.error(e)}))}var xi="@firebase/analytics",Si="0.7.10";Zt(new ct(Ur,(function(e,t){var n=t.options;return _i(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Zt(new ct("analytics-internal",(function(e){try{var t=e.getProvider(Ur).getImmediate();return{logEvent:function(e,n,r){return Ti(t,e,n,r)}}}catch(e){throw $r.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),on(xi,Si),on(xi,Si,"esm2017");Te=i("ds8z5"),a=i("bpxeT"),te=i("8MBJY"),ne=i("a2hTj"),me=i("hKHmD");var Ai={};Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.default=function(e,t,n){return Ri(e,t,n)};var Oi=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Ri(e,t,n){return(Ri="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Oi.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Ni=i("fVNic");xe=i("eYQtU"),ye=i("8nrFW"),Pe=i("2MbLg"),s=i("2TvXO");function Ci(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Di(){return e(me)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Pi=Di,Li=new Ye("auth","Firebase",Di()),Mi={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},Ui=new wt("@firebase/auth");function ji(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Ui.logLevel<=ft.ERROR&&(a=Ui).error.apply(a,["Auth (".concat(an,"): ").concat(t)].concat(e(ye)(r)))}
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
 */function Fi(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Bi.apply(void 0,[t].concat(e(ye)(r)))}function Vi(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Bi.apply(void 0,[t].concat(e(ye)(r)))}function Hi(t,n,r){var i=Object.assign(Object.assign({},Pi()),e(me)({},n,r));return new Ye("auth","Firebase",i).create(n,{appName:t.name})}function Bi(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var s,o=r[0],u=e(ye)(r.slice(1));return u[0]&&(u[0].appName=t.name),(s=t._errorFactory).create.apply(s,[o].concat(e(ye)(u)))}return(a=Li).create.apply(a,[t].concat(e(ye)(r)))}function qi(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Bi.apply(void 0,[n].concat(e(ye)(i)))}function zi(e){var t="INTERNAL ASSERTION FAILED: "+e;throw ji(t),new Error(t)}function Ki(e,t){e||zi(t)}
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
 */var Wi=new Map;function Gi(e){Ki(e instanceof Function,"Expected a class definition");var t=Wi.get(e);return t?(Ki(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wi.set(e,t),t)}
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
 */function Xi(e,t){var n=en(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ze(n.getOptions(),null!=t?t:{}))return r;Fi(r,"already-initialized")}return n.initialize({options:t})}
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
function Yi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ji(){return"http:"===$i()||"https:"===$i()}function $i(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var Qi=function(){"use strict";function t(n,r){e(te)(this,t),this.shortDelay=n,this.longDelay=r,Ki(r>n,"Short delay should be less than long delay!"),this.isMobile=He()||qe()}return e(ne)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ji()||Be()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function Zi(e,t){Ki(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var ea,ta=function(){"use strict";function t(){e(te)(this,t)}return e(ne)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),na=(ea={},e(me)(ea,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(me)(ea,"MISSING_CUSTOM_TOKEN","internal-error"),e(me)(ea,"INVALID_IDENTIFIER","invalid-email"),e(me)(ea,"MISSING_CONTINUE_URI","internal-error"),e(me)(ea,"INVALID_PASSWORD","wrong-password"),e(me)(ea,"MISSING_PASSWORD","internal-error"),e(me)(ea,"EMAIL_EXISTS","email-already-in-use"),e(me)(ea,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(me)(ea,"INVALID_IDP_RESPONSE","invalid-credential"),e(me)(ea,"INVALID_PENDING_TOKEN","invalid-credential"),e(me)(ea,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(me)(ea,"MISSING_REQ_TYPE","internal-error"),e(me)(ea,"EMAIL_NOT_FOUND","user-not-found"),e(me)(ea,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(me)(ea,"EXPIRED_OOB_CODE","expired-action-code"),e(me)(ea,"INVALID_OOB_CODE","invalid-action-code"),e(me)(ea,"MISSING_OOB_CODE","internal-error"),e(me)(ea,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(me)(ea,"INVALID_ID_TOKEN","invalid-user-token"),e(me)(ea,"TOKEN_EXPIRED","user-token-expired"),e(me)(ea,"USER_NOT_FOUND","user-token-expired"),e(me)(ea,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(me)(ea,"INVALID_CODE","invalid-verification-code"),e(me)(ea,"INVALID_SESSION_INFO","invalid-verification-id"),e(me)(ea,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(me)(ea,"MISSING_SESSION_INFO","missing-verification-id"),e(me)(ea,"SESSION_EXPIRED","code-expired"),e(me)(ea,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(me)(ea,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(me)(ea,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(me)(ea,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(me)(ea,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(me)(ea,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(me)(ea,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(me)(ea,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(me)(ea,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(me)(ea,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(me)(ea,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),ea),ra=new Qi(3e4,6e4);function ia(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function aa(e,t,n,r){return sa.apply(this,arguments)}function sa(){return sa=e(a)(e(s).mark((function t(n,r,i,o){var u,c=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",oa(n,u,e(a)(e(s).mark((function t(){var a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},o&&("GET"===r?u=o:a={body:JSON.stringify(o)}),c=tt(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",ta.fetch()(ha(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),sa.apply(this,arguments)}function oa(e,t,n){return ua.apply(this,arguments)}function ua(){return(ua=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l,h,f,p,d;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},na),r),t.prev=2,o=new fa(n),t.next=6,Promise.race([i(),o.promise]);case 6:return u=t.sent,o.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw pa(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(ke)(l.split(" : "),2),f=h[0],p=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw pa(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw pa(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw pa(n,"user-disabled",c);case 29:if(d=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw Hi(n,d,p);case 34:Fi(n,d);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Xe)){t.next=41;break}throw t.t0;case 41:Fi(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function ca(e,t,n,r){return la.apply(this,arguments)}function la(){return la=e(a)(e(s).mark((function t(n,r,i,a){var o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,aa(n,r,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&Fi(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),la.apply(this,arguments)}function ha(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Zi(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var fa=function(){"use strict";function t(n){var r=this;e(te)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Vi(n.auth,"network-request-failed"))}),ra.get())}))}return e(ne)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function pa(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Vi(e,t,r);return i.customData._tokenResponse=n,i}function da(e,t){return va.apply(this,arguments)}function va(){return(va=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",aa(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ga(e,t){return ma.apply(this,arguments)}function ma(){return(ma=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",aa(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function ya(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ka(){return ka=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=ut(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,qi((o=wa(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ya(ba(o.auth_time)),issuedAtTime:ya(ba(o.iat)),expirationTime:ya(ba(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),ka.apply(this,arguments)}function ba(e){return 1e3*Number(e)}function wa(t){var n=e(ke)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return ji("JWT malformed, contained fewer than 3 sections"),null;try{var s=je(i);return s?JSON.parse(s):(ji("Failed to decode base64 JWT payload"),null)}catch(e){return ji("Caught error parsing JWT payload as JSON",e),null}}function _a(e,t){return Ia.apply(this,arguments)}function Ia(){return Ia=
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
e(a)(e(s).mark((function t(n,r){var i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Xe&&Ea(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Ia.apply(this,arguments)}function Ea(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Ta=function(){"use strict";function t(n){e(te)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(ne)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),xa=function(){"use strict";function t(n,r){e(te)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(ne)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Sa(e){return Aa.apply(this,arguments)}function Aa(){return(Aa=
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
e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l,h,f,p,d;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,_a(n,ga(i,{idToken:a}));case 7:qi(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Na(u.providerUserInfo):[],l=Ra(n.providerData,c),h=n.isAnonymous,f=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),p=!!h&&f,d={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new xa(u.createdAt,u.lastLoginAt),isAnonymous:p},Object.assign(n,d);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oa(){return(Oa=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ut(n),e.next=3,Sa(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ra(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(ye)(r).concat(e(ye)(n))}function Na(e){return e.map((function(e){var t=e.providerId,n=Ci(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Ca(e,t){return Da.apply(this,arguments)}function Da(){return(Da=
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
e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oa(n,{},e(a)(e(s).mark((function t(){var i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=tt({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,u=a.apiKey,c=ha(n,o,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",ta.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Pa=function(){"use strict";function t(){e(te)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(ne)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){qi(e.idToken,"internal-error"),qi(void 0!==e.idToken,"internal-error"),qi(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,qi(n=wa(t),"internal-error"),qi(void 0!==n.exp,"internal-error"),qi(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(qi(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var a,o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ca(t,n);case 2:a=e.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return zi("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,s=new t;return r&&(qi("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),i&&(qi("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),a&&(qi("number"==typeof a,"internal-error",{appName:e}),s.expirationTime=a),s}}]),t}();
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
 */function La(e,t){qi("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ma=function(){"use strict";function t(n){e(te)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,s=Ci(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ta(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(ye)(s.providerData):[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(ne)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_a(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(qi(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ka.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Oa.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(qi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){qi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Sa(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,_a(t,da(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,s,o,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,d=null!==(s=n.photoURL)&&void 0!==s?s:void 0,v=null!==(o=n.tenantId)&&void 0!==o?o:void 0,g=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,_=n.providerData,I=n.stsTokenManager;qi(k&&I,e,"internal-error");var E=Pa.fromJSON(this.name,I);qi("string"==typeof k,e,"internal-error"),La(h,e.name),La(f,e.name),qi("boolean"==typeof b,e,"internal-error"),qi("boolean"==typeof w,e,"internal-error"),La(p,e.name),La(d,e.name),La(v,e.name),La(g,e.name),La(m,e.name),La(y,e.name);var T=new t({uid:k,auth:e,email:f,emailVerified:b,displayName:h,isAnonymous:w,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:E,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),g&&(T._redirectEventId=g),T}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(s).mark((function a(){var o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Pa).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Sa(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Ua=function(){"use strict";function t(){e(te)(this,t),this.type="NONE",this.storage={}}return e(ne)(t,[{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Ua.type="NONE";var ja=Ua;
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
 */function Fa(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Va=function(){"use strict";function t(n,r,i){e(te)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,s=a.config,o=a.name;this.fullUserKey=Fa(this.userKey,s.apiKey,o),this.fullPersistenceKey=Fa("persistence",s.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(ne)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ma._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(s).mark((function o(){var u,c,l,h,f,p,d,v,g,m,y,k,b;return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(Gi(ja),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=o.sent.filter((function(e){return e})),c=u[0]||Gi(ja),l=Fa(i,n.config.apiKey,n.name),h=null,f=!0,p=!1,d=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(f=(g=v.next()).done){o.next=29;break}return m=g.value,o.prev=13,o.next=16,m._get(l);case 16:if(!(y=o.sent)){o.next=22;break}return k=Ma._fromJSON(n,y),m!==c&&(h=k),c=m,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),p=!0,d=o.t1;case 35:o.prev=35,o.prev=36,f||null==v.return||v.return();case 38:if(o.prev=38,!p){o.next=41;break}throw d;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){o.next=46;break}return o.abrupt("return",new t(c,n,i));case 46:if(c=b[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Ha(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ka(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ba(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ga(t))return"Blackberry";if(Xa(t))return"Webos";if(qa(t))return"Safari";if((t.includes("chrome/")||za(t))&&!t.includes("edge/"))return"Chrome";if(Wa(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ba(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/firefox\//i.test(e)}function qa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function za(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/crios\//i.test(e)}function Ka(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/iemobile/i.test(e)}function Wa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/android/i.test(e)}function Ga(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/blackberry/i.test(e)}function Xa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/webos/i.test(e)}function Ya(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return/iphone|ipad|ipod/i.test(e)}function Ja(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return Ya(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function $a(){return ze()&&10===document.documentMode}function Qa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve();return Ya(e)||Wa(e)||Xa(e)||Ga(e)||/windows phone/i.test(e)||Ka(e)}
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
function Za(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ha(Ve());break;case"Worker":t="".concat(Ha(Ve()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(an,"/").concat(r)}
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
 */var es=function(){"use strict";function t(n){e(te)(this,t),this.auth=n,this.queue=[]}return e(ne)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h,f,p,d,v,g,m,y;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,u=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(o=(h=l.next()).done){e.next=16;break}return f=h.value,e.next=12,f(t);case 12:f.onAbort&&a.push(f.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),u=!0,c=e.t0;case 22:e.prev=22,e.prev=23,o||null==l.return||l.return();case 25:if(e.prev=25,!u){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),p=!0,d=!1,v=void 0,e.prev=36,g=a[Symbol.iterator]();!(p=(m=g.next()).done);p=!0){y=m.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),d=!0,v=e.t2;case 44:e.prev=44,e.prev=45,p||null==g.return||g.return();case 47:if(e.prev=47,!d){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),ts=function(){"use strict";function t(n,r,i){e(te)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rs(this),this.idTokenSubscription=new rs(this),this.beforeStateQueue=new es(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Li,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(ne)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Gi(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Va.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(o=h.user,u=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return qi(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Sa(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?ut(t):null)&&qi(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&qi(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Gi(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ye("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return qi(i=t&&Gi(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Va.create(n,[Gi(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return qi(s,this,"internal-error"),s.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&(n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh()),n.currentUser=t,!t){e.next=7;break}return e.next=5,n.assertedPersistence.setCurrentUser(t);case 5:e.next=9;break;case 7:return e.next=9,n.assertedPersistence.removeCurrentUser();case 9:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return qi(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Za(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(me)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function ns(e){return ut(e)}var rs=function(){"use strict";function t(n){var r,i,a=this;e(te)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new it((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(ne)(t,[{key:"next",get:function(){return qi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
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
var is=function(){"use strict";function t(n,r){e(te)(this,t),this.providerId=n,this.signInMethod=r}return e(ne)(t,[{key:"toJSON",value:function(){return zi("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return zi("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return zi("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return zi("not implemented")}}]),t}();function as(e,t){return ss.apply(this,arguments)}function ss(){return(ss=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",aa(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function os(e,t){return us.apply(this,arguments)}function us(){return(us=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithPassword",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function cs(e,t){return ls.apply(this,arguments)}function ls(){return(ls=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithEmailLink",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function hs(e,t){return fs.apply(this,arguments)}function fs(){return(fs=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithEmailLink",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ps=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i,a){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(te)(this,r),(s=n.call(this,"password",a))._email=t,s._password=i,s._tenantId=o,s}return e(ne)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",os(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",cs(t,{email:n._email,oobCode:n._password}));case 5:Fi(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",as(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",hs(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Fi(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(is);function ds(e,t){return vs.apply(this,arguments)}function vs(){return(vs=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithIdp",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var gs=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){var t;return e(te)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(ne)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ds(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,ds(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ds(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tt(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fi("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Ci(t,["providerId","signInMethod"]);if(!n||!i)return null;var s=new r(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}]),r}(is);function ms(e,t){return ys.apply(this,arguments)}function ys(){return(ys=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",aa(n,"POST","/v1/accounts:sendVerificationCode",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ks(){return(ks=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithPhoneNumber",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bs(){return(bs=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ca(n,"POST","/v1/accounts:signInWithPhoneNumber",ia(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw pa(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ws=e(me)({},"USER_NOT_FOUND","user-not-found");function _s(){return(_s=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",ca(n,"POST","/v1/accounts:signInWithPhoneNumber",ia(n,i),ws));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Is=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t){var i;return e(te)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(ne)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ks.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return bs.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return _s.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(is);
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
 */var Es=function(){"use strict";function t(n){var r,i,a,s,o,u;e(te)(this,t);var c=nt(rt(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);qi(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(ne)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=nt(rt(e)).link,n=t?nt(rt(t)).deep_link_id:null,r=nt(rt(e)).deep_link_id;return(r?nt(rt(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Ts=function(){"use strict";function t(){e(te)(this,t),this.providerId=t.PROVIDER_ID}return e(ne)(t,null,[{key:"credential",value:function(e,t){return ps._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Es.parseLink(t);return qi(n,"argument-error"),ps._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Ts.PROVIDER_ID="password",Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var xs=function(){"use strict";function t(n){e(te)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(ne)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ss=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){var t;return e(te)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(ne)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(ye)(this.scopes)}}]),r}(xs),As=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){return e(te)(this,r),n.call(this,"facebook.com")}return e(ne)(r,null,[{key:"credential",value:function(e){return gs._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ss);
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
 */As.FACEBOOK_SIGN_IN_METHOD="facebook.com",As.PROVIDER_ID="facebook.com";
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
var Os=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){var t;return e(te)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(ne)(r,null,[{key:"credential",value:function(e,t){return gs._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ss);Os.GOOGLE_SIGN_IN_METHOD="google.com",Os.PROVIDER_ID="google.com";
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
var Rs=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){return e(te)(this,r),n.call(this,"github.com")}return e(ne)(r,null,[{key:"credential",value:function(e){return gs._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ss);Rs.GITHUB_SIGN_IN_METHOD="github.com",Rs.PROVIDER_ID="github.com";
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
var Ns=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){return e(te)(this,r),n.call(this,"twitter.com")}return e(ne)(r,null,[{key:"credential",value:function(e,t){return gs._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ss);function Cs(e,t){return Ds.apply(this,arguments)}function Ds(){return(Ds=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ca(n,"POST","/v1/accounts:signUp",ia(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Ns.TWITTER_SIGN_IN_METHOD="twitter.com",Ns.PROVIDER_ID="twitter.com";var Ps=function(){"use strict";function t(n){e(te)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(ne)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(s).mark((function a(){var u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ma._fromIdTokenResponse(n,i,o);case 2:return u=e.sent,c=Ls(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Ls(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Ls(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Ms=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i,a,s){var o,u;return e(te)(this,r),(o=n.call(this,i.code,i.message)).operationType=a,o.user=s,Object.setPrototypeOf(e(Te)(o),r.prototype),o.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},o}return e(ne)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(Xe);function Us(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Ms._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function js(e,t){return Fs.apply(this,arguments)}function Fs(){return Fs=e(a)(e(s).mark((function t(n,r){var i,a,o=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=_a,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Ps._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Fs.apply(this,arguments)}function Vs(e,t){return Hs.apply(this,arguments)}function Hs(){return Hs=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l,h=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,_a(n,Us(a,o,r,n),i);case 6:return qi((u=e.sent).idToken,a,"internal-error"),qi(c=wa(u.idToken),a,"internal-error"),l=c.sub,qi(n.uid===l,a,"user-mismatch"),e.abrupt("return",Ps._forOperation(n,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Fi(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Hs.apply(this,arguments)}function Bs(e,t){return qs.apply(this,arguments)}function qs(){return qs=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Us(n,a,r);case 4:return o=e.sent,e.next=7,Ps._fromIdTokenResponse(n,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),qs.apply(this,arguments)}function zs(e,t){return Ks.apply(this,arguments)}function Ks(){return(Ks=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Bs(ns(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ws(e,t,n){return Gs.apply(this,arguments)}function Gs(){return(Gs=e(a)(e(s).mark((function t(n,r,i){var a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ns(n),e.next=3,Cs(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,Ps._fromIdTokenResponse(a,"signIn",o);case 6:return u=e.sent,e.next=9,a._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xs(e){return ut(e).signOut()}
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
function Ys(e,t){return aa(e,"POST","/v2/accounts/mfaEnrollment:start",ia(e,t))}new WeakMap;var Js="__sak",$s=function(){"use strict";function t(n,r){e(te)(this,t),this.storageRetriever=n,this.type=r}return e(ne)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Qs=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){var t,i;return e(te)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(qa(i=Ve())||Ya(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Qa(),t._shouldAllowMigration=!0,t}return e(ne)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value,o=this.storage.getItem(s),u=this.localCache[s];o!==u&&e(s,u,o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},s=this.storage.getItem(r);$a()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var o=this;this.forAllChangedKeys((function(e,t,n){o.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var s,o=Array.from(n)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){(0,s.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ai)(e(Ni)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ai)(e(Ni)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ai)(e(Ni)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}($s);Qs.type="LOCAL";var Zs=Qs,eo=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){return e(te)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(ne)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}($s);
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
 */eo.type="SESSION";var to=eo;
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
 */function no(t){return Promise.all(t.map((n=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var ro=function(){"use strict";function t(n){e(te)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(ne)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,u,c,l,h,f,p;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,u=o.eventId,c=o.eventType,l=o.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,no(f);case 9:p=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function io(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */ro.receivers=[];var ao=function(){"use strict";function t(n){e(te)(this,t),this.target=n,this.handlers=new Set}return e(ne)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(s).mark((function a(){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var s=io("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===s)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:s,data:n},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function so(){return window}
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
function oo(){return void 0!==so().WorkerGlobalScope&&"function"==typeof so().importScripts}function uo(){return co.apply(this,arguments)}function co(){return(co=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var lo="firebaseLocalStorageDb",ho="firebaseLocalStorage",fo="fbase_key",po=function(){"use strict";function t(n){e(te)(this,t),this.request=n}return e(ne)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function vo(e,t){return e.transaction([ho],t?"readwrite":"readonly").objectStore(ho)}function go(){var e=indexedDB.deleteDatabase(lo);return new po(e).toPromise()}function mo(){var t=indexedDB.open(lo,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(ho,{keyPath:fo})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(ho)){e.next=12;break}return i.close(),e.next=5,go();case 5:return e.t0=n,e.next=8,mo();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function yo(e,t,n){return ko.apply(this,arguments)}function ko(){return(ko=e(a)(e(s).mark((function t(n,r,i){var a,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=vo(n,!0).put((a={},e(me)(a,fo,r),e(me)(a,"value",i),a)),t.abrupt("return",new po(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function bo(e,t){return wo.apply(this,arguments)}function wo(){return(wo=e(a)(e(s).mark((function t(n,r){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=vo(n,!1).get(r),e.next=3,new po(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _o(e,t){var n=vo(e,!0).delete(t);return new po(n).toPromise()}var Io=function(){"use strict";function t(){e(te)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(ne)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,mo();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oo()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=ro._getInstance(oo()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(s).mark((function n(r,i){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,uo();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ao(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,mo();case 5:return n=e.sent,e.next=8,yo(n,Js,"1");case 8:return e.next=10,_o(n,Js);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return yo(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return bo(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return _o(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a,o,u,c,l,h,f,p,d,v,g,m,y,k,b;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=vo(e,!1).getAll();return new po(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(o=(h=l.next()).done);o=!0)f=h.value,p=f.fbase_key,d=f.value,a.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(d)&&(t.notifyListeners(p,d),i.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,g=!1,m=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),g=!0,m=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!g){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var s,o=Array.from(n)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){(0,s.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Io.type="LOCAL";var Eo=Io;
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
 */function To(e,t){return aa(e,"POST","/v2/accounts/mfaSignIn:start",ia(e,t))}function xo(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Vi("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function So(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
So("rcb"),new Qi(3e4,6e4);var Ao="recaptcha";
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
 */function Oo(e,t,n){return Ro.apply(this,arguments)}function Ro(){return(Ro=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l,h,f,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,qi("string"==typeof o,n,"argument-error"),qi(i.type===Ao,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return qi("enroll"===c.type,n,"internal-error"),e.next=15,Ys(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return qi("signin"===c.type,n,"internal-error"),qi(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,To(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ms(n,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var No=function(){"use strict";function t(n){e(te)(this,t),this.providerId=t.PROVIDER_ID,this.auth=ns(n)}return e(ne)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Oo(this.auth,e,ut(t))}}],[{key:"credential",value:function(e,t){return Is._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Is._fromTokenResponse(n,r):null}}]),t}();
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
function Co(e,t){return t?Gi(t):(qi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */No.PROVIDER_ID="phone",No.PHONE_SIGN_IN_METHOD="phone";var Do=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t){var i;return e(te)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(ne)(r,[{key:"_getIdTokenResponse",value:function(e){return ds(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ds(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ds(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(is);function Po(e){return Bs(e.auth,new Do(e),e.bypassAuthState)}function Lo(e){var t=e.auth,n=e.user;return qi(n,t,"internal-error"),Vs(n,new Do(e),e.bypassAuthState)}function Mo(e){return Uo.apply(this,arguments)}function Uo(){return(Uo=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,qi(i=n.user,r,"internal-error"),e.abrupt("return",js(i,new Do(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var jo=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(te)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(ne)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(s).mark((function t(r,i){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Po;case"linkViaPopup":case"linkViaRedirect":return Mo;case"reauthViaPopup":case"reauthViaRedirect":return Lo;default:Fi(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Fo=new Qi(2e3,1e4);
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
 */var Vo=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i,a,s,o){var u;return e(te)(this,r),(u=n.call(this,t,i,s,o)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(Te)(u),u}return e(ne)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return qi(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ki(1===t.filter.length,"Popup operations only handle one event"),r=io(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Vi(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Vi(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Vi(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Fo.get())};t()}}]),r}(jo);Vo.currentPopupAction=null;
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
var Ho=new Map,Bo=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(te)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(ne)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Ho.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,qo(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Ai)(e(Ni)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Ho.set(n.auth._key(),a);case 21:return n.bypassAuthState||Ho.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(Ai)(e(Ni)(r.prototype),"onAuthEvent",n)};return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(jo);function qo(e,t){return zo.apply(this,arguments)}function zo(){return(zo=e(a)(e(s).mark((function t(n,r){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Go(r),a=Wo(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ko(e,t){Ho.set(e._key(),t)}function Wo(e){return Gi(e._redirectPersistence)}function Go(e){return Fa("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Xo(e,t){return Yo.apply(this,arguments)}function Yo(){return Yo=e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=ns(n),o=Co(a,r),u=new Bo(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Yo.apply(this,arguments)}
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
var Jo=function(){"use strict";function t(n){e(te)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(ne)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qo(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Qo(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Vi(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function $o(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Qo(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Zo(e){return eu.apply(this,arguments)}function eu(){return eu=
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
e(a)(e(s).mark((function t(n){var r,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",aa(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),eu.apply(this,arguments)}
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
 */var tu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nu=/^https?/;function ru(){return(ru=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Zo(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!iu(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Fi(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function iu(e){var t=Yi(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!nu.test(r))return!1;if(tu.test(e))return i===e;var s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */var au=new Qi(3e4,6e4);function su(){var t=so().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,s=Object.keys(t.H)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;if(t.H[o].r=t.H[o].r||[],t.H[o].L=t.H[o].L||[],t.H[o].r=e(ye)(t.H[o].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}var ou=null;function uu(e){return ou=ou||function(e){return new Promise((function(t,n){var r,i,a;function s(){su(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){su(),n(Vi(e,"network-request-failed"))},timeout:au.get()})}if(null===(i=null===(r=so().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=so().gapi)||void 0===a?void 0:a.load)){var o=So("iframefcb");return so()[o]=function(){gapi.load?s():n(Vi(e,"network-request-failed"))},xo("https://apis.google.com/js/api.js?onload=".concat(o)).catch((function(e){return n(e)}))}s()}})).catch((function(e){throw ou=null,e}))}(e),ou}
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
 */var cu=new Qi(5e3,15e3),lu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fu(e){var t=e.config;qi(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Zi(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:an},i=hu.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(tt(r).slice(1))}function pu(e){return du.apply(this,arguments)}function du(){return du=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,uu(n);case 2:return r=t.sent,qi(i=so().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:fu(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lu,dontclear:!0},(function(t){return new Promise((r=e(a)(e(s).mark((function r(i,a){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){so().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Vi(n,"network-request-failed"),u=so().setTimeout((function(){a(o)}),cu.get()),t.ping(c).then(c,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),du.apply(this,arguments)}
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
 */var vu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gu="_blank",mu="http://localhost",yu=function(){"use strict";function t(n){e(te)(this,t),this.window=n,this.associatedEvent=null}return e(ne)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function ku(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,s=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},vu),{width:i.toString(),height:a.toString(),top:s,left:o}),l=Ve().toLowerCase();r&&(u=za(l)?gu:r),Ba(l)&&(n=n||mu,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(ke)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Ja(l)&&"_self"!==u)return bu(n||"",u),new yu(null);var f=window.open(n||"",u,h);qi(f,t,"popup-blocked");try{f.focus()}catch(e){}return new yu(f)}function bu(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var wu="__/auth/handler",_u="emulator/auth/handler";function Iu(t,n,r,i,a,s){qi(t.config.authDomain,t,"auth-domain-config-required"),qi(t.config.apiKey,t,"invalid-api-key");var o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:an,eventId:a};if(n instanceof xs){n.setDefaultLanguage(t.languageCode),o.providerId=n.providerId||"",Qe(n.getCustomParameters())||(o.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(s||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var p=e(ke)(h.value,2),d=p[0],v=p[1];o[d]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof Ss){var g=n.getScopes().filter((function(e){return""!==e}));g.length>0&&(o.scopes=g.join(","))}t.tenantId&&(o.tid=t.tenantId);var m,y,k=o,b=!0,w=!1,_=void 0;try{for(var I,E=Object.keys(k)[Symbol.iterator]();!(b=(I=E.next()).done);b=!0){var T=I.value;void 0===k[T]&&delete k[T]}}catch(e){w=!0,_=e}finally{try{b||null==E.return||E.return()}finally{if(w)throw _}}return"".concat((m=t,y=m.config,y.emulator?Zi(y,_u):"https://".concat(y.authDomain,"/").concat(wu)),"?").concat(tt(k).slice(1))}
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
var Eu="webStorageSupport",Tu=function(){"use strict";function t(){e(te)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=to,this._completeRedirectFn=Xo,this._overrideRedirectResult=Ko}return e(ne)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){var u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ki(null===(u=o.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Iu(t,n,r,Yi(),i),e.abrupt("return",ku(t,c,io()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=Iu(t,n,r,Yi(),i),so().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Ki(a,"If manager is not set, promise should be"),a)}var s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch((function(){delete t.eventManagers[n]})),s}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pu(t);case 2:return i=e.sent,a=new Jo(t),i.register("authEvent",(function(e){return qi(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Eu,{type:Eu},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Fi(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ru.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Qa()||qa()||Ya()}}]),t}(),xu=Tu,Su=function(){"use strict";function t(n){e(te)(this,t),this.factorId=n}return e(ne)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return zi("unexpected MultiFactorSessionType")}}}]),t}(),Au=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t){var i;return e(te)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(ne)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return aa(e,"POST","/v2/accounts/mfaEnrollment:finalize",ia(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return aa(e,"POST","/v2/accounts/mfaSignIn:finalize",ia(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Su);(function(){"use strict";function t(){e(te)(this,t)}return e(ne)(t,null,[{key:"assertion",value:function(e){return Au._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Ou,Ru="@firebase/auth",Nu="0.20.3",Cu=function(){"use strict";function t(n){e(te)(this,t),this.auth=n,this.internalListeners=new Map}return e(ne)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){qi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Ou="Browser",Zt(new ct("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,s=a.apiKey,o=a.authDomain;return function(e,t){qi(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),qi(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});var r={apiKey:s,authDomain:o,clientPlatform:Ou,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Za(Ou)},i=new ts(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Zt(new ct("auth-internal",(function(e){var t=ns(e.getProvider("auth").getImmediate());return new Cu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),on(Ru,Nu,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ou)),on(Ru,Nu,"esm2017");a=i("bpxeT"),te=i("8MBJY"),i("ge8co"),ne=i("a2hTj"),Ni=i("fVNic"),xe=i("eYQtU");var Du,Pu=i("jmhxu"),Lu=(ye=i("8nrFW"),R=i("l5bVx"),Pe=i("2MbLg"),s=i("2TvXO"),te=i("8MBJY"),ne=i("a2hTj"),Ni=i("fVNic"),xe=i("eYQtU"),R=i("l5bVx"),Pe=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}),Mu={},Uu=Uu||{},ju=Lu||self;function Fu(){}function Vu(t){var n=void 0===t?"undefined":e(R)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function Hu(t){var n=void 0===t?"undefined":e(R)(t);return"object"==n&&null!=t||"function"==n}var Bu="closure_uid_"+(1e9*Math.random()>>>0),qu=0;function zu(e,t,n){return e.call.apply(e.bind,arguments)}function Ku(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Wu(e,t,n){return(Wu=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?zu:Ku).apply(null,arguments)}function Gu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Xu(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function Yu(){this.s=this.s,this.o=this.o}var Ju={};Yu.prototype.s=!1,Yu.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Bu)&&e[Bu]||(e[Bu]=++qu)}(this);delete Ju[e]}},Yu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var $u=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Qu=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,a=0;a<r;a++)a in i&&t.call(n,i[a],a,e)};function Zu(e){return Array.prototype.concat.apply([],arguments)}function ec(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function tc(e){return/^[\s\xa0]*$/.test(e)}var nc,rc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ic(e,t){return-1!=e.indexOf(t)}function ac(e,t){return e<t?-1:e>t?1:0}e:{var sc=ju.navigator;if(sc){var oc=sc.userAgent;if(oc){nc=oc;break e}}nc=""}function uc(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function cc(e){var t={};for(var n in e)t[n]=e[n];return t}var lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hc(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<lc.length;a++)n=lc[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function fc(e){return fc[" "](e),e}fc[" "]=Fu;var pc,dc,vc=ic(nc,"Opera"),gc=ic(nc,"Trident")||ic(nc,"MSIE"),mc=ic(nc,"Edge"),yc=mc||gc,kc=ic(nc,"Gecko")&&!(ic(nc.toLowerCase(),"webkit")&&!ic(nc,"Edge"))&&!(ic(nc,"Trident")||ic(nc,"MSIE"))&&!ic(nc,"Edge"),bc=ic(nc.toLowerCase(),"webkit")&&!ic(nc,"Edge");function wc(){var e=ju.document;return e?e.documentMode:void 0}e:{var _c="",Ic=(dc=nc,kc?/rv:([^\);]+)(\)|;)/.exec(dc):mc?/Edge\/([\d\.]+)/.exec(dc):gc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(dc):bc?/WebKit\/(\S+)/.exec(dc):vc?/(?:Version)[ \/]?(\S+)/.exec(dc):void 0);if(Ic&&(_c=Ic?Ic[1]:""),gc){var Ec=wc();if(null!=Ec&&Ec>parseFloat(_c)){pc=String(Ec);break e}}pc=_c}var Tc,xc={};function Sc(){return function(e){var t=xc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=rc(String(pc)).split("."),n=rc("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",s=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break;e=ac(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||ac(0==a[2].length,0==s[2].length)||ac(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e}))}if(ju.document&&gc){var Ac=wc();Tc=Ac||(parseInt(pc,10)||void 0)}else Tc=void 0;var Oc=Tc,Rc=function(){if(!ju.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ju.addEventListener("test",Fu,t),ju.removeEventListener("test",Fu,t)}catch(e){}return e}();function Nc(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Cc(e,t){if(Nc.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(kc){e:{try{fc(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Dc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Cc.Z.h.call(this)}}Nc.prototype.h=function(){this.defaultPrevented=!0},Xu(Cc,Nc);var Dc={2:"touch",3:"pen",4:"mouse"};Cc.prototype.h=function(){Cc.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Pc="closure_listenable_"+(1e6*Math.random()|0),Lc=0;function Mc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Lc,this.ca=this.fa=!1}function Uc(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function jc(e){this.src=e,this.g={},this.h=0}function Fc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=$u(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(Uc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Vc(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ca&&a.listener==t&&a.capture==!!n&&a.ia==r)return i}return-1}jc.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var s=Vc(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):((t=new Mc(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var Hc="closure_lm_"+(1e6*Math.random()|0),Bc={};function qc(e,t,n,r,i){if(r&&r.once)return Kc(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)qc(e,t[a],n,r,i);return null}return n=Qc(n),e&&e[Pc]?e.N(t,n,Hu(r)?!!r.capture:!!r,i):zc(e,t,n,!1,r,i)}function zc(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var s=Hu(i)?!!i.capture:!!i,o=Jc(e);if(o||(e[Hc]=o=new jc(e)),(n=o.add(t,n,r,s,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Yc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Rc||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Xc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Kc(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)Kc(e,t[a],n,r,i);return null}return n=Qc(n),e&&e[Pc]?e.O(t,n,Hu(r)?!!r.capture:!!r,i):zc(e,t,n,!0,r,i)}function Wc(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)Wc(e,t[a],n,r,i);else r=Hu(r)?!!r.capture:!!r,n=Qc(n),e&&e[Pc]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Vc(a=e.g[t],n,r,i))&&(Uc(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=Jc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Vc(t,n,r,i)),(n=-1<e?t[e]:null)&&Gc(n))}function Gc(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Pc])Fc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Xc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Jc(t))?(Fc(n,e),0==n.h&&(n.src=null,t[Hc]=null)):Uc(e)}}}function Xc(e){return e in Bc?Bc[e]:Bc[e]="on"+e}function Yc(e,t){if(e.ca)e=!0;else{t=new Cc(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Gc(e),e=n.call(r,t)}return e}function Jc(e){return(e=e[Hc])instanceof jc?e:null}var $c="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qc(e){return"function"==typeof e?e:(e[$c]||(e[$c]=function(t){return e.handleEvent(t)}),e[$c])}function Zc(){Yu.call(this),this.i=new jc(this),this.P=this,this.I=null}function el(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Nc(t,e);else if(t instanceof Nc)t.target=t.target||e;else{var i=t;hc(t=new Nc(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var s=t.g=n[a];i=tl(s,r,!0,t)&&i}if(i=tl(s=t.g=e,r,!0,t)&&i,i=tl(s,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=tl(s=t.g=n[a],r,!1,t)&&i}function tl(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var s=t[a];if(s&&!s.ca&&s.capture==n){var o=s.listener,u=s.ia||s.src;s.fa&&Fc(e.i,s),i=!1!==o.call(u,r)&&i}}return i&&!r.defaultPrevented}Xu(Zc,Yu),Zc.prototype[Pc]=!0,Zc.prototype.removeEventListener=function(e,t,n,r){Wc(this,e,t,n,r)},Zc.prototype.M=function(){if(Zc.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uc(n[r]);delete t.g[e],t.h--}}this.I=null},Zc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Zc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var nl=ju.JSON.stringify;function rl(){var e=hl,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var il,al=function(){"use strict";function t(){e(te)(this,t),this.h=this.g=null}return e(ne)(t,[{key:"add",value:function(e,t){var n=sl.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),sl=new(function(){"use strict";function t(n,r){e(te)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(ne)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new ol}),(function(e){return e.reset()})),ol=function(){"use strict";function t(){e(te)(this,t),this.next=this.g=this.h=null}return e(ne)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function ul(e){ju.setTimeout((function(){throw e}),0)}function cl(e,t){il||function(){var e=ju.Promise.resolve(void 0);il=function(){e.then(fl)}}(),ll||(il(),ll=!0),hl.add(e,t)}var ll=!1,hl=new al;function fl(){for(var e;e=rl();){try{e.h.call(e.g)}catch(e){ul(e)}var t=sl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ll=!1}function pl(e,t){Zc.call(this),this.h=e||1,this.g=t||ju,this.j=Wu(this.kb,this),this.l=Date.now()}function dl(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function vl(e,t,n){if("function"==typeof e)n&&(e=Wu(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Wu(e.handleEvent,e)}return 2147483647<Number(t)?-1:ju.setTimeout(e,t||0)}function gl(e){e.g=vl((function(){e.g=null,e.i&&(e.i=!1,gl(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Xu(pl,Zc),(Du=pl.prototype).da=!1,Du.S=null,Du.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),el(this,"tick"),this.da&&(dl(this),this.start()))}},Du.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Du.M=function(){pl.Z.M.call(this),dl(this),delete this.g};var ml=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i){var a;return e(te)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(ne)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:gl(this)}},{key:"M",value:function(){e(Ai)(e(Ni)(r.prototype),"M",this).call(this),this.g&&(ju.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(Yu);function yl(e){Yu.call(this),this.h=e,this.g={}}Xu(yl,Yu);var kl=[];function bl(e,t,n,r){Array.isArray(n)||(n&&(kl[0]=n.toString()),n=kl);for(var i=0;i<n.length;i++){var a=qc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function wl(e){uc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Gc(e)}),e),e.g={}}function _l(){this.g=!0}function Il(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var s=1;s<i.length;s++)i[s]=""}}}return nl(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}yl.prototype.M=function(){yl.Z.M.call(this),wl(this)},yl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_l.prototype.Aa=function(){this.g=!1},_l.prototype.info=function(){};var El={},Tl=null;function xl(){return Tl=Tl||new Zc}function Sl(e){Nc.call(this,El.Ma,e)}function Al(e){var t=xl();el(t,new Sl(t,e))}function Ol(e,t){Nc.call(this,El.STAT_EVENT,e),this.stat=t}function Rl(e){var t=xl();el(t,new Ol(t,e))}function Nl(e,t){Nc.call(this,El.Na,e),this.size=t}function Cl(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ju.setTimeout((function(){e()}),t)}El.Ma="serverreachability",Xu(Sl,Nc),El.STAT_EVENT="statevent",Xu(Ol,Nc),El.Na="timingevent",Xu(Nl,Nc);var Dl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Pl={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ll(){}function Ml(e){return e.h||(e.h=e.i())}function Ul(){}Ll.prototype.h=null;var jl,Fl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Vl(){Nc.call(this,"d")}function Hl(){Nc.call(this,"c")}function Bl(){}function ql(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new yl(this),this.P=Kl,e=yc?125:void 0,this.W=new pl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}Xu(Vl,Nc),Xu(Hl,Nc),Xu(Bl,Ll),Bl.prototype.g=function(){return new XMLHttpRequest},Bl.prototype.i=function(){return{}},jl=new Bl;var Kl=45e3,Wl={},Gl={};function Xl(e,t,n){e.K=1,e.v=mh(hh(t)),e.s=n,e.U=!0,Yl(e,null)}function Yl(e,t){e.F=Date.now(),Zl(e),e.A=hh(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Rh(n.h,"t",r),e.C=0,n=e.l.H,e.h=new zl,e.g=Cf(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ml(Wu(e.Ia,e,e.g),e.O)),bl(e.V,e.g,"readystatechange",e.gb),t=e.H?cc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Al(1),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var s="",o=a.split("&"),u=0;u<o.length;u++){var c=o[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Jl(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function $l(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Ql(e,n))==Gl){4==t&&(e.o=4,Rl(14),i=!1),Il(e.j,e.m,null,"[Incomplete Response]");break}if(r==Wl){e.o=4,Rl(15),Il(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Il(e.j,e.m,r,null),ih(e,r)}Jl(e)&&r!=Gl&&r!=Wl&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Rl(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ef(t),t.L=!0,Rl(11))):(Il(e.j,e.m,n,"[Invalid Chunked Response]"),rh(e),nh(e))}function Ql(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Gl:(n=Number(t.substring(n,r)),isNaN(n)?Wl:(r+=1)+n>t.length?Gl:(t=t.substr(r,n),e.C=r+n,t))}function Zl(e){e.Y=Date.now()+e.P,eh(e,e.P)}function eh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Cl(Wu(e.eb,e),t)}function th(e){e.B&&(ju.clearTimeout(e.B),e.B=null)}function nh(e){0==e.l.G||e.I||Sf(e.l,e)}function rh(e){th(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,dl(e.W),wl(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ih(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Uh(n.i,e)))if(n.I=e.N,!e.J&&Uh(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;xf(n),vf(n)}If(n),Rl(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Cl(Wu(n.ab,n),6e3));if(1>=Mh(n.i)&&n.ka){try{n.ka()}catch(a){}n.ka=void 0}}else Of(n,11)}else if((e.J||n.g==e)&&xf(n),!tc(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.U=a[0],a=a[1],2==n.G)if("c"==a[0]){n.J=a[1],n.la=a[2];var s=a[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var o=a[4];null!=o&&(n.za=o,n.h.info("SVER="+n.za));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(ic(l,"spdy")||ic(l,"quic")||ic(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(jh(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,gh(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var p=e;if((r=n).oa=Nf(r,r.H?r.la:null,r.W),p.J){Fh(r.i,p);var d=p,v=r.K;v&&d.setTimeout(v),d.B&&(th(d),Zl(d)),r.g=p}else _f(r);0<n.l.length&&yf(n)}else"stop"!=a[0]&&"close"!=a[0]||Of(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Of(n,7):df(n):"noop"!=a[0]&&n.j&&n.j.wa(a),n.A=0)}Al(4)}catch(a){}}function ah(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Vu(e)||"string"==typeof e)Qu(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Vu(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Vu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}}function sh(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof sh)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function oh(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];uh(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)uh(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function uh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Du=ql.prototype).setTimeout=function(e){this.P=e},Du.gb=function(e){e=e.target;var t=this.L;t&&3==cf(e)?t.l():this.Ia(e)},Du.Ia=function(e){try{if(e==this.g)e:{var t=cf(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||yc||this.g&&(this.h.h||this.g.ga()||lf(this.g)))){this.I||4!=t||7==n||Al(8==n||0>=r?3:2),th(this);var i=this.g.ba();this.N=i;t:if(Jl(this)){var a=lf(this.g);e="";var s=a.length,o=4==cf(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rh(this),nh(this);var u="";break t}this.h.i=new ju.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,e+=this.h.i.decode(a[n],{stream:o&&n==s-1});a.splice(0,s),this.h.g+=e,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,a,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+s}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tc(c)){var h=c;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,Rl(12),rh(this),nh(this);break e}Il(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ih(this,i)}this.U?($l(this,t,u),yc&&this.i&&3==t&&(bl(this.V,this.W,"tick",this.fb),this.W.start())):(Il(this.j,this.m,u,null),ih(this,u)),4==t&&rh(this),this.i&&!this.I&&(4==t?Sf(this.l,this):(this.i=!1,Zl(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Rl(12)):(this.o=0,Rl(13)),rh(this),nh(this)}}}catch(t){}},Du.fb=function(){if(this.g){var e=cf(this.g),t=this.g.ga();this.C<t.length&&(th(this),$l(this,e,t),this.i&&4!=e&&Zl(this))}},Du.cancel=function(){this.I=!0,rh(this)},Du.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Al(3),Rl(17)),rh(this),this.o=2,nh(this)):eh(this,this.Y-e)},(Du=sh.prototype).R=function(){oh(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Du.T=function(){return oh(this),this.g.concat()},Du.get=function(e,t){return uh(this.h,e)?this.h[e]:t},Du.set=function(e,t){uh(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Du.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],a=this.get(i);e.call(t,a,i,this)}};var ch=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lh(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof lh){this.g=void 0!==t?t:e.g,fh(this,e.j),this.s=e.s,ph(this,e.i),dh(this,e.m),this.l=e.l,t=e.h;var n=new xh;n.i=t.i,t.g&&(n.g=new sh(t.g),n.h=t.h),vh(this,n),this.o=e.o}else e&&(n=String(e).match(ch))?(this.g=!!t,fh(this,n[1]||"",!0),this.s=yh(n[2]||""),ph(this,n[3]||"",!0),dh(this,n[4]),this.l=yh(n[5]||"",!0),vh(this,n[6]||"",!0),this.o=yh(n[7]||"")):(this.g=!!t,this.h=new xh(null,this.g))}function hh(e){return new lh(e)}function fh(e,t,n){e.j=n?yh(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ph(e,t,n){e.i=n?yh(t,!0):t}function dh(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function vh(e,t,n){t instanceof xh?(e.h=t,function(e,t){t&&!e.j&&(Sh(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ah(this,t),Rh(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=kh(t,Eh)),e.h=new xh(t,e.g))}function gh(e,t,n){e.h.set(t,n)}function mh(e){return gh(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yh(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function kh(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,bh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function bh(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}lh.prototype.toString=function(){var e=[],t=this.j;t&&e.push(kh(t,wh,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(kh(t,wh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(kh(n,"/"==n.charAt(0)?Ih:_h,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",kh(n,Th)),e.join("")};var wh=/[#\/\?@]/g,_h=/[#\?:]/g,Ih=/[#\?]/g,Eh=/[#\?@]/g,Th=/#/g;function xh(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Sh(e){e.g||(e.g=new sh,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ah(e,t){Sh(e),t=Nh(e,t),uh(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,uh((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&oh(e)))}function Oh(e,t){return Sh(e),t=Nh(e,t),uh(e.g.h,t)}function Rh(e,t,n){Ah(e,t),0<n.length&&(e.i=null,e.g.set(Nh(e,t),ec(n)),e.h+=n.length)}function Nh(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Du=xh.prototype).add=function(e,t){Sh(this),this.i=null,e=Nh(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Du.forEach=function(e,t){Sh(this),this.g.forEach((function(n,r){Qu(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Du.T=function(){Sh(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},Du.R=function(e){Sh(this);var t=[];if("string"==typeof e)Oh(this,e)&&(t=Zu(t,this.g.get(Nh(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Zu(t,e[n])}return t},Du.set=function(e,t){return Sh(this),this.i=null,Oh(this,e=Nh(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Du.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Du.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var a=0;a<r.length;a++){var s=i;""!==r[a]&&(s+="="+encodeURIComponent(String(r[a]))),e.push(s)}}return this.i=e.join("&")};var Ch=function t(n,r){"use strict";e(te)(this,t),this.h=n,this.g=r};function Dh(e){this.l=e||Ph,ju.PerformanceNavigationTiming?e=0<(e=ju.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ju.g&&ju.g.Ea&&ju.g.Ea()&&ju.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ph=10;function Lh(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Mh(e){return e.h?1:e.g?e.g.size:0}function Uh(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function jh(e,t){e.g?e.g.add(t):e.h=t}function Fh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Vh(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,s=e.g.values()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;t=t.concat(o.D)}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}return ec(e.i)}function Hh(){}function Bh(){this.g=new Hh}function qh(e,t,n){var r=n||"";try{ah(e,(function(e,n){var i=e;Hu(e)&&(i=nl(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function zh(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Kh(e){this.l=e.$b||null,this.j=e.ib||!1}function Wh(e,t){Zc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dh.prototype.cancel=function(){if(this.i=Vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},Hh.prototype.stringify=function(e){return ju.JSON.stringify(e,void 0)},Hh.prototype.parse=function(e){return ju.JSON.parse(e,void 0)},Xu(Kh,Ll),Kh.prototype.g=function(){return new Wh(this.l,this.j)},Kh.prototype.i=function(e){return function(){return e}}({}),Xu(Wh,Zc);var Gh=0;function Xh(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Yh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Jh(e)}function Jh(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Du=Wh.prototype).open=function(e,t){if(this.readyState!=Gh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Jh(this)},Du.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ju).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Du.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Yh(this)),this.readyState=Gh},Du.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Jh(this)),this.g&&(this.readyState=3,Jh(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ju.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xh(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Du.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Yh(this):Jh(this),3==this.readyState&&Xh(this)}},Du.Ua=function(e){this.g&&(this.response=this.responseText=e,Yh(this))},Du.Ta=function(e){this.g&&(this.response=e,Yh(this))},Du.ha=function(){this.g&&Yh(this)},Du.setRequestHeader=function(e,t){this.v.append(e,t)},Du.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Du.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var $h=ju.JSON.parse;function Qh(e){Zc.call(this),this.headers=new sh,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zh,this.K=this.L=!1}Xu(Qh,Zc);var Zh="",ef=/^https?$/i,tf=["POST","PUT"];function nf(e){return"content-type"==e.toLowerCase()}function rf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,af(e),of(e)}function af(e){e.D||(e.D=!0,el(e,"complete"),el(e,"error"))}function sf(e){if(e.h&&void 0!==Uu&&(!e.C[1]||4!=cf(e)||2!=e.ba()))if(e.v&&4==cf(e))vl(e.Fa,0,e);else if(el(e,"readystatechange"),4==cf(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(ch)[1]||null;if(!a&&ju.self&&ju.self.location){var s=ju.self.location.protocol;a=s.substr(0,s.length-1)}i=!ef.test(a?a.toLowerCase():"")}t=i}if(t)el(e,"complete"),el(e,"success");else{e.m=6;try{var o=2<cf(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",af(e)}}finally{of(e)}}}function of(e,t){if(e.g){uf(e);var n=e.g,r=e.C[0]?Fu:null;e.g=null,e.C=null,t||el(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function uf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ju.clearTimeout(e.A),e.A=null)}function cf(e){return e.g?e.g.readyState:0}function lf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Zh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function hf(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return uc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):gh(e,t,n))}function ff(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pf(e){this.za=0,this.l=[],this.h=new _l,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ff("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ff("baseRetryDelayMs",5e3,e),this.$a=ff("retryDelaySeedMs",1e4,e),this.Ya=ff("forwardChannelMaxRetries",2,e),this.ra=ff("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Dh(e&&e.concurrentRequestLimit),this.Ca=new Bh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function df(e){if(gf(e),3==e.G){var t=e.V++,n=hh(e.F);gh(n,"SID",e.J),gh(n,"RID",t),gh(n,"TYPE","terminate"),bf(e,n),(t=new ql(e,e.h,t,void 0)).K=2,t.v=mh(hh(n)),n=!1,ju.navigator&&ju.navigator.sendBeacon&&(n=ju.navigator.sendBeacon(t.v.toString(),"")),!n&&ju.Image&&((new Image).src=t.v,n=!0),n||(t.g=Cf(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Zl(t)}Rf(e)}function vf(e){e.g&&(Ef(e),e.g.cancel(),e.g=null)}function gf(e){vf(e),e.u&&(ju.clearTimeout(e.u),e.u=null),xf(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ju.clearTimeout(e.m),e.m=null)}function mf(e,t){e.l.push(new Ch(e.Za++,t)),3==e.G&&yf(e)}function yf(e){Lh(e.i)||e.m||(e.m=!0,cl(e.Ha,e),e.C=0)}function kf(e,t){var n;n=t?t.m:e.V++;var r=hh(e.F);gh(r,"SID",e.J),gh(r,"RID",n),gh(r,"AID",e.U),bf(e,r),e.o&&e.s&&hf(r,e.o,e.s),n=new ql(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=wf(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),jh(e.i,n),Xl(n,r,t)}function bf(e,t){e.j&&ah({},(function(e,n){gh(t,n,e)}))}function wf(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Wu(e.j.Oa,e.j,e):null;e:for(var i=e.l,a=-1;;){var s=["count="+n];-1==a?0<n?(a=i[0].h,s.push("ofs="+a)):a=0:s.push("ofs="+a);for(var o=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),o=!1;else try{qh(l,s,"req"+c+"_")}catch(e){r&&r(l)}}if(o){r=s.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function _f(e){e.g||e.u||(e.Y=1,cl(e.Ga,e),e.A=0)}function If(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Cl(Wu(e.Ga,e),Af(e,e.A)),e.A++,!0)}function Ef(e){null!=e.B&&(ju.clearTimeout(e.B),e.B=null)}function Tf(e){e.g=new ql(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=hh(e.oa);gh(t,"RID","rpc"),gh(t,"SID",e.J),gh(t,"CI",e.N?"0":"1"),gh(t,"AID",e.U),bf(e,t),gh(t,"TYPE","xmlhttp"),e.o&&e.s&&hf(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=mh(hh(t)),n.s=null,n.U=!0,Yl(n,e)}function xf(e){null!=e.v&&(ju.clearTimeout(e.v),e.v=null)}function Sf(e,t){var n=null;if(e.g==t){xf(e),Ef(e),e.g=null;var r=2}else{if(!Uh(e.i,t))return;n=t.D,Fh(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;el(r=xl(),new Nl(r,n,t,i)),yf(e)}else _f(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Mh(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Cl(Wu(e.Ha,e,t),Af(e,e.C)),e.C++,0)))}(e,t)||2==r&&If(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Of(e,5);break;case 4:Of(e,10);break;case 3:Of(e,6);break;default:Of(e,2)}}function Af(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Of(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Wu(e.jb,e);n||(n=new lh("//www.google.com/images/cleardot.gif"),ju.location&&"http"==ju.location.protocol||fh(n,"https"),mh(n)),function(e,t){var n=new _l;if(ju.Image){var r=new Image;r.onload=Gu(zh,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Gu(zh,n,r,"TestLoadImage: error",!1,t),r.onabort=Gu(zh,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Gu(zh,n,r,"TestLoadImage: timeout",!1,t),ju.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Rl(2);e.G=0,e.j&&e.j.va(t),Rf(e),gf(e)}function Rf(e){e.G=0,e.I=-1,e.j&&(0==Vh(e.i).length&&0==e.l.length||(e.i.i.length=0,ec(e.l),e.l.length=0),e.j.ua())}function Nf(e,t,n){var r=function(e){return e instanceof lh?hh(e):new lh(e,void 0)}(n);if(""!=r.i)t&&ph(r,t+"."+r.i),dh(r,r.m);else{var i=ju.location;r=function(e,t,n,r){var i=new lh(null,void 0);return e&&fh(i,e),t&&ph(i,t),n&&dh(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&uc(e.aa,(function(e,t){gh(r,t,e)})),t=e.D,n=e.sa,t&&n&&gh(r,t,n),gh(r,"VER",e.ma),bf(e,r),r}function Cf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Qh(new Kh({ib:!0})):new Qh(e.qa)).L=e.H,t}function Df(){}function Pf(){if(gc&&!(10<=Number(Oc)))throw Error("Environmental error: no available transport.")}function Lf(e,t){Zc.call(this),this.g=new pf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!tc(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tc(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new jf(this)}function Mf(e){Vl.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Uf(){Hl.call(this),this.status=1}function jf(e){this.g=e}(Du=Qh.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jl.g(),this.C=this.u?Ml(this.u):Ml(jl),this.g.onreadystatechange=Wu(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void rf(this,e)}e=n||"";var i=new sh(this.headers);r&&ah(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=nf,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=ju.FormData&&e instanceof ju.FormData,!(0<=$u(tf,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uf(this),0<this.B&&((this.K=function(e){return gc&&Sc()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wu(this.pa,this)):this.A=vl(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){rf(this,e)}},Du.pa=function(){void 0!==Uu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,el(this,"timeout"),this.abort(8))},Du.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,el(this,"complete"),el(this,"abort"),of(this))},Du.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),of(this,!0)),Qh.Z.M.call(this)},Du.Fa=function(){this.s||(this.F||this.v||this.l?sf(this):this.cb())},Du.cb=function(){sf(this)},Du.ba=function(){try{return 2<cf(this)?this.g.status:-1}catch(e){return-1}},Du.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Du.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),$h(t)}},Du.Da=function(){return this.m},Du.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Du=pf.prototype).ma=8,Du.G=1,Du.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Du.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new ql(this,this.h,e,void 0),n=this.s;if(this.P&&(n?hc(n=cc(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var a=this.l[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=wf(this,t,r),gh(i=hh(this.F),"RID",e),gh(i,"CVER",22),this.D&&gh(i,"X-HTTP-Session-Id",this.D),bf(this,i),this.o&&n&&hf(i,this.o,n),jh(this.i,t),this.Ra&&gh(i,"TYPE","init"),this.ja?(gh(i,"$req",r),gh(i,"SID","null"),t.$=!0,Xl(t,i,null)):Xl(t,i,r),this.G=2}}else 3==this.G&&(e?kf(this,e):0==this.l.length||Lh(this.i)||kf(this))},Du.Ga=function(){if(this.u=null,Tf(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Cl(Wu(this.bb,this),e)}},Du.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Rl(10),vf(this),Tf(this))},Du.ab=function(){null!=this.v&&(this.v=null,vf(this),If(this),Rl(19))},Du.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Rl(2)):(this.h.info("Failed to ping google.com"),Rl(1))},(Du=Df.prototype).xa=function(){},Du.wa=function(){},Du.va=function(){},Du.ua=function(){},Du.Oa=function(){},Pf.prototype.g=function(e,t){return new Lf(e,t)},Xu(Lf,Zc),Lf.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),cl(Wu(e.hb,e,t))),Rl(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Nf(e,null,e.W),yf(e)},Lf.prototype.close=function(){df(this.g)},Lf.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,mf(this.g,t)}else this.v?((t={}).__data__=nl(e),mf(this.g,t)):mf(this.g,e)},Lf.prototype.M=function(){this.g.j=null,delete this.j,df(this.g),delete this.g,Lf.Z.M.call(this)},Xu(Mf,Vl),Xu(Uf,Hl),Xu(jf,Df),jf.prototype.xa=function(){el(this.g,"a")},jf.prototype.wa=function(e){el(this.g,new Mf(e))},jf.prototype.va=function(e){el(this.g,new Uf(e))},jf.prototype.ua=function(){el(this.g,"b")},Pf.prototype.createWebChannel=Pf.prototype.g,Lf.prototype.send=Lf.prototype.u,Lf.prototype.open=Lf.prototype.m,Lf.prototype.close=Lf.prototype.close,Dl.NO_ERROR=0,Dl.TIMEOUT=8,Dl.HTTP_ERROR=6,Pl.COMPLETE="complete",Ul.EventType=Fl,Fl.OPEN="a",Fl.CLOSE="b",Fl.ERROR="c",Fl.MESSAGE="d",Zc.prototype.listen=Zc.prototype.N,Qh.prototype.listenOnce=Qh.prototype.O,Qh.prototype.getLastError=Qh.prototype.La,Qh.prototype.getLastErrorCode=Qh.prototype.Da,Qh.prototype.getStatus=Qh.prototype.ba,Qh.prototype.getResponseJson=Qh.prototype.Qa,Qh.prototype.getResponseText=Qh.prototype.ga,Qh.prototype.send=Qh.prototype.ea;Mu.createWebChannelTransport=function(){return new Pf},Mu.getStatEventTarget=function(){return xl()},Mu.ErrorCode=Dl,Mu.EventType=Pl,Mu.Event=El,Mu.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mu.FetchXmlHttpFactory=Kh,Mu.WebChannel=Ul,Mu.XhrIo=Qh,i("6qd2L");var Ff="@firebase/firestore",Vf=function(){"use strict";function t(n){e(te)(this,t),this.uid=n}return e(ne)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();Vf.UNAUTHENTICATED=new Vf(null),Vf.GOOGLE_CREDENTIALS=new Vf("google-credentials-uid"),Vf.FIRST_PARTY=new Vf("first-party-uid"),Vf.MOCK_USER=new Vf("mock-user");
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
var Hf="9.8.3",Bf=new wt("@firebase/firestore");
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
 */function qf(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Bf.logLevel<=ft.DEBUG){var a,s=r.map(Kf);(a=Bf).debug.apply(a,["Firestore (".concat(Hf,"): ").concat(t)].concat(e(ye)(s)))}}function zf(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Bf.logLevel<=ft.ERROR){var a,s=r.map(Kf);(a=Bf).error.apply(a,["Firestore (".concat(Hf,"): ").concat(t)].concat(e(ye)(s)))}}function Kf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function Wf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Hf,") INTERNAL ASSERTION FAILED: ")+e;throw zf(t),new Error(t)}function Gf(e,t){e||Wf()}
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
var Xf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Yf=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i){var a;return e(te)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(Pu)(a)}return r}(Xe),Jf=function t(){"use strict";var n=this;e(te)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},$f=function t(n,r){"use strict";e(te)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Qf=function(){"use strict";function t(){e(te)(this,t)}return e(ne)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Vf.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Zf=function(){"use strict";function t(n){e(te)(this,t),this.t=n,this.currentUser=Vf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(ne)(t,[{key:"start",value:function(t,n){var r=this,i=this.i,o=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},u=new Jf;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),u.resolve(),u=new Jf,t.enqueueRetryable((function(){return o(e.currentUser)}))};var c=function(){var n=u,i=r;t.enqueueRetryable(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(i.currentUser);case 4:case"end":return e.stop()}}),t)}))))},l=function(e){qf("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(qf("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Jf)}}),0),c()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(qf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(Gf("string"==typeof n.accessToken),new $f(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return Gf(null===e||"string"==typeof e),new Vf(e)}}]),t}(),ep=function t(n,r,i){"use strict";e(te)(this,t),this.type="FirstParty",this.user=Vf.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);var a=n.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)},tp=function(){"use strict";function t(n,r,i){e(te)(this,t),this.h=n,this.l=r,this.m=i}return e(ne)(t,[{key:"getToken",value:function(){return Promise.resolve(new ep(this.h,this.l,this.m))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Vf.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),np=function t(n){"use strict";e(te)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},rp=function(){"use strict";function t(n){e(te)(this,t),this.g=n,this.forceRefresh=!1,this.appCheck=null,this.p=null}return e(ne)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&qf("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.p;return n.p=e.token,qf("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){qf("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.g.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.g.getImmediate({optional:!0});e?r(e):qf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(Gf("string"==typeof t.token),e.p=t.token,new np(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
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
function ip(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var ap=function(){"use strict";function t(){e(te)(this,t)}return e(ne)(t,null,[{key:"I",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=ip(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function sp(e,t){return e<t?-1:e>t?1:0}
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
var op=function(){"use strict";function t(n,r,i){e(te)(this,t),void 0===r?r=0:r>n.length&&Wf(),void 0===i?i=n.length-r:i>n.length-r&&Wf(),this.segments=n,this.offset=r,this.len=i}return e(ne)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),up=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(){return e(te)(this,r),n.apply(this,arguments)}return e(ne)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],s=!0,o=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new Yf(Xf.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,e(ye)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(op),cp=function(){"use strict";function t(n){e(te)(this,t),this.path=n}return e(ne)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===up.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(up.fromString(e))}},{key:"fromName",value:function(e){return new t(up.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(up.emptyPath())}},{key:"comparator",value:function(e,t){return up.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new up(e.slice()))}}]),t}(),lp=function t(n,r,i,a){"use strict";e(te)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */lp.UNKNOWN_ID=-1;function hp(e){return"IndexedDbTransactionError"===e.name}var fp=function(){"use strict";function t(n,r){var i=this;e(te)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.it(e)},this.rt=function(e){return r.writeSequenceNumber(e)})}return e(ne)(t,[{key:"it",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.rt&&this.rt(e),e}}]),t}();
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
fp.ot=-1;var pp=function(){"use strict";function t(n,r){e(te)(this,t),this.comparator=n,this.root=r||vp.EMPTY}return e(ne)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vp.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vp.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new dp(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new dp(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new dp(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new dp(this.root,e,this.comparator,!0)}}]),t}(),dp=function(){"use strict";function t(n,r,i,a){e(te)(this,t),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(ne)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),vp=function(){"use strict";function t(n,r,i,a,s){e(te)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(ne)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw Wf();if(this.right.isRed())throw Wf();var e=this.left.check();if(e!==this.right.check())throw Wf();return e+(this.isRed()?0:1)}}]),t}();vp.EMPTY=null,vp.RED=!0,vp.BLACK=!1,vp.EMPTY=new(function(){"use strict";function t(){e(te)(this,t),this.size=0}return e(ne)(t,[{key:"key",get:function(){throw Wf()}},{key:"value",get:function(){throw Wf()}},{key:"color",get:function(){throw Wf()}},{key:"left",get:function(){throw Wf()}},{key:"right",get:function(){throw Wf()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new vp(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var gp=function(){"use strict";function t(n){e(te)(this,t),this.comparator=n,this.data=new pp(this.comparator)}return e(ne)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new mp(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new mp(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),mp=function(){"use strict";function t(n){e(te)(this,t),this.iter=n}return e(ne)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();var yp=Symbol.iterator,kp=function(){"use strict";function t(n){e(te)(this,t),this.binaryString=n}return e(ne)(t,[{key:yp,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return sp(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
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
 */kp.EMPTY_BYTE_STRING=new kp("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bp(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function wp(e){return"string"==typeof e?kp.fromBase64String(e):kp.fromUint8Array(e)}
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
var _p=function t(n,r,i,a,s,o,u,c){"use strict";e(te)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.useFetchStreams=c},Ip=function(){"use strict";function t(n,r){e(te)(this,t),this.projectId=n,this.database=r||"(default)"}return e(ne)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();function Ep(e){return 0===e&&1/e==-1/0}function Tp(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}var xp,Sp;(Sp=xp||(xp={}))[Sp.OK=0]="OK",Sp[Sp.CANCELLED=1]="CANCELLED",Sp[Sp.UNKNOWN=2]="UNKNOWN",Sp[Sp.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sp[Sp.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sp[Sp.NOT_FOUND=5]="NOT_FOUND",Sp[Sp.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sp[Sp.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sp[Sp.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sp[Sp.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sp[Sp.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sp[Sp.ABORTED=10]="ABORTED",Sp[Sp.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sp[Sp.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sp[Sp.INTERNAL=13]="INTERNAL",Sp[Sp.UNAVAILABLE=14]="UNAVAILABLE",Sp[Sp.DATA_LOSS=15]="DATA_LOSS";
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
new pp(cp.comparator);
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
 */new pp(cp.comparator);new pp(cp.comparator),new gp(cp.comparator);new gp(sp);var Ap=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Op=(e(ye)(Ap).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Rp=Op;
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
 */e(ye)(Rp).concat(["indexConfiguration","indexState","indexEntries"]);
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
 */var Np=function(){"use strict";function t(){e(te)(this,t)}return e(ne)(t,[{key:"re",value:function(e,t){this.oe(e,t),t.ue()}},{key:"oe",value:function(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(bp(e.integerValue));else if("doubleValue"in e){var n=bp(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Ep(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){var r=e.timestampValue;this.ce(t,20),"string"==typeof r?t.he(r):(t.he("".concat(r.seconds||"")),t.ae(r.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(wp(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.ce(t,45),t.ae(i.latitude||0),t.ae(i.longitude||0)}else"mapValue"in e?Tp(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Wf()}},{key:"le",value:function(e,t){this.ce(t,25),this.ge(e,t)}},{key:"ge",value:function(e,t){t.he(e)}},{key:"we",value:function(e,t){var n=e.fields||{};this.ce(t,55);var r=!0,i=!1,a=void 0;try{for(var s,o=Object.keys(n)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.le(u,t),this.oe(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=e.values||[];this.ce(t,50);var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.oe(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"_e",value:function(e,t){var n=this;this.ce(t,37),cp.fromName(e).path.forEach((function(e){n.ce(t,60),n.ge(e,t)}))}},{key:"ce",value:function(e,t){e.ae(t)}},{key:"fe",value:function(e){e.ae(2)}}]),t}();Np.ye=new Np;
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
 */
new Uint8Array(0);
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
 * Copyright 2018 Google LLC
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
var Cp=function(){"use strict";function t(n,r,i){e(te)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(ne)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
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
 */Cp.DEFAULT_COLLECTION_PERCENTILE=10,Cp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cp.DEFAULT=new Cp(41943040,Cp.DEFAULT_COLLECTION_PERCENTILE,Cp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cp.DISABLED=new Cp(-1,0,0);function Dp(){return"undefined"!=typeof document?document:null}
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
 */var Pp=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(te)(this,t),this.js=n,this.timerId=r,this.lo=i,this.fo=a,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}return e(ne)(t,[{key:"reset",value:function(){this.wo=0}},{key:"po",value:function(){this.wo=this._o}},{key:"Io",value:function(e){var t=this;this.cancel();var n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&qf("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.wo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(function(){return t.yo=Date.now(),e()})),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}},{key:"Eo",value:function(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}},{key:"cancel",value:function(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}},{key:"To",value:function(){return(Math.random()-.5)*this.wo}}]),t}();
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
var Lp=function(){"use strict";function t(n,r,i,a,s){e(te)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new Jf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(ne)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yf(Xf.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var s=new t(e,n,Date.now()+r,i,a);return s.start(r),s}}]),t}();function Mp(e,t){if(zf("AsyncQueue","".concat(t,": ").concat(e)),hp(e))return new Yf(Xf.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
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
var Up=function(){"use strict";function t(n,r,i,o){var u=this;e(te)(this,t);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=o,this.user=Vf.UNAUTHENTICATED,this.clientId=ap.I(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(c=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return qf("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(e){return qf("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return e(ne)(t,[{key:"getConfiguration",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new Yf(Xf.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new Jf,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n.onlineComponents,!e.t0){e.next=5;break}return e.next=5,n.onlineComponents.terminate();case 5:if(e.t1=n.offlineComponents,!e.t1){e.next=9;break}return e.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=Mp(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
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
 */var jp=new Map;
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
var Fp=function(){"use strict";function t(n){var r;if(e(te)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new Yf(Xf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Yf(Xf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Yf(Xf.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return e(ne)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),Vp=function(){"use strict";function t(n,r,i){e(te)(this,t),this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1,n instanceof Ip?this._databaseId=n:(this._app=n,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Yf(Xf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ip(e.options.projectId)}(n))}return e(ne)(t,[{key:"app",get:function(){if(!this._app)throw new Yf(Xf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Yf(Xf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Qf;switch(e.type){case"gapi":var t=e.client;return Gf(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new tp(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Yf(Xf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=jp.get(e))&&(qf("ComponentProvider","Removing Datastore"),jp.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var Hp=function(){"use strict";function t(){var n=this;e(te)(this,t),this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pp(this,"async_queue_retry"),this.Kc=function(){var e=Dp();e&&qf("AsyncQueue","Visibility state changed to "+e.visibilityState),n.So.Eo()};var r=Dp();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Kc)}return e(ne)(t,[{key:"isShuttingDown",get:function(){return this.Fc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.Gc(),this.Qc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;var t=Dp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}},{key:"enqueue",value:function(e){var t=this;if(this.Gc(),this.Fc)return new Promise((function(){}));var n=new Jf;return this.Qc((function(){return t.Fc&&t.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Mc.push(e),t.jc()}))}},{key:"jc",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Mc.length){e.next=14;break}return e.prev=1,e.next=4,t.Mc[0]();case 4:t.Mc.shift(),t.So.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),hp(e.t0)){e.next=12;break}throw e.t0;case 12:qf("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Mc.length>0&&t.So.Io((function(){return t.jc()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"Qc",value:function(e){var t=this,n=this.Oc.then((function(){return t.Lc=!0,e().catch((function(e){var n,r;throw t.Bc=e,t.Lc=!1,zf("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Lc=!1,e}))}));return this.Oc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.Gc(),this.qc.indexOf(e)>-1&&(t=0);var i=Lp.createAndSchedule(this,e,t,n,(function(e){return r.Wc(e)}));return this.$c.push(i),i}},{key:"Gc",value:function(){this.Bc&&Wf()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Oc,e.next=4,r;case 4:if(r!==t.Oc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"Hc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Jc",value:function(e){var t=this;return this.zc().then((function(){t.$c.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,s=t.$c[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;if(o.skipDelay(),"all"!==e&&o.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.zc()}))}},{key:"Yc",value:function(e){this.qc.push(e)}},{key:"Wc",value:function(e){var t=this.$c.indexOf(e);this.$c.splice(t,1)}}]),t}();var Bp=function(t){"use strict";e(xe)(r,t);var n=e(Pe)(r);function r(t,i,a){var s;return e(te)(this,r),(s=n.call(this,t,i,a)).type="firestore",s._queue=new Hp,s._persistenceKey="name"in t?t.name:"[DEFAULT]",e(Pu)(s)}return e(ne)(r,[{key:"_terminate",value:function(){return this._firestoreClient||qp(this),this._firestoreClient.terminate()}}]),r}(Vp);
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
 */function qp(e){var t,n,r,i,a,s=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new _p(n,r,i,(a=s).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new Up(e._authCredentials,e._appCheckCredentials,e._queue,o)}new RegExp("[~\\*/\\[\\]]");!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Hf=an,Zt(new ct("firestore",(function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),a=new Bp(i,new Zf(e.getProvider("auth-internal")),new rp(e.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a}),"PUBLIC")),on(Ff,"3.4.10",e),on(Ff,"3.4.10","esm2017")}();var zp,Kp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:Xt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw nn.create("bad-app-name",{appName:String(i)});var a=Jt.get(i);if(a){if(Ze(e,a.options)&&Ze(r,a.config))return a;throw nn.create("duplicate-app",{appName:i})}var s=new dt(i),o=!0,u=!1,c=void 0;try{for(var l,h=$t.values()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=l.value;s.addComponent(f)}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}var p=new rn(e,r,s);return Jt.set(i,p),p}({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),Wp=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn(),t=en(e=ut(e),Ur);t.isInitialized()?t.getImmediate():Ei(e)}(Kp),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn();en(e,"firestore").getImmediate()}(Kp),
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
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn(),t=en(e,"auth");return t.isInitialized()?t.getImmediate():Xi(e,{popupRedirectResolver:xu,persistence:[Eo,Zs,to]})}()),Gp=document.querySelector("#btnLogin"),Xp=document.querySelector("#btnSignup"),Yp=document.querySelector("#user-email"),Jp=document.querySelector("#user-name"),$p=document.querySelector("[data-modal]"),Qp=document.querySelector("#user-login"),Zp=document.querySelector("#user-library"),ed=document.querySelector("#user-logout"),td=(zp=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=Yp.value,i=Jp.value,e.prev=3,e.next=6,(t=Wp,a=r,s=i,zs(ut(t),Ts.credential(a,s))).then((function(e){e&&($p.classList.toggle("is-hidden"),Yp.value="",Jp.value="",console.log(e)),console.log("btnclick loginEmailPassword")}));case 6:e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),od(e.t0);case 13:case"end":return e.stop()}var t,a,s}),t,null,[[3,9]])}))),function(e){return zp.apply(this,arguments)});Gp.addEventListener("click",td);var nd,rd=(nd=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=Yp.value,i=Jp.value,t.prev=3,t.next=6,Ws(Wp,r,i).then(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$p.classList.toggle("is-hidden");case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),i.length<7?E.Notify.info("Your password have less than 6 characters"):(console.log(t.t0),od(t.t0));case 11:case"end":return t.stop()}}),t,null,[[3,8]])}))),function(e){return nd.apply(this,arguments)});Xp.addEventListener("click",rd);var id,ad,sd,od=function(e){e.code==Mi.INVALID_PASSWORD?E.Notify.info("Wrong password. Try again"):E.Notify.info("Error: ".concat(e.message))};id=function(e){e&&(console.log(e),cd())},ut(Wp).onAuthStateChanged(id,ad,sd);var ud=function(){var t=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xs(Wp);case 2:cd();case 3:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function cd(){Qp.classList.toggle("hidden-link"),Zp.classList.toggle("hidden-link"),ed.classList.toggle("hidden-link")}ed.addEventListener("click",ud)}();
//# sourceMappingURL=index.81168220.js.map
