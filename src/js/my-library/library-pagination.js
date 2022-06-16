import getPartOfFilms from './get-part-of-films';
import hidePlaceholder from './my-library';
import createMarkup from './create-library-markup';
import { setCurrentFilmsData } from './current-films-data';

const watchedBtn = document.querySelector('#watched');
const paginationList = document.querySelector('.pagination');
const galleryList = document.querySelector('.gallery-list');

let currentPage = Number(1);

export default function renderPagination(pageNum, totalPage) {
  const page = Number(pageNum);
  const totalPageNum = Number(totalPage);
  currentPage = Number(page);
  let paginationMarkup = '';
  let beforeTwoPage = page - Number(1);
  let beforePage = page - Number(1);
  let afterTwoPage = page + Number(2);
  let afterPage = page + Number(1);

  if (page > 1) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>`;
  }
  if (page > 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">1</li>`;
  }
  if (page > 4) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">...</li>`;
  }

  if (page > 3) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${beforeTwoPage}</li>`;
  }

  if (page >= 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${beforePage}</li>`;
  }

  paginationMarkup += `<li name="pagin-search-item" class="pagination__number active">${page}</li>`;
  if (page < totalPage - 1) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${afterPage}</li>`;
  }
  if (page < totalPage - 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${afterTwoPage}</li>`;
  }
  if (page <= totalPage - 1) {
    if (page < totalPage - 3) {
      paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">...</li>`;
    }
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">${totalPageNum}</li>`;
  }

  if (page < totalPage) {
    paginationMarkup += `<li name="pagin-search-item" class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>`;
  }

  paginationList.innerHTML = paginationMarkup;
  paginationList.addEventListener('click', paginationNext);

  //   refs.paginationList.removeEventListener('click', onPagination);
  //   refs.paginationList.addEventListener('click', onPaginationSearch);
}

function paginationNext(e) {
  if (e.target.nodeName !== `LI`) {
    return;
  }

  const target = e.target.textContent;
  window.scrollTo({ top: 240, behavior: 'smooth' });
  switch (target) {
    case '←':
      showFilms(currentPage - 1);
      break;
    case '→':
      showFilms(currentPage + 1);
      break;

    case '...':
      break;

    default:
      showFilms(Number(target));
  }
}

function showFilms(page) {
  const localStorageKey = watchedBtn.dataset.key;
  const filmsArrayJson = localStorage.getItem(localStorageKey);
  const filmsArray = JSON.parse(filmsArrayJson);
  const partOffilms = getPartOfFilms(filmsArray, page);

  const totalPage = Math.ceil(filmsArray.length / 20);
  renderPagination(page, totalPage);

  if (!filmsArray) {
    galleryList.innerHTML = '';
    return;
  }
  console.log(partOffilms);
  galleryList.innerHTML = createMarkup(partOffilms);
  setCurrentFilmsData(partOffilms);
  hidePlaceholder(localStorageKey);
}
