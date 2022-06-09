import getFilmsDataFromService from './get-films-data-from-service';
import filmCartTemplate from '../../hbs-templates/film-card-library.hbs';

const libraryListEl = document.querySelector('.gallery-list');

libraryListEl.addEventListener('click', removeCard);

async function removeCard(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const filmId = e.target.dataset.filmid;
  const localStorageKey = findLocalStorageKey();
  const newFilmsIdArray = removeCardFromLocalStorage(filmId, localStorageKey);
  const filmsDataArray = await newFilmsIdArray.map(filmId =>
    getFilmsDataFromService(filmId)
  );
  const newFilmsMarkup = filmsDataArray
    .map(filmData => filmCartTemplate(filmData))
    .join('');
  libraryListEl.innerHTML = newFilmsMarkup;
}

function findLocalStorageKey() {
  const currentPage = document.querySelector(
    'button[data-current="currentPage"]'
  );
  return currentPage.dataset.key;
}

function removeCardFromLocalStorage(filmIdToRemove, localStorageKey) {
  const filmsIdArray = JSON.parse(localStorage.getItem(localStorageKey));
  const filteredFilmId = filmsIdArray.filter(
    filmId => filmId !== filmIdToRemove
  );
  localStorage.setItem(localStorageKey, JSON.stringify(filteredFilmId));
  return filteredFilmId;
}
