!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.d91cae41.js","6q1P2":"image-not-found-adaptive.85e4068c.png","41aTV":"Logo.9211a2b0.png","7nwxg":"library.60e7c562.js"}')),i("7SdJ7");var a=i("bpxeT"),s=i("2TvXO"),o=document.querySelector(".advice-list"),u=document.querySelector(".advice-list__nav-btn--left");function c(t){var e=Number(22),n=Number(-22),r=0,i=t.currentTarget.classList.contains("advice-list__nav-btn--right"),a=setInterval((function(){r!=e&&r!=n?(i?r+=1:r-=1,o.scrollBy(r,0)):clearInterval(a)}),30)}document.querySelector(".advice-list__nav-btn--right").addEventListener("click",c),u.addEventListener("click",c),o.addEventListener("touchstart",(function(t){l=t.touches[0].clientX,h=t.touches[0].clientY}),!1),o.addEventListener("touchmove",(function(t){if(!l||!h)return;var e=t.touches[0].clientX,n=t.touches[0].clientY,r=l-e,i=h-n;Math.abs(r),Math.abs(i);l=null,h=null}),!1);var l=null,h=null;a=i("bpxeT"),s=i("2TvXO");t(rt=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var f="c8ef48bae82b60cf66a4f0e6e3dd153e";function p(){return d.apply(this,arguments)}function d(){return(d=t(a)(t(s).mark((function e(){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(rt)("3/genre/movie/list?api_key=".concat(f));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v,g=document.querySelector(".advice-list");(v=t(a)(t(s).mark((function e(){var n,r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,r=n.data.genres,i=r.map((function(t){var e=t.id,n=t.name;return'<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="'.concat(e,'">').concat(n,"</button></li>")})).join(""),g.innerHTML=i;case 6:case"end":return t.stop()}}),e)}))),function(){return v.apply(this,arguments)})();a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");t(rt=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var y="c8ef48bae82b60cf66a4f0e6e3dd153e";function m(t){return b.apply(this,arguments)}function b(){return(b=t(a)(t(s).mark((function e(n){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(rt)("/3/movie/".concat(n,"/recommendations?api_key=").concat(y));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(t){var e=t.length-1;return t[Math.round(Math.random()*(e-0)+0)]}var w=i("bsgZn"),x=i("k88BM"),E=i("13upn"),T=i("h6c0i"),I=document.querySelector(".advice-list");document.querySelector(".backdrop");function S(){return(S=t(a)(t(s).mark((function e(n){var r,i,a,o,u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,r=n.target.dataset.id,t.next=6,m(r);case 6:return i=t.sent,a=i.data.results,o=k(a),u=o.id,t.next=12,(0,w.getModalData)(u);case 12:c=t.sent,(0,x.showModal)(c),(0,E.spinnerOff)(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),T.Notify.info("We are sorry but this genre is empty.");case 20:case"end":return t.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}I.addEventListener("click",(function(t){return S.apply(this,arguments)})),i("3gTut");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");t(rt=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var _="c8ef48bae82b60cf66a4f0e6e3dd153e";function A(t){return C.apply(this,arguments)}function C(){return(C=t(a)(t(s).mark((function e(n){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(rt)("3/trending/all/day?api_key=".concat(_,"&page=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=i("l5bVx"),D=t(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var s,o=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="https://image.tmdb.org/t/p/w300'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:79},end:{line:4,column:89}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:96},end:{line:4,column:105}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>\n"},useData:!0}),R=i("88LCY"),N=i("4ltia");function O(t){var e="";return t.forEach((function(t){var n,r=null===(n=t.genre_ids)||void 0===n?void 0:n.map((function(t){return(0,N.convertGanres)(R.genreIds,t)}));r.length>2&&(r.length=2,r.push("Others"));var i={filmId:t.id,title:t.name||t.title||"XXXX",urlImg:t.poster_path,relisYer:(t.release_date||t.first_air_date||"XXXX").slice(0,4),ganres:r.join(", ")||"Others"};e+=D(i)})),e}i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("6q1P2");var P={galleryListEl:document.querySelector(".gallery-list"),libraryEmptyWachEl:document.querySelector(".js-watched-text")},M=i("jtBSM"),j=(a=i("bpxeT"),s=i("2TvXO"),M=i("jtBSM"),document.querySelector(".pagination")),F=document.querySelector(".gallery-list"),U=1;function q(t){return B.apply(this,arguments)}function B(){return(B=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(n);case 3:return r=t.sent,t.next=6,r.data.results;case 6:i=t.sent,a=r.data.page,o=r.data.total_pages,F.innerHTML="",P.galleryListEl.insertAdjacentHTML("afterbegin",O(i)),(0,M.setResultData)(i),console.log(r),H(a,o),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),P.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 20:case"end":return t.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function H(t,e){U=t;var n="",r=t-1,i=t+2,a=t+1;t>1&&(n+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),t>2&&(n+='<li class="pagination__number display-none">1</li>'),t>4&&(n+='<li class="pagination__number display-none">...</li>'),t>3&&(n+='<li class="pagination__number">'.concat(t-2,"</li>")),t>=2&&(n+='<li class="pagination__number">'.concat(r,"</li>")),n+='<li class="pagination__number active">'.concat(t,"</li>"),t<e-1&&(n+='<li class="pagination__number">'.concat(a,"</li>")),t<e-2&&(n+='<li class="pagination__number">'.concat(i,"</li>")),t<=e-1&&(t<e-3&&(n+='<li class="pagination__number display-none">...</li>'),n+='<li class="pagination__number display-none">'.concat(e,"</li>")),t<e&&(n+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),j.innerHTML=n,j.addEventListener("click",V)}function V(t){if("LI"===t.target.nodeName){var e=t.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),e){case"←":q(U-1);break;case"→":q(U+1);break;case"...":break;default:q(e)}}}function X(){return(X=t(a)(t(s).mark((function e(){var n,r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(1);case 3:n=t.sent,r=n.data.results,console.log(n),P.galleryListEl.insertAdjacentHTML("afterbegin",O(r)),H(1,n.data.total_pages),(0,M.setResultData)(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),P.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return X.apply(this,arguments)}));var K,z,Y,G,W,J,$,Q=document.querySelector(".add-block"),Z=document.querySelector(".add-block__time"),tt=document.querySelector(".add-block__btn");z=(K=["https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg","https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg"]).length-1,Y=Math.round(Math.random()*(z-0)+0),G='<img\n    src="'.concat(K[Y],'"\n    alt="advertising"\n    class="add-block__image"\n  />'),Q.insertAdjacentHTML("beforeend",G),W=Date.now(),J=0,$=setInterval((function(){if(1===J)return clearInterval($),Z.classList.add("is-hidden"),void tt.classList.remove("is-hidden");var t=Date.now();J=Number(11-((t-W)/1e3).toFixed()),Z.textContent=J}),1e3),tt.addEventListener("click",(function(){Q.classList.add("is-hidden")})),i("7SdJ7");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT");var et=i("8MBJY"),nt=i("a2hTj"),rt=(s=i("2TvXO"),i("dIxxU")),it=function(){"use strict";function e(){t(et)(this,e),this.searchQuery="",this.page=1}return t(nt)(e,[{key:"getFilm",value:function(){var e=this;return t(a)(t(s).mark((function n(){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("c8ef48bae82b60cf66a4f0e6e3dd153e","&language=en-US&query=").concat(e.searchQuery,"&page=").concat(e.page,"&include_adult=false"),t.prev=1,t.next=4,rt.get(r);case 4:return i=t.sent,t.abrupt("return",i);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),e}();function at(t){return st.apply(this,arguments)}function st(){return(st=t(a)(t(s).mark((function e(n){var r,i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new it).query=n,t.next=4,r.getFilm();case 4:return i=t.sent,a=i.data.results,t.abrupt("return",a);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var ot=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:10770,name:"TV Movie"}];function ut(t,e){var n=[],r="";t.filter((function(t){t.id===e&&n.push(t.name)}));var i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r+=" ".concat(c)}}catch(t){a=!0,s=t}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return r}var ct;function lt(e){return e.map((function(e){var n=e.id,r=e.original_title,i=e.title,a=e.genre_ids,s=e.poster_path,o=e.backdrop_path,u=e.release_date,c="https://image.tmdb.org/t/p/w500",l=a.map((function(t){return ut(ot,t)}));return s||o||(c=t(ct),s="",o=""),{filmId:n,urlImg:"".concat(c).concat(s||o),title:r||i,ganres:l.length>=3?"".concat(l[0],", ").concat(l[1],", Other"):l.join(", ")||"Film",relisYer:(u||"XXXX").slice(0,4)}}))}ct=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("41aTV");var ht={text:document.querySelector(".header_container_line"),galleryList:document.querySelector(".gallery-list"),form:document.querySelector(".home-header_search"),input:document.querySelector(".home-header_search_input"),btn:document.querySelector(".home-header_search_button"),backdropSpinnerRef:document.querySelector(".backdrop-spinner")},ft=(L=i("l5bVx"),t(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var s,o=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":t(L)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>"},useData:!0}));function pt(t){var e=t.map((function(t){return ft(t)})).join("");ht.galleryList.innerHTML=e}E=i("13upn"),M=i("jtBSM");function dt(){return(dt=t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),ht.input.addEventListener("input",gt),""!==(r=n.currentTarget.elements.searchQuery.value)){t.next=6;break}return vt(),t.abrupt("return");case 6:return(0,E.spinnerOn)(),t.next=9,at(r);case 9:if(i=t.sent,(0,E.spinnerOff)(),0!==i.length){t.next=14;break}return vt(),t.abrupt("return");case 14:(0,M.setResultData)(i),pt(lt(i));case 17:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function vt(){ht.text.style.display="block",ht.text.textContent="Search result not successful. Enter the correct movie name and"}function gt(t){ht.text.style.display="none"}ht.form.addEventListener("submit",(function(t){return dt.apply(this,arguments)})),i("13upn"),i("6SrrD"),i("74hJy"),i("2Eauc"),function(){var t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)}();a=i("bpxeT"),s=i("2TvXO"),T=i("h6c0i");var yt,mt=i("6Urw1"),bt=(a=i("bpxeT"),et=i("8MBJY"),nt=i("a2hTj"),i("hKHmD")),kt=i("1t1Wn"),wt=(s=i("2TvXO"),i("MjY8E")),xt=i("kZfxc"),Et=i("2xDiJ"),Tt=i("6ExWU"),It=(a=i("bpxeT"),bt=i("hKHmD"),i("8nrFW")),St=(s=i("2TvXO"),wt=i("MjY8E"),Tt=i("6ExWU"),Et=i("2xDiJ"),i("ajgRO")),_t="@firebase/installations",At="0.5.10",Ct=1e4,Lt="w:".concat(At),Dt="FIS_v2",Rt=36e5,Nt=(yt={},t(bt)(yt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(bt)(yt,"not-registered","Firebase Installation is not registered."),t(bt)(yt,"installation-not-found","Firebase Installation not found."),t(bt)(yt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(bt)(yt,"app-offline","Could not process request. Application offline."),t(bt)(yt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),yt),Ot=new(0,Et.ErrorFactory)("installations","Installations",Nt);function Pt(t){return t instanceof Et.FirebaseError&&t.code.includes("request-failed")}
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
 */function Mt(t){var e=t.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(e,"/installations")}function jt(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function Ft(t,e){return Ut.apply(this,arguments)}function Ut(){return(Ut=t(a)(t(s).mark((function e(n,r){var i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.json();case 2:return i=t.sent,a=i.error,t.abrupt("return",Ot.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function qt(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Bt(t,e){var n=e.refreshToken,r=qt(t);return r.append("Authorization",function(t){return"".concat(Dt," ").concat(t)}(n)),r}function Ht(t){return Vt.apply(this,arguments)}function Vt(){return(Vt=t(a)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:if(!((r=t.sent).status>=500&&r.status<600)){t.next=5;break}return t.abrupt("return",n());case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Xt(t,e){return Kt.apply(this,arguments)}function Kt(){return(Kt=
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
t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l,h,f,p,d,v,g;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,u=Mt(i),c=qt(i),!(l=a.getImmediate({optional:!0}))){t.next=9;break}return t.next=7,l.getHeartbeatsHeader();case 7:(h=t.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:o,authVersion:Dt,appId:i.appId,sdkVersion:Lt},p={method:"POST",headers:c,body:JSON.stringify(f)},t.next=13,Ht((function(){return fetch(u,p)}));case 13:if(!(d=t.sent).ok){t.next=22;break}return t.next=17,d.json();case 17:return v=t.sent,g={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:jt(v.authToken)},t.abrupt("return",g);case 22:return t.next=24,Ft("Create Installation",d);case 24:throw t.sent;case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}
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
 */function zt(t){return new Promise((function(e){setTimeout(e,t)}))}
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
var Yt=/^[cdef][\w-]{21}$/;function Gt(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t(It)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(e);return Yt.test(n)?n:""}catch(t){return""}}function Wt(t){return"".concat(t.appName,"!").concat(t.appId)}
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
 */var Jt=new Map;function $t(t,e){var n=Wt(t);Qt(n,e),function(t,e){var n=te();n&&n.postMessage({key:t,fid:e});ee()}(n,e)}function Qt(t,e){var n=Jt.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){(0,s.value)(e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}}var Zt=null;function te(){return!Zt&&"BroadcastChannel"in self&&((Zt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){Qt(t.data.key,t.data.fid)}),Zt}function ee(){0===Jt.size&&Zt&&(Zt.close(),Zt=null)}
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
 */var ne="firebase-installations-store",re=null;function ie(){return re||(re=(0,St.openDB)("firebase-installations-database",1,{upgrade:function(t,e){if(0===e)t.createObjectStore(ne)}})),re}function ae(t,e){return se.apply(this,arguments)}function se(){return(se=t(a)(t(s).mark((function e(n,r){var i,a,o,u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Wt(n),t.next=3,ie();case 3:return a=t.sent,o=a.transaction(ne,"readwrite"),u=o.objectStore(ne),t.next=8,u.get(i);case 8:return c=t.sent,t.next=11,u.put(r,i);case 11:return t.next=13,o.done;case 13:return c&&c.fid===r.fid||$t(n,r.fid),t.abrupt("return",r);case 15:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function oe(t){return ue.apply(this,arguments)}function ue(){return(ue=t(a)(t(s).mark((function e(n){var r,i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Wt(n),t.next=3,ie();case 3:return i=t.sent,a=i.transaction(ne,"readwrite"),t.next=7,a.objectStore(ne).delete(r);case 7:return t.next=9,a.done;case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ce(t,e){return le.apply(this,arguments)}function le(){return(le=t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Wt(n),t.next=3,ie();case 3:return a=t.sent,o=a.transaction(ne,"readwrite"),u=o.objectStore(ne),t.next=8,u.get(i);case 8:if(c=t.sent,void 0!==(l=r(c))){t.next=15;break}return t.next=13,u.delete(i);case 13:t.next=17;break;case 15:return t.next=17,u.put(l,i);case 17:return t.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||$t(n,l.fid),t.abrupt("return",l);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function he(t){return fe.apply(this,arguments)}function fe(){return(fe=
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
t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ce(n.appConfig,(function(t){var e=pe(t),i=de(n,e);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=t.sent).fid){t.next=9;break}return t.next=7,r;case 7:return t.t0=t.sent,t.abrupt("return",{installationEntry:t.t0});case 9:return t.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function pe(t){return be(t||{fid:Gt(),registrationStatus:0})}function de(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(Ot.create("app-offline"))};var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return ve.apply(this,arguments)}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ge(t)}:{installationEntry:e}}function ve(){return(ve=t(a)(t(s).mark((function e(n,r){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Xt(n,r);case 3:return i=t.sent,t.abrupt("return",ae(n.appConfig,i));case 7:if(t.prev=7,t.t0=t.catch(0),!Pt(t.t0)||409!==t.t0.customData.serverCode){t.next=14;break}return t.next=12,oe(n.appConfig);case 12:t.next=16;break;case 14:return t.next=16,ae(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw t.t0;case 17:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ge(t){return ye.apply(this,arguments)}function ye(){return(ye=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(n.appConfig);case 2:r=t.sent;case 3:if(1!==r.registrationStatus){t.next=11;break}return t.next=6,zt(100);case 6:return t.next=8,me(n.appConfig);case 8:r=t.sent,t.next=3;break;case 11:if(0!==r.registrationStatus){t.next=22;break}return t.next=14,he(n);case 14:if(i=t.sent,a=i.installationEntry,!(o=i.registrationPromise)){t.next=21;break}return t.abrupt("return",o);case 21:return t.abrupt("return",a);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function me(t){return ce(t,(function(t){if(!t)throw Ot.create("installation-not-found");return be(t)}))}function be(t){return 1===(e=t).registrationStatus&&e.registrationTime+Ct<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function ke(t,e){return we.apply(this,arguments)}function we(){return(we=
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
t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l,h,f,p,d,v;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=xe(i,r),u=Bt(i,r),!(c=a.getImmediate({optional:!0}))){t.next=9;break}return t.next=7,c.getHeartbeatsHeader();case 7:(l=t.sent)&&u.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:Lt,appId:i.appId}},f={method:"POST",headers:u,body:JSON.stringify(h)},t.next=13,Ht((function(){return fetch(o,f)}));case 13:if(!(p=t.sent).ok){t.next=22;break}return t.next=17,p.json();case 17:return d=t.sent,v=jt(d),t.abrupt("return",v);case 22:return t.next=24,Ft("Generate Auth Token",p);case 24:throw t.sent;case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function xe(t,e){var n=e.fid;return"".concat(Mt(t),"/").concat(n,"/authTokens:generate")}function Ee(t){return Te.apply(this,arguments)}function Te(){return Te=
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
t(a)(t(s).mark((function e(n){var r,i,a,o,u=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],t.next=4,ce(n.appConfig,(function(t){if(!Le(t))throw Ot.create("not-registered");var e=t.authToken;if(!r&&De(e))return t;if(1===e.requestStatus)return i=Ie(n,r),t;if(!navigator.onLine)throw Ot.create("app-offline");var a=Re(t);return i=Ae(n,a),a}));case 4:if(a=t.sent,!i){t.next=11;break}return t.next=8,i;case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=a.authToken;case 12:return o=t.t0,t.abrupt("return",o);case 14:case"end":return t.stop()}}),e)}))),Te.apply(this,arguments)}function Ie(t,e){return Se.apply(this,arguments)}function Se(){return(Se=t(a)(t(s).mark((function e(n,r){var i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(n.appConfig);case 2:i=t.sent;case 3:if(1!==i.authToken.requestStatus){t.next=11;break}return t.next=6,zt(100);case 6:return t.next=8,_e(n.appConfig);case 8:i=t.sent,t.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){t.next=16;break}return t.abrupt("return",Ee(n,r));case 16:return t.abrupt("return",a);case 17:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function _e(t){return ce(t,(function(t){if(!Le(t))throw Ot.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+Ct<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}function Ae(t,e){return Ce.apply(this,arguments)}function Ce(){return(Ce=t(a)(t(s).mark((function e(n,r){var i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ke(n,r);case 3:return i=t.sent,a=Object.assign(Object.assign({},r),{authToken:i}),t.next=7,ae(n.appConfig,a);case 7:return t.abrupt("return",i);case 10:if(t.prev=10,t.t0=t.catch(0),!Pt(t.t0)||401!==t.t0.customData.serverCode&&404!==t.t0.customData.serverCode){t.next=17;break}return t.next=15,oe(n.appConfig);case 15:t.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),t.next=20,ae(n.appConfig,o);case 20:throw t.t0;case 21:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Le(t){return void 0!==t&&2===t.registrationStatus}function De(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Rt}(t)}function Re(t){var e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ne(){return(Ne=
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
t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n,t.next=3,he(r);case 3:return i=t.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):Ee(r).catch(console.error),t.abrupt("return",a.fid);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Oe(){return Oe=
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
t(a)(t(s).mark((function e(n){var r,i,a,o=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,t.next=4,Pe(i);case 4:return t.next=6,Ee(i,r);case 6:return a=t.sent,t.abrupt("return",a.token);case 8:case"end":return t.stop()}}),e)}))),Oe.apply(this,arguments)}function Pe(t){return Me.apply(this,arguments)}function Me(){return(Me=t(a)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he(n);case 2:if(!(r=t.sent.registrationPromise)){t.next=6;break}return t.next=6,r;case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function je(t){return Ot.create("missing-app-config-values",{valueName:t})}
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
 */var Fe="installations",Ue=function(t){var e=t.getProvider("app").getImmediate(),n=
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
function(t){if(!t||!t.options)throw je("App Configuration");if(!t.name)throw je("App Name");var e=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var s=i.value;if(!t.options[s])throw je(s)}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:(0,wt._getProvider)(e,"heartbeat"),_delete:function(){return Promise.resolve()}}},qe=function(t){var e=t.getProvider("app").getImmediate(),n=(0,wt._getProvider)(e,Fe).getImmediate(),r={getId:function(){return function(t){return Ne.apply(this,arguments)}(n)},getToken:function(t){return function(t){return Oe.apply(this,arguments)}(n,t)}};return r};(0,wt._registerComponent)(new(0,Tt.Component)(Fe,Ue,"PUBLIC")),(0,wt._registerComponent)(new(0,Tt.Component)("installations-internal",qe,"PRIVATE")),(0,wt.registerVersion)(_t,At),(0,wt.registerVersion)(_t,At,"esm2017");
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
var Be,He="analytics",Ve=6e4,Xe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ke="https://www.googletagmanager.com/gtag/js",ze=new(0,xt.Logger)("@firebase/analytics");
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
function Ye(t){return Promise.all(t.map((function(t){return t.catch((function(t){return t}))})))}function Ge(t,e){var n=document.createElement("script");n.src="".concat(Ke,"?l=").concat(t,"&id=").concat(e),n.async=!0,document.head.appendChild(n)}function We(t,e,n,r,i,a){return Je.apply(this,arguments)}function Je(){return(Je=t(a)(t(s).mark((function e(n,r,i,a,o,u){var c,l,h;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a[o],t.prev=1,!c){t.next=7;break}return t.next=5,r[c];case 5:t.next=14;break;case 7:return t.next=9,Ye(i);case 9:if(l=t.sent,!(h=l.find((function(t){return t.measurementId===o})))){t.next=14;break}return t.next=14,r[h.appId];case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),ze.error(t.t0);case 19:n("config",o,u);case 20:case"end":return t.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function $e(t,e,n,r,i){return Qe.apply(this,arguments)}function Qe(){return(Qe=t(a)(t(s).mark((function e(n,r,i,a,o){var u,c,l,h,f,p,d,v,g,y,m;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u=[],!o||!o.send_to){t.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),t.next=7,Ye(i);case 7:l=t.sent,h=!0,f=!1,p=void 0,t.prev=9,d=c[Symbol.iterator]();case 11:if(h=(v=d.next()).done){t.next=24;break}if(g=v.value,y=l.find((function(t){return t.measurementId===g})),!(m=y&&r[y.appId])){t.next=19;break}u.push(m),t.next=21;break;case 19:return u=[],t.abrupt("break",24);case 21:h=!0,t.next=11;break;case 24:t.next=30;break;case 26:t.prev=26,t.t0=t.catch(9),f=!0,p=t.t0;case 30:t.prev=30,t.prev=31,h||null==d.return||d.return();case 33:if(t.prev=33,!f){t.next=36;break}throw p;case 36:return t.finish(33);case 37:return t.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),t.next=41,Promise.all(u);case 41:n("event",a,o||{}),t.next=47;break;case 44:t.prev=44,t.t1=t.catch(0),ze.error(t.t1);case 47:case"end":return t.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Ze(e,n,r,i,o){var u=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(u=window[o]),window[o]=function(e,n,r,i){function o(){return(o=t(a)(t(s).mark((function a(o,u,c){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,$e(e,n,r,u,c);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,We(e,n,r,i,u,c);case 9:t.next=12;break;case 11:e("set",u);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),ze.error(t.t0);case 17:case"end":return t.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(t,e,n){return o.apply(this,arguments)}}(u,e,n,r),{gtagCore:u,wrappedGtag:window[o]}}function tn(){var t=window.document.getElementsByTagName("script"),e=!0,n=!1,r=void 0;try{for(var i,a=Object.values(t)[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var s=i.value;if(s.src&&s.src.includes(Ke))return s}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var en=(Be={},t(bt)(Be,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(bt)(Be,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(bt)(Be,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(bt)(Be,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(bt)(Be,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(bt)(Be,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(bt)(Be,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(bt)(Be,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(bt)(Be,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(bt)(Be,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Be),nn=new(0,Et.ErrorFactory)("analytics","Analytics",en),rn=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(et)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(nt)(e,[{key:"getThrottleMetadata",value:function(t){return this.throttleMetadata[t]}},{key:"setThrottleMetadata",value:function(t,e){this.throttleMetadata[t]=e}},{key:"deleteThrottleMetadata",value:function(t){delete this.throttleMetadata[t]}}]),e}(),an=new rn;function sn(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}function on(t){return un.apply(this,arguments)}function un(){return(un=t(a)(t(s).mark((function e(n){var r,i,a,o,u,c,l,h;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:sn(a)},u=Xe.replace("{app-id}",i),t.next=6,fetch(u,o);case 6:if(200===(c=t.sent).status||304===c.status){t.next=19;break}return l="",t.prev=9,t.next=12,c.json();case 12:h=t.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(9);case 18:throw nn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return t.abrupt("return",c.json());case 20:case"end":return t.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function cn(t){return ln.apply(this,arguments)}function ln(){return ln=t(a)(t(s).mark((function e(n){var r,i,o,u,c,l,h,f,p=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:an,i=p.length>2?p[2]:void 0,o=n.options,u=o.appId,c=o.apiKey,l=o.measurementId,u){e.next=4;break}throw nn.create("no-app-id");case 4:if(c){e.next=8;break}if(!l){e.next=7;break}return e.abrupt("return",{measurementId:l,appId:u});case 7:throw nn.create("no-api-key");case 8:return h=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new vn,setTimeout(t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.abort();case 1:case"end":return t.stop()}}),e)}))),void 0!==i?i:Ve),e.abrupt("return",hn({appId:u,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return e.stop()}}),e)}))),ln.apply(this,arguments)}function hn(t,e,n){return fn.apply(this,arguments)}function fn(){return fn=t(a)(t(s).mark((function e(n,r,i){var a,o,u,c,l,h,f,p,d=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,u=d.length>3&&void 0!==d[3]?d[3]:an,c=n.appId,l=n.measurementId,t.prev=2,t.next=5,pn(i,a);case 5:t.next=13;break;case 7:if(t.prev=7,t.t0=t.catch(2),!l){t.next=12;break}return ze.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(t.t0.message,"]")),t.abrupt("return",{appId:c,measurementId:l});case 12:throw t.t0;case 13:return t.prev=13,t.next=16,on(n);case 16:return h=t.sent,u.deleteThrottleMetadata(c),t.abrupt("return",h);case 21:if(t.prev=21,t.t1=t.catch(13),dn(t.t1)){t.next=31;break}if(u.deleteThrottleMetadata(c),!l){t.next=30;break}return ze.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(t.t1.message,"]")),t.abrupt("return",{appId:c,measurementId:l});case 30:throw t.t1;case 31:return f=503===Number(t.t1.customData.httpStatus)?(0,Et.calculateBackoffMillis)(o,u.intervalMillis,30):(0,Et.calculateBackoffMillis)(o,u.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:o+1},u.setThrottleMetadata(c,p),ze.debug("Calling attemptFetch again in ".concat(f," millis")),t.abrupt("return",hn(n,p,i,u));case 36:case"end":return t.stop()}}),e,null,[[2,7],[13,21]])}))),fn.apply(this,arguments)}function pn(t,e){return new Promise((function(n,r){var i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener((function(){clearTimeout(a),r(nn.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function dn(t){if(!(t instanceof Et.FirebaseError&&t.customData))return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}var vn=function(){"use strict";function e(){t(et)(this,e),this.listeners=[]}return t(nt)(e,[{key:"addEventListener",value:function(t){this.listeners.push(t)}},{key:"abort",value:function(){this.listeners.forEach((function(t){return t()}))}}]),e}();function gn(){return yn.apply(this,arguments)}function yn(){return(yn=
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
t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,Et.isIndexedDBAvailable)()){t.next=5;break}return ze.warn(nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),t.abrupt("return",!1);case 5:return t.prev=5,t.next=8,(0,Et.validateIndexedDBOpenable)();case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(5),ze.warn(nn.create("indexeddb-unavailable",{errorInfo:t.t0}).message),t.abrupt("return",!1);case 14:return t.abrupt("return",!0);case 15:case"end":return t.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function mn(){return(mn=t(a)(t(s).mark((function e(n,r,i,a,o,u,c){var l,h,f,p,d,v,g;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(h=cn(n)).then((function(t){i[t.measurementId]=t.appId,n.options.measurementId&&t.measurementId!==n.options.measurementId&&ze.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(t.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(t){return ze.error(t)})),r.push(h),f=gn().then((function(t){return t?a.getId():void 0})),e.t0=t(kt),e.next=8,Promise.all([h,f]);case 8:return e.t1=e.sent,p=(0,e.t0)(e.t1,2),d=p[0],v=p[1],tn()||Ge(u,d.measurementId),o("js",new Date),(g=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",g.update=!0,null!=v&&(g.firebase_id=v),o("config",d.measurementId,g),e.abrupt("return",d.measurementId);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var bn,kn,wn=function(){"use strict";function e(n){t(et)(this,e),this.app=n}return t(nt)(e,[{key:"_delete",value:function(){return delete xn[this.app.options.appId],Promise.resolve()}}]),e}(),xn={},En=[],Tn={},In="dataLayer",Sn="gtag",_n=!1;function An(t,e,n){!function(){var t=[];if((0,Et.isBrowserExtension)()&&t.push("This is a browser extension environment."),(0,Et.areCookiesEnabled)()||t.push("Cookies are not available."),t.length>0){var e=t.map((function(t,e){return"(".concat(e+1,") ").concat(t)})).join(" "),n=nn.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}();var r,i,a=t.options.appId;if(!a)throw nn.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw nn.create("no-api-key");ze.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(t.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=xn[a])throw nn.create("already-exists",{id:a});if(!_n){r=In,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var s=Ze(xn,En,Tn,In,Sn),o=s.wrappedGtag,u=s.gtagCore;kn=o,bn=u,_n=!0}return xn[a]=function(t,e,n,r,i,a,s){return mn.apply(this,arguments)}(t,En,Tn,e,bn,In,n),new wn(t)}function Cn(){return(Cn=
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
t(a)(t(s).mark((function e(n,r,i,a,o){var u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o||!o.global){t.next=5;break}return n("event",i,a),t.abrupt("return");case 5:return t.next=7,r;case 7:u=t.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Ln(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,wt._getProvider)(t,He);if(n.isInitialized()){var r=n.getImmediate();if((0,Et.deepEqual)(e,n.getOptions()))return r;throw nn.create("already-initialized")}var i=n.initialize({options:e});return i}function Dn(t,e,n,r){t=(0,Et.getModularInstance)(t),function(t,e,n,r,i){return Cn.apply(this,arguments)}(kn,xn[t.app.options.appId],e,n,r).catch((function(t){return ze.error(t)}))}var Rn="@firebase/analytics",Nn="0.7.10";(0,wt._registerComponent)(new(0,Tt.Component)(He,(function(t,e){var n=e.options;return An(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),(0,wt._registerComponent)(new(0,Tt.Component)("analytics-internal",(function(t){try{var e=t.getProvider(He).getImmediate();return{logEvent:function(t,n,r){return Dn(e,t,n,r)}}}catch(t){throw nn.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),(0,wt.registerVersion)(Rn,Nn),(0,wt.registerVersion)(Rn,Nn,"esm2017");var On,Pn=i("3SEMc"),Mn=(a=i("bpxeT"),et=i("8MBJY"),i("ge8co"),nt=i("a2hTj"),i("jh8P3")),jn=i("fVNic"),Fn=i("eYQtU"),Un=i("jmhxu"),qn=(kt=i("1t1Wn"),It=i("8nrFW"),L=i("l5bVx"),i("2MbLg")),Bn=(s=i("2TvXO"),wt=i("MjY8E"),Tt=i("6ExWU"),xt=i("kZfxc"),Et=i("2xDiJ"),et=i("8MBJY"),nt=i("a2hTj"),Mn=i("jh8P3"),jn=i("fVNic"),Fn=i("eYQtU"),L=i("l5bVx"),qn=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),Hn={},Vn=Vn||{},Xn=Bn||self;function Kn(){}function zn(e){var n=void 0===e?"undefined":t(L)(e);return"array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length}function Yn(e){var n=void 0===e?"undefined":t(L)(e);return"object"==n&&null!=e||"function"==n}var Gn="closure_uid_"+(1e9*Math.random()>>>0),Wn=0;function Jn(t,e,n){return t.call.apply(t.bind,arguments)}function $n(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Qn(t,e,n){return(Qn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Jn:$n).apply(null,arguments)}function Zn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function tr(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return e.prototype[n].apply(t,i)}}function er(){this.s=this.s,this.o=this.o}var nr={};er.prototype.s=!1,er.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Gn)&&t[Gn]||(t[Gn]=++Wn)}(this);delete nr[t]}},er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var rr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ir=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,a=0;a<r;a++)a in i&&e.call(n,i[a],a,t)};function ar(t){return Array.prototype.concat.apply([],arguments)}function sr(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function or(t){return/^[\s\xa0]*$/.test(t)}var ur,cr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lr(t,e){return-1!=t.indexOf(e)}function hr(t,e){return t<e?-1:t>e?1:0}t:{var fr=Xn.navigator;if(fr){var pr=fr.userAgent;if(pr){ur=pr;break t}}ur=""}function dr(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function vr(t){var e={};for(var n in t)e[n]=t[n];return e}var gr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yr(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var a=0;a<gr.length;a++)n=gr[a],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function mr(t){return mr[" "](t),t}mr[" "]=Kn;var br,kr,wr=lr(ur,"Opera"),xr=lr(ur,"Trident")||lr(ur,"MSIE"),Er=lr(ur,"Edge"),Tr=Er||xr,Ir=lr(ur,"Gecko")&&!(lr(ur.toLowerCase(),"webkit")&&!lr(ur,"Edge"))&&!(lr(ur,"Trident")||lr(ur,"MSIE"))&&!lr(ur,"Edge"),Sr=lr(ur.toLowerCase(),"webkit")&&!lr(ur,"Edge");function _r(){var t=Xn.document;return t?t.documentMode:void 0}t:{var Ar="",Cr=(kr=ur,Ir?/rv:([^\);]+)(\)|;)/.exec(kr):Er?/Edge\/([\d\.]+)/.exec(kr):xr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(kr):Sr?/WebKit\/(\S+)/.exec(kr):wr?/(?:Version)[ \/]?(\S+)/.exec(kr):void 0);if(Cr&&(Ar=Cr?Cr[1]:""),xr){var Lr=_r();if(null!=Lr&&Lr>parseFloat(Ar)){br=String(Lr);break t}}br=Ar}var Dr,Rr={};function Nr(){return function(t){var e=Rr;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=cr(String(br)).split("."),n=cr("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var a=e[i]||"",s=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break;t=hr(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||hr(0==a[2].length,0==s[2].length)||hr(a[2],s[2]),a=a[3],s=s[3]}while(0==t)}return 0<=t}))}if(Xn.document&&xr){var Or=_r();Dr=Or||(parseInt(br,10)||void 0)}else Dr=void 0;var Pr=Dr,Mr=function(){if(!Xn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Xn.addEventListener("test",Kn,e),Xn.removeEventListener("test",Kn,e)}catch(t){}return t}();function jr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Fr(t,e){if(jr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ir){t:{try{mr(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ur[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fr.Z.h.call(this)}}jr.prototype.h=function(){this.defaultPrevented=!0},tr(Fr,jr);var Ur={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qr="closure_listenable_"+(1e6*Math.random()|0),Br=0;function Hr(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Br,this.ca=this.fa=!1}function Vr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Xr(t){this.src=t,this.g={},this.h=0}function Kr(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],a=rr(i,e);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(Vr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function zr(t,e,n,r){for(var i=0;i<t.length;++i){var a=t[i];if(!a.ca&&a.listener==e&&a.capture==!!n&&a.ia==r)return i}return-1}Xr.prototype.add=function(t,e,n,r,i){var a=t.toString();(t=this.g[a])||(t=this.g[a]=[],this.h++);var s=zr(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):((e=new Hr(e,this.src,a,!!r,i)).fa=n,t.push(e)),e};var Yr="closure_lm_"+(1e6*Math.random()|0),Gr={};function Wr(t,e,n,r,i){if(r&&r.once)return $r(t,e,n,r,i);if(Array.isArray(e)){for(var a=0;a<e.length;a++)Wr(t,e[a],n,r,i);return null}return n=ii(n),t&&t[qr]?t.N(e,n,Yn(r)?!!r.capture:!!r,i):Jr(t,e,n,!1,r,i)}function Jr(t,e,n,r,i,a){if(!e)throw Error("Invalid event type");var s=Yn(i)?!!i.capture:!!i,o=ni(t);if(o||(t[Yr]=o=new Xr(t)),(n=o.add(e,n,r,s,a)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=ei;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Mr||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ti(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function $r(t,e,n,r,i){if(Array.isArray(e)){for(var a=0;a<e.length;a++)$r(t,e[a],n,r,i);return null}return n=ii(n),t&&t[qr]?t.O(e,n,Yn(r)?!!r.capture:!!r,i):Jr(t,e,n,!0,r,i)}function Qr(t,e,n,r,i){if(Array.isArray(e))for(var a=0;a<e.length;a++)Qr(t,e[a],n,r,i);else r=Yn(r)?!!r.capture:!!r,n=ii(n),t&&t[qr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=zr(a=t.g[e],n,r,i))&&(Vr(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[e],t.h--)))):t&&(t=ni(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zr(e,n,r,i)),(n=-1<t?e[t]:null)&&Zr(n))}function Zr(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[qr])Kr(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ti(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ni(e))?(Kr(n,t),0==n.h&&(n.src=null,e[Yr]=null)):Vr(t)}}}function ti(t){return t in Gr?Gr[t]:Gr[t]="on"+t}function ei(t,e){if(t.ca)t=!0;else{e=new Fr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Zr(t),t=n.call(r,e)}return t}function ni(t){return(t=t[Yr])instanceof Xr?t:null}var ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function ii(t){return"function"==typeof t?t:(t[ri]||(t[ri]=function(e){return t.handleEvent(e)}),t[ri])}function ai(){er.call(this),this.i=new Xr(this),this.P=this,this.I=null}function si(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new jr(e,t);else if(e instanceof jr)e.target=e.target||t;else{var i=e;yr(e=new jr(r,t),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var s=e.g=n[a];i=oi(s,r,!0,e)&&i}if(i=oi(s=e.g=t,r,!0,e)&&i,i=oi(s,r,!1,e)&&i,n)for(a=0;a<n.length;a++)i=oi(s=e.g=n[a],r,!1,e)&&i}function oi(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,a=0;a<e.length;++a){var s=e[a];if(s&&!s.ca&&s.capture==n){var o=s.listener,u=s.ia||s.src;s.fa&&Kr(t.i,s),i=!1!==o.call(u,r)&&i}}return i&&!r.defaultPrevented}tr(ai,er),ai.prototype[qr]=!0,ai.prototype.removeEventListener=function(t,e,n,r){Qr(this,t,e,n,r)},ai.prototype.M=function(){if(ai.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Vr(n[r]);delete e.g[t],e.h--}}this.I=null},ai.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ai.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var ui=Xn.JSON.stringify;function ci(){var t=yi,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var li,hi=function(){"use strict";function e(){t(et)(this,e),this.h=this.g=null}return t(nt)(e,[{key:"add",value:function(t,e){var n=fi.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),fi=new(function(){"use strict";function e(n,r){t(et)(this,e),this.i=n,this.j=r,this.h=0,this.g=null}return t(nt)(e,[{key:"get",value:function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}]),e}())((function(){return new pi}),(function(t){return t.reset()})),pi=function(){"use strict";function e(){t(et)(this,e),this.next=this.g=this.h=null}return t(nt)(e,[{key:"set",value:function(t,e){this.h=t,this.g=e,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function di(t){Xn.setTimeout((function(){throw t}),0)}function vi(t,e){li||function(){var t=Xn.Promise.resolve(void 0);li=function(){t.then(mi)}}(),gi||(li(),gi=!0),yi.add(t,e)}var gi=!1,yi=new hi;function mi(){for(var t;t=ci();){try{t.h.call(t.g)}catch(t){di(t)}var e=fi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gi=!1}function bi(t,e){ai.call(this),this.h=t||1,this.g=e||Xn,this.j=Qn(this.kb,this),this.l=Date.now()}function ki(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function wi(t,e,n){if("function"==typeof t)n&&(t=Qn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Qn(t.handleEvent,t)}return 2147483647<Number(e)?-1:Xn.setTimeout(t,e||0)}function xi(t){t.g=wi((function(){t.g=null,t.i&&(t.i=!1,xi(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}tr(bi,ai),(On=bi.prototype).da=!1,On.S=null,On.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),si(this,"tick"),this.da&&(ki(this),this.start()))}},On.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},On.M=function(){bi.Z.M.call(this),ki(this),delete this.g};var Ei=function(e){"use strict";t(Fn)(r,e);var n=t(qn)(r);function r(e,i){var a;return t(et)(this,r),(a=n.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return t(nt)(r,[{key:"l",value:function(t){this.h=arguments,this.g?this.i=!0:xi(this)}},{key:"M",value:function(){t(Mn)(t(jn)(r.prototype),"M",this).call(this),this.g&&(Xn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(er);function Ti(t){er.call(this),this.h=t,this.g={}}tr(Ti,er);var Ii=[];function Si(t,e,n,r){Array.isArray(n)||(n&&(Ii[0]=n.toString()),n=Ii);for(var i=0;i<n.length;i++){var a=Wr(e,n[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}}function _i(t){dr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Zr(t)}),t),t.g={}}function Ai(){this.g=!0}function Ci(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var s=1;s<i.length;s++)i[s]=""}}}return ui(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ti.prototype.M=function(){Ti.Z.M.call(this),_i(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ai.prototype.Aa=function(){this.g=!1},Ai.prototype.info=function(){};var Li={},Di=null;function Ri(){return Di=Di||new ai}function Ni(t){jr.call(this,Li.Ma,t)}function Oi(t){var e=Ri();si(e,new Ni(e,t))}function Pi(t,e){jr.call(this,Li.STAT_EVENT,t),this.stat=e}function Mi(t){var e=Ri();si(e,new Pi(e,t))}function ji(t,e){jr.call(this,Li.Na,t),this.size=e}function Fi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Xn.setTimeout((function(){t()}),e)}Li.Ma="serverreachability",tr(Ni,jr),Li.STAT_EVENT="statevent",tr(Pi,jr),Li.Na="timingevent",tr(ji,jr);var Ui={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Bi(){}function Hi(t){return t.h||(t.h=t.i())}function Vi(){}Bi.prototype.h=null;var Xi,Ki={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zi(){jr.call(this,"d")}function Yi(){jr.call(this,"c")}function Gi(){}function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ti(this),this.P=$i,t=Tr?125:void 0,this.W=new bi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ji}function Ji(){this.i=null,this.g="",this.h=!1}tr(zi,jr),tr(Yi,jr),tr(Gi,Bi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Xi=new Gi;var $i=45e3,Qi={},Zi={};function ta(t,e,n){t.K=1,t.v=Ea(ya(e)),t.s=n,t.U=!0,ea(t,null)}function ea(t,e){t.F=Date.now(),aa(t),t.A=ya(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ma(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ji,t.g=js(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ei(Qn(t.Ia,t,t.g),t.O)),Si(t.V,t.g,"readystatechange",t.gb),e=t.H?vr(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Oi(1),function(t,e,n,r,i,a){t.info((function(){if(t.g)if(a)for(var s="",o=a.split("&"),u=0;u<o.length;u++){var c=o[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function na(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ra(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=ia(t,n))==Zi){4==e&&(t.o=4,Mi(14),i=!1),Ci(t.j,t.m,null,"[Incomplete Response]");break}if(r==Qi){t.o=4,Mi(15),Ci(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ci(t.j,t.m,r,null),la(t,r)}na(t)&&r!=Zi&&r!=Qi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Mi(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cs(e),e.L=!0,Mi(11))):(Ci(t.j,t.m,n,"[Invalid Chunked Response]"),ca(t),ua(t))}function ia(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Zi:(n=Number(e.substring(n,r)),isNaN(n)?Qi:(r+=1)+n>e.length?Zi:(e=e.substr(r,n),t.C=r+n,e))}function aa(t){t.Y=Date.now()+t.P,sa(t,t.P)}function sa(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Fi(Qn(t.eb,t),e)}function oa(t){t.B&&(Xn.clearTimeout(t.B),t.B=null)}function ua(t){0==t.l.G||t.I||Rs(t.l,t)}function ca(t){oa(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ki(t.W),_i(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function la(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Va(n.i,t)))if(n.I=t.N,!t.J&&Va(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ds(n),ks(n)}As(n),Mi(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Fi(Qn(n.ab,n),6e3));if(1>=Ha(n.i)&&n.ka){try{n.ka()}catch(a){}n.ka=void 0}}else Os(n,11)}else if((t.J||n.g==t)&&Ds(n),!or(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var a=i[e];if(n.U=a[0],a=a[1],2==n.G)if("c"==a[0]){n.J=a[1],n.la=a[2];var s=a[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var o=a[4];null!=o&&(n.za=o,n.h.info("SVER="+n.za));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=t.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(lr(l,"spdy")||lr(l,"quic")||lr(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Xa(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,xa(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var p=t;if((r=n).oa=Ms(r,r.H?r.la:null,r.W),p.J){Ka(r.i,p);var d=p,v=r.K;v&&d.setTimeout(v),d.B&&(oa(d),aa(d)),r.g=p}else _s(r);0<n.l.length&&Es(n)}else"stop"!=a[0]&&"close"!=a[0]||Os(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Os(n,7):bs(n):"noop"!=a[0]&&n.j&&n.j.wa(a),n.A=0)}Oi(4)}catch(a){}}function ha(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(zn(t)||"string"==typeof t)ir(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(zn(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(zn(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length;for(var a=0;a<i;a++)e.call(void 0,r[a],n&&n[a],t)}}function fa(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof fa)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function pa(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];da(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)da(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function da(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(On=Wi.prototype).setTimeout=function(t){this.P=t},On.gb=function(t){t=t.target;var e=this.L;e&&3==ds(t)?e.l():this.Ia(t)},On.Ia=function(t){try{if(t==this.g)t:{var e=ds(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||Tr||this.g&&(this.h.h||this.g.ga()||vs(this.g)))){this.I||4!=e||7==n||Oi(8==n||0>=r?3:2),oa(this);var i=this.g.ba();this.N=i;e:if(na(this)){var a=vs(this.g);t="";var s=a.length,o=4==ds(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ca(this),ua(this);var u="";break e}this.h.i=new Xn.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(a[n],{stream:o&&n==s-1});a.splice(0,s),this.h.g+=t,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,a,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+a+" "+s}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!or(c)){var h=c;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,Mi(12),ca(this),ua(this);break t}Ci(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,la(this,i)}this.U?(ra(this,e,u),Tr&&this.i&&3==e&&(Si(this.V,this.W,"tick",this.fb),this.W.start())):(Ci(this.j,this.m,u,null),la(this,u)),4==e&&ca(this),this.i&&!this.I&&(4==e?Rs(this.l,this):(this.i=!1,aa(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Mi(12)):(this.o=0,Mi(13)),ca(this),ua(this)}}}catch(e){}},On.fb=function(){if(this.g){var t=ds(this.g),e=this.g.ga();this.C<e.length&&(oa(this),ra(this,t,e),this.i&&4!=t&&aa(this))}},On.cancel=function(){this.I=!0,ca(this)},On.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Oi(3),Mi(17)),ca(this),this.o=2,ua(this)):sa(this,this.Y-t)},(On=fa.prototype).R=function(){pa(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},On.T=function(){return pa(this),this.g.concat()},On.get=function(t,e){return da(this.h,t)?this.h[t]:e},On.set=function(t,e){da(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},On.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],a=this.get(i);t.call(e,a,i,this)}};var va=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ga(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ga){this.g=void 0!==e?e:t.g,ma(this,t.j),this.s=t.s,ba(this,t.i),ka(this,t.m),this.l=t.l,e=t.h;var n=new Ra;n.i=e.i,e.g&&(n.g=new fa(e.g),n.h=e.h),wa(this,n),this.o=t.o}else t&&(n=String(t).match(va))?(this.g=!!e,ma(this,n[1]||"",!0),this.s=Ta(n[2]||""),ba(this,n[3]||"",!0),ka(this,n[4]),this.l=Ta(n[5]||"",!0),wa(this,n[6]||"",!0),this.o=Ta(n[7]||"")):(this.g=!!e,this.h=new Ra(null,this.g))}function ya(t){return new ga(t)}function ma(t,e,n){t.j=n?Ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ba(t,e,n){t.i=n?Ta(e,!0):e}function ka(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wa(t,e,n){e instanceof Ra?(t.h=e,function(t,e){e&&!t.j&&(Na(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Oa(this,e),Ma(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Ia(e,La)),t.h=new Ra(e,t.g))}function xa(t,e,n){t.h.set(e,n)}function Ea(t){return xa(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ia(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Sa),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sa(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ga.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ia(e,_a,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ia(e,_a,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ia(n,"/"==n.charAt(0)?Ca:Aa,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ia(n,Da)),t.join("")};var _a=/[#\/\?@]/g,Aa=/[#\?:]/g,Ca=/[#\?]/g,La=/[#\?@]/g,Da=/#/g;function Ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Na(t){t.g||(t.g=new fa,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var a=t[n].substring(0,r);i=t[n].substring(r+1)}else a=t[n];e(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Oa(t,e){Na(t),e=ja(t,e),da(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,da((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pa(t)))}function Pa(t,e){return Na(t),e=ja(t,e),da(t.g.h,e)}function Ma(t,e,n){Oa(t,e),0<n.length&&(t.i=null,t.g.set(ja(t,e),sr(n)),t.h+=n.length)}function ja(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(On=Ra.prototype).add=function(t,e){Na(this),this.i=null,t=ja(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},On.forEach=function(t,e){Na(this),this.g.forEach((function(n,r){ir(n,(function(n){t.call(e,n,r,this)}),this)}),this)},On.T=function(){Na(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],a=0;a<i.length;a++)n.push(e[r]);return n},On.R=function(t){Na(this);var e=[];if("string"==typeof t)Pa(this,t)&&(e=ar(e,this.g.get(ja(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ar(e,t[n])}return e},On.set=function(t,e){return Na(this),this.i=null,Pa(this,t=ja(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},On.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},On.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var a=0;a<r.length;a++){var s=i;""!==r[a]&&(s+="="+encodeURIComponent(String(r[a]))),t.push(s)}}return this.i=t.join("&")};var Fa=function e(n,r){"use strict";t(et)(this,e),this.h=n,this.g=r};function Ua(t){this.l=t||qa,Xn.PerformanceNavigationTiming?t=0<(t=Xn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Xn.g&&Xn.g.Ea&&Xn.g.Ea()&&Xn.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qa=10;function Ba(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ha(t){return t.h?1:t.g?t.g.size:0}function Va(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Xa(t,e){t.g?t.g.add(e):t.h=e}function Ka(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function za(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var e=t.i,n=!0,r=!1,i=void 0;try{for(var a,s=t.g.values()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;e=e.concat(o.D)}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return e}return sr(t.i)}function Ya(){}function Ga(){this.g=new Ya}function Wa(t,e,n){var r=n||"";try{ha(t,(function(t,n){var i=t;Yn(t)&&(i=ui(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Ja(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function $a(t){this.l=t.$b||null,this.j=t.ib||!1}function Qa(t,e){ai.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ua.prototype.cancel=function(){if(this.i=za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var t=!0,e=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.cancel()}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.g.clear()}},Ya.prototype.stringify=function(t){return Xn.JSON.stringify(t,void 0)},Ya.prototype.parse=function(t){return Xn.JSON.parse(t,void 0)},tr($a,Bi),$a.prototype.g=function(){return new Qa(this.l,this.j)},$a.prototype.i=function(t){return function(){return t}}({}),tr(Qa,ai);var Za=0;function ts(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function es(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ns(t)}function ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(On=Qa.prototype).open=function(t,e){if(this.readyState!=Za)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ns(this)},On.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Xn).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},On.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,es(this)),this.readyState=Za},On.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Xn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ts(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},On.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?es(this):ns(this),3==this.readyState&&ts(this)}},On.Ua=function(t){this.g&&(this.response=this.responseText=t,es(this))},On.Ta=function(t){this.g&&(this.response=t,es(this))},On.ha=function(){this.g&&es(this)},On.setRequestHeader=function(t,e){this.v.append(t,e)},On.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},On.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var rs=Xn.JSON.parse;function is(t){ai.call(this),this.headers=new fa,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=as,this.K=this.L=!1}tr(is,ai);var as="",ss=/^https?$/i,os=["POST","PUT"];function us(t){return"content-type"==t.toLowerCase()}function cs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ls(t),fs(t)}function ls(t){t.D||(t.D=!0,si(t,"complete"),si(t,"error"))}function hs(t){if(t.h&&void 0!==Vn&&(!t.C[1]||4!=ds(t)||2!=t.ba()))if(t.v&&4==ds(t))wi(t.Fa,0,t);else if(si(t,"readystatechange"),4==ds(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var a=String(t.H).match(va)[1]||null;if(!a&&Xn.self&&Xn.self.location){var s=Xn.self.location.protocol;a=s.substr(0,s.length-1)}i=!ss.test(a?a.toLowerCase():"")}e=i}if(e)si(t,"complete"),si(t,"success");else{t.m=6;try{var o=2<ds(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",ls(t)}}finally{fs(t)}}}function fs(t,e){if(t.g){ps(t);var n=t.g,r=t.C[0]?Kn:null;t.g=null,t.C=null,e||si(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function ps(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Xn.clearTimeout(t.A),t.A=null)}function ds(t){return t.g?t.g.readyState:0}function vs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case as:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function gs(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return dr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):xa(t,e,n))}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ms(t){this.za=0,this.l=[],this.h=new Ai,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ys("baseRetryDelayMs",5e3,t),this.$a=ys("retryDelaySeedMs",1e4,t),this.Ya=ys("forwardChannelMaxRetries",2,t),this.ra=ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ua(t&&t.concurrentRequestLimit),this.Ca=new Ga,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function bs(t){if(ws(t),3==t.G){var e=t.V++,n=ya(t.F);xa(n,"SID",t.J),xa(n,"RID",e),xa(n,"TYPE","terminate"),Is(t,n),(e=new Wi(t,t.h,e,void 0)).K=2,e.v=Ea(ya(n)),n=!1,Xn.navigator&&Xn.navigator.sendBeacon&&(n=Xn.navigator.sendBeacon(e.v.toString(),"")),!n&&Xn.Image&&((new Image).src=e.v,n=!0),n||(e.g=js(e.l,null),e.g.ea(e.v)),e.F=Date.now(),aa(e)}Ps(t)}function ks(t){t.g&&(Cs(t),t.g.cancel(),t.g=null)}function ws(t){ks(t),t.u&&(Xn.clearTimeout(t.u),t.u=null),Ds(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Xn.clearTimeout(t.m),t.m=null)}function xs(t,e){t.l.push(new Fa(t.Za++,e)),3==t.G&&Es(t)}function Es(t){Ba(t.i)||t.m||(t.m=!0,vi(t.Ha,t),t.C=0)}function Ts(t,e){var n;n=e?e.m:t.V++;var r=ya(t.F);xa(r,"SID",t.J),xa(r,"RID",n),xa(r,"AID",t.U),Is(t,r),t.o&&t.s&&gs(r,t.o,t.s),n=new Wi(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ss(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Xa(t.i,n),ta(n,r,e)}function Is(t,e){t.j&&ha({},(function(t,n){xa(e,n,t)}))}function Ss(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Qn(t.j.Oa,t.j,t):null;t:for(var i=t.l,a=-1;;){var s=["count="+n];-1==a?0<n?(a=i[0].h,s.push("ofs="+a)):a=0:s.push("ofs="+a);for(var o=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),o=!1;else try{Wa(l,s,"req"+c+"_")}catch(t){r&&r(l)}}if(o){r=s.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function _s(t){t.g||t.u||(t.Y=1,vi(t.Ga,t),t.A=0)}function As(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Fi(Qn(t.Ga,t),Ns(t,t.A)),t.A++,!0)}function Cs(t){null!=t.B&&(Xn.clearTimeout(t.B),t.B=null)}function Ls(t){t.g=new Wi(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ya(t.oa);xa(e,"RID","rpc"),xa(e,"SID",t.J),xa(e,"CI",t.N?"0":"1"),xa(e,"AID",t.U),Is(t,e),xa(e,"TYPE","xmlhttp"),t.o&&t.s&&gs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ea(ya(e)),n.s=null,n.U=!0,ea(n,t)}function Ds(t){null!=t.v&&(Xn.clearTimeout(t.v),t.v=null)}function Rs(t,e){var n=null;if(t.g==e){Ds(t),Cs(t),t.g=null;var r=2}else{if(!Va(t.i,e))return;n=e.D,Ka(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;si(r=Ri(),new ji(r,n,e,i)),Es(t)}else _s(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Ha(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Fi(Qn(t.Ha,t,e),Ns(t,t.C)),t.C++,0)))}(t,e)||2==r&&As(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Os(t,5);break;case 4:Os(t,10);break;case 3:Os(t,6);break;default:Os(t,2)}}function Ns(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Os(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=Qn(t.jb,t);n||(n=new ga("//www.google.com/images/cleardot.gif"),Xn.location&&"http"==Xn.location.protocol||ma(n,"https"),Ea(n)),function(t,e){var n=new Ai;if(Xn.Image){var r=new Image;r.onload=Zn(Ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zn(Ja,n,r,"TestLoadImage: error",!1,e),r.onabort=Zn(Ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zn(Ja,n,r,"TestLoadImage: timeout",!1,e),Xn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Mi(2);t.G=0,t.j&&t.j.va(e),Ps(t),ws(t)}function Ps(t){t.G=0,t.I=-1,t.j&&(0==za(t.i).length&&0==t.l.length||(t.i.i.length=0,sr(t.l),t.l.length=0),t.j.ua())}function Ms(t,e,n){var r=function(t){return t instanceof ga?ya(t):new ga(t,void 0)}(n);if(""!=r.i)e&&ba(r,e+"."+r.i),ka(r,r.m);else{var i=Xn.location;r=function(t,e,n,r){var i=new ga(null,void 0);return t&&ma(i,t),e&&ba(i,e),n&&ka(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&dr(t.aa,(function(t,e){xa(r,e,t)})),e=t.D,n=t.sa,e&&n&&xa(r,e,n),xa(r,"VER",t.ma),Is(t,r),r}function js(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new is(new $a({ib:!0})):new is(t.qa)).L=t.H,e}function Fs(){}function Us(){if(xr&&!(10<=Number(Pr)))throw Error("Environmental error: no available transport.")}function qs(t,e){ai.call(this),this.g=new ms(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!or(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!or(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Vs(this)}function Bs(t){zi.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hs(){Yi.call(this),this.status=1}function Vs(t){this.g=t}(On=is.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Hi(this.u):Hi(Xi),this.g.onreadystatechange=Qn(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void cs(this,t)}t=n||"";var i=new fa(this.headers);r&&ha(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=us,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Xn.FormData&&t instanceof Xn.FormData,!(0<=rr(os,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ps(this),0<this.B&&((this.K=function(t){return xr&&Nr()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qn(this.pa,this)):this.A=wi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){cs(this,t)}},On.pa=function(){void 0!==Vn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,si(this,"timeout"),this.abort(8))},On.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,si(this,"complete"),si(this,"abort"),fs(this))},On.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fs(this,!0)),is.Z.M.call(this)},On.Fa=function(){this.s||(this.F||this.v||this.l?hs(this):this.cb())},On.cb=function(){hs(this)},On.ba=function(){try{return 2<ds(this)?this.g.status:-1}catch(t){return-1}},On.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},On.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rs(e)}},On.Da=function(){return this.m},On.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(On=ms.prototype).ma=8,On.G=1,On.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},On.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Wi(this,this.h,t,void 0),n=this.s;if(this.P&&(n?yr(n=vr(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var a=this.l[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=Ss(this,e,r),xa(i=ya(this.F),"RID",t),xa(i,"CVER",22),this.D&&xa(i,"X-HTTP-Session-Id",this.D),Is(this,i),this.o&&n&&gs(i,this.o,n),Xa(this.i,e),this.Ra&&xa(i,"TYPE","init"),this.ja?(xa(i,"$req",r),xa(i,"SID","null"),e.$=!0,ta(e,i,null)):ta(e,i,r),this.G=2}}else 3==this.G&&(t?Ts(this,t):0==this.l.length||Ba(this.i)||Ts(this))},On.Ga=function(){if(this.u=null,Ls(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fi(Qn(this.bb,this),t)}},On.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Mi(10),ks(this),Ls(this))},On.ab=function(){null!=this.v&&(this.v=null,ks(this),As(this),Mi(19))},On.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Mi(2)):(this.h.info("Failed to ping google.com"),Mi(1))},(On=Fs.prototype).xa=function(){},On.wa=function(){},On.va=function(){},On.ua=function(){},On.Oa=function(){},Us.prototype.g=function(t,e){return new qs(t,e)},tr(qs,ai),qs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vi(Qn(t.hb,t,e))),Mi(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ms(t,null,t.W),Es(t)},qs.prototype.close=function(){bs(this.g)},qs.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,xs(this.g,e)}else this.v?((e={}).__data__=ui(t),xs(this.g,e)):xs(this.g,t)},qs.prototype.M=function(){this.g.j=null,delete this.j,bs(this.g),delete this.g,qs.Z.M.call(this)},tr(Bs,zi),tr(Hs,Yi),tr(Vs,Fs),Vs.prototype.xa=function(){si(this.g,"a")},Vs.prototype.wa=function(t){si(this.g,new Bs(t))},Vs.prototype.va=function(t){si(this.g,new Hs(t))},Vs.prototype.ua=function(){si(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,qs.prototype.send=qs.prototype.u,qs.prototype.open=qs.prototype.m,qs.prototype.close=qs.prototype.close,Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,qi.COMPLETE="complete",Vi.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",ai.prototype.listen=ai.prototype.N,is.prototype.listenOnce=is.prototype.O,is.prototype.getLastError=is.prototype.La,is.prototype.getLastErrorCode=is.prototype.Da,is.prototype.getStatus=is.prototype.ba,is.prototype.getResponseJson=is.prototype.Qa,is.prototype.getResponseText=is.prototype.ga,is.prototype.send=is.prototype.ea;Hn.createWebChannelTransport=function(){return new Us},Hn.getStatEventTarget=function(){return Ri()},Hn.ErrorCode=Ui,Hn.EventType=qi,Hn.Event=Li,Hn.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hn.FetchXmlHttpFactory=$a,Hn.WebChannel=Vi,Hn.XhrIo=is,i("6qd2L");var Xs="@firebase/firestore",Ks=function(){"use strict";function e(n){t(et)(this,e),this.uid=n}return t(nt)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(t){return t.uid===this.uid}}]),e}();Ks.UNAUTHENTICATED=new Ks(null),Ks.GOOGLE_CREDENTIALS=new Ks("google-credentials-uid"),Ks.FIRST_PARTY=new Ks("first-party-uid"),Ks.MOCK_USER=new Ks("mock-user");
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
var zs="9.8.3",Ys=new(0,xt.Logger)("@firebase/firestore");
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
 */function Gs(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Ys.logLevel<=xt.LogLevel.DEBUG){var a,s=r.map(Js);(a=Ys).debug.apply(a,["Firestore (".concat(zs,"): ").concat(e)].concat(t(It)(s)))}}function Ws(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Ys.logLevel<=xt.LogLevel.ERROR){var a,s=r.map(Js);(a=Ys).error.apply(a,["Firestore (".concat(zs,"): ").concat(e)].concat(t(It)(s)))}}function Js(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function $s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",e="FIRESTORE (".concat(zs,") INTERNAL ASSERTION FAILED: ")+t;throw Ws(e),new Error(e)}function Qs(t,e){t||$s()}
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
var Zs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},to=function(e){"use strict";t(Fn)(r,e);var n=t(qn)(r);function r(e,i){var a;return t(et)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(Un)(a)}return r}(Et.FirebaseError),eo=function e(){"use strict";var n=this;t(et)(this,e),this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))},no=function e(n,r){"use strict";t(et)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},ro=function(){"use strict";function e(){t(et)(this,e)}return t(nt)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(Ks.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),io=function(){"use strict";function e(n){t(et)(this,e),this.t=n,this.currentUser=Ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return t(nt)(e,[{key:"start",value:function(e,n){var r=this,i=this.i,o=function(t){return r.i!==i?(i=r.i,n(t)):Promise.resolve()},u=new eo;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),u.resolve(),u=new eo,e.enqueueRetryable((function(){return o(t.currentUser)}))};var c=function(){var n=u,i=r;e.enqueueRetryable(t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.promise;case 2:return t.next=4,o(i.currentUser);case 4:case"end":return t.stop()}}),e)}))))},l=function(t){Gs("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=t,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(t){return l(t)})),setTimeout((function(){if(!r.auth){var t=r.t.getImmediate({optional:!0});t?l(t):(Gs("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new eo)}}),0),c()}},{key:"getToken",value:function(){var t=this,e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return t.i!==e?(Gs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),t.getToken()):n?(Qs("string"==typeof n.accessToken),new no(n.accessToken,t.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var t=this.auth&&this.auth.getUid();return Qs(null===t||"string"==typeof t),new Ks(t)}}]),e}(),ao=function e(n,r,i){"use strict";t(et)(this,e),this.type="FirstParty",this.user=Ks.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);var a=n.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)},so=function(){"use strict";function e(n,r,i){t(et)(this,e),this.h=n,this.l=r,this.m=i}return t(nt)(e,[{key:"getToken",value:function(){return Promise.resolve(new ao(this.h,this.l,this.m))}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(Ks.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),oo=function e(n){"use strict";t(et)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},uo=function(){"use strict";function e(n){t(et)(this,e),this.g=n,this.forceRefresh=!1,this.appCheck=null,this.p=null}return t(nt)(e,[{key:"start",value:function(t,e){var n=this;this.o=function(r){t.enqueueRetryable((function(){return function(t){null!=t.error&&Gs("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(t.error.message));var r=t.token!==n.p;return n.p=t.token,Gs("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?e(t.token):Promise.resolve()}(r)}))};var r=function(t){Gs("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=t,n.appCheck.addTokenListener(n.o)};this.g.onInit((function(t){return r(t)})),setTimeout((function(){if(!n.appCheck){var t=n.g.getImmediate({optional:!0});t?r(t):Gs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var t=this,e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((function(e){return e?(Qs("string"==typeof e.token),t.p=e.token,new oo(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
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
function co(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var lo=function(){"use strict";function e(){t(et)(this,e)}return t(nt)(e,null,[{key:"I",value:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=co(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length));return n}}]),e}();function ho(t,e){return t<e?-1:t>e?1:0}
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
var fo=function(){"use strict";function e(n,r,i){t(et)(this,e),void 0===r?r=0:r>n.length&&$s(),void 0===i?i=n.length-r:i>n.length-r&&$s(),this.segments=n,this.offset=r,this.len=i}return t(nt)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(t){n.push(t)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(t){return this.segments[this.offset+t]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"isImmediateParentOf",value:function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"forEach",value:function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),a=e.get(r);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}]),e}(),po=function(e){"use strict";t(Fn)(r,e);var n=t(qn)(r);function r(){return t(et)(this,r),n.apply(this,arguments)}return t(nt)(r,[{key:"construct",value:function(t,e,n){return new r(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],s=!0,o=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new to(Zs.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,t(It)(f.split("/").filter((function(t){return t.length>0}))))}}catch(t){o=!0,u=t}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(fo),vo=function(){"use strict";function e(n){t(et)(this,e),this.path=n}return t(nt)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(t){return null!==t&&0===po.comparator(this.path,t.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(po.fromString(t))}},{key:"fromName",value:function(t){return new e(po.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(po.emptyPath())}},{key:"comparator",value:function(t,e){return po.comparator(t.path,e.path)}},{key:"isDocumentKey",value:function(t){return t.length%2==0}},{key:"fromSegments",value:function(t){return new e(new po(t.slice()))}}]),e}(),go=function e(n,r,i,a){"use strict";t(et)(this,e),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */go.UNKNOWN_ID=-1;function yo(t){return"IndexedDbTransactionError"===t.name}var mo=function(){"use strict";function e(n,r){var i=this;t(et)(this,e),this.previousValue=n,r&&(r.sequenceNumberHandler=function(t){return i.it(t)},this.rt=function(t){return r.writeSequenceNumber(t)})}return t(nt)(e,[{key:"it",value:function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}},{key:"next",value:function(){var t=++this.previousValue;return this.rt&&this.rt(t),t}}]),e}();
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
mo.ot=-1;var bo=function(){"use strict";function e(n,r){t(et)(this,e),this.comparator=n,this.root=r||wo.EMPTY}return t(nt)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,wo.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wo.BLACK,null,null))}},{key:"get",value:function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}},{key:"indexOf",value:function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(t){return this.root.inorderTraversal(t)}},{key:"forEach",value:function(t){this.inorderTraversal((function(e,n){return t(e,n),!1}))}},{key:"toString",value:function(){var t=[];return this.inorderTraversal((function(e,n){return t.push("".concat(e,":").concat(n)),!1})),"{".concat(t.join(", "),"}")}},{key:"reverseTraversal",value:function(t){return this.root.reverseTraversal(t)}},{key:"getIterator",value:function(){return new ko(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(t){return new ko(this.root,t,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new ko(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(t){return new ko(this.root,t,this.comparator,!0)}}]),e}(),ko=function(){"use strict";function e(n,r,i,a){t(et)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(nt)(e,[{key:"getNext",value:function(){var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}]),e}(),wo=function(){"use strict";function e(n,r,i,a,s){t(et)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(nt)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}},{key:"reverseTraversal",value:function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(t,e,n){var r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}},{key:"moveRedLeft",value:function(){var t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}},{key:"moveRedRight",value:function(){var t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}},{key:"checkMaxDepth",value:function(){var t=this.check();return Math.pow(2,t)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw $s();if(this.right.isRed())throw $s();var t=this.left.check();if(t!==this.right.check())throw $s();return t+(this.isRed()?0:1)}}]),e}();wo.EMPTY=null,wo.RED=!0,wo.BLACK=!1,wo.EMPTY=new(function(){"use strict";function e(){t(et)(this,e),this.size=0}return t(nt)(e,[{key:"key",get:function(){throw $s()}},{key:"value",get:function(){throw $s()}},{key:"color",get:function(){throw $s()}},{key:"left",get:function(){throw $s()}},{key:"right",get:function(){throw $s()}},{key:"copy",value:function(t,e,n,r,i){return this}},{key:"insert",value:function(t,e,n){return new wo(t,e)}},{key:"remove",value:function(t,e){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(t){return!1}},{key:"reverseTraversal",value:function(t){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
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
var xo=function(){"use strict";function e(n){t(et)(this,e),this.comparator=n,this.data=new bo(this.comparator)}return t(nt)(e,[{key:"has",value:function(t){return null!==this.data.get(t)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(t){return this.data.indexOf(t)}},{key:"forEach",value:function(t){this.data.inorderTraversal((function(e,n){return t(e),!1}))}},{key:"forEachInRange",value:function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}},{key:"forEachWhile",value:function(t,e){var n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(t){var e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}},{key:"getIterator",value:function(){return new Eo(this.data.getIterator())}},{key:"getIteratorFrom",value:function(t){return new Eo(this.data.getIteratorFrom(t))}},{key:"add",value:function(t){return this.copy(this.data.remove(t).insert(t,!0))}},{key:"delete",value:function(t){return this.has(t)?this.copy(this.data.remove(t)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(t){var e=this;return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var t=[];return this.forEach((function(e){t.push(e)})),t}},{key:"toString",value:function(){var t=[];return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),Eo=function(){"use strict";function e(n){t(et)(this,e),this.iter=n}return t(nt)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();var To=Symbol.iterator,Io=function(){"use strict";function e(n){t(et)(this,e),this.binaryString=n}return t(nt)(e,[{key:To,value:function(){var t=this,e=0;return{next:function(){return e<t.binaryString.length?{value:t.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var t;return t=this.binaryString,btoa(t)}},{key:"toUint8Array",value:function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(t){return ho(this.binaryString,t.binaryString)}},{key:"isEqual",value:function(t){return this.binaryString===t.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))}}]),e}();
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
 */Io.EMPTY_BYTE_STRING=new Io("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function So(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function _o(t){return"string"==typeof t?Io.fromBase64String(t):Io.fromUint8Array(t)}
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
var Ao=function e(n,r,i,a,s,o,u,c){"use strict";t(et)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.useFetchStreams=c},Co=function(){"use strict";function e(n,r){t(et)(this,e),this.projectId=n,this.database=r||"(default)"}return t(nt)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();function Lo(t){return 0===t&&1/t==-1/0}function Do(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}var Ro,No;(No=Ro||(Ro={}))[No.OK=0]="OK",No[No.CANCELLED=1]="CANCELLED",No[No.UNKNOWN=2]="UNKNOWN",No[No.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",No[No.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",No[No.NOT_FOUND=5]="NOT_FOUND",No[No.ALREADY_EXISTS=6]="ALREADY_EXISTS",No[No.PERMISSION_DENIED=7]="PERMISSION_DENIED",No[No.UNAUTHENTICATED=16]="UNAUTHENTICATED",No[No.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",No[No.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",No[No.ABORTED=10]="ABORTED",No[No.OUT_OF_RANGE=11]="OUT_OF_RANGE",No[No.UNIMPLEMENTED=12]="UNIMPLEMENTED",No[No.INTERNAL=13]="INTERNAL",No[No.UNAVAILABLE=14]="UNAVAILABLE",No[No.DATA_LOSS=15]="DATA_LOSS";
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
new bo(vo.comparator);
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
 */new bo(vo.comparator);new bo(vo.comparator),new xo(vo.comparator);new xo(ho);var Oo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Po=(t(It)(Oo).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Mo=Po;
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
 */t(It)(Mo).concat(["indexConfiguration","indexState","indexEntries"]);
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
 */var jo=function(){"use strict";function e(){t(et)(this,e)}return t(nt)(e,[{key:"re",value:function(t,e){this.oe(t,e),e.ue()}},{key:"oe",value:function(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(So(t.integerValue));else if("doubleValue"in t){var n=So(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Lo(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){var r=t.timestampValue;this.ce(e,20),"string"==typeof r?e.he(r):(e.he("".concat(r.seconds||"")),e.ae(r.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(_o(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){var i=t.geoPointValue;this.ce(e,45),e.ae(i.latitude||0),e.ae(i.longitude||0)}else"mapValue"in t?Do(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):$s()}},{key:"le",value:function(t,e){this.ce(e,25),this.ge(t,e)}},{key:"ge",value:function(t,e){e.he(t)}},{key:"we",value:function(t,e){var n=t.fields||{};this.ce(e,55);var r=!0,i=!1,a=void 0;try{for(var s,o=Object.keys(n)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.le(u,e),this.oe(n[u],e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"me",value:function(t,e){var n=t.values||[];this.ce(e,50);var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.oe(u,e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"_e",value:function(t,e){var n=this;this.ce(e,37),vo.fromName(t).path.forEach((function(t){n.ce(e,60),n.ge(t,e)}))}},{key:"ce",value:function(t,e){t.ae(e)}},{key:"fe",value:function(t){t.ae(2)}}]),e}();jo.ye=new jo;
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
var Fo=function(){"use strict";function e(n,r,i){t(et)(this,e),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return t(nt)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
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
 */Fo.DEFAULT_COLLECTION_PERCENTILE=10,Fo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fo.DEFAULT=new Fo(41943040,Fo.DEFAULT_COLLECTION_PERCENTILE,Fo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fo.DISABLED=new Fo(-1,0,0);function Uo(){return"undefined"!=typeof document?document:null}
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
 */var qo=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;t(et)(this,e),this.js=n,this.timerId=r,this.lo=i,this.fo=a,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}return t(nt)(e,[{key:"reset",value:function(){this.wo=0}},{key:"po",value:function(){this.wo=this._o}},{key:"Io",value:function(t){var e=this;this.cancel();var n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&Gs("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.wo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(function(){return e.yo=Date.now(),t()})),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}},{key:"Eo",value:function(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}},{key:"cancel",value:function(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}},{key:"To",value:function(){return(Math.random()-.5)*this.wo}}]),e}();
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
var Bo=function(){"use strict";function e(n,r,i,a,s){t(et)(this,e),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new eo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(t){}))}return t(nt)(e,[{key:"start",value:function(t){var e=this;this.timerHandle=setTimeout((function(){return e.handleDelayElapsed()}),t)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new to(Zs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}},{key:"handleDelayElapsed",value:function(){var t=this;this.asyncQueue.enqueueAndForget((function(){return null!==t.timerHandle?(t.clearTimeout(),t.op().then((function(e){return t.deferred.resolve(e)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var s=new e(t,n,Date.now()+r,i,a);return s.start(r),s}}]),e}();function Ho(t,e){if(Ws("AsyncQueue","".concat(e,": ").concat(t)),yo(t))return new to(Zs.UNAVAILABLE,"".concat(e,": ").concat(t));throw t}
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
var Vo=function(){"use strict";function e(n,r,i,o){var u=this;t(et)(this,e);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=o,this.user=Ks.UNAUTHENTICATED,this.clientId=lo.I(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(c=t(a)(t(s).mark((function e(n){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Gs("FirestoreClient","Received user=",n.uid),t.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return t.stop()}}),e)}))),function(t){return c.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(t){return Gs("FirestoreClient","Received new app check token=",t),u.appCheckCredentialListener(t,u.user)}))}return t(nt)(e,[{key:"getConfiguration",value:function(){var e=this;return t(a)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(t){this.authCredentialListener=t}},{key:"setAppCheckTokenChangeListener",value:function(t){this.appCheckCredentialListener=t}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new to(Zs.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new eo,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(t(a)(t(s).mark((function r(){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=n.onlineComponents,!t.t0){t.next=5;break}return t.next=5,n.onlineComponents.terminate();case 5:if(t.t1=n.offlineComponents,!t.t1){t.next=9;break}return t.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),e.resolve(),t.next=18;break;case 14:t.prev=14,t.t2=t.catch(0),i=Ho(t.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return t.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
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
 */var Xo=new Map;
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
var Ko=function(){"use strict";function e(n){var r;if(t(et)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new to(Zs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new to(Zs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new to(Zs.INVALID_ARGUMENT,"".concat(t," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return t(nt)(e,[{key:"isEqual",value:function(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}]),e}(),zo=function(){"use strict";function e(n,r,i){t(et)(this,e),this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ko({}),this._settingsFrozen=!1,n instanceof Co?this._databaseId=n:(this._app=n,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new to(Zs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(t.options.projectId)}(n))}return t(nt)(e,[{key:"app",get:function(){if(!this._app)throw new to(Zs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(t){if(this._settingsFrozen)throw new to(Zs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ko(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ro;switch(t.type){case"gapi":var e=t.client;return Qs(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new so(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new to(Zs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return t=this,(e=Xo.get(t))&&(Gs("ComponentProvider","Removing Datastore"),Xo.delete(t),e.terminate()),Promise.resolve();var t,e}}]),e}();
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
var Yo=function(){"use strict";function e(){var n=this;t(et)(this,e),this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new qo(this,"async_queue_retry"),this.Kc=function(){var t=Uo();t&&Gs("AsyncQueue","Visibility state changed to "+t.visibilityState),n.So.Eo()};var r=Uo();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Kc)}return t(nt)(e,[{key:"isShuttingDown",get:function(){return this.Fc}},{key:"enqueueAndForget",value:function(t){this.enqueue(t)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(t){this.Gc(),this.Qc(t)}},{key:"enterRestrictedMode",value:function(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;var e=Uo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}},{key:"enqueue",value:function(t){var e=this;if(this.Gc(),this.Fc)return new Promise((function(){}));var n=new eo;return this.Qc((function(){return e.Fc&&e.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(t){var e=this;this.enqueueAndForget((function(){return e.Mc.push(t),e.jc()}))}},{key:"jc",value:function(){var e=this;return t(a)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.Mc.length){t.next=14;break}return t.prev=1,t.next=4,e.Mc[0]();case 4:e.Mc.shift(),e.So.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),yo(t.t0)){t.next=12;break}throw t.t0;case 12:Gs("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.Mc.length>0&&e.So.Io((function(){return e.jc()}));case 14:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"Qc",value:function(t){var e=this,n=this.Oc.then((function(){return e.Lc=!0,t().catch((function(t){var n,r;throw e.Bc=t,e.Lc=!1,Ws("INTERNAL UNHANDLED ERROR: ",(r=(n=t).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),t})).then((function(t){return e.Lc=!1,t}))}));return this.Oc=n,n}},{key:"enqueueAfterDelay",value:function(t,e,n){var r=this;this.Gc(),this.qc.indexOf(t)>-1&&(e=0);var i=Bo.createAndSchedule(this,t,e,n,(function(t){return r.Wc(t)}));return this.$c.push(i),i}},{key:"Gc",value:function(){this.Bc&&$s()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var e=this;return t(a)(t(s).mark((function n(){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Oc,t.next=4,r;case 4:if(r!==e.Oc){t.next=1;break}case 5:case"end":return t.stop()}}),n)})))()}},{key:"Hc",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){if(i.value.timerId===t)return!0}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Jc",value:function(t){var e=this;return this.zc().then((function(){e.$c.sort((function(t,e){return t.targetTimeMs-e.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,s=e.$c[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;if(o.skipDelay(),"all"!==t&&o.timerId===t)break}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return e.zc()}))}},{key:"Yc",value:function(t){this.qc.push(t)}},{key:"Wc",value:function(t){var e=this.$c.indexOf(t);this.$c.splice(e,1)}}]),e}();var Go=function(e){"use strict";t(Fn)(r,e);var n=t(qn)(r);function r(e,i,a){var s;return t(et)(this,r),(s=n.call(this,e,i,a)).type="firestore",s._queue=new Yo,s._persistenceKey="name"in e?e.name:"[DEFAULT]",t(Un)(s)}return t(nt)(r,[{key:"_terminate",value:function(){return this._firestoreClient||Wo(this),this._firestoreClient.terminate()}}]),r}(zo);
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
 */function Wo(t){var e,n,r,i,a,s=t._freezeSettings(),o=(n=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",i=t._persistenceKey,new Ao(n,r,i,(a=s).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));t._firestoreClient=new Vo(t._authCredentials,t._appCheckCredentials,t._queue,o)}new RegExp("[~\\*/\\[\\]]");!function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=wt.SDK_VERSION,zs=e,(0,wt._registerComponent)(new(0,Tt.Component)("firestore",(function(t,e){var r=e.options,i=t.getProvider("app").getImmediate(),a=new Go(i,new io(t.getProvider("auth-internal")),new uo(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a}),"PUBLIC")),(0,wt.registerVersion)(Xs,"3.4.10",t),(0,wt.registerVersion)(Xs,"3.4.10","esm2017")}();var Jo,$o=(0,mt.initializeApp)({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),Qo=(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,wt.getApp)();t=(0,Et.getModularInstance)(t);var e=(0,wt._getProvider)(t,He);e.isInitialized()?e.getImmediate():Ln(t)}($o),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,wt.getApp)();(0,wt._getProvider)(t,"firestore").getImmediate()}($o),(0,Pn.getAuth)()),Zo=document.querySelector("#btnLogin"),tu=document.querySelector("#btnSignup"),eu=document.querySelector("#user-email"),nu=document.querySelector("#user-name"),ru=document.querySelector("[data-modal]"),iu=document.querySelector("#user-login"),au=document.querySelector("#user-library"),su=document.querySelector("#user-logout"),ou=(Jo=t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=eu.value,i=nu.value,t.prev=3,t.next=6,(0,Pn.signInWithEmailAndPassword)(Qo,r,i).then((function(t){t&&(ru.classList.toggle("is-hidden"),eu.value="",nu.value="",console.log(t)),console.log("btnclick loginEmailPassword")}));case 6:t.sent,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0),lu(t.t0);case 13:case"end":return t.stop()}}),e,null,[[3,9]])}))),function(t){return Jo.apply(this,arguments)});Zo.addEventListener("click",ou);var uu,cu=(uu=t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=eu.value,i=nu.value,e.prev=3,e.next=6,(0,Pn.createUserWithEmailAndPassword)(Qo,r,i).then(function(){var e=t(a)(t(s).mark((function e(n){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ru.classList.toggle("is-hidden");case 1:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),i.length<7?T.Notify.info("Your password have less than 6 characters"):(console.log(e.t0),lu(e.t0));case 11:case"end":return e.stop()}}),e,null,[[3,8]])}))),function(t){return uu.apply(this,arguments)});tu.addEventListener("click",cu);var lu=function(t){t.code==Pn.AuthErrorCodes.INVALID_PASSWORD?T.Notify.info("Wrong password. Try again"):T.Notify.info("Error: ".concat(t.message))};(0,Pn.onAuthStateChanged)(Qo,(function(t){t&&(console.log(t),fu())}));var hu=function(){var e=t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,Pn.signOut)(Qo);case 2:fu();case 3:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function fu(){iu.classList.toggle("hidden-link"),au.classList.toggle("hidden-link"),su.classList.toggle("hidden-link")}su.addEventListener("click",hu)}();
//# sourceMappingURL=index.d91cae41.js.map