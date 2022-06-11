import { requestPopularMovies } from '../popular-movies/request-popular-movies';
import { createMarkup } from '../popular-movies/create-markup';
import { refs } from '../refs-el/refs-el';
import { setLocalStoragePopular } from '../popular-movies/popular-local-storage';
// document.addEventListener('DOMContentLoaded', ready);
const paginationList = document.querySelector('.pagination');
const cardList = document.querySelector('.gallery-list');

console.log(paginationList);
let currentPage;
async function ready(page = 1) {
  try {
    const response = await requestPopularMovies(page);
    const results = await response.data.results;
    const currentPage = response.data.page;
    const totalPage = response.data.total_pages;
    cardList.innerHTML='';
    refs.galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(results));
    setLocalStoragePopular(results);
    console.log(response);
    renderPagination(currentPage, totalPage);
  } catch (error) {
    refs.galleryListEl.insertAdjacentHTML(
      'afterbegin',
      '<li class="gallery-list__error">No connection to server!!!</li>'
    );
  }
}
ready();
function renderPagination (page, totalPage) {
  // const linkArrowLeftRef = document.querySelector('.pagination__arrow--left');
  // const linkArrowRightRef = document.querySelector('.pagination__arrow--right');
  // totalPage = 20;
  currentPage = page;
let paginationMarkup = '';
let beforeTwoPage = page - 2;
let beforePage = page - 1;
let afterTwoPage = page + 2;
let afterPage = page + 1;
// paginationNumberListRef.addEventListener('click', ready);
//   linkArrowRightRef.addEventListener('click', ready);
//   linkArrowLeftRef.addEventListener('click', ready);

if (page > 1) {
  paginationMarkup += `<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>`
}
if (page > 2) {
  paginationMarkup += `<li class="pagination__number">1</li>`;
}
if (page > 4) {
  paginationMarkup += `<li class="pagination__number ">...</li>`;
}

if (page > 3) {
  paginationMarkup += `<li class="pagination__number">${beforeTwoPage}</li>`;
}

if (page >= 2) {
  paginationMarkup += `<li class="pagination__number">${beforePage}</li>`;
}

paginationMarkup += `<li class="pagination__number active">${page}</li>`;
if (page < totalPage - 1) {
  paginationMarkup += `<li class="pagination__number">${afterPage}</li>`;
}
if (page < totalPage - 2) {
paginationMarkup += `<li class="pagination__number">${afterTwoPage}</li>`;
}
if (page <= totalPage - 1) {
  
  if (page < totalPage - 3) {
  paginationMarkup += `<li class="pagination__number">...</li>`
  }
  paginationMarkup += `<li class="pagination__number">${totalPage}</li>`
}


if (page < totalPage) {
  paginationMarkup += `<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>`;
}

paginationList.innerHTML = paginationMarkup;
 
paginationList.addEventListener('click', onPagination);
// paginationNumberListRef.addEventListener('click', onPagination);
  // linkArrowRightRef.addEventListener('click', onPagination);
  // linkArrowLeftRef.addEventListener('click', onPagination);

}


function onPagination (e) {
  if (e.target.nodeName !== `LI` ) {
    return;
  }
 const target = e.target.textContent;

switch ( target) {
 case  '«': 
ready(currentPage - 1);
break
case  '»': 
ready(currentPage + 1);
break

case '...':
  break;

 default: ready(target);

 
}
} 





// export function pagination() {
// const linkArrowLeftRef = document.querySelector('.pagination__arrow--left');
//   const linkArrowRightRef = document.querySelector('.pagination__arrow--right');
//   const paginationNumberListRef = document.querySelector('.pagination__number-list');

// let current_page =1;
// let pageNum = 5;


// }
// const per_page_max = 1000; // Максимальное кол-во страниц
// let current_page = 5; // Текущая страница
// const btns = document.querySelector('.pagination__number-list');

// function appendBtn(i, ellipsis) {
//   const activeBtn = current_page === i;
//   const button = document.createElement('button');
//   button.classList.add('pagination__number');
//   if (ellipsis === true) {
//     button.innerHTML = '...';
//     button.disabled = true;
//     btns.append(button);
//     return false;
//   }
//   if (activeBtn) {
//     button.classList.add('pagination__number--active');
//   }
//   button.disabled = activeBtn;
//   button.innerHTML = i;
//   button.addEventListener('click', () => {
//     current_page = i;
//     btns.innerHTML = '';
//     logic();
//   });
//   btns.append(button);

// }
 
// logic();

// function logic() {

//   // это лево
//   appendBtn(1);
//   appendBtn(2);
//   // это лево

//   // это середина
//   if (current_page < 6) {
//     appendBtn(3);
//     appendBtn(4);
//     appendBtn(5);
//     appendBtn(6);
//     appendBtn(7);
//     appendBtn(current_page, true);
//   } else if (current_page <= per_page_max - 5) {
//     appendBtn(current_page, true);
//     appendBtn(current_page - 2);
//     appendBtn(current_page - 1);
//     appendBtn(current_page);
//     appendBtn(current_page + 1);
//     appendBtn(current_page + 2);
//     appendBtn(current_page, true);
//   } else {
//     appendBtn(current_page, true);
//     appendBtn(per_page_max - 6);
//     appendBtn(per_page_max - 5);
//     appendBtn(per_page_max - 4);
//     appendBtn(per_page_max - 3);
//     appendBtn(per_page_max - 2);
//   }
//   // это середина

//   // это право
//   appendBtn(per_page_max - 1);
//   appendBtn(per_page_max);
//   // это право
// }
