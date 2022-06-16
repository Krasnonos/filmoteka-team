import createMarkup from './create-library-markup';
import { setCurrentFilmsData } from './current-films-data';

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
const galleryList = document.querySelector('.gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

queueBtn.addEventListener('click', showFilms);
watchedBtn.addEventListener('click', showFilms);
document.addEventListener('DOMContentLoaded', firstShowFilms);

function showFilms(e) {
  const localStorageKey = e.currentTarget.dataset.key;
  const filmsArrayJson = localStorage.getItem(localStorageKey);
  const filmsArray = JSON.parse(filmsArrayJson);

  if (!filmsArray) {
    galleryList.innerHTML = '';
    return;
  }

  galleryList.innerHTML = createMarkup(filmsArray);
  setCurrentFilmsData(filmsArray);
  hidePlaceholder(localStorageKey);
}

function firstShowFilms(e) {
  const localStorageKey = watchedBtn.dataset.key;
  const filmsArrayJson = localStorage.getItem(localStorageKey);
  const filmsArray = JSON.parse(filmsArrayJson);

  if (!filmsArray) {
    galleryList.innerHTML = '';
    return;
  }

  galleryList.innerHTML = createMarkup(filmsArray);
  setCurrentFilmsData(filmsArray);
  hidePlaceholder(localStorageKey);
}

function hidePlaceholder(key) {
  if (key === `watched-films`) {
    watchedPlaceholder.style.display = 'none';
  } else {
    queuePlaceholder.style.display = 'none';
  }
}
